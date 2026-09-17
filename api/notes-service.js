// api/notes-service.js
// Fetches and searches NEB notes from Firestore (notesData collection) & local static notes
// Injects relevant chapter/subject content as grounding context for Gemini AI

const fs = require("fs");
const path = require("path");

// Firebase project details — same key used in js/firebase-config.js
const FIREBASE_API_KEY =
  process.env.FIREBASE_API_KEY || "AIzaSyCbVzplSn0UL2KRB3B45SCByJSm2FXPByw";
const FIRESTORE_BASE_URL =
  `https://firestore.googleapis.com/v1/projects/eduboost-f611f/databases/(default)/documents/notesData` +
  `?pageSize=300&key=${FIREBASE_API_KEY}`;

let notesMemoryCache = null;
let cacheExpiry = 0;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Parses a Firestore REST API document field into normal JS primitives
 */
function parseFirestoreFields(fields = {}) {
  const parsed = {};
  for (const [key, valueObj] of Object.entries(fields)) {
    if (valueObj.stringValue !== undefined) {
      parsed[key] = valueObj.stringValue;
    } else if (valueObj.booleanValue !== undefined) {
      parsed[key] = valueObj.booleanValue;
    } else if (valueObj.integerValue !== undefined) {
      parsed[key] = parseInt(valueObj.integerValue, 10);
    } else if (valueObj.arrayValue !== undefined) {
      parsed[key] = (valueObj.arrayValue.values || []).map(
        (v) => v.stringValue || Object.values(v)[0] || "",
      );
    } else if (valueObj.timestampValue !== undefined) {
      parsed[key] = valueObj.timestampValue;
    }
  }
  return parsed;
}

/**
 * Parses raw Firestore document objects into clean note objects
 */
function parseDocuments(documents = []) {
  return documents.map((doc) => {
    const fields = parseFirestoreFields(doc.fields || {});
    return {
      id: doc.name ? doc.name.split("/").pop() : "",
      title: fields.title || "",
      subject: fields.subject || "",
      chapter: fields.chapter || "",
      class: fields.class || "",
      summary: fields.summary || "",
      tags: Array.isArray(fields.tags) ? fields.tags : [],
      content: fields.content || "",
      externalUrl: fields.externalUrl || "",
    };
  });
}

/**
 * Reads local static notes files if available (fallback / offline support)
 */
function loadLocalStaticNotes() {
  const localNotes = [];
  try {
    const staticNotesPath = path.resolve(__dirname, "../js/static-notes.js");
    if (fs.existsSync(staticNotesPath)) {
      const code = fs.readFileSync(staticNotesPath, "utf8");
      // Extract window.staticNotes array safely
      const sandbox = { window: {} };
      const vm = require("vm");
      vm.createContext(sandbox);
      vm.runInContext(code, sandbox, { timeout: 1000 });
      if (Array.isArray(sandbox.window.staticNotes)) {
        localNotes.push(...sandbox.window.staticNotes);
      }
    }
  } catch (err) {
    // Non-fatal fallback
  }
  return localNotes;
}

/**
 * Loads ALL notes from Firestore REST API with pagination and in-memory caching.
 * Firestore REST returns at most pageSize docs per call; we follow nextPageToken
 * until all pages are exhausted or we hit the overall timeout budget.
 */
async function getAllNotes() {
  const now = Date.now();
  if (notesMemoryCache && cacheExpiry > now) {
    return notesMemoryCache;
  }

  const notes = [];
  // 1. Fetch ALL live Firestore notesData pages (follows nextPageToken)
  try {
    const FETCH_DEADLINE = Date.now() + 6000; // 6 s total budget
    let nextUrl = FIRESTORE_BASE_URL;

    while (nextUrl && Date.now() < FETCH_DEADLINE) {
      const controller = new AbortController();
      const pageTimeout = setTimeout(() => controller.abort(), 4000);
      let res;
      try {
        res = await fetch(nextUrl, { signal: controller.signal });
      } finally {
        clearTimeout(pageTimeout);
      }

      if (!res.ok) {
        console.warn(`[notes-service] Firestore REST error ${res.status}: ${await res.text().catch(() => "")}`);
        break;
      }

      const data = await res.json();

      if (Array.isArray(data.documents)) {
        notes.push(...parseDocuments(data.documents));
      }

      // Follow pagination token if present
      if (data.nextPageToken) {
        nextUrl = `${FIRESTORE_BASE_URL}&pageToken=${encodeURIComponent(data.nextPageToken)}`;
      } else {
        nextUrl = null; // All pages exhausted
      }
    }
  } catch (err) {
    console.warn("[notes-service] Firestore fetch failed, falling back to static notes:", err.message);
  }

  // 2. Merge local static notes if any were missed
  const localNotes = loadLocalStaticNotes();
  const existingIds = new Set(notes.map((n) => (n.id || n.title).toLowerCase()));
  for (const ln of localNotes) {
    const key = (ln.id || ln.title || "").toLowerCase();
    if (!existingIds.has(key)) {
      notes.push({
        id: ln.id || "",
        title: ln.title || "",
        subject: ln.subject || "",
        chapter: ln.chapter || "",
        class: ln.class || "",
        summary: ln.summary || "",
        tags: Array.isArray(ln.tags) ? ln.tags : [],
        content: ln.content || "",
        externalUrl: ln.externalUrl || "",
      });
      existingIds.add(key);
    }
  }

  notesMemoryCache = notes;
  cacheExpiry = now + CACHE_TTL_MS;
  return notes;
}

/**
 * Strips HTML tags and collapses whitespace to keep prompt tokens lean
 */
function cleanText(html = "") {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&times;/g, "×")
    .replace(/&Sigma;/g, "Σ")
    .replace(/&plusmn;/g, "±")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Finds the most relevant notes matching subject, chapter, or keywords
 */
async function getRelevantNotesContext({ subject = "", chapter = "", level = "", prompt = "" } = {}) {
  try {
    const allNotes = await getAllNotes();
    if (!allNotes || allNotes.length === 0) return "";

    const cleanSubject = (subject || "").toLowerCase().trim();
    const cleanChapter = (chapter || "").toLowerCase().trim();
    const queryWords = `${chapter} ${prompt}`
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2);

    // Score each note
    const scoredNotes = allNotes.map((note) => {
      let score = 0;
      const noteSubj = (note.subject || "").toLowerCase();
      const noteChap = (note.chapter || "").toLowerCase();
      const noteTitle = (note.title || "").toLowerCase();
      const noteSummary = (note.summary || "").toLowerCase();
      const noteTags = (note.tags || []).join(" ").toLowerCase();

      // Exact subject match
      if (cleanSubject && noteSubj.includes(cleanSubject)) score += 15;
      if (cleanChapter && noteChap.includes(cleanChapter)) score += 30;
      if (cleanChapter && noteTitle.includes(cleanChapter)) score += 25;

      for (const w of queryWords) {
        if (noteChap.includes(w)) score += 8;
        if (noteTitle.includes(w)) score += 6;
        if (noteTags.includes(w)) score += 4;
        if (noteSummary.includes(w)) score += 2;
      }

      return { note, score };
    });

    scoredNotes.sort((a, b) => b.score - a.score);
    const topMatches = scoredNotes.filter((item) => item.score > 5).slice(0, 3);

    if (topMatches.length === 0) {
      // Fallback: match by subject if available
      const subjectMatches = scoredNotes.filter((item) => item.score > 0).slice(0, 2);
      if (subjectMatches.length === 0) return "";
      topMatches.push(...subjectMatches);
    }

    const contextBlocks = topMatches.map(({ note }) => {
      const summarySnippet = note.summary ? note.summary.slice(0, 350) : "";
      const rawContent = cleanText(note.content || "");
      const contentSnippet = rawContent ? rawContent.slice(0, 600) : "";

      return `
📘 NOTE TOPIC: ${note.title || note.chapter} [${note.subject} Class ${note.class || level}]
Summary: ${summarySnippet}
${contentSnippet ? `Key Syllabus Concepts: ${contentSnippet}` : ""}
`.trim();
    });

    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OFFICIAL NEB EDUBOOST NOTES GROUNDING CONTEXT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${contextBlocks.join("\n\n")}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();
  } catch (err) {
    return "";
  }
}

module.exports = {
  getAllNotes,
  getRelevantNotesContext,
};

// ═══════════════════════════════════════════════════════════════════
// EduBoost Nepal — Local Dev Server
// Serves both:
//   Static files from _site/ (Eleventy output)
//   API routes from api/  (/api/gemini, /api/contact, /api/subscribe)
// Usage: node dev-server.js  (or: npm run local)
// ═══════════════════════════════════════════════════════════════════

require("dotenv").config({ path: ".env.local" });

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_DIR = path.join(__dirname, "_site");

// Body parsing
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// API route wrapper — re-requires on every call so file changes apply immediately
function makeApiRoute(servicePath) {
  return async (req, res) => {
    delete require.cache[require.resolve(servicePath)];
    const { handler } = require(servicePath);
    const event = {
      httpMethod: req.method,
      headers: req.headers,
      body: typeof req.body === "string" ? req.body : JSON.stringify(req.body),
      queryStringParameters: req.query || {},
      isBase64Encoded: false,
    };
    try {
      const result = await handler(event, {});
      if (result.headers) Object.entries(result.headers).forEach(([k, v]) => res.setHeader(k, v));
      res.status(result.statusCode).send(result.body);
    } catch (err) {
      console.error("[API Error]", err);
      res.status(500).json({ error: "Internal server error: " + err.message });
    }
  };
}

app.all("/api/gemini",    makeApiRoute("./api/gemini-service.js"));
app.all("/api/contact",   makeApiRoute("./api/contact-service.js"));
app.all("/api/subscribe", makeApiRoute("./api/subscribe-service.js"));

// cleanUrls static serving
app.use((req, res, next) => {
  let p = req.path;
  if (p !== "/" && p.endsWith("/")) p = p.slice(0, -1);
  const tries = [
    path.join(SITE_DIR, p),
    path.join(SITE_DIR, p + ".html"),
    path.join(SITE_DIR, p, "index.html"),
  ];
  for (const f of tries) {
    if (fs.existsSync(f) && fs.statSync(f).isFile()) return res.sendFile(f);
  }
  next();
});

app.use(express.static(SITE_DIR));

app.use((req, res) => {
  const f404 = path.join(SITE_DIR, "404.html");
  if (fs.existsSync(f404)) return res.status(404).sendFile(f404);
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log("\n  EduBoost Nepal Dev Server — http://localhost:" + PORT);
  console.log("  Static: _site/   API: /api/gemini /api/contact /api/subscribe\n");
});

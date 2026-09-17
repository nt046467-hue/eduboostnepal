// ═══════════════════════════════════════════════════════════════════
// OPTIMIZED TOKEN USAGE - SVG TEMPLATE REFERENCE SYSTEM
// Removes ~60% of token bloat from system prompts by referencing templates
// instead of embedding full SVG code in every API request.
// ═══════════════════════════════════════════════════════════════════
const { SVG_TEMPLATES_REFERENCE_TEXT } = require("./svg-templates.js");
const { getTutorSystemPrompt } = require("./prompts/tutor.js");
const { getQuestionGenSystemPrompt } = require("./prompts/question-gen.js");
const { getAnswerGenSystemPrompt } = require("./prompts/answer-gen.js");
const { getRelevantNotesContext } = require("./notes-service.js");

exports.handler = async function (event, context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "ok",
        message: "Gemini function is reachable.",
      }),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { ...corsHeaders, Allow: "POST, OPTIONS, GET" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  // ─────────────────────────────────────────────────────────────────
  // FIREBASE TOKEN VERIFICATION
  // Rejects requests that don't carry a valid Firebase ID token.
  // This stops random people from draining your Gemini quota.
  // ─────────────────────────────────────────────────────────────────
  const authHeader = event.headers["authorization"] || event.headers["Authorization"] || "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!idToken) {
    return {
      statusCode: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Please log in or sign up for a free EduBoost account to use AI tools.",
      }),
    };
  }

  try {
    const firebaseApiKey =
      process.env.FIREBASE_API_KEY || "AIzaSyCbVzplSn0UL2KRB3B45SCByJSm2FXPByw";
    const verifyUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseApiKey}`;
    const verifyRes = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyRes.ok || verifyData.error || !verifyData.users?.[0]) {
      throw new Error(verifyData.error?.message || "Invalid token");
    }
  } catch (err) {
    return {
      statusCode: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Unauthorized: " + err.message }),
    };
  }
  // ─────────────────────────────────────────────────────────────────

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (err) {
    return {
      statusCode: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON payload." }),
    };
  }

  const {
    prompt,
    mode: inputMode = "tutor",
    answerStyle = "Board Exam Style",
    subject = "",
    marks = 5,
    level = "Grade 12",
    chapter = "",
    difficulty = "Medium",
    mcqCount = 10,
    questionType = "Mixed",
  } = payload;

  if (!prompt || typeof prompt !== "string") {
    return {
      statusCode: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing or invalid prompt." }),
    };
  }

  // Normalize mode to: "tutor", "question-gen", "answer-gen"
  let mode = inputMode;
  if (inputMode === "chat") mode = "tutor";
  else if (
    inputMode === "question" ||
    inputMode === "short_question" ||
    inputMode === "long_question" ||
    inputMode === "mixed_question" ||
    inputMode === "mcq"
  ) {
    mode = "question-gen";
  } else if (inputMode === "answer") {
    mode = "answer-gen";
  }
  if (!["tutor", "question-gen", "answer-gen"].includes(mode)) {
    mode = "tutor";
  }

  // Requirement 2: For question-gen and answer-gen (and tutor when specified),
  // fetch relevant chapter/subject content from existing notes data as grounding context
  let groundingNotes = "";
  if (mode === "question-gen" || mode === "answer-gen" || chapter) {
    try {
      groundingNotes = await getRelevantNotesContext({
        subject,
        chapter,
        level,
        prompt,
      });
    } catch (e) {
      console.warn("Grounding notes fetch error:", e.message);
      groundingNotes = "";
    }
  }

  // Select system prompt and temperature based on mode
  let systemPrompt;
  let temperature;

  if (mode === "question-gen") {
    systemPrompt = getQuestionGenSystemPrompt({
      subject,
      level,
      chapter,
      questionType: inputMode === "mcq" ? "MCQ" : questionType,
      count: mcqCount || 5,
      groundingNotes,
    });
    temperature = 0.4;
  } else if (mode === "answer-gen") {
    systemPrompt = getAnswerGenSystemPrompt({
      subject,
      level,
      marks,
      groundingNotes,
    });
    temperature = 0.35;
  } else {
    // tutor mode
    systemPrompt = getTutorSystemPrompt({
      subject,
      level,
      groundingNotes,
    });
    temperature = 0.6;
  }

  // ─────────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────────
  // SVG STRATEGY
  // Benzene/aromatic: AI draws the reaction SVG itself (reactant → arrow → product)
  // Echem + Ladder: server fetches from Supabase and injects via placeholder tags
  const ELECTROCHEM_SVG_URL =
    "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/chemistry/electrochemistry_class12.svg";
  const LADDER_SVG_URL =
    "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/ladder_sliding_refined.svg";
  const POTENTIO_BASIC_SVG_URL =
    "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/potentiometer_diagram.svg";
  const POTENTIO_EMF_SVG_URL =
    "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/potentiometer_emf_comparison.svg";
  const POTENTIO_INT_SVG_URL =
    "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/potentiometer_internal_resistance.svg";
  const KVL_SVG_URL =
    "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/kvl_kirchhoff_voltage_law.svg";
  const WHEATSTONE_SVG_URL =
    "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/wheatstone_bridge.svg";
  const METRE_BRIDGE_SVG_URL =
    "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/metre_bridge.svg";
  const FLOWSHEET_SVG_URL =
    "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/chemistry/industrial_chemistry_flowsheet_template.svg";
  const SPHERE_SVG_URL =
    "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/neb_sphere_balloon_rate_measure.svg";
  const CUBE_SVG_URL =
    "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/neb_cube_rate_measure.svg";
  const SHADOW_SVG_URL =
    "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/neb_shadow_rate_measure_figure.svg";
  const PARABOLA_SVG_URL =
    "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/class12_parabola_neb.svg";
  const BRAGGS_LAW_SVG_URL =
    "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/physics/braggs_law_refined.svg";

  const isAromaticQuestion =
    /benzene|chlorobenzene|phenol|aniline|toluene|nitrobenzene|aromatic|EAS|nitration|halogenation|chlorination|bromination|sulphonation|friedel.crafts|naphthalene|substituent|directing effect|electrophilic substitution/i.test(
      prompt,
    );

  const isElectrochemQuestion =
    /electrochem|electrochemical|galvanic|daniell|voltaic|electrolytic|electrode|anode|cathode|salt bridge|emf|cell potential|redox|half.cell|standard electrode|e\.cell|e°/i.test(
      prompt,
    );

  // Covers ladder + ALL right-angle triangle related-rates: aeroplane, shadow, kite, boat, pole, etc.
  const isLadderQuestion =
    /ladder|sliding.*wall|wall.*sliding|leaning.*wall|wall.*lean|top.*sliding|bottom.*sliding|rate.*ladder|ladder.*rate|aeroplane|airplane|aero.*plane|receding.*ground|ground.*receding|kite.*fly|fly.*kite|kite.*string|shadow.*length|length.*shadow|pole.*shadow|shadow.*pole|man.*walk.*light|walk.*away.*light|street.*lamp|lamp.*post|boat.*dock|dock.*boat|right.angle.*rate|angle.*elevation.*rate|angle.*depression.*rate|angle.*rate/i.test(
      prompt,
    );

  const isRateMeasureQuestion =
    /rate of change|related rate|dV\/dt|dA\/dt|dr\/dt|ds\/dt|expanding.*sphere|shrinking.*sphere|filling.*cone|draining|radius.*increasing|radius.*decreasing|surface area.*rate|volume.*rate|balloon.*expand|balloon.*inflat|water.*level.*ris|level.*fall|tank.*fill|tank.*drain/i.test(
      prompt,
    ) && !isLadderQuestion;

  const isSphereQuestion =
    isRateMeasureQuestion && /sphere|balloon|radius|spherical/i.test(prompt);

  const isCubeQuestion =
    isRateMeasureQuestion &&
    /cube|cubic|side.*length|edge.*length|cubical/i.test(prompt) &&
    !/sphere|balloon|cylinder|cone/i.test(prompt);

  const isShadowQuestion =
    /shadow|lamp.*post|street.*light|pole.*shadow|man.*walk.*light|walk.*away.*light/i.test(
      prompt,
    ) && !isLadderQuestion;

  const isParabolaQuestion =
    /parabola|y\s*[²2]\s*=\s*4ax|x\s*[²2]\s*=\s*4ay|conic.*parabola|parabola.*conic|focus.*directrix|directrix.*focus|latus.*rectum|vertex.*focus|standard.*parabola|parabola.*standard|parabolic/i.test(
      prompt,
    ) &&
    mode !== "question-gen";

  const isPotentiometerQuestion =
    /potentiometer|balance.*length|null.*point|jockey|emf.*comparison|compare.*emf|internal.*resistance.*potentio|potentio.*internal/i.test(
      prompt,
    );

  const isWheatstoneBridgeQuestion =
    /wheatstone|wheatstone bridge|wheat.?stone|P\/Q.*R\/S|bridge.*balance|galvanometer.*null|unknown.*resistance.*bridge/i.test(
      prompt,
    );

  const isMetreBridgeQuestion =
    /metre bridge|meter bridge|metre-bridge|slide wire|balance.*point.*bridge|unknown.*resistance.*metre/i.test(
      prompt,
    );

  const isKVLQuestion =
    /kirchhoff|KVL|KCL|loop.*rule|junction.*rule|mesh.*current|kirchhoff.*voltage|kirchhoff.*current|loop.*equation/i.test(
      prompt,
    );

  const isIndustrialChemQuestion =
    /haber|ostwald|contact process|solvay|industrial.*synthesis|manufacture.*ammonia|manufacture.*nitric|manufacture.*sulphuric|manufacture.*sodium carbonate|flowsheet|flow.*sheet|flow.*diagram.*chemistry|industrial.*process|paper.*pulp|pulp.*paper|paper.*manufacturing|paper.*production|paper.*industry|manufacture.*paper|kraft.*process|sulfite.*process|portland.*cement|cement.*manufacture|cement.*production|cement.*industry|manufacture.*cement|production.*cement|dry.*process.*cement|wet.*process.*cement/i.test(
      prompt,
    );

  const isBraggsLawQuestion =
    /bragg|bragg'?s.*law|x.?ray.*diffraction|diffraction.*x.?ray|crystal.*plane|interplanar.*spacing|2d\s*sin|nλ\s*=\s*2d|path.*difference.*crystal|constructive.*interference.*crystal|glancing.*angle|x.ray.*crystal/i.test(
      prompt,
    );

  // Prompt hints — tiny, no token cost
  const diagramHints = [];
  if (isAromaticQuestion && mode !== "question-gen") {
    diagramHints.push(
      '⚠️ AROMATIC DIAGRAM REQUIRED: Draw the complete reaction SVG yourself inside <svg-diagram>...</svg-diagram>. If this is a SINGLE-STEP reaction (halogenation, nitration, sulphonation, Friedel-Crafts): use viewBox="0 0 460 340" — reactant ring → arrow with reagents → product ring. If this is a MULTI-STEP synthesis (e.g. aniline from benzene, TNT from toluene, phenol from benzene): use viewBox="0 0 680 260" — show ALL steps: [Reactant] →(step1)→ [Intermediate] →(step2)→ [Product]. Follow the MULTI-STEP TEMPLATE in the SVG SYSTEM section. Do NOT output a placeholder.',
    );
  }
  if (isElectrochemQuestion && mode !== "question-gen") {
    diagramHints.push(
      "⚠️ For the electrochemical cell diagram, output exactly: <use-echem-diagram/> — the server will inject the real SVG.",
    );
  }
  if (isLadderQuestion && mode !== "question-gen") {
    // Detect sub-type so the AI draws the correct right-triangle figure with correct labels
    const isAeroplaneQ =
      /aeroplane|airplane|aero.*plane|receding.*ground|fly.*away/i.test(prompt);
    const isShadowQ = /shadow|lamp.*post|street.*light|pole.*shadow/i.test(
      prompt,
    );
    const isKiteQ = /kite/i.test(prompt);
    const isBoatQ = /boat|dock/i.test(prompt);
    // For classic ladder: use the server-injected SVG (it has the exact wall+floor diagram)
    // For all other right-triangle rate problems: AI draws a custom SVG from the template
    if (!isAeroplaneQ && !isShadowQ && !isKiteQ && !isBoatQ) {
      diagramHints.push(
        "⚠️ DIAGRAM REQUIRED: Output exactly: <use-ladder-diagram/> — the server will inject the ladder SVG with the actual problem values (a, b, c, da/dt, db/dt). Do NOT write [Diagram] or any placeholder. Place it right after the 📊 Final Answer table.",
      );
    } else {
      let title = isAeroplaneQ
        ? "Aeroplane Receding from Ground Point"
        : isShadowQ
          ? "Shadow / Pole Related Rates"
          : isKiteQ
            ? "Kite Rising — Right Triangle"
            : isBoatQ
              ? "Boat Moving Away from Dock"
              : "Right Triangle — Related Rates";
      diagramHints.push(
        `⚠️ RIGHT-TRIANGLE DIAGRAM REQUIRED: Draw the right-angle triangle SVG yourself inside <svg-diagram>...</svg-diagram> using the RIGHT-ANGLE TRIANGLE CANONICAL TEMPLATE in the SVG SYSTEM section. Title: "". Adapt ALL labels (vertex names, side variable names, current values, units, direction arrow, formula) to match this exact problem. NEVER use generic a/b/c — use the real variable names from the question. Place the diagram right after the 📊 Final Answer table.`,
      );
    }
  }
  if (isRateMeasureQuestion && !isLadderQuestion && mode !== "question-gen") {
    if (isSphereQuestion) {
      diagramHints.push(
        "⚠️ SPHERE/BALLOON DIAGRAM: Output exactly: <use-sphere-diagram/> — the server will inject the sphere/balloon SVG. Place it right after the 📊 Final Answer table.",
      );
    } else if (isCubeQuestion) {
      diagramHints.push(
        "⚠️ CUBE DIAGRAM: Output exactly: <use-cube-diagram/> — the server will inject the cube SVG. Place it right after the 📊 Final Answer table.",
      );
    } else {
      diagramHints.push(
        "⚠️ DIAGRAM REQUIRED: This is a rate-of-change/related-rates problem. Draw the geometric shape (cone/cylinder/circle) with labeled dimensions and a colored arrow showing the changing quantity. Follow the RATE MEASURE DIAGRAM SPECS. Output inside <svg-diagram>...</svg-diagram>. NO info boxes — geometric figure only.",
      );
    }
  }
  if (isShadowQuestion && mode !== "question-gen") {
    diagramHints.push(
      "⚠️ SHADOW DIAGRAM: Output exactly: <use-shadow-diagram/> — the server will inject the shadow/lamp-post SVG. Place it right after the 📊 Final Answer table.",
    );
  }
  if (isParabolaQuestion) {
    diagramHints.push(
      "⚠️ PARABOLA DIAGRAM: Output exactly: <use-parabola-diagram/> — the server will inject the standard parabola figure (y²=4ax) with vertex O(0,0), focus F(a,0), directrix x=−a, axis, and latus rectum labeled. Place it right after your definition/explanation.",
    );
  }
  if (isPotentiometerQuestion && mode !== "question-gen") {
    // Decide which variant based on question content
    const isEMFComparison =
      /compar|ratio|E1.*E2|E₁.*E₂|two.*cell|two.*emf/i.test(prompt);
    const isInternalRes = /internal.*resist|r\s*=|find.*r/i.test(prompt);
    if (isInternalRes) {
      diagramHints.push(
        "⚠️ POTENTIOMETER DIAGRAM: Output exactly: <use-potentio-int-diagram/> — the server will inject the internal resistance diagram. Then write your solution.",
      );
    } else if (isEMFComparison) {
      diagramHints.push(
        "⚠️ POTENTIOMETER DIAGRAM: Output exactly: <use-potentio-emf-diagram/> — the server will inject the EMF comparison diagram. Then write your solution.",
      );
    } else {
      diagramHints.push(
        "⚠️ POTENTIOMETER DIAGRAM: Output exactly: <use-potentio-basic-diagram/> — the server will inject the potentiometer diagram. Then write your solution.",
      );
    }
  }
  if (isWheatstoneBridgeQuestion && mode !== "question-gen") {
    diagramHints.push(
      "⚠️ WHEATSTONE BRIDGE DIAGRAM: Output exactly: <use-wheatstone-diagram/> — the server will inject the Wheatstone bridge diagram. Then write your solution with P/Q = R/S.",
    );
  }
  if (isMetreBridgeQuestion && mode !== "question-gen") {
    diagramHints.push(
      "⚠️ METRE BRIDGE DIAGRAM: Output exactly: <use-metre-bridge-diagram/> — the server will inject the metre bridge diagram. Then write your solution with R = S·ℓ/(100−ℓ).",
    );
  }
  if (isKVLQuestion && mode !== "question-gen") {
    diagramHints.push(
      "⚠️ KVL DIAGRAM: Output exactly: <use-kvl-diagram/> — the server will inject the Kirchhoff's circuit diagram. Then write your loop equations.",
    );
  }
  if (isBraggsLawQuestion && mode !== "question-gen") {
    diagramHints.push(
      "⚠️ BRAGG'S LAW DIAGRAM: Output exactly: <use-braggs-law-diagram/> — the server will inject the X-ray diffraction diagram showing crystal planes, incident/reflected beams at angle θ, path difference 2d sinθ, and the formula nλ = 2d sinθ. Place it right after your explanation.",
    );
  }
  // Paper & Pulp is industrial but NOT a chemistry reaction process — AI draws it inline
  const isPaperPulpQuestion =
    /paper.*pulp|pulp.*paper|paper.*manufacturing|paper.*production|paper.*industry|manufacture.*paper|kraft.*process|sulfite.*process/i.test(
      prompt,
    );

  const isPortlandCementQuestion =
    /portland.*cement|cement.*manufacture|cement.*production|cement.*industry|manufacture.*cement|production.*cement|dry.*process.*cement|wet.*process.*cement/i.test(
      prompt,
    );

  if (isIndustrialChemQuestion && mode !== "question-gen") {
    if (isPaperPulpQuestion) {
      diagramHints.push(
        '⚠️ PAPER & PULP FLOWSHEET REQUIRED: Draw the complete industrial process flowsheet SVG yourself inside <svg-diagram>...</svg-diagram>. Use viewBox="0 0 460 580". Follow the INDUSTRIAL PROCESS FLOWSHEET template structure (boxes with arrows top-to-bottom): Raw Materials (Wood Logs) → Chipping → Pulping (Chemical/Mechanical) → Screening → Washing → Bleaching → Refining → Stock Preparation → Paper Machine (Forming/Pressing/Drying) → Cutting & Finishing → Final Product (Paper). Label each step box, show side inputs (chemicals, steam, water) as side arrows. Use the same dark-theme styling as the Haber flowsheet template. Do NOT use a placeholder.',
      );
    } else if (isPortlandCementQuestion) {
      diagramHints.push(
        '⚠️ PORTLAND CEMENT FLOWSHEET REQUIRED: Draw the complete industrial process flowsheet SVG yourself inside <svg-diagram>...</svg-diagram>. Use viewBox="0 0 460 560". Follow the INDUSTRIAL PROCESS FLOWSHEET template structure (boxes with arrows top-to-bottom): Raw Materials (Limestone + Clay) → Crushing & Grinding → Mixing (Dry/Wet Process) → Kiln (Burning at ~1450°C) → Clinker Formation → Cooling → Grinding with Gypsum → Final Product (Portland Cement / OPC). Label each step box, show side inputs (fuel, air, gypsum) as side arrows. Note the dry vs wet process difference. Use the same dark-theme styling as the Haber flowsheet template. Do NOT use a placeholder.',
      );
    } else {
      diagramHints.push(
        "⚠️ INDUSTRIAL FLOWSHEET: Output exactly: <use-flowsheet-diagram/> — the server will inject the industrial process flowsheet. Then write your answer describing the process steps, conditions, and equations.",
      );
    }
  }

  // Build the final prompt with student request clearly separated
  const mcqContextLine =
    inputMode === "mcq"
      ? `\nGENERATE THE ${mcqCount} MOST IMPORTANT NEB BOARD EXAM MCQs FOR: ${chapter || prompt.trim()} — ${level} ${subject || ""}\nPrioritize TIER 1 (🔴 Very Important) topics first. Every MCQ must reflect actual NEB paper frequency and student difficulty patterns.\n`
      : "";

  // For chat mode, the prompt already contains the full conversation history
  const chatContextHeader =
    mode === "tutor"
      ? `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCONVERSATION HISTORY (most recent at the bottom):\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`
      : "";

  const fullPrompt = [
    systemPrompt.trim(),
    "",
    mode === "tutor"
      ? chatContextHeader
      : "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    mode === "tutor" ? "" : "STUDENT REQUEST:",
    mode === "tutor"
      ? ""
      : "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    mcqContextLine,
    ...diagramHints,
    prompt.trim(),
  ].join("\n");

  // Fetch SVGs in parallel WHILE the AI is generating — zero extra wait time
  // Benzene/aromatic: AI draws reaction SVG itself — no fetch needed
  const fetchSvg = (url) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2000);
    return fetch(url, { signal: controller.signal })
      .then((r) => (r.ok ? r.text() : null))
      .catch(() => null)
      .finally(() => clearTimeout(timer));
  };

  const [
    ,
    echemSvg,
    ladderSvg,
    potentioBasicSvg,
    potentioEmfSvg,
    potentioIntSvg,
    kvlSvg,
    wheatstoneSvg,
    metreBridgeSvg,
    flowsheetSvg,
    sphereSvg,
    cubeSvg,
    shadowSvg,
    parabolaSvg,
    braggsLawSvg,
  ] = await Promise.all([
    Promise.resolve(null),
    isElectrochemQuestion && mode !== "question-gen"
      ? fetchSvg(ELECTROCHEM_SVG_URL)
      : Promise.resolve(null),
    isLadderQuestion && mode !== "question-gen"
      ? fetchSvg(LADDER_SVG_URL)
      : Promise.resolve(null),
    isPotentiometerQuestion && mode !== "question-gen"
      ? fetchSvg(POTENTIO_BASIC_SVG_URL)
      : Promise.resolve(null),
    isPotentiometerQuestion && mode !== "question-gen"
      ? fetchSvg(POTENTIO_EMF_SVG_URL)
      : Promise.resolve(null),
    isPotentiometerQuestion && mode !== "question-gen"
      ? fetchSvg(POTENTIO_INT_SVG_URL)
      : Promise.resolve(null),
    isKVLQuestion && mode !== "question-gen"
      ? fetchSvg(KVL_SVG_URL)
      : Promise.resolve(null),
    isWheatstoneBridgeQuestion && mode !== "question-gen"
      ? fetchSvg(WHEATSTONE_SVG_URL)
      : Promise.resolve(null),
    isMetreBridgeQuestion && mode !== "question-gen"
      ? fetchSvg(METRE_BRIDGE_SVG_URL)
      : Promise.resolve(null),
    isIndustrialChemQuestion && mode !== "question-gen"
      ? fetchSvg(FLOWSHEET_SVG_URL)
      : Promise.resolve(null),
    isSphereQuestion && mode !== "question-gen"
      ? fetchSvg(SPHERE_SVG_URL)
      : Promise.resolve(null),
    isCubeQuestion && mode !== "question-gen"
      ? fetchSvg(CUBE_SVG_URL)
      : Promise.resolve(null),
    isShadowQuestion && mode !== "question-gen"
      ? fetchSvg(SHADOW_SVG_URL)
      : Promise.resolve(null),
    isParabolaQuestion ? fetchSvg(PARABOLA_SVG_URL) : Promise.resolve(null),
    isBraggsLawQuestion && mode !== "question-gen"
      ? fetchSvg(BRAGGS_LAW_SVG_URL)
      : Promise.resolve(null),
  ]);

  const maxTokens = inputMode === "mcq" ? 2000 : mode === "tutor" ? 1500 : 2500;

  // ─────────────────────────────────────────────────────────────────
  // HELPER — is this error a quota/overload worth trying next model?
  // ─────────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────────
  // POST-PROCESS — swap placeholder tags with real SVGs,
  // wrap bare <svg> tags in <svg-diagram>, strip code fences around SVG
  // ─────────────────────────────────────────────────────────────────
  function postProcessResponse(text) {
    if (!text) return text;

    // 0. SERVER-SIDE LATEX SCRUBBING — catch whatever the AI sneaks through
    // Strip display math \[...\] and inline math \(...\)
    text = text.replace(/\\\[([^\]]*?)\\\]/g, (_, inner) => inner.trim());
    text = text.replace(/\\\(([^)]*?)\\\)/g, (_, inner) => inner.trim());
    // Strip $...$ inline math (careful not to eat currency — only when content looks like math)
    text = text.replace(/\$([^$\n]{1,120}?)\$/g, (_, inner) => inner.trim());
    // Strip $$...$$ display math
    text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, inner) => inner.trim());
    // Convert \frac{a}{b} → (a/b)
    text = text.replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, "($1/$2)");
    // Convert \sqrt{x} → √x
    text = text.replace(/\\sqrt\{([^}]*)\}/g, "√$1");
    // Convert \text{...} → plain text (e.g. \text{cm}^2 → cm²)
    text = text.replace(/\\text\{([^}]*)\}/g, "$1");
    // Convert \approx → ≈
    text = text.replace(/\\approx\b/g, "≈");
    // Convert ^2 → ² and ^3 → ³ when not inside SVG
    text = text.replace(/\^2(?![^<]*>)/g, "²");
    text = text.replace(/\^3(?![^<]*>)/g, "³");
    // 0a. SUBSCRIPT UNDERSCORE SCRUBBER — convert r_0 → r₀, v_f → vf, etc. (outside SVG tags)
    // Common physics/math subscript patterns: letter_digit or letter_letter
    const subMap = {
      0: "₀",
      1: "₁",
      2: "₂",
      3: "₃",
      4: "₄",
      5: "₅",
      6: "₆",
      7: "₇",
      8: "₈",
      9: "₉",
    };
    text = text.replace(
      /([a-zA-Zα-ωΑ-Ω])_([0-9])(?![^<]*>)/g,
      (_, base, digit) => base + (subMap[digit] || digit),
    );
    // For word subscripts like v_final → v_final leave as-is (too risky to auto-convert)
    // But strip isolated bare underscores that look like LaTeX math mode: _x or _\{x\}
    text = text.replace(/_\{([^}]{1,20})\}/g, "$1"); // _{abc} → abc
    // Strip remaining ec{} or \hat{} commands
    text = text.replace(/\\vec\{([^}]*)\}/g, "$1⃗");
    text = text.replace(/\\hat\{([^}]*)\}/g, "$1̂");
    // Strip remaining \left and \right
    text = text.replace(/\\(left|right)[\(\)\[\]\{\}|.]/g, "");
    // Strip \mathrm{}, \mathbf{}, \mathit{}
    text = text.replace(/\\math(?:rm|bf|it|cal)\{([^}]*)\}/g, "$1");
    // Strip \begin{...}...\end{...} environments
    text = text.replace(/\\begin\{[^}]+\}[\s\S]*?\\end\{[^}]+\}/g, "");
    // (curly brace and pipe stripping handled by system prompt rules only)
    // Strip remaining backslash commands like \times \cdot \left \right \alpha etc.
    text = text.replace(
      /\\(times|cdot|left|right|quad|,|;|!)/g,
      (_, cmd) =>
        ({
          times: "×",
          cdot: "·",
          left: "",
          right: "",
          quad: " ",
          ",": "",
          ";": "",
          "!": "",
        })[cmd] || "",
    );
    text = text.replace(/\\([a-zA-Z]+)/g, (match, cmd) => {
      const greek = {
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        Delta: "Δ",
        epsilon: "ε",
        theta: "θ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        pi: "π",
        rho: "ρ",
        sigma: "σ",
        phi: "φ",
        omega: "ω",
        Omega: "Ω",
      };
      return greek[cmd] || match; // only replace known greek, leave unknown as-is to avoid breaking SVG
    });

    // 0b. NUMERICAL FORMAT NORMALIZER
    // Detects wrong markdown structure (## Principle / ### Given / bullet lists)
    // and rewrites it into the ③ NUMERICAL emoji format the system prompt demands.
    // Only fires when the response looks like a structured math answer but uses ## headings.
    if (
      /^##\s+\S/.test(text.trim()) && // starts with ## heading
      /###\s*(given|formula|solution|find)/i.test(text) && // has ### subsections
      !/\*\*[📌📋🔍📐🔢📊]/.test(text) // no emoji headers yet
    ) {
      // Extract sections by heading
      const getSection = (label) => {
        const m = text.match(
          new RegExp(
            `###\\s*${label}[:\\s]*([\\s\\S]*?)(?=###|##\\s|⚡|$)`,
            "i",
          ),
        );
        return m ? m[1].trim() : "";
      };

      // Principle / concept line
      const principleRaw =
        getSection("principle") || getSection("concept") || "";
      const principleLines = principleRaw
        .split("\n")
        .filter((l) => l.trim())
        .map((l) => l.replace(/^[-*•]\s*/, "").trim())
        .join(" ");

      // Given block — convert bullet list to → symbol = value unit lines
      const givenRaw = getSection("given");
      const givenLines = givenRaw
        .split("\n")
        .filter((l) => l.trim())
        .map((l) => l.replace(/^[-*•]\s*/, "").trim())
        .filter((l) => l)
        .map((l) => `→ ${l}`)
        .join("\n");

      // Formula block
      const formulaRaw = getSection("formula");
      const formulaLines = formulaRaw
        .split("\n")
        .filter((l) => l.trim())
        .map((l) => l.replace(/^[-*•]\s*/, "").trim())
        .filter((l) => l)
        .map((l) => `→ ${l}`)
        .join("\n");

      // Solution block — rewrite Step N: / **Step N:** into Step N —
      let solutionRaw = getSection("solution");
      solutionRaw = solutionRaw
        .replace(/\*\*Step\s*(\d+)[:.]\*\*\s*/gi, (_, n) => `Step ${n} — `)
        .replace(/^Step\s*(\d+)[:.]\s*/gim, (_, n) => `Step ${n} — `)
        .split("\n")
        .filter((l) => l.trim())
        .map((l) => {
          if (/^Step\s*\d+\s*[—–-]/.test(l)) return l.trim();
          return `→ ${l.replace(/^[-*•]\s*/, "").trim()}`;
        })
        .join("\n");

      // Final answer table — try to extract from ### Final Answer section
      const finalRaw = getSection("final answer") || getSection("answer");
      // Pull table rows if present, else skip
      const tableMatch = finalRaw.match(/\|[^\n]+\|[\s\S]*?\|[^\n]+\|/);
      const finalTable = tableMatch ? tableMatch[0] : "";

      // Rebuild in ③ format
      let rebuilt = "";
      if (principleLines)
        rebuilt += `**📌 Principle:**\n→ ${principleLines}\n\n`;
      if (givenLines) rebuilt += `**📋 Given:**\n${givenLines}\n\n`;
      if (formulaLines) rebuilt += `**📐 Formula:**\n${formulaLines}\n\n`;
      if (solutionRaw) rebuilt += `**🔢 Solution:**\n${solutionRaw}\n\n`;
      if (finalTable) rebuilt += `**📊 Final Answer:**\n${finalTable}\n\n`;
      rebuilt += "⚡ **EduBoost Nepal · NEB Study Resource**";

      text = rebuilt;
    }

    // 0c. Strip verbose "## Step N: ..." preamble blocks the AI adds before the real answer.
    // These are prose reasoning steps — not NEB format. Remove them entirely.
    // Pattern: one or more "## Step N..." sections followed by the real 📌/📋 answer block.
    // Only strip if the real NEB-format answer (📌 or 📋 or 🔢 or 📊) exists later in the text.
    if (/[📌📋🔢📊]/.test(text)) {
      // Remove all ## Step N / ## N: blocks that appear before the first emoji section header
      text = text.replace(
        /^(##\s*(Step\s*)?\d+[:.][^]*?)(?=\s*##\s*[📌📋🔍📐🔢📊✅💡🧠]|\s*\*\*[📌📋🔍📐🔢📊])/im,
        "",
      );
      // Simpler: strip any leading ##-headed paragraphs before first bold emoji line
      text = text.replace(
        /^(?:##[^\n]*\n(?:[^#\n][^\n]*\n)*\n*)+(?=\*\*[📌📋🔍📐🔢📊✅])/m,
        "",
      );
    }

    text = text.replace(/\[Diagram[^\]]*\]/gi, "");
    text = text.replace(/\[SVG[^\]]*\]/gi, "");
    text = text.replace(/\[Figure[^\]]*\]/gi, "");
    text = text.replace(/\(see rendered output\)/gi, "");

    // 1. Swap echem placeholder with Supabase SVG
    if (echemSvg) {
      text = text.replace(
        /<use-echem-diagram\s*\/>/gi,
        `<svg-diagram>\n${echemSvg.trim()}\n</svg-diagram>`,
      );
    }

    // 1a. Swap ladder placeholder with Supabase SVG
    if (ladderSvg) {
      text = text.replace(
        /<use-ladder-diagram\s*\/>/gi,
        `<svg-diagram>\n${ladderSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      // Ladder fetch failed — strip the tag silently
      text = text.replace(/<use-ladder-diagram\s*\/>/gi, "");
    }

    // 1b. Inject potentiometer diagrams
    if (potentioBasicSvg) {
      text = text.replace(
        /<use-potentio-basic-diagram\s*\/>/gi,
        `<svg-diagram>\n${potentioBasicSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-potentio-basic-diagram\s*\/>/gi, "");
    }
    if (potentioEmfSvg) {
      text = text.replace(
        /<use-potentio-emf-diagram\s*\/>/gi,
        `<svg-diagram>\n${potentioEmfSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-potentio-emf-diagram\s*\/>/gi, "");
    }
    if (potentioIntSvg) {
      text = text.replace(
        /<use-potentio-int-diagram\s*\/>/gi,
        `<svg-diagram>\n${potentioIntSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-potentio-int-diagram\s*\/>/gi, "");
    }

    // 1c. Inject Wheatstone bridge
    if (wheatstoneSvg) {
      text = text.replace(
        /<use-wheatstone-diagram\s*\/>/gi,
        `<svg-diagram>\n${wheatstoneSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-wheatstone-diagram\s*\/>/gi, "");
    }

    // 1d. Inject metre bridge
    if (metreBridgeSvg) {
      text = text.replace(
        /<use-metre-bridge-diagram\s*\/>/gi,
        `<svg-diagram>\n${metreBridgeSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-metre-bridge-diagram\s*\/>/gi, "");
    }

    // 1e. Inject KVL diagram
    if (kvlSvg) {
      text = text.replace(
        /<use-kvl-diagram\s*\/>/gi,
        `<svg-diagram>\n${kvlSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-kvl-diagram\s*\/>/gi, "");
    }

    // 1f. Inject industrial flowsheet
    if (flowsheetSvg) {
      text = text.replace(
        /<use-flowsheet-diagram\s*\/>/gi,
        `<svg-diagram>\n${flowsheetSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-flowsheet-diagram\s*\/>/gi, "");
    }

    // 1g. Inject sphere/balloon diagram
    if (sphereSvg) {
      text = text.replace(
        /<use-sphere-diagram\s*\/>/gi,
        `<svg-diagram>\n${sphereSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-sphere-diagram\s*\/>/gi, "");
    }

    // 1h. Inject cube diagram
    if (cubeSvg) {
      text = text.replace(
        /<use-cube-diagram\s*\/>/gi,
        `<svg-diagram>\n${cubeSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-cube-diagram\s*\/>/gi, "");
    }

    // 1i. Inject shadow/lamp-post diagram
    if (shadowSvg) {
      text = text.replace(
        /<use-shadow-diagram\s*\/>/gi,
        `<svg-diagram>\n${shadowSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-shadow-diagram\s*\/>/gi, "");
    }

    // 1j. Inject parabola diagram
    if (parabolaSvg) {
      text = text.replace(
        /<use-parabola-diagram\s*\/>/gi,
        `<svg-diagram>\n${parabolaSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-parabola-diagram\s*\/>/gi, "");
    }

    // 1k. Inject Bragg's Law diagram
    if (braggsLawSvg) {
      text = text.replace(
        /<use-braggs-law-diagram\s*\/>/gi,
        `<svg-diagram>\n${braggsLawSvg.trim()}\n</svg-diagram>`,
      );
    } else {
      text = text.replace(/<use-braggs-law-diagram\s*\/>/gi, "");
    }

    // 1g. Strip any stray <use-benzene-diagram/> the AI accidentally outputs
    text = text.replace(
      /<use-benzene-diagram\s*\/>/gi,
      "<!-- benzene diagram: see reaction above -->",
    );

    // 2. Strip ```svg / ```xml fences wrapping SVG
    text = text.replace(
      /```(?:svg|xml)?\s*\n?(<svg[\s\S]*?<\/svg>)\n?```/gi,
      "$1",
    );

    // 3. Wrap bare <svg> that are NOT already inside <svg-diagram>
    const parts = text.split(/(<svg-diagram>[\s\S]*?<\/svg-diagram>)/g);
    text = parts
      .map((part, i) => {
        if (i % 2 === 1) return part; // already inside svg-diagram, leave alone
        return part.replace(
          /(<svg\b[\s\S]*?<\/svg>)/g,
          "<svg-diagram>\n$1\n</svg-diagram>",
        );
      })
      .join("");

    return text;
  }

  function isRetryableError(status, bodyData) {
    if (
      status === 502 ||
      status === 503 ||
      status === 500 ||
      status === 429 ||
      status === 404
    )
      return true;
    const msg = (bodyData?.error?.message || "").toLowerCase();
    return (
      msg.includes("overloaded") ||
      msg.includes("bad gateway") ||
      msg.includes("high demand") ||
      msg.includes("resource exhausted") ||
      msg.includes("rate limit") ||
      msg.includes("quota") ||
      msg.includes("not found") ||
      msg.includes("not supported") ||
      msg.includes("deprecated") ||
      msg.includes("no longer available")
    );
  }

  // ─────────────────────────────────────────────────────────────────
  // GEMINI CALLER
  // ─────────────────────────────────────────────────────────────────
  async function tryGemini(modelName, geminiApiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(geminiApiKey)}`;
    const body = {
      contents: [{ parts: [{ text: fullPrompt }] }],
      generationConfig: {
        temperature,
        maxOutputTokens: maxTokens,
        topK: 32,
        topP: 0.95,
      },
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_ONLY_HIGH",
        },
      ],
    };

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 18000);
    let response, data;
    try {
      response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      data = await response.json().catch(() => null);
    } finally {
      clearTimeout(timer);
    }

    if (isRetryableError(response.status, data)) {
      return {
        retry: true,
        reason:
          data?.error?.message || `HTTP ${response.status} on ${modelName}`,
      };
    }
    if (!response.ok || data?.error) {
      return {
        retry: false,
        reason: data?.error?.message || `HTTP ${response.status}`,
      };
    }

    const candidate = data?.candidates?.[0];
    if (!candidate) return { retry: true, reason: "No candidate returned" };
    if (candidate.finishReason === "SAFETY")
      return { retry: false, reason: "Blocked by Gemini safety filters." };

    const text = candidate.content?.parts?.[0]?.text;
    if (!text) return { retry: true, reason: "Empty text from Gemini" };

    return { success: true, text: postProcessResponse(text), model: modelName };
  }

  // ─────────────────────────────────────────────────────────────────
  // GROQ CALLER — last-resort fallback
  // Current valid free-tier models:
  //   1. openai/gpt-oss-120b            — flagship open model, top quality
  //   2. openai/gpt-oss-20b             — fast, balanced
  //   3. qwen/qwen3.8-27b               — ultra-fast reasoning
  //   4. groq/compound                  — compound system
  // Groq free tier max_tokens cap: 6000 per request to stay safe
  // ─────────────────────────────────────────────────────────────────
  async function tryGroq(groqApiKey) {
    const GROQ_MODELS = [
      "openai/gpt-oss-120b",
      "openai/gpt-oss-20b",
      "qwen/qwen3.8-27b",
      "groq/compound",
    ];

    // Groq free tier: cap at 6000 to avoid request-level token errors
    const groqMaxTokens = Math.min(maxTokens, 6000);

    for (const model of GROQ_MODELS) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10000);
      let response, data;
      try {
        response = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${groqApiKey}`,
            },
            body: JSON.stringify({
              model,
              messages: [{ role: "user", content: fullPrompt }],
              temperature,
              max_tokens: groqMaxTokens,
            }),
            signal: controller.signal,
          },
        );
        data = await response.json().catch(() => null);
      } finally {
        clearTimeout(timer);
      }

      // 429 rate limit, 502/503 gateway errors, 500 overload — try next model
      if (
        response.status === 429 ||
        response.status === 502 ||
        response.status === 503 ||
        response.status === 500
      )
        continue;
      // Model not found or decommissioned — try next
      if (response.status === 404) continue;
      // Any other non-ok with an error message — try next
      if (!response.ok || data?.error) continue;

      const text = data?.choices?.[0]?.message?.content;
      if (!text) continue;

      return {
        success: true,
        text: postProcessResponse(text),
        model: `groq/${model}`,
      };
    }

    return {
      retry: false,
      reason: "All Groq models failed or quota exhausted.",
    };
  }

  // ─────────────────────────────────────────────────────────────────
  // MAIN EXECUTION — Gemini chain first, then Groq
  // ─────────────────────────────────────────────────────────────────
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const groqApiKey = process.env.GROQ_API_KEY;

  // Best free-tier Gemini models ordered by quality
  const GEMINI_MODELS = [
    "gemini-3.6-flash", // Latest stable high quality — try first
    "gemini-3.5-flash", // Robust fallback
    "gemini-3.5-flash-lite", // Fast lightweight fallback
    "gemini-2.5-flash", // Stable previous generation
  ];

  let lastError = "Unknown error";

  // — Run Gemini and Groq in PARALLEL — whoever wins first gets returned —
  // This avoids sequential timeouts blowing past Netlify's 26s limit
  const geminiPromises = geminiApiKey
    ? GEMINI_MODELS.map((modelName) =>
        tryGemini(modelName, geminiApiKey).catch((err) => ({
          retry: true,
          reason:
            err.name === "AbortError"
              ? `Timeout on ${modelName}`
              : err.message || `Error on ${modelName}`,
        })),
      )
    : [];

  const groqPromise = groqApiKey
    ? tryGroq(groqApiKey).catch((err) => ({
        retry: false,
        reason:
          err.name === "AbortError"
            ? "Groq timeout"
            : err.message || "Groq unknown error",
      }))
    : Promise.resolve({ retry: false, reason: "No Groq key" });

  // Race all models — return first successful result
  const allPromises = [...geminiPromises, groqPromise];

  // We want the first SUCCESS, not just the first settled promise
  const winner = await new Promise((resolve) => {
    let settled = 0;
    const total = allPromises.length;
    let resolved = false;
    const errors = [];
    allPromises.forEach((p) => {
      p.then((result) => {
        settled++;
        if (result.success && !resolved) {
          resolved = true;
          resolve({ winner: result });
        } else {
          if (result.reason) errors.push(result.reason);
          if (settled === total && !resolved) {
            resolved = true;
            resolve({ winner: null, reason: errors.join(" | ") });
          }
        }
      }).catch((err) => {
        settled++;
        errors.push(err.message || String(err));
        if (settled === total && !resolved) {
          resolved = true;
          resolve({ winner: null, reason: errors.join(" | ") });
        }
      });
    });
  });

  if (winner.winner?.success) {
    return {
      statusCode: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({
        text: winner.winner.text,
        model: winner.winner.model,
      }),
    };
  }

  // — Everything failed —
  const finalError = winner.reason || lastError || "Unknown error";
  return {
    statusCode: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    body: JSON.stringify({
      error:
        "All AI models are currently overloaded. Please try again in a few seconds. (" +
        finalError +
        ")",
    }),
  };
};

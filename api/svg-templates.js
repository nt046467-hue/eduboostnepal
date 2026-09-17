/**
 * SVG TEMPLATE REFERENCE SYSTEM
 * Eliminates full SVG code from system prompts
 * Reduces token consumption by ~60% per API call
 *
 * USAGE: Reference by ID instead of including full template code
 * AI generates specific SVGs by combining template specs + question data
 */

const SVG_TEMPLATES = {
  // ════════════════════════════════════════════════════════════════════
  // PHYSICS CIRCUIT DIAGRAMS
  // ════════════════════════════════════════════════════════════════════

  potentiometer_basic: {
    name: "Potentiometer — Basic Principle",
    category: "physics",
    viewBox: "0 0 460 340",
    elements: [
      "Driver cell E (top-left)",
      "Rheostat Rh (top-left after E)",
      "Bus wire A-B (horizontal)",
      "Jockey J at balance point ℓ",
      "Galvanometer G (center)",
      "Unknown EMF ε (bottom)",
    ],
    instructions:
      "Adapt labels with actual question values: E, Rh, ℓ, ε. Formula: ε = φ·ℓ",
    URL: "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/potentiometer_diagram.svg",
  },

  potentiometer_emf_comparison: {
    name: "Potentiometer — EMF Comparison (E₁ vs E₂)",
    category: "physics",
    viewBox: "0 0 460 360",
    elements: [
      "Driver E",
      "Bus A-B",
      "Jockey J₁ at ℓ₁",
      "Jockey J₂ at ℓ₂",
      "Two-position switch",
      "Galvanometer G",
      "E₁ and E₂",
    ],
    instructions: "Fill in actual ℓ₁, ℓ₂ values. Formula: E₁/E₂ = ℓ₁/ℓ₂",
    URL: "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/potentiometer_emf_comparison.svg",
  },

  potentiometer_internal_resistance: {
    name: "Potentiometer — Internal Resistance",
    category: "physics",
    viewBox: "0 0 460 360",
    elements: [
      "Driver E",
      "Bus A-B",
      "J₁ (switch open)",
      "J₂ (switch closed)",
      "Cell ε with resistance r",
      "Formula: r = R(ℓ₁-ℓ₂)/ℓ₂",
    ],
    instructions: "Swap in values for R, ℓ₁, ℓ₂ from the problem",
    URL: "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/potentiometer_internal_resistance.svg",
  },

  wheatstone_bridge: {
    name: "Wheatstone Bridge",
    category: "physics",
    viewBox: "0 0 460 320",
    elements: [
      "Diamond nodes A(top) B(left) C(right) D(bottom)",
      "Arms: P Q R S (resistances)",
      "Galvanometer G across B-C",
      "Battery E",
      "Balance condition: P/Q = R/S",
    ],
    instructions:
      "Adapt P, Q, R, S labels with actual problem values. One of them will be unknown (S)",
    URL: "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/wheatstone_bridge.svg",
  },

  metre_bridge: {
    name: "Metre Bridge",
    category: "physics",
    viewBox: "0 0 460 300",
    elements: [
      "Metre scale bar 0-100 cm",
      "Jockey J at balance point ℓ",
      "Unknown R (left gap)",
      "Known S (right gap)",
      "Galvanometer G",
      "Battery E",
    ],
    instructions:
      "Fill in actual R value, balance length ℓ, S value. Formula: R = S·ℓ/(100−ℓ)",
    URL: "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/metre_bridge.svg",
  },

  kvl_circuit: {
    name: "Kirchhoff's Voltage Law — Multi-loop Circuit",
    category: "physics",
    viewBox: "0 0 460 300",
    elements: [
      "Outer loop rectangle",
      "Middle junction wire (creates two loops)",
      "E₁, E₂ (EMFs)",
      "R₁, R₂, R₃, R₄ (resistances)",
      "Loop direction indicators",
      "KVL equations",
    ],
    instructions:
      "Adapt resistance values and EMF labels to the problem. Write loop equations below diagram",
    URL: "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/physics/electricity%20and%20magnetism/kvl_kirchhoff_voltage_law.svg",
  },

  // ════════════════════════════════════════════════════════════════════
  // MATHEMATICS RATE MEASURE DIAGRAMS
  // ════════════════════════════════════════════════════════════════════

  ladder_sliding: {
    name: "Ladder / Right-angle Triangle — Related Rates",
    category: "math",
    viewBox: "0 0 380 320",
    elements: [
      "Wall (vertical)",
      "Floor (horizontal)",
      "Right-angle marker",
      "Blue diagonal ladder",
      "Height label b with db/dt arrow (red, down)",
      "Base label a with da/dt arrow (orange, right)",
      "Ladder length label c",
    ],
    instructions:
      "MUST adapt ALL labels to match question: vertex names (O, A, P), variable names (h, x, s OR y, z, r), values, units, motion arrows. Right-angle mark always at foot of perpendicular.",
    URL: "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/ladder_sliding_refined.svg",
  },

  sphere_expanding: {
    name: "Sphere / Balloon — Expanding Radius",
    category: "math",
    viewBox: "0 0 460 280",
    elements: [
      "3D sphere outline",
      "Radius r with expanding arrow",
      "Height and width labels",
      "dV/dt and dr/dt indicators",
    ],
    instructions:
      "For balloon/sphere filling/draining: specify dr/dt value and what to find (dV/dt or dA/dt)",
    URL: "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/neb_sphere_balloon_rate_measure.svg",
  },

  cube_expanding: {
    name: "Cube — Growing Side Length",
    category: "math",
    viewBox: "0 0 460 280",
    elements: [
      "3D cube outline",
      "Side length s with growth arrow",
      "dV/dt and ds/dt labels",
    ],
    instructions:
      "Adapt s value and ds/dt value from problem. Show what to find: dV/dt or dA/dt",
    URL: "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/neb_cube_rate_measure.svg",
  },

  shadow_figure: {
    name: "Shadow / Man Walking Away from Lamp-post",
    category: "math",
    viewBox: "0 0 460 300",
    elements: [
      "Lamp-post (vertical)",
      "Man figure",
      "Ground line",
      "Shadow length with rate indicator",
      "Height and distance labels",
    ],
    instructions:
      "Adapt height (lamp-post h, man height), walking speed (dx/dt), shadow length (s). Find ds/dt",
    URL: "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/math/neb_shadow_rate_measure_figure.svg",
  },

  // ════════════════════════════════════════════════════════════════════
  // CHEMISTRY DIAGRAMS
  // ════════════════════════════════════════════════════════════════════

  benzene_reaction_eas: {
    name: "Benzene — EAS Reaction (Aromatic Substitution)",
    category: "chemistry",
    viewBox: "0 0 460 340",
    elements: [
      "Hexagon benzene ring (left) with alternating double bonds",
      "Reaction arrow (center) with REAGENT and CONDITIONS labels in orange",
      "Product benzene ring (right) with NEW substituent at correct position (ortho/para/meta)",
      "EAS Mechanism label (top)",
      "Compound labels below each ring",
    ],
    instructions:
      "CRITICAL: Draw EXACT hexagon (not circle). Show specific reaction asked: nitration→NO₂ ortho-para, halogenation→Cl/Br, Friedel-Crafts→alkyl group. Write balanced equation + reagents + conditions above arrow. State directing effect + position.",
    note: "AI draws this SVG itself for each specific aromatic question — NOT fetched from URL. This is an inline generation template.",
  },

  eas_multistep: {
    name: "Multi-step Aromatic Synthesis (e.g. Aniline from Benzene)",
    category: "chemistry",
    viewBox: "0 0 680 260",
    elements: [
      "Reactant ring (left)",
      "Step 1 arrow + reagents",
      "Intermediate ring (center)",
      "Step 2 arrow + reagents",
      "Product ring (right)",
      "Step labels",
    ],
    instructions:
      "For multi-step: show all intermediate rings as hexagons. E.g., C₆H₆ →(conc. HNO₃/H₂SO₄)→ C₆H₅NO₂ →(Sn/HCl)→ C₆H₅NH₂. Each compound labeled below.",
    note: "AI generates inline for each specific multi-step question.",
  },

  electrochemistry_cell: {
    name: "Electrochemistry — Galvanic/Daniell Cell",
    category: "chemistry",
    viewBox: "0 0 460 340",
    elements: [
      "Two half-cells (beakers)",
      "Electrodes (anode/cathode)",
      "Salt bridge",
      "Electron flow direction",
      "Ion flow labels",
      "Voltmeter",
      "Terminal labeling (+/−)",
    ],
    instructions:
      "Fill in actual metals (Zn, Cu), electrolytes (CuSO₄, ZnSO₄), emf values. Show electron flow (cathode→anode), salt bridge ion flow",
    URL: "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/chemistry/electrochemistry_class12.svg",
  },

  industrial_flowsheet: {
    name: "Industrial Process Flowsheet (Haber, Ostwald, Contact, Solvay)",
    category: "chemistry",
    viewBox: "0 0 460 520",
    elements: [
      "Raw materials box",
      "Purification/compression box",
      "Reaction chamber (central, highlighted)",
      "Cooling/liquefaction box",
      "Product separation box",
      "Final product box",
      "Recycle arrow loop (left side)",
      "Process conditions (temp, pressure, catalyst) inside reactor box",
    ],
    instructions:
      "Adapt for specific process: Haber (N₂+H₂→NH₃), Ostwald (NH₃+O₂→HNO₃), Contact (SO₂+O₂→SO₃), Solvay (CaCO₃+NaCl→Na₂CO₃). Update all box labels, equations, conditions, recycle loop. Show: raw materials→purification→reaction chamber (with catalyst/temp/pressure)→cooling→product separation→final product. Include recycle of unreacted starting material.",
    URL: "https://qgwmplugyjtumeflfsdf.supabase.co/storage/v1/object/public/EduBoost%20Nepal/svg/chemistry/industrial_chemistry_flowsheet_template.svg",
  },

  // ════════════════════════════════════════════════════════════════════
  // COMPUTER SCIENCE DIAGRAMS
  // ════════════════════════════════════════════════════════════════════

  network_topologies_all: {
    name: "All 5 Network Topologies (Bus, Star, Ring, Mesh, Tree)",
    category: "computer",
    viewBox: "0 0 460 490",
    layout: "2+2+1 grid",
    elements: [
      "Top-left: Bus topology (horizontal line with devices)",
      "Top-right: Star topology (central hub with 5 devices)",
      "Mid-left: Ring topology (circular, devices on circle)",
      "Mid-right: Mesh topology (all connected)",
      "Bottom-center: Tree topology (hierarchical)",
    ],
    instructions:
      "Never fit all 5 in one row. Use 2+2+1 grid. Label each clearly. For single topology requested, use viewBox 460x200 instead",
  },

  bus_topology: {
    name: "Bus Topology — Single Device View",
    category: "computer",
    viewBox: "0 0 460 200",
    elements: [
      "Backbone cable (horizontal)",
      "Terminators (ends)",
      "3 devices tapping into backbone",
      "Tap joints marked as circles",
    ],
    instructions:
      "Label devices clearly. Show backbone + terminators + tap points",
  },

  star_topology: {
    name: "Star Topology",
    category: "computer",
    viewBox: "0 0 460 220",
    elements: [
      "Central hub",
      "5 devices around hub",
      "Connection lines from each device to hub",
    ],
    instructions: "Hub in center, all devices radiate outward",
  },

  ring_topology: {
    name: "Ring Topology",
    category: "computer",
    viewBox: "0 0 460 220",
    elements: [
      "Circular ring (dashed)",
      "5 devices on circle",
      "Direction arrow showing data flow",
    ],
    instructions:
      "Devices on circle perimeter. Show unidirectional or bidirectional flow with arrows",
  },

  // ════════════════════════════════════════════════════════════════════
  // BIOLOGY DIAGRAMS
  // ════════════════════════════════════════════════════════════════════

  mitosis_vs_meiosis_stages: {
    name: "Mitosis vs Meiosis — Side-by-Side Comparison",
    category: "biology",
    viewBox: "0 0 640 400",
    elements: [
      "Left column: Prophase→Metaphase→Anaphase→Telophase (Mitosis)",
      "Right column: Prophase I→Metaphase I→Anaphase I→Telophase I, then Prophase II→Metaphase II→Anaphase II→Telophase II (Meiosis)",
      "Chromosome movements shown with arrows",
      "Spindle fibers",
      "Final product: 2 diploid cells (Mitosis) vs 4 haploid cells (Meiosis)",
    ],
    instructions:
      "Show distinct chromosome alignment, spindle orientation, number of divisions, final ploidy level for each",
  },

  photosynthesis_light_dark: {
    name: "Photosynthesis — Light Reactions & Calvin Cycle",
    category: "biology",
    viewBox: "0 0 460 380",
    elements: [
      "Left box: Light reaction in thylakoid",
      "Arrow: H₂O →(light)→ O₂ + H⁺ + e⁻",
      "ATP and NADPH production boxes",
      "Right box: Calvin cycle in stroma",
      "CO₂ fixation (RuBP→3-PG)",
      "Reduction phase (3-PG→G3P)",
      "Regeneration (G3P→RuBP)",
    ],
    instructions:
      "Show location (thylakoid/stroma), inputs, outputs, intermediate molecules (ATP, NADPH, RuBP, 3-PG, G3P)",
  },

  nephron_structure: {
    name: "Nephron — Filtration, Reabsorption, Secretion, Excretion",
    category: "biology",
    viewBox: "0 0 460 400",
    elements: [
      "Bowman's capsule (cup-shaped)",
      "Proximal convoluted tubule (PCT)",
      "Loop of Henle (descending + ascending)",
      "Distal convoluted tubule (DCT)",
      "Collecting duct",
      "Blood flow (in/out)",
      "Filtration arrows (start→Bowman's)",
      "Reabsorption labels (substances, location)",
      "Secretion labels",
    ],
    instructions:
      "Show which substances filtered at each stage. Indicate active/passive transport. Final urine formation",
  },

  braggs_law: {
    name: "Bragg's Law — X-ray Diffraction",
    category: "physics",
    viewBox: "0 0 460 320",
    URL: "https://raw.githubusercontent.com/eduboostnepal-cloud/svg-template/refs/heads/main/physics/braggs_law_refined.svg",
    elements: [
      "Two parallel crystal planes (horizontal lines with atom dots)",
      "Incident X-ray beam 1 hitting top plane at atom A (angle θ)",
      "Incident X-ray beam 2 hitting bottom plane at atom B (angle θ)",
      "Reflected beam 1 from A (angle θ, symmetric)",
      "Reflected beam 2 from B (angle θ, symmetric)",
      "Path difference segment: CB and BD marked along bottom beam",
      "Interplanar spacing d (vertical arrow between planes)",
      "Angle θ label at both incidence and reflection points",
      "Formula label: nλ = 2d sinθ",
    ],
    instructions:
      "Adapt n, λ, d, θ values from the question. Show path difference 2d sinθ geometrically. Highlight constructive interference condition. Use dark theme: lines #e2e8f0, highlights #f97316 for path difference segment.",
  },

  // ════════════════════════════════════════════════════════════════════
  // SIMPLE/GENERIC TEMPLATES
  // ════════════════════════════════════════════════════════════════════

  generic_flowchart: {
    name: "Generic Flowchart Template",
    category: "generic",
    viewBox: "0 0 460 400",
    elements: [
      "Start/End (oval)",
      "Process boxes (rectangle)",
      "Decision diamond",
      "Arrows between elements",
    ],
    instructions:
      "Adapt boxes and arrows to the specific process asked. Use clear labels for each stage",
  },

  generic_comparison_table: {
    name: "Comparison Table Format",
    category: "generic",
    structure: "| Basis | Concept A | Concept B | ",
    instructions:
      "5–8 rows (marks = rows). Keep cells under 10 words each. Include Definition | Key Property | Formula/Equation | Example | Difference/Advantage",
  },
};

/**
 * ════════════════════════════════════════════════════════════════════
 * SYSTEM PROMPT REFERENCE TEXT (REPLACES FULL SVG CODE)
 * ════════════════════════════════════════════════════════════════════
 *
 * This condensed text goes INTO the system prompt instead of 50KB of SVG code
 */

const SVG_TEMPLATES_REFERENCE_TEXT = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SVG DIAGRAM SYSTEM — TEMPLATE-BASED (Mobile-First, Token-Efficient)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ALWAYS wrap SVG in: <svg-diagram>...</svg-diagram>
NEVER use bare <svg> tag without wrapper.
SVG text labels: use plain "AB→" or "AC→" with → (U+2192) — NO combining diacritics inside SVG text elements.

WHEN TO DRAW: circuits, ray diagrams, force diagrams, geometric shapes with changing dimensions (ladder, sphere, cone, cylinder problems), wave patterns, network topologies, flowcharts, aromatic reaction mechanisms, cell/organ cross-sections, BST/tree structures, logic gates.

WHEN NOT TO DRAW: simple definitions, pure formula derivations, short factual answers.

TEMPLATE REFERENCE IDS (use these to generate diagrams):
→ Physics: potentiometer_basic | potentiometer_emf_comparison | wheatstone_bridge | metre_bridge | kvl_circuit | braggs_law
→ Math: ladder_sliding | sphere_expanding | cube_expanding | shadow_figure
→ Chemistry: benzene_reaction_eas | eas_multistep | electrochemistry_cell | industrial_flowsheet
→ Computer: bus_topology | star_topology | ring_topology | network_topologies_all
→ Biology: mitosis_vs_meiosis_stages | photosynthesis_light_dark | nephron_structure

For each template:
1. Get the template ID from the reference table above
2. Adapt element labels to match the question's specific values
3. Keep viewBox dimensions as specified (never change width)
4. Use dark theme: transparent background, lines #e2e8f0, highlights #f97316

AROMATIC REACTIONS (Benzene/EAS):
→ AI generates inline SVG for each specific reaction
→ Use benzene_reaction_eas template: viewBox 460×340, hexagon ring with alternating double bonds
→ Show: reactant benzene + arrow with reagents/conditions + product ring with substituent at correct position
→ Always include COMPLETE balanced equation with reagents and conditions

RATE MEASURE DIAGRAMS (Math — Related Rates):
→ For ladder/right-angle triangle problems: ALWAYS use ladder_sliding template
→ For sphere/balloon problems: use sphere_expanding template
→ For cube problems: use cube_expanding template
→ For shadow/lamp-post problems: use shadow_figure template
→ Adapt ALL variable names, units, and rate arrow labels to the specific problem

viewBox rules:
→ Use specified viewBox for each template — never change width
→ HEIGHT varies by diagram type (see template definitions)
→ All x coordinates: 0–460 (width constant)
→ All y coordinates: 0–HEIGHT (never place elements outside viewBox)

Colors (dark theme):
→ Background: transparent
→ Lines/borders: #e2e8f0 or #64748b
→ Highlights: #f97316 (orange)
→ Nodes: #5a5a7a
→ Text: #e2e8f0 or #94a3b8

KEY OPTIMIZATION RULE:
By referencing templates instead of embedding full SVG code, token consumption per request is reduced by ~60%.
Only generate complete inline SVG for aromatic reactions where custom drawing is essential.
For all other diagrams, fetch template from reference ID and adapt labels only.
`;

module.exports = { SVG_TEMPLATES, SVG_TEMPLATES_REFERENCE_TEXT };

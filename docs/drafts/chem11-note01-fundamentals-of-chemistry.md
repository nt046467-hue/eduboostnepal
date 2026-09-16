# Draft Note: Fundamentals of Chemistry (Class 11 Chemistry — Unit 1)

**Unit:** Unit 1 — Fundamentals of Chemistry  
**Target Class:** NEB Class 11 (Secondary Level Science)  
**Subject:** Chemistry  
**Textbook Reference:** Official CDC Chemistry Grade 11 (*First Edition 2024*), pp. 1–30  
**Publishing Target:** EduBoost Nepal (`pages/admin.html` manual publish / `js/static-notes.js`)  
**Status:** DRAFT FOR HUMAN REVIEW (Read-Only Planning / Content Ingestion Workflow)

---

## 1. Sub-Topic Coverage & Alignment Checklist

All 5 granular sub-topics identified in [`docs/chemistry-content-gap-tracker.md`](file:///c:/Users/Nabin%20thapa/Downloads/EduBoost-Nepal/docs/chemistry-content-gap-tracker.md) are comprehensively addressed:

- [x] **1.1 General Introduction to Chemistry & Historical Transition** (Textbook p. 2)
  - Historical transition: Stone Age &rarr; Bronze Age &rarr; Iron Age &rarr; Carbon/Modern Era.
  - Definition and scope of chemistry as an observational molecular science.
- [x] **1.1.1 Major Divisions & Interdisciplinary Branches of Chemistry** (Textbook p. 3)
  - Core branches: Organic, Inorganic, Physical.
  - Applied/Interdisciplinary: Biochemistry, Nuclear, Analytical, Environmental, Forensic (CIB Nepal), Geochemistry, Medicinal.
- [x] **1.2 Importance and Scope of Chemistry in Everyday Life & Technology** (Textbook p. 7)
  - Applications in agriculture, healthcare/pharmaceuticals, energy, and smart materials (smartphone elemental chemistry).
- [x] **1.3 Foundational Concepts of Matter, Atomic/Molecular Mass & Radicals** (Textbook p. 9)
  - Classification of matter (pure substances vs mixtures; homogeneous vs heterogeneous).
  - Elements, compounds, atoms, molecules, and atomicity classifications.
  - Unified atomic mass unit (u), relative atomic mass, average isotopic mass, molecular mass, and formula unit mass.
  - Ions, radicals (basic/acid radicals), electrovalency, variable valency, and criss-cross formula derivation.
  - Common household chemicals reference table (systematic names and molecular formulas).
- [x] **1.4 Percentage Composition of Elements in Compounds** (Textbook p. 22)
  - Formula derivation, calculation methodology, and comparative agricultural fertilizer efficiency (Urea vs. Ammonium Nitrate vs. Ammonium Sulphate).
- [x] **1.5 Empirical and Molecular Formula Determination** (Textbook p. 24)
  - Distinction between empirical and molecular formulas; the relation MF = (EF)ₙ.
  - Step-by-step tabular algorithm for determining empirical formula from elemental mass percentages.
  - Step-by-step worked board numericals with vapor density (M = 2 &times; V.D.) and molar mass data.

---

## 2. Note Metadata for `admin.html`

```json
{
  "id": "chem11-fundamentals-of-chemistry",
  "class": "11",
  "subject": "Chemistry",
  "chapter": "Fundamentals of Chemistry",
  "title": "Fundamentals of Chemistry — Class 11 Chemistry",
  "icon": "🧪",
  "summary": "Complete NEB Class 11 guide for Unit 1: Divisions and scope of chemistry, classification of matter, atomic & molecular mass, criss-cross formula writing, percentage composition of fertilizers, and step-by-step empirical & molecular formula calculations.",
  "tags": [
    "Fundamentals of Chemistry",
    "Matter",
    "Atomic Mass",
    "Molecular Formula",
    "Empirical Formula",
    "Percentage Composition",
    "Class 11",
    "Chemistry",
    "NEB"
  ]
}
```

---

## 3. Full Draft Note Content (HTML Payload)

```html
<div class="formula-box">
  <span class="formula-label">Key Formula Reference: Unit 1 Fundamentals of Chemistry</span>
  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 8px;">
    <div>
      <strong>Unified Atomic Mass Unit:</strong><br/>
      1 u = 1 amu = (1/12) &times; mass of one ¹²C atom = 1.6605 &times; 10⁻²⁴ g<br/>
      Average Atomic Mass = &Sigma; (fᵢ &times; Aᵢ)
    </div>
    <div>
      <strong>Percentage Composition:</strong><br/>
      % Element = [(Atoms in formula &times; Atomic Mass) / Molar Mass of Compound] &times; 100%
    </div>
    <div>
      <strong>Empirical &amp; Molecular Formula:</strong><br/>
      Molecular Formula = (Empirical Formula)ₙ<br/>
      n = Molecular Mass / Empirical Formula Mass = (2 &times; Vapor Density) / Empirical Formula Mass
    </div>
  </div>
</div>

<h2>1. Introduction &amp; Historical Evolution of Chemistry</h2>
<p>Chemistry is the central branch of physical science that investigates the <strong>composition, structure, properties, and transformations of matter</strong> at the atomic and molecular scale. Everything in the physical universe—from interstellar gas clouds to the metabolic processes sustaining living organisms—is governed by chemical principles.</p>

<p>The history of human civilization is intimately tied to the mastery of chemical materials. Anthropologists identify major human epochs by the materials mastered by humankind:</p>

<ul>
  <li><strong>The Stone Age:</strong> Primitive human ancestors utilized naturally occurring minerals and stones without altering their intrinsic chemical identity.</li>
  <li><strong>The Bronze Age (~3300–1200 BCE):</strong> The discovery of smelting copper ores and alloying copper with tin to produce bronze marked humanity's first deliberate metallurgical synthesis.</li>
  <li><strong>The Iron Age (~1200 BCE onward):</strong> Mastery of higher-temperature blast smelting allowed large-scale extraction of elemental iron from haematite and magnetite.</li>
  <li><strong>The Carbon &amp; Silicon Age (Modern Era):</strong> Civilization today relies on synthetic organic polymers (carbon-based plastics, pharmaceuticals, and synthetic fibers) and ultra-pure crystalline semiconductors (silicon microchips) powering modern computation and telecommunications.</li>
</ul>

<div class="note-box">
  <strong>Did You Know? Modern Smartphone Chemistry:</strong> A typical smartphone incorporates over <strong>35 different chemical elements</strong>. The screen utilizes aluminosilicate glass treated with molten potassium salts to exchange sodium ions for larger potassium ions (creating compressive surface strength). Indium tin oxide (ITO) forms the transparent conductive touch grid, while lithium cobalt oxide (LiCoO₂) powers the rechargeable battery.
</div>

---

<h2>2. Major Divisions &amp; Interdisciplinary Branches of Chemistry</h2>
<p>Because chemistry intersects physics, biology, geology, and engineering, it is structured into classical foundational disciplines and specialized applied branches:</p>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Branch</th>
        <th>Primary Domain of Investigation</th>
        <th>Real-World &amp; Industrial Applications</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Organic Chemistry</strong></td>
        <td>Study of compounds primarily composed of covalently bonded carbon and hydrogen (hydrocarbons) and their derivatives.</td>
        <td>Petrochemicals, synthetic polymers, pharmaceuticals, agrochemicals, dyes.</td>
      </tr>
      <tr>
        <td><strong>Inorganic Chemistry</strong></td>
        <td>Study of all non-carbon elements, minerals, metals, organometallic complexes, and coordination compounds.</td>
        <td>Metallurgy, industrial acids/bases, semiconductors, catalysts, ceramics.</td>
      </tr>
      <tr>
        <td><strong>Physical Chemistry</strong></td>
        <td>Application of the principles and laws of physics (thermodynamics, quantum mechanics, chemical kinetics) to chemical systems.</td>
        <td>Reaction rate optimization, battery design, spectroscopic analysis, molecular modeling.</td>
      </tr>
      <tr>
        <td><strong>Biochemistry</strong></td>
        <td>Chemical substances and metabolic processes occurring within living organisms (proteins, DNA/RNA, carbohydrates, enzymes).</td>
        <td>Genetic engineering, clinical pathology, vaccine development, agricultural biotechnology.</td>
      </tr>
      <tr>
        <td><strong>Analytical Chemistry</strong></td>
        <td>Qualitative identification (what is present) and quantitative estimation (how much is present) of chemical species.</td>
        <td>Quality assurance in food/pharmaceuticals, water testing, chromatography, titration.</td>
      </tr>
      <tr>
        <td><strong>Environmental Chemistry</strong></td>
        <td>Occurrence, transport, reactions, and effects of chemical species in the air, water, and soil environments.</td>
        <td>Air pollution control (smog, acid rain), effluent treatment plants, greenhouse gas mitigation.</td>
      </tr>
      <tr>
        <td><strong>Forensic Chemistry</strong></td>
        <td>Application of analytical chemistry to criminal investigations and legal evidentiary analysis.</td>
        <td>Toxicological screening, arson accelerant identification, narcotics testing by CIB Nepal.</td>
      </tr>
      <tr>
        <td><strong>Nuclear Chemistry</strong></td>
        <td>Study of atomic nuclei, nuclear fission, nuclear fusion, and radioactive decay mechanisms.</td>
        <td>Nuclear power generation, radioisotopes in cancer radiotherapy (Co-60, I-131).</td>
      </tr>
    </tbody>
  </table>
</div>

---

<h2>3. Classification of Matter</h2>
<p><strong>Matter</strong> is defined as anything that possesses mass and occupies physical volume. Macroscopically, matter is organized according to its chemical homogeneity and composition:</p>

<!-- SVG Diagram: Classification of Matter -->
<div class="diagram-wrap" style="text-align:center; margin: 1.75rem 0;">
  <svg class="diagram" viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
    <style>
      .tree-node-root { fill: rgba(249, 115, 22, 0.12); stroke: #f97316; stroke-width: 2; rx: 8px; }
      .tree-node-p1 { fill: rgba(52, 211, 153, 0.12); stroke: #10b981; stroke-width: 1.8; rx: 8px; }
      .tree-node-p2 { fill: rgba(251, 191, 36, 0.12); stroke: #f59e0b; stroke-width: 1.8; rx: 8px; }
      .tree-node-leaf { fill: rgba(148, 163, 184, 0.08); stroke: rgba(148, 163, 184, 0.35); stroke-width: 1.2; rx: 8px; }
      .tree-line { fill: none; stroke: rgba(148, 163, 184, 0.5); stroke-width: 1.6; }
      .tree-text-title { font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700; text-anchor: middle; fill: var(--text-heading, #f8fafc); }
      .tree-text-leaf { font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 600; text-anchor: middle; fill: var(--text-heading, #f8fafc); }
      .tree-text-sub { font-family: 'Sora', sans-serif; font-size: 11px; text-anchor: middle; fill: var(--text-muted, #94a3b8); }
      html.light .tree-text-title, html.light .tree-text-leaf { fill: #0f172a; }
      html.light .tree-text-sub { fill: #64748b; }
      html.light .tree-line { stroke: #cbd5e1; }
      html.light .tree-node-leaf { fill: #f8fafc; stroke: #cbd5e1; }
    </style>
    <!-- Root -->
    <rect x="295" y="15" width="150" height="42" class="tree-node-root"/>
    <text x="370" y="41" class="tree-text-title" style="fill:#f97316;">MATTER</text>
    
    <!-- Connector Lines Level 1 -->
    <path d="M 370 57 L 370 85 L 180 85 L 180 110" class="tree-line"/>
    <path d="M 370 85 L 560 85 L 560 110" class="tree-line"/>

    <!-- Level 1 Nodes -->
    <rect x="95" y="110" width="170" height="42" class="tree-node-p1"/>
    <text x="180" y="136" class="tree-text-title" style="fill:#10b981;">Pure Substances</text>
    
    <rect x="475" y="110" width="170" height="42" class="tree-node-p2"/>
    <text x="560" y="136" class="tree-text-title" style="fill:#f59e0b;">Mixtures</text>

    <!-- Connector Lines Level 2 Left -->
    <path d="M 180 152 L 180 180 L 95 180 L 95 205" class="tree-line"/>
    <path d="M 180 180 L 265 180 L 265 205" class="tree-line"/>

    <!-- Connector Lines Level 2 Right -->
    <path d="M 560 152 L 560 180 L 475 180 L 475 205" class="tree-line"/>
    <path d="M 560 180 L 645 180 L 645 205" class="tree-line"/>

    <!-- Level 2 Nodes -->
    <rect x="20" y="205" width="150" height="60" class="tree-node-leaf"/>
    <text x="95" y="230" class="tree-text-leaf">Elements</text>
    <text x="95" y="250" class="tree-text-sub">Cu, Fe, O₂, P₄, S₈</text>

    <rect x="190" y="205" width="150" height="60" class="tree-node-leaf"/>
    <text x="265" y="230" class="tree-text-leaf">Compounds</text>
    <text x="265" y="250" class="tree-text-sub">H₂O, NaCl, CO₂</text>

    <rect x="400" y="205" width="150" height="60" class="tree-node-leaf"/>
    <text x="475" y="230" class="tree-text-leaf">Homogeneous</text>
    <text x="475" y="250" class="tree-text-sub">Air, Salt Solution, Brass</text>

    <rect x="570" y="205" width="150" height="60" class="tree-node-leaf"/>
    <text x="645" y="230" class="tree-text-leaf">Heterogeneous</text>
    <text x="645" y="250" class="tree-text-sub">Muddy Water, Smoke</text>
  </svg>
  <div style="font-size:0.8rem; color:var(--text-muted, #94a3b8); margin-top:6px;">Figure 1.1: Macroscopic Hierarchy of Matter.</div>
</div>

<h3>3.1 Pure Substances vs. Mixtures</h3>
<ol>
  <li><strong>Pure Substances:</strong> Possess uniform and invariant chemical composition, sharp melting and boiling points, and cannot be separated into simpler substances by ordinary mechanical or physical methods.
    <ul>
      <li><strong>Elements:</strong> The simplest chemical substances composed of identical atoms possessing the same nuclear atomic number (Z). They cannot be broken down chemically. Elements exist as <em>metals</em> (electropositive, ductile, good conductors like Cu, Al), <em>non-metals</em> (electronegative, insulators like C, O, N), and <em>metalloids</em> (intermediate semi-conducting properties like Si, Ge, As).</li>
      <li><strong>Compounds:</strong> Substances formed by the chemical combination of two or more distinct elements in a <strong>fixed, definite proportion by mass</strong>. Their properties are entirely distinct from their constituent elements (e.g., sodium is a violent metal and chlorine is a toxic gas, but their compound NaCl is table salt).</li>
    </ul>
  </li>
  <li><strong>Mixtures:</strong> Consist of two or more pure substances physically combined in arbitrary ratios without chemical bonding. The individual constituents retain their characteristic chemical identities.
    <ul>
      <li><strong>Homogeneous Mixtures (Solutions):</strong> Possess uniform composition and properties throughout (single phase). Examples: atmospheric air, sugar dissolved in water, brass alloy (Cu + Zn).</li>
      <li><strong>Heterogeneous Mixtures:</strong> Do not exhibit uniform composition, containing distinct observable boundaries between phases. Examples: oil in water, soil, chalk suspension.</li>
    </ul>
  </li>
</ol>

---

<h2>4. Atoms, Molecules &amp; Chemical Atomicity</h2>

<div class="key-stmt">
  An <strong>atom</strong> is the smallest constituent particle of an element that can participate in a chemical combination. A <strong>molecule</strong> is the smallest electrically neutral entity of a substance capable of independent, stable existence while retaining the complete chemical properties of that substance.
</div>

<p>Molecules are categorized based on their elemental constitution and their <strong>atomicity</strong> (the total number of constituent atoms present in a single molecule):</p>

<ul>
  <li><strong>Homoatomic Molecules:</strong> Composed of atoms of only one element.
    <ul>
      <li><em>Monoatomic:</em> Noble gases that exist as single atoms (He, Ne, Ar). Atomicity = 1.</li>
      <li><em>Diatomic:</em> H₂, N₂, O₂, F₂, Cl₂. Atomicity = 2.</li>
      <li><em>Triatomic:</em> Ozone (O₃). Atomicity = 3.</li>
      <li><em>Tetra-atomic:</em> White phosphorus (P₄). Atomicity = 4.</li>
      <li><em>Octa-atomic / Polyatomic:</em> Rhombic sulphur (S₈). Atomicity = 8.</li>
    </ul>
  </li>
  <li><strong>Heteroatomic Molecules:</strong> Composed of atoms of two or more distinct elements.
    <ul>
      <li><em>Diatomic:</em> CO, HCl, NO. Atomicity = 2.</li>
      <li><em>Triatomic:</em> H₂O, CO₂, SO₂. Atomicity = 3.</li>
      <li><em>Tetra-atomic:</em> Ammonia (NH₃). Atomicity = 4.</li>
      <li><em>Polyatomic:</em> Methane (CH₄, atomicity = 5), Glucose (C₆H₁₂O₆, atomicity = 24).</li>
    </ul>
  </li>
</ul>

---

<h2>5. Atomic, Molecular, and Formula Unit Mass</h2>

<h3>5.1 The Unified Atomic Mass Unit (u)</h3>
<p>Because the absolute mass of an individual atom is extraordinarily miniscule (e.g., a single hydrogen atom weighs 1.67 &times; 10⁻²⁴ g), atomic masses are defined relative to an international standard.</p>

<div class="formula-box">
  <span class="formula-label">Definition of Unified Atomic Mass Unit</span>
  1 u = 1 amu = (1/12) &times; Mass of one atom of Carbon-12 (¹²C) = 1.660539 &times; 10⁻²⁴ g
</div>

<p>The <strong>relative atomic mass</strong> (Aᵣ) of an element is the ratio of the average mass of one atom of that element compared to 1/12 the mass of an atom of carbon-12. Being a ratio, relative atomic mass is dimensionless.</p>

<h3>5.2 Average Atomic Mass of Isotopes</h3>
<p>Most elements exist in nature as a mixture of stable isotopes with varying isotopic abundances. The fractional abundance-weighted average determines the value listed on the periodic table:</p>

<div class="formula-box">
  <span class="formula-label">Average Atomic Mass Equation</span>
  A<sub>avg</sub> = &Sigma; (fᵢ &times; Aᵢ) = [(P₁ &times; A₁) + (P₂ &times; A₂) + ... + (Pₙ &times; Aₙ)] / 100
</div>

<div class="example-box">
  <strong>Worked Example 1.1: Calculating Average Atomic Mass</strong><br/>
  Naturally occurring chlorine consists of two stable isotopes: ³⁵Cl (atomic mass 34.969 u) with a natural abundance of 75.77%, and ³⁷Cl (atomic mass 36.966 u) with an abundance of 24.23%. Calculate the average atomic mass of chlorine.<br/><br/>
  <strong>Solution:</strong><br/>
  A<sub>avg</sub> = [(75.77 &times; 34.969) + (24.23 &times; 36.966)] / 100<br/>
  = (2649.60 + 895.69) / 100 = 3545.29 / 100 = <strong>35.45 u</strong>
</div>

<h3>5.3 Molecular Mass vs. Formula Unit Mass</h3>
<ul>
  <li><strong>Molecular Mass:</strong> The sum of the atomic masses of all atoms present in a covalent molecule (e.g., for glucose C₆H₁₂O₆: (6 &times; 12.011) + (12 &times; 1.008) + (6 &times; 15.999) = 180.16 u).</li>
  <li><strong>Formula Unit Mass:</strong> For crystalline ionic substances (such as NaCl, CaCO₃), discrete individual molecules do not exist; instead, cations and anions form an infinite three-dimensional crystal lattice. The mass of the simplest empirical formula unit is termed the <em>formula unit mass</em> (e.g., for NaCl: 22.99 + 35.45 = 58.44 u).</li>
</ul>

---

<h2>6. Radicals, Ions, and Chemical Formula Derivation</h2>

<h3>6.1 Cations (Basic Radicals) and Anions (Acid Radicals)</h3>
<p>An <strong>ion</strong> or <strong>radical</strong> is an atom or bonded group of atoms bearing an electrical charge:</p>
<ul>
  <li><strong>Cations (Basic Radicals):</strong> Positively charged species formed when an atom loses valence electrons (e.g., Na⁺, Ca²⁺, Al³⁺, NH₄⁺).</li>
  <li><strong>Anions (Acid Radicals):</strong> Negatively charged species formed when an atom or polyatomic group gains electrons (e.g., Cl⁻, O²⁻, NO₃⁻, SO₄²⁻).</li>
  <li><strong>Variable Valency:</strong> Transition metals and heavier p-block elements often exhibit more than one oxidation state. In classical nomenclature, the lower valency carries the suffix <em>-ous</em> and the higher valency carries <em>-ic</em> (or Roman numerals in IUPAC Stock notation):
    <ul>
      <li>Cu⁺: Cuprous / Copper(I) vs. Cu²⁺: Cupric / Copper(II)</li>
      <li>Fe²⁺: Ferrous / Iron(II) vs. Fe³⁺: Ferric / Iron(III)</li>
      <li>Sn²⁺: Stannous / Tin(II) vs. Sn⁴⁺: Stannic / Tin(IV)</li>
    </ul>
  </li>
</ul>

<h3>6.2 The Criss-Cross Method for Writing Formulas</h3>
<p>To determine the neutral chemical formula of an ionic compound:</p>
<ol>
  <li>Write the positive radical (cation) symbol on the left and negative radical (anion) symbol on the right.</li>
  <li>Write their numerical valencies (charges without signs) below each symbol.</li>
  <li>Divide by any common factor to obtain the simplest whole-number ratio.</li>
  <li>Criss-cross the valency numbers to become subscripts for the opposing radical. If a polyatomic radical takes a subscript &gt; 1, enclose it in parentheses.</li>
</ol>

<div class="example-box">
  <strong>Formula Writing Examples:</strong>
  <ul>
    <li><strong>Aluminium Sulphate:</strong> Cation = Al³⁺ (valency 3), Anion = SO₄²⁻ (valency 2). Cross valencies &rarr; <strong>Al₂(SO₄)₃</strong>.</li>
    <li><strong>Calcium Phosphate:</strong> Cation = Ca²⁺ (valency 2), Anion = PO₄³⁻ (valency 3). Cross valencies &rarr; <strong>Ca₃(PO₄)₂</strong>.</li>
    <li><strong>Magnesium Nitride:</strong> Cation = Mg²⁺ (valency 2), Anion = N³⁻ (valency 3). Cross valencies &rarr; <strong>Mg₃N₂</strong>.</li>
  </ul>
</div>

<h3>6.3 High-Yield Everyday Chemicals &amp; Common Names</h3>
<p>The NEB Class 11 examination frequently tests the systematic names and formulas of common household and commercial compounds:</p>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Common Name</th>
        <th>IUPAC / Systematic Chemical Name</th>
        <th>Molecular / Formula Unit</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Baking Soda</strong></td><td>Sodium hydrogen carbonate (Sodium bicarbonate)</td><td>NaHCO₃</td></tr>
      <tr><td><strong>Washing Soda</strong></td><td>Sodium carbonate decahydrate</td><td>Na₂CO₃·10H₂O</td></tr>
      <tr><td><strong>Bleaching Powder</strong></td><td>Calcium hypochlorite / chlorohypochlorite</td><td>CaOCl₂</td></tr>
      <tr><td><strong>Plaster of Paris</strong></td><td>Calcium sulphate hemihydrate</td><td>CaSO₄·½H₂O</td></tr>
      <tr><td><strong>Gypsum</strong></td><td>Calcium sulphate dihydrate</td><td>CaSO₄·2H₂O</td></tr>
      <tr><td><strong>Epsom Salt</strong></td><td>Magnesium sulphate heptahydrate</td><td>MgSO₄·7H₂O</td></tr>
      <tr><td><strong>Milk of Magnesia</strong></td><td>Magnesium hydroxide (antacid suspension)</td><td>Mg(OH)₂</td></tr>
      <tr><td><strong>Muriatic Acid</strong></td><td>Hydrochloric acid</td><td>HCl</td></tr>
      <tr><td><strong>Saltpetre (Chile Saltpetre)</strong></td><td>Potassium nitrate (Sodium nitrate)</td><td>KNO₃ (NaNO₃)</td></tr>
      <tr><td><strong>Vinegar</strong></td><td>Dilute ethanoic (acetic) acid (~5%)</td><td>CH₃COOH</td></tr>
      <tr><td><strong>Borax</strong></td><td>Sodium tetraborate decahydrate</td><td>Na₂B₄O₇·10H₂O</td></tr>
    </tbody>
  </table>
</div>

---

<h2>7. Percentage Composition of Elements in Compounds</h2>
<p>The <strong>percentage composition</strong> of a compound is the mass of each individual element contained within 100 parts by mass of that compound. It is governed directly by the <em>Law of Definite / Constant Proportions</em>.</p>

<div class="formula-box">
  <span class="formula-label">Mass Percentage Formula</span>
  Mass % of Element X = [(Number of atoms of X in formula &times; Atomic Mass of X) / Molar Mass of Compound] &times; 100%
</div>

<div class="example-box">
  <strong>Worked Example 1.2: Comparative Fertilizer Analysis (High-Yield Exam Numerical)</strong><br/>
  A farmer in the Terai region of Nepal wants to maximize the nitrogen content delivered per kilogram of chemical fertilizer purchased. The two fertilizers available at the local cooperative are:
  <ol type="a">
    <li><strong>Urea:</strong> NH₂CONH₂</li>
    <li><strong>Ammonium Nitrate:</strong> NH₄NO₃</li>
  </ol>
  Calculate the percentage composition of nitrogen in both fertilizers and determine which provides more nitrogen by mass.<br/><br/>
  <strong>Solution:</strong><br/>
  <em>Atomic masses:</em> N = 14.0 u, H = 1.0 u, C = 12.0 u, O = 16.0 u.<br/><br/>
  <strong>Part (a) Urea (CH₄N₂O):</strong><br/>
  Molar Mass = 12.0 + (4 &times; 1.0) + (2 &times; 14.0) + 16.0 = 12.0 + 4.0 + 28.0 + 16.0 = 60.0 g/mol<br/>
  % N in Urea = (28.0 g / 60.0 g) &times; 100% = <strong>46.67%</strong><br/><br/>
  
  <strong>Part (b) Ammonium Nitrate (N₂H₄O₃):</strong><br/>
  Molar Mass = (2 &times; 14.0) + (4 &times; 1.0) + (3 &times; 16.0) = 28.0 + 4.0 + 48.0 = 80.0 g/mol<br/>
  % N in Ammonium Nitrate = (28.0 g / 80.0 g) &times; 100% = <strong>35.00%</strong><br/><br/>

  <p><strong>Conclusion:</strong> Urea provides <strong>46.67%</strong> nitrogen compared to 35.00% in ammonium nitrate. Therefore, urea provides higher active nitrogen per unit mass and is the more cost-effective nitrogenous fertilizer.</p>
</div>

---

<h2>8. Empirical Formula vs. Molecular Formula</h2>

<div class="key-stmt">
  The <strong>empirical formula</strong> represents the simplest whole-number ratio of the atoms of each element present in a compound. The <strong>molecular formula</strong> expresses the exact, actual number of atoms of each element present in one molecule of that compound.
</div>

<p>For example, hydrogen peroxide has the molecular formula H₂O₂; its simplest whole-number ratio of hydrogen to oxygen is 1:1, so its empirical formula is simply HO.</p>

<div class="formula-box">
  <span class="formula-label">Relationship Between Molecular and Empirical Formula</span>
  Molecular Formula = (Empirical Formula)ₙ
</div>

<p>Here, n is an integer (n = 1, 2, 3, ...) determined by the ratio of the molar masses:</p>

<div class="formula-box">
  <span class="formula-label">Calculation of Integer Factor n</span>
  n = Molecular Mass / Empirical Formula Mass = (2 &times; Vapor Density) / Empirical Formula Mass
</div>

<div class="note-box">
  <strong>Vapor Density Rule:</strong> For volatile substances in the gaseous phase, Avogadro's hypothesis establishes that:
  Molecular Mass = 2 &times; Vapor Density (V.D.)
</div>

---

<h2>9. Step-by-Step Algorithm for Determining Empirical &amp; Molecular Formulas</h2>
<p>To determine empirical and molecular formulas from analytical experimental data, construct a 6-column systematic table:</p>

<ol>
  <li><strong>Step 1:</strong> List the percentage by mass of each element. If given in grams, verify that the sum equals 100% (if oxygen is not listed and the sum is &lt; 100%, the remainder is oxygen).</li>
  <li><strong>Step 2:</strong> Divide the mass percentage of each element by its atomic mass to find the <strong>relative number of moles</strong> (moles = % / A).</li>
  <li><strong>Step 3:</strong> Divide all the calculated mole values by the <strong>smallest mole value</strong> among them to determine the <em>simplest molar ratio</em>.</li>
  <li><strong>Step 4:</strong> If the resulting ratios are not integers (e.g., 1.33, 1.5, 2.25), multiply all ratios by the smallest integer (e.g., 2 or 3) to obtain the <strong>simplest whole-number ratio</strong>.</li>
  <li><strong>Step 5:</strong> Write the empirical formula using these whole-number subscripts. Calculate the <em>Empirical Formula Mass</em>.</li>
  <li><strong>Step 6:</strong> Find n = Molecular Mass / Empirical Mass and multiply the subscripts of the empirical formula by n to obtain the final <em>Molecular Formula</em>.</li>
</ol>

<div class="example-box">
  <strong>Worked Example 1.3: Standard NEB Long-Question Board Numerical</strong><br/>
  An organic compound containing carbon, hydrogen, and oxygen was subjected to elemental combustion analysis. It was found to contain <strong>40.00% Carbon</strong>, <strong>6.67% Hydrogen</strong>, and the remainder Oxygen. Its vapor density is measured to be <strong>90</strong>. Determine:
  <ol type="a">
    <li>The empirical formula of the compound.</li>
    <li>The molecular formula of the compound.</li>
  </ol>
  <br/>
  <strong>Step-by-Step Solution:</strong><br/>
  % Oxygen = 100% - (40.00% + 6.67%) = 100% - 46.67% = 53.33%<br/><br/>

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>% by Mass</th>
          <th>Atomic Mass</th>
          <th>Relative Moles (% / A)</th>
          <th>Simplest Molar Ratio</th>
          <th>Whole-No. Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>C</strong></td>
          <td>40.00</td>
          <td>12.0</td>
          <td>40.00 / 12 = 3.333</td>
          <td>3.333 / 3.333 = 1</td>
          <td><strong>1</strong></td>
        </tr>
        <tr>
          <td><strong>H</strong></td>
          <td>6.67</td>
          <td>1.0</td>
          <td>6.67 / 1.0 = 6.670</td>
          <td>6.670 / 3.333 = 2.001 &approx; 2</td>
          <td><strong>2</strong></td>
        </tr>
        <tr>
          <td><strong>O</strong></td>
          <td>53.33</td>
          <td>16.0</td>
          <td>53.33 / 16 = 3.333</td>
          <td>3.333 / 3.333 = 1</td>
          <td><strong>1</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <p><strong>(a) Empirical Formula:</strong> <strong>CH₂O</strong></p>
  <p>Empirical Formula Mass = 12.0 + (2 &times; 1.0) + 16.0 = 30.0 g/mol</p>

  <p><strong>(b) Molecular Mass &amp; Molecular Formula:</strong></p>
  Molecular Mass = 2 &times; Vapor Density = 2 &times; 90 = 180 g/mol<br/>
  n = Molecular Mass / Empirical Formula Mass = 180 / 30 = 6<br/>
  Molecular Formula = (CH₂O)₆ = <strong>C₆H₁₂O₆</strong> (Glucose / Fructose)
</div>

<div class="example-box">
  <strong>Worked Example 1.4: Fractional Ratio Conversion Case</strong><br/>
  An oxide of iron contains 69.94% iron and 30.06% oxygen by mass. Its molecular weight is determined to be 159.7 g/mol. Determine its empirical and molecular formula (Fe = 55.85 u, O = 16.00 u).<br/><br/>
  <strong>Solution:</strong>
  <ul>
    <li>Relative moles of Fe = 69.94 / 55.85 = 1.252</li>
    <li>Relative moles of O = 30.06 / 16.00 = 1.879</li>
  </ul>
  Divide by smallest value (1.252):<br/>
  Ratio for Fe = 1.252 / 1.252 = 1.00<br/>
  Ratio for O = 1.879 / 1.252 = 1.50<br/><br/>
  Since the ratio contains a fraction (1.5 = 3/2), multiply both numbers by <strong>2</strong> to obtain the simplest whole-number integers:<br/>
  Fe = 1 &times; 2 = 2, O = 1.5 &times; 2 = 3<br/><br/>
  <p><strong>Empirical Formula:</strong> <strong>Fe₂O₃</strong> (Haematite / Ferric oxide)</p>
  Empirical Mass = (2 &times; 55.85) + (3 &times; 16.00) = 111.7 + 48.0 = 159.7 g/mol<br/>
  n = 159.7 / 159.7 = 1<br/>
  <p><strong>Molecular Formula:</strong> (Fe₂O₃)₁ = <strong>Fe₂O₃</strong></p>
</div>

---

<h2>10. NEB Board Exam Practice Questions</h2>

<h3>A. Multiple Choice Questions (MCQs)</h3>
<ol>
  <li><strong>Which of the following molecules possesses an atomicity of 4?</strong>
    <ul>
      <li>(A) Ozone (O₃)</li>
      <li>(B) Ammonia (NH₃)</li>
      <li>(C) Sulphur dioxide (SO₂)</li>
      <li>(D) Carbon dioxide (CO₂)</li>
    </ul>
    <em>Correct Answer:</em> <strong>(B)</strong> Ammonia has 1 N + 3 H = 4 atoms per molecule.
  </li>
  <li><strong>The active nitrogen percentage is highest in which of the following agricultural fertilizers?</strong>
    <ul>
      <li>(A) Ammonium Nitrate (NH₄NO₃)</li>
      <li>(B) Ammonium Sulphate ((NH₄)₂SO₄)</li>
      <li>(C) Urea (NH₂CONH₂)</li>
      <li>(D) Potassium Nitrate (KNO₃)</li>
    </ul>
    <em>Correct Answer:</em> <strong>(C)</strong> Urea has 46.67% nitrogen by mass.
  </li>
  <li><strong>A compound has an empirical formula of CH₂ and a molecular mass of 70 g/mol. Its molecular formula is:</strong>
    <ul>
      <li>(A) C₃H₆</li>
      <li>(B) C₄H₈</li>
      <li>(C) C₅H₁₀</li>
      <li>(D) C₆H₁₂</li>
    </ul>
    <em>Correct Answer:</em> <strong>(C)</strong> Empirical mass = 12 + 2 = 14; n = 70 / 14 = 5 &rarr; C₅H₁₀.
  </li>
  <li><strong>Plaster of Paris has the chemical formula:</strong>
    <ul>
      <li>(A) CaSO₄·2H₂O</li>
      <li>(B) CaSO₄·½H₂O</li>
      <li>(C) MgSO₄·7H₂O</li>
      <li>(D) CaOCl₂</li>
    </ul>
    <em>Correct Answer:</em> <strong>(B)</strong> Calcium sulphate hemihydrate.
  </li>
</ol>

<h3>B. Short Answer Questions (2 Marks Each)</h3>
<ol>
  <li><strong>Define unified atomic mass unit (u). Why was Carbon-12 chosen as the universal atomic mass standard?</strong><br/>
    <em>Model Answer:</em> One unified atomic mass unit (1 u) is defined as exactly 1/12 the mass of an unbound carbon-12 atom in its nuclear and electronic ground state (1 u &approx; 1.6605 &times; 10⁻²⁴ g). Carbon-12 was adopted in 1961 by IUPAC because: (i) it is a stable, non-toxic, and abundantly available solid, (ii) it allows highly precise mass spectrometric measurements, and (iii) it avoids fractional mass anomalies previously seen with oxygen and hydrogen isotope standards.
  </li>
  <li><strong>Differentiate between Empirical Formula and Molecular Formula with an illustrative example.</strong><br/>
    <em>Model Answer:</em>
    <ul>
      <li><strong>Empirical Formula:</strong> Shows the simplest whole-number ratio of atoms of each element in a compound (e.g., for benzene, CH).</li>
      <li><strong>Molecular Formula:</strong> Shows the actual number of atoms of each element present in one molecule of the compound (e.g., for benzene, C₆H₆).</li>
      <li>They are related by: Molecular Formula = (Empirical Formula)ₙ, where n = Molecular Mass / Empirical Mass = 78 / 13 = 6.</li>
    </ul>
  </li>
  <li><strong>Explain why formula unit mass is used instead of molecular mass for sodium chloride (NaCl).</strong><br/>
    <em>Model Answer:</em> Sodium chloride is an ionic compound. In solid NaCl, discrete, independent NaCl molecules do not exist. Instead, each sodium cation (Na⁺) is octahedrally surrounded by six chloride anions (Cl⁻), and each chloride anion is surrounded by six sodium cations in a continuous three-dimensional crystal lattice. Therefore, the term <em>molecular mass</em> is strictly inaccurate, and <em>formula unit mass</em> (representing the mass of the simplest stoichiometric unit NaCl = 58.5 u) is employed.
  </li>
</ol>

<h3>C. Long Numerical Problem (4 Marks)</h3>
<p><strong>Question:</strong> An organic compound found in tobacco smoke (Nicotine) consists of 74.02% Carbon, 8.70% Hydrogen, and 17.28% Nitrogen by mass. The molecular weight of the compound is experimentally determined to be 162.2 g/mol. Determine the empirical formula and the molecular formula of nicotine.</p>

<p><strong>Step-by-Step Solution:</strong></p>
<ol>
  <li><strong>Relative number of moles:</strong><br/>
    Moles of C = 74.02 / 12.01 = 6.163<br/>
    Moles of H = 8.70 / 1.008 = 8.631<br/>
    Moles of N = 17.28 / 14.01 = 1.233
  </li>
  <li><strong>Simplest molar ratio (divide by smallest value, 1.233):</strong><br/>
    Ratio C = 6.163 / 1.233 = 4.998 &approx; 5<br/>
    Ratio H = 8.631 / 1.233 = 7.000 = 7<br/>
    Ratio N = 1.233 / 1.233 = 1.000 = 1
  </li>
  <li><strong>Empirical Formula:</strong> <strong>C₅H₇N</strong><br/>
    Empirical Mass = (5 &times; 12.01) + (7 &times; 1.008) + 14.01 = 60.05 + 7.056 + 14.01 = 81.12 g/mol
  </li>
  <li><strong>Calculation of integer multiplier n:</strong><br/>
    n = Molecular Mass / Empirical Formula Mass = 162.2 / 81.12 = 2
  </li>
  <li><strong>Molecular Formula:</strong><br/>
    Molecular Formula = (C₅H₇N)₂ = <strong>C₁₀H₁₄N₂</strong>
  </li>
</ol>
```

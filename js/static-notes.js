window.staticNotes = [
  {
    id: "chem11-fundamentals-of-chemistry",
    class: "11",
    subject: "Chemistry",
    chapter: "Fundamentals of Chemistry",
    title: "Fundamentals of Chemistry — Class 11 Chemistry",
    icon: "🧪",
    summary:
      "Complete NEB Class 11 guide for Unit 1: Divisions and scope of chemistry, classification of matter, atomic & molecular mass, criss-cross formula writing, percentage composition of fertilizers, and step-by-step empirical & molecular formula calculations.",
    tags: [
      "Fundamentals of Chemistry",
      "Matter",
      "Atomic Mass",
      "Molecular Formula",
      "Empirical Formula",
      "Percentage Composition",
      "Class 11",
      "Chemistry",
      "NEB",
    ],
    content: `<div class="formula-box">
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
    `,
  },
  {
    id: "chem11-stoichiometry",
    class: "11",
    subject: "Chemistry",
    chapter: "Stoichiometry",
    title: "Stoichiometry — Class 11 Chemistry",
    icon: "⚗️",
    summary:
      "Complete NEB Class 11 guide for Unit 2: Dalton’s atomic theory, five laws of stoichiometry, Avogadro’s law and its deductions, the mole concept (mass/volume/particles), quantitative calculations from equations, limiting & excess reactants, percentage yield, and empirical/molecular formula from percentage composition.",
    tags: [
      "Stoichiometry",
      "Mole Concept",
      "Dalton's Atomic Theory",
      "Laws of Stoichiometry",
      "Avogadro's Law",
      "Limiting Reactant",
      "Percentage Yield",
      "Empirical Formula",
      "Class 11",
      "Chemistry",
      "NEB",
    ],
    content: `<div class="formula-box">
  <span class="formula-label">Key Formula Reference: Unit 2 Stoichiometry</span>
  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 8px;">
    <div>
      <strong>Mole Relations:</strong><br/>
      No. of moles = Given mass (g) / Molar mass<br/>
      No. of moles = Given volume of gas (L) / 22.4 (at STP)<br/>
      No. of moles = No. of particles / 6.022 &times; 10<sup>23</sup>
    </div>
    <div>
      <strong>Vapour Density &amp; Molecular Mass:</strong><br/>
      Molecular mass = 2 &times; Vapour density
    </div>
    <div>
      <strong>Percentage Yield:</strong><br/>
      % Yield = (Experimental yield / Theoretical yield) &times; 100%
    </div>
    <div>
      <strong>Empirical &amp; Molecular Formula:</strong><br/>
      n = Molecular mass / Empirical formula mass<br/>
      Molecular formula = (Empirical formula)<sub>n</sub>
    </div>
  </div>
</div>

<h2>1. Dalton's Atomic Theory</h2>
<p>In 1808, John Dalton published a landmark theory based on experimental evidence known at the time. His <strong>atomic theory</strong> consists of four key postulates:</p>
<ul>
  <li><strong>Postulate 1 — Atomicity of matter:</strong> All matter is composed of tiny, indivisible particles called <strong>atoms</strong>. The atom is the smallest structural unit of an element.</li>
  <li><strong>Postulate 2 — Identity of atoms:</strong> Atoms of the <em>same</em> element are identical in mass and chemical properties; atoms of <em>different</em> elements differ in these properties.</li>
  <li><strong>Postulate 3 — Whole-number combination:</strong> Atoms combine chemically in simple, whole-number ratios to form molecules (compounds).</li>
  <li><strong>Postulate 4 — Conservation of atoms:</strong> During a chemical reaction, atoms retain their identity — they simply rearrange and reunite to form new substances. No atom is created or destroyed.</li>
</ul>

<div class="note-box">
  <strong>Limitations of Dalton's Atomic Theory:</strong>
  <ul>
    <li>Atoms are <em>not</em> truly indivisible — they contain electrons, protons, and neutrons.</li>
    <li>Atoms of the same element can have different masses (isotopes — e.g., &#185;&#178;C and &#185;&#8308;C).</li>
    <li>It does not account for allotropes (e.g., diamond and graphite are both pure carbon but differ in properties).</li>
    <li>It does not explain the nature of chemical bonding or why atoms combine.</li>
    <li>The theory applies poorly to non-stoichiometric compounds (e.g., w&#252;stite, Fe<sub>x</sub>O, where x varies).</li>
  </ul>
</div>

<hr/>

<h2>2. Laws of Stoichiometry</h2>
<p>The word <em>stoichiometry</em> comes from Greek: <em>stoikhein</em> (element) + <em>metron</em> (measure). It is the quantitative study of the mass and volume relationships among reactants and products in chemical reactions. Five classical laws form its foundation.</p>

<h3>2.1 Law of Conservation of Mass</h3>
<p>Proposed by <strong>Antoine Lavoisier</strong> (1785). It states:</p>
<blockquote>"In a closed system, the total mass of reactants equals the total mass of products. Mass can neither be created nor destroyed during a chemical reaction."</blockquote>
<p>This is also called the <strong>Law of Indestructibility of Matter</strong>. Because mass is conserved, every chemical equation must be balanced.</p>

<div class="example-box">
  <span class="example-label">Verification Example</span>
  <p>2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> &rarr; 4CO<sub>2</sub> + 6H<sub>2</sub>O</p>
  <p>Reactant mass: (2 &times; 30) + (7 &times; 32) = 60 + 224 = <strong>284 g</strong></p>
  <p>Product mass: (4 &times; 44) + (6 &times; 18) = 176 + 108 = <strong>284 g</strong> &#10003;</p>
</div>

<h3>2.2 Law of Definite Proportion</h3>
<p>Formulated by <strong>Joseph Proust</strong> (late 18th century). It states:</p>
<blockquote>"Regardless of source or method of preparation, the ratio of masses of elements in a pure chemical compound is always constant."</blockquote>
<p>For example, water (H<sub>2</sub>O) always contains hydrogen and oxygen in the mass ratio <strong>1 : 8</strong>, whether obtained from a river, a tap, or by electrolysis.</p>

<div class="note-box">
  <strong>Limitations:</strong>
  <ul>
    <li>Does not apply to non-stoichiometric (Berthollide) compounds, e.g., w&#252;stite (FeO where Fe:O ratio varies from 0.83 to 0.95).</li>
    <li>Does not account for isotopic variations that slightly alter mass ratios.</li>
  </ul>
</div>

<h3>2.3 Law of Multiple Proportions</h3>
<p>Proposed by <strong>John Dalton</strong> (early 19th century). It states:</p>
<blockquote>"When two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other element are in simple, whole-number ratios."</blockquote>

<div class="example-box">
  <span class="example-label">Classic Example &mdash; Oxides of Nitrogen</span>
  <p>Keeping mass of nitrogen fixed at 14 g:</p>
  <table>
    <thead><tr><th>Compound</th><th>Mass of N (g)</th><th>Mass of O (g)</th></tr></thead>
    <tbody>
      <tr><td>N<sub>2</sub>O</td><td>14</td><td>8</td></tr>
      <tr><td>NO</td><td>14</td><td>16</td></tr>
      <tr><td>N<sub>2</sub>O<sub>3</sub></td><td>14</td><td>24</td></tr>
      <tr><td>NO<sub>2</sub></td><td>14</td><td>32</td></tr>
    </tbody>
  </table>
  <p>Ratio of oxygen masses: 8 : 16 : 24 : 32 = <strong>1 : 2 : 3 : 4</strong> &#10003;</p>
</div>

<h3>2.4 Law of Reciprocal Proportions</h3>
<p>Proposed by <strong>Jeremias Richter</strong> (1792). It states:</p>
<blockquote>"If two different elements each combine separately with the same weight of a third element, the ratio of the masses in which they do so is either the same as, or a simple multiple of, the mass ratio in which they combine with each other."</blockquote>
<p>Also called the <strong>Law of Equivalent Proportions</strong>.</p>

<div class="example-box">
  <span class="example-label">Example &mdash; Copper, Sulphur and Oxygen</span>
  <p>CuS: Cu : S = 63.5 : 32 &nbsp;|&nbsp; CuO: Cu : O = 63.5 : 16</p>
  <p>Ratio of S and O combining with fixed Cu (63.5 g): <strong>32 : 16 = 2 : 1</strong></p>
  <p>Ratio of S and O in SO<sub>3</sub>: <strong>32 : 48 = 2 : 3</strong></p>
  <p>2 : 1 and 2 : 3 are simple multiples of each other. &#10003;</p>
</div>

<h3>2.5 Gay-Lussac's Law of Gaseous Volumes</h3>
<p>Stated by <strong>Joseph Louis Gay-Lussac</strong>. It applies to reactions involving gaseous substances:</p>
<blockquote>"The volumes of gases involved in a chemical reaction, measured under the same conditions of temperature and pressure, are in simple whole-number ratios."</blockquote>
<p>The volume ratio equals the molar (stoichiometric coefficient) ratio.</p>

<div class="example-box">
  <span class="example-label">Example &mdash; Formation of Water Vapour</span>
  <p>2H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2H<sub>2</sub>O(g)</p>
  <p>Volume ratio H<sub>2</sub> : O<sub>2</sub> : H<sub>2</sub>O = <strong>2 : 1 : 2</strong> &#10003;</p>
  <p>If 100 mL H<sub>2</sub> reacts with excess O<sub>2</sub>, water vapour formed = 100 mL.</p>
</div>

<hr/>

<h2>3. Avogadro's Law and Its Deductions</h2>
<p><strong>Amedeo Avogadro</strong> (early 19th century) established:</p>
<blockquote>"Under similar conditions of temperature and pressure, equal volumes of all gases contain an equal number of molecules."</blockquote>
<p>Mathematically: V &prop; N (at constant T and P).</p>

<div class="note-box">
  <strong>Standard Conditions:</strong><br/>
  <strong>STP/NTP:</strong> 0&#176;C (273 K), 1 atm &mdash; 1 mol gas occupies <strong>22.4 L</strong><br/>
  <strong>RTP:</strong> 25&#176;C (298 K), 1 atm &mdash; 1 mol gas occupies <strong>24.0 L</strong>
</div>

<h3>Deduction 1 &mdash; Molecular Mass and Vapour Density</h3>
<p><strong>Vapour density (V.D.)</strong> = density of gas / density of H<sub>2</sub> at same conditions. Since equal volumes contain equal molecules:</p>
<p style="text-align:center;"><strong>Molecular mass = 2 &times; Vapour density</strong></p>
<p>(Factor of 2 because H<sub>2</sub> is diatomic.)</p>

<h3>Deduction 2 &mdash; Molar Mass and Molar Volume</h3>
<p>Combining with the vapour density relation:</p>
<p style="text-align:center;"><strong>Molecular mass = mass of 22.4 L of the gas at STP</strong></p>

<h3>Deduction 3 &mdash; Atomicity of Gas Molecules</h3>
<p>Gay-Lussac's volume ratios require gas molecules to be polyatomic. For example, 1 vol H<sub>2</sub> + 1 vol Cl<sub>2</sub> &rarr; 2 vol HCl only works if H<sub>2</sub> and Cl<sub>2</sub> each contain 2 atoms (they are <strong>diatomic</strong>). Similarly O<sub>2</sub>, N<sub>2</sub>, F<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub> are diatomic; noble gases are monatomic.</p>

<h3>Deduction 4 &mdash; Molecular Formula from V.D. and Volumetric Composition</h3>
<div class="example-box">
  <span class="example-label">Worked Example</span>
  <p>An oxide of nitrogen contains the same volume of nitrogen as the oxide. Vapour density = 38. Find its molecular formula.</p>
  <p><strong>Step 1:</strong> Equal volumes &rarr; equal molecules &rarr; 2 N atoms per molecule of oxide. Formula: N<sub>2</sub>O<sub>y</sub></p>
  <p><strong>Step 2:</strong> M = 2 &times; 38 = 76</p>
  <p><strong>Step 3:</strong> (2 &times; 14) + 16y = 76 &rArr; y = 3</p>
  <p><strong>Answer: N<sub>2</sub>O<sub>3</sub></strong></p>
</div>

<hr/>

<h2>4. The Mole Concept</h2>
<p>Chemists use the <strong>mole (mol)</strong> as a counting unit for atoms, ions, and molecules, analogous to "a dozen" but calibrated to atomic scale.</p>

<div class="note-box">
  <strong>Definition:</strong> 1 mole = number of atoms in exactly 12 g of &#185;&#178;C = <strong>6.022 &times; 10<sup>23</sup></strong> (Avogadro's number, N<sub>A</sub>).
</div>

<h3>4.1 Mole &mdash; Number Relationship</h3>
<p style="text-align:center;">No. of moles = Number of particles / 6.022 &times; 10<sup>23</sup></p>

<div class="example-box">
  <span class="example-label">Worked Example &mdash; Moles to Particles</span>
  <p>Find molecules, atoms, and electrons in 0.5 mol H<sub>2</sub>O.</p>
  <p>Molecules = 0.5 &times; 6.022 &times; 10<sup>23</sup> = <strong>3.011 &times; 10<sup>23</sup></strong></p>
  <p>Atoms (3 per molecule) = 3.011 &times; 10<sup>23</sup> &times; 3 = <strong>9.033 &times; 10<sup>23</sup></strong></p>
  <p>Electrons (10 per molecule) = 3.011 &times; 10<sup>23</sup> &times; 10 = <strong>3.011 &times; 10<sup>24</sup></strong></p>
</div>

<h3>4.2 Mole &mdash; Mass Relationship</h3>
<p>1 mol of a substance = its molar mass in grams.</p>
<ul>
  <li>1 mol C = 12 g &nbsp;|&nbsp; 1 mol Cu = 63.5 g &nbsp;|&nbsp; 1 mol CO<sub>2</sub> = 44 g &nbsp;|&nbsp; 1 mol H<sub>2</sub>O = 18 g</li>
</ul>
<p style="text-align:center;">No. of moles = Given mass (g) / Molar mass</p>
<p>Using atomic mass gives <strong>gram-atoms</strong>; using molecular mass gives <strong>gram-molecules</strong>.</p>

<div class="example-box">
  <span class="example-label">Worked Example &mdash; Mass to Moles</span>
  <p>An oxygen cylinder contains 0.16 kg of O<sub>2</sub>. Find gram-atoms of O, gram-molecules of O<sub>2</sub>, and moles of O<sub>2</sub>.</p>
  <p>Mass = 160 g; Atomic mass O = 16; Molecular mass O<sub>2</sub> = 32</p>
  <p>Gram-atoms of O = 160 / 16 = <strong>10</strong></p>
  <p>Gram-molecules of O<sub>2</sub> = 160 / 32 = <strong>5</strong></p>
  <p>Moles of O<sub>2</sub> = <strong>5 mol</strong></p>
</div>

<h3>4.3 Mole &mdash; Volume Relationship (Gases)</h3>
<p style="text-align:center;">No. of moles = Given volume (L) / 22.4 (at STP)</p>
<p>At STP: 1 mol gas = 22.4 L. At RTP: 1 mol gas = 24.0 L.</p>

<h3>4.4 The Central Mole Triangle</h3>
<div style="border:1px solid var(--eb-border, #444); border-radius:8px; padding:16px; margin:12px 0; text-align:center;">
  <p><strong>No. of moles = Given mass (g) / Molar mass</strong></p>
  <p><strong>= Given volume (L) / 22.4 (at STP)</strong></p>
  <p><strong>= No. of particles / 6.022 &times; 10<sup>23</sup></strong></p>
</div>

<hr/>

<h2>5. Quantitative Calculations from Chemical Equations</h2>
<p>A <strong>balanced chemical equation</strong> gives the molar ratios of reactants and products. These ratios allow calculation of mass, volume, or particle count for any substance when the amount of one is known.</p>
<p><strong>Method:</strong> Convert known &rarr; moles &rarr; apply mole ratio &rarr; convert to required unit.</p>

<div class="example-box">
  <span class="example-label">Worked Example &mdash; Mass and Volume Calculation</span>
  <p>3.2 kg of CH<sub>4</sub>. Find: (a) mass of O<sub>2</sub> needed, (b) volume of CO<sub>2</sub> at STP.</p>
  <p>CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O</p>
  <p>Moles of CH<sub>4</sub> = 3200 / 16 = 200 mol</p>
  <p>(a) Moles O<sub>2</sub> = 200 &times; 2 = 400 mol; Mass = 400 &times; 32 = <strong>12,800 g = 12.8 kg</strong></p>
  <p>(b) Moles CO<sub>2</sub> = 200 mol; Volume = 200 &times; 22.4 = <strong>4,480 L</strong></p>
</div>

<hr/>

<h2>6. Limiting Reactant and Excess Reactant</h2>
<p>The <strong>limiting reactant</strong> is the one completely consumed first, limiting how much product can form. The <strong>excess reactant</strong> is the one left over after the reaction ends.</p>

<p><strong>To identify the limiting reactant:</strong></p>
<ol>
  <li>Convert all reactant quantities to moles.</li>
  <li>Divide each reactant's moles by its stoichiometric coefficient.</li>
  <li>The reactant with the <strong>smallest</strong> result is the limiting reactant.</li>
</ol>

<div class="example-box">
  <span class="example-label">Worked Example 1 &mdash; Ammonia Synthesis</span>
  <p>4 mol N<sub>2</sub> + 9 mol H<sub>2</sub>. Find limiting reactant, mass of NH<sub>3</sub>, and excess N<sub>2</sub> remaining.</p>
  <p>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) &rarr; 2NH<sub>3</sub>(g)</p>
  <p>N<sub>2</sub>: 4/1 = 4.0 &nbsp;&nbsp;|&nbsp;&nbsp; H<sub>2</sub>: 9/3 = 3.0 &rarr; <strong>H<sub>2</sub> is limiting</strong></p>
  <p>NH<sub>3</sub> produced: 9 &times; (2/3) = 6 mol; Mass = 6 &times; 17 = <strong>102 g</strong></p>
  <p>N<sub>2</sub> consumed: 9/3 = 3 mol; N<sub>2</sub> remaining: 4 &minus; 3 = 1 mol = <strong>28 g</strong></p>
</div>

<div class="example-box">
  <span class="example-label">Worked Example 2 &mdash; Rebreathing Mask</span>
  <p>0.150 mol KO<sub>2</sub> + 0.100 mol H<sub>2</sub>O. What mass of O<sub>2</sub> is produced?</p>
  <p>4KO<sub>2</sub>(s) + 2H<sub>2</sub>O(l) &rarr; 4KOH(s) + 3O<sub>2</sub>(g)</p>
  <p>KO<sub>2</sub>: 0.150/4 = 0.0375 &nbsp;&nbsp;|&nbsp;&nbsp; H<sub>2</sub>O: 0.100/2 = 0.0500 &rarr; <strong>KO<sub>2</sub> is limiting</strong></p>
  <p>Moles O<sub>2</sub> = 0.150 &times; (3/4) = 0.1125 mol; Mass = 0.1125 &times; 32 = <strong>3.6 g</strong></p>
</div>

<hr/>

<h2>7. Theoretical Yield, Experimental Yield, and Percentage Yield</h2>
<p><strong>Theoretical yield:</strong> Maximum product from stoichiometry (100% conversion assumed).</p>
<p><strong>Experimental yield:</strong> Product actually obtained. Almost always less than theoretical yield due to incomplete reactions, losses in handling, side reactions, or impurities.</p>
<p style="text-align:center;"><strong>% Yield = (Experimental yield / Theoretical yield) &times; 100%</strong></p>

<div class="example-box">
  <span class="example-label">Worked Example &mdash; Limestone Decomposition</span>
  <p>CaCO<sub>3</sub>(s) &rarr; CaO(s) + CO<sub>2</sub>(g)</p>
  <p>From 1,000 g CaCO<sub>3</sub>: Theoretical CaO = (1000/100) &times; 56 = <strong>560 g</strong></p>
  <p>Actual yield = 500 g</p>
  <p>% Yield = (500/560) &times; 100 = <strong>89.3%</strong></p>
</div>

<div class="example-box">
  <span class="example-label">Worked Example &mdash; Back-Calculation from % Yield</span>
  <p>0.1234 g AgCl precipitates. Assuming 98.7% yield, find grams of Ag<sup>+</sup> originally present.</p>
  <p>Ag<sup>+</sup> + Cl<sup>&minus;</sup> &rarr; AgCl &nbsp;|&nbsp; M(Ag) = 108, M(AgCl) = 143.5</p>
  <p>Experimental yield of Ag<sup>+</sup> = 0.1234 &times; (108/143.5) = 0.0928 g</p>
  <p>Theoretical yield = 0.0928 / 0.987 = <strong>0.094 g</strong></p>
</div>

<hr/>

<h2>8. Empirical and Molecular Formula from Percentage Composition</h2>
<p>Given percentage composition by mass, derive the <strong>empirical formula</strong> (simplest whole-number atom ratio) and then the <strong>molecular formula</strong> (actual atom count).</p>

<h3>Step-by-Step Method</h3>
<ol>
  <li>Assume 100 g &rarr; % values become grams directly.</li>
  <li>Convert grams to moles: moles = mass / atomic mass.</li>
  <li>Divide all mole values by the <em>smallest</em> value.</li>
  <li>Round to nearest whole number (multiply all by 2 if ~x.5; by 3 if ~x.33).</li>
  <li>Write the empirical formula.</li>
  <li>Calculate empirical formula mass.</li>
  <li>Find n = Molecular mass / Empirical formula mass &nbsp;(M = 2 &times; V.D. if V.D. given).</li>
  <li>Molecular formula = (Empirical formula)<sub>n</sub>.</li>
</ol>

<div class="example-box">
  <span class="example-label">Worked Example &mdash; Molecular Formula from % Composition</span>
  <p>Compound: C = 40%, H = 6.7%, O = 53.3%. Vapour density = 90.</p>
  <p>Moles in 100 g: C = 40/12 = 3.33 &nbsp;|&nbsp; H = 6.7/1 = 6.7 &nbsp;|&nbsp; O = 53.3/16 = 3.33</p>
  <p>Divide by smallest (3.33): C = 1, H &asymp; 2, O = 1 &rarr; Empirical formula: <strong>CH<sub>2</sub>O</strong></p>
  <p>Empirical mass = 12 + 2 + 16 = 30 g/mol</p>
  <p>Molecular mass = 2 &times; 90 = 180 g/mol; n = 180/30 = 6</p>
  <p>Molecular formula: <strong>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></strong> (glucose, MW = 180 &#10003;)</p>
</div>

<hr/>

<div class="note-box">
  <strong>NEB Exam Focus &mdash; Unit 2 Stoichiometry</strong>
  <p>High-priority areas based on the Unit 2 exercise set:</p>
  <ul>
    <li><strong>Laws of Stoichiometry:</strong> State + verify numerically. Multiple proportion and reciprocal proportion calculations appear most often. For reciprocal proportion: compute both ratios and show they are simple multiples of each other.</li>
    <li><strong>Avogadro's deductions:</strong> Deriving M = 2 &times; V.D. is a classic 2-mark derivation. Atomicity from volume ratios is a common short answer. Finding molecular formula from V.D. + volumetric composition is a reliable long-answer pattern.</li>
    <li><strong>Mole calculations:</strong> Interconvert mass &harr; moles &harr; particles &harr; volume at STP. MCQ trap: gram-atom vs. gram-molecule vs. mole &mdash; know which denominator to use.</li>
    <li><strong>Stoichiometric calculations:</strong> Convert to moles &rarr; apply mole ratio &rarr; convert to required unit. NEB often provides mass of one substance and asks for mass + volume of another.</li>
    <li><strong>Limiting reactant:</strong> Identify using the moles/coefficient method. Calculate product mass AND excess reactant remaining &mdash; both parts usually required for full marks.</li>
    <li><strong>Percentage yield:</strong> Short-answer staple. Know all three terms precisely. Haber process (N<sub>2</sub> + H<sub>2</sub> &rarr; NH<sub>3</sub>) is the most common real-world context. Back-calculation also appears.</li>
    <li><strong>Empirical/molecular formula:</strong> High-mark long-answer. Show all steps. Combustion analysis (from CO<sub>2</sub> + H<sub>2</sub>O masses, find C/H/O composition) also appears in the exercise set.</li>
  </ul>
</div>`,
  },
  {
    id: "chem11-atomic-structure",
    class: "11",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    title: "Atomic Structure — Class 11 Chemistry",
    icon: "⚛️",
    summary:
      "Complete NEB Class 11 guide for Unit 3: Rutherford’s nuclear model and its limitations, Bohr’s atomic model and hydrogen spectrum, quantum mechanical model (de Broglie dual nature, Heisenberg uncertainty principle), probability and orbitals, four quantum numbers, orbital shapes, Pauli’s exclusion principle, Aufbau principle, Hund’s rule, and electronic configurations including Cr and Cu anomalies.",
    tags: [
      "Atomic Structure",
      "Rutherford Model",
      "Bohr Model",
      "Hydrogen Spectrum",
      "Quantum Numbers",
      "de Broglie",
      "Heisenberg",
      "Electronic Configuration",
      "Aufbau Principle",
      "Hund's Rule",
      "Class 11",
      "Chemistry",
      "NEB",
    ],
    content: `<div class="formula-box">
  <span class="formula-label">Key Formula Reference: Unit 3 Atomic Structure</span>
  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 12px; margin-top: 8px;">
    <div>
      <strong>Bohr Energy Transition:</strong><br/>
      ΔE = E<sub>2</sub> &minus; E<sub>1</sub> = hν<br/>
      <strong>Angular Momentum Quantization:</strong><br/>
      mvr = n &times; h / 2π
    </div>
    <div>
      <strong>Rydberg Formula (Hydrogen Spectrum):</strong><br/>
      1/λ = R<sub>H</sub> &times; (1/n<sub>1</sub><sup>2</sup> &minus; 1/n<sub>2</sub><sup>2</sup>)<br/>
      R<sub>H</sub> = 1.09 &times; 10<sup>7</sup> m<sup>&minus;1</sup>
    </div>
    <div>
      <strong>de Broglie Wave Equation:</strong><br/>
      λ = h / mv = h / p<br/>
      h = 6.626 &times; 10<sup>&minus;34</sup> J&middot;s
    </div>
    <div>
      <strong>Heisenberg Uncertainty Principle:</strong><br/>
      Δx &times; Δp &ge; h / 4π<br/>
      <strong>Max electrons per shell:</strong> 2n<sup>2</sup><br/>
      <strong>Max electrons per subshell:</strong> 2(2l+1)
    </div>
  </div>
</div>

<h2>1. Discovery of Subatomic Particles</h2>
<p>The modern picture of the atom was built over decades of experiment. Three key discoveries established the subatomic picture:</p>
<ul>
  <li><strong>1897 — J.J. Thomson</strong> discovered the <strong>electron</strong> (negatively charged) using cathode ray tube experiments.</li>
  <li><strong>1911 — Ernest Rutherford</strong> identified the <strong>proton</strong> (positively charged nucleus) through his alpha-scattering experiment.</li>
  <li><strong>1932 — James Chadwick</strong> discovered the <strong>neutron</strong> (neutral, mass similar to proton) inside the nucleus.</li>
</ul>

<hr/>

<h2>2. Rutherford's Alpha-Scattering Experiment</h2>
<p>In 1909, Hans Geiger and Ernest Marsden, working under Rutherford's guidance, bombarded a thin gold foil with a beam of positively charged <strong>alpha particles</strong> (helium nuclei, He<sup>2+</sup>) and observed the deflections on a zinc sulfide (ZnS) fluorescent screen.</p>

<h3>Observations</h3>
<ul>
  <li>The vast majority of alpha particles (~99%) passed straight through the foil with little or no deflection.</li>
  <li>A small fraction of particles were deflected at small angles.</li>
  <li>A very few particles (roughly 1 in 20,000) were deflected at very large angles, some bouncing almost straight back (nearly 180&deg;).</li>
</ul>

<h3>Conclusions — Rutherford's Nuclear (Planetary) Model</h3>
<ul>
  <li>Because most particles passed through undeflected, the atom is <strong>mostly empty space</strong>.</li>
  <li>The small-angle deflections indicated a concentrated region of positive charge inside the atom.</li>
  <li>The rare near-180&deg; rebounds confirmed that almost all the atom's mass is packed into a tiny, extremely dense, positively charged core called the <strong>nucleus</strong>.</li>
  <li>Electrons occupy the vast empty space surrounding the nucleus, orbiting it much like planets orbit the Sun — hence called the <strong>planetary model</strong>.</li>
</ul>

<hr/>

<h2>3. Limitations of Rutherford's Model</h2>
<p>Rutherford's model established the nuclear atom but could not explain a fundamental problem: <strong>atomic stability</strong>.</p>
<p>According to classical electrodynamics, a charged particle moving in a circular path is undergoing continuous centripetal acceleration. An accelerating charged particle <em>must</em> continuously radiate electromagnetic energy. An orbiting electron should therefore steadily lose energy, spiral inward along a shrinking orbit, and ultimately collapse into the nucleus within a fraction of a second. Atoms would not be stable — yet they clearly are.</p>
<p>Rutherford's model also offered no explanation for why atoms emit light only at specific, discrete wavelengths (the observed line spectra) rather than a continuous spectrum.</p>

<hr/>

<h2>4. Bohr's Atomic Model</h2>
<p>In 1913, Danish physicist Niels Bohr combined classical mechanics with the emerging quantum theory to propose a new atomic model. His four key postulates are:</p>

<ol>
  <li><strong>Quantized orbits (shells):</strong> Electrons revolve around the nucleus in fixed, well-defined circular paths called <strong>orbits</strong> or <strong>shells</strong>. Each orbit corresponds to a specific, fixed energy — so orbits are also called <strong>stationary energy levels</strong> (K, L, M, N... for n = 1, 2, 3, 4...).</li>
  <li><strong>No radiation in orbit:</strong> As long as an electron stays in a particular orbit, it neither absorbs nor emits energy. The stability problem of Rutherford's model is resolved by this postulate. Energy increases with distance: E<sub>1</sub> &lt; E<sub>2</sub> &lt; E<sub>3</sub> &lt; E<sub>4</sub>.</li>
  <li><strong>Quantum jumps:</strong> An electron can move between orbits only by absorbing or emitting energy exactly equal to the difference between the two energy levels:<br/>
    <span style="display:block; text-align:center; margin:8px 0;">ΔE = E<sub>2</sub> &minus; E<sub>1</sub> = hν</span>
    where h is Planck's constant and ν is the frequency of radiation emitted or absorbed. Electrons absorb energy to jump to a higher level (excitation) and release energy as a photon when falling to a lower level (emission).
  </li>
  <li><strong>Angular momentum quantization:</strong> The angular momentum of an electron in a given orbit is an integer multiple of h/2π:<br/>
    <span style="display:block; text-align:center; margin:8px 0;">mvr = n &times; h / 2π &nbsp;&nbsp;(n = 1, 2, 3, ...)</span>
    where m = mass of electron, v = orbital velocity, r = orbital radius, and n = principal quantum number.
  </li>
</ol>

<hr/>

<h2>5. Hydrogen Spectrum and Spectral Series</h2>
<p>When a high voltage is applied across hydrogen gas in a discharge tube, electrons are excited to higher energy levels. As they cascade back down to lower levels, they emit photons of specific frequencies. The resulting pattern of discrete bright lines is the <strong>hydrogen emission spectrum</strong>.</p>
<p>The wavelength of each spectral line is given by the <strong>Rydberg formula</strong>:</p>
<div style="text-align:center; margin:12px 0; font-size:1.05em;">
  1/λ = R<sub>H</sub> &times; (1/n<sub>1</sub><sup>2</sup> &minus; 1/n<sub>2</sub><sup>2</sup>)
</div>
<p>where n<sub>1</sub> is the lower energy level (where the electron lands), n<sub>2</sub> is the higher energy level (where it starts), and R<sub>H</sub> = 1.09 &times; 10<sup>7</sup> m<sup>&minus;1</sup> is the Rydberg constant.</p>

<h3>Spectral Series of Hydrogen</h3>
<table>
  <thead>
    <tr><th>Series</th><th>n<sub>1</sub> (lower level)</th><th>n<sub>2</sub> (upper levels)</th><th>Region</th></tr>
  </thead>
  <tbody>
    <tr><td>Lyman</td><td>1</td><td>2, 3, 4, ...</td><td>Ultraviolet (UV)</td></tr>
    <tr><td>Balmer</td><td>2</td><td>3, 4, 5, ...</td><td>Visible</td></tr>
    <tr><td>Paschen</td><td>3</td><td>4, 5, 6, ...</td><td>Infrared (IR)</td></tr>
    <tr><td>Brackett</td><td>4</td><td>5, 6, 7, ...</td><td>Infrared (IR)</td></tr>
    <tr><td>Pfund</td><td>5</td><td>6, 7, 8, ...</td><td>Infrared (IR)</td></tr>
  </tbody>
</table>

<div class="example-box">
  <span class="example-label">Worked Example — Balmer Series Wavelength</span>
  <p>Calculate the wavelength of the spectral line produced when an electron in a hydrogen atom transitions from n<sub>2</sub> = 4 to n<sub>1</sub> = 2 (Balmer series).</p>
  <p><strong>Given:</strong> R<sub>H</sub> = 1.09 &times; 10<sup>7</sup> m<sup>&minus;1</sup>, n<sub>1</sub> = 2, n<sub>2</sub> = 4</p>
  <p><strong>Step 1:</strong> Apply the Rydberg formula:<br/>
  1/λ = 1.09 &times; 10<sup>7</sup> &times; (1/2<sup>2</sup> &minus; 1/4<sup>2</sup>)</p>
  <p><strong>Step 2:</strong> Calculate the bracket:<br/>
  1/4 &minus; 1/16 = 4/16 &minus; 1/16 = 3/16 = 0.1875</p>
  <p><strong>Step 3:</strong> 1/λ = 1.09 &times; 10<sup>7</sup> &times; 0.1875 = 2.044 &times; 10<sup>6</sup> m<sup>&minus;1</sup></p>
  <p><strong>Step 4:</strong> λ = 1 / (2.044 &times; 10<sup>6</sup>) = <strong>4.89 &times; 10<sup>&minus;7</sup> m = 489 nm</strong></p>
  <p>This falls in the <strong>visible (blue-green) region</strong>, confirming it belongs to the Balmer series. &#10003;</p>
</div>

<div class="note-box">
  <strong>Why multiple spectral series from one electron?</strong><br/>
  Although hydrogen has only one electron, a sample of hydrogen gas contains enormous numbers of atoms with electrons excited to many different energy levels simultaneously. Each possible downward transition (e.g., 5&rarr;1, 4&rarr;1, 3&rarr;2, 5&rarr;3 ...) produces a distinct spectral line. The full spectrum is the superposition of all these transitions.
</div>

<hr/>

<h2>6. Limitations of Bohr's Theory</h2>
<ul>
  <li>It successfully explains only the spectrum of hydrogen (single-electron atoms). It cannot account for the spectra of multi-electron atoms like helium, lithium ions, etc.</li>
  <li>It cannot explain the <strong>Zeeman effect</strong> (splitting of spectral lines in a magnetic field) or the <strong>Stark effect</strong> (splitting in an electric field).</li>
  <li>It contradicts the later-established <strong>wave-particle duality</strong> of electrons by treating them as particles in fixed orbits with precisely defined paths and momenta.</li>
  <li>It provides no theoretical justification for <em>why</em> angular momentum should be quantized in integer multiples of h/2π.</li>
</ul>

<hr/>

<h2>7. Quantum Mechanical Model</h2>
<p>The failure of Bohr's model for multi-electron systems led to the development of quantum mechanics in the 1920s, built on two foundational ideas:</p>

<h3>Planck's Quantum Theory</h3>
<p>In 1900, Max Planck showed that light (electromagnetic radiation) is emitted and absorbed in discrete packets of energy called <strong>quanta</strong>. The energy of one quantum is:</p>
<p style="text-align:center;">E = hν</p>
<p>where h = 6.626 &times; 10<sup>&minus;34</sup> J&middot;s (Planck's constant) and ν is the frequency of radiation.</p>

<h3>de Broglie's Wave-Particle Duality</h3>
<p>In 1924, French physicist Louis de Broglie proposed that <strong>all matter in motion possesses wave character</strong> — not just light. Combining Planck's quantum (E = hν) with Einstein's mass-energy equivalence (E = mc<sup>2</sup>) and using ν = c/λ, de Broglie derived:</p>
<p style="text-align:center;"><strong>λ = h / mv = h / p</strong></p>
<p>where λ is the de Broglie wavelength, m is the particle's mass, v is its velocity, and p = mv is its momentum.</p>
<p>This wavelength is only measurable for <strong>microscopic particles</strong> (electrons, atoms) because their momentum is tiny. For macroscopic objects (a cricket ball, a planet), the momentum is so large that the resulting wavelength is negligibly small — making the wave character undetectable.</p>

<div class="example-box">
  <span class="example-label">Worked Example — de Broglie Wavelength of an Electron</span>
  <p>Calculate the de Broglie wavelength of an electron moving at a velocity of 2.0 &times; 10<sup>6</sup> m/s. (Mass of electron = 9.11 &times; 10<sup>&minus;31</sup> kg)</p>
  <p><strong>Given:</strong> h = 6.626 &times; 10<sup>&minus;34</sup> J&middot;s, m = 9.11 &times; 10<sup>&minus;31</sup> kg, v = 2.0 &times; 10<sup>6</sup> m/s</p>
  <p><strong>Step 1:</strong> Momentum p = mv = 9.11 &times; 10<sup>&minus;31</sup> &times; 2.0 &times; 10<sup>6</sup> = 1.822 &times; 10<sup>&minus;24</sup> kg&middot;m/s</p>
  <p><strong>Step 2:</strong> λ = h / p = (6.626 &times; 10<sup>&minus;34</sup>) / (1.822 &times; 10<sup>&minus;24</sup>)</p>
  <p><strong>Step 3:</strong> λ = (6.626 / 1.822) &times; 10<sup>&minus;34+24</sup> = 3.637 &times; 10<sup>&minus;10</sup> m</p>
  <p><strong>Answer: λ &asymp; 3.64 &times; 10<sup>&minus;10</sup> m = 0.364 nm</strong></p>
  <p>This is comparable to atomic bond lengths, confirming that electron wavelengths are physically significant. &#10003;</p>
</div>

<hr/>

<h2>8. Heisenberg's Uncertainty Principle</h2>
<div class="note-box">
  <strong>Statement:</strong> It is impossible to simultaneously determine both the exact position and the exact momentum of a microscopic particle (such as an electron) with arbitrary precision.<br/><br/>
  <strong>Mathematical form:</strong><br/>
  Δx &times; Δp &ge; h / 4π<br/><br/>
  where Δx = uncertainty in position, Δp = uncertainty in momentum, and h = Planck's constant.
</div>
<p>The more precisely we pin down an electron's position, the less precisely we can know its momentum — and vice versa. This is not a limitation of instruments; it is a fundamental property of nature at the quantum scale.</p>
<p><strong>Physical reasoning:</strong> To detect an electron's position, we need to bounce a photon off it (just as we see objects by reflected light). But a photon carries enough momentum that the act of observation itself disturbs the electron's momentum unpredictably. The more energetic the photon (for better position resolution), the larger the momentum kick it delivers.</p>
<p>This principle makes it fundamentally impossible to define electron <em>orbits</em> (fixed paths with precise position AND velocity at every point). It directly invalidates Bohr's orbital picture and necessitates the probabilistic quantum mechanical description.</p>
<p>The principle applies only to microscopic particles — for macroscopic objects the uncertainties are negligibly small compared to the objects' size and momentum.</p>

<hr/>

<h2>9. Probability, Wave Functions, and Atomic Orbitals</h2>
<p>In quantum mechanics, the state of an electron is described by a mathematical function called the <strong>wave function (Ψ)</strong>. The wave function itself has no direct physical meaning, but its square, <strong>Ψ<sup>2</sup></strong>, gives the <strong>probability density</strong> — the probability of finding the electron at a particular point in space.</p>
<p>An <strong>atomic orbital</strong> is the three-dimensional region of space around the nucleus where the probability of finding an electron is highest (conventionally, the region enclosing ~90% of the electron probability).</p>
<p>Key features of the probability picture:</p>
<ul>
  <li>A <strong>node</strong> is a region where the probability of finding the electron is exactly zero (Ψ<sup>2</sup> = 0).</li>
  <li>For the 1s orbital, probability is highest at the nucleus and decreases outward. The 2s orbital has a spherical node (a shell of zero probability) between two regions of high probability. The 3s orbital has two such nodes.</li>
  <li>Electron density becomes more spread out (more diffuse) as the principal quantum number n increases.</li>
</ul>

<hr/>

<h2>10. The Four Quantum Numbers</h2>
<p>Each electron in an atom is completely described by a unique set of four quantum numbers. Together, these numbers specify the shell, subshell, orbital, and spin of the electron.</p>

<h3>Principal Quantum Number (n)</h3>
<ul>
  <li>Introduced by Wolfgang Pauli, further developed by Bohr.</li>
  <li>Represents the <strong>main energy level (shell)</strong>. Values: n = 1, 2, 3, 4, ... (positive integers only).</li>
  <li>As n increases, both the <strong>energy</strong> of the electron and its <strong>average distance</strong> from the nucleus increase.</li>
  <li>Maximum electrons per shell = <strong>2n<sup>2</sup></strong>. For n=1: 2 electrons; n=2: 8 electrons; n=3: 18 electrons.</li>
  <li>Shells are labelled K(n=1), L(n=2), M(n=3), N(n=4)...</li>
  <li>Elements in the same period share the same value of n. Atomic size increases down a group as n increases.</li>
</ul>

<h3>Azimuthal (Angular Momentum) Quantum Number (l)</h3>
<ul>
  <li>Proposed by Arnold Sommerfeld (1915). Determines the <strong>shape of the orbital (subshell)</strong>.</li>
  <li>Values: l = 0, 1, 2, ... up to (n&minus;1). So for n=3, l can be 0, 1, or 2.</li>
  <li>Maximum electrons per subshell = <strong>2(2l+1)</strong>.</li>
</ul>
<table>
  <thead><tr><th>l value</th><th>Subshell</th><th>Shape</th><th>Max electrons</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>s</td><td>Spherical</td><td>2</td></tr>
    <tr><td>1</td><td>p</td><td>Dumbbell</td><td>6</td></tr>
    <tr><td>2</td><td>d</td><td>Complex (double dumbbell)</td><td>10</td></tr>
    <tr><td>3</td><td>f</td><td>Complex</td><td>14</td></tr>
  </tbody>
</table>

<h3>Magnetic Quantum Number (m<sub>l</sub>)</h3>
<ul>
  <li>Also proposed by Sommerfeld. Determines the <strong>orientation of the orbital</strong> in space.</li>
  <li>Values: &minus;l, ..., &minus;1, 0, +1, ..., +l. Total number of allowed orientations (orbitals) per subshell = <strong>2l+1</strong>.</li>
</ul>
<table>
  <thead><tr><th>Subshell</th><th>l</th><th>m<sub>l</sub> values</th><th>No. of orbitals</th></tr></thead>
  <tbody>
    <tr><td>s</td><td>0</td><td>0</td><td>1</td></tr>
    <tr><td>p</td><td>1</td><td>&minus;1, 0, +1</td><td>3</td></tr>
    <tr><td>d</td><td>2</td><td>&minus;2, &minus;1, 0, +1, +2</td><td>5</td></tr>
    <tr><td>f</td><td>3</td><td>&minus;3, &minus;2, &minus;1, 0, +1, +2, +3</td><td>7</td></tr>
  </tbody>
</table>
<p>The single m<sub>l</sub> value (0) for the s-subshell means the electron cloud is uniformly distributed in all directions — no preferred orientation. The three values for p give three mutually perpendicular orbitals (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>).</p>

<h3>Spin Quantum Number (m<sub>s</sub>)</h3>
<ul>
  <li>Proposed by George Uhlenbeck and Samuel Goudsmit (1925). Describes the intrinsic spin of the electron.</li>
  <li>Only two possible values: <strong>+&frac12;</strong> (clockwise spin, represented by &uarr;) and <strong>&minus;&frac12;</strong> (anticlockwise spin, represented by &darr;).</li>
  <li>Only two values means each orbital can hold a maximum of <strong>2 electrons</strong>, and they must have opposite spins.</li>
  <li><strong>Diamagnetic:</strong> all electrons are paired (opposite spins cancel) — substance is weakly repelled by magnetic fields.</li>
  <li><strong>Paramagnetic:</strong> one or more unpaired electrons — substance is attracted by magnetic fields.</li>
</ul>

<div class="example-box">
  <span class="example-label">Solved Problem — Orbitals for n = 3</span>
  <p>Find the total number of orbitals for principal quantum number n = 3.</p>
  <p>For n = 3: l = 0, 1, 2</p>
  <table>
    <thead><tr><th>Subshell</th><th>l</th><th>m<sub>l</sub> values</th><th>No. of orbitals</th></tr></thead>
    <tbody>
      <tr><td>3s</td><td>0</td><td>0</td><td>1</td></tr>
      <tr><td>3p</td><td>1</td><td>&minus;1, 0, +1</td><td>3</td></tr>
      <tr><td>3d</td><td>2</td><td>&minus;2, &minus;1, 0, +1, +2</td><td>5</td></tr>
    </tbody>
  </table>
  <p><strong>Total orbitals = 1 + 3 + 5 = 9</strong> (also = n<sup>2</sup> = 3<sup>2</sup> = 9 &#10003;)</p>
</div>

<hr/>

<h2>11. Shapes of Atomic Orbitals</h2>
<p>The shape of an orbital is the three-dimensional boundary surface enclosing the region where the probability of finding the electron is high.</p>

<h3>s Orbitals</h3>
<p>The s orbital is <strong>spherically symmetric</strong> — the probability of finding the electron is the same in all directions at a given distance from the nucleus. The 1s orbital is a single sphere centered on the nucleus. The 2s orbital is a larger sphere (higher energy, greater average distance) with one spherical node — a shell at a specific radius where the probability drops to zero before rising again. The 3s orbital has two nodes. In general, the number of radial nodes = n &minus; l &minus; 1.</p>

<h3>p Orbitals</h3>
<p>For l = 1, there are three p orbitals, each pointing along one of the three Cartesian axes: <strong>p<sub>x</sub></strong> (along x-axis), <strong>p<sub>y</sub></strong> (along y-axis), and <strong>p<sub>z</sub></strong> (along z-axis). Each p orbital has a <strong>dumbbell shape</strong> — two lobes of electron density on opposite sides of the nucleus, connected at a point of zero probability (a nodal plane) at the nucleus itself. The three p orbitals are mutually perpendicular and have exactly the same energy — they are <strong>degenerate orbitals</strong>. Degeneracy means electrons in p<sub>x</sub>, p<sub>y</sub>, and p<sub>z</sub> all have the same potential energy despite occupying different regions of space.</p>
<p><em>Origin of orbital names:</em> Scientists categorized hydrogen spectral lines as sharp (s), principal (p), diffuse (d), and fundamental (f) — these labels became the subshell designations.</p>

<hr/>

<h2>12. Pauli's Exclusion Principle</h2>
<p>Austrian physicist Wolfgang Pauli proposed in 1925:</p>
<div class="note-box">
  <strong>Pauli's Exclusion Principle:</strong> No two electrons in the same atom can have the same set of all four quantum numbers (n, l, m<sub>l</sub>, m<sub>s</sub>).
</div>
<p>In practice: two electrons in the same orbital share the same n, l, and m<sub>l</sub>, so they <em>must</em> differ in m<sub>s</sub> — one must have m<sub>s</sub> = +&frac12; and the other m<sub>s</sub> = &minus;&frac12;. Each orbital therefore holds a maximum of <strong>two electrons with opposite spins</strong>.</p>

<div class="example-box">
  <span class="example-label">Example — Quantum Numbers for Helium (He, Z=2)</span>
  <p>Both electrons of helium occupy the 1s orbital. Their quantum number sets are:</p>
  <table>
    <thead><tr><th>Electron</th><th>n</th><th>l</th><th>m<sub>l</sub></th><th>m<sub>s</sub></th></tr></thead>
    <tbody>
      <tr><td>1st</td><td>1</td><td>0</td><td>0</td><td>+&frac12;</td></tr>
      <tr><td>2nd</td><td>1</td><td>0</td><td>0</td><td>&minus;&frac12;</td></tr>
    </tbody>
  </table>
  <p>The sets differ only in m<sub>s</sub> — satisfying Pauli's exclusion principle. &#10003;</p>
</div>

<hr/>

<h2>13. Aufbau Principle and the (n+l) Rule</h2>
<p>The <strong>Aufbau principle</strong> (German: "building up") states:</p>
<div class="note-box">
  Electrons are added to atomic orbitals in order of increasing orbital energy. Lower-energy orbitals are filled before higher-energy ones.
</div>
<p>The energy of an orbital is determined using the <strong>(n+l) rule</strong>:</p>
<ul>
  <li><strong>Rule 1:</strong> An orbital with a lower (n+l) sum has lower energy.</li>
  <li><strong>Rule 2:</strong> If two orbitals have the same (n+l) sum, the one with the lower value of n has lower energy.</li>
</ul>

<table>
  <thead><tr><th>Orbital</th><th>n</th><th>l</th><th>(n+l)</th><th>Relative energy</th></tr></thead>
  <tbody>
    <tr><td>1s</td><td>1</td><td>0</td><td>1</td><td>Lowest</td></tr>
    <tr><td>2s</td><td>2</td><td>0</td><td>2</td><td>&uarr;</td></tr>
    <tr><td>2p</td><td>2</td><td>1</td><td>3</td><td>&uarr;</td></tr>
    <tr><td>3s</td><td>3</td><td>0</td><td>3</td><td>Same (n+l)=3 as 2p, but n=3&gt;2, so 3s &gt; 2p</td></tr>
    <tr><td>3p</td><td>3</td><td>1</td><td>4</td><td>&uarr;</td></tr>
    <tr><td>4s</td><td>4</td><td>0</td><td>4</td><td>Same (n+l)=4 as 3p, but n=4&gt;3, so 4s &gt; 3p</td></tr>
    <tr><td>3d</td><td>3</td><td>2</td><td>5</td><td>Same (n+l)=5 as 4p, but n=3&lt;4, so 3d &lt; 4p</td></tr>
    <tr><td>4p</td><td>4</td><td>1</td><td>5</td><td>&uarr;</td></tr>
  </tbody>
</table>
<p><strong>Filling order:</strong> 1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p &lt; 5s &lt; 4d &lt; 5p ...</p>

<hr/>

<h2>14. Hund's Rule and Electronic Configurations</h2>
<p>The Aufbau principle tells us which subshell to fill next, but within a subshell containing multiple degenerate orbitals, we need Hund's rule.</p>

<div class="note-box">
  <strong>Hund's Rule of Maximum Multiplicity:</strong> When electrons are distributed among orbitals of equal energy (degenerate orbitals), each orbital is occupied by one electron first before any orbital gets a second electron. All singly occupied orbitals have electrons with parallel spins.
</div>
<p>This maximizes the number of unpaired electrons (called <strong>multiplicity</strong>), which minimizes electron-electron repulsion and increases atomic stability.</p>

<h3>Electronic Configuration — Notation</h3>
<p>Electronic configuration lists each occupied subshell with the number of electrons as a superscript. <strong>Noble gas notation</strong> (condensed form) replaces the inner-shell electrons with the symbol of the preceding noble gas in square brackets.</p>

<table>
  <thead><tr><th>Element (Z)</th><th>Full Configuration</th><th>Noble Gas Notation</th></tr></thead>
  <tbody>
    <tr><td>H (1)</td><td>1s<sup>1</sup></td><td>1s<sup>1</sup></td></tr>
    <tr><td>He (2)</td><td>1s<sup>2</sup></td><td>1s<sup>2</sup></td></tr>
    <tr><td>Li (3)</td><td>1s<sup>2</sup> 2s<sup>1</sup></td><td>[He] 2s<sup>1</sup></td></tr>
    <tr><td>C (6)</td><td>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup></td><td>[He] 2s<sup>2</sup> 2p<sup>2</sup></td></tr>
    <tr><td>N (7)</td><td>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup></td><td>[He] 2s<sup>2</sup> 2p<sup>3</sup></td></tr>
    <tr><td>O (8)</td><td>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup></td><td>[He] 2s<sup>2</sup> 2p<sup>4</sup></td></tr>
    <tr><td>Ne (10)</td><td>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></td><td>[He] 2s<sup>2</sup> 2p<sup>6</sup></td></tr>
    <tr><td>Na (11)</td><td>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></td><td>[Ne] 3s<sup>1</sup></td></tr>
    <tr><td>Fe (26)</td><td>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>6</sup></td><td>[Ar] 4s<sup>2</sup> 3d<sup>6</sup></td></tr>
  </tbody>
</table>

<h3>Anomalous Configurations: Chromium and Copper</h3>
<p>Two d-block elements do not follow the expected Aufbau filling. The reason is that <strong>half-filled and fully-filled d subshells have extra stability</strong> due to their higher symmetry and lower inter-electron repulsion.</p>

<table>
  <thead><tr><th>Element</th><th>Expected (Aufbau)</th><th>Actual</th><th>Reason</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>Chromium (Cr, Z=24)</strong></td>
      <td>[Ar] 4s<sup>2</sup> 3d<sup>4</sup></td>
      <td>[Ar] 4s<sup>1</sup> 3d<sup>5</sup></td>
      <td>Half-filled 3d<sup>5</sup> (5 unpaired electrons) is extra stable. One 4s electron is promoted to 3d.</td>
    </tr>
    <tr>
      <td><strong>Copper (Cu, Z=29)</strong></td>
      <td>[Ar] 4s<sup>2</sup> 3d<sup>9</sup></td>
      <td>[Ar] 4s<sup>1</sup> 3d<sup>10</sup></td>
      <td>Fully-filled 3d<sup>10</sup> is extra stable. One 4s electron is promoted to 3d.</td>
    </tr>
  </tbody>
</table>

<h3>Electronic Configuration of Ions</h3>
<p>When an atom forms a cation (loses electrons), electrons are always removed from the <strong>highest energy subshell first</strong>. Crucially, for transition metals, 4s electrons are removed before 3d electrons (even though 4s fills before 3d), because 4s electrons have lower ionization energy once the atom is charged.</p>
<table>
  <thead><tr><th>Species</th><th>Configuration</th><th>Note</th></tr></thead>
  <tbody>
    <tr><td>Na (11)</td><td>[Ne] 3s<sup>1</sup></td><td>Neutral atom</td></tr>
    <tr><td>Na<sup>+</sup></td><td>[Ne] = 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup></td><td>3s<sup>1</sup> electron removed</td></tr>
    <tr><td>Cl (17)</td><td>[Ne] 3s<sup>2</sup> 3p<sup>5</sup></td><td>Neutral atom</td></tr>
    <tr><td>Cl<sup>&minus;</sup></td><td>[Ne] 3s<sup>2</sup> 3p<sup>6</sup> = [Ar]</td><td>One electron added to 3p</td></tr>
    <tr><td>Cu (29)</td><td>[Ar] 4s<sup>1</sup> 3d<sup>10</sup></td><td>Anomalous neutral</td></tr>
    <tr><td>Cu<sup>+</sup></td><td>[Ar] 3d<sup>10</sup></td><td>4s<sup>1</sup> removed first</td></tr>
    <tr><td>Cu<sup>2+</sup></td><td>[Ar] 3d<sup>9</sup></td><td>4s removed, then one 3d</td></tr>
    <tr><td>Cr (24)</td><td>[Ar] 4s<sup>1</sup> 3d<sup>5</sup></td><td>Anomalous neutral</td></tr>
    <tr><td>Cr<sup>3+</sup></td><td>[Ar] 3d<sup>3</sup></td><td>4s<sup>1</sup> + two 3d removed</td></tr>
  </tbody>
</table>

<hr/>

<div class="note-box">
  <strong>NEB Exam Focus — Unit 3 Atomic Structure</strong>
  <p>Based on the Unit 3 exercise set, these are the highest-priority topics:</p>
  <ul>
    <li><strong>Rutherford's experiment:</strong> Classic short-answer — name, observations (3 points), and conclusions (3 points). Common question: "Why does Rutherford's model fail to explain atomic stability?" Answer must mention classical EM radiation from an accelerating charge, energy loss, and orbital collapse.</li>
    <li><strong>Bohr's model:</strong> Write the 4 postulates clearly. Distinguish "orbit" from "orbital." Explain how quantized orbits resolve the stability problem. Frequently asked: compare Rutherford and Bohr (similarities and differences).</li>
    <li><strong>Hydrogen spectra:</strong> Name all 5 series with their terminating shell (n<sub>1</sub>) and the electromagnetic region (Lyman/UV, Balmer/Visible, Paschen+/IR). Rydberg equation calculation — expect at least one wavelength numerical.</li>
    <li><strong>de Broglie equation:</strong> State the dual nature hypothesis, write λ = h/mv, explain why macroscopic objects don't show wave behavior. Numerical — calculate wavelength given mass and velocity. MCQ: among equal-velocity particles, the lightest one (smallest m) has the longest λ.</li>
    <li><strong>Heisenberg's Uncertainty Principle:</strong> State it, write the mathematical form, explain the physical reasoning (observation disturbs the system). Common reason question: "Why is Bohr's model against the uncertainty principle?"</li>
    <li><strong>Four quantum numbers:</strong> Define each, state allowed values, describe what each represents. High-frequency MCQ: identify the orbital from a given set (n=3, l=2 → 3d). Find total orbitals for a given n. Write all four quantum numbers for a specific electron.</li>
    <li><strong>Orbital shapes:</strong> Differentiate s (spherical) and p (dumbbell) shape and orientation. Explain degeneracy of p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>. Draw shapes when asked (3 mutually perpendicular p-orbitals).</li>
    <li><strong>Electronic configuration:</strong> The highest-mark long-answer topic. Write full and noble-gas configurations. State and apply Aufbau, Hund's rule, and Pauli's exclusion. Write the Cr and Cu anomalous configurations and justify them (half-filled / fully-filled stability). Find unpaired electrons (critical for MCQs on diamagnetic/paramagnetic nature and multiplicity). Write ion configurations — remember: 4s electrons are removed before 3d for transition metal cations.</li>
    <li><strong>Pauli's Exclusion Principle:</strong> State it, apply it — example: write all four quantum numbers for each electron in He. Know that it limits orbital occupancy to 2 electrons with opposite spins.</li>
  </ul>
</div>`,
  },


        {
          id: "chem12-ionic",
          class: "12",
          subject: "Chemistry",
          chapter: "Ionic Equilibrium",
          title: "Ionic Equilibrium — Chapter 2",
          icon: "🧪",
          readTime: "15 min read",
          summary:
            "NEB Class 12 Ionic Equilibrium PDF for acids, bases, pH, buffers, and solubility product.",
          tags: ["Ionic Equilibrium", "Chemistry", "Class 12", "Equilibrium"],
          externalUrl:
            "https://drive.google.com/file/d/1w8lo_PZMeQhIjQDxyp4o_kYOaeHEaog4/view?usp=sharing",
          content: `
            <h2>Chapter 2: Ionic Equilibrium</h2>
            <p>This entry opens the NEB Class 12 Ionic Equilibrium PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "chem12-volumetric",
          class: "12",
          subject: "Chemistry",
          chapter: "Volumetric Analysis",
          title: "Volumetric Analysis — NEB Class 12",
          icon: "📘",
          readTime: "15 min read",
          summary:
            "Volumetric Analysis NEB Class 12 PDF for titration concepts, formulas, and solved examples.",
          tags: ["Volumetric Analysis", "Chemistry", "Class 12", "Titration"],
          externalUrl:
            "https://drive.google.com/file/d/1z61VRYHeOxPlbzPiATFBNeAoXfpu-9A6/view?usp=sharing",
          content: `
            <h2>Volumetric Analysis</h2>
            <p>This note opens the NEB Class 12 Volumetric Analysis PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "chem12-kinetics",
          class: "12",
          subject: "Chemistry",
          chapter: "Chemical Kinetics",
          title: "Chemical Kinetics — NEB Class 12",
          icon: "🔥",
          readTime: "15 min read",
          summary:
            "NEB Class 12 Chemical Kinetics PDF covering reaction rates, order, molecularity, and integrated rate laws.",
          tags: ["Chemical Kinetics", "Chemistry", "Class 12", "Kinetics"],
          externalUrl:
            "https://drive.google.com/file/d/15rUidDkeBGe2TF4O6QYzDboZg2DNOVoF/view?usp=sharing",
          content: `
            <h2>Chapter 3: Chemical Kinetics</h2>
            <p>This note opens the NEB Class 12 Chemical Kinetics PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "chem12-electrochemistry",
          class: "12",
          subject: "Chemistry",
          chapter: "Electrochemistry",
          title: "Electrochemistry — NEB Class 12",
          icon: "⚡",
          readTime: "15 min read",
          summary:
            "NEB Class 12 Electrochemistry PDF covering redox reactions, galvanic cells, electrolysis, and the Nernst equation.",
          tags: ["Electrochemistry", "Chemistry", "Class 12", "Redox"],
          externalUrl:
            "https://drive.google.com/file/d/1fCoYIIjl6dZGyusd3dGmxpCkQELSx5gY/view?usp=sharing",
          content: `
            <h2>Chapter 5: Electrochemistry</h2>
            <p>This note opens the NEB Class 12 Electrochemistry PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "chem12-thermodynamics",
          class: "12",
          subject: "Chemistry",
          chapter: "Thermodynamics",
          title: "Thermodynamics — NEB Class 12",
          icon: "♨️",
          readTime: "15 min read",
          summary:
            "NEB Class 12 Thermodynamics PDF covering heat, work, internal energy, enthalpy, entropy, and Gibbs free energy.",
          tags: ["Thermodynamics", "Chemistry", "Class 12", "Energy"],
          externalUrl:
            "https://drive.google.com/file/d/1vANOiyMAmH8OXmeN4_98_lsvjirjPB9S/view?usp=sharing",
          content: `
            <h2>Chapter 4: Thermodynamics</h2>
            <p>This note opens the NEB Class 12 Thermodynamics PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "bio11-plant-anatomy",
          class: "11",
          subject: "Biology",
          chapter: "Plant Anatomy",
          title: "Plant Anatomy — Diagrams & Notes",
          icon: "🌿",
          readTime: "15 min read",
          summary:
            "Comprehensive plant anatomy diagrams and notes for NEB Class 11 Biology. Includes tissue systems, meristems, and anatomical structures with detailed illustrations.",
          tags: ["Plant Anatomy", "Biology", "Class 11", "Diagrams", "Tissues"],
          externalUrl:
            "https://drive.google.com/file/d/1xij1sjel1xFahKcL2WNbjHbPDDWzO0KV/view?usp=sharing",
          content: `
            <h2>Plant Anatomy — Diagrams & Notes</h2>
            <p>This comprehensive resource covers plant anatomy for NEB Class 11 Biology with detailed diagrams and explanatory notes.</p>
            <p>Click to open the PDF in Google Drive to view all anatomical structures and diagrams.</p>
          `,
        },
        {
          id: "phys12-rotational-dynamics",
          class: "12",
          subject: "Physics",
          chapter: "Rotational Dynamics",
          title: "Rotational Dynamics — NEB Class 12",
          icon: "🌀",
          readTime: "18 min read",
          summary:
            "NEB Class 12 Physics Chapter 1 Rotational Dynamics PDF with formulas, examples, and practice problems.",
          tags: ["Rotational Dynamics", "Physics", "Class 12", "Chapter 1"],
          externalUrl:
            "https://drive.google.com/file/d/19M2ASbmX93iPA2lFv2sbSdPHjKq6Uqsd/view?usp=sharing",
          content: `
            <h2>Chapter 1: Rotational Dynamics</h2>
            <p>This note opens the NEB Class 12 Physics Rotational Dynamics PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "phys12-periodic-motion",
          class: "12",
          subject: "Physics",
          chapter: "Periodic Motion",
          title: "Periodic Motion — Class 12 Physics",
          icon: "🔄",
          readTime: "15 min read",
          summary:
            "Class 12 Physics Periodic Motion notes covering SHM, oscillations, and motion equations.",
          tags: ["Periodic Motion", "Physics", "Class 12", "Oscillations"],
          externalUrl:
            "https://drive.google.com/file/d/1Relch3Ng1kbcnxpgwsN16opRNtEuhLJK/view?usp=sharing",
          content: `
            <h2>Periodic Motion</h2>
            <p>This note opens the Class 12 Physics Periodic Motion PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "phys12-fluid-statics",
          class: "12",
          subject: "Physics",
          chapter: "Fluid Statics",
          title: "Fluid Statics — Class 12 Physics",
          icon: "💧",
          readTime: "14 min read",
          summary:
            "Class 12 Physics Fluid Statics notes covering pressure, buoyancy, and fluid equilibrium.",
          tags: ["Fluid Statics", "Physics", "Class 12", "Fluids"],
          externalUrl: "https://fluid-statics-class12.netlify.app/",
          content: `
            <h2>Fluid Statics</h2>
            <p>This note opens the Class 12 Physics Fluid Statics resource on Netlify.</p>
            <p>Click the link to view the fluid statics notes and practice materials online.</p>
          `,
        },
        {
          id: "phys12-first-law",
          class: "12",
          subject: "Physics",
          chapter: "1st Law of Thermodynamics",
          title: "1st Law of Thermodynamics — Class 12 Physics",
          icon: "🔥",
          readTime: "15 min read",
          summary:
            "Class 12 Physics notes for the 1st Law of Thermodynamics with energy, heat, work, and internal energy concepts.",
          tags: ["Thermodynamics", "Physics", "Class 12", "1st Law"],
          externalUrl:
            "https://drive.google.com/file/d/1ESJMWdQTbMdiy0_4sIxJOXgXFdYWIc2d/view?usp=sharing",
          content: `
            <h2>1st Law of Thermodynamics</h2>
            <p>This note opens the Class 12 Physics 1st Law of Thermodynamics PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "phys12-second-law",
          class: "12",
          subject: "Physics",
          chapter: "2nd Law of Thermodynamics",
          title: "2nd Law of Thermodynamics — Class 12 Physics",
          icon: "❄️",
          readTime: "15 min read",
          summary:
            "Class 12 Physics notes for the 2nd Law of Thermodynamics covering entropy, irreversibility, and heat engines.",
          tags: ["Thermodynamics", "Physics", "Class 12", "2nd Law"],
          externalUrl:
            "https://drive.google.com/file/d/1zfyoh7HJNSIUC82kRycwpT3VeD_XBcvr/view?usp=sharing",
          content: `
            <h2>2nd Law of Thermodynamics</h2>
            <p>This note opens the Class 12 Physics 2nd Law of Thermodynamics PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "phys12-current-electricity",
          class: "12",
          subject: "Physics",
          chapter: "Current Electricity",
          title: "Current Electricity — NEB Class 12",
          icon: "⚡",
          readTime: "16 min read",
          summary:
            "Class 12 Physics Chapter 9 Current Electricity notes with theory, derivations, numericals, and exam preparation guidance.",
          tags: ["Current Electricity", "Physics", "Class 12", "Chapter 9"],
          externalUrl: "https://current-electricity.netlify.app/",
          content: `
            <h2>Chapter 9: Current Electricity</h2>
            <p>NEB Class 12 Physics Current Electricity (Electric Circuits) notes with complete theory, derivations, and numericals.</p>
            <p>Open the note to study exam preparation material for electric circuits and related concepts.</p>
          `,
        },
        {
          id: "phys12-mechanical-wave",
          class: "12",
          subject: "Physics",
          chapter: "Mechanical Wave",
          title: "Mechanical Wave — Class 12 Physics",
          icon: "🌊",
          readTime: "14 min read",
          summary:
            "Class 12 Physics Mechanical Wave notes with wave motion, speed, and energy transfer concepts.",
          tags: ["Mechanical Wave", "Physics", "Class 12", "Waves"],
          externalUrl: "https://mechanical-wave-class12.netlify.app/",
          content: `
            <h2>Mechanical Wave</h2>
            <p>This note opens the Class 12 Physics Mechanical Wave resource hosted on Netlify.</p>
            <p>Click the link to view the mechanical wave notes and examples online.</p>
          `,
        },
        {
          id: "phys12-wave-motion",
          class: "12",
          subject: "Physics",
          chapter: "Wave Motion",
          title: "Wave Motion — Class 12 Physics",
          icon: "🌊",
          readTime: "14 min read",
          summary:
            "Class 12 Physics Wave Motion notes covering transverse and longitudinal waves, wave speed, and periodic motion.",
          tags: ["Wave Motion", "Physics", "Class 12", "Waves"],
          externalUrl: "https://wave-motion-class12.netlify.app/",
          content: `
            <h2>Wave Motion</h2>
            <p>This note opens the Class 12 Physics Wave Motion resource hosted on Netlify.</p>
            <p>Click the link to view the wave motion notes and examples online.</p>
          `,
        },
        {
          id: "phys12-waves-pipes-strings",
          class: "12",
          subject: "Physics",
          chapter: "Waves in Pipes and Strings",
          title: "Waves in Pipes and Strings — Class 12 Physics",
          icon: "🎻",
          readTime: "15 min read",
          summary:
            "Class 12 Physics notes on waves in pipes and strings, resonance, harmonics, and standing waves.",
          tags: ["Waves", "Pipes", "Strings", "Physics", "Class 12"],
          externalUrl:
            "https://waves-in-pipes-and-strings-class12.netlify.app/",
          content: `
            <h2>Waves in Pipes and Strings</h2>
            <p>This note opens the Class 12 Physics Waves in Pipes and Strings resource hosted on Netlify.</p>
            <p>Click the link to view the notes and examples online.</p>
          `,
        },
        {
          id: "phys12-acoustic-phenomena",
          class: "12",
          subject: "Physics",
          chapter: "Acoustic Phenomena",
          title: "Acoustic Phenomena — Class 12 Physics",
          icon: "🔊",
          readTime: "12 min read",
          summary:
            "Class 12 Physics Acoustic Phenomena notes covering sound waves, resonance, and acoustics in media.",
          tags: ["Acoustics", "Physics", "Class 12", "Sound"],
          externalUrl: "https://acoustic-phenomena-class12.netlify.app/",
          content: `
            <h2>Acoustic Phenomena</h2>
            <p>This note opens the Class 12 Physics Acoustic Phenomena resource hosted on Netlify.</p>
            <p>Click the link to view the acoustic notes and examples online.</p>
          `,
        },
        {
          id: "phys12-nature-propagation-light",
          class: "12",
          subject: "Physics",
          chapter: "Nature and Propagation of Light",
          title: "Nature and Propagation of Light — Class 12 Physics",
          icon: "💡",
          readTime: "16 min read",
          summary:
            "Class 12 Physics notes for Nature and Propagation of Light with ray optics, reflection, refraction, and lens formulas.",
          tags: ["Optics", "Physics", "Class 12", "Light"],
          // Verified: nature-and-propogation-of-light.netlify.app is the active live deployment hostname
          externalUrl: "https://nature-and-propogation-of-light.netlify.app/",
          content: `
            <h2>Nature and Propagation of Light</h2>
            <p>This note opens the Class 12 Physics Nature and Propagation of Light resource hosted on Netlify.</p>
            <p>Click the link to view the optics notes and ray diagrams online.</p>
          `,
        },
        {
          id: "top50-neb-class12",
          class: "12",
          subject: "Exam Strategy",
          chapter: "Top 50 Questions",
          title: "Top 50 Most Important Questions for NEB Class 12",
          icon: "📌",
          readTime: "25 min read",
          summary:
            "A curated list of the Top 50 NEB Class 12 questions every student should master, with quick access to the full guide.",
          tags: ["NEB", "Class 12", "Top 50", "Exam Strategy"],
          externalUrl: "https://top-50-neb-question-class12.netlify.app/",
          content: `
            <h2>Top 50 Most Important Questions for NEB Class 12</h2>
            <p>This note links to the full Top 50 NEB Class 12 question guide hosted on Netlify.</p>
            <p>Click the button to open the full study resource in a new tab.</p>
          `,
        },
        {
          id: "cs12-dbms",
          class: "12",
          subject: "Computer Science",
          chapter: "Database Systems",
          title: "DBMS — Class 12 Computer Science",
          icon: "💾",
          readTime: "15 min read",
          summary:
            "NEB Class 12 Computer Science DBMS PDF covering database concepts, ER diagrams, SQL, and normalization.",
          tags: ["DBMS", "Computer Science", "Class 12", "Database"],
          externalUrl:
            "https://drive.google.com/file/d/141AmsTBX8qzuheJHe3A6Txg5JDBEM2_w/view?usp=sharing",
          content: `
            <h2>Database Management Systems</h2>
            <p>This note opens the NEB Class 12 Computer Science DBMS PDF from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the PDF in Drive.</p>
          `,
        },
        {
          id: "cs12-dcn",
          class: "12",
          subject: "Computer Science",
          chapter: "Data Communication and Networking",
          title: "Data Communication and Networking — Class 12",
          icon: "📡",
          readTime: "15 min read",
          summary:
            "Class 12 DCN notes for data communication, networking models, protocols, and network devices.",
          tags: [
            "Data Communication",
            "Networking",
            "Computer Science",
            "Class 12",
          ],
          externalUrl:
            "https://drive.google.com/file/d/12j7JtjTpCwMr7-Ao2M5xSo1Y3OgdH0cN/view?usp=drive_link",
          content: `
            <h2>Data Communication and Networking</h2>
            <p>This note opens the Class 12 Data Communication and Networking resource from Google Drive.</p>
            <p>Use the embedded viewer or click the link to open the material in Drive.</p>
          `,
        },
        {
          id: "cs12-webtech-ii",
          class: "12",
          subject: "Computer Science",
          chapter: "Web Technology II",
          title: "Web Technology II Notes — Class 12",
          icon: "🌐",
          readTime: "14 min read",
          summary:
            "Class 12 Web Technology II notes with chapters, examples, and practice material hosted on Netlify.",
          tags: ["Web Technology II", "Computer Science", "Class 12", "Web"],
          externalUrl: "https://web-technology-ii-class12.netlify.app/",
          content: `
            <h2>Web Technology II</h2>
            <p>This note opens the Class 12 Web Technology II notes hosted on Netlify.</p>
            <p>Click the link to review chapter summaries, examples, and study material online.</p>
          `,
        },
        {
          id: "cs12-c-programming",
          class: "12",
          subject: "Computer Science",
          chapter: "C Programming",
          title: "C Programming — Class 12",
          icon: "💻",
          readTime: "2 min read",
          summary:
            "Class 12 C Programming notes for Chapter 4C with syntax, examples, and important concepts.",
          tags: ["C Programming", "Computer Science", "Class 12", "Chapter 4C"],
          // TODO: needs real C Programming resource — currently no valid link exists
          content: `
            <h2>Chapter 4C: C Programming</h2>
            <p>Full notes for this chapter are coming soon.</p>
          `,
        },
        {
          id: "cs12-oop",
          class: "12",
          subject: "Computer Science",
          chapter: "Object-Oriented Programming",
          title: "Object-Oriented Programming — Class 12",
          icon: "🧠",
          readTime: "14 min read",
          summary:
            "Class 12 OOP notes for chapter 5 with classes, objects, inheritance, and polymorphism.",
          tags: [
            "Object-Oriented Programming",
            "Computer Science",
            "Class 12",
            "Chapter 5",
          ],
          // Verified: opp-class12.netlify.app is the active live deployment hostname
          externalUrl: "https://opp-class12.netlify.app/",
          content: `
            <h2>Chapter 5: Object-Oriented Programming</h2>
            <p>This note opens the Class 12 Object-Oriented Programming resource hosted on Netlify.</p>
            <p>Click the link to review OOP concepts and examples online.</p>
          `,
        },
        {
  id: "phys11-physical-quantities",
  class: "11",
  subject: "Physics",
  chapter: "Physical Quantities",
  title: "Physical Quantities — Class 11 Physics",
  icon: "📏",
  summary:
    "Master the foundation of NEB Class 11 Physics: SI base and supplementary units, accuracy vs. precision, rules for significant figures, dimensions of physical quantities, the principle of homogeneity, and step-by-step applications in dimensional analysis.",
  tags: [
    "Physical Quantities",
    "Units and Dimensions",
    "Significant Figures",
    "Principle of Homogeneity",
    "Class 11",
    "Physics",
    "NEB",
  ],
  content: `
    <h2>1. Introduction to Physical Quantities & Measurement</h2>
    <p>Physics is fundamentally an observational and quantitative natural science. It investigates how matter, energy, space, and time interact to create the phenomena observed across our universe. Any quantitative inquiry requires transforming physical observations—such as the flight of a projectile, the expansion of a heated wire, or the glow of an electrical discharge—into measurable numerical data governed by universal physical laws.</p>

    <div class="note-box">
      <strong>Historical Context:</strong> While qualitative inquiry dates back to antiquity, the systematic treatment of physical dimensions was first developed by French mathematician and physicist <em>Joseph Fourier</em> in 1822 in his analytical theory of heat. His formulations were later synthesized and formalized into modern dimensional physics by <em>James Clerk Maxwell</em> in 1863.
    </div>

    <p>Every measurable characteristic of an object or event by which the fundamental laws of nature are formulated is termed a <strong>physical quantity</strong>. A physical quantity cannot be defined purely in abstract language; it must possess an objective numerical value established against a recognized standard of comparison.</p>

    <div class="formula-box">
      <span class="formula-label">Fundamental Measurement Identity</span>
      Q = n &times; u
    </div>

    <p>In this relationship:</p>
    <ul>
      <li><strong>Q</strong> denotes the physical quantity under investigation (e.g., mass, time, displacement).</li>
      <li><strong>n</strong> represents the numerical magnitude (a pure ratio indicating how many standard units are contained within Q).</li>
      <li><strong>u</strong> designates the internationally recognized standard unit of measurement.</li>
    </ul>

    <p>Because the actual physical magnitude Q is invariant regardless of the measurement system selected, an inverse relationship exists between the numerical value and the unit size: if a smaller unit is chosen, the resulting numerical count increases proportionately (<code>n₁u₁ = n₂u₂</code>).</p>

    <h3>Classification of Physical Quantities</h3>
    <p>Physical quantities are categorized into two structural classes:</p>
    <ol>
      <li><strong>Fundamental (Base) Quantities:</strong> Physical quantities that are conceptually independent of all other quantities and cannot be resolved into simpler constituent terms. In classical mechanics, length, mass, and time form the primary triad. Under the modern International System, seven base quantities are recognized alongside two supplementary geometric quantities.</li>
      <li><strong>Derived Quantities:</strong> Quantities formed mathematically through algebraic multiplication or division of two or more base quantities. Examples include velocity (length divided by time), momentum (mass multiplied by velocity), force (mass multiplied by acceleration), and pressure (force per unit area).</li>
    </ol>

    <h2>2. The International System of Units (SI)</h2>
    <p>Historical commerce and scientific inquiry utilized regional unit systems, which led to confusion and hindered international collaboration:</p>
    <ul>
      <li><strong>MKS System:</strong> Metre, Kilogram, Second (originated in France).</li>
      <li><strong>CGS System:</strong> Centimetre, Gram, Second (a smaller metric variant, also French).</li>
      <li><strong>FPS System:</strong> Foot, Pound, Second (the British imperial standard).</li>
    </ul>
    <p>To establish universal scientific consensus, the 11th General Conference on Weights and Measures (CGPM) held in Paris in 1960 adopted the <strong>Syst&egrave;me International d'Unit&eacute;s (SI)</strong>. Today, SI serves as the authoritative framework across international science, engineering, and the NEB physics curriculum.</p>

    <h3>The 7 Fundamental & 2 Supplementary SI Units</h3>
    <table>
      <thead>
        <tr>
          <th>Physical Quantity</th>
          <th>Standard Unit</th>
          <th>Symbol</th>
          <th>Dimension Symbol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Length</strong></td>
          <td>metre</td>
          <td>m</td>
          <td>[L]</td>
        </tr>
        <tr>
          <td><strong>Mass</strong></td>
          <td>kilogram</td>
          <td>kg</td>
          <td>[M]</td>
        </tr>
        <tr>
          <td><strong>Time</strong></td>
          <td>second</td>
          <td>s</td>
          <td>[T]</td>
        </tr>
        <tr>
          <td><strong>Thermodynamic Temperature</strong></td>
          <td>kelvin</td>
          <td>K</td>
          <td>[K]</td>
        </tr>
        <tr>
          <td><strong>Electric Current</strong></td>
          <td>ampere</td>
          <td>A</td>
          <td>[A] or [I]</td>
        </tr>
        <tr>
          <td><strong>Luminous Intensity</strong></td>
          <td>candela</td>
          <td>cd</td>
          <td>[cd] or [J]</td>
        </tr>
        <tr>
          <td><strong>Amount of Substance</strong></td>
          <td>mole</td>
          <td>mol</td>
          <td>[mol] or [N]</td>
        </tr>
        <tr>
          <td><strong>Plane Angle</strong> (Supplementary)</td>
          <td>radian</td>
          <td>rad</td>
          <td>[M⁰ L⁰ T⁰] (dimensionless)</td>
        </tr>
        <tr>
          <td><strong>Solid Angle</strong> (Supplementary)</td>
          <td>steradian</td>
          <td>sr</td>
          <td>[M⁰ L⁰ T⁰] (dimensionless)</td>
        </tr>
      </tbody>
    </table>

    <div class="note-box">
      <strong>Primary SI Standard Definitions (Authoritative Textbook Baseline):</strong>
      <ul>
        <li><strong>Metre (m):</strong> The length of the path travelled by light in a vacuum during a precise time interval of <code>1 / 299,792,458</code> of a second. (Approximately <code>1 m &approx; 3.28 ft</code>).</li>
        <li><strong>Second (s):</strong> The duration equal to <code>9,192,631,770</code> periods of the microwave radiation emitted during the transition between the two hyperfine ground-state energy levels of an isolated Cesium-133 atom.</li>
        <li><strong>Kilogram (kg):</strong> Defined historically as the mass of the standard international prototype cylinder composed of a 90% Platinum and 10% Iridium alloy (height 4 cm, diameter 4 cm) preserved at the International Bureau of Weights and Measures (BIPM) in S&egrave;vres, France.</li>
      </ul>
    </div>

    <h3>Authoritative Typography & Conventions in Writing SI Units</h3>
    <p>The NEB board strictly tests compliance with standard SI formatting conventions. Remember these key rules:</p>
    <ul>
      <li><strong>Lowercase full names:</strong> Even when a unit is named after a distinguished scientist, its full name must begin with a lowercase letter when written out in text (write <code>newton</code>, not <code>Newton</code>; write <code>joule</code>, not <code>Joule</code>; write <code>pascal</code>, not <code>Pascal</code>). The sole exception is the temperature unit <code>Celsius</code>.</li>
      <li><strong>Capitalized symbols for personal eponyms:</strong> The abbreviated symbol is capitalized only when derived from a scientist's name (<code>N</code> for newton, <code>J</code> for joule, <code>W</code> for watt, <code>Pa</code> for pascal), whereas non-eponymous unit symbols remain lowercase (<code>m</code> for metre, <code>kg</code> for kilogram, <code>s</code> for second).</li>
      <li><strong>No plural symbols:</strong> Unit symbols are mathematical entities, not linguistic abbreviations; they never take a trailing plural 's' (write <code>15 kg</code>, never <code>15 kgs</code>; write <code>8 m</code>, never <code>8 ms</code>—because <code>ms</code> denotes milliseconds!).</li>
      <li><strong>No trailing full stops:</strong> Do not append periods to unit symbols unless situated at the grammatical end of a sentence (write <code>40 mL</code> or <code>40 cc</code>, not <code>40 c.c.</code> or <code>40 m.l.</code>).</li>
      <li><strong>Products and quotients of units:</strong> When multiplying derived units, combine with a centered dot or non-breaking space (e.g., <code>N&middot;m</code> or <code>N m</code>). When dividing, use negative exponents (preferred: <code>kg&middot;m⁻¹&middot;s⁻²</code>) or a single solidus (<code>kg/(m&middot;s²)</code>). Never string consecutive slashes (e.g., <code>kg/m/s²</code> is invalid).</li>
    </ul>

    <div class="key-stmt">
      📌 <strong>Crucial Exam Distinction:</strong> Pay close attention to letter case in prefixes:<br/>
      &bull; <code>mN</code> = millinewton = <code>10⁻³ N</code> (force)<br/>
      &bull; <code>nm</code> = nanometre = <code>10⁻⁹ m</code> (length)<br/>
      &bull; <code>N&middot;m</code> = newton-metre (torque or mechanical work)
    </div>

    <h2>3. Precision vs. Accuracy in Measurement</h2>
    <p>In physical experimentation, students frequently conflate <em>accuracy</em> with <em>precision</em>. These terms represent entirely distinct statistical characteristics of an experimental dataset:</p>

    <ul>
      <li><strong>Accuracy:</strong> The degree of closeness between the measured experimental result and the genuine, accepted standard (true value) of the physical quantity. Accuracy is limited primarily by systematic errors (calibration faults, zero errors).</li>
      <li><strong>Precision:</strong> The degree of consistency, sharpness, and repeatability observed among repeated measurements of the same quantity under identical conditions, regardless of proximity to the true value. Precision is limited by the resolving power (least count) of the measuring instrument and random experimental noise.</li>
    </ul>

    <div class="note-box">
      <strong>Comparative Instrument Resolution:</strong> Consider measuring an object whose true length is <code>2.0000 cm</code>:<br/>
      &bull; A student using a crude wooden ruler measures <code>2.1 cm</code> (1 decimal place &rarr; lowest precision).<br/>
      &bull; A second student using a Vernier caliper records <code>2.04 cm</code> (2 decimal places &rarr; moderate precision).<br/>
      &bull; A third student using a micrometer screw gauge obtains <code>2.0025 cm</code> (4 decimal places &rarr; highest precision).<br/>
      Greater resolution generates a higher number of significant figures, which directly denotes a higher degree of precision.
    </div>

    <h3>The 4-State Target Analogy (Accuracy vs. Precision)</h3>
    <p>To visualize the distinction, consider repeated shots aimed at the bullseye of an archery target:</p>

    <figure class="my-6 p-4 rounded-xl text-center" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px;">
      <img src="../public/images/notes/physics/ch1/fig-1-5-accuracy-precision.webp" alt="Concepts on Accuracy and Precise Measurement" class="mx-auto rounded-lg max-h-80 object-contain shadow" loading="lazy" style="background: #fff; padding: 6px;" />
      <figcaption class="text-xs text-slate-400 mt-2.5 font-mono">Fig 1.5: Concepts on Accuracy and Precise Measurement (Official CDC Textbook)</figcaption>
    </figure>
    </div>

    <h2>4. Significant Figures & Arithmetic Precision</h2>
    <p>In physical science, numbers reported from experiments are never pure abstract integers; they communicate the physical limits of the apparatus. <strong>Significant figures</strong> represent all reliable digits whose values are established with certainty, plus one terminal digit that carries experimental uncertainty.</p>

    <h3>Rules for Identifying Significant Figures</h3>
    <ol>
      <li><strong>All non-zero digits are significant:</strong> For example, <code>38.45</code> contains 4 significant figures.</li>
      <li><strong>Sandwiched (captive) zeros are significant:</strong> Any zero appearing between two non-zero digits is significant (e.g., <code>4008</code> has 4 significant figures; <code>12.003</code> has 5 significant figures).</li>
      <li><strong>Leading zeros are NEVER significant:</strong> Zeros preceding the first non-zero digit merely indicate the location of the decimal mark. For instance, <code>0.0075</code> possesses only 2 significant figures; <code>0.0003</code> possesses 1 significant figure.</li>
      <li><strong>Trailing zeros in pure whole numbers without a decimal point are non-significant:</strong> In numbers like <code>6500</code>, only the digits 6 and 5 are reliably known (2 significant figures). If written as <code>6500.</code> with an explicit decimal, all 4 digits become significant.</li>
      <li><strong>Trailing zeros to the right of a decimal point are significant:</strong> They signify that the instrument was precise enough to resolve those decimal fractions. Thus, <code>7.00</code> contains 3 significant figures, and <code>0.450</code> contains 3 significant figures.</li>
      <li><strong>Exponential factors in scientific notation do not count:</strong> In <code>N &times; 10^p</code>, only the mantissa <code>N</code> dictates significant figures. For example, <code>1.60 &times; 10⁻¹⁹ C</code> has 3 significant figures, and <code>6.63 &times; 10⁻³⁴ J&middot;s</code> has 3 significant figures.</li>
    </ol>

    <h3>Standard Rounding-Off Protocol</h3>
    <p>When trimming numbers to a required count of significant digits:</p>
    <ul>
      <li>If the leftmost dropped digit is <strong>less than 5</strong>, leave the preceding digit unchanged (<code>84.32 &rarr; 84.3</code>).</li>
      <li>If the leftmost dropped digit is <strong>greater than 5</strong>, increment the preceding digit by 1 (<code>84.37 &rarr; 84.4</code>).</li>
      <li>If the dropped digit is <strong>exactly 5</strong> (or 5 followed only by zeros):
        <ul>
          <li>Increment the preceding digit by 1 if it is <strong>odd</strong> (<code>27.35 &rarr; 27.4</code>).</li>
          <li>Leave the preceding digit unchanged if it is <strong>even</strong> (<code>27.45 &rarr; 27.4</code>).</li>
        </ul>
        This is the internationally accepted <em>round-to-even rule</em> designed to prevent cumulative positive statistical bias in large datasets.</li>
    </ul>

    <h3>Significant Figures in Mathematical Operations</h3>
    <div class="formula-box">
      <span class="formula-label">Addition & Subtraction Rule (Decimal Place Dominance)</span>
      Result must be rounded to match the operand having the fewest decimal places.
    </div>
    <p><em>Example:</em> <code>14.285 m + 6.1 m = 20.385 m &rarr; 20.4 m</code> (limited by <code>6.1 m</code> to 1 decimal place).</p>

    <div class="formula-box">
      <span class="formula-label">Multiplication & Division Rule (Significant Figure Dominance)</span>
      Result must be rounded to match the operand having the fewest significant figures.
    </div>
    <p><em>Example:</em> <code>124.5 &times; 2.2 = 273.9 &rarr; 2.7 &times; 10²</code> (or <code>270</code>, restricted to 2 significant figures by <code>2.2</code>).</p>

    <h2>5. Dimensions of Physical Quantities</h2>
    <p>The <strong>dimension</strong> of a derived physical quantity refers to the specific powers (or exponents) to which the fundamental base quantities must be raised in order to represent that quantity.</p>

    <p>In mechanical problems, the three fundamental dimensions are denoted by capital letters enclosed in square brackets: Mass <strong>[M]</strong>, Length <strong>[L]</strong>, and Time <strong>[T]</strong>. For broader domains, we incorporate thermodynamic temperature <strong>[K]</strong>, electric current <strong>[A]</strong> or <strong>[I]</strong>, amount of substance <strong>[mol]</strong> or <strong>[N]</strong>, and luminous intensity <strong>[cd]</strong> or <strong>[J]</strong>.</p>

    <div class="formula-box">
      <span class="formula-label">General Dimensional Formula Representation</span>
      [X] = [M^a L^b T^c]
    </div>
    <p>Here, the exponents <code>a</code>, <code>b</code>, and <code>c</code> are the dimensions of quantity X with respect to mass, length, and time respectively.</p>

        <div style="display: flex; align-items: center; gap: 8px; margin: 2rem 0 0.5rem 0;">
      <span class="badge-fire">🔥 High-Frequency NEB Formulas</span>
      <span class="badge-pro">Instant Cheat-Sheet</span>
    </div>
    <h3 style="margin-top: 0.25rem;">Authoritative Reference Table of High-Frequency NEB Dimensional Formulas</h3>
    <table>
      <thead>
        <tr>
          <th>Physical Quantity</th>
          <th>Defining Relation</th>
          <th>Dimensional Formula</th>
          <th>SI Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Velocity (v)</strong></td>
          <td>displacement / time</td>
          <td><code>[M⁰ L T⁻¹]</code></td>
          <td>m&middot;s⁻¹</td>
        </tr>
        <tr>
          <td><strong>Acceleration (a)</strong></td>
          <td>velocity / time</td>
          <td><code>[M⁰ L T⁻²]</code></td>
          <td>m&middot;s⁻²</td>
        </tr>
        <tr>
          <td><strong>Linear Momentum (p)</strong></td>
          <td>mass &times; velocity</td>
          <td><code>[M L T⁻¹]</code></td>
          <td>kg&middot;m&middot;s⁻¹</td>
        </tr>
        <tr>
          <td><strong>Force (F)</strong></td>
          <td>mass &times; acceleration</td>
          <td><code>[M L T⁻²]</code></td>
          <td>N (kg&middot;m&middot;s⁻²)</td>
        </tr>
        <tr>
          <td><strong>Work / Energy (W, E)</strong></td>
          <td>force &times; displacement</td>
          <td><code>[M L² T⁻²]</code></td>
          <td>J (N&middot;m)</td>
        </tr>
        <tr>
          <td><strong>Power (P)</strong></td>
          <td>work / time</td>
          <td><code>[M L² T⁻³]</code></td>
          <td>W (J&middot;s⁻¹)</td>
        </tr>
        <tr>
          <td><strong>Pressure / Stress (P, &sigma;)</strong></td>
          <td>force / area</td>
          <td><code>[M L⁻¹ T⁻²]</code></td>
          <td>Pa (N&middot;m⁻²)</td>
        </tr>
        <tr>
          <td><strong>Torque / Couple (&tau;)</strong></td>
          <td>force &times; perpendicular distance</td>
          <td><code>[M L² T⁻²]</code></td>
          <td>N&middot;m</td>
        </tr>
        <tr>
          <td><strong>Universal Gravitational Constant (G)</strong></td>
          <td>F&middot;r² / (m&middot;m)</td>
          <td><code>[M⁻¹ L³ T⁻²]</code></td>
          <td>N&middot;m²&middot;kg⁻²</td>
        </tr>
        <tr>
          <td><strong>Surface Tension (T)</strong></td>
          <td>force / length</td>
          <td><code>[M L⁰ T⁻²]</code></td>
          <td>N&middot;m⁻¹</td>
        </tr>
        <tr>
          <td><strong>Coefficient of Viscosity (&eta;)</strong></td>
          <td>F / [A &middot; (dv/dx)]</td>
          <td><code>[M L⁻¹ T⁻¹]</code></td>
          <td>Pa&middot;s (kg&middot;m⁻¹&middot;s⁻¹)</td>
        </tr>
        <tr>
          <td><strong>Specific Heat Capacity (s)</strong></td>
          <td>Q / (m &middot; &Delta;&theta;)</td>
          <td><code>[M⁰ L² T⁻² K⁻¹]</code></td>
          <td>J&middot;kg⁻¹&middot;K⁻¹</td>
        </tr>
        <tr>
          <td><strong>Latent Heat (L)</strong></td>
          <td>Q / m</td>
          <td><code>[M⁰ L² T⁻²]</code></td>
          <td>J&middot;kg⁻¹</td>
        </tr>
        <tr>
          <td><strong>Coefficient of Thermal Conductivity (K)</strong></td>
          <td>(Q &middot; dx) / (A &middot; dt &middot; d&theta;)</td>
          <td><code>[M L T⁻³ K⁻¹]</code></td>
          <td>W&middot;m⁻¹&middot;K⁻¹</td>
        </tr>
        <tr>
          <td><strong>Stefan's Constant (&sigma;)</strong></td>
          <td>Energy / (Area &middot; time &middot; T⁴)</td>
          <td><code>[M L⁰ T⁻³ K⁻⁴]</code></td>
          <td>W&middot;m⁻²&middot;K⁻⁴</td>
        </tr>
        <tr>
          <td><strong>Universal Gas Constant (R)</strong></td>
          <td>(P &middot; V) / (n &middot; T)</td>
          <td><code>[M L² T⁻² K⁻¹ mol⁻¹]</code></td>
          <td>J&middot;mol⁻¹&middot;K⁻¹</td>
        </tr>
      </tbody>
    </table>

    <div style="display: flex; align-items: center; gap: 8px; margin: 2rem 0 0.5rem 0;">
      <span class="badge-fire">🔥 Board Exam Goldmine</span>
      <span class="badge-pro">NEB Frequently Tested</span>
    </div>
    <h3 style="margin-top: 0.25rem;">Classification of Quantities Based on Dimensions</h3>
    <div class="bento-grid">
      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">📈</div>
          <div>
            <span class="badge-pro">Variable</span>
            <h4>Dimensional Variables</h4>
          </div>
        </div>
        <p>Quantities that possess definite physical dimensions and change their numerical values depending on the physical scenario.</p>
        <div class="bento-examples"><strong>Examples:</strong> Speed, Acceleration, Force, Pressure, Work, Kinetic Energy</div>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">⚖️</div>
          <div>
            <span class="badge-fire">MCQ Trap 🔥</span>
            <h4>Dimensionless Variables</h4>
          </div>
        </div>
        <p>Quantities that vary in magnitude across problems but are pure ratios of like physical units, so they carry <strong>zero dimensions</strong> <code>[M⁰ L⁰ T⁰]</code>.</p>
        <div class="bento-examples"><strong>Examples:</strong> Strain (&Delta;L/L), Specific Gravity, Angle (&theta;), Poisson's Ratio, Refractive Index</div>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">🪐</div>
          <div>
            <span class="badge-pro">Universal</span>
            <h4>Dimensional Constants</h4>
          </div>
        </div>
        <p>Universal physical constants that maintain invariant values across nature while possessing distinct dimensions and physical units.</p>
        <div class="bento-examples"><strong>Examples:</strong> Gravitational Const (G = 6.67&times;10⁻¹¹), Planck's Const (h), Gas Const (R)</div>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">🎲</div>
          <div>
            <span class="badge-fire">Pure Numbers</span>
            <h4>Dimensionless Constants</h4>
          </div>
        </div>
        <p>Pure mathematical coefficients and factors that have fixed numerical magnitudes and zero physical dimensions.</p>
        <div class="bento-examples"><strong>Examples:</strong> Pure integers (1, 2, &frac12;), &pi; (3.1415), Euler's number (e), Friction Coeff (&mu;)</div>
      </div>
    </div>

    <h2>6. The Principle of Homogeneity of Dimensions</h2>
    <div class="exam-callout">
      <div class="exam-title">🔥 NEB Must-Know Principle (2 to 4 Marks)</div>
      <p style="font-size: 1.05rem; font-weight: 700; color: #f8fafc; margin-bottom: 0.5rem;">Principle of Homogeneity of Dimensions</p>
      <p style="margin: 0; color: var(--text-body); font-size: 0.95rem; line-height: 1.6;">In every physically valid equation, each additive, subtractive, or equated term on both sides of the relation must possess the <strong>exact same dimensions</strong>. You can add metres to metres, but never kilograms to seconds!</p>
    </div>

    <p>This principle stems directly from a fundamental reality of nature: <em>one can only add, subtract, or equate physical quantities belonging to the exact same physical species</em>. A length can be added to another length, yielding a total length; but adding a mass to a time interval is physical nonsense.</p>

    <p>Crucially, dimensions obey identity equivalence rather than arithmetic summation:</p>
    <div class="formula-box">
      <span class="formula-label">Dimensional Summation Logic</span>
      [L] + [L] = [L] &emsp; and &emsp; [L] &minus; [L] = [L]
    </div>
    <p>When two quantities of length <code>3 m</code> and <code>4 m</code> are summed, the result is <code>7 m</code>—still possessing the physical nature of length <code>[L]</code>. Dimensional operations characterize the <em>type of physical reality</em>, not the numerical counter.</p>

    <div class="note-box">
      <strong>Vital Exam Insight:</strong> A dimensionally homogeneous relationship is <em>not necessarily physically true</em> (for instance, dimensionless numerical multipliers like <code>1/2</code> or <code>2&pi;</code> cannot be validated by dimensional analysis). However, <strong>any equation that fails dimensional homogeneity is guaranteed to be physically incorrect</strong>.
    </div>

    <div style="display: flex; align-items: center; gap: 8px; margin: 2.5rem 0 0.5rem 0;">
      <span class="badge-fire">🔥 4 Core Applications</span>
      <span class="badge-pro">NEB Derivation Heavy</span>
    </div>
    <h2 style="margin-top: 0.25rem;">7. Applications of Dimensional Analysis</h2>
    <p>The NEB syllabus identifies <strong>four primary practical applications</strong> of dimensional methods that appear in Board exams every single year:</p>

    <div class="bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon" style="background: rgba(59, 130, 246, 0.15); border-color: rgba(59, 130, 246, 0.3);">🔍</div>
          <div>
            <span class="badge-pro">App 01</span>
            <h4>Checking Formula Correctness</h4>
          </div>
        </div>
        <p>Substitute dimensions for every single term. If <code>LHS = RHS</code>, the relation is dimensionally correct.</p>
        <div class="bento-examples"><strong>Classic Test:</strong> Checking <code>s = ut + &frac12;at²</code> &implies; <code>[L] = [L] + [L]</code> (Valid!)</div>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon" style="background: rgba(249, 115, 22, 0.15); border-color: rgba(249, 115, 22, 0.3);">📐</div>
          <div>
            <span class="badge-fire">4 Marks Derivation 🔥</span>
            <h4>Deriving Physical Relations</h4>
          </div>
        </div>
        <p>Determine the unknown powers <code>(a, b, c)</code> when a quantity depends on multiple physical factors using simultaneous equations.</p>
        <div class="bento-examples"><strong>Board Favorite:</strong> Simple Pendulum <code>T = 2&pi;&radic;(l/g)</code> or String frequency <code>f = k/L &radic;(T/m)</code></div>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.3);">🔄</div>
          <div>
            <span class="badge-pro">App 03</span>
            <h4>Converting Units Between Systems</h4>
          </div>
        </div>
        <p>Since numerical value &times; unit is constant (<code>n₁u₁ = n₂u₂</code>), convert from SI to CGS or any arbitrary system.</p>
        <div class="bento-examples"><strong>Common Conversion:</strong> 1 Newton = 10⁵ Dynes | 1 Joule = 10⁷ Ergs</div>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon" style="background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.3);">🧩</div>
          <div>
            <span class="badge-fire">Frequent MCQ Trap 🔥</span>
            <h4>Finding Unknown Constants</h4>
          </div>
        </div>
        <p>In polynomial equations, equate dimensions of unknown coefficients to the known side term-by-term.</p>
        <div class="bento-examples"><strong>Sample:</strong> If <code>v = at + b/(t+c)</code>, find dimensions of <code>a</code>, <code>b</code>, and <code>c</code>.</div>
      </div>
    </div>

    <div style="display: flex; align-items: center; gap: 8px; margin: 2.5rem 0 0.5rem 0;">
      <span class="badge-fire" style="background: rgba(239, 68, 68, 0.15); border-color: rgba(239, 68, 68, 0.4); color: #f87171;">⚠️ High-Frequency 2-Mark Question</span>
      <span class="badge-pro">Direct Board Question</span>
    </div>
    <h2 style="margin-top: 0.25rem;">8. Limitations of Dimensional Analysis</h2>
    <p>Dimensional analysis is extremely powerful, but it has <strong>5 strict mathematical boundaries</strong> tested frequently in NEB short-answer questions:</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="p-4 rounded-xl" style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 12px;">
        <div class="flex items-center gap-2 mb-2">
          <span style="font-size: 1.25rem;">🚫</span>
          <h4 style="margin: 0; color: #f87171; font-weight: 700; font-size: 0.95rem;">1. Proportionality Constants are Blind</h4>
        </div>
        <p style="font-size: 0.86rem; margin: 0; color: var(--text-body); line-height: 1.5;">Cannot determine the numerical value of dimensionless constants (like <code>&frac12;</code> in <code>&frac12;mv²</code> or <code>2&pi;</code> in <code>2&pi;&radic;(l/g)</code>). These must be discovered experimentally.</p>
      </div>

      <div class="p-4 rounded-xl" style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 12px;">
        <div class="flex items-center gap-2 mb-2">
          <span style="font-size: 1.25rem;">🚫</span>
          <h4 style="margin: 0; color: #f87171; font-weight: 700; font-size: 0.95rem;">2. Fails for Trig, Log & Exponentials</h4>
        </div>
        <p style="font-size: 0.86rem; margin: 0; color: var(--text-body); line-height: 1.5;">Cannot derive or evaluate equations containing <code>sin &theta;</code>, <code>cos &theta;</code>, <code>e^x</code>, or <code>ln(x)</code> because trigonometric angles and exponents must strictly be dimensionless.</p>
      </div>

      <div class="p-4 rounded-xl" style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 12px;">
        <div class="flex items-center gap-2 mb-2">
          <span style="font-size: 1.25rem;">🚫</span>
          <h4 style="margin: 0; color: #f87171; font-weight: 700; font-size: 0.95rem;">3. Cannot Distinguish Scalar vs Vector</h4>
        </div>
        <p style="font-size: 0.86rem; margin: 0; color: var(--text-body); line-height: 1.5;">Work and Torque possess identical dimensions <code>[M L² T⁻²]</code>, but Work is a scalar while Torque is a rotational vector. Dimensions give zero directional information.</p>
      </div>

      <div class="p-4 rounded-xl" style="background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 12px;">
        <div class="flex items-center gap-2 mb-2">
          <span style="font-size: 1.25rem;">🚫</span>
          <h4 style="margin: 0; color: #f87171; font-weight: 700; font-size: 0.95rem;">4. Maximum 3 Unknown Variables Limit</h4>
        </div>
        <p style="font-size: 0.86rem; margin: 0; color: var(--text-body); line-height: 1.5;">In mechanics involving Mass, Length, and Time <code>[M, L, T]</code>, we only get 3 independent equations. If a quantity depends on 4 or more variables, it cannot be solved uniquely.</p>
      </div>
    </div>

    <div class="note-box" style="margin-top: 1rem;">
      <strong>⚠️ Special Limitation on Sums:</strong> Multi-term equations with plus or minus signs (like <code>s = ut + &frac12;at²</code> or <code>v² = u² + 2as</code>) <strong>cannot</strong> be derived solely by dimensional proportionality. Dimensional analysis only deduces product relationships (<code>y = k &middot; a^x b^y c^z</code>).
    </div>

    <h2>9. Solved Original Worked Examples (NEB Exam Style)</h2>

    <div class="example-box">
      <strong>Worked Example 1 (Alternative Fundamental Basis):</strong><br/>
      If Force <code>[F]</code>, Velocity <code>[V]</code>, and Time <code>[T]</code> are adopted as the primary fundamental quantities, determine the dimensional formula for <strong>Mechanical Work (Energy)</strong>.
      <br/><br/>
      <strong>Step-by-step Solution:</strong><br/>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Let Work depend on Force, Velocity, and Time as: <code>W = k &middot; F^a &middot; V^b &middot; T^c</code>, where <code>k</code> is a dimensionless constant.</span></div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Express each quantity in standard MKS dimensions:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>[W] = [M L² T⁻²]</code><br/>
        <code>[F] = [M L T⁻²]</code><br/>
        <code>[V] = [L T⁻¹]</code><br/>
        <code>[T] = [T]</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Equating dimensional formulas on both sides:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>[M L² T⁻²] = [M L T⁻²]^a &middot; [L T⁻¹]^b &middot; [T]^c = [M^a &middot; L^(a+b) &middot; T^(&minus;2a &minus; b + c)]</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Comparing powers of fundamental base dimensions:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        For <code>[M]</code>: <code>a = 1</code><br/>
        For <code>[L]</code>: <code>a + b = 2 &implies; 1 + b = 2 &implies; b = 1</code><br/>
        For <code>[T]</code>: <code>&minus;2a &minus; b + c = &minus;2 &implies; &minus;2(1) &minus; 1 + c = &minus;2 &implies; c = 1</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Conclusion:</strong> Substituting the exponents yields: <code>[W] = [F¹ V¹ T¹]</code>.</span></div>
    </div>

    <div class="example-box">
      <strong>Worked Example 2 (Determining Unknown Parameters via Homogeneity):</strong><br/>
      The instantaneous velocity <code>v</code> of a moving particle along an axis is expressed by the empirical formula:
      <br/>
      <code style="font-size: 1rem; color: #fb923c;">v = A + B&middot;t + C / (D + t)</code>
      <br/>
      where <code>t</code> represents elapsed time in seconds. Determine the dimensional formulas and SI units of the constants <code>A</code>, <code>B</code>, <code>C</code>, and <code>D</code>.
      <br/><br/>
      <strong>Step-by-step Solution:</strong><br/>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Isolating D:</strong> In the denominator term <code>(D + t)</code>, physical quantities can only be added if they share the exact same dimensions. Since <code>t</code> is time:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>[D] = [t] = [T]</code> &rarr; <strong>SI Unit: second (s)</strong>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Isolating A:</strong> According to the principle of homogeneity, each separate additive term in the velocity relation must have the dimension of velocity:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>[A] = [v] = [L T⁻¹]</code> &rarr; <strong>SI Unit: m&middot;s⁻¹</strong>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Isolating B:</strong> The second term <code>B&middot;t</code> must also possess the dimension of velocity:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>[B&middot;t] = [v] &implies; [B][T] = [L T⁻¹] &implies; [B] = [L T⁻²]</code> &rarr; <strong>SI Unit: m&middot;s⁻² (acceleration)</strong>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Isolating C:</strong> The third term <code>C / (D + t)</code> must likewise match velocity:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>[C] / [D + t] = [v] &implies; [C] / [T] = [L T⁻¹] &implies; [C] = [L]</code> &rarr; <strong>SI Unit: metre (m)</strong>
      </div>
    </div>

    <div class="example-box">
      <strong>Worked Example 3 (Deriving a Law via Dimensional Analysis):</strong><br/>
      A high-velocity projectile traversing a gaseous medium experiences an aerodynamic resistive force <code>F</code> that depends upon the cross-sectional area <code>A</code> of the projectile, the density <code>&rho;</code> of the fluid medium, and the projectile speed <code>v</code>. Use dimensional analysis to deduce the governing algebraic relation.
      <br/><br/>
      <strong>Step-by-step Solution:</strong><br/>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Express the physical dependency in power-law form: <code>F = k &middot; A^x &middot; &rho;^y &middot; v^z</code> (where <code>k</code> is a dimensionless constant).</span></div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Substitute the dimensional formula for each variable:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>[F] = [M L T⁻²]</code><br/>
        <code>[A] = [L²]</code><br/>
        <code>[&rho;] = [M L⁻³]</code><br/>
        <code>[v] = [L T⁻¹]</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Assembling into a unified dimensional equation:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>[M L T⁻²] = [L²]^x &middot; [M L⁻³]^y &middot; [L T⁻¹]^z = [M^y &middot; L^(2x &minus; 3y + z) &middot; T^(&minus;z)]</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Equating powers of <code>[M]</code>, <code>[L]</code>, and <code>[T]</code>:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        Power of <code>[M]</code>: <code>y = 1</code><br/>
        Power of <code>[T]</code>: <code>&minus;z = &minus;2 &implies; z = 2</code><br/>
        Power of <code>[L]</code>: <code>2x &minus; 3y + z = 1 &implies; 2x &minus; 3(1) + 2 = 1 &implies; 2x &minus; 1 = 1 &implies; x = 1</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Final Relation:</strong> Substituting <code>x = 1</code>, <code>y = 1</code>, <code>z = 2</code> gives:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code style="font-size: 1.05rem; color: #22c55e;">F = k &middot; A &middot; &rho; &middot; v²</code>
      </div>
      <p style="margin-top: 0.5rem; font-size: 0.85rem; color: #94a3b8;">This demonstrates that aerodynamic drag scales quadratically with speed—a foundational result in fluid mechanics.</p>
    </div>

    <div class="example-box">
      <strong>Worked Example 4 (System Conversion Numerical):</strong><br/>
      Convert an energy value of <code>20 Joules</code> into a hypothetical system of units where the fundamental unit of mass is <code>200 g</code>, the unit of length is <code>20 cm</code>, and the unit of time is <code>10 s</code>.
      <br/><br/>
      <strong>Step-by-step Solution:</strong><br/>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>The dimensional formula of Energy is: <code>[E] = [M¹ L² T⁻²]</code>. Here, <code>a = 1</code>, <code>b = 2</code>, <code>c = &minus;2</code>.</span></div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Identify the two unit systems:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <strong>SI System (System 1):</strong> <code>n₁ = 20</code>, <code>M₁ = 1 kg = 1000 g</code>, <code>L₁ = 1 m = 100 cm</code>, <code>T₁ = 1 s</code><br/>
        <strong>New System (System 2):</strong> <code>n₂ = ?</code>, <code>M₂ = 200 g</code>, <code>L₂ = 20 cm</code>, <code>T₂ = 10 s</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span>Apply the unit conversion relation:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>n₂ = n₁ &times; [M₁ / M₂]^a &times; [L₁ / L₂]^b &times; [T₁ / T₂]^c</code><br/>
        <code>n₂ = 20 &times; [1000 g / 200 g]¹ &times; [100 cm / 20 cm]² &times; [1 s / 10 s]⁻²</code><br/>
        <code>n₂ = 20 &times; (5)¹ &times; (5)² &times; (0.1)⁻²</code><br/>
        <code>n₂ = 20 &times; 5 &times; 25 &times; 100 = 250,000 = 2.5 &times; 10⁵ new units</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Answer:</strong> <code>20 Joules = 2.5 &times; 10⁵ new units</code> in the specified custom coordinate system.</span></div>
    </div>

    <h2>10. NEB Exam Focus & High-Yield Practice Patterns</h2>
    <p>Based on our systematic analysis of the CDC textbook chapter-end exercises and past NEB board examinations, students should prepare for these recurring question types:</p>

    <ul>
      <li><strong>MCQ Pattern 1 — Dimensional Invariance:</strong> Questions testing whether you recognize that while numerical values and units change across systems (e.g., from CGS to SI), <em>the physical dimensions of a quantity remain strictly invariant</em>.</li>
      <li><strong>MCQ Pattern 2 — Distinguishing Dimensionally Correct vs. Physically Valid:</strong> Be ready to spot equations that are dimensionally balanced but physically erroneous due to missing coefficients or false terms (e.g., <code>v = at + u</code> is physically valid, while <code>v = u + 2at</code> is dimensionally correct but physically wrong).</li>
      <li><strong>Short Answer Pattern 1 — Principle of Homogeneity on Unknown Terms:</strong> Solving for powers or coefficients in polynomial equations such as <code>v = b/t + c&middot;t²</code> or rational equations like <code>v = a + bt + c/(d+t)</code>. Always remember that terms separated by plus/minus signs must share identical dimensions.</li>
      <li><strong>Short Answer Pattern 2 — Alternate Fundamental Sets:</strong> Deducing the dimensional formula of a standard quantity (like momentum or energy) when atypical quantities like <code>[Force, Length, Time]</code> or <code>[Force, Velocity, Time]</code> are postulated as fundamental base units.</li>
      <li><strong>Derivation Pattern — Power-Law Synthesis:</strong> Deriving classical formulas such as the frequency of a vibrating string (<code>f = (1/2l)&radic;(T/m)</code>) or the period of a simple pendulum. State clearly the assumption that proportionality constant <code>k</code> is dimensionless.</li>
      <li><strong>Numerical Pattern — System Unit Conversion:</strong> Converting Joules or Newtons into arbitrary hypothetical unit bases using the formula <code>n₂ = n₁ &times; [M₁/M₂]^a &times; [L₁/L₂]^b &times; [T₁/T₂]^c</code>.</li>
      <li><strong>Conceptual Differentiation:</strong> Defining accuracy versus precision with clear reference to experimental errors and instrument least count, accompanied by the target diagram.</li>
    </ul>

    <div class="note-box">
      <strong>Final Exam Tip:</strong> When computing uncertainties or counting significant figures, never omit the explicit unit. Keep in mind that pure counted numbers and defined geometric constants (like the factor 2 in <code>perimeter = 2(l + b)</code>) possess an infinite number of significant figures and do not constrain the precision of your final calculated answer.
    </div>
  `,
},
        {
  id: "phys11-vectors",
  class: "11",
  subject: "Physics",
  chapter: "Vectors",
  title: "Vectors — Class 11 Physics",
  icon: "🧭",
  summary:
    "Master the language of physical motion: scalars vs. vectors, unit vectors, triangle and parallelogram laws of addition, vector resolution, scalar (dot) and vector (cross) products, and high-yield NEB derivations with worked numericals.",
  tags: [
    "Vectors",
    "Vector Addition",
    "Parallelogram Law",
    "Vector Resolution",
    "Dot Product",
    "Cross Product",
    "Class 11",
    "Physics",
    "NEB",
  ],
  content: `
    <h2>1. Introduction: Scalars, Vectors, and the Geometry of Motion</h2>
    <p>In the study of natural phenomena, specifying a quantity's numerical size is often insufficient to describe its physical reality. If a navigator is informed that Pokhara lies 200 km from Kathmandu, flying 200 km in an arbitrary direction will rarely result in landing at Pokhara airport. Navigating successfully requires both the distance and the precise directional heading. In physics, direction is an intrinsic property of motion, force, and field interactions.</p>

    <div class="note-box">
      <strong>Historical Context:</strong> Modern vector analysis was independently formulated in the late nineteenth century by American mathematical physicist <em>Josiah Willard Gibbs</em> (1839–1903) at Yale and English electrical engineer <em>Oliver Heaviside</em> (1850–1925). By replacing the cumbersome quaternions of Hamilton with concise dot and cross operations, they streamlined James Clerk Maxwell's electromagnetic field equations into the vector form used in physics textbooks today.
    </div>

    <h3>Scalars vs. Vectors</h3>
    <p>Physical quantities are separated into two fundamental categories:</p>
    <ul>
      <li><strong>Scalar Quantities:</strong> Physical quantities that are entirely specified by their numerical magnitude and appropriate unit of measurement. Scalars possess no spatial direction and obey the ordinary rules of arithmetic algebra (e.g., mass, length, time, temperature, work, kinetic energy, density, electric potential).</li>
      <li><strong>Vector Quantities:</strong> Physical quantities that possess both numerical magnitude and spatial direction, and <strong>strictly obey the geometric laws of vector algebra</strong> (e.g., displacement, velocity, acceleration, force, linear momentum, electric field intensity).</li>
    </ul>

    <div class="key-stmt">
      📌 <strong>High-Frequency NEB Exam Case Study — Electric Current:</strong><br/>
      Why is electric current treated as a <em>scalar</em> even though it possesses both magnitude and a defined direction of flow?<br/>
      <strong>Core Reason:</strong> To qualify as a genuine physical vector, a quantity must not merely possess directional orientation; it must strictly obey the laws of vector composition (the triangle or parallelogram laws of vector addition). Electric current in a circuit divides and joins according to Kirchhoff's junction rule via simple scalar arithmetic (<code>I = I₁ + I₂</code>), completely independent of the physical angle between intersecting wires. Therefore, electric current is a scalar quantity.
    </div>

    <h3>Graphical & Analytical Representation</h3>
    <p>A vector is represented:</p>
    <ol>
      <li><strong>Graphically:</strong> By a straight line segment terminating in an arrow. The straight length of the segment is drawn proportional to the magnitude of the quantity, while the arrowhead indicates the directional sense. The starting point is termed the <em>tail</em> (or initial point), and the arrow tip is termed the <em>head</em> (or terminal point).</li>
      <li><strong>Analytically:</strong> By an alphabet character with an overhead arrow (e.g., <code>A</code>, <code>F</code>, <code>v</code>) or in boldface type (<strong>A</strong>, <strong>F</strong>, <strong>v</strong>). The absolute magnitude of the vector is written as <code>|A|</code> or simply <code>A</code>.</li>
    </ol>
<figure class="my-6 p-4 rounded-xl text-center" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px;">
      <img src="../public/images/notes/physics/ch2/fig-2-1-graphical-vector.webp" alt="Graphical Representation of a Vector" class="mx-auto rounded-lg max-h-60 object-contain shadow" loading="lazy" style="background: #fff; padding: 6px;" />
      <figcaption class="text-xs text-slate-400 mt-2.5 font-mono">Fig 2.1: Graphical Representation of a Vector (CDC Textbook)</figcaption>
    </figure>

    <h2>2. Classification & Types of Vectors</h2>
    <p>In solving mechanics and field problems, specific vector configurations recur systematically:</p>

    <ul>
      <li><strong>Unit Vector:</strong> A dimensionless vector having a magnitude of exactly unity (1). Its exclusive function is to indicate spatial direction. If <code>A</code> is any non-zero vector of magnitude <code>A</code>, the unit vector <code>n̂</code> in the direction of <code>A</code> is defined as:
        <div class="formula-box">
          <span class="formula-label">Unit Vector Definition</span>
          n̂ = A / |A| = A / A
        </div>
        Along the three mutually perpendicular Cartesian axes (X, Y, Z), the standard base unit vectors are designated respectively as <code>î</code>, <code>ĵ</code>, and <code>k̂</code>.
      </li>
      <li><strong>Position Vector:</strong> A vector drawn from the origin of reference <code>O(0, 0, 0)</code> to any arbitrary point <code>P(x, y, z)</code> in space. It locates the point relative to the coordinate frame:
        <div class="formula-box">
          <span class="formula-label">Position Vector & Magnitude</span>
          r = x î + y ĵ + z k̂ &emsp;&implies;&emsp; r = |r| = &radic;(x² + y² + z²)
        </div>
      </li>
      <li><strong>Parallel Vectors:</strong> Two or more vectors possessing the exact same spatial direction regardless of whether their numerical magnitudes are equal.</li>
      <li><strong>Equal Vectors:</strong> Vectors that possess both identical numerical magnitude and identical spatial direction.</li>
      <li><strong>Negative Vector:</strong> A vector having the identical magnitude as a given vector <code>A</code>, but pointing in the exactly opposite direction (antiparallel). Written as <code>&minus;A</code>.</li>
      <li><strong>Collinear Vectors:</strong> Vectors that lie along the same straight line or along parallel lines of action, whether acting in the same or opposite directional sense.</li>
      <li><strong>Coplanar Vectors:</strong> Vectors situated within the exact same geometric plane. (Note: Any two non-parallel intersecting vectors are always coplanar; three vectors may or may not be coplanar).</li>
      <li><strong>Null (Zero) Vector:</strong> A vector whose magnitude is exactly zero (<code>|0| = 0</code>). Its directional orientation is arbitrary or indeterminate. A null vector results when a vector is subtracted from itself (<code>A &minus; A = 0</code>) or when two equal and opposite forces act on a stationary particle.</li>
    </ul>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <figure class="p-4 rounded-xl text-center" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px;">
        <img src="../public/images/notes/physics/ch2/fig-2-2-unit-vectors-3d.webp" alt="Unit Vectors along Coordinate Axes (3D)" class="mx-auto rounded-lg max-h-56 object-contain shadow" loading="lazy" style="background: #fff; padding: 6px;" />
        <figcaption class="text-xs text-slate-400 mt-2 font-mono">Fig 2.2: Unit Vectors along Coordinate Axes (3D)</figcaption>
      </figure>
      <figure class="p-4 rounded-xl text-center" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px;">
        <img src="../public/images/notes/physics/ch2/fig-2-3-parallel-vectors.webp" alt="Parallel and Equal Vectors" class="mx-auto rounded-lg max-h-56 object-contain shadow" loading="lazy" style="background: #fff; padding: 6px;" />
        <figcaption class="text-xs text-slate-400 mt-2 font-mono">Fig 2.3: Parallel & Equal Vectors</figcaption>
      </figure>
    </div>

    <h2>3. Vector Addition (Composition of Vectors)</h2>
    <p>Combining two or more individual vectors into a single equivalent vector that produces the exact same physical effect is termed the <strong>composition of vectors</strong>. The resulting vector is called the <strong>resultant vector (R)</strong>.</p>

    <h3>3.1 Triangle Law of Vector Addition</h3>
    <div class="key-stmt">
      📌 <strong>Statement of Triangle Law:</strong> If two vectors are represented both in magnitude and direction by two consecutive sides of a triangle taken in the same order (head-to-tail), their resultant vector is represented completely in magnitude and direction by the third (closing) side of the triangle taken in the reverse order (from the tail of the first to the head of the second).
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <figure class="p-4 rounded-xl text-center" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px;">
        <img src="../public/images/notes/physics/ch2/fig-2-4-triangle-law.webp" alt="Triangle Law of Vector Addition" class="mx-auto rounded-lg max-h-64 object-contain shadow" loading="lazy" style="background: #fff; padding: 6px;" />
        <figcaption class="text-xs text-slate-400 mt-2 font-mono">Fig 2.4: Triangle Law of Vector Addition (CDC Textbook)</figcaption>
      </figure>
      <figure class="p-4 rounded-xl text-center" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px;">
        <img src="../public/images/notes/physics/ch2/fig-2-6-parallelogram-law.webp" alt="Parallelogram Law of Vector Addition" class="mx-auto rounded-lg max-h-64 object-contain shadow" loading="lazy" style="background: #fff; padding: 6px;" />
        <figcaption class="text-xs text-slate-400 mt-2 font-mono">Fig 2.6: Parallelogram Law of Vector Addition (Analytical Derivation)</figcaption>
      </figure>
    </div>

    <h4>Analytical Derivation of Magnitude and Direction</h4>
    <p>Let two vectors <code>P</code> and <code>Q</code> act at an angle <code>&theta;</code> to each other. In the figure above:</p>
    <ul>
      <li><code>OA = P</code> represents vector <code>P</code>.</li>
      <li><code>AC = Q</code> represents vector <code>Q</code>.</li>
      <li><code>OC = R</code> represents the resultant vector <code>R</code>.</li>
    </ul>
    <p>Produce side <code>OA</code> forward to point <code>D</code> and draw a perpendicular <code>CD &perp; OD</code>. In the right-angled triangle <code>&Delta;ADC</code>:</p>
    <div style="padding-left: 1.5rem; margin: 0.5rem 0;">
      <code>cos &theta; = AD / AC = AD / Q &implies; AD = Q cos &theta;</code><br/>
      <code>sin &theta; = CD / AC = CD / Q &implies; CD = Q sin &theta;</code>
    </div>

    <p>Applying the Pythagorean theorem to the large right-angled triangle <code>&Delta;ODC</code>:</p>
    <div style="padding-left: 1.5rem; margin: 0.5rem 0;">
      <code>OC² = OD² + CD² = (OA + AD)² + CD²</code><br/>
      <code>OC² = OA² + 2(OA)(AD) + AD² + CD²</code>
    </div>
    <p>Since <code>AD² + CD² = AC²</code> (by Pythagoras in <code>&Delta;ADC</code>):</p>
    <div style="padding-left: 1.5rem; margin: 0.5rem 0;">
      <code>R² = P² + 2P(Q cos &theta;) + Q²</code>
    </div>

    <div class="formula-box">
      <span class="formula-label">Resultant Magnitude Formula</span>
      R = &radic;(P² + Q² + 2PQ cos &theta;)
    </div>

    <p>To determine the directional angle <code>&alpha;</code> that <code>R</code> makes relative to <code>P</code>:</p>
    <div style="padding-left: 1.5rem; margin: 0.5rem 0;">
      <code>tan &alpha; = CD / OD = CD / (OA + AD) = (Q sin &theta;) / (P + Q cos &theta;)</code>
    </div>

    <div class="formula-box">
      <span class="formula-label">Resultant Direction Formula</span>
      &alpha; = tan⁻¹ [ (Q sin &theta;) / (P + Q cos &theta;) ]
    </div>

    <h3>3.2 Parallelogram Law of Vector Addition</h3>
    <div class="key-stmt">
      📌 <strong>Statement of Parallelogram Law:</strong> If two co-initial vectors are represented both in magnitude and direction by two adjacent sides of a parallelogram drawn from a common point, their resultant is represented completely in magnitude and direction by the diagonal of the parallelogram passing through that identical point.
    </div>
    <p>Because opposite sides of a parallelogram are equal in length and parallel (<code>AC = OB = Q</code>), the geometric construction and analytical formulas for both magnitude <code>R</code> and direction <code>&alpha;</code> are identical to those of the triangle law.</p>

    <h3>3.3 Special Cases of Vector Addition</h3>
    <table>
      <thead>
        <tr>
          <th>Condition / Angle</th>
          <th>Physical Alignment</th>
          <th>Resultant Magnitude</th>
          <th>Direction (&alpha;)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>&theta; = 0&deg;</strong> (Parallel)</td>
          <td>Vectors act in the same direction</td>
          <td><code>R = P + Q</code> (Maximum possible)</td>
          <td><code>&alpha; = 0&deg;</code> (along P and Q)</td>
        </tr>
        <tr>
          <td><strong>&theta; = 90&deg;</strong> (Orthogonal)</td>
          <td>Vectors act at right angles</td>
          <td><code>R = &radic;(P² + Q²)</code></td>
          <td><code>&alpha; = tan⁻¹(Q / P)</code></td>
        </tr>
        <tr>
          <td><strong>&theta; = 180&deg;</strong> (Antiparallel)</td>
          <td>Vectors act in opposite directions</td>
          <td><code>R = |P &minus; Q|</code> (Minimum possible)</td>
          <td><code>&alpha; = 0&deg;</code> (along larger vector)</td>
        </tr>
        <tr>
          <td><strong>P = Q</strong> (Equal Magnitudes)</td>
          <td>Two identical vector sizes at angle &theta;</td>
          <td><code>R = 2P cos(&theta; / 2)</code></td>
          <td><code>&alpha; = &theta; / 2</code> (Bisects the angle)</td>
        </tr>
        <tr>
          <td><strong>P = Q and &theta; = 120&deg;</strong></td>
          <td>Symmetric three-way balance</td>
          <td><code>R = P = Q</code></td>
          <td><code>&alpha; = 60&deg;</code></td>
        </tr>
      </tbody>
    </table>

    <div class="note-box">
      <strong>Proof of Angle Bisector Property (P = Q):</strong><br/>
      When <code>P = Q</code>:<br/>
      <code>tan &alpha; = (P sin &theta;) / (P + P cos &theta;) = (P sin &theta;) / [P(1 + cos &theta;)] = sin &theta; / (1 + cos &theta;)</code><br/>
      Using trigonometric identities <code>sin &theta; = 2 sin(&theta;/2) cos(&theta;/2)</code> and <code>1 + cos &theta; = 2 cos²(&theta;/2)</code>:<br/>
      <code>tan &alpha; = [2 sin(&theta;/2) cos(&theta;/2)] / [2 cos²(&theta;/2)] = tan(&theta;/2) &implies; &alpha; = &theta; / 2</code>.<br/>
      Hence, the resultant of two equal vectors always symmetrically bisects the angle between them.
    </div>

    <h3>3.4 Polygon Law of Vector Addition</h3>
    <div class="key-stmt">
      📌 <strong>Statement of Polygon Law:</strong> If any number of vectors are represented both in magnitude and direction by the consecutive sides of an open polygon taken in the same order, their resultant is represented completely in magnitude and direction by the closing side of the polygon taken in the reverse order.
    </div>
    <p>If the polygon forms a closed figure with all sides taken in the same cyclic order, the starting point coincides with the ending point, meaning the net resultant is the null vector: <code>A + B + C + ... = 0</code>. This forms the foundation for multi-force static equilibrium.</p>

    <h2>4. Vector Subtraction</h2>
    <p>Vector subtraction is defined as the addition of a negative vector. To subtract vector <code>B</code> from vector <code>A</code>, we reverse the direction of <code>B</code> by 180&deg; to form <code>&minus;B</code>, and then add it to <code>A</code> using the standard triangle or parallelogram laws:</p>

    <div class="formula-box">
      <span class="formula-label">Vector Subtraction Identity</span>
      S = A &minus; B = A + (&minus;B)
    </div>

    <p>Since reversing a vector changes the angle between the vectors from <code>&theta;</code> to <code>(180&deg; &minus; &theta;)</code>, and noting that <code>cos(180&deg; &minus; &theta;) = &minus;cos &theta;</code>:</p>
    <div class="formula-box">
      <span class="formula-label">Magnitude of Vector Difference</span>
      |A &minus; B| = &radic;(A² + B² &minus; 2AB cos &theta;)
    </div>
<figure class="my-6 p-4 rounded-xl text-center" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 14px;">
      <img src="../public/images/notes/physics/ch2/fig-2-8-subtraction-vectors.webp" alt="Vector Subtraction via Negative Vectors" class="mx-auto rounded-lg max-h-64 object-contain shadow" loading="lazy" style="background: #fff; padding: 6px;" />
      <figcaption class="text-xs text-slate-400 mt-2.5 font-mono">Fig 2.8: Vector Subtraction via Negative Vectors (CDC Textbook)</figcaption>
    </figure>
    </div>

    <h2>5. Resolution of Vectors (Decomposition)</h2>
    <p>The process of splitting a single given vector into two or more independent constituent vectors along chosen directions is termed the <strong>resolution of a vector</strong>. The split vectors are known as the <strong>components</strong> of the original vector. Resolution is the exact inverse operation of vector composition.</p>

    <h3>5.1 Rectangular Components in Two Dimensions (2D)</h3>
    <p>When a vector is resolved into mutually perpendicular axes (traditionally the horizontal X-axis and vertical Y-axis), the components are termed <strong>rectangular components</strong>.</p>

    <!-- Clean SVG for Vector Resolution -->
    <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(249, 115, 22, 0.3); border-radius: 12px; padding: 20px; margin: 1.5rem 0; text-align: center;">
      <svg width="280" height="210" viewBox="0 0 280 210" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
        <!-- Axes -->
        <line x1="40" y1="170" x2="250" y2="170" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#axisArrow)"/>
        <line x1="40" y1="170" x2="40" y2="20" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#axisArrow)"/>
        <!-- Vector A -->
        <line x1="40" y1="170" x2="200" y2="50" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowGreen)"/>
        <!-- Projections -->
        <line x1="200" y1="50" x2="200" y2="170" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="4,4"/>
        <line x1="200" y1="50" x2="40" y2="50" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,4"/>
        <!-- Component Ax on X -->
        <line x1="40" y1="170" x2="195" y2="170" stroke="#fb923c" stroke-width="3" marker-end="url(#arrowOrange)"/>
        <!-- Component Ay on Y -->
        <line x1="40" y1="170" x2="40" y2="55" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrowBlue)"/>
        <!-- Labels -->
        <text x="25" y="185" fill="#f8fafc" font-family="JetBrains Mono" font-size="12" font-weight="bold">O</text>
        <text x="255" y="175" fill="#94a3b8" font-family="JetBrains Mono" font-size="12">X</text>
        <text x="35" y="15" fill="#94a3b8" font-family="JetBrains Mono" font-size="12">Y</text>
        <text x="205" y="45" fill="#f8fafc" font-family="JetBrains Mono" font-size="12" font-weight="bold">A(x,y)</text>
        <text x="110" y="95" fill="#22c55e" font-family="JetBrains Mono" font-size="14" font-weight="bold">A</text>
        <text x="105" y="192" fill="#fb923c" font-family="JetBrains Mono" font-size="12" font-weight="bold">Ax = A cos θ</text>
        <text x="50" y="110" fill="#3b82f6" font-family="JetBrains Mono" font-size="12" font-weight="bold" transform="rotate(-90 50 110)">Ay = A sin θ</text>
        <!-- Angle theta -->
        <path d="M 75 170 A 35 35 0 0 0 68 149" fill="none" stroke="#22c55e" stroke-width="1.5"/>
        <text x="82" y="162" fill="#22c55e" font-family="JetBrains Mono" font-size="11">θ</text>
        
        <defs>
          <marker id="axisArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
          </marker>
        </defs>
      </svg>
      <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 8px;">Figure 2.2: Rectangular Resolution of Vector A into Horizontal (Ax) and Vertical (Ay) Components</div>
    </div>

    <p>Let vector <code>A</code> make an angle <code>&theta;</code> with the positive X-axis. In the right-angled triangle formed by the vector and coordinate axes:</p>
    <div class="formula-box">
      <span class="formula-label">2D Rectangular Components</span>
      Horizontal Component: A_x = A cos &theta;<br/>
      Vertical Component: A_y = A sin &theta;
    </div>

    <p>Conversely, if the rectangular components <code>A_x</code> and <code>A_y</code> are known, the original vector's magnitude and direction are reconstructed via:</p>
    <div class="formula-box">
      <span class="formula-label">Magnitude & Direction from Components</span>
      A = &radic;(A_x² + A_y²) &emsp; and &emsp; &theta; = tan⁻¹(A_y / A_x)
    </div>
    <p>In Cartesian unit vector notation, <code>A = A_x î + A_y ĵ</code>.</p>

    <h3>5.2 Rectangular Components in Three Dimensions (3D)</h3>
    <p>In three-dimensional space, vector <code>A</code> is resolved along three mutually perpendicular coordinate axes:</p>
    <div class="formula-box">
      <span class="formula-label">3D Vector Resolution</span>
      A = A_x î + A_y ĵ + A_z k̂ &emsp;&implies;&emsp; A = &radic;(A_x² + A_y² + A_z²)
    </div>
    <p>If <code>&alpha;</code>, <code>&beta;</code>, and <code>&gamma;</code> are the directional angles that <code>A</code> makes with the X, Y, and Z axes respectively, their <strong>direction cosines</strong> satisfy the identity:</p>
    <div class="formula-box">
      <span class="formula-label">Direction Cosines Identity</span>
      cos²&alpha; + cos²&beta; + cos²&gamma; = 1 &emsp;&emsp; (where cos &alpha; = A_x / A, cos &beta; = A_y / A, cos &gamma; = A_z / A)
    </div>

    <h2>6. Scalar Product (Dot Product)</h2>
    <div class="key-stmt">
      📌 <strong>Definition of Dot Product:</strong> The scalar product (or dot product) of two vectors <code>A</code> and <code>B</code> is defined as the product of their magnitudes and the cosine of the angle <code>&theta;</code> between them.
    </div>

    <div class="formula-box">
      <span class="formula-label">Scalar Product Equation</span>
      A &middot; B = A B cos &theta;
    </div>
    <p>The result of a dot product is always a pure scalar quantity possessing only magnitude and no spatial direction.</p>

    <h3>Properties of the Scalar Product</h3>
    <ol>
      <li><strong>Commutative:</strong> The order of factors does not alter the product: <code>A &middot; B = B &middot; A</code>.</li>
      <li><strong>Distributive:</strong> Multiplication distributes over vector addition: <code>A &middot; (B + C) = A &middot; B + A &middot; C</code>.</li>
      <li><strong>Condition of Orthogonality:</strong> If two non-zero vectors are mutually perpendicular (<code>&theta; = 90&deg;</code>), their dot product vanishes identically because <code>cos 90&deg; = 0</code>:
        <div class="formula-box">
          <span class="formula-label">Orthogonality Test</span>
          A &perp; B &emsp;&iff;&emsp; A &middot; B = 0
        </div>
      </li>
      <li><strong>Self-Dot Product:</strong> The dot product of a vector with itself equals the square of its magnitude: <code>A &middot; A = A&middot;A cos 0&deg; = A²</code>.</li>
      <li><strong>Orthogonal Unit Vectors:</strong>
        <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
          <code>î &middot; î = ĵ &middot; ĵ = k̂ &middot; k̂ = 1</code> (since &theta; = 0&deg;, cos 0&deg; = 1)<br/>
          <code>î &middot; ĵ = ĵ &middot; k̂ = k̂ &middot; î = 0</code> (since &theta; = 90&deg;, cos 90&deg; = 0)
        </div>
      </li>
      <li><strong>Dot Product in Component Form:</strong> If <code>A = A_x î + A_y ĵ + A_z k̂</code> and <code>B = B_x î + B_y ĵ + B_z k̂</code>:
        <div class="formula-box">
          <span class="formula-label">Component Expansion of Dot Product</span>
          A &middot; B = A_x B_x + A_y B_y + A_z B_z
        </div>
      </li>
      <li><strong>Angle Between Two Vectors:</strong>
        <div class="formula-box">
          <span class="formula-label">Angle Formula via Dot Product</span>
          cos &theta; = (A &middot; B) / (A B) = (A_x B_x + A_y B_y + A_z B_z) / [ &radic;(A_x²+A_y²+A_z²) &middot; &radic;(B_x²+B_y²+B_z²) ]
        </div>
      </li>
      <li><strong>Scalar Projection:</strong> The projection of vector <code>A</code> onto the direction of <code>B</code> is given by: <code>A cos &theta; = (A &middot; B) / B = A &middot; b̂</code>.</li>
    </ol>

    <div class="note-box">
      <strong>Physical Realizations of Scalar Product:</strong>
      <ul>
        <li><strong>Mechanical Work Done:</strong> <code>W = F &middot; s = F s cos &theta;</code> (force dot displacement).</li>
        <li><strong>Instantaneous Power:</strong> <code>P = F &middot; v</code> (force dot velocity).</li>
        <li><strong>Magnetic Flux:</strong> <code>&Phi;_B = B &middot; A</code> (magnetic field dot area vector).</li>
      </ul>
    </div>

    <h2>7. Vector Product (Cross Product)</h2>
    <div class="key-stmt">
      📌 <strong>Definition of Cross Product:</strong> The vector product (or cross product) of two vectors <code>A</code> and <code>B</code> is a vector whose magnitude equals the product of their magnitudes and the sine of the angle between them, and whose direction is perpendicular to the plane containing both vectors in accordance with the <strong>Right-Hand Screw Rule</strong>.
    </div>

    <div class="formula-box">
      <span class="formula-label">Vector Product Equation</span>
      A &times; B = (A B sin &theta;) n̂
    </div>
    <p>Here, <code>n̂</code> is a unit normal vector perpendicular to the plane formed by <code>A</code> and <code>B</code>. If the fingers of the right hand curl from <code>A</code> towards <code>B</code> through the smaller angle <code>&theta;</code>, the outstretched thumb points in the direction of <code>n̂</code>.</p>

    <h3>Properties of the Vector Product</h3>
    <ol>
      <li><strong>Anti-Commutative:</strong> Reversing the multiplication order reverses the directional sense of the resulting vector:
        <div class="formula-box">
          <span class="formula-label">Anti-Commutative Identity</span>
          A &times; B = &minus;(B &times; A)
        </div>
      </li>
      <li><strong>Distributive:</strong> <code>A &times; (B + C) = A &times; B + A &times; C</code>.</li>
      <li><strong>Condition of Parallelism / Collinearity:</strong> If two non-zero vectors are parallel (<code>&theta; = 0&deg;</code>) or antiparallel (<code>&theta; = 180&deg;</code>), their cross product vanishes because <code>sin 0&deg; = sin 180&deg; = 0</code>:
        <div class="formula-box">
          <span class="formula-label">Parallelism Test</span>
          A &parallel; B &emsp;&iff;&emsp; A &times; B = 0 &emsp; [or A_x/B_x = A_y/B_y = A_z/B_z]
        </div>
      </li>
      <li><strong>Self-Cross Product:</strong> The cross product of any vector with itself is always zero: <code>A &times; A = 0</code>.</li>
      <li><strong>Cyclic Unit Vector Rules:</strong> Unit vectors obey a right-handed cyclic permutation <code>(î &rarr; ĵ &rarr; k̂ &rarr; î)</code>:
        <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
          <strong>Self Products:</strong> <code>î &times; î = ĵ &times; ĵ = k̂ &times; k̂ = 0</code><br/>
          <strong>Cyclic (Positive):</strong> <code>î &times; ĵ = k̂</code>, &emsp; <code>ĵ &times; k̂ = î</code>, &emsp; <code>k̂ &times; î = ĵ</code><br/>
          <strong>Anti-Cyclic (Negative):</strong> <code>ĵ &times; î = &minus;k̂</code>, &emsp; <code>k̂ &times; ĵ = &minus;î</code>, &emsp; <code>î &times; k̂ = &minus;ĵ</code>
        </div>
      </li>
      <li><strong>Determinant Formulation:</strong> In terms of Cartesian rectangular components:
        <div class="formula-box">
          <span class="formula-label">Determinant Form of Cross Product</span>
          A &times; B = 
          |  î     ĵ     k̂  |<br/>
          | A_x   A_y   A_z |<br/>
          | B_x   B_y   B_z |<br/>
          = î(A_y B_z &minus; A_z B_y) &minus; ĵ(A_x B_z &minus; A_z B_x) + k̂(A_x B_y &minus; A_y B_x)
        </div>
      </li>
      <li><strong>Unit Vector Perpendicular to Plane:</strong>
        <div class="formula-box">
          <span class="formula-label">Unit Vector Normal to Plane</span>
          n̂ = (A &times; B) / |A &times; B|
        </div>
      </li>
    </ol>

    <h3>Geometric Significance of the Cross Product</h3>
    <p>The magnitude <code>|A &times; B| = A B sin &theta;</code> has an immediate geometric meaning: in a parallelogram with adjacent sides <code>A</code> and <code>B</code>, the base is <code>A</code> and the perpendicular height is <code>h = B sin &theta;</code>. Therefore:</p>

    <div class="formula-box">
      <span class="formula-label">Geometric Area Formulas</span>
      Area of Parallelogram = |A &times; B|<br/>
      Area of Triangle = &frac12; |A &times; B|
    </div>

    <div class="note-box">
      <strong>Physical Realizations of Vector Product:</strong>
      <ul>
        <li><strong>Torque (Moment of Force):</strong> <code>τ = r &times; F</code></li>
        <li><strong>Angular Momentum:</strong> <code>L = r &times; p = r &times; (m v)</code></li>
        <li><strong>Lorentz Magnetic Force:</strong> <code>F_B = q(v &times; B)</code></li>
        <li><strong>Linear vs. Angular Velocity:</strong> <code>v = ω &times; r</code></li>
      </ul>
    </div>

    <h2>8. Solved Original Worked Examples (NEB Exam Style)</h2>

    <div class="example-box">
      <strong>Worked Example 1 (3D Vector Magnitude & Normalization):</strong><br/>
      A displacement vector is given by <code>r = 3 î &minus; 2 ĵ + 6 k̂</code> meters.<br/>
      (a) Determine the magnitude of the displacement vector.<br/>
      (b) Find the unit vector pointing in the direction of <code>r</code>.<br/>
      (c) Calculate the direction cosine of <code>r</code> with respect to the Z-axis.
      <br/><br/>
      <strong>Step-by-step Solution:</strong><br/>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Part (a) Magnitude:</strong></span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>r = |r| = &radic;[ (3)² + (&minus;2)² + (6)² ] = &radic;[ 9 + 4 + 36 ] = &radic;49 = 7 m</code>.
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Part (b) Unit Vector:</strong></span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>r̂ = r / |r| = (3 î &minus; 2 ĵ + 6 k̂) / 7 = (3/7) î &minus; (2/7) ĵ + (6/7) k̂</code>.
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Part (c) Direction Cosine:</strong></span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>cos &gamma; = z / r = 6 / 7 &approx; 0.857 &implies; &gamma; = cos⁻¹(6/7) &approx; 31.0&deg;</code>.
      </div>
    </div>

    <div class="example-box">
      <strong>Worked Example 2 (Parallelogram Law with Changing Resultant):</strong><br/>
      Two forces <code>F₁ = 4 N</code> and <code>F₂ = 3 N</code> act at a point inclined at an angle <code>&theta;</code> producing a resultant of magnitude <code>R</code>. If the magnitude of <code>F₁</code> is doubled to <code>8 N</code> while <code>F₂</code> remains unchanged, the resultant doubles to <code>2R</code>. Determine the angle <code>&theta;</code> between the two forces.
      <br/><br/>
      <strong>Step-by-step Solution:</strong><br/>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Initial Condition:</strong> Using the parallelogram law:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>R² = F₁² + F₂² + 2 F₁ F₂ cos &theta; = 4² + 3² + 2(4)(3) cos &theta;</code><br/>
        <code>R² = 16 + 9 + 24 cos &theta; = 25 + 24 cos &theta; &emsp; &mdash; (Equation 1)</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Modified Condition:</strong> Replacing <code>F₁ = 8 N</code> and <code>R' = 2R</code>:</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>(2R)² = 8² + 3² + 2(8)(3) cos &theta;</code><br/>
        <code>4 R² = 64 + 9 + 48 cos &theta; = 73 + 48 cos &theta; &emsp; &mdash; (Equation 2)</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Substitute Equation 1 into Equation 2:</strong></span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>4(25 + 24 cos &theta;) = 73 + 48 cos &theta;</code><br/>
        <code>100 + 96 cos &theta; = 73 + 48 cos &theta;</code><br/>
        <code>96 cos &theta; &minus; 48 cos &theta; = 73 &minus; 100</code><br/>
        <code>48 cos &theta; = &minus;27 &implies; cos &theta; = &minus;27 / 48 = &minus;9 / 16 = &minus;0.5625</code>
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Conclusion:</strong> <code>&theta; = cos⁻¹(&minus;0.5625) &approx; 124.2&deg;</code>.</span></div>
    </div>

    <div class="example-box">
      <strong>Worked Example 3 (Orthogonality & Scalar Projection):</strong><br/>
      Given two vectors <code>A = 2 î + 3 ĵ &minus; 4 k̂</code> and <code>B = 4 î &minus; 2 ĵ + &lambda; k̂</code>:<br/>
      (a) Find the value of scalar constant <code>&lambda;</code> such that <code>A</code> and <code>B</code> are mutually orthogonal.<br/>
      (b) If <code>&lambda; = 1</code>, calculate the scalar projection of <code>A</code> onto <code>B</code>.
      <br/><br/>
      <strong>Step-by-step Solution:</strong><br/>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Part (a) Orthogonality Condition:</strong> For <code>A &perp; B</code>, their dot product must vanish: <code>A &middot; B = 0</code>.</span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>(2)(4) + (3)(&minus;2) + (&minus;4)(&lambda;) = 0</code><br/>
        <code>8 &minus; 6 &minus; 4&lambda; = 0 &implies; 2 &minus; 4&lambda; = 0 &implies; &lambda; = 2/4 = 0.5</code>.
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Part (b) Scalar Projection (with &lambda; = 1):</strong></span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        With <code>&lambda; = 1</code>, vector <code>B = 4 î &minus; 2 ĵ + 1 k̂</code>.<br/>
        Dot product: <code>A &middot; B = (2)(4) + (3)(&minus;2) + (&minus;4)(1) = 8 &minus; 6 &minus; 4 = &minus;2</code>.<br/>
        Magnitude of <code>B</code>: <code>|B| = &radic;[ (4)² + (&minus;2)² + (1)² ] = &radic;[ 16 + 4 + 1 ] = &radic;21 &approx; 4.583</code>.<br/>
        Scalar projection: <code>Proj = (A &middot; B) / |B| = &minus;2 / &radic;21 &approx; &minus;0.436</code>.
      </div>
    </div>

    <div class="example-box">
      <strong>Worked Example 4 (Cross Product, Normal Unit Vector & Parallelogram Area):</strong><br/>
      Consider vectors <code>A = 2 î + ĵ &minus; 2 k̂</code> and <code>B = 3 î &minus; 2 ĵ + 4 k̂</code>.<br/>
      (a) Compute the cross product <code>A &times; B</code>.<br/>
      (b) Find the area of the triangle spanned by <code>A</code> and <code>B</code>.<br/>
      (c) Determine a unit vector perpendicular to both <code>A</code> and <code>B</code>.
      <br/><br/>
      <strong>Step-by-step Solution:</strong><br/>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Part (a) Cross Product Determinant:</strong></span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>A &times; B = 
        |  î    ĵ    k̂  |<br/>
        |  2    1   &minus;2  |<br/>
        |  3   &minus;2    4  |</code><br/>
        <code>= î [ (1)(4) &minus; (&minus;2)(&minus;2) ] &minus; ĵ [ (2)(4) &minus; (&minus;2)(3) ] + k̂ [ (2)(&minus;2) &minus; (1)(3) ]</code><br/>
        <code>= î [ 4 &minus; 4 ] &minus; ĵ [ 8 &minus; (&minus;6) ] + k̂ [ &minus;4 &minus; 3 ]</code><br/>
        <code>= 0 î &minus; 14 ĵ &minus; 7 k̂ = &minus;14 ĵ &minus; 7 k̂</code>.
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Part (b) Area of the Triangle:</strong></span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        Magnitude: <code>|A &times; B| = &radic;[ 0² + (&minus;14)² + (&minus;7)² ] = &radic;[ 196 + 49 ] = &radic;245 &approx; 15.652</code>.<br/>
        Area of Triangle: <code>&frac12; |A &times; B| = 15.652 / 2 = 7.826 sq. units</code>.
      </div>
      <div class="step-line"><span class="step-arrow">&bull;</span><span><strong>Part (c) Unit Normal Vector:</strong></span></div>
      <div style="padding-left: 1.5rem; margin: 0.4rem 0;">
        <code>n̂ = (A &times; B) / |A &times; B| = (&minus;14 ĵ &minus; 7 k̂) / &radic;245 = &minus;(14/&radic;245) ĵ &minus; (7/&radic;245) k̂</code>.
      </div>
    </div>

    <h2>9. NEB Exam Focus & High-Yield Practice Blueprint</h2>
    <p>Based on our comprehensive analysis of the 36 chapter-end exercises in the CDC textbook and past NEB board examinations, students should master the following recurrent question patterns:</p>

    <ul>
      <li><strong>MCQ Pattern 1 — Vector Magnitude Bounds:</strong> Finding the possible range of a resultant force. If forces are <code>4 N</code> and <code>3 N</code>, the resultant can lie anywhere within the continuous closed interval <code>[|4 &minus; 3|, 4 + 3] = [1 N, 7 N]</code> depending solely on the angle <code>&theta;</code>.</li>
      <li><strong>MCQ Pattern 2 — Equal Vectors at 120&deg;:</strong> Identifying that when two equal forces act at an angle of 120&deg;, the resultant magnitude equals either force (<code>R = F</code>).</li>
      <li><strong>MCQ Pattern 3 — Directional Orientation of Vector Products:</strong> Recognizing that the vector <code>(A &times; B)</code> is strictly normal (perpendicular, angle 90&deg;) to both <code>A</code>, <code>B</code>, and their linear combination <code>(A + B)</code>.</li>
      <li><strong>Derivation Pattern 1 — Parallelogram Law:</strong> Full analytical derivation of <code>R = &radic;(P² + Q² + 2PQ cos &theta;)</code> and <code>tan &alpha; = (Q sin &theta;) / (P + Q cos &theta;)</code> with clean labeled diagrams. (Frequently asked as a 4-mark question).</li>
      <li><strong>Derivation Pattern 2 — Equal Vectors Bisecting Property:</strong> Using half-angle trigonometric formulas to formally prove that <code>&alpha; = &theta; / 2</code> when <code>P = Q</code>.</li>
      <li><strong>Conceptual Question — Current as a Scalar:</strong> Explaining why electric current is a scalar despite possessing direction (fails vector addition laws).</li>
      <li><strong>Numerical Pattern 1 — Multi-Step Navigational Resolution:</strong> Resolving successive displacements (e.g., walking North, then East, then Southeast) into rectangular <code>x</code> and <code>y</code> components, summing them algebraically (<code>&Sigma;R_x</code>, <code>&Sigma;R_y</code>), and finding net displacement <code>R = &radic;[(&Sigma;R_x)² + (&Sigma;R_y)²]</code>.</li>
      <li><strong>Numerical Pattern 2 — Determinant Cross Product & Triangle Area:</strong> Calculating the area of a parallelogram or triangle spanned by two 3D vectors via cross product determinant.</li>
    </ul>

    <div class="note-box">
      <strong>Core Exam Mistake Warning:</strong><br/>
      &bull; Confusing vanishing conditions: <code>A &middot; B = 0</code> means vectors are <strong>orthogonal (90&deg;)</strong>, whereas <code>A &times; B = 0</code> means vectors are <strong>parallel (0&deg; or 180&deg;)</strong>.<br/>
      &bull; Cross product direction: Never write <code>A &times; B = B &times; A</code>. Always remember the minus sign: <code>A &times; B = &minus;(B &times; A)</code>.
    </div>
  `,
}
,
{
  id: "phys11-kinematics",
  class: "11",
  subject: "Physics",
  chapter: "Kinematics",
  title: "Kinematics — Class 11 Physics",
  icon: "🚀",
  summary:
    "Complete NEB Class 11 Kinematics: distance vs displacement, speed vs velocity, acceleration, v-t and s-t graphs, equations of motion (suvat), distance in nth second, relative velocity (rain-man, river-swimmer), and full projectile motion theory with all formulas and worked examples.",
  tags: [
    "Kinematics",
    "Equations of Motion",
    "Projectile Motion",
    "Relative Velocity",
    "Velocity-Time Graph",
    "Class 11",
    "Physics",
    "NEB",
  ],
  content: `
    <h2>1. Introduction to Kinematics</h2>
    <p>The word <strong>kinematics</strong> comes from the Greek word <em>kinesis</em>, meaning motion — the same root as "cinema" and "kinesiology." <strong>Kinematics</strong> is the branch of mechanics that studies <em>how</em> bodies move — describing motion through quantities like displacement, velocity, and acceleration — without asking <em>why</em> they move (that is the realm of dynamics).</p>

    <div class="note-box">
      <strong>Historical Note:</strong> The term 'kinematics' was coined in 1834 by the physicist J. C. Ampère. German engineer <em>Franz Reuleaux</em> (1829–1905), known as the "Father of Kinematics," and American engineer <em>Ferdinand Freudenstein</em> (1926–2006), known as the "Father of Modern Kinematics," made foundational contributions to this field.
    </div>

    <p>Kinematics applies widely — from astrophysics (describing orbits of celestial bodies) to robotics (programming robot arm trajectories) and biomechanics (analysing the human skeleton). A central idea is that <strong>rest and motion are relative</strong>: two passengers on a moving bus are at rest relative to each other but in motion relative to a person standing outside.</p>

    <h2>2. Fundamental Terms</h2>

    <h3>2.1 Distance vs. Displacement</h3>
    <table>
      <thead><tr><th>Property</th><th>Distance</th><th>Displacement</th></tr></thead>
      <tbody>
        <tr><td>Definition</td><td>Total path length traversed</td><td>Shortest straight-line separation between start and end, in a specified direction</td></tr>
        <tr><td>Nature</td><td>Scalar</td><td>Vector</td></tr>
        <tr><td>Can it be zero?</td><td>Only if body never moves</td><td>Yes — e.g., a complete circular journey returns to start (displacement = 0)</td></tr>
        <tr><td>Can it be negative?</td><td>Never</td><td>Yes (negative indicates opposite direction)</td></tr>
        <tr><td>Relation</td><td colspan="2">|Displacement| ≤ Distance always</td></tr>
      </tbody>
    </table>

    <div class="note-box">
      <strong>Key Examples:</strong><br/>
      &bull; A ball thrown up and caught at the same point: distance = 2h (up + down), displacement = 0.<br/>
      &bull; An ant completing one full circle: distance = 2&pi;r (circumference), displacement = 0.<br/>
      &bull; In 1D straight-line motion with no direction reversal: distance = |displacement|.
    </div>

    <h3>2.2 Speed vs. Velocity</h3>
    <table>
      <thead><tr><th>Property</th><th>Speed</th><th>Velocity</th></tr></thead>
      <tbody>
        <tr><td>Definition</td><td>Rate of change of distance</td><td>Rate of change of displacement</td></tr>
        <tr><td>Nature</td><td>Scalar</td><td>Vector</td></tr>
        <tr><td>Formula</td><td><code>v = d/t</code></td><td><code>v = &Delta;s/&Delta;t</code></td></tr>
        <tr><td>Can velocity be zero while speed is non-zero?</td><td>N/A</td><td>Yes — uniform circular motion: constant speed, but velocity direction changes continuously</td></tr>
      </tbody>
    </table>

    <div class="formula-box">
      <span class="formula-label">Average Velocity</span>
      v<sub>av</sub> = (s<sub>2</sub> &minus; s<sub>1</sub>) / (t<sub>2</sub> &minus; t<sub>1</sub>) = &Delta;s / &Delta;t
    </div>

    <div class="formula-box">
      <span class="formula-label">Instantaneous Velocity</span>
      v = lim<sub>&Delta;t&rarr;0</sub> (&Delta;s/&Delta;t) = ds/dt
    </div>

    <div class="note-box">
      <strong>Types of Velocity:</strong><br/>
      &bull; <strong>Uniform velocity:</strong> Equal displacements in equal time intervals (constant speed AND direction).<br/>
      &bull; <strong>Variable velocity:</strong> Change in magnitude or direction or both.<br/>
      &bull; <strong>Average velocity:</strong> Total displacement &divide; total time.<br/>
      &bull; <strong>Instantaneous velocity:</strong> ds/dt — slope of the displacement-time curve at a point.
    </div>

    <div class="note-box">
      <strong>Worked Example — Average Velocity:</strong><br/>
      A man travels distance <em>x</em> at v&sub;1; and next equal distance <em>x</em> at v&sub;2;.<br/>
      t&sub;1; = x/v&sub;1;, t&sub;2; = x/v&sub;2;<br/>
      v<sub>av</sub> = 2x/(t&sub;1; + t&sub;2;) = 2x / (x/v&sub;1; + x/v&sub;2;) = <strong>2v&sub;1;v&sub;2; / (v&sub;1; + v&sub;2;)</strong><br/>
      This is the <em>harmonic mean</em> of the two speeds.
    </div>

    <h3>2.3 Acceleration</h3>
    <p>Acceleration is defined as the <strong>rate of change of velocity</strong>. A decrease in velocity is called <strong>deceleration</strong> or <strong>retardation</strong> (negative acceleration).</p>

    <div class="formula-box">
      <span class="formula-label">Instantaneous Acceleration</span>
      a = lim<sub>&Delta;t&rarr;0</sub> (&Delta;v/&Delta;t) = dv/dt
    </div>
    <div class="formula-box">
      <span class="formula-label">Average Acceleration</span>
      a<sub>av</sub> = (v<sub>2</sub> &minus; v<sub>1</sub>) / (t<sub>2</sub> &minus; t<sub>1</sub>)
    </div>

    <div class="note-box">
      <strong>Conceptual Points on Acceleration:</strong><br/>
      &bull; In <strong>circular motion</strong>, speed is constant but velocity changes direction — so acceleration exists (centripetal).<br/>
      &bull; A ball thrown vertically upward has constant downward acceleration <em>g</em> at every point — even at the top where v = 0.<br/>
      &bull; Velocity and acceleration can be in opposite directions (deceleration phase of a throw).<br/>
      &bull; <strong>Worked Example:</strong> If x = 5 + 4t + 2t², then v = 4 + 4t, and a = dv/dt = <strong>4 units</strong> (constant acceleration).
    </div>

    <h2>3. Motion Graphs</h2>

    <h3>3.1 Displacement–Time (s–t) Graph</h3>
    <ul>
      <li><strong>Slope at any point = instantaneous velocity</strong> (v = ds/dt).</li>
      <li>Horizontal line (zero slope) &rarr; body at rest.</li>
      <li>Straight line with positive slope &rarr; uniform velocity.</li>
      <li>Curve with increasing slope &rarr; acceleration.</li>
      <li>Negative slope &rarr; body moving back toward origin.</li>
      <li>Graph can <strong>never be parallel to the displacement axis</strong> (implies infinite velocity).</li>
    </ul>

    <h3>3.2 Velocity–Time (v–t) Graph</h3>
    <ul>
      <li><strong>Slope at any point = instantaneous acceleration</strong> (a = dv/dt).</li>
      <li><strong>Area under the curve = displacement</strong> in that time interval.</li>
      <li>Horizontal line &rarr; constant velocity (zero acceleration).</li>
      <li>Straight line with positive slope &rarr; uniform acceleration.</li>
      <li>Straight line with negative slope &rarr; uniform deceleration (retardation).</li>
      <li>Graph can <strong>never be parallel to the velocity axis</strong> (implies infinite acceleration).</li>
    </ul>

    <div class="note-box">
      <strong>Salient Features of the v–t Graph (NEB Favourites):</strong><br/>
      1. Slope = acceleration; graph must be continuous and differentiable.<br/>
      2. Time always increases; graph never reverses along the time axis.<br/>
      3. Area under curve = displacement; graph must be numerically integrable.<br/>
      4. v–t graph for uniform acceleration = straight line with positive slope.<br/>
      5. v–t graph for increasing acceleration = curve with continuously increasing slope.
    </div>

    <div class="note-box">
      <strong>Worked Example — v–t Graph:</strong><br/>
      A cyclist starts from rest; an athlete runs at constant 20 ms<sup>&minus;1</sup>. Cyclist accelerates to 30 ms<sup>&minus;1</sup> in 6 s, then holds constant speed.<br/>
      (i) Distance by cyclist in 6 s = area of triangle = &frac12; &times; 6 &times; 30 = <strong>90 m</strong>. Athlete: 20 &times; 6 = <strong>120 m</strong>. Difference = 30 m.<br/>
      (ii) After t = 6 s, relative velocity of cyclist over athlete = 30 &minus; 20 = 10 ms<sup>&minus;1</sup>. Time to close 30 m = 30/10 = 3 s.<br/>
      Total time from start = 6 + 3 = <strong>9 s</strong>. Distance from start = 20 &times; 9 = <strong>180 m</strong>.
    </div>

    <h2>4. Equations of Motion (SUVAT)</h2>
    <p>For a body with <strong>uniform (constant) acceleration</strong> <em>a</em>, initial velocity <em>u</em>, final velocity <em>v</em>, displacement <em>s</em>, and time <em>t</em>:</p>

    <div class="formula-box">
      <span class="formula-label">Equation 1 — Velocity&ndash;Time</span>
      v = u + at
    </div>
    <div class="formula-box">
      <span class="formula-label">Equation 2 — Velocity&ndash;Displacement</span>
      v² = u² + 2as
    </div>
    <div class="formula-box">
      <span class="formula-label">Equation 3 — Displacement&ndash;Time</span>
      s = ut + &frac12;at²
    </div>
    <div class="formula-box">
      <span class="formula-label">Distance in the n<sup>th</sup> Second</span>
      s<sub>nth</sub> = u + (a/2)(2n &minus; 1)
    </div>

    <div class="note-box">
      <strong>Memory Tip:</strong> <strong>SUVAT</strong> — s (displacement), u (initial velocity), v (final velocity), a (acceleration), t (time). Each of the 3 equations uses exactly 4 of these 5 quantities.
    </div>

    <div class="note-box">
      <strong>Derivation of s<sub>nth</sub> (exam-essential):</strong><br/>
      Distance in n seconds: S<sub>n</sub> = un + &frac12;an²<br/>
      Distance in (n&minus;1) seconds: S<sub>n&minus;1</sub> = u(n&minus;1) + &frac12;a(n&minus;1)²<br/>
      s<sub>nth</sub> = S<sub>n</sub> &minus; S<sub>n&minus;1</sub> = u + (a/2)(2n&minus;1) &check;
    </div>

    <div class="note-box">
      <strong>For Retardation (deceleration):</strong> Replace a &rarr; &minus;a:<br/>
      v = u &minus; at &nbsp;|&nbsp; s = ut &minus; &frac12;at² &nbsp;|&nbsp; v² = u² &minus; 2as &nbsp;|&nbsp; s<sub>nth</sub> = u &minus; (a/2)(2n&minus;1)
    </div>

    <h3>4.1 Motion Under Gravity</h3>
    <p>Replace <code>a &rarr; g</code> and <code>s &rarr; h</code>:</p>
    <table>
      <thead><tr><th>Quantity</th><th>Free Fall (downward +ve)</th><th>Vertical Throw Upward (upward +ve)</th></tr></thead>
      <tbody>
        <tr><td>v</td><td>v = u + gt</td><td>v = u &minus; gt</td></tr>
        <tr><td>h</td><td>h = ut + &frac12;gt²</td><td>h = ut &minus; &frac12;gt²</td></tr>
        <tr><td>v²</td><td>v² = u² + 2gh</td><td>v² = u² &minus; 2gh</td></tr>
        <tr><td>h<sub>nth</sub></td><td>u + (g/2)(2n&minus;1)</td><td>u &minus; (g/2)(2n&minus;1)</td></tr>
      </tbody>
    </table>

    <div class="note-box">
      <strong>Worked Example:</strong><br/>
      A body has velocity 25 ms<sup>&minus;1</sup> at t = 5 s and 34 ms<sup>&minus;1</sup> at t = 8 s. Find distance in the 12th second.<br/>
      a = (34&minus;25)/(8&minus;5) = <strong>3 ms<sup>&minus;2</sup></strong>. u = 25 &minus; 3&times;5 = <strong>10 ms<sup>&minus;1</sup></strong>.<br/>
      s<sub>12th</sub> = 10 + (3/2)(2&times;12 &minus; 1) = 10 + (1.5)(23) = 10 + 34.5 = <strong>44.5 m</strong>.
    </div>

    <h2>5. Relative Velocity</h2>
    <p>The velocity of object A as observed from object B is the <strong>relative velocity of A with respect to B</strong>, found by subtracting B's velocity from A's velocity.</p>

    <div class="formula-box">
      <span class="formula-label">Relative Velocity</span>
      V<sub>AB</sub> = V<sub>A</sub> &minus; V<sub>B</sub>
    </div>

    <div class="note-box">
      <strong>Rules for Relative Velocity:</strong><br/>
      &bull; <strong>Same direction:</strong> V<sub>AB</sub> = V<sub>A</sub> &minus; V<sub>B</sub> (smaller relative velocity; bodies close slowly).<br/>
      &bull; <strong>Opposite directions:</strong> V<sub>AB</sub> = V<sub>A</sub> + V<sub>B</sub> (larger relative velocity; bodies close quickly).<br/>
      &bull; <strong>At angle &theta;:</strong> |V<sub>AB</sub>| = &radic;(V<sub>A</sub>² + V<sub>B</sub>² &minus; 2V<sub>A</sub>V<sub>B</sub>cos&theta;) — use parallelogram law after reversing V<sub>B</sub>.
    </div>

    <h3>5.1 Rain–Man Problem</h3>
    <p>Rain falls vertically at speed V<sub>r</sub>; a man walks horizontally at V<sub>p</sub>. To the man, rain appears to come from the front at angle &theta; from vertical:</p>
    <div class="formula-box">
      <span class="formula-label">Angle of Apparent Rainfall</span>
      tan &theta; = V<sub>p</sub> / V<sub>r</sub>
    </div>
    <p>To stay dry, tilt the umbrella <strong>forward</strong> at angle &theta; from vertical (in the direction of walking).</p>

    <h3>5.2 River–Swimmer Problem</h3>
    <p>V<sub>pw</sub> = swimmer speed relative to water; V<sub>wg</sub> = river current speed.</p>
    <ul>
      <li>Swimming with current: V<sub>pg</sub> = V<sub>pw</sub> + V<sub>wg</sub></li>
      <li>Swimming against current: V<sub>pg</sub> = V<sub>pw</sub> &minus; V<sub>wg</sub></li>
      <li>Swimming at angle &alpha; to cross: resultant velocity V<sub>pg</sub> = &radic;(V<sub>pw</sub>² + V<sub>wg</sub>²)</li>
    </ul>

    <div class="note-box">
      <strong>Worked Example — Two Ships:</strong><br/>
      Ships A (due west of B, 4 km apart). A moves east at 8 km/h; B moves south at 6 km/h.<br/>
      (i) |V<sub>AB</sub>| = &radic;(8² + 6²) = &radic;100 = <strong>10 km/h</strong>.<br/>
      (ii) Time to cover 4 km at 10 km/h = 0.4 h. B moves 6 &times; 0.4 = <strong>2.4 km south</strong> = closest approach distance.
    </div>

    <h2>6. Projectile Motion</h2>
    <p>A <strong>projectile</strong> is any object thrown into space moving solely under gravity (no air resistance). The trajectory is always a <strong>parabola</strong>. Projectile motion = two independent simultaneous motions:</p>
    <ul>
      <li><strong>Horizontal:</strong> Uniform velocity (no gravitational force component horizontally).</li>
      <li><strong>Vertical:</strong> Uniformly accelerated motion (acceleration = g downward).</li>
    </ul>

    <h3>6.1 Projectile Fired Horizontally from Height h</h3>
    <p>Initial horizontal velocity = u; initial vertical velocity = 0.</p>

    <div class="formula-box">
      <span class="formula-label">Trajectory Equation (Parabola)</span>
      y = (g / 2u²) x²
    </div>

    <table>
      <thead><tr><th>Quantity</th><th>Formula</th></tr></thead>
      <tbody>
        <tr><td>Time of Flight</td><td>T = &radic;(2h/g)</td></tr>
        <tr><td>Horizontal Range</td><td>R = uT = u&radic;(2h/g)</td></tr>
        <tr><td>Resultant speed at time t</td><td>v = &radic;(u² + g²t²)</td></tr>
        <tr><td>Direction of velocity at time t</td><td>&alpha; = tan<sup>&minus;1</sup>(gt/u) below horizontal</td></tr>
      </tbody>
    </table>

    <div class="note-box">
      <strong>Classic Conceptual Question:</strong><br/>
      A ball thrown horizontally and another dropped vertically from the same height — which hits the ground first?<br/>
      <strong>Answer: Both hit simultaneously.</strong> T = &radic;(2h/g) for both. Horizontal motion does not affect vertical free fall.
    </div>

    <div class="note-box">
      <strong>Worked Example — Horizontal Throw (Balloon):</strong><br/>
      u = 6.0 ms<sup>&minus;1</sup> downward (so this is vertical throw, not horizontal — apply free fall equations):<br/>
      (a) v after 2 s: v = 6 + 10&times;2 = <strong>26 ms<sup>&minus;1</sup></strong><br/>
      (b) h in 2 s: h = 6&times;2 + &frac12;&times;10&times;4 = 12 + 20 = <strong>32 m</strong><br/>
      (c) v after falling 10 m: v² = 36 + 2&times;10&times;10 = 236 &rarr; v = <strong>15.36 ms<sup>&minus;1</sup></strong>
    </div>

    <h3>6.2 Projectile Fired Obliquely Upward at Angle &theta;</h3>
    <p>Components: u<sub>x</sub> = ucos&theta; (constant), u<sub>y</sub> = usin&theta; (decreases due to gravity).</p>

    <div class="formula-box">
      <span class="formula-label">Trajectory Equation</span>
      y = x&middot;tan&theta; &minus; gx² / (2u²cos²&theta;)
    </div>

    <table>
      <thead><tr><th>Quantity</th><th>Formula</th><th>Condition for Maximum</th></tr></thead>
      <tbody>
        <tr><td>Time of Flight</td><td>T = 2u&middot;sin&theta;/g</td><td>Max at &theta; = 90&deg;</td></tr>
        <tr><td>Maximum Height</td><td>H<sub>max</sub> = u²sin²&theta;/(2g)</td><td>Max at &theta; = 90&deg;</td></tr>
        <tr><td>Horizontal Range</td><td>R = u²sin2&theta;/g</td><td>Max at &theta; = 45&deg;</td></tr>
        <tr><td>Maximum Range</td><td>R<sub>max</sub> = u²/g (at &theta;=45&deg;)</td><td>&theta; = 45&deg;</td></tr>
      </tbody>
    </table>

    <div class="formula-box">
      <span class="formula-label">Resultant Velocity at Any Instant</span>
      v = &radic;[u²cos²&theta; + (usin&theta; &minus; gt)²]
    </div>
    <div class="formula-box">
      <span class="formula-label">Direction of Velocity at Instant t</span>
      &alpha; = tan<sup>&minus;1</sup>[(usin&theta; &minus; gt) / (ucos&theta;)]
    </div>

    <div class="note-box">
      <strong>Key Relations to Memorise:</strong><br/>
      &bull; <strong>R<sub>max</sub> = 4H<sub>max</sub></strong> (both at &theta; = 45&deg;; maximum range equals 4 times maximum height).<br/>
      &bull; <strong>Complementary angles:</strong> &theta; and (90&deg; &minus; &theta;) give the <em>same range</em> R but different trajectories.<br/>
      &bull; At the apex (maximum height): v<sub>y</sub> = 0 but v<sub>x</sub> = ucos&theta; &ne; 0 (speed is NOT zero at the top!).<br/>
      &bull; If maximum throw height is h (at 90&deg;), maximum horizontal range = 2h (at 45&deg;).<br/>
      &bull; T<sub>1</sub> &times; T<sub>2</sub> &prop; R (product of times of flight for complementary angles &prop; range).
    </div>

    <div class="note-box">
      <strong>Worked Example — Oblique Projectile:</strong><br/>
      u = 500 ms<sup>&minus;1</sup>, &theta; = 30&deg;.<br/>
      R = 500²&times;sin60&deg;/10 = 25000&times;(&radic;3/2) &approx; <strong>21,651 m</strong><br/>
      H<sub>max</sub> = 500²&times;sin²30&deg;/(2&times;10) = 250000&times;0.25/20 = <strong>3,125 m</strong><br/>
      T/2 = usin&theta;/g = 500&times;0.5/10 = <strong>25 s</strong><br/>
      Least speed for same range (at 45&deg;): u&prime;² = Rg = 21651&times;10 &rarr; u&prime; = &radic;216510 &approx; <strong>465.3 ms<sup>&minus;1</sup></strong>
    </div>

    <div class="note-box">
      <strong>Worked Example — Airplane Suitcase:</strong><br/>
      Plane at H = 114 m, speed 90 ms<sup>&minus;1</sup> at 23&deg; above horizontal. Suitcase falls out.<br/>
      u<sub>x</sub> = 90cos23&deg; &approx; 82.85 ms<sup>&minus;1</sup>; u<sub>y</sub> = 90sin23&deg; &approx; 35.17 ms<sup>&minus;1</sup> (upward).<br/>
      Vertical: &minus;114 = u<sub>y</sub>T &minus; &frac12;gT² (taking upward +ve, ground is 114 m below)<br/>
      &rarr; 5T² &minus; 35.17T &minus; 114 = 0 &rarr; T &approx; <strong>9.42 s</strong>.<br/>
      Horizontal range = u<sub>x</sub>&times;T = 82.85&times;9.42 &approx; <strong>780.5 m from point directly below plane</strong>.
    </div>

    <h2>7. NEB Exam Focus &amp; High-Yield Practice Blueprint</h2>
    <p>Based on the 40 chapter-end exercises in the CDC textbook and past NEB board examinations, master these recurrent patterns:</p>

    <ul>
      <li><strong>MCQ Pattern 1 — Average Speed (Equal Distances):</strong> Bus travels 1/3 distance each at 10, 20, 60 km/h. Use harmonic mean: average = 3/(1/10 + 1/20 + 1/60) = 3/(6/60 + 3/60 + 1/60) = 3&times;60/10 = <strong>18 km/h</strong>.</li>
      <li><strong>MCQ Pattern 2 — Area Under v–t Graph:</strong> Identify geometric shapes (triangles, trapezoids, rectangles) under the v–t curve and calculate displacement as their combined area.</li>
      <li><strong>MCQ Pattern 3 — Relative Velocity of Trains:</strong> Opposite directions: add speeds. Train A at 54 km/h (= 15 ms<sup>&minus;1</sup>), Train B at 90 km/h (= 25 ms<sup>&minus;1</sup>) in opposite direction: V<sub>rel</sub> = 15 + 25 = <strong>40 ms<sup>&minus;1</sup></strong>.</li>
      <li><strong>MCQ Pattern 4 — Bullet Penetration:</strong> Bullet loses half velocity in 40 cm. v = u/2 after 40 cm. Using v² = u² &minus; 2as: (u/2)² = u² &minus; 2a(0.4) &rarr; a = 3u²/3.2. Remaining: 0 = (u/2)² &minus; 2as&sub;2; &rarr; s&sub;2; = <strong>40/3 cm &approx; 13.3 cm</strong>.</li>
      <li><strong>Derivation 1 — Equations of Motion Graphically:</strong> Derive v = u + at (slope), v² = u² + 2as and s = ut + &frac12;at² (area of trapezium under v–t graph). Very frequently asked as 4-mark question.</li>
      <li><strong>Derivation 2 — Projectile Trajectory is Parabolic:</strong> Eliminate t from x = ucosθ·t and y = usinθ·t − ½gt² to get y = xtanθ − gx²/(2u²cos²θ). Then derive T, H<sub>max</sub>, and R. Most common 8-mark long-answer.</li>
      <li><strong>Derivation 3 — Same Range for Complementary Angles:</strong> R(&theta;) = u²sin2&theta;/g = u²sin(180&deg;&minus;2&theta;)/g = R(90&deg;&minus;&theta;). 4-mark question.</li>
      <li><strong>Numerical 1 — Meeting Problem:</strong> Ball dropped from 60 m; another thrown up at 20 ms<sup>&minus;1</sup>. s&sub;1; + s&sub;2; = 60: ½×10×t² + (20t − ½×10×t²) = 60 &rarr; 20t = 60 &rarr; t = 3 s. Height from ground = 60 − ½×10×9 = <strong>15 m</strong>.</li>
      <li><strong>Numerical 2 — Cricket Ball Six:</strong> u = 30 ms<sup>&minus;1</sup>, &theta; = 30&deg;. R = 30²&times;sin60&deg;/10 = 900&times;(√3/2)/10 &approx; <strong>77.94 m &gt; 75 m</strong> &rarr; it's a six! ✔</li>
    </ul>

    <div class="note-box">
      <strong>Core Exam Mistake Warnings:</strong><br/>
      &bull; <strong>Displacement ≠ Distance:</strong> After a complete circular trip, displacement = 0 but distance &ne; 0.<br/>
      &bull; <strong>Speed at top of oblique projectile is NOT zero</strong> — only the vertical component v<sub>y</sub> = 0; v<sub>x</sub> = ucos&theta; remains.<br/>
      &bull; <strong>nth second formula:</strong> s<sub>nth</sub> = u + (a/2)(2n &minus; 1). Here <em>n</em> is the second number (e.g., n = 12 for the 12th second), not total elapsed time.<br/>
      &bull; <strong>Opposite direction relative velocity:</strong> V<sub>AB</sub> = V<sub>A</sub> + V<sub>B</sub> (add, don't subtract) when moving in opposite directions.<br/>
      &bull; <strong>R<sub>max</sub> = 4H<sub>max</sub></strong> only at &theta; = 45&deg;. Don't apply this to arbitrary angles.
    </div>
  `,
},
  {
    id: "phys11-dynamics",
    class: "11",
    subject: "Physics",
    chapter: "Dynamics",
    title: "Dynamics (Newton's Laws of Motion) — Class 11 Physics",
    icon: "⚖️",
    summary: "Comprehensive NEB Class 11 Dynamics notes: Force & Inertia, Linear Momentum & Impulse, Newton's 3 Laws of Motion (why 2nd law is the real law), Free Body Diagrams (FBD), Apparent Weight in a Lift, Atwood's Machine, Principle of Moments & Couple, Solid Friction (Static, Limiting, Kinetic), Angle of Friction & Repose, and 12 high-yield NEB solved numericals & past board derivations.",
    tags: ["Dynamics", "Newton's Laws", "Friction", "Momentum", "Impulse", "Torque & Couple", "Atwood Machine", "Lift Motion", "Class 11", "Physics", "NEB"],
    content: `
    <!-- Bento Grid Overview -->
    <div class="bento-grid">
      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">⚡</div>
          <div>
            <div class="bento-title">Newton's 3 Laws</div>
            <div class="bento-subtitle">Qualitative &amp; quantitative force</div>
          </div>
        </div>
        <p>First law defines force qualitatively; Second law quantifies it (F = ma); Third law establishes interaction symmetry. Second law is the <strong>real law of motion</strong>.</p>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">⚖️</div>
          <div>
            <div class="bento-title">Momentum &amp; Impulse</div>
            <div class="bento-subtitle">p = mv &bull; J = F&Delta;t = &Delta;p</div>
          </div>
        </div>
        <p>Momentum measures motion quantity; impulse represents the overall impact. Cushioning prolongs collision time &Delta;t, reducing peak force F to safe levels.</p>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">🛗</div>
          <div>
            <div class="bento-title">Elevator &amp; Atwood</div>
            <div class="bento-subtitle">Apparent weight &amp; tension</div>
          </div>
        </div>
        <p>Normal reaction changes in an accelerating lift: R = m(g &plusmn; a). Free fall causes zero reaction (weightlessness). Atwood's machine derives system acceleration and string tension.</p>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">🛡️</div>
          <div>
            <div class="bento-title">Friction &amp; Equilibrium</div>
            <div class="bento-subtitle">fL = &mu;sR &bull; &Sigma;F = 0 &bull; &Sigma;&tau; = 0</div>
          </div>
        </div>
        <p>Friction opposes impending relative motion: static, limiting, kinetic. Angle of friction equals angle of repose (&alpha; = &lambda;). Couple torque &tau; = F &times; 2a is origin-independent.</p>
      </div>
    </div>

    <h2>1. Foundations of Dynamics: Force, Inertia &amp; Momentum</h2>
    <p>While <strong>kinematics</strong> describes motion geometrically without investigating its causes, <strong>dynamics</strong> is the branch of classical mechanics that examines <em>why</em> bodies move by analyzing forces and torques. Dynamics was historically founded by Galileo Galilei (who recognized that no force is needed to maintain uniform motion on a frictionless plane) and formalized mathematically by Sir Isaac Newton in his 1687 <em>Principia Mathematica</em>.</p>

    <h3>1.1 Concept of Force &amp; Inertia</h3>
    <p><strong>Force</strong> is an external agent capable of altering a body's state of rest, uniform motion along a straight line, or geometric shape. <strong>Inertia</strong> is the inherent tendency of any material body to resist changes in its velocity.</p>

    <div class="formula-box">
      <span class="formula-label">Measure of Inertia</span>
      Inertia &prop; Mass (m) &mdash; A heavier body requires a proportionally greater net force to achieve the same acceleration.
    </div>

    <table>
      <thead>
        <tr>
          <th>Type of Inertia</th>
          <th>Physical Definition</th>
          <th>Everyday &amp; NEB Exam Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Inertia of Rest</strong></td>
          <td>Resistance to initiating motion from rest</td>
          <td>Shaking a mango branch causes mangoes to detach because the branch moves while mangoes tend to remain at rest; dusting a carpet with a stick.</td>
        </tr>
        <tr>
          <td><strong>Inertia of Motion</strong></td>
          <td>Resistance to changing speed or stopping</td>
          <td>A passenger lunges forward when a fast bus applies sudden brakes; an athlete runs a distance before taking a long jump.</td>
        </tr>
        <tr>
          <td><strong>Inertia of Direction</strong></td>
          <td>Resistance to altering the direction of travel</td>
          <td>Mud flying off rotating bicycle wheels departs tangentially along straight lines; passengers tilt outward when a car turns a sharp curve.</td>
        </tr>
      </tbody>
    </table>

    <h3>1.2 Linear Momentum and Impulse</h3>
    <p><strong>Linear momentum</strong> (&vec;p) is defined as the total quantity of translational motion possessed by a body, calculated as the product of its mass and velocity:</p>

    <div class="formula-box">
      <span class="formula-label">Linear Momentum</span>
      &vec;p = m &middot; &vec;v &emsp; [SI Unit: kg&middot;m/s or N&middot;s, Dimensions: [M L T<sup>&minus;1</sup>]]
    </div>

    <p><strong>Impulse</strong> (&vec;J) is the total effect produced by a force acting over a finite time interval. Mathematically, it equals the time integral of the force:</p>

    <div class="formula-box">
      <span class="formula-label">Impulse-Momentum Theorem</span>
      &vec;J = &int; &vec;F dt = &vec;F<sub>avg</sub> &middot; &Delta;t = &Delta;&vec;p = m&vec;v &minus; m&vec;u
    </div>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch4/fig-4-1-collision.webp" alt="One dimensional collision between two bodies" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 4.1</span>
        One-dimensional collision: Demonstrating interaction forces F₁ and F₂ over time interval &Delta;t during momentum exchange.
      </div>
    </div>

    <div class="diagram-box">
  <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hardImpulseGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.65"/>
        <stop offset="100%" stop-color="#ef4444" stop-opacity="0.05"/>
      </linearGradient>
      <linearGradient id="softImpulseGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#10b981" stop-opacity="0.05"/>
      </linearGradient>
      <marker id="imp-axis-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
      </marker>
    </defs>

    <!-- Sleek Card Container -->
    <rect width="700" height="320" rx="14" fill="#090d16" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

    <!-- Subtle Background Grid -->
    <line x1="70" y1="50" x2="470" y2="50" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"/>
    <line x1="70" y1="155" x2="470" y2="155" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"/>
    <line x1="70" y1="210" x2="470" y2="210" stroke="rgba(255,255,255,0.04)" stroke-dasharray="4"/>

    <!-- Coordinate Axes -->
    <!-- X-axis: Time (t) -->
    <line x1="70" y1="260" x2="470" y2="260" stroke="#94a3b8" stroke-width="2" marker-end="url(#imp-axis-arr)"/>
    <text x="430" y="285" fill="#cbd5e1" font-size="12" font-family="'Sora', sans-serif" font-weight="600">Time (t) &rarr;</text>

    <!-- Y-axis: Force (F) -->
    <line x1="70" y1="260" x2="70" y2="25" stroke="#94a3b8" stroke-width="2" marker-end="url(#imp-axis-arr)"/>
    <text x="25" y="28" fill="#cbd5e1" font-size="12" font-family="'Sora', sans-serif" font-weight="600">Force (F)</text>

    <!-- Origin '0' -->
    <text x="56" y="275" fill="#64748b" font-size="11" font-family="sans-serif">0</text>

    <!-- CURVE 1: Hard Impact (Stiff Hands / Short Contact Delta t1) -->
    <!-- Two cubic Béziers: passes EXACTLY through (150, 50) at apex! -->
    <path d="M 110 260 C 125 260 135 50 150 50 C 165 50 175 260 190 260 Z" fill="url(#hardImpulseGrad)"/>
    <path d="M 110 260 C 125 260 135 50 150 50 C 165 50 175 260 190 260" fill="none" stroke="#ef4444" stroke-width="2.5"/>

    <!-- Peak guideline from (150, 50) to Y-axis -->
    <line x1="150" y1="50" x2="70" y2="50" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3"/>
    <circle cx="150" cy="50" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
    <text x="14" y="54" fill="#f87171" font-size="12" font-family="sans-serif" font-weight="bold">Fmax₁</text>

    <!-- Delta t1 bracket below X-axis -->
    <line x1="110" y1="265" x2="190" y2="265" stroke="#ef4444" stroke-width="1.5"/>
    <line x1="110" y1="262" x2="110" y2="268" stroke="#ef4444" stroke-width="1.5"/>
    <line x1="190" y1="262" x2="190" y2="268" stroke="#ef4444" stroke-width="1.5"/>
    <text x="150" y="280" fill="#f87171" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">&Delta;t₁ (Short)</text>

    <!-- CURVE 2: Cushioned Catch (Soft Hands / Long Contact Delta t2) -->
    <!-- Two cubic Béziers: passes EXACTLY through (290, 155) at apex! -->
    <path d="M 130 260 C 180 260 240 155 290 155 C 340 155 400 260 440 260 Z" fill="url(#softImpulseGrad)"/>
    <path d="M 130 260 C 180 260 240 155 290 155 C 340 155 400 260 440 260" fill="none" stroke="#10b981" stroke-width="2.5"/>

    <!-- Peak guideline from (290, 155) to Y-axis -->
    <line x1="290" y1="155" x2="70" y2="155" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3"/>
    <circle cx="290" cy="155" r="5" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
    <text x="14" y="159" fill="#34d399" font-size="12" font-family="sans-serif" font-weight="bold">Fmax₂</text>

    <!-- Delta t2 bracket below X-axis -->
    <line x1="130" y1="295" x2="440" y2="295" stroke="#10b981" stroke-width="1.5"/>
    <line x1="130" y1="292" x2="130" y2="298" stroke="#10b981" stroke-width="1.5"/>
    <line x1="440" y1="292" x2="440" y2="298" stroke="#10b981" stroke-width="1.5"/>
    <text x="285" y="310" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">&Delta;t₂ (Long &mdash; Hands drawn back)</text>

    <!-- RIGHT SIDE: Dedicated Physics Explanation Panel (No overlap!) -->
    <rect x="480" y="25" width="205" height="270" rx="10" fill="rgba(15,23,42,0.88)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    
    <text x="495" y="52" fill="#fb923c" font-size="13" font-family="'Sora', sans-serif" font-weight="700">Impulse &amp; Cushioning</text>
    <line x1="495" y1="62" x2="670" y2="62" stroke="rgba(255,255,255,0.08)"/>

    <text x="495" y="85" fill="#fca5a5" font-size="11" font-family="sans-serif" font-weight="bold">&bull; Hard Stop (Red Curve):</text>
    <text x="505" y="102" fill="#cbd5e1" font-size="10" font-family="sans-serif">Short impact duration &Delta;t₁</text>
    <text x="505" y="117" fill="#f87171" font-size="11" font-family="sans-serif" font-weight="bold">&rArr; Massive peak force Fmax₁</text>
    <text x="505" y="132" fill="#94a3b8" font-size="10" font-family="sans-serif">(Causes pain &amp; hand injury)</text>

    <text x="495" y="160" fill="#6ee7b7" font-size="11" font-family="sans-serif" font-weight="bold">&bull; Soft Catch (Green Curve):</text>
    <text x="505" y="177" fill="#cbd5e1" font-size="10" font-family="sans-serif">Hands drawn backward</text>
    <text x="505" y="192" fill="#34d399" font-size="11" font-family="sans-serif" font-weight="bold">&rArr; Long &Delta;t₂ reduces Fmax₂</text>
    <text x="505" y="207" fill="#94a3b8" font-size="10" font-family="sans-serif">(Safe, cushioned catch!)</text>

    <line x1="495" y1="220" x2="670" y2="220" stroke="rgba(255,255,255,0.08)"/>
    <text x="495" y="240" fill="#fbbf24" font-size="11" font-family="sans-serif" font-weight="bold">Impulse-Momentum Law:</text>
    <text x="505" y="258" fill="#e2e8f0" font-size="11" font-family="sans-serif">J = &int; F dt = &Delta;p = const</text>
    <text x="505" y="276" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">Area(Red) = Area(Green)</text>
  </svg>
  <div class="diagram-caption">
    <span class="tag">Fig 4.1b</span>
    Impulse &amp; Impact Cushioning Graph: Mathematically verified force-time curves showing peak reduction via extended contact time &Delta;t.
  </div>
</div>

    <div class="note-box">
      <strong>High-Yield Conceptual Applications of Impulse (NEB 2-Mark Favorites):</strong><br/>
      &bull; <strong>Cricket Catch Cushioning:</strong> A cricketer draws their hands backwards while catching a fast cricket ball. By increasing the impact duration &Delta;t, the average stopping force F = &Delta;p / &Delta;t is drastically minimized, protecting the player's palms from injury.<br/>
      &bull; <strong>Packing Chinaware in Straw:</strong> Fragile porcelain and glass items are wrapped in straw or bubble wrap during transit. In case of sudden drops or jolts, the soft packing compresses, prolonging impact time and preventing high shattering impact forces.<br/>
      &bull; <strong>Automobile Crumple Zones &amp; Airbags:</strong> Front vehicle bumpers deform plastically upon collision, extending the deceleration time &Delta;t and preventing fatal deceleration forces on passengers.
    </div>

    <h2>2. Newton's Three Laws of Motion</h2>

    <h3>2.1 Newton's First Law (Law of Inertia)</h3>
    <div class="key-stmt">
      "Every material body continues in its state of rest or of uniform motion in a straight line, unless it is compelled to change that state by an external unbalanced force acting upon it."
    </div>
    <p>The First Law provides the <strong>qualitative definition of force</strong> (force as an agent of acceleration) and introduces the fundamental concept of <strong>inertial frames of reference</strong> &mdash; frames where Newton's laws hold without introducing fictitious/pseudo forces.</p>

    <h3>2.2 Newton's Second Law (Quantitative Definition of Force)</h3>
    <div class="key-stmt">
      "The rate of change of linear momentum of a body is directly proportional to the applied resultant force, and takes place in the direction in which the force acts."
    </div>

    <p><strong>Mathematical Derivation of F = ma:</strong></p>
    <div class="formula-box">
      <span class="formula-label">Derivation of Newton's Second Law</span>
      Let a body of mass m have initial velocity &vec;u and final velocity &vec;v over time &Delta;t.<br/>
      Initial momentum &vec;p<sub>1</sub> = m&vec;u, &emsp; Final momentum &vec;p<sub>2</sub> = m&vec;v<br/>
      &Delta;&vec;p = m(&vec;v &minus; &vec;u)<br/>
      By Newton's second law: &vec;F &prop; d&vec;p/dt = lim<sub>&Delta;t&rarr;0</sub> [&Delta;&vec;p / &Delta;t] = m(d&vec;v/dt) = m&vec;a<br/>
      &there4; &vec;F = k &middot; m &middot; &vec;a<br/>
      In SI units, one Newton (1 N) is defined as the force that imparts an acceleration of 1 ms<sup>&minus;2</sup> to a mass of 1 kg. Substituting F = 1, m = 1, a = 1 yields <strong>k = 1</strong>.<br/>
      <strong>&vec;F = m&vec;a</strong> &emsp; (when mass m remains constant)
    </div>

    <h3>2.3 Newton's Third Law (Action-Reaction Principle)</h3>
    <div class="key-stmt">
      "To every action, there is always an equal and opposite reaction; or the mutual actions of two bodies upon each other are always equal and directed in opposite directions."
    </div>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch4/fig-4-2-third-law.webp" alt="Newton's Third Law" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 4.2</span>
        Showing the Third Law: Mutual interaction pairs between contacting bodies. Action and reaction are equal in magnitude and opposite in direction.
      </div>
    </div>

    <div class="note-box">
      <strong>Crucial Board Rule &mdash; Why Action and Reaction Never Cancel Each Other Out:</strong><br/>
      Action and reaction forces always act on <strong>two entirely different interacting bodies</strong>, never on the same body! For cancellation, forces must act concurrently on the exact same single point or body (&Sigma;F = 0).
    </div>

    <h3>2.4 Application of the 2nd Law: The Classic Horse–Cart System</h3>
    <p>A classic NEB board question asks: <em>"If the horse pulls the cart forward with force T and the cart pulls the horse backward with equal force T, why does the system accelerate forward?"</em></p>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch4/fig-4-3-horse-cart.webp" alt="Horse-Cart System Illustration" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 4.3</span>
        An Illustration of the 2nd Law (Horse–Cart System): Analysis of forward ground reaction H on horse hooves vs opposing ground friction f on cart wheels.
      </div>
    </div>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">NEB Classic Conceptual</span>
        <strong>Complete Mathematical Resolution of the Horse–Cart Problem</strong>
      </div>
      <p>1. The horse pushes backwards obliquely against the ground with a muscular force F. By Newton's third law, the ground pushes forward and upward on the horse's hooves with an equal and opposite reaction force R.<br/>
      2. Resolve reaction R into two components: vertical reaction V (balances horse's weight W) and <strong>horizontal reaction H = R cos&theta;</strong> (directed forward).<br/>
      3. The horse pulls the cart with tension T, and the cart pulls the horse with equal and opposite tension T.<br/>
      4. For the horse alone: <strong>H &minus; T = m<sub>horse</sub> &middot; a</strong> &hellip; (1)<br/>
      5. For the cart alone: <strong>T &minus; f = m<sub>cart</sub> &middot; a</strong> &hellip; (2) (where f is the rolling friction on the cart wheels).<br/>
      6. Adding equations (1) and (2):<br/>
      <strong>H &minus; f = (m<sub>horse</sub> + m<sub>cart</sub>) &middot; a</strong> &rArr; <strong>a = (H &minus; f) / (m<sub>horse</sub> + m<sub>cart</sub>)</strong><br/>
      &bull; Therefore, motion occurs whenever <strong>H &gt; f</strong>! The system moves forward because the forward ground reaction on the horse exceeds the opposing friction on the cart wheels.</p>
    </div>

    <h3>2.5 Master NEB Derivation: "Second Law is the Real Law of Motion"</h3>
    <p>A frequent 4-mark NEB board exam derivation asks to demonstrate that both the First Law and the Third Law are inherently contained within the Second Law.</p>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">NEB Board Derivation</span>
        <strong>Proof: Second Law Contains Both 1st and 3rd Laws</strong>
      </div>
      <p><strong>Part A: Deriving the First Law from the Second Law:</strong><br/>
      From Newton's second law: F = ma = m(v &minus; u) / t.<br/>
      If no external force acts on the body (F = 0):<br/>
      &rarr; m(v &minus; u) / t = 0 &rArr; since m &ne; 0, we have (v &minus; u) = 0 &rArr; <strong>v = u</strong>.<br/>
      &bull; If the body is initially at rest (u = 0), then v = 0 (remains at rest).<br/>
      &bull; If the body has initial velocity u, it continues with the same velocity v = u in a straight line.<br/>
      This is the exact statement of Newton's First Law. Hence, the First Law is contained in the Second Law.</p>

      <p><strong>Part B: Deriving the Third Law from the Second Law:</strong><br/>
      Consider an isolated system consisting of two bodies A and B colliding for a time &Delta;t. In the absence of external forces (&Sigma;F<sub>ext</sub> = 0), the total momentum of the system is conserved:<br/>
      &Delta;&vec;p<sub>A</sub> + &Delta;&vec;p<sub>B</sub> = 0<br/>
      Dividing both sides by contact time &Delta;t and taking limits as &Delta;t &rarr; 0:<br/>
      (d&vec;p<sub>A</sub> / dt) + (d&vec;p<sub>B</sub> / dt) = 0<br/>
      By Newton's second law, (d&vec;p<sub>A</sub>/dt) is the force exerted on A by B (&vec;F<sub>AB</sub>), and (d&vec;p<sub>B</sub>/dt) is the force exerted on B by A (&vec;F<sub>BA</sub>):<br/>
      &vec;F<sub>AB</sub> + &vec;F<sub>BA</sub> = 0 &rArr; <strong>&vec;F<sub>AB</sub> = &minus;&vec;F<sub>BA</sub></strong><br/>
      Action = &minus;Reaction. Hence, the Third Law is also contained in the Second Law! &there4; <strong>Newton's Second Law is the Real Law of Motion.</strong></p>
    </div>

    <h3>2.6 Principle of Conservation of Linear Momentum</h3>
    <div class="key-stmt">
      "If no net external force acts on an interacting system of bodies (&Sigma;F<sub>ext</sub> = 0), the total vector linear momentum of the system remains constant in magnitude and direction."
    </div>

    <div class="formula-box">
      <span class="formula-label">One-Dimensional Collision Conservation</span>
      m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub> = m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub>
    </div>

    <div class="formula-box">
      <span class="formula-label">Recoil Velocity of a Gun</span>
      Initial momentum of gun and bullet at rest = 0.<br/>
      Final momentum = M &middot; V<sub>recoil</sub> + m &middot; v<sub>bullet</sub> = 0<br/>
      <strong>V<sub>recoil</sub> = &minus;(m / M) &middot; v<sub>bullet</sub></strong><br/>
      <em>The negative sign denotes that the gun recoils backwards opposite to the bullet's exit trajectory.</em>
    </div>

    <h2>3. Free Body Diagrams &amp; Dynamics Applications</h2>
    <p>A <strong>Free Body Diagram (FBD)</strong> is a simplified vector drawing showing a body isolated from its environment, displaying all external forces acting directly upon it.</p>

    <div class="diagram-box">
  <svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
      </marker>
      <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
      </marker>
      <marker id="arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
      </marker>
      <marker id="arrow-rose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e"/>
      </marker>
    </defs>
    <rect width="640" height="280" rx="12" fill="#0b1329" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <line x1="80" y1="190" x2="560" y2="190" stroke="#64748b" stroke-width="3"/>
    <path d="M 100 190 L 90 205 M 140 190 L 130 205 M 180 190 L 170 205 M 220 190 L 210 205 M 260 190 L 250 205 M 300 190 L 290 205 M 340 190 L 330 205 M 380 190 L 370 205 M 420 190 L 410 205 M 460 190 L 450 205 M 500 190 L 490 205 M 540 190 L 530 205" stroke="#334155" stroke-width="1.5"/>
    <rect x="230" y="110" width="120" height="80" rx="8" fill="rgba(30,41,59,0.9)" stroke="#f97316" stroke-width="2"/>
    <text x="278" y="156" fill="#fb923c" font-size="18" font-family="sans-serif" font-weight="bold">m</text>
    <line x1="290" y1="150" x2="290" y2="40" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow-cyan)"/>
    <text x="302" y="50" fill="#38bdf8" font-size="14" font-family="sans-serif" font-weight="bold">R (Normal Reaction)</text>
    <line x1="290" y1="150" x2="290" y2="255" stroke="#fbbf24" stroke-width="3" marker-end="url(#arrow-amber)"/>
    <text x="302" y="250" fill="#fbbf24" font-size="14" font-family="sans-serif" font-weight="bold">W = mg (Weight)</text>
    <line x1="290" y1="150" x2="440" y2="150" stroke="#34d399" stroke-width="3" marker-end="url(#arrow-emerald)"/>
    <text x="445" y="155" fill="#34d399" font-size="14" font-family="sans-serif" font-weight="bold">F (Pulling Force)</text>
    <line x1="230" y1="190" x2="130" y2="190" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-rose)"/>
    <text x="90" y="180" fill="#f43f5e" font-size="14" font-family="sans-serif" font-weight="bold">f (Friction)</text>
    <rect x="430" y="35" width="190" height="65" rx="6" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <text x="440" y="55" fill="#94a3b8" font-size="11" font-family="sans-serif">&Sigma;Fy = 0 &rarr; <tspan fill="#38bdf8" font-weight="bold">R = mg</tspan></text>
    <text x="440" y="75" fill="#94a3b8" font-size="11" font-family="sans-serif">&Sigma;Fx = ma &rarr; <tspan fill="#34d399" font-weight="bold">F - f = ma</tspan></text>
    <text x="440" y="92" fill="#cbd5e1" font-size="10" font-family="sans-serif">Acceleration <tspan fill="#fb923c">a = (F - f)/m</tspan></text>
  </svg>
  <div class="diagram-caption"><span class="tag">Fig 4.2</span> Free Body Diagram (FBD): Resolving normal reaction, gravitational weight, pulling force, and contact friction.</div>
</div>

    <h3>3.1 Blocks in Contact on a Frictionless Surface</h3>
    <p>Suppose two blocks of masses m<sub>1</sub> and m<sub>2</sub> are resting side-by-side in contact on a smooth horizontal floor, and an external horizontal push F is applied to m<sub>1</sub>:</p>
    <div class="formula-box">
      <span class="formula-label">Two Connected Blocks</span>
      System acceleration: <strong>a = F / (m<sub>1</sub> + m<sub>2</sub>)</strong><br/>
      Contact (normal pushing) force between the two blocks: <strong>f<sub>contact</sub> = m<sub>2</sub> &middot; a = [m<sub>2</sub> / (m<sub>1</sub> + m<sub>2</sub>)] &middot; F</strong>
    </div>

    <h3>3.2 Motion of the Lift: Apparent Loss &amp; Gain in Weight</h3>
    <p>When a person of mass m stands on a weighing machine on the floor of a moving lift, the machine measures the <strong>reaction force (R)</strong> exerted by the floor upon the person.</p>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch4/fig-4-5-lift-motion.webp" alt="Motion in the Lift - Apparent Loss in Weight" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 4.5</span>
        Motion in the Lift: Resolving upward normal reaction R against downward gravitational weight Mg during upward, downward, and free-fall accelerations.
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Elevator State</th>
          <th>Equation of Motion</th>
          <th>Apparent Weight (R)</th>
          <th>Sensation Felt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>At rest or uniform velocity (a = 0)</strong></td>
          <td>R &minus; mg = 0</td>
          <td><strong>R = mg</strong></td>
          <td>True normal weight</td>
        </tr>
        <tr>
          <td><strong>Accelerating upward (a &uarr;)</strong></td>
          <td>R &minus; mg = ma</td>
          <td><strong>R = m(g + a)</strong></td>
          <td>Feels heavier (g<sub>eff</sub> &gt; g)</td>
        </tr>
        <tr>
          <td><strong>Accelerating downward (a &lt; g &darr;)</strong></td>
          <td>mg &minus; R = ma</td>
          <td><strong>R = m(g &minus; a)</strong></td>
          <td>Feels lighter (g<sub>eff</sub> &lt; g)</td>
        </tr>
        <tr>
          <td><strong>Free Fall (cable snapped, a = g &darr;)</strong></td>
          <td>mg &minus; R = mg</td>
          <td><strong>R = 0</strong></td>
          <td>Total weightlessness (feet leave scale)</td>
        </tr>
        <tr>
          <td><strong>Super-acceleration downward (a &gt; g &darr;)</strong></td>
          <td>mg &minus; R = ma</td>
          <td><strong>R = &minus;m(a &minus; g) &lt; 0</strong></td>
          <td>Person lifts off floor and presses against ceiling</td>
        </tr>
      </tbody>
    </table>

    <h3>3.3 Atwood's Machine (Masses over a Frictionless Pulley)</h3>
    <p>Atwood's machine consists of two masses m<sub>1</sub> and m<sub>2</sub> (with m<sub>1</sub> &gt; m<sub>2</sub>) connected by an inextensible, massless string passing over a frictionless, light pulley.</p>

    <div class="diagram-box">
  <svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="at-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
      </marker>
      <marker id="at-acc" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#a855f7"/>
      </marker>
    </defs>
    <rect width="640" height="320" rx="12" fill="#0b1329" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <rect x="140" y="20" width="120" height="10" rx="2" fill="#475569"/>
    <path d="M 200 30 L 200 65" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="200" cy="85" r="28" fill="#1e293b" stroke="#f97316" stroke-width="3"/>
    <circle cx="200" cy="85" r="6" fill="#f97316"/>
    <line x1="172" y1="85" x2="172" y2="180" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="228" y1="85" x2="228" y2="140" stroke="#e2e8f0" stroke-width="2"/>
    <rect x="142" y="180" width="60" height="60" rx="6" fill="rgba(239,68,68,0.25)" stroke="#ef4444" stroke-width="2"/>
    <text x="172" y="216" fill="#fca5a5" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle">m₁</text>
    <rect x="208" y="140" width="40" height="40" rx="6" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" stroke-width="2"/>
    <text x="228" y="165" fill="#7dd3fc" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle">m₂</text>
    <line x1="172" y1="170" x2="172" y2="135" stroke="#38bdf8" stroke-width="2" marker-end="url(#at-arr)"/>
    <text x="180" y="150" fill="#38bdf8" font-size="12" font-weight="bold">T</text>
    <line x1="228" y1="130" x2="228" y2="98" stroke="#38bdf8" stroke-width="2" marker-end="url(#at-arr)"/>
    <text x="236" y="115" fill="#38bdf8" font-size="12" font-weight="bold">T</text>
    <line x1="172" y1="240" x2="172" y2="280" stroke="#ef4444" stroke-width="2.5" marker-end="url(#at-arr)"/>
    <text x="160" y="298" fill="#ef4444" font-size="13" font-weight="bold">m₁g</text>
    <line x1="228" y1="180" x2="228" y2="215" stroke="#38bdf8" stroke-width="2" marker-end="url(#at-arr)"/>
    <text x="220" y="232" fill="#7dd3fc" font-size="12" font-weight="bold">m₂g</text>
    <line x1="120" y1="180" x2="120" y2="225" stroke="#a855f7" stroke-width="2.5" marker-end="url(#at-acc)"/>
    <text x="105" y="208" fill="#a855f7" font-size="13" font-weight="bold">a &darr;</text>
    <line x1="270" y1="175" x2="270" y2="130" stroke="#a855f7" stroke-width="2.5" marker-end="url(#at-acc)"/>
    <text x="282" y="155" fill="#a855f7" font-size="13" font-weight="bold">a &uarr;</text>
    <rect x="330" y="35" width="285" height="250" rx="8" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="345" y="65" fill="#fb923c" font-size="14" font-family="sans-serif" font-weight="bold">Atwood's Machine Equations</text>
    <text x="345" y="95" fill="#94a3b8" font-size="11">For mass m₁ (moving down):</text>
    <text x="355" y="115" fill="#fca5a5" font-size="12" font-weight="bold">m₁g &minus; T = m₁a &hellip; (1)</text>
    <text x="345" y="145" fill="#94a3b8" font-size="11">For mass m₂ (moving up):</text>
    <text x="355" y="165" fill="#7dd3fc" font-size="12" font-weight="bold">T &minus; m₂g = m₂a &hellip; (2)</text>
    <line x1="345" y1="180" x2="600" y2="180" stroke="rgba(255,255,255,0.08)"/>
    <text x="345" y="205" fill="#34d399" font-size="12" font-weight="bold">Acceleration of System:</text>
    <text x="355" y="225" fill="#a7f3d0" font-size="13" font-weight="bold">a = [(m₁ &minus; m₂) / (m₁ + m₂)] &middot; g</text>
    <text x="345" y="255" fill="#38bdf8" font-size="12" font-weight="bold">Tension in String:</text>
    <text x="355" y="275" fill="#bae6fd" font-size="13" font-weight="bold">T = [2 m₁ m₂ / (m₁ + m₂)] &middot; g</text>
  </svg>
  <div class="diagram-caption"><span class="tag">Fig 4.4</span> Atwood's Machine: Connected masses over a frictionless pulley showing tensions, weights, and derived acceleration.</div>
</div>

    <div class="formula-box">
      <span class="formula-label">Atwood's Machine Master Formulas</span>
      Acceleration of the system: <strong>a = [(m<sub>1</sub> &minus; m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>)] &middot; g</strong><br/>
      Tension in the connecting string: <strong>T = [2 &middot; m<sub>1</sub> &middot; m<sub>2</sub> / (m<sub>1</sub> + m<sub>2</sub>)] &middot; g</strong><br/>
      Total downward thrust on the pulley axle: <strong>F<sub>axle</sub> = 2T = [4 &middot; m<sub>1</sub> &middot; m<sub>2</sub> / (m<sub>1</sub> + m<sub>2</sub>)] &middot; g</strong>
    </div>

    <h2>4. Moment, Torque, Couple &amp; Rigid Body Equilibrium</h2>

    <h3>4.1 Moment of a Force (Torque)</h3>
    <p>The turning or rotational effect of a force about a specified pivot or axis of rotation is called the <strong>moment of force</strong> or <strong>torque</strong> (&vec;&tau;).</p>

    <div class="formula-box">
      <span class="formula-label">Torque Vector Equation</span>
      &vec;&tau; = &vec;r &times; &vec;F &emsp; &rArr; &emsp; &tau; = r &middot; F &middot; sin&theta; = F &middot; d<sub>&perp;</sub><br/>
      [SI Unit: N&middot;m, Dimensions: [M L<sup>2</sup> T<sup>&minus;2</sup>]]
    </div>

    <p><strong>Principle of Moments:</strong> For a body in rotational equilibrium under coplanar forces, the algebraic sum of clockwise moments about any pivot equals the algebraic sum of counterclockwise moments: <code>&Sigma;&tau;<sub>cw</sub> = &Sigma;&tau;<sub>ccw</sub></code>.</p>

    <h3>4.2 Couple and Torque of a Couple</h3>
    <p>A <strong>couple</strong> consists of two equal, opposite, parallel forces whose lines of action do not coincide (non-collinear). Examples: turning a water tap, rotating a vehicle steering wheel, turning a screwdriver, winding a mechanical clock.</p>

    <div class="formula-box">
      <span class="formula-label">Torque of a Couple</span>
      &tau;<sub>couple</sub> = Magnitude of either force &times; Perpendicular arm separation = <strong>F &middot; (2a)</strong>
    </div>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch4/fig-4-8-work-couple.webp" alt="Work Done by a Couple" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 4.8</span>
        Work Done by a Couple: Rotating a disc through angular displacement &theta; by tangential forces F and F.
      </div>
    </div>

    <div class="note-box">
      <strong>Essential Theorem &mdash; Origin Independence:</strong><br/>
      The torque of a couple is completely independent of the choice of reference origin! Unlike a single force whose torque depends on the distance from the pivot, a couple produces pure rotation with zero net translational force (&Sigma;F = 0).<br/>
      <strong>Work done by a couple:</strong> When a couple of torque &tau; rotates a rigid body through an angular displacement &theta; (in radians):<br/>
      <strong>W = &tau; &middot; &theta;</strong> &emsp; [Joules, J]
    </div>

    <h3>4.3 Conditions of Equilibrium for Rigid Bodies</h3>
    <table>
      <thead>
        <tr>
          <th>Condition</th>
          <th>Mathematical Statement</th>
          <th>Physical Consequence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>First Condition (Translational)</strong></td>
          <td>&Sigma;&vec;F = 0 &rArr; &Sigma;F<sub>x</sub> = 0, &Sigma;F<sub>y</sub> = 0, &Sigma;F<sub>z</sub> = 0</td>
          <td>Linear acceleration a = 0; body remains at rest or moves with constant velocity.</td>
        </tr>
        <tr>
          <td><strong>Second Condition (Rotational)</strong></td>
          <td>&Sigma;&vec;&tau; = 0 &rArr; &Sigma;&tau;<sub>x</sub> = 0, &Sigma;&tau;<sub>y</sub> = 0, &Sigma;&tau;<sub>z</sub> = 0</td>
          <td>Angular acceleration &alpha; = 0; body remains non-rotating or spins at constant angular speed.</td>
        </tr>
      </tbody>
    </table>

    <h2>5. Solid Friction</h2>
    <p><strong>Friction</strong> is an opposing tangential contact force that arises between two surfaces whenever there is relative motion or a tendency for relative motion between them.</p>

    <h3>5.1 Experimental Apparatus &amp; Types of Friction</h3>
    <p>In the laboratory, the laws of friction are verified using a wooden block connected by a light cord over a pulley to a scale pan with slotted weights.</p>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch4/fig-4-9-friction-experiment.webp" alt="Experimental Setup for Friction Laws" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 4.9</span>
        Experimental Setup: Verifying that limiting friction fL is proportional to normal reaction R and independent of contact surface area.
      </div>
    </div>

    <div class="diagram-box">
  <svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="staticArea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.02"/>
      </linearGradient>
      <linearGradient id="kineticArea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f97316" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#f97316" stop-opacity="0.02"/>
      </linearGradient>
    </defs>
    <rect width="640" height="280" rx="12" fill="#0b1329" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <line x1="80" y1="230" x2="580" y2="230" stroke="#64748b" stroke-width="2"/>
    <line x1="80" y1="230" x2="80" y2="35" stroke="#64748b" stroke-width="2"/>
    <text x="500" y="252" fill="#94a3b8" font-size="12" font-family="sans-serif" font-weight="bold">Applied Force (F)</text>
    <text x="30" y="30" fill="#94a3b8" font-size="12" font-family="sans-serif" font-weight="bold">Friction (f)</text>
    <polygon points="80,230 260,70 260,230" fill="url(#staticArea)"/>
    <polygon points="260,230 260,95 560,95 560,230" fill="url(#kineticArea)"/>
    <line x1="80" y1="230" x2="260" y2="70" stroke="#38bdf8" stroke-width="3"/>
    <path d="M 260 70 Q 275 95 290 95 L 560 95" fill="none" stroke="#f97316" stroke-width="3"/>
    <circle cx="260" cy="70" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
    <line x1="260" y1="70" x2="80" y2="70" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3"/>
    <text x="25" y="74" fill="#fca5a5" font-size="11" font-weight="bold">fL = &mu;sR</text>
    <line x1="290" y1="95" x2="80" y2="95" stroke="#fb923c" stroke-width="1.2" stroke-dasharray="3"/>
    <text x="25" y="99" fill="#fdba74" font-size="11" font-weight="bold">fk = &mu;kR</text>
    <line x1="260" y1="70" x2="260" y2="230" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
    <rect x="110" y="130" width="120" height="24" rx="4" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="0.8"/>
    <text x="120" y="146" fill="#7dd3fc" font-size="11" font-weight="bold">Static Region (fs = F)</text>
    <rect x="340" y="55" width="180" height="24" rx="4" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="0.8"/>
    <text x="348" y="71" fill="#fed7aa" font-size="11" font-weight="bold">Kinetic Region (Motion begins)</text>
    <text x="260" y="50" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Limiting Friction Peak</text>
    <rect x="350" y="140" width="190" height="60" rx="6" fill="rgba(15,23,42,0.9)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <text x="362" y="160" fill="#fbbf24" font-size="12" font-weight="bold">&mu;s &gt; &mu;k &gt; &mu;r always</text>
    <text x="362" y="178" fill="#94a3b8" font-size="11">Limiting &gt; Kinetic &gt; Rolling</text>
    <text x="362" y="193" fill="#cbd5e1" font-size="10">Angle of Friction: tan &lambda; = &mu;s</text>
  </svg>
  <div class="diagram-caption"><span class="tag">Fig 4.5</span> Friction vs Applied Force Curve: Showing linear self-adjusting static friction, limiting peak, and kinetic plateau.</div>
</div>

    <table>
      <thead>
        <tr>
          <th>Type of Friction</th>
          <th>Symbol</th>
          <th>Characteristic Formula</th>
          <th>Description &amp; Behavior</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Static Friction</strong></td>
          <td>f<sub>s</sub></td>
          <td>f<sub>s</sub> = F<sub>applied</sub></td>
          <td>Self-adjusting opposing force when bodies are at relative rest. Grows proportionally with applied force from 0 up to f<sub>L</sub>.</td>
        </tr>
        <tr>
          <td><strong>Limiting Friction</strong></td>
          <td>f<sub>L</sub></td>
          <td>f<sub>L</sub> = &mu;<sub>s</sub> &middot; R</td>
          <td>The maximum threshold of static friction achieved just before the body starts sliding.</td>
        </tr>
        <tr>
          <td><strong>Kinetic (Dynamic) Friction</strong></td>
          <td>f<sub>k</sub></td>
          <td>f<sub>k</sub> = &mu;<sub>k</sub> &middot; R</td>
          <td>The constant opposing friction experienced once relative sliding motion is underway. Always slightly smaller than limiting friction (&mu;<sub>s</sub> &gt; &mu;<sub>k</sub>).</td>
        </tr>
        <tr>
          <td><strong>Rolling Friction</strong></td>
          <td>f<sub>r</sub></td>
          <td>f<sub>r</sub> = &mu;<sub>r</sub> &middot; (R / r)</td>
          <td>Friction when a spherical or cylindrical body rolls over a surface. Significantly smaller than sliding friction (&mu;<sub>s</sub> &gt; &mu;<sub>k</sub> &gt;&gt; &mu;<sub>r</sub>).</td>
        </tr>
      </tbody>
    </table>

    <h3>5.2 Laws of Solid Friction</h3>
    <ul>
      <li><strong>First Law:</strong> Limiting frictional force is directly proportional to the normal reaction: <code>f<sub>L</sub> &prop; R &rArr; f<sub>L</sub> = &mu;<sub>s</sub>R</code>.</li>
      <li><strong>Second Law:</strong> Friction is independent of the nominal area of contact, provided the normal reaction R remains constant.</li>
      <li><strong>Third Law:</strong> Friction depends critically on the nature of materials and degree of roughness/smoothness of the contacting surfaces.</li>
      <li><strong>Fourth Law:</strong> The direction of friction is always tangential to the surface of contact, opposing the relative motion.</li>
      <li><strong>Kinetic Law:</strong> Kinetic friction is practically independent of sliding speed over moderate velocity ranges.</li>
    </ul>

    <h3>5.3 Angle of Friction &amp; Angle of Repose</h3>
    <p><strong>Angle of Friction (&lambda;):</strong> The angle made by the resultant contact force (&vec;S = &vec;R + &vec;f<sub>L</sub>) with the normal reaction (&vec;R):</p>
    <div class="formula-box">
      <span class="formula-label">Angle of Friction</span>
      tan&lambda; = f<sub>L</sub> / R = (&mu;<sub>s</sub> &middot; R) / R = <strong>&mu;<sub>s</sub></strong> &emsp; &rArr; &emsp; <strong>&lambda; = tan<sup>&minus;1</sup>(&mu;<sub>s</sub>)</strong>
    </div>

    <p><strong>Angle of Repose (&alpha;):</strong> The minimum angle of inclination of an inclined plane at which a body placed on it just begins to slide down under its own weight.</p>

    <div class="diagram-box">
  <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="inc-arr-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
      </marker>
      <marker id="inc-arr-rose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e"/>
      </marker>
      <marker id="inc-arr-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
      </marker>
    </defs>

    <rect width="700" height="320" rx="14" fill="#090d16" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

    <!-- Wedge Triangle: (45,260) to (400,260) to (45,90) -->
    <polygon points="45,260 400,260 45,90" fill="rgba(30,41,59,0.55)" stroke="#64748b" stroke-width="2"/>
    <path d="M 50 260 L 40 272 M 100 260 L 90 272 M 150 260 L 140 272 M 200 260 L 190 272 M 250 260 L 240 272 M 300 260 L 290 272 M 350 260 L 340 272 M 390 260 L 380 272" stroke="#334155" stroke-width="1.5"/>

    <!-- Angle &theta; Arc at bottom right corner -->
    <path d="M 330 260 A 70 70 0 0 0 345 234" fill="none" stroke="#fbbf24" stroke-width="2"/>
    <text x="312" y="248" fill="#fbbf24" font-size="14" font-family="'Sora', sans-serif" font-weight="bold">&theta;</text>

    <!-- Block on Incline: center (200, 164), rotated -25.6 deg -->
    <g transform="translate(200, 164) rotate(-25.6)">
      <rect x="-42" y="-38" width="84" height="48" rx="6" fill="rgba(249,115,22,0.25)" stroke="#f97316" stroke-width="2"/>
      <text x="0" y="-10" fill="#fed7aa" font-size="15" font-family="'Sora', sans-serif" font-weight="bold" text-anchor="middle">m</text>

      <!-- R: Normal Reaction Perpendicular UP -->
      <line x1="0" y1="-14" x2="0" y2="-95" stroke="#38bdf8" stroke-width="3" marker-end="url(#inc-arr-cyan)"/>
      <text x="8" y="-90" fill="#38bdf8" font-size="13" font-family="sans-serif" font-weight="bold">R (Normal Reaction)</text>

      <!-- mg cos theta: Perpendicular INTO plane -->
      <line x1="0" y1="-14" x2="0" y2="75" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3" marker-end="url(#inc-arr-cyan)"/>
      <text x="8" y="75" fill="#cbd5e1" font-size="12" font-family="sans-serif">mg cos&theta;</text>

      <!-- mg sin theta: DOWNHILL along plane (+X direction) -->
      <line x1="42" y1="-14" x2="115" y2="-14" stroke="#fbbf24" stroke-width="3" marker-end="url(#inc-arr-amber)"/>
      <text x="120" y="-8" fill="#fbbf24" font-size="13" font-family="sans-serif" font-weight="bold">mg sin&theta; (Downhill)</text>

      <!-- fL: Limiting Friction UPHILL opposing slip (-X direction) -->
      <line x1="-42" y1="10" x2="-115" y2="10" stroke="#f43f5e" stroke-width="3" marker-end="url(#inc-arr-rose)"/>
      <text x="-195" y="15" fill="#f43f5e" font-size="13" font-family="sans-serif" font-weight="bold">fL = &mu;s R (Friction)</text>
    </g>

    <!-- W = mg: True Vertical Down -->
    <line x1="200" y1="164" x2="200" y2="280" stroke="#fbbf24" stroke-width="3" marker-end="url(#inc-arr-amber)"/>
    <text x="210" y="278" fill="#fbbf24" font-size="14" font-family="'Sora', sans-serif" font-weight="bold">W = mg</text>

    <!-- Angle &theta; between mg and mg cos&theta; -->
    <path d="M 200 215 A 50 50 0 0 0 215 205" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
    <text x="218" y="222" fill="#94a3b8" font-size="11" font-family="sans-serif">&theta;</text>

    <!-- Derivation Card (Expanded to 260px, NO TEXT CUTOFF!) -->
    <rect x="425" y="25" width="260" height="270" rx="10" fill="rgba(15,23,42,0.88)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    
    <text x="440" y="52" fill="#fb923c" font-size="13" font-family="'Sora', sans-serif" font-weight="700">Angle of Repose (&theta; = &alpha;)</text>
    <line x1="440" y1="62" x2="670" y2="62" stroke="rgba(255,255,255,0.08)"/>

    <text x="440" y="85" fill="#94a3b8" font-size="11" font-family="sans-serif">At the verge of sliding down:</text>
    <text x="450" y="108" fill="#38bdf8" font-size="12" font-family="sans-serif" font-weight="bold">R = mg &middot; cos&alpha; &hellip; (1)</text>
    <text x="450" y="130" fill="#f43f5e" font-size="12" font-family="sans-serif" font-weight="bold">fL = mg &middot; sin&alpha; &hellip; (2)</text>

    <text x="440" y="156" fill="#94a3b8" font-size="11" font-family="sans-serif">Dividing equation (2) by (1):</text>
    <text x="450" y="178" fill="#fed7aa" font-size="12" font-family="sans-serif" font-weight="bold">fL / R = (mg sin&alpha;) / (mg cos&alpha;)</text>
    <text x="450" y="200" fill="#34d399" font-size="13" font-family="sans-serif" font-weight="bold">&mu;s = tan&alpha;</text>

    <line x1="440" y1="214" x2="670" y2="214" stroke="rgba(255,255,255,0.08)"/>
    
    <text x="440" y="233" fill="#cbd5e1" font-size="11" font-family="sans-serif">Since tan&lambda; = &mu;s (Angle of Friction):</text>
    <text x="450" y="255" fill="#38bdf8" font-size="13" font-family="'Sora', sans-serif" font-weight="bold">&alpha; (Repose) = &lambda; (Friction) ✔</text>
  </svg>
  <div class="diagram-caption">
    <span class="tag">Fig 4.6</span>
    Block on an Inclined Plane: Force resolution showing downhill mg sin&theta; balanced by uphill limiting friction fL at the angle of repose.
  </div>
</div>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">NEB Board Derivation</span>
        <strong>Proof: Angle of Friction Equals Angle of Repose (&alpha; = &lambda;)</strong>
      </div>
      <p>Consider a body of mass m resting on an inclined plane whose inclination angle &alpha; is adjusted until the body is on the verge of sliding down:<br/>
      Resolving forces along and perpendicular to the inclined plane:<br/>
      1. Perpendicular to plane: R = mg &middot; cos&alpha; &hellip; (1)<br/>
      2. Parallel to plane (at verge of slipping): Limiting friction f<sub>L</sub> = mg &middot; sin&alpha; &hellip; (2)<br/>
      Dividing equation (2) by equation (1):<br/>
      f<sub>L</sub> / R = (mg &middot; sin&alpha;) / (mg &middot; cos&alpha;)<br/>
      &mu;<sub>s</sub> = tan&alpha; &emsp; &rArr; &emsp; <strong>&alpha; = tan<sup>&minus;1</sup>(&mu;<sub>s</sub>)</strong><br/>
      Since we previously established that tan&lambda; = &mu;<sub>s</sub> for the angle of friction:<br/>
      &there4; <strong>tan&alpha; = tan&lambda; &emsp; &rArr; &emsp; &alpha; = &lambda;</strong> &emsp; (Angle of Repose = Angle of Friction ✔)</p>
    </div>

    <h3>5.4 Motion on a Rough Inclined Plane</h3>
    <table>
      <thead>
        <tr>
          <th>Condition</th>
          <th>Governing Equation</th>
          <th>Resulting Acceleration / Applied Force</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Body sliding down freely</strong> (&theta; &gt; &alpha;)</td>
          <td>mg&middot;sin&theta; &minus; f<sub>k</sub> = ma</td>
          <td><strong>a = g &middot; (sin&theta; &minus; &mu;<sub>k</sub>cos&theta;)</strong></td>
        </tr>
        <tr>
          <td><strong>Body pushed up with acceleration a</strong></td>
          <td>F &minus; mg&middot;sin&theta; &minus; f<sub>k</sub> = ma</td>
          <td><strong>F = m[a + g(sin&theta; + &mu;<sub>k</sub>cos&theta;)]</strong></td>
        </tr>
        <tr>
          <td><strong>Body pulled up with uniform speed (a = 0)</strong></td>
          <td>F &minus; mg&middot;sin&theta; &minus; f<sub>k</sub> = 0</td>
          <td><strong>F = mg(sin&theta; + &mu;<sub>k</sub>cos&theta;)</strong></td>
        </tr>
      </tbody>
    </table>

    <div class="note-box">
      <strong>Why Friction is a "Necessary Evil":</strong><br/>
      &bull; <strong>Why it is Necessary:</strong> Without friction, humans cannot walk (feet would continuously slip backwards); vehicles cannot accelerate, turn, or stop; nails and screws cannot hold in walls; belts cannot drive machinery; writing with pens on paper would be impossible.<br/>
      &bull; <strong>Why it is an Evil:</strong> It dissipates useful mechanical energy into unwanted heat and sound; causes extensive mechanical wear and tear of machine gears and bearings; reduces the operational efficiency of all engines and mechanisms.<br/>
      &bull; <strong>Methods to Reduce Friction:</strong> Polishing rough surfaces, applying liquid lubricants (oils/greases), substituting sliding friction with rolling friction via ball bearings, and streamlining vehicle bodies.
    </div>

    <h2>6. High-Yield NEB Worked Numericals (Class 11 Board Bank)</h2>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">CDC Textbook Example 4.1</span>
        <strong>Wall Collision &amp; Average Contact Force</strong>
      </div>
      <p><strong>Problem:</strong> A ball of mass 0.500 kg moving horizontally at 15.0 ms<sup>&minus;1</sup> collides with a vertical wall and bounces straight back at 10.5 ms<sup>&minus;1</sup>. If the collision duration is &Delta;t = 0.013 s, calculate (a) the change in momentum and (b) the average force exerted on the wall.</p>
      <div class="step-line"><span class="step-arrow">&rarr;</span> <strong>Given:</strong> m = 0.500 kg, initial velocity u = +15.0 ms<sup>&minus;1</sup>, rebound velocity v = &minus;10.5 ms<sup>&minus;1</sup>, &Delta;t = 0.013 s.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Initial momentum p<sub>1</sub> = m &middot; u = 0.500 &times; 15.0 = <strong>+7.5 kg&middot;ms<sup>&minus;1</sup></strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Final momentum p<sub>2</sub> = m &middot; v = 0.500 &times; (&minus;10.5) = <strong>&minus;5.25 kg&middot;ms<sup>&minus;1</sup></strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Change in momentum &Delta;p = p<sub>2</sub> &minus; p<sub>1</sub> = &minus;5.25 &minus; 7.5 = <strong>&minus;12.75 kg&middot;ms<sup>&minus;1</sup></strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> By Impulse-Momentum theorem, average force: <code>F<sub>avg</sub> = |&Delta;p / &Delta;t| = 12.75 / 0.013 &approx; <strong>980.77 N</strong></code>.</div>
    </div>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">NEB Board Exercise 28</span>
        <strong>Impulse from Applied Force–Time Graph</strong>
      </div>
      <p><strong>Problem:</strong> An applied force vs. time graph of an object is given below. Find the total impulse on the object between 0 to 10 seconds, and the acceleration gained at t = 2 s and t = 6 s if its mass is 2.0 kg.</p>
      
      <div class="diagram-box">
        <img src="../public/images/notes/physics/ch4/fig-4-15-impulse-exercise.webp" alt="Exercise 28 Force-Time Graph" loading="lazy" />
        <div class="diagram-caption">
          <span class="tag">Textbook Fig 4.15</span>
          Applied force vs. time graph: Trapezoidal area representing total impulse J = &int; F dt.
        </div>
      </div>

      <div class="step-line"><span class="step-arrow">&rarr;</span> <strong>Total Impulse:</strong> Calculated as the area under the F–t trapezoid from t = 0 to 10 s.<br/>
      Area = &frac12; &times; (sum of parallel sides) &times; height = &frac12; &times; (10 + 4) &times; 20 = &frac12; &times; 14 &times; 20 = <strong>140 N&middot;s (or kg&middot;ms<sup>&minus;1</sup>)</strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> <strong>Acceleration at t = 2 s:</strong> From the graph, at t = 2 s, force F = 20 N. &there4; a = F / m = 20 / 2 = <strong>10 ms<sup>&minus;2</sup></strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> <strong>Acceleration at t = 6 s:</strong> At t = 6 s, force is still at the flat peak F = 20 N. &there4; a = F / m = 20 / 2 = <strong>10 ms<sup>&minus;2</sup></strong>.</div>
    </div>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">NEB Board Standard</span>
        <strong>Vector Net Force &amp; Acceleration</strong>
      </div>
      <p><strong>Problem:</strong> A 6.0 kg object is subjected simultaneously to three forces: &vec;F<sub>1</sub> = 20&icirc; + 30&jmath;, &vec;F<sub>2</sub> = 8&icirc; &minus; 50&jmath;, and &vec;F<sub>3</sub> = 2&icirc; + 2&jmath; (in Newtons). Find the magnitude and direction of the resultant acceleration.</p>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Resultant force: &vec;F<sub>net</sub> = &vec;F<sub>1</sub> + &vec;F<sub>2</sub> + &vec;F<sub>3</sub> = (20 + 8 + 2)&icirc; + (30 &minus; 50 + 2)&jmath; = <strong>30&icirc; &minus; 18&jmath; N</strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Acceleration: &vec;a = &vec;F<sub>net</sub> / m = (30&icirc; &minus; 18&jmath;) / 6 = <strong>5&icirc; &minus; 3&jmath; ms<sup>&minus;2</sup></strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Magnitude: a = &radic;(5² + (&minus;3)²) = &radic;(25 + 9) = &radic;34 &approx; <strong>5.83 ms<sup>&minus;2</sup></strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Direction: &theta; = tan<sup>&minus;1</sup>(|&minus;3| / 5) = tan<sup>&minus;1</sup>(0.6) &approx; <strong>30.96&deg; below the +x axis</strong>.</div>
    </div>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">NEB 4-Mark Problem</span>
        <strong>Apparent Weight in Elevator (Two Cases)</strong>
      </div>
      <p><strong>Problem:</strong> A lift carrying a 50 kg student moves (i) upward with an acceleration of 2.0 ms<sup>&minus;2</sup> and (ii) downward with an acceleration of 2.0 ms<sup>&minus;2</sup>. Taking g = 9.8 ms<sup>&minus;2</sup>, calculate the floor reaction on the student in each case.</p>
      <div class="step-line"><span class="step-arrow">&rarr;</span> <strong>Case (i) Upward acceleration:</strong> R &minus; mg = ma &rArr; R = m(g + a) = 50 &times; (9.8 + 2.0) = 50 &times; 11.8 = <strong>590 N</strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> <strong>Case (ii) Downward acceleration:</strong> mg &minus; R = ma &rArr; R = m(g &minus; a) = 50 &times; (9.8 &minus; 2.0) = 50 &times; 7.8 = <strong>390 N</strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> <em>Physics takeaway: The student feels 51% heavier ascending versus descending!</em></div>
    </div>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">CDC Textbook Exercise 14</span>
        <strong>Atwood's Machine Pulley System</strong>
      </div>
      <p><strong>Problem:</strong> Two blocks of mass 12 kg and 8 kg are connected by a light string over a frictionless pulley. Calculate (a) the acceleration of the system and (b) the tension in the string. (Take g = 9.8 ms<sup>&minus;2</sup>).</p>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Here m<sub>1</sub> = 12 kg, m<sub>2</sub> = 8 kg.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Acceleration: a = [(m<sub>1</sub> &minus; m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>)] &middot; g = [(12 &minus; 8) / (12 + 8)] &times; 9.8 = (4 / 20) &times; 9.8 = <strong>1.96 ms<sup>&minus;2</sup></strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Tension: T = [2 &middot; m<sub>1</sub> &middot; m<sub>2</sub> / (m<sub>1</sub> + m<sub>2</sub>)] &middot; g = [2 &times; 12 &times; 8 / 20] &times; 9.8 = (192 / 20) &times; 9.8 = <strong>94.08 N</strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Axle load: F<sub>pulley</sub> = 2T = 2 &times; 94.08 = <strong>188.16 N</strong>.</div>
    </div>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">NEB Past Question</span>
        <strong>Sliding Down a Rough Inclined Plane</strong>
      </div>
      <p><strong>Problem:</strong> A block of mass 1.0 kg rests on an inclined plane of inclination 30&deg;. If the coefficient of dynamic friction is &mu;<sub>k</sub> = 0.20, find the velocity attained by the block 5.0 seconds after starting from rest. (Take g = 9.8 ms<sup>&minus;2</sup>).</p>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Acceleration down incline: <code>a = g(sin&theta; &minus; &mu;<sub>k</sub>cos&theta;)</code>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> a = 9.8 &times; (sin30&deg; &minus; 0.20 &times; cos30&deg;) = 9.8 &times; (0.500 &minus; 0.20 &times; 0.866) = 9.8 &times; (0.500 &minus; 0.1732) = 9.8 &times; 0.3268 &approx; <strong>3.203 ms<sup>&minus;2</sup></strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Using v = u + at with u = 0: <code>v = 0 + (3.203 &times; 5.0) &approx; <strong>16.01 ms<sup>&minus;1</sup></strong></code>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Velocity after the next 1 s (t = 6 s): v<sub>6</sub> = 3.203 &times; 6 = <strong>19.22 ms<sup>&minus;1</sup></strong>.</div>
    </div>

    <div class="example-box">
      <div class="example-header">
        <span class="example-badge">CDC Textbook Exercise 24</span>
        <strong>Work Done by a Couple</strong>
      </div>
      <p><strong>Problem:</strong> A steering wheel of radius 0.50 m is rotated through an angle of 30&deg; by applying two equal and opposite forces of 100 N each at opposite ends of the diameter. Calculate the work done by the couple.</p>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Radius r = 0.50 m &rArr; diameter arm 2a = 2 &times; 0.50 = 1.0 m.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Torque of couple: &tau; = F &times; (2a) = 100 N &times; 1.0 m = <strong>100 N&middot;m</strong>.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Angular displacement: &theta; = 30&deg; = 30 &times; (&pi; / 180) = &pi; / 6 &approx; 0.5236 rad.</div>
      <div class="step-line"><span class="step-arrow">&rarr;</span> Work done: W = &tau; &middot; &theta; = 100 &times; (3.1416 / 6) &approx; <strong>52.36 J</strong>.</div>
    </div>

    <h2>7. NEB Exam Focus &amp; High-Yield Master Blueprint</h2>

    <h3>7.1 Master Formulas Quick Reference</h3>
    <table>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Master Formula</th>
          <th>Key Variable Definitions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Newton's 2nd Law</strong></td>
          <td><code>F = dp/dt = ma</code></td>
          <td>m = constant mass, a = acceleration</td>
        </tr>
        <tr>
          <td><strong>Impulse</strong></td>
          <td><code>J = F&Delta;t = &Delta;p = m(v &minus; u)</code></td>
          <td>Area under F–t curve = Impulse</td>
        </tr>
        <tr>
          <td><strong>Recoil Velocity</strong></td>
          <td><code>V = &minus;(m/M) &middot; v</code></td>
          <td>M = gun mass, m = bullet mass, v = bullet speed</td>
        </tr>
        <tr>
          <td><strong>Apparent Lift Weight</strong></td>
          <td><code>R = m(g &plusmn; a)</code></td>
          <td>+ for upward accel, &minus; for downward accel</td>
        </tr>
        <tr>
          <td><strong>Atwood Acceleration</strong></td>
          <td><code>a = [(m₁ &minus; m₂) / (m₁ + m₂)] &middot; g</code></td>
          <td>m₁ &gt; m₂ hanging over frictionless pulley</td>
        </tr>
        <tr>
          <td><strong>Atwood Tension</strong></td>
          <td><code>T = [2m₁m₂ / (m₁ + m₂)] &middot; g</code></td>
          <td>Tension in connecting light string</td>
        </tr>
        <tr>
          <td><strong>Torque &amp; Couple</strong></td>
          <td><code>&tau; = rFsin&theta; &bull; &tau;<sub>couple</sub> = F(2a)</code></td>
          <td>2a = perpendicular arm separation</td>
        </tr>
        <tr>
          <td><strong>Work by Couple</strong></td>
          <td><code>W = &tau; &middot; &theta;</code></td>
          <td>&theta; MUST be in radians</td>
        </tr>
        <tr>
          <td><strong>Limiting Friction</strong></td>
          <td><code>f<sub>L</sub> = &mu;<sub>s</sub> &middot; R</code></td>
          <td>R = normal reaction</td>
        </tr>
        <tr>
          <td><strong>Angle of Repose / Friction</strong></td>
          <td><code>tan&lambda; = tan&alpha; = &mu;<sub>s</sub></code></td>
          <td>&lambda; = friction angle, &alpha; = repose angle</td>
        </tr>
        <tr>
          <td><strong>Incline Acceleration</strong></td>
          <td><code>a = g(sin&theta; &minus; &mu;<sub>k</sub>cos&theta;)</code></td>
          <td>Sliding down rough incline at angle &theta;</td>
        </tr>
      </tbody>
    </table>

    <div class="exam-callout">
      <div class="exam-title">🔥 Classic NEB Board Traps &amp; Examiner Pitfalls</div>
      <p>&bull; <strong>Pitfall 1: Action-Reaction on the Same Body:</strong> When asked "why doesn't a horse and cart system cancel out if action equals reaction?", students frequently write that they cancel. The correct answer: the forward force acting on the cart comes from the horse, while the forward force accelerating the horse comes from the ground pushing on the horse's hooves! Action-reaction pairs act on different bodies.<br/>
      &bull; <strong>Pitfall 2: Apparent Weight at Constant Velocity:</strong> If a lift travels upward at a steady 5 ms<sup>&minus;1</sup>, what is the apparent weight? Many students calculate R = m(g + 5). Wrong! Constant velocity means <strong>acceleration a = 0</strong>, so R = mg (true weight)!<br/>
      &bull; <strong>Pitfall 3: Angular Unit in Couple Work:</strong> When calculating W = &tau;&theta;, you must convert degrees into radians (&times; &pi;/180). Multiplying by 30&deg; directly yields incorrect results.<br/>
      &bull; <strong>Pitfall 4: Static Friction is Self-Adjusting:</strong> If a block has limiting friction f<sub>L</sub> = 20 N and an external force of 5 N is applied horizontally, the friction force is <strong>5 N</strong>, NOT 20 N! Static friction matches the applied force until the 20 N threshold is surpassed.<br/>
      &bull; <strong>Pitfall 5: Weightlessness in Free Fall:</strong> Free fall does not mean gravity has disappeared (g is still ~9.8 ms<sup>&minus;2</sup>). Weightlessness occurs because the floor accelerates downward at g, providing zero normal reaction (R = 0).</p>
    </div>

    `,
  },
  {
    id: "phys11-work-energy-power",
    class: "11",
    subject: "Physics",
    chapter: "Work, Energy & Power",
    title: "Work, Energy and Power — Class 11 Physics",
    icon: "⚡",
    summary: "Comprehensive NEB Class 11 Physics notes: Work done by constant & variable forces, Power & Efficiency, Work-Energy Theorem, Kinetic & Potential Energy (Gravitational & Elastic), Conservation of Mechanical Energy (Freely Falling Body & Vertical Circle), Conservative vs Non-Conservative Forces, Elastic & Inelastic 1D Collisions (velocity derivation & kinetic energy loss), and 8 high-yield NEB solved numericals & past board derivations.",
    tags: ["Work", "Energy", "Power", "Work-Energy Theorem", "Conservation of Energy", "Elastic Collision", "Inelastic Collision", "Conservative Force", "Potential Energy", "Class 11", "Physics", "NEB"],
    content: `
    <!-- Bento Grid Overview -->
    <div class="bento-grid">
      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">⚙️</div>
          <div>
            <div class="bento-title">Work &amp; Variable Forces</div>
            <div class="bento-subtitle">W = F&middot;s&middot;cos&theta; &bull; &int;F(x)dx</div>
          </div>
        </div>
        <p>Work is scalar energy transfer quantified by force along displacement. For variable forces and elastic springs, work equals the mathematical area beneath the Force&ndash;Displacement curve (W = &frac12;kx&sup2;).</p>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">⚡</div>
          <div>
            <div class="bento-title">Work-Energy Theorem</div>
            <div class="bento-subtitle">W_net = &Delta;KE = &frac12;mv&sup2; &minus; &frac12;mu&sup2;</div>
          </div>
        </div>
        <p>The net work done by all acting forces equals the exact change in kinetic energy. Connects translational dynamics directly to linear momentum via E_k = p&sup2; / (2m).</p>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">🔄</div>
          <div>
            <div class="bento-title">Energy Conservation</div>
            <div class="bento-subtitle">E = KE + PE = Constant</div>
          </div>
        </div>
        <p>Total mechanical energy remains rigorously invariant under conservative forces. Proven analytically for free fall and vertical circular loops (v_bottom = &radic;5gr, &Delta;T = 6mg).</p>
      </div>

      <div class="bento-card">
        <div class="bento-header">
          <div class="bento-icon">💥</div>
          <div>
            <div class="bento-title">Collisions &amp; Restitution</div>
            <div class="bento-subtitle">Elastic (e=1) vs Inelastic (0 &le; e &lt; 1)</div>
          </div>
        </div>
        <p>1D elastic collisions conserve momentum and kinetic energy, leading to velocity exchange for equal masses. Inelastic impacts dissipate mechanical energy into heat and deformation (&Delta;E_loss).</p>
      </div>
    </div>

    <h2>1. Foundations of Work: Constant and Variable Forces</h2>
    <p>In everyday language, "work" denotes any physical or mental exertion. In physics, however, <strong>work</strong> is strictly defined as an energy transfer process that occurs when an applied force causes a material displacement along the line of action of that force.</p>

    <h3>1.1 Mathematical Definition &amp; Scalar Product</h3>
    <p>When a constant force &vec;F acts on a particle resulting in a displacement &vec;s, the work done (W) is the scalar (dot) product of the force and displacement vectors:</p>

    <div class="formula-box">
      <span class="formula-label">Work Done by a Constant Force</span>
      W = &vec;F &middot; &vec;s = |&vec;F| |&vec;s| cos&theta; = F &middot; s &middot; cos&theta;
    </div>

    <p>Where <strong>&theta;</strong> represents the angle between the directional line of the force &vec;F and the direction of displacement &vec;s.</p>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch5/fig-5-1-concept-work.webp" alt="Concept of Work Done: Force resolved along displacement" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 5.1</span>
        Concept of Work: Effective component of force in the direction of motion is F cos&theta;, doing work W = (F cos&theta;) &middot; s.
      </div>
    </div>

    <h3>1.2 Physical Characterization of Work</h3>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Angular Condition</th>
          <th>Mathematical Sign</th>
          <th>Physical Mechanism &amp; NEB Exam Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Positive Work</strong></td>
          <td>0&deg; &le; &theta; &lt; 90&deg; (cos&theta; &gt; 0)</td>
          <td><code>W &gt; 0</code></td>
          <td>Force has a component supporting motion. <em>Examples:</em> A falling apple pulled down by gravity (&theta;=0&deg;); a horse pulling a cart forwards; stretching a spring.</td>
        </tr>
        <tr>
          <td><strong>Negative Work</strong></td>
          <td>90&deg; &lt; &theta; &le; 180&deg; (cos&theta; &lt; 0)</td>
          <td><code>W &lt; 0</code></td>
          <td>Force opposes displacement, extracting mechanical energy. <em>Examples:</em> Kinetic friction acting on a sliding crate (&theta;=180&deg;); gravity acting on a vertically projected stone.</td>
        </tr>
        <tr>
          <td><strong>Zero Work</strong></td>
          <td>&theta; = 90&deg; (cos&theta; = 0) OR s = 0</td>
          <td><code>W = 0</code></td>
          <td>Force is perpendicular to displacement or no motion occurs. <em>Examples:</em> A porter carrying luggage on a horizontal platform (&theta;=90&deg; against gravity); centripetal force in circular orbits; pushing against a rigid wall.</td>
        </tr>
      </tbody>
    </table>

    <div class="note-box">
      <strong>NEB Board Conceptual Focus:</strong> Why is the work done by centripetal force always zero? Because centripetal force acts radially towards the center, whereas instantaneous displacement is directed tangentially (&theta; = 90&deg;). Thus, <code>W = F &middot; s &middot; cos 90&deg; = 0</code>, meaning centripetal force alters direction of motion without changing kinetic energy or speed!
    </div>

    <h3>1.3 Units and Dimensions of Work</h3>
    <div class="formula-box">
      <span class="formula-label">Units &amp; Dimensional Identity</span>
      <strong>SI Unit:</strong> Joule (J) = 1 N &middot; m = 1 kg&middot;m&sup2;&middot;s<sup>&minus;2</sup><br/>
      <strong>CGS Unit:</strong> Erg = 1 dyne &middot; cm = 1 g&middot;cm&sup2;&middot;s<sup>&minus;2</sup><br/>
      <strong>Conversion:</strong> <code>1 J = 10<sup>5</sup> dyne &times; 10<sup>2</sup> cm = 10<sup>7</sup> erg</code><br/>
      <strong>Dimensional Formula:</strong> <code>[W] = [M L<sup>2</sup> T<sup>&minus;2</sup>]</code>
    </div>

    <h3>1.4 Work Done by a Variable Force</h3>
    <p>In real mechanical systems, forces rarely remain constant throughout displacement. For example, spring forces vary with elongation (F = kx), and gravitational forces vary inversely with the square of distance.</p>

    <p>To evaluate work done by a variable force F(x), we divide the total displacement from x<sub>1</sub> to x<sub>2</sub> into an infinite number of infinitesimal segments dx over which F is approximately uniform. The total work is the definite integral:</p>

    <div class="formula-box">
      <span class="formula-label">Calculus Definition of Variable Work</span>
      W = &int;<sub>x<sub>1</sub></sub><sup>x<sub>2</sub></sup> F(x) dx = &int;<sub>x<sub>1</sub></sub><sup>x<sub>2</sub></sup> (F cos&theta;) dx
    </div>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch5/fig-5-2a-variable-work.webp" alt="Work Done by Variable Force - Analytical Strip Integration" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 5.2a</span>
        Analytical evaluation of work done by variable force as summation of infinitesimal rectangular strips: W = &Sigma; F_i &Delta;x_i &rarr; &int; F dx.
      </div>
    </div>

    <div class="key-stmt">
      <strong>Fundamental Graphical Rule:</strong> The total work done by any force (constant or variable) during a rectilinear displacement from x<sub>1</sub> to x<sub>2</sub> is geometrically equal to the <strong>net area under the Force&ndash;Displacement (F&ndash;x) curve</strong> bounded by the displacement axis.
    </div>

    <!-- Interactive-feel Modern SVG: Force vs Displacement Area -->
    <div class="diagram-box">
      <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" class="diagram">
        <defs>
          <linearGradient id="workAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#dc2626" stop-opacity="0.08"/>
          </linearGradient>
          <marker id="ch5-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
          </marker>
        </defs>
        <rect width="700" height="260" rx="12" fill="#090d16" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        
        <!-- Axes -->
        <line x1="80" y1="220" x2="640" y2="220" stroke="#64748b" stroke-width="2" marker-end="url(#ch5-arr)"/>
        <line x1="80" y1="220" x2="80" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#ch5-arr)"/>
        <text x="645" y="225" fill="#94a3b8" font-size="13" font-weight="600">Displacement x (m)</text>
        <text x="35" y="35" fill="#94a3b8" font-size="13" font-weight="600">Force F(x) [N]</text>

        <!-- Shaded Area Under Curve -->
        <path d="M 140,220 L 140,160 Q 260,60 420,100 T 560,70 L 560,220 Z" fill="url(#workAreaGrad)" stroke="none"/>
        <path d="M 140,160 Q 260,60 420,100 T 560,70" fill="none" stroke="#f97316" stroke-width="3.5" stroke-linecap="round"/>

        <!-- Boundaries -->
        <line x1="140" y1="220" x2="140" y2="160" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="4,4"/>
        <line x1="560" y1="220" x2="560" y2="70" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="4,4"/>
        
        <!-- Labels -->
        <text x="132" y="240" fill="#cbd5e1" font-size="12" font-weight="bold">x₁ (Initial)</text>
        <text x="545" y="240" fill="#cbd5e1" font-size="12" font-weight="bold">x₂ (Final)</text>
        
        <rect x="260" y="140" width="220" height="38" rx="8" fill="rgba(15,23,42,0.85)" stroke="#f97316" stroke-width="1"/>
        <text x="275" y="164" fill="#fb923c" font-size="13" font-weight="bold">Work = &int; F(x) dx = Area</text>
      </svg>
      <div class="diagram-caption">
        <span class="tag">Visual Calculus</span>
        Work Done by Variable Force: The shaded area bounded by F(x), the x-axis, and limits x₁ to x₂ represents the total work done.
      </div>
    </div>

    <h3>1.5 Work Done in Stretching a Helical Spring</h3>
    <p>According to <strong>Hooke's Law</strong>, the restoring force exerted by a spring displaced by distance x from its natural equilibrium is directly proportional to displacement: <code>F<sub>s</sub> = &minus;kx</code>, where k is the <strong>spring constant</strong> (force per unit extension, measured in N/m).</p>

    <div class="step-box">
      <div class="step-title">Derivation of Spring Work &amp; Elastic Energy</div>
      <div class="step">
        <span><strong>External Force Required:</strong> To overcome the spring's restoring force without acceleration, an applied external force F<sub>ext</sub> = +kx must be supplied.</span>
      </div>
      <div class="step">
        <span><strong>Work on Element dx:</strong> The infinitesimal work done in stretching the spring by an extra distance dx is <code>dW = F<sub>ext</sub> dx = kx dx</code>.</span>
      </div>
      <div class="step">
        <span><strong>Integration over Extension 0 to x:</strong>
        <br/><code>W = &int;<sub>0</sub><sup>x</sup> kx dx = k [&frac12; x&sup2;]<sub>0</sub><sup>x</sup> = &frac12; k x&sup2;</code></span>
      </div>
    </div>

    <div class="formula-box">
      <span class="formula-label">Elastic Work &amp; Spring Potential Energy</span>
      W = &frac12; k (x<sub>f</sub>&sup2; &minus; x<sub>i</sub>&sup2;) &emsp; [From rest to extension x: <strong>W = &frac12; k x&sup2;</strong>]
    </div>

    <h2>2. Power, Energy &amp; System Efficiency</h2>
    <h3>2.1 Power: Instantaneous and Average</h3>
    <p><strong>Power</strong> is defined as the time rate at which work is performed or mechanical energy is transferred.</p>

    <div class="formula-box">
      <span class="formula-label">Power Formulations</span>
      <strong>Average Power:</strong> P<sub>avg</sub> = &Delta;W / &Delta;t<br/>
      <strong>Instantaneous Power:</strong> P = dW / dt = d(&vec;F &middot; &vec;s) / dt = <strong>&vec;F &middot; &vec;v = F &middot; v &middot; cos&theta;</strong>
    </div>

    <table>
      <thead>
        <tr>
          <th>Unit of Power / Energy</th>
          <th>Symbol</th>
          <th>Standard Equivalence in SI</th>
          <th>Domain of Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Watt (SI)</strong></td>
          <td>W</td>
          <td>1 W = 1 J/s = 1 N&middot;m/s = 1 kg&middot;m&sup2;&middot;s<sup>&minus;3</sup></td>
          <td>Standard scientific &amp; electrical rating</td>
        </tr>
        <tr>
          <td><strong>Kilowatt / Megawatt</strong></td>
          <td>kW / MW</td>
          <td>1 kW = 10<sup>3</sup> W &bull; 1 MW = 10<sup>6</sup> W</td>
          <td>Hydropower plants &amp; electric grids in Nepal</td>
        </tr>
        <tr>
          <td><strong>Horsepower (Imperial)</strong></td>
          <td>hp</td>
          <td><strong>1 hp = 746 Watts</strong> = 0.746 kW</td>
          <td>Automobile engines &amp; water pump motors</td>
        </tr>
        <tr>
          <td><strong>Kilowatt-hour (Commercial)</strong></td>
          <td>kWh (Unit)</td>
          <td><strong>1 kWh = 1000 W &times; 3600 s = 3.6 &times; 10<sup>6</sup> J = 3.6 MJ</strong></td>
          <td>Nepal Electricity Authority (NEA) billing</td>
        </tr>
      </tbody>
    </table>

    <h3>2.2 Mechanical Efficiency of a Machine</h3>
    <div class="formula-box">
      <span class="formula-label">Efficiency Formula</span>
      &eta; = (Useful Output Work / Total Input Work) &times; 100% = (Output Power / Input Power) &times; 100%
    </div>
    <p>Due to unavoidable resistive dissipations (friction, viscous drag, sound, thermal generation), real machine efficiency is always strictly &eta; &lt; 100%.</p>

    <h2>3. Kinetic Energy and the Work-Energy Theorem</h2>
    <p><strong>Energy</strong> is the capacity of a physical system to perform work. It is a scalar quantity possessing the identical dimension <code>[M L<sup>2</sup> T<sup>&minus;2</sup>]</code> and SI unit (Joule) as work.</p>

    <h3>3.1 Kinetic Energy (E<sub>k</sub>)</h3>
    <p><strong>Kinetic energy</strong> is the mechanical energy possessed by a body by virtue of its translational, rotational, or vibrational motion. For a body of mass m moving with rectilinear velocity v, translational kinetic energy is <code>E<sub>k</sub> = &frac12; mv&sup2;</code>.</p>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch5/fig-5-3-kinetic-energy-gain.webp" alt="Body gaining kinetic energy under applied force" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 5.3</span>
        Body of mass m initially at rest accelerating under force F through displacement s, acquiring final velocity v and kinetic energy &frac12; mv&sup2;.
      </div>
    </div>

    <h3>3.2 Calculus Derivation of the Work-Energy Theorem</h3>
    <div class="step-box">
      <div class="step-title">Rigorous Derivation: Work-Energy Theorem for Variable Force</div>
      <div class="step">
        <span><strong>Newton's Second Law Relation:</strong> For a body of mass m moving along the x-axis, F = ma = m(dv/dt). Using chain rule: <code>F = m (dv/dx) &middot; (dx/dt) = m v (dv/dx)</code>.</span>
      </div>
      <div class="step">
        <span><strong>Work Done on Elemental Displacement dx:</strong>
        <br/><code>dW = F dx = [m v (dv/dx)] dx = m v dv</code></span>
      </div>
      <div class="step">
        <span><strong>Definite Integration from Initial Speed u to Final Speed v:</strong>
        <br/><code>W = &int;<sub>u</sub><sup>v</sup> m v dv = m [&frac12; v&sup2;]<sub>u</sub><sup>v</sup> = &frac12; m v&sup2; &minus; &frac12; m u&sup2;</code></span>
      </div>
      <div class="step">
        <span><strong>Conclusion:</strong>
        <br/><code>W<sub>net</sub> = E<sub>k, final</sub> &minus; E<sub>k, initial</sub> = &Delta;E<sub>k</sub></code></span>
      </div>
    </div>

    <div class="key-stmt">
      <strong>Work-Energy Theorem Statement:</strong> The total net work performed by all conservative and non-conservative forces acting upon a body is identically equal to the net change in its kinetic energy: <code>W<sub>net</sub> = &Delta;KE</code>.
    </div>

    <h3>3.3 Interrelation Between Kinetic Energy (E<sub>k</sub>) and Linear Momentum (p)</h3>
    <p>Consider a body of mass m with velocity v. Its linear momentum is <code>p = mv</code> and its kinetic energy is <code>E<sub>k</sub> = &frac12; mv&sup2;</code>.</p>

    <div class="formula-box">
      <span class="formula-label">Momentum-Kinetic Energy Relationships</span>
      E<sub>k</sub> = &frac12; m v&sup2; = (m&sup2; v&sup2;) / (2m) = <strong>p&sup2; / (2m)</strong><br/>
      <strong>p = &radic;(2m E<sub>k</sub>)</strong>
    </div>

    <div class="note-box">
      <strong>High-Yield NEB Ratio Insights:</strong>
      <ul>
        <li><strong>If momentum p is constant:</strong> <code>E<sub>k</sub> &prop; 1/m</code>. A lighter body possesses <em>more</em> kinetic energy than a heavier body when both have identical momentum (e.g. bullet vs recoiling gun).</li>
        <li><strong>If kinetic energy E<sub>k</sub> is constant:</strong> <code>p &prop; &radic;m</code>. A heavier body carries <em>greater</em> momentum than a lighter body when both have equal kinetic energy.</li>
        <li><strong>Percentage Change Rule:</strong> If momentum increases by n%, new momentum p' = p(1 + n/100). New KE is E<sub>k</sub>' = E<sub>k</sub>(1 + n/100)&sup2;. For a 50% increase in momentum, KE increases by <strong>125%</strong>!</li>
      </ul>
    </div>

    <h2>4. Potential Energy &amp; Equilibrium States</h2>
    <p><strong>Potential energy</strong> (U or E<sub>p</sub>) is the energy stored within a system by virtue of the relative position, configuration, or spatial arrangement of its constituent parts against a conservative field force.</p>

    <h3>4.1 Gravitational Potential Energy</h3>
    <p>Near the surface of the Earth where gravitational acceleration g is approximately uniform, the work done against gravity to elevate an object of mass m to height h is:</p>
    <div class="formula-box">
      <span class="formula-label">Gravitational Potential Energy</span>
      U<sub>g</sub> = m &middot; g &middot; h &emsp; [Relative to reference datum h = 0 where U<sub>g</sub> = 0]
    </div>

    <h3>4.2 Force as the Negative Gradient of Potential Energy</h3>
    <p>For any conservative force field, the force acting on a particle is mathematically related to potential energy by the spatial derivative:</p>
    <div class="formula-box">
      <span class="formula-label">Potential Gradient Relationship</span>
      F(x) = &minus; (dU / dx) &emsp; [In 3D: &vec;F = &minus;&nabla;U = &minus;(&part;U/&part;x &icirc; + &part;U/&part;y &jmath; + &part;U/&part;z k&#770;)]
    </div>

    <h3>4.3 Characterization of Mechanical Equilibrium</h3>
    <table>
      <thead>
        <tr>
          <th>Equilibrium Type</th>
          <th>1st Derivative (Net Force)</th>
          <th>2nd Derivative (Curvature)</th>
          <th>Potential Energy Behavior</th>
          <th>Physical Analogy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Stable Equilibrium</strong></td>
          <td><code>dU/dx = 0</code> (F = 0)</td>
          <td><code>d&sup2;U/dx&sup2; &gt; 0</code> (Positive)</td>
          <td>Potential energy is at a <strong>local minimum</strong></td>
          <td>Marble at the bottom of a spherical bowl</td>
        </tr>
        <tr>
          <td><strong>Unstable Equilibrium</strong></td>
          <td><code>dU/dx = 0</code> (F = 0)</td>
          <td><code>d&sup2;U/dx&sup2; &lt; 0</code> (Negative)</td>
          <td>Potential energy is at a <strong>local maximum</strong></td>
          <td>Marble balanced precariously on top of an inverted bowl</td>
        </tr>
        <tr>
          <td><strong>Neutral Equilibrium</strong></td>
          <td><code>dU/dx = 0</code> (F = 0)</td>
          <td><code>d&sup2;U/dx&sup2; = 0</code> (Zero)</td>
          <td>Potential energy is <strong>constant</strong></td>
          <td>Marble resting on a horizontal frictionless surface</td>
        </tr>
      </tbody>
    </table>

    <h2>5. Principle of Conservation of Mechanical Energy</h2>
    <div class="key-stmt">
      <strong>Law of Conservation of Mechanical Energy:</strong> In an isolated mechanical system where only conservative forces perform work, the total mechanical energy (sum of kinetic and potential energy) remains invariant over time: <code>E = E<sub>k</sub> + E<sub>p</sub> = Constant</code>.
    </div>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch5/fig-5-6a-conservation-energy.webp" alt="Total energy remains constant as body falls" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 5.6a</span>
        Conservation of Mechanical Energy: Continuous interchange between potential energy (PE = mgh) and kinetic energy (KE = &frac12;mv&sup2;) throughout vertical trajectory.
      </div>
    </div>

    <h3>5.1 Analytical Proof for a Freely Falling Body (Classic NEB Long Question)</h3>
    <p>Consider a body of mass m released from rest at point A situated at height h above the ground. Let point B be an intermediate position after falling through vertical distance x, and point C be the position just prior to impact at the ground.</p>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch5/fig-5-6b-free-fall-conservation.webp" alt="Analytical Positions A, B, C of Freely Falling Body" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 5.6b</span>
        Evaluation points for free fall: Point A (top, h), Point B (intermediate, h&minus;x), Point C (ground level, 0).
      </div>
    </div>

    <div class="step-box">
      <div class="step-title">Complete Mathematical Proof of Free-Fall Energy Conservation</div>
      <div class="step">
        <span><strong>At Position A (Initial Top, Height = h):</strong><br/>
        Initial velocity u = 0 &rArr; Kinetic Energy: <code>E<sub>kA</sub> = &frac12; m (0)&sup2; = 0</code><br/>
        Potential Energy: <code>E<sub>pA</sub> = mgh</code><br/>
        <strong>Total Energy E<sub>A</sub> = E<sub>kA</sub> + E<sub>pA</sub> = 0 + mgh = mgh</strong> &emsp; &mdash; (Equation 1)</span>
      </div>
      <div class="step">
        <span><strong>At Position B (Intermediate Point, Fallen Distance = x, Height = h &minus; x):</strong><br/>
        Using kinematic equation v<sub>B</sub>&sup2; = u&sup2; + 2gx = 0 + 2gx = 2gx.<br/>
        Kinetic Energy: <code>E<sub>kB</sub> = &frac12; m v<sub>B</sub>&sup2; = &frac12; m (2gx) = mgx</code><br/>
        Potential Energy: <code>E<sub>pB</sub> = mg(h &minus; x) = mgh &minus; mgx</code><br/>
        <strong>Total Energy E<sub>B</sub> = E<sub>kB</sub> + E<sub>pB</sub> = mgx + (mgh &minus; mgx) = mgh</strong> &emsp; &mdash; (Equation 2)</span>
      </div>
      <div class="step">
        <span><strong>At Position C (Just Before Striking Ground, Fallen Distance = h, Height = 0):</strong><br/>
        Using kinematic equation v<sub>C</sub>&sup2; = u&sup2; + 2gh = 0 + 2gh = 2gh.<br/>
        Kinetic Energy: <code>E<sub>kC</sub> = &frac12; m v<sub>C</sub>&sup2; = &frac12; m (2gh) = mgh</code><br/>
        Potential Energy: <code>E<sub>pC</sub> = mg(0) = 0</code><br/>
        <strong>Total Energy E<sub>C</sub> = E<sub>kC</sub> + E<sub>pC</sub> = mgh + 0 = mgh</strong> &emsp; &mdash; (Equation 3)</span>
      </div>
    </div>

    <p>Since <code>E<sub>A</sub> = E<sub>B</sub> = E<sub>C</sub> = mgh = Constant</code>, the total mechanical energy is strictly conserved at all points of the trajectory.</p>

    <!-- Interactive-look SVG: Energy vs Height Plot -->
    <div class="diagram-box">
      <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" class="diagram">
        <defs>
          <marker id="ch5-arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
          </marker>
        </defs>
        <rect width="700" height="280" rx="12" fill="#090d16" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        
        <!-- Axes -->
        <line x1="90" y1="230" x2="640" y2="230" stroke="#64748b" stroke-width="2" marker-end="url(#ch5-arr2)"/>
        <line x1="90" y1="230" x2="90" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#ch5-arr2)"/>
        <text x="645" y="235" fill="#94a3b8" font-size="13" font-weight="600">Height y above ground (m)</text>
        <text x="30" y="35" fill="#94a3b8" font-size="13" font-weight="600">Energy (Joules)</text>

        <!-- Total Energy Line E = mgh -->
        <line x1="90" y1="70" x2="580" y2="70" stroke="#e2e8f0" stroke-width="3" stroke-dasharray="6,6"/>
        <text x="590" y="75" fill="#e2e8f0" font-size="13" font-weight="bold">Total E = mgh</text>

        <!-- PE Line (Linear rising with height) -->
        <line x1="90" y1="230" x2="580" y2="70" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round"/>
        <text x="420" y="110" fill="#ef4444" font-size="13" font-weight="bold">PE = mgy</text>

        <!-- KE Line (Linear dropping with height) -->
        <line x1="90" y1="70" x2="580" y2="230" stroke="#10b981" stroke-width="3.5" stroke-linecap="round"/>
        <text x="210" y="110" fill="#10b981" font-size="13" font-weight="bold">KE = mg(h&minus;y)</text>

        <!-- Intersection point at y = h/2 -->
        <circle cx="335" cy="150" r="6" fill="#fb923c" stroke="#ffffff" stroke-width="2"/>
        <line x1="335" y1="150" x2="335" y2="230" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="3,3"/>
        <text x="300" y="250" fill="#fb923c" font-size="12" font-weight="bold">y = h/2 (PE = KE)</text>
        <text x="345" y="150" fill="#fb923c" font-size="12" font-weight="bold">E/2</text>
      </svg>
      <div class="diagram-caption">
        <span class="tag">Symmetry Curve</span>
        Mechanical Energy Partitioning vs Height: Linear trade-off between PE and KE. At midpoint y = h/2, exact equipartition occurs (PE = KE = &frac12; mgh).
      </div>
    </div>

    <h3>5.2 Motion in a Vertical Circle (High-Yield NEB Board Derivation)</h3>
    <p>A mass m tied to a light inextensible string of radius r revolves in a vertical circle under gravity. Energy conservation combined with centripetal force yields critical velocity and tension thresholds:</p>

    <div class="formula-box">
      <span class="formula-label">Vertical Loop Critical Velocities &amp; String Tensions</span>
      <strong>Top Position (H):</strong> Minimum speed to complete loop (T<sub>top</sub> &ge; 0): <code>v<sub>top</sub> = &radic;(gr)</code><br/>
      <strong>Bottom Position (L):</strong> Minimum required speed: <code>v<sub>bottom</sub> = &radic;(5gr)</code><br/>
      <strong>Mid/Horizontal Position (M):</strong> Minimum speed: <code>v<sub>mid</sub> = &radic;(3gr)</code><br/>
      <strong>Tension Difference:</strong> <code>T<sub>bottom</sub> &minus; T<sub>top</sub> = 6mg</code> (Always invariant of radius!)
    </div>

    <h2>6. Conservative vs Non-Conservative Forces</h2>
    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch5/fig-5-9-conservative-force-path.webp" alt="Work done along different paths between initial and final points" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 5.9</span>
        Path Independence: In a conservative field, work done along Path 1, Path 2, or Path 3 depends solely on initial point A and final point B: W₁ = W₂ = W₃.
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Criterion</th>
          <th>Conservative Force</th>
          <th>Non-Conservative (Dissipative) Force</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Path Dependence</strong></td>
          <td>Work done is strictly <strong>independent of path</strong> followed; depends only on end points.</td>
          <td>Work done is strictly <strong>dependent on trajectory path</strong> followed.</td>
        </tr>
        <tr>
          <td><strong>Closed-Loop Work</strong></td>
          <td>Work done over any closed cycle is zero: <code>&oint; &vec;F &middot; d&vec;r = 0</code>.</td>
          <td>Work done over a closed loop is non-zero: <code>&oint; &vec;F &middot; d&vec;r &ne; 0</code> (always dissipated).</td>
        </tr>
        <tr>
          <td><strong>Energy Conversion</strong></td>
          <td>Reversible conversion between Kinetic and Potential energy; Mechanical energy conserved.</td>
          <td>Irreversible dissipation of mechanical energy into heat, sound, light, or internal deformation.</td>
        </tr>
        <tr>
          <td><strong>Potential Energy Concept</strong></td>
          <td>Potential energy function U(&vec;r) exists such that <code>&vec;F = &minus;&nabla;U</code>.</td>
          <td>No potential energy function can ever be defined.</td>
        </tr>
        <tr>
          <td><strong>Curriculum Examples</strong></td>
          <td>Gravitational force, Electrostatic force, Elastic spring force, Magnetic force.</td>
          <td>Kinetic &amp; static friction, Viscous drag, Air drag, Damping resistance.</td>
        </tr>
      </tbody>
    </table>

    <h2>7. Collisions: One-Dimensional Elastic &amp; Inelastic Impacts</h2>
    <p>A <strong>collision</strong> is an intense physical interaction between two or more bodies occurring over a short time interval, resulting in substantial exchange of momentum and energy through internal impulsive forces.</p>

    <h3>7.1 Classification of Collisions &amp; Coefficient of Restitution</h3>
    <p>The <strong>Coefficient of Restitution (e)</strong> measures the elasticity of impact, defined as the ratio of the relative speed of separation after collision to the relative speed of approach before collision:</p>

    <div class="formula-box">
      <span class="formula-label">Coefficient of Restitution</span>
      e = (Relative Speed of Separation) / (Relative Speed of Approach) = (v<sub>2</sub> &minus; v<sub>1</sub>) / (u<sub>1</sub> &minus; u<sub>2</sub>)
    </div>

    <ul>
      <li><strong>Perfectly Elastic Collision (e = 1):</strong> Linear momentum conserved; Kinetic energy conserved; Mechanical energy fully retained (e.g. atomic particle collisions, billiard balls approx).</li>
      <li><strong>Inelastic Collision (0 &lt; e &lt; 1):</strong> Linear momentum conserved; Kinetic energy is <em>not</em> conserved (partially converted to heat/sound/deformation).</li>
      <li><strong>Perfectly Inelastic Collision (e = 0):</strong> Bodies stick together and move with a single common composite velocity V<sub>com</sub>; Maximum kinetic energy dissipation (e.g. bullet embedding into target, clay dropping to floor).</li>
    </ul>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch5/fig-5-16-inelastic-collision.webp" alt="Car crash illustrating inelastic impact with deformation" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 5.16</span>
        Inelastic Collision: Automobile impact where kinetic energy is permanently dissipated through plastic deformation and acoustic waves.
      </div>
    </div>

    <h3>7.2 One-Dimensional Elastic Collision: Step-by-Step Velocity Derivation</h3>
    <p>Consider two smooth spherical masses m<sub>1</sub> and m<sub>2</sub> travelling along a straight line with initial velocities u<sub>1</sub> and u<sub>2</sub> (with u<sub>1</sub> &gt; u<sub>2</sub>). After head-on collision, their final velocities are v<sub>1</sub> and v<sub>2</sub>.</p>

    <div class="diagram-box">
      <img src="../public/images/notes/physics/ch5/fig-5-17-elastic-collision-1d.webp" alt="One dimensional elastic collision before and after impact" loading="lazy" />
      <div class="diagram-caption">
        <span class="tag">Textbook Fig 5.17</span>
        Head-on One-Dimensional Elastic Collision: State before impact (u₁, u₂), during collision, and after separation (v₁, v₂).
      </div>
    </div>

    <div class="step-box">
      <div class="step-title">Comprehensive Derivation of Final Velocities v₁ and v₂</div>
      <div class="step">
        <span><strong>1. Conservation of Linear Momentum:</strong><br/>
        <code>m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub> = m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub></code><br/>
        Rearranging: <code>m<sub>1</sub>(u<sub>1</sub> &minus; v<sub>1</sub>) = m<sub>2</sub>(v<sub>2</sub> &minus; u<sub>2</sub>)</code> &emsp; &mdash; (Eq. 1)</span>
      </div>
      <div class="step">
        <span><strong>2. Conservation of Kinetic Energy:</strong><br/>
        <code>&frac12; m<sub>1</sub>u<sub>1</sub>&sup2; + &frac12; m<sub>2</sub>u<sub>2</sub>&sup2; = &frac12; m<sub>1</sub>v<sub>1</sub>&sup2; + &frac12; m<sub>2</sub>v<sub>2</sub>&sup2;</code><br/>
        <code>m<sub>1</sub>(u<sub>1</sub>&sup2; &minus; v<sub>1</sub>&sup2;) = m<sub>2</sub>(v<sub>2</sub>&sup2; &minus; u<sub>2</sub>&sup2;)</code><br/>
        Factoring difference of squares: <code>m<sub>1</sub>(u<sub>1</sub> &minus; v<sub>1</sub>)(u<sub>1</sub> + v<sub>1</sub>) = m<sub>2</sub>(v<sub>2</sub> &minus; u<sub>2</sub>)(v<sub>2</sub> + u<sub>2</sub>)</code> &emsp; &mdash; (Eq. 2)</span>
      </div>
      <div class="step">
        <span><strong>3. Dividing Eq. 2 by Eq. 1:</strong><br/>
        <code>u<sub>1</sub> + v<sub>1</sub> = v<sub>2</sub> + u<sub>2</sub></code> &rArr; <strong>u<sub>1</sub> &minus; u<sub>2</sub> = v<sub>2</sub> &minus; v<sub>1</sub></strong> &emsp; &mdash; (Eq. 3)<br/>
        <em>Fundamental Theorem:</em> In a 1D elastic collision, the relative speed of approach equals the relative speed of separation (e = 1).</span>
      </div>
      <div class="step">
        <span><strong>4. Substituting v₂ into Momentum Equation to find v₁:</strong><br/>
        From Eq. 3: <code>v<sub>2</sub> = u<sub>1</sub> &minus; u<sub>2</sub> + v<sub>1</sub></code>. Substituting into Eq. 1:<br/>
        <code>m<sub>1</sub>u<sub>1</sub> + m<sub>2</sub>u<sub>2</sub> = m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>(u<sub>1</sub> &minus; u<sub>2</sub> + v<sub>1</sub>)</code><br/>
        <code>(m<sub>1</sub> &minus; m<sub>2</sub>)u<sub>1</sub> + 2m<sub>2</sub>u<sub>2</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>1</sub></code></span>
      </div>
    </div>

    <div class="formula-box">
      <span class="formula-label">Master 1D Elastic Collision Velocity Formulas</span>
      v<sub>1</sub> = [ (m<sub>1</sub> &minus; m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub> + [ 2m<sub>2</sub> / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>2</sub><br/>
      v<sub>2</sub> = [ 2m<sub>1</sub> / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub> + [ (m<sub>2</sub> &minus; m<sub>1</sub>) / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>2</sub>
    </div>

    <h3>7.3 Crucial Special Cases Analyzed in NEB Exams</h3>
    <table>
      <thead>
        <tr>
          <th>Physical Case Condition</th>
          <th>Resulting Velocities</th>
          <th>Physical Consequence &amp; Practical Application</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Equal Masses (m₁ = m₂)</strong></td>
          <td><code>v₁ = u₂</code> and <code>v₂ = u₁</code></td>
          <td><strong>Complete Velocity Exchange:</strong> The bodies directly swap velocities upon impact (e.g. billiard balls).</td>
        </tr>
        <tr>
          <td><strong>Equal Masses with Target at Rest (m₁ = m₂, u₂ = 0)</strong></td>
          <td><code>v₁ = 0</code> and <code>v₂ = u₁</code></td>
          <td>Projectile comes to dead stop; target departs with full incoming projectile speed (Neutron moderation in nuclear reactors by paraffin/heavy water).</td>
        </tr>
        <tr>
          <td><strong>Massive Projectile hits Light Target (m₁ &gg; m₂, u₂ = 0)</strong></td>
          <td><code>v₁ &approx; u₁</code> and <code>v₂ &approx; 2u₁</code></td>
          <td>Heavy body continues essentially unaffected; light target recoils forward with <strong>double the projectile's incoming speed</strong>.</td>
        </tr>
        <tr>
          <td><strong>Light Projectile hits Massive Target (m₁ &ll; m₂, u₂ = 0)</strong></td>
          <td><code>v₁ &approx; &minus;u₁</code> and <code>v₂ &approx; 0</code></td>
          <td>Light body rebounds backwards with same speed (elastic ball bouncing off rigid floor/wall).</td>
        </tr>
      </tbody>
    </table>

    <h3>7.4 Kinetic Energy Loss in Completely Inelastic Collision</h3>
    <p>When mass m<sub>1</sub> moving at u<sub>1</sub> strikes stationary mass m<sub>2</sub> (u<sub>2</sub> = 0) and they fuse together into a common composite mass (m<sub>1</sub> + m<sub>2</sub>) moving at common velocity V:</p>

    <div class="formula-box">
      <span class="formula-label">Common Velocity &amp; Dissipated Energy</span>
      <strong>Common Velocity:</strong> V = (m<sub>1</sub>u<sub>1</sub>) / (m<sub>1</sub> + m<sub>2</sub>)<br/>
      <strong>Kinetic Energy Loss:</strong> &Delta;E<sub>k</sub> = E<sub>k, initial</sub> &minus; E<sub>k, final</sub> = <strong>&frac12; [ (m<sub>1</sub> m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub>&sup2;</strong><br/>
      <strong>Fractional Loss:</strong> &Delta;E<sub>k</sub> / E<sub>k, initial</sub> = m<sub>2</sub> / (m<sub>1</sub> + m<sub>2</sub>)
    </div>

    <h2>8. Comprehensive NEB Board Solved Numerical Bank</h2>

    <div class="example-box">
      <div class="example-title">NEB Numerical 1: Work Done by a Variable Force</div>
      <p><strong>Problem:</strong> A force F = (3x&sup2; &minus; 2x + 7) N acts on an object of mass 2 kg, displacing it rectilinearly from position x = 1 m to x = 4 m. Calculate the total work performed.</p>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Given:</strong> F(x) = 3x&sup2; &minus; 2x + 7; Limits: x<sub>1</sub> = 1 m, x<sub>2</sub> = 4 m.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Formula:</strong> <code>W = &int;<sub>x₁</sub><sup>x₂</sup> F(x) dx</code></div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Integration:</strong> <code>W = &int;₁⁴ (3x&sup2; &minus; 2x + 7) dx = [ x&sup3; &minus; x&sup2; + 7x ]₁⁴</code></div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Evaluation:</strong> Upper limit = 4&sup3; &minus; 4&sup2; + 7(4) = 64 &minus; 16 + 28 = 76 J.<br/>Lower limit = 1&sup3; &minus; 1&sup2; + 7(1) = 7 J.<br/>W = 76 &minus; 7 = <strong>69 Joules</strong>.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Final Answer:</strong> <code>W = 69 J</code></div></div>
    </div>

    <div class="example-box">
      <div class="example-title">NEB Numerical 2: Power and Electricity Billing of a Water Pump</div>
      <p><strong>Problem:</strong> An electric motor-driven pump raises 1200 liters of water per minute from a well of depth 25 m and ejects it with a speed of 10 ms<sup>&minus;1</sup>. If the pump's efficiency is 75%, calculate: (a) Output power, (b) Input electrical power, (c) Electrical units consumed in 3 hours of operation. (Take g = 9.8 ms<sup>&minus;2</sup>, density of water &rho; = 1000 kg/m&sup3;).</p>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Given:</strong> Volume rate V/t = 1200 L/min = 1.2 m&sup3;/60 s = 0.02 m&sup3;/s &rArr; Mass flow rate dm/dt = 20 kg/s; Depth h = 25 m; Exit speed v = 10 ms<sup>&minus;1</sup>; &eta; = 75% = 0.75.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Output Power Calculation:</strong><br/>
      P<sub>out</sub> = (mgh + &frac12; mv&sup2;) / t = (dm/dt)[ gh + &frac12; v&sup2; ]<br/>
      P<sub>out</sub> = 20 &times; [ (9.8 &times; 25) + &frac12; (10)&sup2; ] = 20 &times; [ 245 + 50 ] = 20 &times; 295 = <strong>5900 W = 5.9 kW</strong>.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Input Power:</strong> P<sub>in</sub> = P<sub>out</sub> / &eta; = 5900 / 0.75 = <strong>7866.67 W &approx; 7.87 kW</strong>.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Electrical Energy:</strong> Energy = P<sub>in</sub> (kW) &times; time (hours) = 7.867 kW &times; 3 h = <strong>23.6 kWh (Units)</strong>.</div></div>
    </div>

    <div class="example-box">
      <div class="example-title">NEB Numerical 3: Momentum and Kinetic Energy Percentage Variations</div>
      <p><strong>Problem:</strong> (a) If the linear momentum of a projectile is increased by 40%, find the percentage increase in its kinetic energy. (b) If the kinetic energy of a particle increases by 300%, find the percentage increase in its momentum.</p>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Part (a):</strong> Initial KE: E = p&sup2;/(2m). New momentum p' = p + 0.4p = 1.4p.<br/>
      New KE: E' = (1.4p)&sup2; / (2m) = 1.96 [p&sup2;/(2m)] = 1.96 E.<br/>
      &Delta;E / E = (1.96 E &minus; E) / E = 0.96 &times; 100% = <strong>96% increase</strong>.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Part (b):</strong> New KE: E' = E + 3.0E = 4.0E.<br/>
      Initial p = &radic;(2mE). New p' = &radic;(2m &times; 4E) = 2 &radic;(2mE) = 2p.<br/>
      &Delta;p / p = (2p &minus; p) / p = 1.0 &times; 100% = <strong>100% increase</strong> (Momentum doubles).</div></div>
    </div>

    <div class="example-box">
      <div class="example-title">NEB Numerical 4: Bullet Penetrating a Wooden Target (Work-Energy Theorem)</div>
      <p><strong>Problem:</strong> A 25 g bullet travelling horizontally at 400 ms<sup>&minus;1</sup> penetrates 10 cm into a fixed wooden plank before coming to rest. Determine: (a) The average resistive force exerted by the wood, (b) The velocity of the bullet if the plank had a thickness of only 6 cm.</p>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Given:</strong> m = 0.025 kg; u = 400 ms<sup>&minus;1</sup>; s = 0.10 m; v = 0.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Work-Energy Theorem:</strong> W<sub>net</sub> = &Delta;KE &rArr; &minus;F<sub>avg</sub> &middot; s = 0 &minus; &frac12; m u&sup2;<br/>
      F<sub>avg</sub> &times; 0.10 = &frac12; &times; 0.025 &times; (400)&sup2; = 0.5 &times; 0.025 &times; 160,000 = 2000 J.<br/>
      <code>F<sub>avg</sub> = 2000 / 0.10 = <strong>20,000 N = 20 kN</strong></code>.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Exit Speed for 6 cm Plank:</strong><br/>
      &minus;F<sub>avg</sub> &middot; s' = &frac12; m v'&sup2; &minus; &frac12; m u&sup2;<br/>
      &minus;20,000 &times; 0.06 = &frac12; &times; 0.025 &times; v'&sup2; &minus; 2000<br/>
      &minus;1200 = 0.0125 v'&sup2; &minus; 2000 &rArr; 0.0125 v'&sup2; = 800<br/>
      v'&sup2; = 64,000 &rArr; <code>v' = &radic;64000 &approx; <strong>252.98 ms<sup>&minus;1</sup></strong></code>.</div></div>
    </div>

    <div class="example-box">
      <div class="example-title">NEB Numerical 5: Spring Compression &amp; Incline Energy Balance</div>
      <p><strong>Problem:</strong> A block of mass 3 kg is released from rest at the top of a smooth incline of height h = 4 m. At the bottom of the incline, it slides along a frictionless horizontal track and collides with a horizontal buffer spring of force constant k = 1200 N/m. Find the maximum compression of the spring. (Take g = 9.8 ms<sup>&minus;2</sup>).</p>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Energy Conservation:</strong> Initial Gravitational PE at top = Elastic Potential Energy at max compression x<sub>max</sub>.<br/>
      <code>mgh = &frac12; k x<sub>max</sub>&sup2;</code></div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Calculation:</strong><br/>
      3 &times; 9.8 &times; 4 = &frac12; &times; 1200 &times; x<sub>max</sub>&sup2;<br/>
      117.6 = 600 &times; x<sub>max</sub>&sup2; &rArr; x<sub>max</sub>&sup2; = 117.6 / 600 = 0.196<br/>
      <code>x<sub>max</sub> = &radic;0.196 &approx; <strong>0.443 m = 44.3 cm</strong></code>.</div></div>
    </div>

    <div class="example-box">
      <div class="example-title">NEB Numerical 6: One-Dimensional Elastic Collision of Two Balls</div>
      <p><strong>Problem:</strong> A 0.5 kg steel sphere moving at 6 ms<sup>&minus;1</sup> undergoes a head-on elastic collision with a stationary 1.5 kg sphere. Find the velocities of both spheres after collision, and determine the fraction of kinetic energy transferred to the target sphere.</p>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Given:</strong> m<sub>1</sub> = 0.5 kg, u<sub>1</sub> = 6 ms<sup>&minus;1</sup>; m<sub>2</sub> = 1.5 kg, u<sub>2</sub> = 0.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Velocity of Sphere 1:</strong><br/>
      v<sub>1</sub> = [ (m<sub>1</sub> &minus; m<sub>2</sub>) / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub> = [ (0.5 &minus; 1.5) / (0.5 + 1.5) ] &times; 6 = [&minus;1 / 2] &times; 6 = <strong>&minus;3.0 ms<sup>&minus;1</sup></strong> (Rebounds backwards).</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Velocity of Sphere 2:</strong><br/>
      v<sub>2</sub> = [ 2m<sub>1</sub> / (m<sub>1</sub> + m<sub>2</sub>) ] u<sub>1</sub> = [ (2 &times; 0.5) / 2.0 ] &times; 6 = [ 1 / 2 ] &times; 6 = <strong>+3.0 ms<sup>&minus;1</sup></strong> (Moves forwards).</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Fractional KE Transferred:</strong><br/>
      Initial KE = &frac12; m<sub>1</sub> u<sub>1</sub>&sup2; = 0.5 &times; 0.5 &times; 36 = 9.0 J.<br/>
      Target KE = &frac12; m<sub>2</sub> v<sub>2</sub>&sup2; = 0.5 &times; 1.5 &times; 9 = 6.75 J.<br/>
      Fraction = 6.75 / 9.0 = <strong>0.75 = 75%</strong>.</div></div>
    </div>

    <div class="example-box">
      <div class="example-title">NEB Numerical 7: Ballistic Pendulum (Perfectly Inelastic Impact)</div>
      <p><strong>Problem:</strong> A bullet of mass 20 g is fired horizontally with speed v into a wooden block of mass 1.98 kg suspended by a light string of length 1.5 m. The bullet embeds into the block and the combined system swings upward through an arc of angle &theta; = 60&deg;. Calculate the initial speed v of the bullet. (Take g = 9.8 ms<sup>&minus;2</sup>).</p>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Vertical Rise Height:</strong> h = L(1 &minus; cos&theta;) = 1.5 &times; (1 &minus; cos 60&deg;) = 1.5 &times; 0.5 = 0.75 m.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Velocity of Combined System immediately after impact:</strong><br/>
      Using conservation of energy for swing: &frac12; (m+M) V&sup2; = (m+M)gh &rArr; <code>V = &radic;(2gh) = &radic;(2 &times; 9.8 &times; 0.75) = &radic;14.7 &approx; 3.834 ms<sup>&minus;1</sup></code>.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Linear Momentum Conservation:</strong><br/>
      m &middot; v = (m + M) V &rArr; 0.020 &times; v = (0.020 + 1.980) &times; 3.834 = 2.000 &times; 3.834 = 7.668<br/>
      <code>v = 7.668 / 0.020 = <strong>383.4 ms<sup>&minus;1</sup></strong></code>.</div></div>
    </div>

    <div class="example-box">
      <div class="example-title">NEB Numerical 8: Mass Whirled in a Vertical Circle</div>
      <p><strong>Problem:</strong> A 0.4 kg stone is attached to a string of length 0.8 m and rotated in a vertical circle. If the maximum tension that the string can withstand without snapping is 35 N, determine the maximum safe angular speed of the stone at the bottom of the loop.</p>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Tension at Bottom:</strong> Maximum tension occurs at the lowest point: <code>T<sub>max</sub> = mg + (m v<sub>b</sub>&sup2;) / r = 35 N</code>.</div></div>
      <div class="step-line"><span class="step-arrow">▸</span><div><strong>Calculation:</strong><br/>
      (0.4 &times; 9.8) + (0.4 &times; v<sub>b</sub>&sup2;) / 0.8 = 35<br/>
      3.92 + 0.5 v<sub>b</sub>&sup2; = 35 &rArr; 0.5 v<sub>b</sub>&sup2; = 31.08 &rArr; v<sub>b</sub>&sup2; = 62.16<br/>
      <code>v<sub>b</sub> = &radic;62.16 &approx; <strong>7.884 ms<sup>&minus;1</sup></strong></code><br/>
      Angular velocity: <code>&omega; = v<sub>b</sub> / r = 7.884 / 0.8 = <strong>9.855 rad/s</strong></code>.</div></div>
    </div>

    <h2>9. Master Formulas Blueprint &amp; Examiner Traps</h2>
    <table>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Master Formula</th>
          <th>Key Variable Definitions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Work by Constant Force</strong></td>
          <td><code>W = &vec;F &middot; &vec;s = F s cos&theta;</code></td>
          <td>&theta; = angle between &vec;F and &vec;s</td>
        </tr>
        <tr>
          <td><strong>Work by Variable Force</strong></td>
          <td><code>W = &int; F(x) dx = Area under F&ndash;x curve</code></td>
          <td>Area above x-axis is +W; below is &minus;W</td>
        </tr>
        <tr>
          <td><strong>Spring Elastic Potential</strong></td>
          <td><code>U<sub>s</sub> = &frac12; k x&sup2;</code></td>
          <td>k = spring stiffness constant (N/m), x = extension</td>
        </tr>
        <tr>
          <td><strong>Power</strong></td>
          <td><code>P = dW/dt = &vec;F &middot; &vec;v</code></td>
          <td>1 hp = 746 W &bull; 1 kWh = 3.6 &times; 10<sup>6</sup> J</td>
        </tr>
        <tr>
          <td><strong>Work-Energy Theorem</strong></td>
          <td><code>W<sub>net</sub> = &Delta;KE = &frac12; mv&sup2; &minus; &frac12; mu&sup2;</code></td>
          <td>Applies to all forces (internal + external)</td>
        </tr>
        <tr>
          <td><strong>KE &ndash; Momentum Link</strong></td>
          <td><code>E<sub>k</sub> = p&sup2; / (2m) &bull; p = &radic;(2m E<sub>k</sub>)</code></td>
          <td>Light body has greater KE for same momentum</td>
        </tr>
        <tr>
          <td><strong>Conservative Force Gradient</strong></td>
          <td><code>F = &minus; dU/dx</code></td>
          <td>Negative slope of potential curve = force</td>
        </tr>
        <tr>
          <td><strong>Free Fall Critical Speeds</strong></td>
          <td><code>v = &radic;(2gh)</code></td>
          <td>At ground level; independent of falling mass</td>
        </tr>
        <tr>
          <td><strong>Vertical Loop Speeds</strong></td>
          <td><code>v<sub>top</sub> = &radic;(gr) &bull; v<sub>bottom</sub> = &radic;(5gr)</code></td>
          <td>Tension difference: T<sub>bottom</sub> &minus; T<sub>top</sub> = 6mg</td>
        </tr>
        <tr>
          <td><strong>Coefficient of Restitution</strong></td>
          <td><code>e = (v₂ &minus; v₁) / (u₁ &minus; u₂)</code></td>
          <td>e = 1 (elastic), 0 &lt; e &lt; 1 (inelastic), e = 0 (perfect inelastic)</td>
        </tr>
        <tr>
          <td><strong>1D Elastic Collision Velocities</strong></td>
          <td><code>v₁ = [(m₁&minus;m₂)/(m₁+m₂)]u₁ + [2m₂/(m₁+m₂)]u₂</code></td>
          <td>Velocities swap completely if m₁ = m₂</td>
        </tr>
        <tr>
          <td><strong>Inelastic KE Dissipation</strong></td>
          <td><code>&Delta;E<sub>loss</sub> = &frac12; [(m₁m₂)/(m₁+m₂)] (u₁ &minus; u₂)&sup2; (1 &minus; e&sup2;)</code></td>
          <td>Dissipated into heat, deformation, sound</td>
        </tr>
      </tbody>
    </table>

    <div class="exam-callout">
      <div class="exam-title">🔥 Classic NEB Board Traps &amp; Pitfalls to Avoid</div>
      <p>&bull; <strong>Pitfall 1: Normal Force Doing Work:</strong> When an elevator goes upward, does normal reaction perform work on the passenger? YES! Normal reaction acts upwards and displacement is upwards (&theta; = 0&deg;), so W = N &middot; h &gt; 0. Don't confuse this with horizontal walking where &theta; = 90&deg;.<br/>
      &bull; <strong>Pitfall 2: Kinetic Energy cannot be Negative:</strong> Unlike work, velocity, and potential energy (which can be positive, negative, or zero), kinetic energy <code>E<sub>k</sub> = &frac12; mv&sup2; &ge; 0</code> is strictly non-negative.<br/>
      &bull; <strong>Pitfall 3: Linear Momentum vs Kinetic Energy Conservation in Inelastic Collisions:</strong> In ANY collision (elastic or inelastic), total linear momentum is ALWAYS conserved because external force is zero. Only kinetic energy is lost in inelastic collisions.<br/>
      &bull; <strong>Pitfall 4: Spring Cut in Halves:</strong> If a spring of stiffness k is cut into two equal halves, the spring constant of each half becomes <strong>2k</strong> (doubled), NOT k/2!<br/>
      &bull; <strong>Pitfall 5: Tension at Top of Vertical Circle:</strong> For a string, critical speed requires <strong>T &ge; 0</strong> (so v<sub>top</sub> = &radic;gr). But for a light rigid rod rotating in a vertical circle, the rod can support compression, so velocity at top can be <strong>zero</strong> (v<sub>top</sub> = 0, so v<sub>bottom</sub> = &radic;4gr = 2&radic;gr).</p>
    </div>
    `,
  }
];

// Automatically merge Class 12 Math Notes if available
if (typeof window !== 'undefined' && typeof window.registerMathNotes === 'function') {
  window.registerMathNotes();
} else if (typeof window !== 'undefined' && Array.isArray(window.math12Notes)) {
  window.math12Notes.forEach(mNote => {
    const idx = window.staticNotes.findIndex(n => n && n.id === mNote.id);
    if (idx >= 0) {
      window.staticNotes[idx] = mNote;
    } else {
      window.staticNotes.push(mNote);
    }
  });
}

// Automatically merge Class 11 Math Notes if available
if (typeof window !== 'undefined' && Array.isArray(window.math11Notes)) {
  window.math11Notes.forEach(mNote => {
    const idx = window.staticNotes.findIndex(n => n && n.id === mNote.id);
    if (idx >= 0) {
      window.staticNotes[idx] = mNote;
    } else {
      window.staticNotes.push(mNote);
    }
  });
}

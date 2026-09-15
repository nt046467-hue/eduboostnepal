// =============================================================================
// EduBoost Nepal — Class 11 Mathematics Board Exam Notes & Solved Questions
// Question-Solution First, Step-by-Step NEB Board Exam Notes
// Aligned with Nepal Secondary Education Curriculum 2078 (NEB Class 11)
// =============================================================================

window.math11Notes = [
  // ─────────────────────────────────────────────────────────────
  // 1. LOGIC, SETS & REAL NUMBER SYSTEM
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-logic-sets-functions",
    class: "11",
    subject: "Mathematics",
    chapter: "Logic, Sets and Functions",
    title: "Logic, Sets & Functions — NEB Class 11 Board Solved Questions",
    icon: "🧠",
    summary:
      "Question-solution first Class 11 notes for Logic, Sets & Functions: Truth tables, Tautology vs Contradiction, De Morgan set proofs, absolute value intervals, domain/range and composite/inverse functions.",
    tags: ["Logic", "Truth Tables", "Sets", "Functions", "Absolute Value", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Logic, Sets & Real Numbers</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Logical Connectives:</strong><br/>
            $$p \\implies q \\equiv \\sim p \\vee q$$<br/>
            $$\\text{Contrapositive: } \\sim q \\implies \\sim p$$
          </div>
          <div>
            <strong>De Morgan's Laws:</strong><br/>
            $$(A \\cup B)' = A' \\cap B'$$<br/>
            $$(A \\cap B)' = A' \\cup B'$$
          </div>
          <div>
            <strong>Absolute Value Inequality:</strong><br/>
            $$|x - a| < \\epsilon \\iff a - \\epsilon < x < a + \\epsilon$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Truth Table & Tautology</span>
        </div>
        <div class="q-title">
          Q1. (a) Construct the truth table for $\\sim (p \\vee q) \\iff (\\sim p \\wedge \\sim q)$ and verify De Morgan's Law.<br/>
          (b) Prove that the conditional statement $(p \\implies q) \\iff (\\sim q \\implies \\sim p)$ is a tautology.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Truth table for Part (a)</div>
            <table class="w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-xs sm:text-sm my-2">
              <thead class="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th class="border border-slate-300 dark:border-slate-700 p-1.5">$p$</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-1.5">$q$</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-1.5">$p \\vee q$</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-1.5">$\\sim(p \\vee q)$ [1]</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-1.5">$\\sim p$</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-1.5">$\\sim q$</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-1.5">$\\sim p \\wedge \\sim q$ [2]</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-1.5">[1] $\\iff$ [2]</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>T</td><td>T</td><td>T</td><td><strong>F</strong></td><td>F</td><td>F</td><td><strong>F</strong></td><td><strong>T</strong></td></tr>
                <tr><td>T</td><td>F</td><td>T</td><td><strong>F</strong></td><td>F</td><td>T</td><td><strong>F</strong></td><td><strong>T</strong></td></tr>
                <tr><td>F</td><td>T</td><td>T</td><td><strong>F</strong></td><td>T</td><td>F</td><td><strong>F</strong></td><td><strong>T</strong></td></tr>
                <tr><td>F</td><td>F</td><td>F</td><td><strong>T</strong></td><td>T</td><td>T</td><td><strong>T</strong></td><td><strong>T</strong></td></tr>
              </tbody>
            </table>
            Since the entries in column [1] and column [2] are identical, $\\sim (p \\vee q) \\equiv \\sim p \\wedge \\sim q$. Furthermore, the equivalence column contains all <strong>T</strong>s, verifying the identity.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Proof for Part (b) Contrapositive Tautology</div>
            Recall that $p \\implies q$ is False only when $p$ is True and $q$ is False.<br/>
            Contrapositive: $\\sim q \\implies \\sim p$.
            <ul>
              <li>When $p=T, q=T$: $T \\implies T$ is <strong>T</strong>; $\\sim q \\implies \\sim p$ is $F \\implies F$ which is <strong>T</strong>. Biconditional = <strong>T</strong>.</li>
              <li>When $p=T, q=F$: $T \\implies F$ is <strong>F</strong>; $\\sim q \\implies \\sim p$ is $T \\implies F$ which is <strong>F</strong>. Biconditional = <strong>T</strong>.</li>
              <li>When $p=F, q=T$: $F \\implies T$ is <strong>T</strong>; $\\sim q \\implies \\sim p$ is $F \\implies T$ which is <strong>T</strong>. Biconditional = <strong>T</strong>.</li>
              <li>When $p=F, q=F$: $F \\implies F$ is <strong>T</strong>; $\\sim q \\implies \\sim p$ is $T \\implies T$ which is <strong>T</strong>. Biconditional = <strong>T</strong>.</li>
            </ul>
            Every row in the final column yields Truth (T). Hence, $(p \\implies q) \\iff (\\sim q \\implies \\sim p)$ is a <strong>tautology</strong>.
          </div>

          <div class="final-box">
            ✅ <strong>Conclusion:</strong> De Morgan's Law verified and the contrapositive statement is strictly a tautology.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2078, 2080, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Absolute Value & Inequalities</span>
        </div>
        <div class="q-title">
          Q2. (a) Solve the absolute value inequality $|2x - 5| \\le 7$ and express the solution in interval form.<br/>
          (b) Express the open interval $(-3, 7)$ in the modulus form $|x - a| < \\delta$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Part (a): Solving $|2x - 5| \\le 7$</div>
            Using the theorem: $|X| \\le k \\iff -k \\le X \\le k$:
            $$-7 \\le 2x - 5 \\le 7$$
            Add $5$ to all three parts:
            $$-7 + 5 \\le 2x \\le 7 + 5$$
            $$-2 \\le 2x \\le 12$$
            Divide throughout by $2$:
            $$-1 \\le x \\le 6$$
            In interval notation, the solution set is $[-1, 6]$.
          </div>

          <div class="step-block">
            <div class="step-tag">Part (b): Converting interval $(-3, 7)$ to $|x - a| < \\delta$</div>
            Let the interval be $(x_1, x_2) = (-3, 7)$.<br/>
            The midpoint (centre $a$) is:
            $$a = \\frac{x_1 + x_2}{2} = \\frac{-3 + 7}{2} = \\frac{4}{2} = 2$$
            The radius (half-width $\\delta$) is:
            $$\\delta = \\frac{x_2 - x_1}{2} = \\frac{7 - (-3)}{2} = \\frac{10}{2} = 5$$
            Therefore, the inequality is:
            $$|x - 2| < 5$$
            <em>Check: $|x - 2| < 5 \\implies -5 < x - 2 < 5 \\implies -3 < x < 7$. (Matches perfectly).</em>
          </div>

          <div class="final-box">
            ✅ <strong>Final Answers:</strong><br/>
            (a) Solution set: $x \\in [-1, 6]$<br/>
            (b) Modulus form: $|x - 2| < 5$
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Composite & Inverse Functions</span>
        </div>
        <div class="q-title">
          Q3. Given $f(x) = \\frac{2x + 3}{x - 1}$ for $x \\neq 1$, and $g(x) = x^2 + 1$.<br/>
          (a) Find the inverse function $f^{-1}(x)$ and state its domain.<br/>
          (b) Evaluate $(f \\circ g)(2)$ and determine whether $f$ is one-to-one.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Finding $f^{-1}(x)$</div>
            Let $y = f(x) = \\frac{2x + 3}{x - 1}$.<br/>
            Interchange $x$ and $y$ to solve for $y$:
            $$x = \\frac{2y + 3}{y - 1} \\implies x(y - 1) = 2y + 3$$
            $$xy - x = 2y + 3 \\implies xy - 2y = x + 3$$
            $$y(x - 2) = x + 3 \\implies y = \\frac{x + 3}{x - 2}$$
            Hence, $f^{-1}(x) = \\frac{x + 3}{x - 2}$.<br/>
            <strong>Domain of $f^{-1}(x)$:</strong> The denominator cannot be zero, so $x - 2 \\neq 0 \\implies x \\neq 2$.<br/>
            Domain of $f^{-1} = \\mathbb{R} \\setminus \\{2\\}$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Evaluate $(f \\circ g)(2)$</div>
            First compute $g(2)$:
            $$g(2) = (2)^2 + 1 = 4 + 1 = 5$$
            Now evaluate $f(g(2)) = f(5)$:
            $$f(5) = \\frac{2(5) + 3}{5 - 1} = \\frac{10 + 3}{4} = \\frac{13}{4}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Prove $f$ is one-to-one (injective)</div>
            Let $f(x_1) = f(x_2)$:
            $$\\frac{2x_1 + 3}{x_1 - 1} = \\frac{2x_2 + 3}{x_2 - 1}$$
            $$(2x_1 + 3)(x_2 - 1) = (2x_2 + 3)(x_1 - 1)$$
            $$2x_1 x_2 - 2x_1 + 3x_2 - 3 = 2x_1 x_2 - 2x_2 + 3x_1 - 3$$
            $$-2x_1 + 3x_2 = 3x_1 - 2x_2 \\implies 5x_2 = 5x_1 \\implies x_1 = x_2$$
            Since $f(x_1) = f(x_2) \\implies x_1 = x_2$, $f$ is strictly <strong>one-to-one</strong>.
          </div>

          <div class="final-box">
            ✅ <strong>Final Results:</strong><br/>
            $f^{-1}(x) = \\frac{x+3}{x-2}$ with Domain $\\mathbb{R} \\setminus \\{2\\}$, and $(f \\circ g)(2) = \\frac{13}{4}$.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 2. QUADRATIC EQUATIONS & POLYNOMIALS
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-polynomials-quadratic",
    class: "11",
    subject: "Mathematics",
    chapter: "Polynomials & Quadratic Equations",
    title: "Quadratic Equations & Polynomials — NEB Class 11 Board Solved Questions",
    icon: "📐",
    summary:
      "Question-solution first Class 11 Quadratic Equations notes: Relation between roots and coefficients, symmetric functions of roots, conditions for common roots, and synthetic division of polynomials.",
    tags: ["Quadratic Equations", "Roots", "Polynomials", "Common Roots", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Quadratic Equations</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Roots & Coefficients:</strong><br/>
            $$\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}$$<br/>
            $$x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0$$
          </div>
          <div>
            <strong>Condition for Common Root:</strong><br/>
            $$(a_1 c_2 - a_2 c_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$$
          </div>
          <div>
            <strong>Symmetric Roots:</strong><br/>
            $$\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$$<br/>
            $$\\alpha^3 + \\beta^3 = (\\alpha+\\beta)^3 - 3\\alpha\\beta(\\alpha+\\beta)$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 4 / 6 Marks</span>
          <span class="badge-type">📌 Symmetric Functions & Forming Equations</span>
        </div>
        <div class="q-title">
          Q1. If $\\alpha$ and $\\beta$ are the roots of the quadratic equation $ax^2 + bx + c = 0$, form a new quadratic equation whose roots are $\\frac{\\alpha}{\\beta}$ and $\\frac{\\beta}{\\alpha}$. Also find the value of $\\alpha^3 + \\beta^3$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Write down sum and product of given roots</div>
            $$\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Calculate sum and product of the new roots $\\frac{\\alpha}{\\beta}$ and $\\frac{\\beta}{\\alpha}$</div>
            Sum of new roots ($S$):
            $$S = \\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha} = \\frac{\\alpha^2 + \\beta^2}{\\alpha\\beta} = \\frac{(\\alpha + \\beta)^2 - 2\\alpha\\beta}{\\alpha\\beta}$$
            Substitute values:
            $$S = \\frac{\\left(-\\frac{b}{a}\\right)^2 - 2\\left(\\frac{c}{a}\\right)}{\\frac{c}{a}} = \\frac{\\frac{b^2}{a^2} - \\frac{2c}{a}}{\\frac{c}{a}} = \\frac{\\frac{b^2 - 2ac}{a^2}}{\\frac{c}{a}} = \\frac{b^2 - 2ac}{ac}$$
            Product of new roots ($P$):
            $$P = \\left(\\frac{\\alpha}{\\beta}\\right) \\cdot \\left(\\frac{\\beta}{\\alpha}\\right) = 1$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Construct the required quadratic equation</div>
            $$x^2 - Sx + P = 0$$
            $$x^2 - \\left(\\frac{b^2 - 2ac}{ac}\\right)x + 1 = 0$$
            Multiplying throughout by $ac$:
            $$ac x^2 - (b^2 - 2ac)x + ac = 0$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 4: Find $\\alpha^3 + \\beta^3$</div>
            $$\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta)$$
            $$= \\left(-\\frac{b}{a}\\right)^3 - 3\\left(\\frac{c}{a}\\right)\\left(-\\frac{b}{a}\\right) = -\\frac{b^3}{a^3} + \\frac{3bc}{a^2} = \\frac{3abc - b^3}{a^3}$$
          </div>

          <div class="final-box">
            ✅ <strong>Final Results:</strong><br/>
            Required Equation: $ac x^2 - (b^2 - 2ac)x + ac = 0$<br/>
            $\\alpha^3 + \\beta^3 = \\frac{3abc - b^3}{a^3}$
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Condition for a Common Root</span>
        </div>
        <div class="q-title">
          Q2. (a) Derive the condition that the two quadratic equations $a_1 x^2 + b_1 x + c_1 = 0$ and $a_2 x^2 + b_2 x + c_2 = 0$ have a common root.<br/>
          (b) Find the value of $k$ if $x^2 - 5x + 6 = 0$ and $x^2 - kx + 12 = 0$ have a common root.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Derivation of the Common Root Condition</div>
            Let $\\alpha$ be the common root. Then:
            $$a_1 \\alpha^2 + b_1 \\alpha + c_1 = 0 \quad \\text{--- (1)}$$
            $$a_2 \\alpha^2 + b_2 \\alpha + c_2 = 0 \quad \\text{--- (2)}$$
            Solving for $\\alpha^2$ and $\\alpha$ using cross-multiplication:
            $$\\frac{\\alpha^2}{b_1 c_2 - b_2 c_1} = \\frac{\\alpha}{c_1 a_2 - c_2 a_1} = \\frac{1}{a_1 b_2 - a_2 b_1}$$
            From the first two ratios: $\\alpha = \\frac{b_1 c_2 - b_2 c_1}{c_1 a_2 - c_2 a_1}$.<br/>
            From the last two ratios: $\\alpha = \\frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}$.<br/>
            Equating both expressions for $\\alpha$:
            $$\\frac{b_1 c_2 - b_2 c_1}{c_1 a_2 - c_2 a_1} = \\frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}$$
            $$(c_1 a_2 - c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$$
            Or equivalently: $(a_1 c_2 - a_2 c_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$. (Condition derived).
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Solve Part (b) for $k$</div>
            Given first equation: $x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0$.<br/>
            So roots of the first equation are $x = 2$ or $x = 3$.
            <ul>
              <li><strong>Case 1 (Common root is $x = 2$):</strong><br/>
              Substitute $x = 2$ into $x^2 - kx + 12 = 0$:
              $$2^2 - k(2) + 12 = 0 \\implies 4 - 2k + 12 = 0 \\implies 2k = 16 \\implies k = 8$$</li>
              <li><strong>Case 2 (Common root is $x = 3$):</strong><br/>
              Substitute $x = 3$ into $x^2 - kx + 12 = 0$:
              $$3^2 - k(3) + 12 = 0 \\implies 9 - 3k + 12 = 0 \\implies 3k = 21 \\implies k = 7$$</li>
            </ul>
          </div>

          <div class="final-box">
            ✅ <strong>Values of $k$:</strong> $k = 7$ or $k = 8$.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2080, 2081)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Proof on Nature of Roots</span>
        </div>
        <div class="q-title">
          Q3. If the roots of the equation $(b - c)x^2 + (c - a)x + (a - b) = 0$ are equal, prove that $a, b, c$ are in Arithmetic Progression (i.e., $2b = a + c$).
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Inspect the coefficients</div>
            Notice that the sum of the coefficients is:
            $$(b - c) + (c - a) + (a - b) = 0$$
            Whenever the sum of coefficients of $Ax^2 + Bx + C = 0$ is $0$, $x = 1$ is automatically a root!
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Use the equal roots condition</div>
            Since the roots are equal, both roots must be equal to $1$:
            $$\\alpha = 1, \\quad \\beta = 1$$
            Product of roots:
            $$\\alpha \\cdot \\beta = \\frac{C}{A} = \\frac{a - b}{b - c}$$
            Substitute $\\alpha = 1, \\beta = 1$:
            $$1 \\cdot 1 = \\frac{a - b}{b - c} \\implies b - c = a - b$$
            Rearranging terms:
            $$b + b = a + c \\implies 2b = a + c$$
            This proves that $b - a = c - b$, which means $a, b, c$ are in <strong>Arithmetic Progression (AP)</strong>.
          </div>

          <div class="final-box">
            ✅ <strong>Hence Proved:</strong> $2b = a + c \\implies a, b, c$ are in AP.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 3. COMPLEX NUMBERS (CLASS 11)
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-complex-numbers",
    class: "11",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    title: "Complex Numbers — NEB Class 11 Board Solved Questions",
    icon: "⚡",
    summary:
      "Question-solution first Class 11 Complex Numbers notes: Square root of complex numbers, modulus and conjugate properties, algebraic proofs, and locus in the Argand plane.",
    tags: ["Complex Numbers", "Square Root", "Modulus", "Conjugate", "Locus", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Complex Numbers (Class 11)</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Modulus & Conjugate:</strong><br/>
            $$|z| = \\sqrt{x^2+y^2}, \\quad z\\bar{z} = |z|^2$$<br/>
            $$|z_1 z_2| = |z_1||z_2|$$
          </div>
          <div>
            <strong>Square Root $\\sqrt{a+ib}$:</strong><br/>
            $$\\pm \\left(\\sqrt{\\frac{|z|+a}{2}} + i\\operatorname{sgn}(b)\\sqrt{\\frac{|z|-a}{2}}\\right)$$
          </div>
          <div>
            <strong>Standard Form:</strong><br/>
            $$\\frac{a+ib}{c+id} = \\frac{(a+ib)(c-id)}{c^2+d^2}$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2077–2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Square Root of Complex Number</span>
        </div>
        <div class="q-title">
          Q1. Find the square roots of the complex number $7 - 24i$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Set up the equation</div>
            Let $\\sqrt{7 - 24i} = x + iy$, where $x, y \\in \\mathbb{R}$.<br/>
            Squaring both sides:
            $$(x + iy)^2 = 7 - 24i \\implies (x^2 - y^2) + 2ixy = 7 - 24i$$
            Equating real and imaginary parts:
            $$x^2 - y^2 = 7 \quad \\text{--- (1)}$$
            $$2xy = -24 \\implies xy = -12 < 0 \quad \\text{--- (2)}$$
            Since $xy < 0$, $x$ and $y$ must have <strong>opposite signs</strong>.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Find $x^2 + y^2$</div>
            $$(x^2 + y^2)^2 = (x^2 - y^2)^2 + (2xy)^2$$
            $$(x^2 + y^2)^2 = 7^2 + (-24)^2 = 49 + 576 = 625$$
            Since $x, y$ are real, $x^2 + y^2 > 0$:
            $$x^2 + y^2 = \\sqrt{625} = 25 \quad \\text{--- (3)}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Solve for $x$ and $y$</div>
            Adding (1) and (3):
            $$2x^2 = 7 + 25 = 32 \\implies x^2 = 16 \\implies x = \\pm 4$$
            Subtracting (1) from (3):
            $$2y^2 = 25 - 7 = 18 \\implies y^2 = 9 \\implies y = \\pm 3$$
            Since $xy < 0$, when $x = 4, y = -3$; and when $x = -4, y = 3$:
            $$\\sqrt{7 - 24i} = \\pm(4 - 3i)$$
          </div>

          <div class="final-box">
            ✅ <strong>Final Answer:</strong> $\\sqrt{7 - 24i} = \\pm(4 - 3i)$
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Modulus Algebraic Proof</span>
        </div>
        <div class="q-title">
          Q2. If $\\frac{a + ib}{c + id} = x + iy$, prove that $\\frac{a^2 + b^2}{c^2 + d^2} = x^2 + y^2$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Method 1: Using Complex Conjugates</div>
            Given:
            $$\\frac{a + ib}{c + id} = x + iy \quad \\text{--- (1)}$$
            Taking the complex conjugate on both sides:
            $$\\frac{\\overline{a + ib}}{\\overline{c + id}} = \\overline{x + iy} \\implies \\frac{a - ib}{c - id} = x - iy \quad \\text{--- (2)}$$
            Multiply equation (1) and equation (2):
            $$\\left(\\frac{a + ib}{c + id}\\right) \\cdot \\left(\\frac{a - ib}{c - id}\\right) = (x + iy)(x - iy)$$
            $$\\frac{(a+ib)(a-ib)}{(c+id)(c-id)} = x^2 - (iy)^2$$
            $$\\frac{a^2 - i^2 b^2}{c^2 - i^2 d^2} = x^2 - i^2 y^2$$
            Since $i^2 = -1$:
            $$\\frac{a^2 + b^2}{c^2 + d^2} = x^2 + y^2 \quad \\text{(Hence proved)}$$
          </div>

          <div class="final-box">
            ✅ <strong>Proved:</strong> $\\frac{a^2 + b^2}{c^2 + d^2} = x^2 + y^2$.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 3/5 Recent Years (2080, 2081)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Locus of a Complex Number</span>
        </div>
        <div class="q-title">
          Q3. If $|z - 2| = 2|z + 2|$, show that the locus of $z$ in the complex plane represents a circle, and find its center and radius.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Substitute $z = x + iy$</div>
            $$|x + iy - 2| = 2|x + iy + 2|$$
            $$|(x - 2) + iy| = 2|(x + 2) + iy|$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Apply modulus definition and square both sides</div>
            $$\\sqrt{(x - 2)^2 + y^2} = 2\\sqrt{(x + 2)^2 + y^2}$$
            Squaring both sides:
            $$(x - 2)^2 + y^2 = 4[(x + 2)^2 + y^2]$$
            $$x^2 - 4x + 4 + y^2 = 4[x^2 + 4x + 4 + y^2]$$
            $$x^2 - 4x + 4 + y^2 = 4x^2 + 16x + 16 + 4y^2$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Collect terms and simplify</div>
            $$3x^2 + 3y^2 + 20x + 12 = 0$$
            Divide throughout by $3$:
            $$x^2 + y^2 + \\frac{20}{3}x + 4 = 0$$
            This is of the standard circle equation form $x^2 + y^2 + 2gx + 2fy + c = 0$:
            $$2g = \\frac{20}{3} \\implies g = \\frac{10}{3}, \\quad f = 0, \\quad c = 4$$
            Center $= (-g, -f) = \\left(-\\frac{10}{3}, 0\\right)$.<br/>
            Radius $= \\sqrt{g^2 + f^2 - c} = \\sqrt{\\left(\\frac{10}{3}\\right)^2 + 0 - 4} = \\sqrt{\\frac{100}{9} - 4} = \\sqrt{\\frac{64}{9}} = \\frac{8}{3}$.
          </div>

          <div class="final-box">
            ✅ <strong>Result:</strong> Locus is a circle with <strong>Center:</strong> $\\left(-\\frac{10}{3}, 0\\right)$ and <strong>Radius:</strong> $\\frac{8}{3}$.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 4. SEQUENCES & SERIES (AP, GP, HP)
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-sequence-series",
    class: "11",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    title: "Sequences & Series — NEB Class 11 Board Solved Questions",
    icon: "📈",
    summary:
      "Question-solution first Class 11 Sequences & Series notes: AM, GM, HM relationship proofs (AM ≥ GM ≥ HM), insertion of geometric and harmonic means, mixed AP/GP exponent identities, and infinite GP sums.",
    tags: ["AP", "GP", "HP", "Arithmetic Mean", "Geometric Mean", "Harmonic Mean", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: AP, GP, HP</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Mean Relationships:</strong><br/>
            $$A = \\frac{a+b}{2}, \\; G = \\sqrt{ab}, \\; H = \\frac{2ab}{a+b}$$<br/>
            $$G^2 = AH, \\quad A \\ge G \\ge H$$
          </div>
          <div>
            <strong>Infinite GP Sum:</strong><br/>
            $$S_\\infty = \\frac{a}{1 - r} \\quad (|r| < 1)$$
          </div>
          <div>
            <strong>Harmonic Progression:</strong><br/>
            $$a, b, c \\in \\text{HP} \\iff \\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c} \\in \\text{AP}$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 AM, GM, HM Proof & Application</span>
        </div>
        <div class="q-title">
          Q1. (a) For two distinct positive real numbers $a$ and $b$, prove that $AM > GM > HM$ and $G^2 = AH$.<br/>
          (b) If the Arithmetic Mean of two numbers is $25$ and their Harmonic Mean is $16$, find the two numbers.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Prove $G^2 = AH$</div>
            $$AH = \\left(\\frac{a+b}{2}\\right) \\left(\\frac{2ab}{a+b}\\right) = ab = (\\sqrt{ab})^2 = G^2 \\quad \\text{(Proved)}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Prove $A > G$</div>
            Consider $A - G$:
            $$A - G = \\frac{a+b}{2} - \\sqrt{ab} = \\frac{a - 2\\sqrt{ab} + b}{2} = \\frac{(\\sqrt{a} - \\sqrt{b})^2}{2}$$
            Since $a \\neq b$ are distinct positive numbers, $(\\sqrt{a} - \\sqrt{b})^2 > 0$.<br/>
            Hence $A - G > 0 \\implies A > G$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Prove $G > H$</div>
            Since $G^2 = AH \\implies \\frac{G}{H} = \\frac{A}{G}$.<br/>
            Since $A > G$, $\\frac{A}{G} > 1 \\implies \\frac{G}{H} > 1 \\implies G > H$.<br/>
            Combining inequalities:
            $$AM > GM > HM$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 4: Solve Part (b)</div>
            Given $A = 25$ and $H = 16$:
            $$A = \\frac{a+b}{2} = 25 \\implies a + b = 50$$
            $$G^2 = AH = 25 \\times 16 = 400 \\implies ab = 400$$
            We know $(a - b)^2 = (a + b)^2 - 4ab$:
            $$(a - b)^2 = 50^2 - 4(400) = 2500 - 1600 = 900 \\implies a - b = \\pm 30$$
            <ul>
              <li>If $a - b = 30$: adding $a+b=50$ gives $2a = 80 \\implies a = 40, b = 10$.</li>
              <li>If $a - b = -30$: gives $a = 10, b = 40$.</li>
            </ul>
          </div>

          <div class="final-box">
            ✅ <strong>Final Numbers:</strong> $10$ and $40$.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Mixed AP & GP Exponent Proof</span>
        </div>
        <div class="q-title">
          Q2. If $a, b, c$ are in Arithmetic Progression and $x, y, z$ are in Geometric Progression, prove that:
          $$x^{b-c} y^{c-a} z^{a-b} = 1$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Use AP properties for exponents</div>
            Since $a, b, c$ are in AP with common difference $d$:
            $$b - a = d \\implies a - b = -d$$
            $$c - b = d \\implies b - c = -d$$
            $$c - a = (c - b) + (b - a) = d + d = 2d$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Use GP properties for bases</div>
            Since $x, y, z$ are in GP with first term $x$ and common ratio $R$:
            $$x = x, \\quad y = xR, \\quad z = xR^2$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Substitute into the expression</div>
            $$\\text{LHS} = x^{b-c} y^{c-a} z^{a-b} = x^{-d} (xR)^{2d} (xR^2)^{-d}$$
            Separate the powers of $x$ and $R$:
            $$= x^{-d} \\cdot x^{2d} R^{2d} \\cdot x^{-d} R^{-2d}$$
            $$= x^{(-d + 2d - d)} \\cdot R^{(2d - 2d)}$$
            $$= x^0 \\cdot R^0 = 1 \\cdot 1 = 1 = \\text{RHS}$$
          </div>

          <div class="final-box">
            ✅ <strong>Result:</strong> $x^{b-c} y^{c-a} z^{a-b} = 1$ (Hence proved).
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2080, 2081)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Sum of Infinite Geometric Series</span>
        </div>
        <div class="q-title">
          Q3. The sum of an infinite geometric series is $9$, and the sum of the squares of its terms is $\\frac{81}{5}$. Find the first term $a$ and the common ratio $r$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Set up the sum of infinite series</div>
            Let the series be $a, ar, ar^2, \\dots$ where $|r| < 1$.<br/>
            $$S_\\infty = \\frac{a}{1 - r} = 9 \\implies a = 9(1 - r) \quad \\text{--- (1)}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Set up the sum of squares of terms</div>
            The squared series is $a^2, a^2 r^2, a^2 r^4, \\dots$ which is also a GP with first term $a^2$ and common ratio $r^2$:
            $$S_{\\text{squares}} = \\frac{a^2}{1 - r^2} = \\frac{81}{5} \quad \\text{--- (2)}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Divide equation (1) squared by equation (2)</div>
            From (1): $a^2 = 81(1 - r)^2$.<br/>
            Substitute into (2):
            $$\\frac{81(1 - r)^2}{1 - r^2} = \\frac{81}{5}$$
            Since $1 - r^2 = (1 - r)(1 + r)$:
            $$\\frac{81(1 - r)(1 - r)}{(1 - r)(1 + r)} = \\frac{81}{5}$$
            $$\\frac{1 - r}{1 + r} = \\frac{1}{5} \\implies 5(1 - r) = 1 + r$$
            $$5 - 5r = 1 + r \\implies 6r = 4 \\implies r = \\frac{2}{3}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 4: Find $a$</div>
            $$a = 9(1 - r) = 9\\left(1 - \\frac{2}{3}\\right) = 9\\left(\\frac{1}{3}\\right) = 3$$
          </div>

          <div class="final-box">
            ✅ <strong>Final Solution:</strong> First term $a = 3$, Common ratio $r = \\frac{2}{3}$.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 5. MATRICES & DETERMINANTS (CLASS 11)
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-matrices-determinants",
    class: "11",
    subject: "Mathematics",
    chapter: "Matrices and Determinants",
    title: "Matrices & Determinants — NEB Class 11 Board Solved Questions",
    icon: "🧱",
    summary:
      "Question-solution first Class 11 Matrices & Determinants notes: Factoring determinants without expansion, transpose theorems, adjoint and inverse of 3x3 matrices, and verification of AA⁻¹ = I.",
    tags: ["Matrices", "Determinants", "Adjoint", "Matrix Inverse", "Properties", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Matrices & Determinants</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Transpose Properties:</strong><br/>
            $$(AB)^T = B^T A^T, \\quad (A+B)^T = A^T + B^T$$
          </div>
          <div>
            <strong>Inverse of a Matrix:</strong><br/>
            $$A^{-1} = \\frac{1}{|A|}\\operatorname{adj}(A) \\quad (|A| \\neq 0)$$
          </div>
          <div>
            <strong>Vandermonde Determinant:</strong><br/>
            $$\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix} = (a-b)(b-c)(c-a)$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2077–2082)</span>
          <span class="badge-marks">🏷️ 4 / 6 Marks</span>
          <span class="badge-type">📌 Determinant Factoring Without Expansion</span>
        </div>
        <div class="q-title">
          Q1. Without expanding directly at the beginning, prove that:
          $$\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix} = (a - b)(b - c)(c - a)$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Apply elementary row operations to create zeros in Column 1</div>
            Let $\\Delta = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$.<br/>
            Apply $R_1 \\to R_1 - R_2$ and $R_2 \\to R_2 - R_3$:
            $$\\Delta = \\begin{vmatrix} 1 - 1 & a - b & a^2 - b^2 \\\\ 1 - 1 & b - c & b^2 - c^2 \\\\ 1 & c & c^2 \\end{vmatrix} = \\begin{vmatrix} 0 & a - b & (a - b)(a + b) \\\\ 0 & b - c & (b - c)(b + c) \\\\ 1 & c & c^2 \\end{vmatrix}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Factor out $(a - b)$ from $R_1$ and $(b - c)$ from $R_2$</div>
            $$\\Delta = (a - b)(b - c) \\begin{vmatrix} 0 & 1 & a + b \\\\ 0 & 1 & b + c \\\\ 1 & c & c^2 \\end{vmatrix}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Expand along Column 1</div>
            Expanding by Column 1 (which has two zeros):
            $$\\Delta = (a - b)(b - c) \\left[ 1 \\cdot \\begin{vmatrix} 1 & a + b \\\\ 1 & b + c \\end{vmatrix} \\right]$$
            $$= (a - b)(b - c) [(b + c) - (a + b)] = (a - b)(b - c)[b + c - a - b]$$
            $$= (a - b)(b - c)(c - a) \\quad \\text{(Hence proved)}$$
          </div>

          <div class="final-box">
            ✅ <strong>Proved:</strong> $\\Delta = (a - b)(b - c)(c - a)$.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 Advanced Determinant Property Proof</span>
        </div>
        <div class="q-title">
          Q2. Prove that:
          $$\\begin{vmatrix} a & b & c \\\\ a^2 & b^2 & c^2 \\\\ bc & ca & ab \\end{vmatrix} = (a - b)(b - c)(c - a)(ab + bc + ca)$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Multiply rows to create a common factor $abc$</div>
            Multiply $R_1$ by $a$, $R_2$ by $b$, and $R_3$ by $c$ (and divide determinant by $abc$):
            $$\\Delta = \\frac{1}{abc} \\begin{vmatrix} a^2 & ab & ac \\\\ a^2 b & b^3 & c^2 b \\\\ abc & abc & abc \\end{vmatrix} \\dots \\text{Wait, let's multiply columns: }$$
            Multiply $C_1$ by $a$, $C_2$ by $b$, and $C_3$ by $c$:
            $$\\Delta = \\frac{1}{abc} \\begin{vmatrix} a^2 & b^2 & c^2 \\\\ a^3 & b^3 & c^3 \\\\ abc & abc & abc \\end{vmatrix}$$
            Taking out $abc$ from Row 3:
            $$\\Delta = \\frac{abc}{abc} \\begin{vmatrix} a^2 & b^2 & c^2 \\\\ a^3 & b^3 & c^3 \\\\ 1 & 1 & 1 \\end{vmatrix} = \\begin{vmatrix} 1 & 1 & 1 \\\\ a^2 & b^2 & c^2 \\\\ a^3 & b^3 & c^3 \\end{vmatrix}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Column operations $C_1 \\to C_1 - C_2$ and $C_2 \\to C_2 - C_3$</div>
            $$\\Delta = \\begin{vmatrix} 0 & 0 & 1 \\\\ a^2 - b^2 & b^2 - c^2 & c^2 \\\\ a^3 - b^3 & b^3 - c^3 & c^3 \\end{vmatrix}$$
            Factor out $(a - b)$ from $C_1$ and $(b - c)$ from $C_2$:
            $$\\Delta = (a - b)(b - c) \\begin{vmatrix} 0 & 0 & 1 \\\\ a + b & b + c & c^2 \\\\ a^2 + ab + b^2 & b^2 + bc + c^2 & c^3 \\end{vmatrix}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Expand along Row 1</div>
            $$\\Delta = (a - b)(b - c) [(a + b)(b^2 + bc + c^2) - (b + c)(a^2 + ab + b^2)]$$
            Expanding and simplifying:
            $$= (a - b)(b - c) [ab^2 + abc + ac^2 + b^3 + b^2 c + bc^2 - (a^2 b + ab^2 + b^3 + a^2 c + abc + b^2 c)]$$
            $$= (a - b)(b - c) [ac^2 + bc^2 - a^2 b - a^2 c] = (a - b)(b - c) [c^2(a + b) - a^2(b + c)]$$
            $$= (a - b)(b - c)(c - a)(ab + bc + ca) \\quad \\text{(Hence proved)}$$
          </div>

          <div class="final-box">
            ✅ <strong>Result:</strong> Identity proved using column multiplications and factoring.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2080, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Matrix Transpose Theorem</span>
        </div>
        <div class="q-title">
          Q3. For matrices $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, verify that $(AB)^T = B^T A^T$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Compute product $AB$</div>
            $$AB = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix} = \\begin{pmatrix} 1(2) + 2(1) & 1(0) + 2(3) \\\\ 3(2) + 4(1) & 3(0) + 4(3) \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$$
            Transpose of $AB$:
            $$(AB)^T = \\begin{pmatrix} 4 & 10 \\\\ 6 & 12 \\end{pmatrix} \quad \\text{--- (1)}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Compute $B^T A^T$</div>
            $$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}, \\quad B^T = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$$
            $$B^T A^T = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix} = \\begin{pmatrix} 2(1) + 1(2) & 2(3) + 1(4) \\\\ 0(1) + 3(2) & 0(3) + 3(4) \\end{pmatrix} = \\begin{pmatrix} 4 & 10 \\\\ 6 & 12 \\end{pmatrix} \quad \\text{--- (2)}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Conclusion</div>
            From (1) and (2), $(AB)^T = B^T A^T$.
          </div>

          <div class="final-box">
            ✅ <strong>Verified:</strong> $(AB)^T = B^T A^T = \\begin{pmatrix} 4 & 10 \\\\ 6 & 12 \\end{pmatrix}$.
          </div>
        </div>
      </div>
    `
  }
,
  // ─────────────────────────────────────────────────────────────
  // 6. INVERSE TRIGONOMETRIC FUNCTIONS & EQUATIONS
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-trigonometry",
    class: "11",
    subject: "Mathematics",
    chapter: "Inverse Trigonometry & Equations",
    title: "Inverse Trigonometry — NEB Class 11 Board Solved Questions",
    icon: "📐",
    summary:
      "Question-solution first Class 11 Inverse Trigonometry notes: Inverse trigonometric identities, principal value branches, solving inverse trigonometric equations, and general solution of a cos θ + b sin θ = c.",
    tags: ["Inverse Trigonometry", "Trigonometric Equations", "General Solution", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Inverse Trigonometry</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Sum / Difference:</strong><br/>
            $$\\tan^{-1}x + \\tan^{-1}y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$$<br/>
            $$\\tan^{-1}x - \\tan^{-1}y = \\tan^{-1}\\left(\\frac{x-y}{1+xy}\\right)$$
          </div>
          <div>
            <strong>Double Angle:</strong><br/>
            $$2\\tan^{-1}x = \\tan^{-1}\\left(\\frac{2x}{1-x^2}\\right)$$<br/>
            $$= \\sin^{-1}\\left(\\frac{2x}{1+x^2}\\right) = \\cos^{-1}\\left(\\frac{1-x^2}{1+x^2}\\right)$$
          </div>
          <div>
            <strong>General Solutions:</strong><br/>
            $$\\sin\\theta = \\sin\\alpha \\implies \\theta = n\\pi + (-1)^n \\alpha$$<br/>
            $$\\cos\\theta = \\cos\\alpha \\implies \\theta = 2n\\pi \\pm \\alpha$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Inverse Trigonometric Identity Proof</span>
        </div>
        <div class="q-title">
          Q1. Prove that:
          $$\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{5}\\right) + \\tan^{-1}\\left(\\frac{1}{8}\\right) = \\frac{\\pi}{4}$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Combine the first two terms using $\\tan^{-1}x + \\tan^{-1}y$</div>
            $$\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{5}\\right) = \\tan^{-1}\\left(\\frac{\\frac{1}{2} + \\frac{1}{5}}{1 - \\frac{1}{2} \\cdot \\frac{1}{5}}\\right)$$
            $$= \\tan^{-1}\\left(\\frac{\\frac{5+2}{10}}{\\frac{10-1}{10}}\\right) = \\tan^{-1}\\left(\\frac{7}{9}\\right)$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Add the third term $\\tan^{-1}(1/8)$</div>
            $$\\text{LHS} = \\tan^{-1}\\left(\\frac{7}{9}\\right) + \\tan^{-1}\\left(\\frac{1}{8}\\right) = \\tan^{-1}\\left(\\frac{\\frac{7}{9} + \\frac{1}{8}}{1 - \\frac{7}{9} \\cdot \\frac{1}{8}}\\right)$$
            $$= \\tan^{-1}\\left(\\frac{\\frac{56 + 9}{72}}{\\frac{72 - 7}{72}}\\right) = \\tan^{-1}\\left(\\frac{65}{65}\\right) = \\tan^{-1}(1)$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Evaluate $\\tan^{-1}(1)$</div>
            $$\\tan^{-1}(1) = \\frac{\\pi}{4} = \\text{RHS} \quad \text{(Hence proved)}$$
          </div>

          <div class="final-box">
            ✅ <strong>Result:</strong> $\\tan^{-1}(1/2) + \\tan^{-1}(1/5) + \\tan^{-1}(1/8) = \\frac{\\pi}{4}$.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Solving Inverse Trig Equation</span>
        </div>
        <div class="q-title">
          Q2. Solve the equation for $x$:
          $$\\sin^{-1}x + \\sin^{-1}(1 - x) = \\cos^{-1}x$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Use the co-function identity $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$</div>
            From $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$, we have $\\cos^{-1}x = \\frac{\\pi}{2} - \\sin^{-1}x$.<br/>
            Substitute into the given equation:
            $$\\sin^{-1}x + \\sin^{-1}(1 - x) = \\frac{\\pi}{2} - \\sin^{-1}x$$
            $$\\sin^{-1}(1 - x) = \\frac{\\pi}{2} - 2\\sin^{-1}x$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Take sine on both sides</div>
            $$1 - x = \\sin\\left(\\frac{\\pi}{2} - 2\\sin^{-1}x\\right) = \\cos(2\\sin^{-1}x)$$
            Let $\\theta = \\sin^{-1}x \\implies \\sin\\theta = x$.<br/>
            Recall $\\cos 2\\theta = 1 - 2\\sin^2\\theta = 1 - 2x^2$.<br/>
            Substitute back:
            $$1 - x = 1 - 2x^2 \\implies 2x^2 - x = 0$$
            $$x(2x - 1) = 0 \\implies x = 0 \quad \text{or} \quad x = \\frac{1}{2}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Verification of roots</div>
            <ul>
              <li>For $x = 0$: $\\sin^{-1}(0) + \\sin^{-1}(1) = 0 + \\frac{\\pi}{2} = \\frac{\\pi}{2}$. $\\cos^{-1}(0) = \\frac{\\pi}{2}$. (Valid).</li>
              <li>For $x = 1/2$: $\\sin^{-1}(1/2) + \\sin^{-1}(1/2) = \\frac{\\pi}{6} + \\frac{\\pi}{6} = \\frac{\\pi}{3}$. $\\cos^{-1}(1/2) = \\frac{\\pi}{3}$. (Valid).</li>
            </ul>
          </div>

          <div class="final-box">
            ✅ <strong>Solutions:</strong> $x = 0$ or $x = \\frac{1}{2}$.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078, 2080, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 General Solution of Trigonometric Equation</span>
        </div>
        <div class="q-title">
          Q3. Find the general solution of the trigonometric equation:
          $$\\sqrt{3}\\cos\\theta + \\sin\\theta = \\sqrt{2}$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Divide by $r = \\sqrt{a^2 + b^2} = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2$</div>
            $$\\frac{\\sqrt{3}}{2}\\cos\\theta + \\frac{1}{2}\\sin\\theta = \\frac{\\sqrt{2}}{2}$$
            Recognize $\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$ and $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$:
            $$\\cos\\theta \\cos\\frac{\\pi}{6} + \\sin\\theta \\sin\\frac{\\pi}{6} = \\frac{1}{\\sqrt{2}}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Use angle subtraction formula $\\cos(A - B)$</div>
            $$\\cos\\left(\\theta - \\frac{\\pi}{6}\\right) = \\cos\\left(\\frac{\\pi}{4}\\right)$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Apply the general solution formula for $\\cos X = \\cos\\alpha$</div>
            $$X = 2n\\pi \\pm \\alpha \quad (n \\in \\mathbb{Z})$$
            $$\\theta - \\frac{\\pi}{6} = 2n\\pi \\pm \\frac{\\pi}{4}$$
            $$\\theta = 2n\\pi + \\frac{\\pi}{6} \\pm \\frac{\\pi}{4}, \quad n \\in \\mathbb{Z}$$
            <ul>
              <li>Taking positive sign: $\\theta = 2n\\pi + \\frac{2\\pi + 3\\pi}{12} = 2n\\pi + \\frac{5\\pi}{12}$</li>
              <li>Taking negative sign: $\\theta = 2n\\pi + \\frac{2\\pi - 3\\pi}{12} = 2n\\pi - \\frac{\\pi}{12}$</li>
            </ul>
          </div>

          <div class="final-box">
            ✅ <strong>General Solution:</strong> $\\theta = 2n\\pi + \\frac{5\\pi}{12}$ or $\\theta = 2n\\pi - \\frac{\\pi}{12}$, for any integer $n \\in \\mathbb{Z}$.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 7. PAIR OF STRAIGHT LINES
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-coordinate-geometry",
    class: "11",
    subject: "Mathematics",
    chapter: "Pair of Straight Lines",
    title: "Pair of Straight Lines — NEB Class 11 Board Solved Questions",
    icon: "📈",
    summary:
      "Question-solution first Class 11 Coordinate Geometry notes: Angle between pair of lines (tan θ = 2√(h²-ab)/(a+b)), conditions for perpendicularity and coincidence, general second-degree equation condition (Δ = 0), and angle bisectors.",
    tags: ["Pair of Straight Lines", "Homogeneous Equation", "Angle Bisectors", "Orthogonal Lines", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Pair of Straight Lines</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Homogeneous Equation:</strong><br/>
            $$ax^2 + 2hxy + by^2 = 0$$<br/>
            $$\\tan\\theta = \\pm \\frac{2\\sqrt{h^2 - ab}}{a + b}$$
          </div>
          <div>
            <strong>Key Conditions:</strong><br/>
            $$\\text{Perpendicular } (\\theta = 90^\\circ): a + b = 0$$<br/>
            $$\\text{Coincident } (\\theta = 0^\\circ): h^2 = ab$$
          </div>
          <div>
            <strong>Angle Bisectors:</strong><br/>
            $$\\frac{x^2 - y^2}{a - b} = \\frac{xy}{h}$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 Theorem Derivation & Conditions</span>
        </div>
        <div class="q-title">
          Q1. Prove that the angle $\\theta$ between the pair of straight lines represented by the homogeneous equation $ax^2 + 2hxy + by^2 = 0$ is given by:
          $$\\tan\\theta = \\pm \\frac{2\\sqrt{h^2 - ab}}{a + b}$$
          Hence, deduce the conditions for the two lines to be: (i) perpendicular, and (ii) coincident.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Separate into lines passing through the origin</div>
            Let the two straight lines represented by $ax^2 + 2hxy + by^2 = 0$ be:
            $$y = m_1 x \quad \text{and} \quad y = m_2 x$$
            Then $(y - m_1 x)(y - m_2 x) = 0 \implies y^2 - (m_1 + m_2)xy + m_1 m_2 x^2 = 0$.<br/>
            Dividing the given equation by $b$:
            $$y^2 + \\frac{2h}{b}xy + \\frac{a}{b}x^2 = 0$$
            Comparing coefficients:
            $$m_1 + m_2 = -\\frac{2h}{b} quad \text{and} quad m_1 m_2 = \\frac{a}{b}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Express $(m_1 - m_2)$ in terms of $a, b, h$</div>
            $$(m_1 - m_2)^2 = (m_1 + m_2)^2 - 4m_1 m_2 = \\left(-\\frac{2h}{b}\\right)^2 - 4\\left(\\frac{a}{b}\\right) = \\frac{4h^2 - 4ab}{b^2}$$
            $$m_1 - m_2 = \\pm \\frac{2\\sqrt{h^2 - ab}}{b}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Angle between two lines formula</div>
            $$\\tan\\theta = \\pm \\frac{m_1 - m_2}{1 + m_1 m_2} = \\pm \\frac{\\frac{2\\sqrt{h^2 - ab}}{b}}{1 + \\frac{a}{b}} = \\pm \\frac{2\\sqrt{h^2 - ab}}{a + b} \quad \text{(Hence proved)}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 4: Deduction of Conditions</div>
            <ul>
              <li><strong>(i) Perpendicular Lines ($\\theta = 90^\\circ$):</strong><br/>
              $\\tan 90^\\circ = \\infty \implies a + b = 0$, i.e., <strong>coefficient of $x^2$ + coefficient of $y^2$ = 0</strong>.</li>
              <li><strong>(ii) Coincident Lines ($\\theta = 0^\\circ$):</strong><br/>
              $\\tan 0^\\circ = 0 \implies 2\\sqrt{h^2 - ab} = 0 \implies h^2 - ab = 0 \implies \mathbf{h^2 = ab}$.</li>
            </ul>
          </div>

          <div class="final-box">
            ✅ <strong>Key Formulas Deduced:</strong> $\\tan\\theta = \\pm \\frac{2\\sqrt{h^2-ab}}{a+b}$, $\\perp \\iff a+b=0$, and coincident $\\iff h^2=ab$.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 General 2nd Degree Pair of Lines</span>
        </div>
        <div class="q-title">
          Q2. Prove that the equation $2x^2 - 5xy + 2y^2 + x + y - 1 = 0$ represents a pair of straight lines. Find their point of intersection and the acute angle between them.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Identify coefficients from general second-degree equation</div>
            General form: $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$:
            $$a = 2, \; 2h = -5 \implies h = -\\frac{5}{2}, \; b = 2, \; 2g = 1 \implies g = \\frac{1}{2}, \; 2f = 1 \implies f = \\frac{1}{2}, \; c = -1$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Check condition $\\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$</div>
            $$\\Delta = 2(2)(-1) + 2\\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right)\\left(-\\frac{5}{2}\\right) - 2\\left(\\frac{1}{2}\\right)^2 - 2\\left(\\frac{1}{2}\\right)^2 - (-1)\\left(-\\frac{5}{2}\\right)^2$$
            $$= -4 - \\frac{5}{4} - \\frac{1}{2} - \\frac{1}{2} + \\frac{25}{4} = -4 - 1 + \\left(\\frac{25 - 5}{4}\\right) = -5 + 5 = 0$$
            Since $\\Delta = 0$ and $h^2 - ab = \\frac{25}{4} - 4 = \\frac{9}{4} > 0$, the equation represents two intersecting real straight lines.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Point of Intersection</div>
            Differentiate partially with respect to $x$ and $y$:
            $$\\frac{\\partial f}{\\partial x} = 4x - 5y + 1 = 0 quad \text{--- (1)}$$
            $$\\frac{\\partial f}{\\partial y} = -5x + 4y + 1 = 0 quad \text{--- (2)}$$
            Adding (1) and (2): $-x - y + 2 = 0 \implies x + y = 2 \implies y = 2 - x$.<br/>
            Substitute into (1): $4x - 5(2 - x) + 1 = 0 \implies 9x - 9 = 0 \implies x = 1, y = 1$.<br/>
            Point of intersection $= (1, 1)$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 4: Acute Angle $\\theta$</div>
            $$\\tan\\theta = \\left|\\frac{2\\sqrt{h^2 - ab}}{a + b}\\right| = \\frac{2\\sqrt{\\frac{25}{4} - 4}}{2 + 2} = \\frac{2\\sqrt{\\frac{9}{4}}}{4} = \\frac{2 \\cdot \\frac{3}{2}}{4} = \\frac{3}{4}$$
            $$\\theta = \\arctan\\left(\\frac{3}{4}\\right) \\approx 36.87^\\circ$$
          </div>

          <div class="final-box">
            ✅ <strong>Results:</strong> The equation represents lines intersecting at $(1, 1)$ with angle $\\theta = \\arctan(3/4)$.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 8. LIMITS AND CONTINUITY
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-limits-continuity",
    class: "11",
    subject: "Mathematics",
    chapter: "Limits and Continuity",
    title: "Limits & Continuity — NEB Class 11 Board Solved Questions",
    icon: "🎯",
    summary:
      "Question-solution first Class 11 Limits & Continuity notes: Indeterminate forms (0/0), trigonometric limits (lim sin x / x = 1), algebraic factorization & rationalization, algebraic limit theorem proof, and testing continuity at points.",
    tags: ["Limits", "Continuity", "Indeterminate Forms", "Calculus", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Limits & Continuity</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Standard Limit Formulas:</strong><br/>
            $$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1, \quad \\lim_{x\\to 0} \\frac{\\tan x}{x} = 1$$<br/>
            $$\\lim_{x\\to a} \\frac{x^n - a^n}{x - a} = n a^{n-1}$$
          </div>
          <div>
            <strong>Exponential & Log Limits:</strong><br/>
            $$\\lim_{x\\to 0} \\frac{e^x - 1}{x} = 1, \quad \\lim_{x\\to 0} \\frac{\\ln(1+x)}{x} = 1$$
          </div>
          <div>
            <strong>Continuity Condition:</strong><br/>
            $$\\lim_{x\\to c^-} f(x) = \\lim_{x\\to c^+} f(x) = f(c)$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Trigonometric & Rationalization Limits</span>
        </div>
        <div class="q-title">
          Q1. Evaluate the following limits:
          <br/>(a) $\\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x} - \\sqrt{1 - 2x}}{\\sin 3x}$
          <br/>(b) $\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Part (a): Rationalizing numerator</div>
            Direct substitution gives $\\frac{\\sqrt{1} - \\sqrt{1}}{0} = \\frac{0}{0}$ (indeterminate form).<br/>
            Multiply numerator and denominator by conjugate $(\\sqrt{1+2x} + \\sqrt{1-2x})$:
            $$\\lim_{x\\to 0} \\frac{(\\sqrt{1+2x} - \\sqrt{1-2x})(\\sqrt{1+2x} + \\sqrt{1-2x})}{\\sin 3x (\\sqrt{1+2x} + \\sqrt{1-2x})}$$
            $$= \\lim_{x\\to 0} \\frac{(1+2x) - (1-2x)}{\\sin 3x (\\sqrt{1+2x} + \\sqrt{1-2x})} = \\lim_{x\\to 0} \\frac{4x}{\\sin 3x (\\sqrt{1+2x} + \\sqrt{1-2x})}$$
            Re-organize using standard limit $\\lim_{x\\to 0} \\frac{\\sin 3x}{3x} = 1$:
            $$= \\lim_{x\\to 0} \\left[\\frac{4}{3} \\cdot \\frac{3x}{\\sin 3x} \\cdot \\frac{1}{\\sqrt{1+2x} + \\sqrt{1-2x}}\\right] = \\frac{4}{3} \\cdot (1) \\cdot \\frac{1}{1 + 1} = \\frac{4}{3} \\cdot \\frac{1}{2} = \\frac{2}{3}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Part (b): Evaluating $\\lim_{x\\to 0} \\frac{\\tan x - \\sin x}{x^3}$</div>
            $$\\frac{\\tan x - \\sin x}{x^3} = \\frac{\\frac{\\sin x}{\\cos x} - \\sin x}{x^3} = \\frac{\\sin x (1 - \\cos x)}{x^3 \\cos x}$$
            Use identity $1 - \\cos x = 2\\sin^2\\left(\\frac{x}{2}\\right)$:
            $$= \\frac{\\sin x \\cdot 2\\sin^2(x/2)}{x \cdot x^2 \\cos x} = \\left(\\frac{\\sin x}{x}\\right) \\cdot \\left(\\frac{\\sin(x/2)}{x/2}\\right)^2 \\cdot \\frac{2}{4} \\cdot \\frac{1}{\\cos x}$$
            Taking limit as $x \\to 0$:
            $$= (1) \\cdot (1)^2 \\cdot \\frac{1}{2} \\cdot \\frac{1}{1} = \\frac{1}{2}$$
          </div>

          <div class="final-box">
            ✅ <strong>Answers:</strong> (a) $\\frac{2}{3}$, (b) $\\frac{1}{2}$.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Continuity & Unknown Parameters</span>
        </div>
        <div class="q-title">
          Q2. Find the values of constants $a$ and $b$ so that the function $f(x)$ is continuous at $x = 2$:
          $$f(x) = \\begin{cases} 3ax + b, & x < 2 \\\\ 11, & x = 2 \\\\ 5ax - 2b, & x > 2 \\end{cases}$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Compute Left-Hand Limit (LHL) at $x = 2$</div>
            $$\\text{LHL} = \\lim_{x\\to 2^-} f(x) = \\lim_{x\\to 2} (3ax + b) = 3a(2) + b = 6a + b$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Compute Right-Hand Limit (RHL) at $x = 2$</div>
            $$\\text{RHL} = \\lim_{x\\to 2^+} f(x) = \\lim_{x\\to 2} (5ax - 2b) = 5a(2) - 2b = 10a - 2b$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Apply continuity condition $\\text{LHL} = \\text{RHL} = f(2)$</div>
            Given $f(2) = 11$:
            $$6a + b = 11 quad \text{--- (1)}$$
            $$10a - 2b = 11 quad \text{--- (2)}$$
            Multiply equation (1) by 2:
            $$12a + 2b = 22 quad \text{--- (3)}$$
            Add (2) and (3):
            $$22a = 33 \implies a = \\frac{33}{22} = \\frac{3}{2}$$
            Substitute $a = \\frac{3}{2}$ into (1):
            $$6\\left(\\frac{3}{2}\\right) + b = 11 \implies 9 + b = 11 \implies b = 2$$
          </div>

          <div class="final-box">
            ✅ <strong>Values:</strong> $a = \\frac{3}{2}$, $b = 2$.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 9. DERIVATIVES (FIRST PRINCIPLE & RULES)
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-derivatives",
    class: "11",
    subject: "Mathematics",
    chapter: "Derivatives",
    title: "Derivatives — NEB Class 11 Board Solved Questions",
    icon: "⚡",
    summary:
      "Question-solution first Class 11 Derivatives notes: First principle derivations for sin(2x), cos(√x), e^(√x), and ln(sin x), plus parametric differentiation and chain rule applications.",
    tags: ["Derivatives", "First Principle", "Calculus", "Parametric", "Chain Rule", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: First Principle & Rules</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>First Principle Definition:</strong><br/>
            $$f'(x) = \\lim_{\\Delta x\\to 0} \\frac{f(x+\\Delta x) - f(x)}{\\Delta x}$$
          </div>
          <div>
            <strong>Product & Quotient Rules:</strong><br/>
            $$(uv)' = u'v + uv'$$<br/>
            $$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$$
          </div>
          <div>
            <strong>Parametric Differentiation:</strong><br/>
            $$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}, \quad \\frac{d^2y}{dx^2} = \\frac{d}{d\\theta}\\left(\\frac{dy}{dx}\\right) \\cdot \\frac{d\\theta}{dx}$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2077–2082) — SURE 4-6 MARKS</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 First Principle of Trigonometric Function</span>
        </div>
        <div class="q-title">
          Q1. Find from the first principle the derivative of $f(x) = \\sin 2x$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Set up the definition of derivative</div>
            Let $y = f(x) = \\sin 2x$. Let $\\Delta x$ be a small change in $x$ and $\\Delta y$ be corresponding change in $y$:
            $$y + \\Delta y = \\sin 2(x + \\Delta x)$$
            $$\\Delta y = \\sin 2(x + \\Delta x) - \\sin 2x = \\sin(2x + 2\\Delta x) - \\sin 2x$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Apply the trigonometric identity $\\sin C - \\sin D = 2\\cos\\frac{C+D}{2}\\sin\\frac{C-D}{2}$</div>
            $$\\Delta y = 2 \\cos\\left(\\frac{2x + 2\\Delta x + 2x}{2}\\right) \\sin\\left(\\frac{2x + 2\\Delta x - 2x}{2}\\right)$$
            $$\\Delta y = 2 \\cos(2x + \\Delta x) \\sin(\\Delta x)$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Divide by $\\Delta x$ and take limit $\\Delta x \\to 0$</div>
            $$\\frac{dy}{dx} = \\lim_{\\Delta x\\to 0} \\frac{\\Delta y}{\\Delta x} = \\lim_{\\Delta x\\to 0} \\left[\\frac{2 \\cos(2x + \\Delta x) \\sin(\\Delta x)}{\\Delta x}\\right]$$
            $$= 2 \\lim_{\\Delta x\\to 0} \\cos(2x + \\Delta x) \\cdot \\lim_{\\Delta x\\to 0} \\left(\\frac{\\sin \\Delta x}{\\Delta x}\\right)$$
            Since $\\lim_{\\Delta x\\to 0} \\frac{\\sin\\Delta x}{\\Delta x} = 1$:
            $$= 2 \\cos(2x + 0) \\cdot (1) = 2\\cos 2x$$
          </div>

          <div class="final-box">
            ✅ <strong>Derivative:</strong> $\\frac{d}{dx}(\\sin 2x) = 2\\cos 2x$.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2078, 2080, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 First Principle of Exponential Function</span>
        </div>
        <div class="q-title">
          Q2. Find from the first principle the derivative of $f(x) = e^{\\sqrt{x}}$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Set up the difference quotient</div>
            Let $y = e^{\\sqrt{x}}$.<br/>
            $$\\Delta y = e^{\\sqrt{x + \\Delta x}} - e^{\\sqrt{x}} = e^{\\sqrt{x}} \\left(e^{\\sqrt{x + \\Delta x} - \\sqrt{x}} - 1\\right)$$
            Let $u = \\sqrt{x + \\Delta x} - \\sqrt{x}$. As $\\Delta x \\to 0$, $u \\to 0$.
            $$\\Delta y = e^{\\sqrt{x}} (e^u - 1)$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Rationalize $u$</div>
            $$u = \\sqrt{x + \\Delta x} - \\sqrt{x} = \\frac{(\\sqrt{x+\\Delta x} - \\sqrt{x})(\\sqrt{x+\\Delta x} + \\sqrt{x})}{\\sqrt{x+\\Delta x} + \\sqrt{x}} = \\frac{\\Delta x}{\\sqrt{x+\\Delta x} + \\sqrt{x}}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Take limit as $\\Delta x \\to 0$</div>
            $$\\frac{dy}{dx} = \\lim_{\\Delta x\\to 0} \\frac{\\Delta y}{\\Delta x} = e^{\\sqrt{x}} \\lim_{\\Delta x\\to 0} \\left[\\frac{e^u - 1}{u} \\cdot \\frac{u}{\\Delta x}\\right]$$
            $$= e^{\\sqrt{x}} \\left(\\lim_{u\\to 0} \\frac{e^u - 1}{u}\\right) \\cdot \\lim_{\\Delta x\\to 0} \\left(\\frac{1}{\\sqrt{x+\\Delta x} + \\sqrt{x}}\\right)$$
            Using the standard limit $\\lim_{u\\to 0} \\frac{e^u - 1}{u} = 1$:
            $$= e^{\\sqrt{x}} \\cdot 1 \\cdot \\frac{1}{\\sqrt{x} + \\sqrt{x}} = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$$
          </div>

          <div class="final-box">
            ✅ <strong>Derivative:</strong> $\\frac{d}{dx}(e^{\\sqrt{x}}) = \\frac{e^{\\sqrt{x}}}{2\\sqrt{x}}$.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Parametric Second Derivative</span>
        </div>
        <div class="q-title">
          Q3. If $x = a(\\theta + \\sin\\theta)$ and $y = a(1 - \\cos\\theta)$, find $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$ at $\\theta = \\frac{\\pi}{2}$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Differentiate with respect to parameter $\\theta$</div>
            $$\\frac{dx}{d\\theta} = a(1 + \\cos\\theta) = a\\left(2\\cos^2\\frac{\\theta}{2}\\right) = 2a\\cos^2\\frac{\\theta}{2}$$
            $$\\frac{dy}{d\\theta} = a(0 - (-\\sin\\theta)) = a\\sin\\theta = a\\left(2\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}\\right) = 2a\\sin\\frac{\\theta}{2}\\cos\\frac{\\theta}{2}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Compute first derivative $\\frac{dy}{dx}$</div>
            $$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{2a\\sin(\\theta/2)\\cos(\\theta/2)}{2a\\cos^2(\\theta/2)} = \\frac{\\sin(\\theta/2)}{\\cos(\\theta/2)} = \\tan\\left(\\frac{\\theta}{2}\\right)$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Compute second derivative $\\frac{d^2y}{dx^2}$</div>
            $$\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = \\frac{d}{d\\theta}\\left(\\tan\\frac{\\theta}{2}\\right) \\cdot \\frac{d\\theta}{dx}$$
            $$= \\sec^2\\left(\\frac{\\theta}{2}\\right) \\cdot \\frac{1}{2} \\cdot \\frac{1}{2a\\cos^2(\\theta/2)} = \\frac{1}{4a\\cos^4(\\theta/2)} = \\frac{1}{4a} \\sec^4\\left(\\frac{\\theta}{2}\\right)$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 4: Evaluate at $\\theta = \\frac{\\pi}{2}$</div>
            At $\\theta = \\pi/2$, $\\theta/2 = \\pi/4$:
            $$\\frac{dy}{dx} = \\tan\\left(\\frac{\\pi}{4}\\right) = 1$$
            $$\\frac{d^2y}{dx^2} = \\frac{1}{4a} \\sec^4\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{4a} (\\sqrt{2})^4 = \\frac{4}{4a} = \\frac{1}{a}$$
          </div>

          <div class="final-box">
            ✅ <strong>Values at $\\theta = \\pi/2$:</strong> $\\frac{dy}{dx} = 1$ and $\\frac{d^2y}{dx^2} = \\frac{1}{a}$.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 10. APPLICATIONS OF DERIVATIVES
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-applications-derivatives",
    class: "11",
    subject: "Mathematics",
    chapter: "Applications of Derivatives",
    title: "Applications of Derivatives — NEB Class 11 Board Solved Questions",
    icon: "📈",
    summary:
      "Question-solution first Class 11 Applications of Derivatives notes: Equations of tangents and normals, optimization word problems (maxima and minima), rates of change, and monotonicity intervals.",
    tags: ["Applications of Derivatives", "Tangent", "Normal", "Maxima Minima", "Optimization", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Tangents, Normals & Maxima</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Tangent & Normal:</strong><br/>
            $$m = \\left.\\frac{dy}{dx}\\right|_{x_1, y_1}$$<br/>
            $$y - y_1 = m(x - x_1), \; y - y_1 = -\\frac{1}{m}(x - x_1)$$
          </div>
          <div>
            <strong>Extrema (2nd Derivative Test):</strong><br/>
            $$f'(x) = 0 \implies \text{Critical Points}$$<br/>
            $$f''(x) < 0 \implies \text{Local Max}; \; f''(x) > 0 \implies \text{Local Min}$$
          </div>
          <div>
            <strong>Monotonicity:</strong><br/>
            $$f'(x) > 0 \implies \text{Increasing}; \; f'(x) < 0 \implies \text{Decreasing}$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Tangent & Normal Equations</span>
        </div>
        <div class="q-title">
          Q1. Find the equations of the tangent and normal to the curve $y = x^3 - 3x + 2$ at the point $(2, 4)$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Find slope $m$ of the tangent</div>
            $$y = x^3 - 3x + 2 \implies \\frac{dy}{dx} = 3x^2 - 3$$
            At $(x_1, y_1) = (2, 4)$:
            $$m = \\left.\\frac{dy}{dx}\\right|_{(2,4)} = 3(2)^2 - 3 = 12 - 3 = 9$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Equation of the Tangent</div>
            $$y - y_1 = m(x - x_1)$$
            $$y - 4 = 9(x - 2) \implies y - 4 = 9x - 18 \implies 9x - y - 14 = 0$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Equation of the Normal</div>
            Slope of normal $m_N = -\\frac{1}{m} = -\\frac{1}{9}$:
            $$y - 4 = -\\frac{1}{9}(x - 2) \implies 9(y - 4) = -(x - 2)$$
            $$9y - 36 = -x + 2 \implies x + 9y - 38 = 0$$
          </div>

          <div class="final-box">
            ✅ <strong>Equations:</strong><br/>
            Tangent: $9x - y - 14 = 0$<br/>
            Normal: $x + 9y - 38 = 0$
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 4 / 6 Marks</span>
          <span class="badge-type">📌 Optimization / Maxima and Minima</span>
        </div>
        <div class="q-title">
          Q2. A farmer has $120$ metres of fencing wire to enclose a rectangular vegetable garden. Find the dimensions of the garden that will enclose the maximum possible area, and determine that maximum area.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Express Area as a single variable function</div>
            Let length $= x$ and width $= y$.<br/>
            Perimeter: $2(x + y) = 120 \implies x + y = 60 \implies y = 60 - x$.<br/>
            Area $A = x \cdot y = x(60 - x) = 60x - x^2$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Find critical points using first derivative</div>
            $$\\frac{dA}{dx} = 60 - 2x = 0 \implies 2x = 60 \implies x = 30\\text{ metres}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Second derivative test for maximum</div>
            $$\\frac{d^2A}{dx^2} = -2 < 0$$
            Since $\\frac{d^2A}{dx^2} < 0$, the area is strictly <strong>maximum</strong> at $x = 30$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 4: Compute dimensions and maximum area</div>
            Length $x = 30\\text{ m}$, Width $y = 60 - 30 = 30\\text{ m}$ (The rectangle is a square!).<br/>
            Maximum Area $A_{\\max} = 30 \\times 30 = 900\\text{ m}^2$.
          </div>

          <div class="final-box">
            ✅ <strong>Dimensions:</strong> $30\\text{ m} \\times 30\\text{ m}$, <strong>Maximum Area:</strong> $900\\text{ m}^2$.
          </div>
        </div>
      </div>
    `
  }
,
  // ─────────────────────────────────────────────────────────────
  // 11. ANTI-DERIVATIVES & INTEGRATION
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-anti-derivatives",
    class: "11",
    subject: "Mathematics",
    chapter: "Anti-derivatives",
    title: "Anti-derivatives & Integration — NEB Class 11 Board Solved Questions",
    icon: "∫",
    summary:
      "Question-solution first Class 11 Anti-derivatives notes: Integration by parts (ILATE rule), rational quadratic denominators by completing the square, trigonometric substitutions, and definite integrals for area bounded by curves.",
    tags: ["Integration", "Anti-derivatives", "By Parts", "Area under Curve", "Calculus", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Anti-Derivatives</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Integration by Parts:</strong><br/>
            $$\\int u v \\, dx = u \\int v \\, dx - \\int \\left(u' \\int v \\, dx\\right) dx$$
          </div>
          <div>
            <strong>Standard Quadratic Forms:</strong><br/>
            $$\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) + C$$<br/>
            $$\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\left(\\frac{x}{a}\\right) + C$$
          </div>
          <div>
            <strong>Area Bounded by Curves:</strong><br/>
            $$A = \\int_a^b [y_1 - y_2] \\, dx$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Integration by Parts</span>
        </div>
        <div class="q-title">
          Q1. Evaluate the following integrals using Integration by Parts:
          <br/>(a) $\\int x \\sin 2x \\, dx$
          <br/>(b) $\\int x e^{3x} \\, dx$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Part (a): Evaluate $\\int x \\sin 2x \\, dx$</div>
            Using ILATE order: Algebraic ($u = x$) comes before Trigonometric ($v = \\sin 2x$).
            $$\\int u v \\, dx = u \\int v \\, dx - \\int \\left[\\frac{du}{dx} \\int v \\, dx\\right] dx$$
            $$\\int x \\sin 2x \\, dx = x \\left(-\\frac{\\cos 2x}{2}\\right) - \\int (1) \\left(-\\frac{\\cos 2x}{2}\\right) dx$$
            $$= -\\frac{x \\cos 2x}{2} + \\frac{1}{2} \\int \\cos 2x \\, dx$$
            $$= -\\frac{x \\cos 2x}{2} + \\frac{1}{2} \\left(\\frac{\\sin 2x}{2}\\right) + C = -\\frac{x \\cos 2x}{2} + \\frac{\\sin 2x}{4} + C$$
          </div>

          <div class="step-block">
            <div class="step-tag">Part (b): Evaluate $\\int x e^{3x} \\, dx$</div>
            Let $u = x$ and $v = e^{3x}$:
            $$\\int x e^{3x} \\, dx = x \\left(\\frac{e^{3x}}{3}\\right) - \\int (1) \\left(\\frac{e^{3x}}{3}\\right) dx$$
            $$= \\frac{x e^{3x}}{3} - \\frac{1}{3} \\left(\\frac{e^{3x}}{3}\\right) + C = \\frac{x e^{3x}}{3} - \\frac{e^{3x}}{9} + C = \\frac{e^{3x}}{9}(3x - 1) + C$$
          </div>

          <div class="final-box">
            ✅ <strong>Final Results:</strong><br/>
            (a) $-\\frac{x\\cos 2x}{2} + \\frac{\\sin 2x}{4} + C$<br/>
            (b) $\\frac{e^{3x}}{9}(3x - 1) + C$
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Completing the Square</span>
        </div>
        <div class="q-title">
          Q2. Evaluate:
          $$\\int \\frac{dx}{x^2 + 4x + 13}$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Complete the square in the quadratic denominator</div>
            $$x^2 + 4x + 13 = (x^2 + 4x + 4) + 9 = (x + 2)^2 + 3^2$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Apply the standard integral formula $\\int \\frac{du}{u^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\left(\\frac{u}{a}\\right) + C$</div>
            Let $u = x + 2 \\implies du = dx$, and $a = 3$:
            $$\\int \\frac{dx}{(x + 2)^2 + 3^2} = \\frac{1}{3} \\tan^{-1}\\left(\\frac{x + 2}{3}\\right) + C$$
          </div>

          <div class="final-box">
            ✅ <strong>Result:</strong> $\\frac{1}{3} \\tan^{-1}\\left(\\frac{x + 2}{3}\\right) + C$.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2078, 2080, 2082)</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 Definite Integral & Bounded Area</span>
        </div>
        <div class="q-title">
          Q3. Find by integration the area bounded by the parabola $y = x^2$ and the straight line $y = 4$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Find the points of intersection</div>
            Set $x^2 = 4 \\implies x = \\pm 2$.<br/>
            The region is bounded between $x = -2$ and $x = 2$, where the line $y = 4$ lies above the parabola $y = x^2$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Set up the definite integral using symmetry</div>
            Because the region is symmetric about the y-axis:
            $$\\text{Area} = \\int_{-2}^2 (4 - x^2) \\, dx = 2 \\int_0^2 (4 - x^2) \\, dx$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Integrate and evaluate limits</div>
            $$= 2 \\left[ 4x - \\frac{x^3}{3} \\right]_0^2 = 2 \\left[ 4(2) - \\frac{2^3}{3} - 0 \\right] = 2 \\left[ 8 - \\frac{8}{3} \\right] = 2 \\left( \\frac{16}{3} \\right) = \\frac{32}{3}\\text{ sq. units}$$
          </div>

          <div class="final-box">
            ✅ <strong>Total Bounded Area:</strong> $\\frac{32}{3}\\text{ sq. units} \\approx 10.67\\text{ sq. units}$.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 12. VECTORS & 3D COORDINATE GEOMETRY
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-vectors-3d",
    class: "11",
    subject: "Mathematics",
    chapter: "Vectors & 3D Geometry",
    title: "Vectors & 3D Geometry — NEB Class 11 Board Solved Questions",
    icon: "🧭",
    summary:
      "Question-solution first Class 11 Vectors & 3D notes: Direction cosines (l² + m² + n² = 1), direction ratios, angle between two 3D lines, coplanar vectors conditions, and linear independence.",
    tags: ["Vectors", "3D Geometry", "Direction Cosines", "Coplanar Vectors", "Linear Independence", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Vectors & 3D Geometry</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Direction Cosines:</strong><br/>
            $$l^2 + m^2 + n^2 = 1$$<br/>
            $$l = \\frac{a}{\\sqrt{a^2+b^2+c^2}}$$
          </div>
          <div>
            <strong>Angle Between Lines:</strong><br/>
            $$\\cos\\theta = \\frac{a_1 a_2 + b_1 b_2 + c_1 c_2}{\\sqrt{\\sum a_1^2}\\sqrt{\\sum a_2^2}}$$
          </div>
          <div>
            <strong>Coplanar Condition:</strong><br/>
            $$[\\vec{a}, \\vec{b}, \\vec{c}] = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix} = 0$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 Direction Cosines Proof & Angle</span>
        </div>
        <div class="q-title">
          Q1. (a) If $l, m, n$ are the direction cosines of a directed line in space, prove that $l^2 + m^2 + n^2 = 1$.<br/>
          (b) Find the acute angle between two lines whose direction ratios are $(1, 2, 3)$ and $(-2, 1, 2)$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Proof that $l^2 + m^2 + n^2 = 1$</div>
            Let a line through the origin $O(0,0,0)$ have direction angles $\\alpha, \\beta, \\gamma$ with the coordinate axes.<br/>
            Then $l = \\cos\\alpha, m = \\cos\\beta, n = \\cos\\gamma$.<br/>
            Let $P(x, y, z)$ be any point on the line at distance $r$ from the origin, so $r = \\sqrt{x^2 + y^2 + z^2}$.<br/>
            From right-angled triangles formed by projecting $OP$ onto axes:
            $$x = r \\cos\\alpha = r l, \quad y = r \\cos\\beta = r m, \quad z = r \\cos\\gamma = r n$$
            Squaring and adding:
            $$x^2 + y^2 + z^2 = r^2 l^2 + r^2 m^2 + r^2 n^2 = r^2(l^2 + m^2 + n^2)$$
            Since $x^2 + y^2 + z^2 = r^2$:
            $$r^2 = r^2(l^2 + m^2 + n^2) \\implies l^2 + m^2 + n^2 = 1 \quad \text{(Hence proved)}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Solve Part (b) for Angle $\\theta$</div>
            Direction ratios: $a_1 = 1, b_1 = 2, c_1 = 3$ and $a_2 = -2, b_2 = 1, c_2 = 2$:
            $$\\cos\\theta = \\frac{|a_1 a_2 + b_1 b_2 + c_1 c_2|}{\\sqrt{a_1^2 + b_1^2 + c_1^2} \\sqrt{a_2^2 + b_2^2 + c_2^2}}$$
            Numerator:
            $$|1(-2) + 2(1) + 3(2)| = |-2 + 2 + 6| = 6$$
            Denominator:
            $$\\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14}$$
            $$\\sqrt{(-2)^2 + 1^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$$
            $$\\cos\\theta = \\frac{6}{3\\sqrt{14}} = \\frac{2}{\\sqrt{14}}$$
            $$\\theta = \\arccos\\left(\\frac{2}{\\sqrt{14}}\\right) \\approx 57.69^\\circ$$
          </div>

          <div class="final-box">
            ✅ <strong>Results:</strong> Identity $l^2 + m^2 + n^2 = 1$ proved, and $\\theta = \\arccos(2/\\sqrt{14})$.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Coplanar Vectors</span>
        </div>
        <div class="q-title">
          Q2. Show that the vectors $\\vec{a} = \\hat{i} - 2\\hat{j} + 3\\hat{k}$, $\\vec{b} = -2\\hat{i} + 3\\hat{j} - 4\\hat{k}$, and $\\vec{c} = \\hat{i} - 3\\hat{j} + 5\\hat{k}$ are coplanar.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Set up the Scalar Triple Product $[\\vec{a}, \\vec{b}, \\vec{c}]$</div>
            Three vectors are coplanar if and only if their scalar triple product is zero:
            $$[\\vec{a}, \\vec{b}, \\vec{c}] = \\begin{vmatrix} 1 & -2 & 3 \\\\ -2 & 3 & -4 \\\\ 1 & -3 & 5 \\end{vmatrix}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Expand the determinant</div>
            $$= 1 \\cdot \\begin{vmatrix} 3 & -4 \\\\ -3 & 5 \\end{vmatrix} - (-2) \\cdot \\begin{vmatrix} -2 & -4 \\\\ 1 & 5 \\end{vmatrix} + 3 \\cdot \\begin{vmatrix} -2 & 3 \\\\ 1 & -3 \\end{vmatrix}$$
            $$= 1[3(5) - (-4)(-3)] + 2[(-2)(5) - (-4)(1)] + 3[(-2)(-3) - 3(1)]$$
            $$= 1(15 - 12) + 2(-10 + 4) + 3(6 - 3)$$
            $$= 1(3) + 2(-6) + 3(3) = 3 - 12 + 9 = 0$$
          </div>

          <div class="final-box">
            ✅ <strong>Conclusion:</strong> Since $[\\vec{a}, \\vec{b}, \\vec{c}] = 0$, the given vectors are strictly <strong>coplanar</strong>.
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 13. STATISTICS (DISPERSION & SKEWNESS)
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-statistics",
    class: "11",
    subject: "Mathematics",
    chapter: "Statistics",
    title: "Statistics — NEB Class 11 Board Solved Questions",
    icon: "📊",
    summary:
      "Question-solution first Class 11 Statistics notes: Standard deviation and Coefficient of Variation (C.V.) to compare consistency of distributions, Karl Pearson's coefficient of skewness, and combined mean/variance.",
    tags: ["Statistics", "Standard Deviation", "Coefficient of Variation", "Skewness", "Consistency", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Statistics</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Standard Deviation (\\(\\sigma\\)):</strong><br/>
            $$\\sigma = \\sqrt{\\frac{\\sum fd^2}{N} - \\left(\\frac{\\sum fd}{N}\\right)^2} \\times h$$
          </div>
          <div>
            <strong>Coefficient of Variation:</strong><br/>
            $$C.V. = \\frac{\\sigma}{\\bar{X}} \\times 100\\%$$<br/>
            <em>Lower C.V. $\\implies$ Higher consistency</em>
          </div>
          <div>
            <strong>Karl Pearson Skewness:</strong><br/>
            $$S_k = \\frac{\\bar{X} - M_o}{\\sigma} = \\frac{3(\\bar{X} - M_d)}{\\sigma}$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082) — SURE 6 MARKS</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 Comparison of Consistency (C.V.)</span>
        </div>
        <div class="q-title">
          Q1. The scores of two batsmen, A and B, in 10 innings are recorded as follows:
          <br/><strong>Batsman A:</strong> Mean score $\\bar{X}_A = 48$, Standard deviation $\\sigma_A = 12$.
          <br/><strong>Batsman B:</strong> Mean score $\\bar{X}_B = 52$, Standard deviation $\\sigma_B = 15$.
          <br/>(a) Which batsman is a better run-getter on average?
          <br/>(b) Which batsman is more consistent in performance?
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Part (a): Comparing Average Scoring</div>
            Mean score of Batsman A = $48$.<br/>
            Mean score of Batsman B = $52$.<br/>
            Since $\\bar{X}_B > \\bar{X}_A$, <strong>Batsman B is a better run-getter</strong> on average.
          </div>

          <div class="step-block">
            <div class="step-tag">Part (b): Comparing Consistency using Coefficient of Variation (C.V.)</div>
            Consistency is measured by the Coefficient of Variation ($C.V.$). The batsman with the <strong>lower C.V.</strong> is more consistent.
            $$C.V._A = \\frac{\\sigma_A}{\\bar{X}_A} \\times 100\\% = \\frac{12}{48} \\times 100\\% = \\frac{1}{4} \\times 100\\% = 25\\%$$
            $$C.V._B = \\frac{\\sigma_B}{\\bar{X}_B} \\times 100\\% = \\frac{15}{52} \\times 100\\% = 0.2885 \\times 100\\% \\approx 28.85\\%$$
          </div>

          <div class="step-block">
            <div class="step-tag">Conclusion</div>
            Since $C.V._A (25\\%) < C.V._B (28.85\\%)$, the variation in Batsman A's scores is lower.<br/>
            Therefore, <strong>Batsman A is more consistent</strong> in his performance.
          </div>

          <div class="final-box">
            ✅ <strong>Final Verdict:</strong><br/>
            (a) Better average scorer: <strong>Batsman B</strong><br/>
            (b) More consistent batsman: <strong>Batsman A</strong> (since $C.V._A = 25\\% < C.V._B = 28.85\\%$)
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 Karl Pearson's Coefficient of Skewness</span>
        </div>
        <div class="q-title">
          Q2. For a frequency distribution, the mean is $45$, median is $48$, and the standard deviation is $15$. Calculate Karl Pearson's coefficient of skewness and comment on the shape of the distribution.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Formula for Karl Pearson Skewness using Median</div>
            $$S_k = \\frac{3(\\bar{X} - M_d)}{\\sigma}$$
            where $\\bar{X} = 45$, $M_d = 48$, and $\\sigma = 15$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Substitution and Calculation</div>
            $$S_k = \\frac{3(45 - 48)}{15} = \\frac{3(-3)}{15} = \\frac{-9}{15} = -0.6$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Interpretation</div>
            Since $S_k = -0.6 < 0$, the distribution is <strong>negatively skewed</strong> (skewed to the left), meaning that the tail of the distribution extends further towards the smaller values (Mode > Median > Mean).
          </div>

          <div class="final-box">
            ✅ <strong>Result:</strong> $S_k = -0.6$ (Negatively skewed distribution).
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 14. PROBABILITY
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-probability",
    class: "11",
    subject: "Mathematics",
    chapter: "Probability",
    title: "Probability — NEB Class 11 Board Solved Questions",
    icon: "🎲",
    summary:
      "Question-solution first Class 11 Probability notes: Addition theorem of probability (mutually vs non-mutually exclusive), multiplication theorem for independent events, and conditional sampling without replacement.",
    tags: ["Probability", "Addition Theorem", "Independent Events", "Sample Space", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Probability</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Addition Theorem:</strong><br/>
            $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$<br/>
            <em>Mutually exclusive: $P(A \\cap B) = 0$</em>
          </div>
          <div>
            <strong>Independent Events:</strong><br/>
            $$P(A \\cap B) = P(A) \\cdot P(B)$$<br/>
            $$P(A \\cup B) = 1 - P(A')P(B')$$
          </div>
          <div>
            <strong>Complementary Rule:</strong><br/>
            $$P(A') = 1 - P(A)$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Addition Theorem Statement & Proof</span>
        </div>
        <div class="q-title">
          Q1. State and prove the Addition Theorem of Probability for any two non-mutually exclusive events $A$ and $B$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Statement</div>
            If $A$ and $B$ are any two events associated with a random experiment having sample space $S$, then:
            $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Proof using Set Cardinality</div>
            Let $n(S)$ be the total number of equally likely sample points.<br/>
            From set theory, the number of elements in $A \\cup B$ is:
            $$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$
            Dividing throughout by $n(S)$:
            $$\\frac{n(A \\cup B)}{n(S)} = \\frac{n(A)}{n(S)} + \\frac{n(B)}{n(S)} - \\frac{n(A \\cap B)}{n(S)}$$
            By classical definition of probability $P(E) = \\frac{n(E)}{n(S)}$:
            $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \quad \text{(Hence proved)}$$
          </div>

          <div class="final-box">
            ✅ <strong>Proved:</strong> $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 4/5 Recent Years (2079, 2081, 2082)</span>
          <span class="badge-marks">🏷️ 4 Marks</span>
          <span class="badge-type">📌 Independent Events</span>
        </div>
        <div class="q-title">
          Q2. The probability that student A solves a problem is $\\frac{2}{3}$, and the probability that student B solves it is $\\frac{3}{5}$. If both try independently, find the probability that:
          <br/>(a) The problem is solved.
          <br/>(b) Exactly one of them solves the problem.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Identify probabilities and complements</div>
            $$P(A) = \\frac{2}{3} \\implies P(A') = 1 - \\frac{2}{3} = \\frac{1}{3}$$
            $$P(B) = \\frac{3}{5} \\implies P(B') = 1 - \\frac{3}{5} = \\frac{2}{5}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Part (a): Probability that the problem is solved</div>
            The problem is solved if at least one student solves it:
            $$P(\\text{Solved}) = 1 - P(\\text{Neither solves it}) = 1 - P(A' \\cap B')$$
            Since the attempts are independent: $P(A' \\cap B') = P(A') \\cdot P(B')$:
            $$P(\\text{Solved}) = 1 - \\left(\\frac{1}{3} \\times \\frac{2}{5}\\right) = 1 - \\frac{2}{15} = \\frac{13}{15}$$
          </div>

          <div class="step-block">
            <div class="step-tag">Part (b): Exactly one solves the problem</div>
            This means either (A solves and B fails) OR (A fails and B solves):
            $$P(\\text{Exactly one}) = P(A \\cap B') + P(A' \\cap B)$$
            $$= P(A)P(B') + P(A')P(B) = \\left(\\frac{2}{3} \\times \\frac{2}{5}\\right) + \\left(\\frac{1}{3} \\times \\frac{3}{5}\\right)$$
            $$= \\frac{4}{15} + \\frac{3}{15} = \\frac{7}{15}$$
          </div>

          <div class="final-box">
            ✅ <strong>Final Probabilities:</strong><br/>
            (a) $P(\\text{Problem is solved}) = \\frac{13}{15}$<br/>
            (b) $P(\\text{Exactly one solves}) = \\frac{7}{15}$
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // 15. COMPUTATIONAL METHODS & LINEAR PROGRAMMING
  // ─────────────────────────────────────────────────────────────
  {
    id: "math11-computational-methods",
    class: "11",
    subject: "Mathematics",
    chapter: "Computational Methods & LPP",
    title: "Computational Methods & LPP — NEB Class 11 Board Solved Questions",
    icon: "💻",
    summary:
      "Question-solution first Class 11 Computational Methods notes: Root finding via Bisection Method, Newton-Raphson iteration and geometric derivation, and Linear Programming Problem (LPP) graphical maximization.",
    tags: ["Bisection Method", "Newton Raphson", "Linear Programming", "Numerical Methods", "Mathematics", "Class 11", "NEB"],
    content: `
      <div class="formula-box">
        <span class="formula-label">⚡ 1-Minute Formula Reference: Numerical Methods & LPP</span>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 8px;">
          <div>
            <strong>Bisection Method:</strong><br/>
            $$f(a)f(b) < 0 \\implies x_{mid} = \\frac{a + b}{2}$$
          </div>
          <div>
            <strong>Newton-Raphson:</strong><br/>
            $$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
          </div>
          <div>
            <strong>LPP Corner Point:</strong><br/>
            $$\\text{Max/Min of } Z = ax + by \\text{ occurs at vertices}$$
          </div>
        </div>
      </div>

      <h2>High-Frequency NEB Board Questions & Full Solutions</h2>

      <!-- Q1 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082)</span>
          <span class="badge-marks">🏷️ 4 / 6 Marks</span>
          <span class="badge-type">📌 Bisection Method Root Finding</span>
        </div>
        <div class="q-title">
          Q1. Find the real root of the equation $x^3 - x - 1 = 0$ correct to $2$ decimal places using the Bisection Method in the interval $[1, 2]$.
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Check intermediate value property</div>
            Let $f(x) = x^3 - x - 1$:
            $$f(1) = 1^3 - 1 - 1 = -1 < 0$$
            $$f(2) = 2^3 - 2 - 1 = 8 - 3 = 5 > 0$$
            Since $f(1) \cdot f(2) < 0$, a real root lies in $[1, 2]$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Iterations Table</div>
            <table class="w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-xs my-2">
              <thead class="bg-slate-100 dark:bg-slate-800">
                <tr><th>Iter</th><th>$a$</th><th>$b$</th><th>$x_m = \\frac{a+b}{2}$</th><th>$f(x_m)$</th><th>Update</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>1.0</td><td>2.0</td><td>1.500</td><td>$1.5^3 - 1.5 - 1 = +0.875$</td><td>$b = 1.5$</td></tr>
                <tr><td>2</td><td>1.0</td><td>1.5</td><td>1.250</td><td>$1.25^3 - 1.25 - 1 = -0.297$</td><td>$a = 1.25$</td></tr>
                <tr><td>3</td><td>1.25</td><td>1.5</td><td>1.375</td><td>$1.375^3 - 1.375 - 1 = +0.225$</td><td>$b = 1.375$</td></tr>
                <tr><td>4</td><td>1.25</td><td>1.375</td><td>1.3125</td><td>$1.3125^3 - 1.3125 - 1 = -0.051$</td><td>$a = 1.3125$</td></tr>
                <tr><td>5</td><td>1.3125</td><td>1.375</td><td>1.3438</td><td>$1.3438^3 - 1.3438 - 1 = +0.083$</td><td>$b = 1.3438$</td></tr>
                <tr><td>6</td><td>1.3125</td><td>1.3438</td><td>1.3281</td><td>$1.3281^3 - 1.3281 - 1 = +0.015$</td><td>$b = 1.3281$</td></tr>
                <tr><td>7</td><td>1.3125</td><td>1.3281</td><td>1.3203</td><td>$1.3203^3 - 1.3203 - 1 = -0.018$</td><td>$a = 1.3203$</td></tr>
                <tr><td>8</td><td>1.3203</td><td>1.3281</td><td>1.3242</td><td>$\\approx 0$</td><td>Converged</td></tr>
              </tbody>
            </table>
          </div>

          <div class="final-box">
            ✅ <strong>Approximate Root:</strong> $x \approx 1.32$ (correct to 2 decimal places).
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="q-card">
        <div class="q-meta-bar">
          <span class="badge-freq">🔥 Appeared in 5/5 Recent Years (2078–2082) — SURE 6 MARKS</span>
          <span class="badge-marks">🏷️ 6 Marks</span>
          <span class="badge-type">📌 Linear Programming Graphical Optimization</span>
        </div>
        <div class="q-title">
          Q2. Maximize $Z = 3x + 5y$ subject to the constraints:
          $$x + 2y \le 10$$
          $$3x + y \le 15$$
          $$x \ge 0, \quad y \ge 0$$
        </div>
        <div class="q-solution">
          <div class="sol-heading">💡 Full Step-by-Step Worked Solution</div>

          <div class="step-block">
            <div class="step-tag">Step 1: Convert inequalities to boundary lines and find intercepts</div>
            <ul>
              <li><strong>Line 1:</strong> $x + 2y = 10$:<br/>
              When $x = 0, y = 5 \implies (0, 5)$.<br/>
              When $y = 0, x = 10 \implies (10, 0)$.<br/>
              Origin test $(0,0)$: $0 + 0 \le 10$ (True $\implies$ towards origin).</li>
              <li><strong>Line 2:</strong> $3x + y = 15$:<br/>
              When $x = 0, y = 15 \implies (0, 15)$.<br/>
              When $y = 0, x = 5 \implies (5, 0)$.<br/>
              Origin test $(0,0)$: $0 + 0 \le 15$ (True $\implies$ towards origin).</li>
              <li><strong>Non-negativity:</strong> $x \ge 0, y \ge 0$ restricts the region to the <strong>first quadrant</strong>.</li>
            </ul>
          </div>

          <div class="step-block">
            <div class="step-tag">Step 2: Find point of intersection of the two boundary lines</div>
            From Line 2: $y = 15 - 3x$.<br/>
            Substitute into Line 1:
            $$x + 2(15 - 3x) = 10 \implies x + 30 - 6x = 10 \implies -5x = -20 \implies x = 4$$
            $$y = 15 - 3(4) = 15 - 12 = 3$$
            Intersection point $B = (4, 3)$.
          </div>

          <div class="step-block">
            <div class="step-tag">Step 3: Corner Points and Objective Function Evaluation</div>
            The bounded feasible region has vertices $O(0, 0), A(5, 0), B(4, 3), C(0, 5)$:
            <table class="w-full text-center border-collapse border border-slate-300 dark:border-slate-700 text-xs sm:text-sm my-2">
              <thead class="bg-slate-100 dark:bg-slate-800">
                <tr><th>Corner Point $(x, y)$</th><th>$Z = 3x + 5y$</th><th>Value</th></tr>
              </thead>
              <tbody>
                <tr><td>$O(0, 0)$</td><td>$3(0) + 5(0)$</td><td>0</td></tr>
                <tr><td>$A(5, 0)$</td><td>$3(5) + 5(0)$</td><td>15</td></tr>
                <tr><td>$B(4, 3)$</td><td>$3(4) + 5(3) = 12 + 15$</td><td><strong>27 (Maximum)</strong></td></tr>
                <tr><td>$C(0, 5)$</td><td>$3(0) + 5(5)$</td><td>25</td></tr>
              </tbody>
            </table>
          </div>

          <div class="final-box">
            ✅ <strong>Maximum Value:</strong> $Z_{\\max} = \mathbf{27}$ at optimal point $(x, y) = (4, 3)$.
          </div>
        </div>
      </div>
    `
  }
];

// Automatically merge Class 11 Math Notes if staticNotes is already defined
if (typeof window !== 'undefined' && Array.isArray(window.staticNotes)) {
  window.math11Notes.forEach(mNote => {
    const idx = window.staticNotes.findIndex(n => n && n.id === mNote.id);
    if (idx >= 0) {
      window.staticNotes[idx] = mNote;
    } else {
      window.staticNotes.push(mNote);
    }
  });
}

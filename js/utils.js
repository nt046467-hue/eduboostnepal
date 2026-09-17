window.FIREBASE_CONFIG = window.FIREBASE_CONFIG || {apiKey:"AIzaSyCbVzplSn0UL2KRB3B45SCByJSm2FXPByw",authDomain:"eduboost-f611f.firebaseapp.com",projectId:"eduboost-f611f",storageBucket:"eduboost-f611f.firebasestorage.app",messagingSenderId:"121788124993",appId:"1:121788124993:web:4df0ec72b1e187e76c1bc0",measurementId:"G-1SDQZYXSKS"};var FIREBASE_CONFIG = window.FIREBASE_CONFIG;const GEMINI_API_URL="/api/gemini";function initFirebase(){if(typeof firebase==="undefined"){console.error("Firebase SDK not loaded. Make sure to include Firebase CDN scripts.");return null;}
if(!firebase.apps.length){firebase.initializeApp(FIREBASE_CONFIG);}
return firebase;}
function requireAuth(redirectTo="../pages/login.html"){return new Promise((resolve,reject)=>{const fb=initFirebase();if(!fb){reject(new Error("Firebase not initialized"));return;}
fb.auth().onAuthStateChanged((user)=>{if(user){resolve(user);}else{window.location.href=redirectTo;reject(new Error("User not authenticated"));}});});}
async function getUserProfile(uid){try{const doc=await firebase.firestore().collection("users").doc(uid).get();return doc.exists?doc.data():null;}catch(e){console.error("Error fetching user profile:",e);return null;}}
async function signOut(){try{await firebase.auth().signOut();window.location.href="../index.html";}catch(e){console.error("Sign out error:",e);showToast("Failed to sign out. Please try again.","error");}}
async function callGeminiAI(prompt,options={},retries=2){const{mode="answer",answerStyle="Board Exam Style",subject="",marks=5,level="Grade 11",chapter="",difficulty="Medium",mcqCount=10,}=options;const body=JSON.stringify({prompt:prompt.trim(),mode,answerStyle,subject,marks,level,chapter,difficulty,mcqCount,});const timeoutPromise=new Promise((_,reject)=>setTimeout(()=>reject(new Error("Gemini API request timeout (45s)")),45000,),);const fetchWithRetries=async()=>{for(let attempt=0;attempt<=retries;attempt++){try{const response=await fetch(GEMINI_API_URL,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",},body,});const data=await response.json().catch(()=>null);if(!response.ok||data?.error){const message=data?.error||`HTTP ${response.status}`;if([400,403,429].includes(response.status)){throw new Error(`Gemini proxy error:${message}`);}
if(attempt<retries){await _sleep(600*(attempt+1));continue;}
throw new Error(`Gemini proxy error:${message}`);}
const text=data?.text;if(!text)throw new Error("AI returned an empty response.");return text;}catch(e){if(attempt===retries)throw e;await _sleep(600*(attempt+1));}}};return Promise.race([fetchWithRetries(),timeoutPromise]);}
function _sleep(ms){return new Promise((resolve)=>setTimeout(resolve,ms));}
const LOCAL_SAVED_CONTENT_KEY="eduboost_localSavedContent";function getLocalSavedContent(){try{return JSON.parse(localStorage.getItem(LOCAL_SAVED_CONTENT_KEY)||"[]");}catch(e){console.warn("Failed to parse local saved content:",e);return[];}}
function setLocalSavedContent(items){try{localStorage.setItem(LOCAL_SAVED_CONTENT_KEY,JSON.stringify(items));}catch(e){console.warn("Failed to store local saved content:",e);}}
function saveLocalGeneratedContent(item){const items=getLocalSavedContent();items.unshift(item);setLocalSavedContent(items);}
function updateLocalSavedContentId(oldId,newId){const items=getLocalSavedContent();const updated=items.map((item)=>item.id===oldId?{...item,id:newId,localOnly:false}:item,);setLocalSavedContent(updated);}
function removeLocalSavedContent(id){const items=getLocalSavedContent();const filtered=items.filter((item)=>item.id!==id);setLocalSavedContent(filtered);}
async function saveGeneratedContent(userId,type,content,metadata={}){try{if(!userId){console.error("saveGeneratedContent: userId is required");return null;}
if(!type||!content){console.error("saveGeneratedContent: type and content are required");return null;}
const fb=initFirebase();if(!fb){console.error("saveGeneratedContent: Firebase not initialized");return null;}
const docRef=await firebase.firestore().collection("savedContent").add({uid:userId,userId,type,content:content.trim(),metadata:{...metadata,contentLength:content.trim().length,wordCount:content.trim().split(/\s+/).length,timestamp:Date.now(),},createdAt:firebase.firestore.FieldValue.serverTimestamp(),});console.log("Content saved successfully with ID:",docRef.id);return docRef.id;}catch(e){console.error("Save error:",e);if(e.code){console.error("Firestore error code:",e.code);console.error("Firestore error message:",e.message);}
return null;}}
async function getSavedContent(userId,type=null){try{let query=firebase.firestore().collection("savedContent").where("userId","==",userId).orderBy("createdAt","desc").limit(20);if(type){query=firebase.firestore().collection("savedContent").where("userId","==",userId).where("type","==",type).orderBy("createdAt","desc").limit(20);}
const snap=await query.get();return snap.docs.map((d)=>({id:d.id,...d.data()}));}catch(e){console.error("Fetch saved error:",e);if(e.code==="failed-precondition"){console.warn("Firestore missing index. Visit:\n"+
"https://console.firebase.google.com/project/eduboost-f611f/firestore/indexes",);}
return[];}}
function showToast(message,type="success"){const colors={success:"bg-green-500",error:"bg-red-500",info:"bg-blue-500",warning:"bg-yellow-500",};const toast=document.createElement("div");toast.className=`fixed bottom-6 right-6 ${colors[type]||colors.info}text-white px-6 py-3 rounded-xl shadow-2xl z-[9999]text-sm font-medium transform translate-y-4 opacity-0 transition-all duration-300`;toast.textContent=message;document.body.appendChild(toast);setTimeout(()=>{toast.style.transform="translateY(0)";toast.style.opacity="1";},10);setTimeout(()=>{toast.style.transform="translateY(4px)";toast.style.opacity="0";setTimeout(()=>toast.remove(),300);},3000);}
async function copyToClipboard(text,btnEl=null){try{await navigator.clipboard.writeText(text);if(btnEl){const original=btnEl.textContent;btnEl.textContent="✓ Copied!";btnEl.classList.add("text-green-400");setTimeout(()=>{btnEl.textContent=original;btnEl.classList.remove("text-green-400");},2000);}
showToast("Copied to clipboard!");return true;}catch(e){showToast("Failed to copy","error");return false;}}
function formatAIResponse(text){if(!text)return"";let html=text;html=html.replace(/✅\s*\*\*Correct Answer:\s*\(([A-D])\)\*\*\s*[—–-]\s*(.+)/g,`<div class="neb-correct-answer"><span class="neb-correct-badge">✅ Correct Answer</span><span class="neb-correct-option">($1)</span><span class="neb-correct-text">$2</span></div>`,);html=html.replace(/💡\s*\*\*Explanation:\*\*\s*(.+)/g,`<div class="neb-explanation"><span class="neb-explanation-icon">💡</span><span class="neb-explanation-text"><strong>Explanation:</strong>$1</span></div>`,);html=html.replace(/🔴\s*\*\*Very Important\*\*/g,`<span class="neb-tag neb-tag-red">🔴 Very Important</span>`,);html=html.replace(/🟡\s*\*\*Important\*\*/g,`<span class="neb-tag neb-tag-yellow">🟡 Important</span>`,);html=html.replace(/🟢\s*\*\*Good to Know\*\*/g,`<span class="neb-tag neb-tag-green">🟢 Good to Know</span>`,);html=html.replace(/🔴(?!\s*\*\*)/g,`<span class="neb-tag neb-tag-red">🔴 Very Important</span>`,);html=html.replace(/🟡(?!\s*\*\*)/g,`<span class="neb-tag neb-tag-yellow">🟡 Important</span>`,);html=html.replace(/🟢(?!\s*\*\*)/g,`<span class="neb-tag neb-tag-green">🟢 Good to Know</span>`,);html=html.replace(/^#### (.+)$/gm,`<h4 class="neb-h4">$1</h4>`);html=html.replace(/^### (.+)$/gm,`<h3 class="neb-h3">$1</h3>`);html=html.replace(/^## (.+)$/gm,`<h2 class="neb-h2">$1</h2>`);html=html.replace(/^# (.+)$/gm,`<h1 class="neb-h1">$1</h1>`);html=html.replace(/^---+$/gm,`<hr class="neb-divider"/>`);html=html.replace(/^━+$/gm,`<hr class="neb-divider neb-divider-thick"/>`);html=html.replace(/((?:^\|.+\|\n?)+)/gm,(tableBlock)=>{const rows=tableBlock.trim().split("\n");if(rows.length<2)return tableBlock;let tableHtml=`<div class="neb-table-wrap"><table class="neb-table">`;rows.forEach((row,i)=>{if(/^\|[\s\-:]+\|/.test(row))return;const cells=row.split("|").filter((_,idx,arr)=>idx>0&&idx<arr.length-1);const tag=i===0?"th":"td";const trClass=i===0?' class="neb-table-head"':i%2===0?' class="neb-table-row-alt"':"";tableHtml+=`<tr${trClass}>`;cells.forEach((cell)=>{tableHtml+=`<${tag}class="neb-table-cell">${cell.trim()}</${tag}>`;});tableHtml+=`</tr>`;});tableHtml+=`</table></div>`;return tableHtml;});html=html.replace(/`([^`]+)`/g,`<code class="neb-code">$1</code>`);html=html.replace(/→\s*Formula:\s*(.+)/g,`<div class="neb-formula">📐<strong>Formula:</strong><span class="neb-formula-text">$1</span></div>`,);html=html.replace(/\[DIAGRAM:\s*([^\]]+)\]/g,`<div class="neb-diagram-box"><span class="neb-diagram-icon">📊</span><span class="neb-diagram-label">Draw diagram:<em>$1</em></span></div>`,);html=html.replace(/\*\*\*(.+?)\*\*\*/g,`<strong><em class="text-orange-300">$1</em></strong>`,);html=html.replace(/\*\*(.+?)\*\*/g,`<strong class="neb-bold">$1</strong>`);html=html.replace(/\*(.+?)\*/g,`<em class="neb-italic">$1</em>`);html=html.replace(/\[(\d+)\s*marks?\]/gi,`<span class="neb-marks-badge">$1 marks</span>`,);html=html.replace(/^[-*]\s*\(([A-D])\)\s*(.+)$/gm,`<div class="neb-mcq-option"><span class="neb-option-letter">($1)</span><span class="neb-option-text">$2</span></div>`,);html=html.replace(/((?:^\d+\.\s+.+$\n?)+)/gm,(block)=>{const items=block.trim().split("\n").map((line)=>{const content=line.replace(/^\d+\.\s+/,"");return`<li class="neb-ol-item">${content}</li>`;}).join("");return`<ol class="neb-ol">${items}</ol>`;});html=html.replace(/((?:^[-*•]\s+.+$\n?)+)/gm,(block)=>{const items=block.trim().split("\n").map((line)=>{const content=line.replace(/^[-*•]\s+/,"");return`<li class="neb-li">${content}</li>`;}).join("");return`<ul class="neb-ul">${items}</ul>`;});html=html.replace(/^→\s+(.+)$/gm,`<div class="neb-subpoint"><span class="neb-arrow">→</span>$1</div>`,);const blockTags=/^<(h[1-4]|ul|ol|div|hr|table|pre)/;html=html.split(/\n\n+/).map((chunk)=>{chunk=chunk.trim();if(!chunk)return"";if(blockTags.test(chunk))return chunk;return`<p class="neb-p">${chunk.replace(/\n/g,"<br/>")}</p>`;}).join("\n");html=html.replace(/(?<!<br\/>)\n(?!<)/g,"<br/>");return`<div class="neb-response">${html}</div>`;}
(function injectNEBStyles(){if(document.getElementById("neb-response-styles"))return;const style=document.createElement("style");style.id="neb-response-styles";style.textContent=`.neb-response{font-family:'Georgia',serif;color:#e2e8f0;line-height:1.8;}
.neb-h1{font-size:1.5rem;font-weight:800;color:#fff;margin:1.5rem 0 0.75rem;border-bottom:2px solid#f97316;padding-bottom:0.25rem;}.neb-h2{font-size:1.25rem;font-weight:700;color:#fb923c;margin:1.25rem 0 0.5rem;}.neb-h3{font-size:1.1rem;font-weight:700;color:#fcd34d;margin:1rem 0 0.4rem;}.neb-h4{font-size:1rem;font-weight:600;color:#94a3b8;margin:0.75rem 0 0.3rem;}
.neb-p{margin:0.6rem 0;color:#cbd5e1;}
.neb-bold{color:#fff;font-weight:700;}.neb-italic{color:#fbbf24;font-style:italic;}
.neb-ul{list-style:none;margin:0.5rem 0 0.5rem 0.5rem;padding:0;}.neb-ol{margin:0.5rem 0 0.5rem 1rem;padding:0;}.neb-li{position:relative;padding-left:1.25rem;color:#cbd5e1;margin-bottom:0.3rem;}.neb-li::before{content:"•";color:#f97316;position:absolute;left:0;font-weight:bold;}.neb-ol-item{color:#cbd5e1;margin-bottom:0.4rem;padding-left:0.25rem;}
.neb-subpoint{display:flex;gap:0.4rem;margin:0.3rem 0 0.3rem 1rem;color:#94a3b8;font-size:0.95rem;}.neb-arrow{color:#f97316;font-weight:bold;flex-shrink:0;}
.neb-divider{border:none;border-top:1px solid#334155;margin:1rem 0;}.neb-divider-thick{border-top:2px solid#475569;}
.neb-table-wrap{overflow-x:auto;margin:1rem 0;border-radius:8px;border:1px solid#334155;}.neb-table{width:100%;border-collapse:collapse;font-size:0.9rem;}.neb-table-head th.neb-table-cell{background:#1e3a5f;color:#93c5fd;font-weight:700;padding:0.6rem 0.8rem;text-align:left;}.neb-table-cell{padding:0.5rem 0.8rem;border-bottom:1px solid#1e293b;color:#cbd5e1;}.neb-table-row-alt td.neb-table-cell{background:#0f172a;}
.neb-code{background:#1e293b;color:#7dd3fc;padding:0.15rem 0.4rem;border-radius:4px;font-family:monospace;font-size:0.9rem;}.neb-formula{background:#1e3a5f;border-left:3px solid#3b82f6;padding:0.5rem 0.8rem;margin:0.6rem 0;border-radius:4px;color:#93c5fd;}.neb-formula-text{font-family:monospace;font-size:1rem;color:#7dd3fc;}
.neb-diagram-box{background:#1c2a3a;border:1.5px dashed#475569;border-radius:8px;padding:0.75rem 1rem;margin:0.75rem 0;display:flex;align-items:center;gap:0.6rem;color:#64748b;font-size:0.9rem;}.neb-diagram-icon{font-size:1.2rem;}
.neb-marks-badge{background:#7c3aed;color:#ede9fe;font-size:0.75rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:999px;margin-left:0.4rem;vertical-align:middle;}
.neb-tag{display:inline-block;font-size:0.75rem;font-weight:700;padding:0.15rem 0.6rem;border-radius:999px;margin:0.3rem 0;}.neb-tag-red{background:#450a0a;color:#fca5a5;border:1px solid#991b1b;}.neb-tag-yellow{background:#422006;color:#fde68a;border:1px solid#92400e;}.neb-tag-green{background:#052e16;color:#86efac;border:1px solid#166534;}
.neb-mcq-option{display:flex;align-items:flex-start;gap:0.6rem;padding:0.4rem 0.6rem;margin:0.25rem 0;border-radius:6px;background:#0f172a;border:1px solid#1e293b;transition:background 0.15s;}.neb-mcq-option:hover{background:#1e293b;}.neb-option-letter{font-weight:700;color:#f97316;min-width:2rem;flex-shrink:0;}.neb-option-text{color:#cbd5e1;}
.neb-correct-answer{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem;background:#052e16;border:1.5px solid#16a34a;border-radius:8px;padding:0.5rem 0.8rem;margin:0.5rem 0;}.neb-correct-badge{font-size:0.8rem;font-weight:700;color:#4ade80;}.neb-correct-option{font-weight:800;color:#4ade80;font-size:1rem;}.neb-correct-text{color:#86efac;}
.neb-explanation{display:flex;gap:0.6rem;background:#1c1a05;border-left:3px solid#fbbf24;border-radius:0 6px 6px 0;padding:0.5rem 0.8rem;margin:0.35rem 0 0.75rem;}.neb-explanation-icon{font-size:1.1rem;flex-shrink:0;}.neb-explanation-text{color:#fde68a;font-size:0.9rem;line-height:1.6;}`;document.head.appendChild(style);})();function loadingSpinner(text="Generating..."){return`<div class="flex items-center gap-3 text-slate-300 py-8 justify-center"><svg class="animate-spin w-6 h-6 text-orange-400"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"><circle class="opacity-25"cx="12"cy="12"r="10"stroke="currentColor"stroke-width="4"></circle><path class="opacity-75"fill="currentColor"d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg><span>${text}</span></div>`;}
function initDarkMode(){try{const saved=localStorage.getItem("eduboost-theme")||localStorage.getItem("theme")||localStorage.getItem("darkMode")||localStorage.getItem("eb-theme")||"dark";if(saved==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}else{document.documentElement.classList.remove("light");document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}}
function toggleDarkMode(){const isDark=document.documentElement.classList.toggle("dark");const mode=isDark?"dark":"light";if(!isDark){document.documentElement.classList.add("light");}else{document.documentElement.classList.remove("light");}try{localStorage.setItem("eduboost-theme",mode);localStorage.setItem("theme",mode);localStorage.setItem("darkMode",mode);localStorage.setItem("eb-theme",mode);}catch(e){}if(typeof updateAllToggleButtons==="function"){updateAllToggleButtons();}}
initDarkMode();const NEB_SUBJECTS={science:["Physics","Chemistry","Biology","Mathematics","Computer Science",],management:["Accountancy","Economics","Business Studies","Mathematics"],humanities:["English","Nepali","Social Studies","Optional Mathematics"],};const NEB_CHAPTERS={Physics:{11:["Measurement","Vectors","Kinematics","Dynamics","Work, Energy & Power","Circular Motion","Gravitation","Simple Harmonic Motion","Mechanical Waves","Heat & Thermodynamics","Electric Field & Potential","Current Electricity","Magnetic Field",],12:["Rotational Dynamics","Periodic Motion","Fluid Statics","Surface Tension","Viscosity","Thermodynamics","Waves","Geometrical Optics","Wave Optics","Electrical Circuits","Thermoelectric Effect","Electronics","Photon","Nuclear Physics",],},Chemistry:{11:["General Chemistry","Atomic Structure","Chemical Bonding","Periodic Table","Oxidation & Reduction","Acids, Bases & Salts","Inorganic Chemistry I","Organic Chemistry I",],12:["Volumetric Analysis","Ionic Equilibrium","Thermodynamics","Electrochemistry","Chemical Kinetics","Inorganic Chemistry II","Organic Chemistry II","Applied Chemistry",],},Mathematics:{11:["Sets & Functions","Algebra","Complex Numbers","Trigonometry","Coordinate Geometry","Statistics","Probability",],12:["Limits & Continuity","Derivatives","Integrals","Differential Equations","Vectors","Statistics & Probability",],},Biology:{11:["Origin of Life","Cell Biology","Genetics","Plant Physiology","Diversity of Living Things","Ecosystem & Environment",],12:["Animal Physiology","Human Biology","Biotechnology","Evolution","Biodiversity","Conservation",],},"Computer Science":{11:["Computer System","Number System","Boolean Logic","Computer Software","Operating System","Programming in C",],12:["Database","Networking","Web Technology","Multimedia","Programming Concepts","Information Security",],},};

// Dynamic Design System and Lucide Script Injections
(function injectDesignSystem() {
  if (document.getElementById("eb-design-system-link")) return;
  const link = document.createElement("link");
  link.id = "eb-design-system-link";
  link.rel = "stylesheet";
  const prefix = window.location.pathname.includes("/pages/") ? "../" : "";
  link.href = prefix + "css/design-system.css";
  document.head.appendChild(link);
})();

(function loadLucideIcons() {
  if (typeof lucide !== "undefined") return;
  const script = document.createElement("script");
  script.src = "https://unpkg.com/lucide@latest";
  script.onload = () => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };
  document.head.appendChild(script);
})();

// Reusable Soft-Gate Auth Modal
window.showAuthModal = function(title = "Join EduBoost Nepal", subtitle = "Log in or sign up to save notes, download resources, and study with our AI Tutor.") {
  let overlay = document.getElementById("eb-auth-modal");
  if (overlay) overlay.remove();

  overlay = document.createElement("div");
  overlay.id = "eb-auth-modal";
  overlay.className = "eb-modal-overlay";
  
  const isInsidePages = window.location.pathname.includes("/pages/");
  const loginPath = isInsidePages ? "login.html" : "pages/login.html";
  const signupPath = isInsidePages ? "signup.html" : "pages/signup.html";
  const logoPath = isInsidePages ? "../public/favicon.png" : "public/favicon.png";
  const returnUrl = encodeURIComponent(window.location.pathname + window.location.search);

  overlay.innerHTML = `
    <div class="eb-modal" onclick="event.stopPropagation()">
      <div class="flex justify-center mb-4">
        <img src="${logoPath}" alt="EduBoost Nepal Logo" class="w-12 h-12" />
      </div>
      <h3 class="text-xl font-bold mb-2" style="font-family: var(--font-serif); margin:0 0 0.5rem 0;">${title}</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto" style="line-height:1.4;">${subtitle}</p>
      <div class="flex flex-col gap-3">
        <a href="${loginPath}?returnUrl=${returnUrl}" class="eb-btn-primary w-full text-center" style="display:block; text-decoration:none;">
          Log In
        </a>
        <a href="${signupPath}?returnUrl=${returnUrl}" class="eb-btn-secondary w-full text-center" style="display:block; text-decoration:none;">
          Create Free Account
        </a>
        <button onclick="closeAuthModal()" class="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mt-2 cursor-pointer bg-transparent border-none py-1">
          Continue as Guest
        </button>
      </div>
    </div>
  `;
  
  overlay.onclick = closeAuthModal;
  document.body.appendChild(overlay);
  
  setTimeout(() => {
    overlay.classList.add("active");
  }, 20);
};

window.closeAuthModal = function() {
  const overlay = document.getElementById("eb-auth-modal");
  if (overlay) {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 250);
  }
};
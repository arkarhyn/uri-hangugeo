"use strict";
const LMAP = Object.fromEntries(LESSONS.map(l=>[l.id,l]));
// Unit 2 = new lessons (shown first); unit 1 = what the KSM class covered, kept as review.
const UNITS = [{u:2, name:"New lessons", short:"New"}, {u:1, name:"Review from class", short:"Review"}];
const unitOf = L => L.unit || 1;
const inUnit = u => LESSONS.filter(l=>unitOf(l)===u);
const lnum = L => inUnit(unitOf(L)).indexOf(L) + 1;
const unitInfo = L => UNITS.find(x=>x.u===unitOf(L));

/* ---------------- Korean helpers ---------------- */
const hasBatchim = w => { const c=w.charCodeAt(w.length-1); return c>=0xAC00 && c<=0xD7A3 && (c-0xAC00)%28!==0; };
const isRieul = w => { const c=w.charCodeAt(w.length-1); return c>=0xAC00 && c<=0xD7A3 && (c-0xAC00)%28===8; };
const iGa = w => w + (hasBatchim(w) ? "이" : "가");
const SD=["","일","이","삼","사","오","육","칠","팔","구"];
function sino4(n, one){ // 1..9999; one=true says 일 before 천/백/십 (a common mistake)
  const th=Math.floor(n/1000), hu=Math.floor(n/100)%10, te=Math.floor(n/10)%10, o=n%10; let s="";
  if(th) s+=(th===1&&!one?"":SD[th])+"천";
  if(hu) s+=(hu===1&&!one?"":SD[hu])+"백";
  if(te) s+=(te===1&&!one?"":SD[te])+"십";
  if(o) s+=SD[o];
  return s;
}
function sino(n, one){
  if(n===0) return "영";
  const man=Math.floor(n/10000), rest=n%10000, parts=[];
  if(man) parts.push((man===1&&!one?"":sino4(man,one))+"만");
  if(rest) parts.push(sino4(rest,one));
  return parts.join(" ");
}
const NT=["","열","스물","서른","마흔","쉰","예순","일흔","여든","아흔"];
const NO=["","하나","둘","셋","넷","다섯","여섯","일곱","여덟","아홉"];
const NA=["","한","두","세","네","다섯","여섯","일곱","여덟","아홉"];
const native = n => NT[Math.floor(n/10)] + NO[n%10];
const nativeA = n => n===20 ? "스무" : NT[Math.floor(n/10)] + NA[n%10];

/* ---------------- utilities ---------------- */
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
const rand = (a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick = arr => arr[Math.floor(Math.random()*arr.length)];
function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
// [x] = the yellow highlight; [s:x] stem, [e:x] ending, [c:x] the part that changed, [x:x] a dropped part.
const ROLES = {s:"stem", e:"ending", c:"changed", x:"dropped"};
const hl = s => String(s).replace(/\[(?:([secx]):)?([^\]]+)\]/g,(_,r,t)=>r?`<span class="r-${r}">${t}</span>`:`<span class="p">${t}</span>`).replace(/___/g,'<span class="blank">?</span>');
const strip = s => String(s).replace(/\[x:[^\]]*\]/g,"").replace(/\[[secx]:/g,"").replace(/[\[\]]/g,"").replace(/___/g,"");
const rolesIn = o => { const j=JSON.stringify(o); return Object.keys(ROLES).filter(r=>j.includes(`[${r}:`)); };
const legendHTML = rs => rs.length ? `<div class="legend" aria-label="Colour key">${rs.map(r=>`<span class="r-${r}">${ROLES[r]}</span>`).join("")}</div>` : "";
const PLAY = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1l9 5-9 5z"/></svg>';
const sayBtn = t => `<button class="say" data-say="${esc(strip(t))}" aria-label="Play audio">${PLAY}</button>`;
function toast(msg){ const t=document.createElement("div"); t.className="toast"; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),2600); }
function uniq4(ans, cands){ const out=[ans]; for(const c of shuffle(cands.slice())){ if(c && !out.includes(c)) out.push(c); if(out.length===4) break; } return out; }

/* ---------------- audio ---------------- */
let koVoice=null;
function pickVoice(){
  if(!("speechSynthesis" in window)) return;
  const vs=speechSynthesis.getVoices();
  koVoice = vs.find(v=>/^ko/i.test(v.lang) && /google|natural|online/i.test(v.name)) || vs.find(v=>/^ko/i.test(v.lang)) || null;
  $("#voiceNote").textContent = (vs.length && !koVoice) ? " Audio needs a Korean voice: add Korean in your device's speech or language settings." : "";
}
if("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text){
  if(!("speechSynthesis" in window)){ toast("This browser can't play speech."); return; }
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text.replace(/→/g,", ").replace(/[·\/]/g,", "));
  u.lang="ko-KR"; if(koVoice) u.voice=koVoice; u.rate=0.85;
  speechSynthesis.speak(u);
}

/* ---------------- progress state ---------------- */
const LS_KEY="uri-hangugeo.progress.v1";
let state = {lessons:{}, gym:{}, review:{best:0}};
try{ const raw=localStorage.getItem(LS_KEY); if(raw) state=mergeState(JSON.parse(raw),{}); }catch(e){}
function mergeState(a,b){
  a=a||{}; b=b||{};
  const out={lessons:{},gym:{},review:{best:Math.max(+(a.review&&a.review.best)||0,+(b.review&&b.review.best)||0)}};
  const ids=[...new Set([...Object.keys(a.lessons||{}),...Object.keys(b.lessons||{})])].sort();
  for(const id of ids){ const x=(a.lessons||{})[id]||{}, y=(b.lessons||{})[id]||{};
    out.lessons[id]={slides:!!(x.slides||y.slides), best:Math.max(+x.best||0,+y.best||0), tries:Math.max(+x.tries||0,+y.tries||0), at:Math.max(+x.at||0,+y.at||0)}; }
  const gm=[...new Set([...Object.keys(a.gym||{}),...Object.keys(b.gym||{})])].sort();
  for(const m of gm){ const x=(a.gym||{})[m]||{}, y=(b.gym||{})[m]||{};
    out.gym[m]={best:Math.max(+x.best||0,+y.best||0), n:Math.max(+x.n||0,+y.n||0)}; }
  return out;
}
function saveLocal(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(state)); }catch(e){} }
function save(){ saveLocal(); }
function lessonRec(id){ return state.lessons[id] || (state.lessons[id]={slides:false,best:0,tries:0,at:0}); }
function status(id){ const r=state.lessons[id]; if(!r) return "new"; if(r.slides && r.best>=0.8) return "done"; return "started"; }
const STATUS_TXT={new:"Not started",started:"In progress",done:"Done"};

/* ---------------- shared log (Google Sheet via Apps Script) ---------------- */
// Paste the Apps Script web app URL here (see README.md). Empty = progress stays on this device only.
const SHEET_URL = "https://script.google.com/macros/s/AKfycbz-7LsOwsXd_lPF03K0-2QqE6ZgazCKT0m56-64j2to6QmrnyT2S8Qefr7dPSryPkGA/exec";
const NAME_KEY="uri-hangugeo.name", PEND_KEY="uri-hangugeo.pending";
let myName=""; try{ myName=localStorage.getItem(NAME_KEY)||""; }catch(e){}
let sync="local", sheetRows=null, sheetErr=false, flushing=false, retryTimer=0;
function setSync(s){ sync=s; $("#sync").dataset.s=s; updateWho(); }
function updateWho(){
  const el=$("#sync"), n=SHEET_URL ? loadPending().length : 0;
  el.lastElementChild.textContent = (myName ? "Studying as "+myName : "Who's studying?") + (sync==="offline" && n ? ` · ${n} not sent` : "");
  el.title = !SHEET_URL ? "Progress saves on this device"
    : sync==="cloud" ? "Scores sent to the shared sheet"
    : sync==="offline" ? `Couldn't reach the shared sheet. ${n} score${n===1?"":"s"} not sent yet; they're kept on this device and will be sent later.`
    : !myName && n ? "Set your name to send your scores to the shared sheet"
    : "Scores go to the shared sheet";
}
const normName = n => String(n||"").replace(/\s+/g," ").trim();
const nameKey = n => normName(n).toLowerCase();
function setName(n){ myName=normName(n).slice(0,30); try{ localStorage.setItem(NAME_KEY,myName); }catch(e){} updateWho(); flushLog(); }

/* Reader link: the address of a private app (e.g. korean-reader on a home PC).
   It is kept only in this browser and never written into this public repo. */
const READER_KEY="uri-hangugeo.reader";
let readerUrl=""; try{ readerUrl=localStorage.getItem(READER_KEY)||""; }catch(e){}
function cleanUrl(v){
  v=String(v||"").trim(); if(!v) return "";
  if(!/^[a-z][a-z0-9+.-]*:\/\//i.test(v)) v="https://"+v;
  try{ const u=new URL(v); return /^https?:$/.test(u.protocol) && u.hostname ? u.href : null; }catch(e){ return null; }
}
function setReader(v){ readerUrl=v||""; try{ v ? localStorage.setItem(READER_KEY,v) : localStorage.removeItem(READER_KEY); }catch(e){} updateReader(); }
function updateReader(){ const a=$("#readerLink"); a.hidden=!readerUrl; a.href=readerUrl||"#who"; }
function loadPending(){ try{ const p=JSON.parse(localStorage.getItem(PEND_KEY)||"[]"); return Array.isArray(p)?p:[]; }catch(e){ return []; } }
function savePending(p){ try{ localStorage.setItem(PEND_KEY, JSON.stringify(p.slice(-200))); }catch(e){} }
// Every event gets an id. The Sheet skips ids it already has, so resending is always safe.
function newId(){
  const b=new Uint8Array(12);
  try{ crypto.getRandomValues(b); }catch(e){ for(let i=0;i<b.length;i++) b[i]=Math.random()*256|0; }
  return Date.now().toString(36)+"-"+Array.from(b,x=>x.toString(16).padStart(2,"0")).join("");
}
function logEvent(kind, item, right, total){
  if(!SHEET_URL) return;
  const p=loadPending(); p.push({id:newId(), who:myName, kind, item, right, total, at:Date.now()}); savePending(p);
  flushLog();
}
// Sends queued events and drops only the ones the Sheet confirms (saved, already there, or rejected).
// Anything unconfirmed stays queued and is retried later.
async function flushLog(opts){
  if(!SHEET_URL || !myName || flushing) return;
  let p=loadPending();
  if(!p.length){ if(sync==="offline") setSync("cloud"); return; }
  let fixed=false;
  p.forEach(e=>{ if(!e.id){ e.id=newId(); fixed=true; } if(!e.who){ e.who=myName; fixed=true; } });
  if(fixed) savePending(p);
  flushing=true; clearTimeout(retryTimer); setSync("connecting");
  let ok=true;
  try{
    for(let i=0;i<p.length;i+=50){
      const batch=p.slice(i,i+50);
      const r=await fetch(SHEET_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({events:batch}),keepalive:!!(opts&&opts.keepalive)});
      const j=await r.json();
      if(!j || !j.ok || !Array.isArray(j.done)) throw new Error("sheet said no");
      const done=new Set(j.done.map(String));
      savePending(loadPending().filter(e=>!done.has(String(e.id))));
      if(done.size<batch.length) ok=false;
    }
  }catch(e){ ok=false; }
  flushing=false; sheetRows=null;
  if(ok && !loadPending().length) setSync("cloud");
  else { setSync("offline"); retryTimer=setTimeout(flushLog, 60000); }
}
// Leaving or hiding the page (phone locked, tab closed, app switched): queue the running
// Number Gym streak and try to send. Whatever doesn't get through is sent on the next visit.
// leaveHook (the Gym's logRun) is safe to call twice: it resets the run after queueing it.
function onHide(){ if(leaveHook) leaveHook(); flushLog({keepalive:true}); }
window.addEventListener("pagehide", onHide);
document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState==="hidden") onHide(); else flushLog(); });
window.addEventListener("online", ()=>flushLog());
async function fetchSheet(){
  if(!SHEET_URL) return;
  try{ const r=await fetch(SHEET_URL+"?t="+Date.now()); const j=await r.json(); sheetRows=Array.isArray(j.rows)?j.rows:[]; sheetErr=false; }
  catch(e){ sheetErr=true; }
}
function aggregate(rows){
  const by={};
  for(const r of rows){
    const name=normName(r.who); if(!name) continue;
    const k=name.toLowerCase(), p=by[k]||(by[k]={name, data:{lessons:{},gym:{},review:{best:0}}, last:0});
    const ts=+new Date(r.when)||0; if(ts>p.last) p.last=ts;
    const right=+r.right||0, total=+r.total||0, pct=total?right/total:0;
    const L = id => p.data.lessons[id]||(p.data.lessons[id]={slides:false,best:0,tries:0,at:0});
    if(r.kind==="lesson"){ const x=L(r.item); x.best=Math.max(x.best,pct); x.tries++; }
    else if(r.kind==="slides"){ L(r.item).slides=true; }
    else if(r.kind==="review"){ p.data.review.best=Math.max(p.data.review.best,pct); }
    else if(r.kind==="gym"){ const g=p.data.gym[r.item]||(p.data.gym[r.item]={best:0,n:0}); g.best=Math.max(g.best,right); }
  }
  return Object.values(by);
}

/* ---------------- routing ---------------- */
let view="home", keyHandler=null, leaveHook=null, lessonTab="slides", slideIdx={};
document.addEventListener("keydown", e=>{ if(keyHandler && !e.metaKey && !e.ctrlKey && !e.altKey) keyHandler(e); });
document.addEventListener("click", e=>{
  const s=e.target.closest("[data-say]"); if(s){ say(s.dataset.say); return; }
});
window.addEventListener("hashchange", route);
function route(){
  const h=(location.hash||"#home").slice(1);
  keyHandler=null;
  if(leaveHook){ const f=leaveHook; leaveHook=null; f(); }
  if(h.startsWith("lesson-") && LMAP[h.slice(7)]){ view="lesson"; renderLesson(h.slice(7)); }
  else if(h==="gym"){ view="gym"; renderGym(); }
  else if(h==="who"){ view="who"; renderWho(); }
  else if(h==="review"){ view="review"; renderReview(); }
  else if(h==="say"){ view="say"; renderSayGym(); }
  else if(h==="progress"){ view="progress"; renderProgress(); }
  else { view="home"; renderHome(); }
  $$("nav a").forEach(a=>a.setAttribute("aria-current", a.dataset.nav===(view==="lesson"?"home":view) ? "page" : "false"));
}
const app = $("#app");
const wg = s => `<div class="wg" aria-label="${esc(s)}">${[...s].map(ch=>ch===" "?'<span class="sp"></span>':`<span>${esc(ch)}</span>`).join("")}</div>`;

/* ---------------- home ---------------- */
function renderHome(){
  const next = inUnit(2).find(l=>status(l.id)!=="done") || inUnit(1).find(l=>status(l.id)!=="done");
  const doneN = LESSONS.filter(l=>status(l.id)==="done").length;
  app.innerHTML = `
  <section class="hero">
    <div class="eyebrow">After the KSM textbook · ${inUnit(2).length} new · ${inUnit(1).length} review · ${doneN} done</div>
    ${wg("우리 한국어")}
    <p class="lede">New lessons that pick up where class stopped: the past tense, plans and suggestions, ordering and shopping, and joining sentences. The lessons from class are below as review. Each lesson has slides to teach from, a practice quiz, flashcards and a lesson plan.</p>
    <div class="continue">
      ${next ? `<a class="btn primary" href="#lesson-${next.id}">${status(next.id)==="new"?"Start":"Continue"}: ${esc(next.title)}</a>` : `<a class="btn primary" href="#review">All lessons done. Mixed review</a>`}
      <a class="btn" href="#gym">Number Gym</a>
    </div>
  </section>
  ${!myName?`<a class="card nameprompt" href="#who"><span><b>Who's studying?</b> Set your name so your scores show up on the Progress page.</span><span class="btn">Set name</span></a>`:""}
  ${UNITS.map(U=>`<h2 class="unit-h">${U.name}</h2>
  <div class="list">
    ${inUnit(U.u).map((l,i)=>{ const st=status(l.id), r=state.lessons[l.id];
      return `<a class="row" href="#lesson-${l.id}">
        <div class="num">${i+1}</div>
        <div><h3>${esc(l.title)} <span class="k">${esc(l.ko)}</span></h3><p>${esc(l.blurb)}</p></div>
        <span class="chip ${st}">${STATUS_TXT[st]}${r&&r.best?` · ${Math.round(r.best*100)}%`:""}</span>
      </a>`;}).join("")}
  </div>`).join("")}
  <div class="tools">
    <a class="tool" href="#say"><h3>Say it in Korean</h3><p>English sentences to say out loud in Korean, polite or 반말, then check. Ones you miss come back first.</p></a>
    <a class="tool" href="#gym"><h3>Number Gym</h3><p>Endless drills: Sino and native numbers, clock times, counters, ages and prices.</p></a>
    <a class="tool" href="#review"><h3>Mixed review</h3><p>Twelve questions drawn from every lesson. Good for warming up before class time together.</p></a>
    <a class="tool" href="#progress"><h3>Progress</h3><p>Lesson scores for each of us, side by side.</p></a>
  </div>`;
}

/* ---------------- lesson ---------------- */
function renderLesson(id){
  const L=LMAP[id], n=lnum(L), U=unitInfo(L);
  app.innerHTML = `
  <a class="crumb" href="#home">← All lessons</a>
  <div class="lhead">
    <div class="eyebrow">${U.short} · Lesson ${n} of ${inUnit(U.u).length}</div>
    ${wg(L.ko)}
    <h1>${esc(L.title)}</h1>
    <div class="src">Full explanation on How to Study Korean: ${L.src.map(k=>`<a href="${SRC[k].u}" target="_blank" rel="noopener">${SRC[k].n} (${esc(SRC[k].t)})</a>`).join(" · ")}</div>
  </div>
  <div class="tabs" role="tablist">
    ${lessonTabs(L).map(([k,t])=>`<button role="tab" id="tab-${k}" data-tab="${k}" aria-selected="${lessonTab===k}">${t}</button>`).join("")}
  </div>
  <div id="pane"></div>`;
  $$(".tabs button").forEach(b=>b.onclick=()=>goTab(L, b.dataset.tab));
  showTab(L);
}
// The Say it tab shows only on lessons that have say sentences.
const lessonTabs = L => [["slides","Slides"],["practice","Practice"],...(L.say&&L.say.length?[["say","Say it"]]:[]),["words","Words"],["plan","Lesson plan"]];
function goTab(L,k){
  if(document.fullscreenElement) document.exitFullscreen().catch(()=>{});
  lessonTab=k; $$(".tabs button").forEach(x=>x.setAttribute("aria-selected", x.dataset.tab===k)); showTab(L);
}
function showTab(L){
  keyHandler=null;
  if(!lessonTabs(L).some(([k])=>k===lessonTab)) lessonTab="slides";
  $$(".tabs button").forEach(x=>x.setAttribute("aria-selected", x.dataset.tab===lessonTab));
  const pane=$("#pane");
  if(lessonTab==="slides") renderSlides(L,pane);
  else if(lessonTab==="practice") renderPractice(L,pane);
  else if(lessonTab==="say") renderSayTab(L,pane);
  else if(lessonTab==="words") renderWords(L,pane);
  else renderPlan(L,pane);
}
function slideHTML(s){
  let h=`<h2>${hl(s.h)}</h2>`;
  // A change chain leads: the worked example first, then the rule in p.
  if(s.steps) h+=`<div class="steps">${s.steps.map(c=>`<div class="chain">${c.map((x,j)=>(j?`<span class="arr" aria-label="becomes"></span>`:"")+`<span class="stp ko${j===c.length-1?" fin":""}">${hl(x)}</span>`).join("")}${sayBtn(c[c.length-1])}</div>`).join("")}</div>`;
  if(s.p) h+=`<p>${hl(s.p)}</p>`;
  if(s.t) h+=`<div class="tw"><table><thead><tr>${s.t[0].map(c=>`<th>${hl(c)}</th>`).join("")}</tr></thead><tbody>${s.t.slice(1).map(r=>`<tr>${r.map(c=>`<td class="ko">${hl(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  if(s.ex) h+=`<div class="exs">${s.ex.map(([k,e])=>`<div class="ex">${sayBtn(k)}<div><div class="k1 ko">${hl(k)}</div><div class="e1">${esc(e)}</div></div></div>`).join("")}</div>`;
  if(s.note) h+=[].concat(s.note).map(noteHTML).join("");
  return h;
}
// "Watch out:" marks an exception you'll hit; "See also:" points to another lesson.
function noteHTML(n){
  const m=/^(Watch out|See also):\s*/.exec(n);
  if(!m) return `<div class="note">${hl(n)}</div>`;
  return `<div class="note ${m[1]==="Watch out"?"warn":"see"}"><span class="nlab">${m[1]}</span>${hl(n.slice(m[0].length))}</div>`;
}
function renderSlides(L,pane){
  const rec=lessonRec(L.id); if(!rec.at){ rec.at=Date.now(); save(); }
  let i=Math.min(slideIdx[L.id]||0, L.slides.length-1);
  pane.innerHTML = `<ul class="goals">${L.goals.map(g=>`<li>${hl(g)}</li>`).join("")}</ul>
    <section class="slide" id="slide" aria-live="polite"></section>
    <div class="snav">
      <button class="btn" id="prev">← Back</button>
      <div class="dots" id="dots"></div>
      <div class="brow"><button class="btn" id="fs">Present</button><button class="btn primary" id="next">Next →</button></div>
    </div>`;
  const draw=()=>{
    slideIdx[L.id]=i;
    $("#slide").innerHTML = `<div class="slidetop"><div class="count">Slide ${i+1} / ${L.slides.length}</div>${legendHTML(rolesIn(L.slides[i]))}</div>`+slideHTML(L.slides[i]);
    $("#dots").innerHTML = L.slides.map((_,j)=>`<button aria-label="Slide ${j+1}" aria-current="${j===i}" data-j="${j}"></button>`).join("");
    $$("#dots button").forEach(b=>b.onclick=()=>{ i=+b.dataset.j; draw(); });
    $("#prev").disabled = i===0;
    $("#next").textContent = i===L.slides.length-1 ? "Go to practice →" : "Next →";
    if(i===L.slides.length-1 && !rec.slides){ rec.slides=true; rec.at=Date.now(); save(); logEvent("slides", L.id, 0, 0); }
  };
  $("#prev").onclick=()=>{ if(i>0){ i--; draw(); } };
  $("#next").onclick=()=>{ if(i<L.slides.length-1){ i++; draw(); } else goTab(L,"practice"); };
  $("#fs").onclick=()=>{ const el=$("#slide"); if(el.requestFullscreen) el.requestFullscreen().catch(()=>toast("Full screen isn't available here.")); else toast("Full screen isn't available here."); };
  keyHandler=e=>{ if(e.key==="ArrowRight"){ if(i<L.slides.length-1){ i++; draw(); } } else if(e.key==="ArrowLeft"){ if(i>0){ i--; draw(); } } };
  draw();
}
function renderWords(L,pane){
  pane.innerHTML = `<p class="muted" style="margin-top:0">Tap a card to see the meaning. Try to say it before you flip.</p>
  <div class="cards">${L.vocab.map(([k,e])=>`<div class="fc"><button class="fc-face"><span><span class="f1 ko">${esc(k)}</span><span class="b1">${esc(e)}</span></span></button>${sayBtn(k)}</div>`).join("")}</div>
  <div class="brow" style="margin-top:14px"><button class="btn" id="shuf">Shuffle</button><button class="btn" id="flipall">Flip all</button></div>`;
  $$(".fc-face",pane).forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("flipped"));
  $("#shuf").onclick=()=>{ L.vocab=shuffle(L.vocab.slice()); renderWords(L,pane); };
  $("#flipall").onclick=()=>{ const any=$$(".fc:not(.flipped)",pane).length; $$(".fc",pane).forEach(c=>c.classList.toggle("flipped", !!any)); };
}
function renderPlan(L,pane){
  const total=L.plan.reduce((s,p)=>s+(+p[0]),0);
  pane.innerHTML = `<p class="muted" style="margin-top:0">A ${total}-minute session for teaching this together. Run it with the Slides tab on a shared screen.</p>
  <div class="plan">${L.plan.map(([m,t,d])=>`<div class="step"><div class="min">${m}′</div><div><h3>${esc(t)}</h3><p>${hl(d)}</p></div></div>`).join("")}</div>
  <h3 class="section-h">Conversation questions</h3>
  <div class="talk">${L.talk.map(([k,e])=>`<div class="ex">${sayBtn(k)}<div><div class="k1 ko">${esc(k)}</div><div class="e1">${esc(e)}</div></div></div>`).join("")}</div>
  <h3 class="section-h">After the session</h3>
  <p style="margin:0">${esc(L.after)} ${L.src.map(k=>`<a href="${SRC[k].u}" target="_blank" rel="noopener">${SRC[k].n}</a>`).join(" · ")}</p>`;
}

/* ---------------- scenes (lesson 4) ---------------- */
const SC_ITEMS=[["고양이","🐱"],["강아지","🐶"],["책","📕"],["가방","👜"],["사과","🍎"],["휴대폰","📱"],["공","⚽"]];
const SC_POS=[{ref:"책상",pos:"위",x:115,y:106},{ref:"책상",pos:"아래",x:115,y:188},{ref:"책상",pos:"옆",x:18,y:188},{ref:"상자",pos:"안",x:258,y:184},{ref:"상자",pos:"위",x:258,y:134},{ref:"상자",pos:"옆",x:318,y:188}];
function makeScene(){
  const [item,emo]=pick(SC_ITEMS), p=pick(SC_POS);
  const sent = q => `${iGa(item)} ${q.ref} ${q.pos}에 있어요.`;
  const others = shuffle(SC_POS.filter(q=>q!==p)).slice(0,3).map(sent);
  const svg = `<svg class="scene" viewBox="0 0 340 215" role="img" aria-label="${esc(item)} near a desk and a box">
    <line class="floor" x1="0" y1="192" x2="340" y2="192"/>
    <rect class="furn" x="40" y="110" width="150" height="10" rx="2"/><rect class="furn" x="48" y="120" width="8" height="72"/><rect class="furn" x="174" y="120" width="8" height="72"/>
    <rect class="box" x="222" y="138" width="72" height="54" rx="3"/>
    <text x="${p.x}" y="${p.y}" font-size="30" text-anchor="middle">${emo}</text>
    <text class="lbl" x="115" y="209" text-anchor="middle">책상</text><text class="lbl" x="258" y="209" text-anchor="middle">상자</text>
  </svg>`;
  return {k:"scene", svg, q:`${iGa(item)} 어디에 있어요?`, sub:"Look at the picture and pick the answer.", c:[sent(p),...others], why:`${p.ref} ${p.pos}에: the reference object comes first, then the position word, then 에.`};
}

/* ---------------- quiz engine ---------------- */
function quiz(el, items, done){
  let i=0, right=0;
  el.className="quiz";
  const show=()=>{
    if(i>=items.length){ keyHandler=null; done(right, items.length); return; }
    const it=items[i];
    el.innerHTML = `<div class="qhead"><span>Question ${i+1} of ${items.length}</span><span>${right} correct</span></div>
      <div class="qbar"><i style="width:${(i/items.length*100).toFixed(1)}%"></i></div>
      <div class="qbody"></div><div class="qfoot" hidden></div>`;
    const body=$(".qbody",el), foot=$(".qfoot",el);
    const finish=(ok, answer)=>{
      if(ok) right++;
      foot.hidden=false; foot.className="qfoot "+(ok?"ok":"no");
      const kor = /[가-힣]/.test(answer);
      foot.innerHTML = `<div><strong>${ok?"Correct":"Not quite"}</strong>${!ok?` · answer: <span class="ko">${esc(answer)}</span>`:""}${kor?" "+sayBtn(answer):""}${it.why?`<p>${hl(it.why)}</p>`:""}</div>
        <button class="btn primary" id="qnext">${i+1<items.length?"Next":"See score"}</button>`;
      const nb=$("#qnext",el); nb.onclick=()=>{ i++; show(); }; nb.focus({preventScroll:true});
      keyHandler=e=>{ if(e.key==="Enter"){ e.preventDefault(); nb.click(); } };
    };
    if(it.k==="build") buildQ(body,it,finish); else mcQ(body,it,finish);
  };
  show();
}
function mcQ(body,it,finish){
  const ans=it.c[0], opts=shuffle(it.c.slice());
  body.innerHTML = `${it.svg||""}<div class="qq ko">${hl(it.q)}</div>${it.sub?`<div class="qsub">${esc(it.sub)}</div>`:""}
    <div class="choices">${opts.map((o,j)=>`<button class="choice" data-j="${j}"><span class="kbd">${j+1}</span><span class="ko">${esc(o)}</span></button>`).join("")}</div>`;
  const btns=$$(".choice",body);
  btns.forEach(b=>b.onclick=()=>{
    const o=opts[+b.dataset.j];
    btns.forEach(x=>{ x.disabled=true; if(opts[+x.dataset.j]===ans) x.classList.add("right"); });
    if(o!==ans) b.classList.add("wrong");
    finish(o===ans, ans);
  });
  keyHandler=e=>{ const n=+e.key; if(n>=1 && n<=btns.length && !btns[0].disabled) btns[n-1].click(); };
}
function buildQ(body,it,finish){
  const words=it.ok[0].split(" ").concat(it.x||[]);
  const tiles=shuffle(words.map((w,idx)=>({w,idx}))); let placed=[];
  body.innerHTML = `<div class="qq">${esc(it.q)}</div><div class="qsub">Tap the words in order. One word doesn't belong.</div>
    <div class="zone" id="zone" aria-label="Your sentence"></div><div class="bank" id="bank"></div>
    <div class="brow"><button class="btn primary" id="chk" disabled>Check</button><button class="btn" id="clr">Clear</button></div>`;
  // The bank is drawn once and never reflows: a picked word stays put and goes dark,
  // and a copy flies up into the sentence. Tap the dark word (or its copy) to take it back.
  const zone=$("#zone",body), bank=$("#bank",body);
  bank.innerHTML = tiles.map(t=>`<button class="tile ko" data-i="${t.idx}">${esc(t.w)}</button>`).join("");
  const bankBtn=i=>bank.querySelector(`[data-i="${i}"]`);
  const still=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fly=(from,to)=>{
    if(still || !from || !to || !to.animate) return;
    const a=from.getBoundingClientRect(), b=to.getBoundingClientRect();
    const g=to.cloneNode(true); g.classList.add("tile-ghost"); g.removeAttribute("data-i");
    Object.assign(g.style,{left:b.left+"px",top:b.top+"px",width:b.width+"px",height:b.height+"px"});
    document.body.appendChild(g); to.style.visibility="hidden";
    g.animate([{transform:`translate(${a.left-b.left}px,${a.top-b.top}px)`},{transform:"none"}],
      {duration:220,easing:"cubic-bezier(.2,.7,.3,1)"}).onfinish=()=>{ g.remove(); to.style.visibility=""; };
  };
  const remove=i=>{ placed=placed.filter(t=>t.idx!==i); draw(); };
  const draw=(flyFrom)=>{
    // Reserve room for every tile, so a sentence that wraps never pushes the bank down.
    zone.style.minHeight=(bank.offsetHeight+18)+"px";
    zone.innerHTML = placed.map(t=>`<button class="tile ko" data-i="${t.idx}">${esc(t.w)}</button>`).join("") || '<span class="muted" style="font-size:14px">Your sentence goes here</span>';
    $$(".tile",zone).forEach(b=>b.onclick=()=>remove(+b.dataset.i));
    tiles.forEach(t=>{ const b=bankBtn(t.idx), u=placed.includes(t); b.classList.toggle("used",u); b.setAttribute("aria-pressed",u); });
    $("#chk",body).disabled = !placed.length;
    if(flyFrom!=null) fly(bankBtn(flyFrom), zone.querySelector(`[data-i="${flyFrom}"]`));
  };
  $$(".tile",bank).forEach(b=>b.onclick=()=>{
    const i=+b.dataset.i;
    if(placed.some(t=>t.idx===i)) return remove(i);
    placed.push(tiles.find(t=>t.idx===i)); draw(i);
  });
  $("#clr",body).onclick=()=>{ placed=[]; draw(); };
  $("#chk",body).onclick=()=>{
    const s=placed.map(t=>t.w).join(" "); const ok=it.ok.includes(s);
    $$(".tile",body).forEach(b=>b.disabled=true); $("#chk",body).disabled=true; $("#clr",body).disabled=true;
    finish(ok, it.ok[0]);
  };
  keyHandler=e=>{ if(e.key==="Enter" && !$("#chk",body).disabled){ e.preventDefault(); $("#chk",body).click(); } };
  draw();
}
function practiceItems(L){
  const items=L.ex.slice();
  if(L.pool) items.push(...shuffle(L.pool.slice()).slice(0, L.poolN||3));
  for(let s=0;s<(L.scenes||0);s++) items.push(makeScene());
  return shuffle(items);
}
function renderPractice(L,pane){
  const rec=lessonRec(L.id);
  pane.innerHTML = `<div id="qz"></div>`;
  quiz($("#qz",pane), practiceItems(L), (right,total)=>{
    const pct=right/total, prev=rec.best;
    rec.tries++; rec.best=Math.max(rec.best,pct); rec.at=Date.now(); save(); logEvent("lesson", L.id, right, total);
    const nextL=inUnit(unitOf(L))[lnum(L)];
    $("#qz",pane).innerHTML = `<div class="score"><div class="eyebrow">Score</div><div class="big">${right} / ${total}</div>
      <p class="muted" style="margin:0">${pct>=0.8?(rec.slides?"Lesson complete.":"Passed. Go through the slides to finish the lesson."):"80% completes the lesson. Look over the slides and try again."}${prev&&pct>prev?" New best.":""}</p>
      <div class="brow"><button class="btn" id="again">Practise again</button>${L.say&&L.say.length?`<button class="btn${pct>=0.8?" primary":""}" id="tosay">Say it in Korean →</button>`:""}${nextL&&pct>=0.8?`<a class="btn${L.say&&L.say.length?"":" primary"}" href="#lesson-${nextL.id}">Next lesson →</a>`:""}</div></div>`;
    $("#again",pane).onclick=()=>renderPractice(L,pane);
    const ts=$("#tosay",pane); if(ts) ts.onclick=()=>goTab(L,"say");
  });
}

/* ---------------- say it in Korean ---------------- */
// English prompt -> say it out loud -> reveal -> rate yourself. Nothing is typed or graded.
// Each item: {en, ko (해요 polite), ban (반말), alt:[other polite answers], banAlt:[other 반말 answers], hint}.
// Ratings stay on this device and are never sent to the Sheet: 0 got it, 1 close, 2 missed it.
const SAY_KEY="uri-hangugeo.say.v1", SAYLV_KEY="uri-hangugeo.sayLevel";
const RATES=[["Got it","got"],["Close","close"],["Missed it","miss"]];
let sayRec={}; try{ const o=JSON.parse(localStorage.getItem(SAY_KEY)||"{}"); if(o && typeof o==="object") sayRec=o; }catch(e){}
let sayLevel="yo"; try{ if(localStorage.getItem(SAYLV_KEY)==="ban") sayLevel="ban"; }catch(e){}
const LV={yo:"해요", ban:"반말"}, LVLONG={yo:"polite 해요", ban:"casual 반말"};
const sayKey = c => c.L.id+"|"+c.it.en;
function rateSay(c,r){ const k=sayKey(c), x=sayRec[k]||{}; sayRec[k]={r, n:(+x.n||0)+1, at:Date.now()}; try{ localStorage.setItem(SAY_KEY, JSON.stringify(sayRec)); }catch(e){} }
function setSayLevel(v){ sayLevel=v; try{ localStorage.setItem(SAYLV_KEY,v); }catch(e){} }
const sayCards = L => (L.say||[]).map(it=>({L,it}));
const toRedo = cards => cards.filter(c=>{ const x=sayRec[sayKey(c)]; return x && x.r>0; });
// Runs a set of cards in el. opts.from shows which lesson a card came from (the Gym); opts.done(counts, cards) draws the summary.
function sayRun(el, cards, opts){
  let i=0, shown=false; const counts=[0,0,0], rated=[];
  el.className="quiz saycard";
  const draw=()=>{
    if(i>=cards.length){ keyHandler=null; opts.done(counts, rated); return; }
    const c=cards[i], it=c.it, main=sayLevel==="ban"?it.ban:it.ko, other=sayLevel==="ban"?it.ko:it.ban;
    const alts=(sayLevel==="ban"?it.banAlt:it.alt)||[];
    el.innerHTML = `<div class="qhead"><span>Say it in Korean${opts.from?` · <a href="#lesson-${c.L.id}">${esc(c.L.title)}</a>`:""}</span><span>${i+1} / ${cards.length}</span></div>
      <div class="qbar"><i style="width:${(i/cards.length*100).toFixed(1)}%"></i></div>
      <div class="modes lvsw" role="group" aria-label="Speech level">${["yo","ban"].map(v=>`<button data-lv="${v}" aria-pressed="${sayLevel===v}">${LVLONG[v]}</button>`).join("")}</div>
      <div class="sayen">${esc(it.en)}</div>
      ${it.hint?`<div class="sayhint">Hint: ${hl(it.hint)}</div>`:""}
      ${!shown?`<div class="brow"><button class="btn primary" id="reveal">Show answer</button><span class="muted sayk">Say it out loud first · Space</span></div>`
      :`<div class="sayans"><span class="lvtag">${LV[sayLevel]}</span><span class="ko">${hl(main)}</span>${sayBtn(main)}</div>
        ${alts.length?`<div class="sayalt">Also fine: ${alts.map(a=>`<span class="ko">${esc(a)}</span>`).join(" · ")}</div>`:""}
        <div class="sayother"><span class="lvtag">${LV[sayLevel==="ban"?"yo":"ban"]}</span><span class="ko">${hl(other)}</span>${sayBtn(other)}</div>
        <div class="rate" role="group" aria-label="How did you do?">${RATES.map(([t,cl],r)=>`<button class="btn ${cl}" data-r="${r}"><span class="kbd">${r+1}</span>${t}</button>`).join("")}</div>`}`;
    $$(".lvsw button",el).forEach(b=>b.onclick=()=>{ setSayLevel(b.dataset.lv); draw(); });
    if(!shown){
      const rb=$("#reveal",el); rb.onclick=()=>{ shown=true; draw(); };
      keyHandler=e=>{ if(e.key===" "||e.key==="Enter"){ e.preventDefault(); rb.click(); } };
    } else {
      const btns=$$(".rate button",el);
      btns.forEach(b=>b.onclick=()=>{ const r=+b.dataset.r; rateSay(c,r); counts[r]++; rated.push([c,r]); i++; shown=false; draw(); });
      keyHandler=e=>{ const n=+e.key; if(n>=1 && n<=3){ e.preventDefault(); btns[n-1].click(); } };
    }
  };
  draw();
}
function sayScore(counts, rated, again, extra){
  const redo=rated.filter(([,r])=>r>0).map(([c])=>c);
  return {html:`<div class="score"><div class="eyebrow">Set done</div>
    <div class="tally">${RATES.map(([t,cl],r)=>`<span class="${cl}"><b>${counts[r]}</b> ${t.toLowerCase()}</span>`).join("")}</div>
    <p class="muted" style="margin:0">${redo.length?"The ones you marked close or missed come back first in the Say-it Gym.":"Clean run. Try the other speech level next time."}</p>
    <div class="brow">${redo.length?`<button class="btn primary" id="redo">Redo those ${redo.length}</button>`:""}<button class="btn${redo.length?"":" primary"}" id="again">${again}</button>${extra||""}</div></div>`, redo};
}
function renderSayTab(L,pane){
  pane.innerHTML = `<p class="muted" style="margin-top:0">Read the English, say it out loud in Korean, then check. Together: one reads the English, the other answers. Your ratings stay on this device.</p><div id="sq"></div>`;
  const run=cards=>sayRun($("#sq",pane), cards, {done:(counts,rated)=>{
    const rec=lessonRec(L.id); rec.at=Date.now(); save();
    const s=sayScore(counts, rated, "Whole set again", `<a class="btn" href="#say">Say-it Gym</a>`);
    $("#sq",pane).className=""; $("#sq",pane).innerHTML=s.html;
    const rd=$("#redo",pane); if(rd) rd.onclick=()=>run(s.redo);
    $("#again",pane).onclick=()=>run(sayCards(L));
  }});
  run(sayCards(L));
}
// The Gym mixes sentences from lessons you've opened (all lessons if that's under 8 sentences).
// Missed first, then close, then never tried, then the got-its you haven't seen longest.
const SAY_N=10;
function sayGymCards(){
  const withSay=LESSONS.filter(l=>l.say&&l.say.length), open=withSay.filter(l=>status(l.id)!=="new");
  const src=open.reduce((n,l)=>n+l.say.length,0)>=8 ? open : withSay;
  const all=[].concat(...src.map(sayCards));
  const pri=c=>{ const x=sayRec[sayKey(c)]; if(!x) return 2; if(x.r===2) return 4; if(x.r===1) return 3; return Math.min(1.9,(Date.now()-(+x.at||0))/(7*864e5)); };
  return {cards:shuffle(shuffle(all).sort((a,b)=>pri(b)-pri(a)).slice(0,SAY_N)), all, open:src===open};
}
function renderSayGym(){
  const g=sayGymCards(), redoN=toRedo(g.all).length;
  app.innerHTML = `<div class="lhead"><div class="eyebrow">Speaking practice</div>${wg("말해 보세요")}<h1>Say it in Korean</h1>
    <p class="lede" style="margin:0">${g.all.length?`${Math.min(SAY_N,g.all.length)} sentences from ${g.open?"the lessons you've opened":"every lesson"}, different each time. Ones you marked missed or close come back first${redoN?` (${redoN} waiting)`:""}. Ratings stay on this device.`:"No lessons have Say-it sentences yet."}</p></div><div id="sq"></div>`;
  if(!g.all.length) return;
  sayRun($("#sq"), g.cards, {from:true, done:(counts,rated)=>{
    const s=sayScore(counts, rated, "New set", `<a class="btn" href="#home">Lessons</a>`);
    $("#sq").className=""; $("#sq").innerHTML=s.html;
    const rd=$("#redo"); if(rd) rd.onclick=()=>sayRun($("#sq"), s.redo, {from:true, done:()=>renderSayGym()});
    $("#again").onclick=renderSayGym;
  }});
}

/* ---------------- review ---------------- */
function renderReview(){
  app.innerHTML = `<div class="lhead"><div class="eyebrow">All lessons</div>${wg("복습")}<h1>Mixed review</h1>
    <p class="lede" style="margin:0">Twelve questions from across every lesson, different each time. Best score: ${Math.round((state.review.best||0)*100)}%.</p></div><div id="qz"></div>`;
  const pool=[]; LESSONS.forEach(L=>L.ex.concat(L.pool||[]).forEach(x=>pool.push(x)));
  const items=shuffle(pool).slice(0,11); items.push(makeScene());
  quiz($("#qz"), shuffle(items), (right,total)=>{
    const pct=right/total; state.review.best=Math.max(state.review.best||0,pct); save(); logEvent("review", "mixed", right, total);
    $("#qz").innerHTML = `<div class="score"><div class="eyebrow">Score</div><div class="big">${right} / ${total}</div>
      <div class="brow"><button class="btn primary" id="again">New set</button><a class="btn" href="#say">Say it in Korean</a><a class="btn" href="#home">Lessons</a></div></div>`;
    $("#again").onclick=renderReview;
  });
}

/* ---------------- number gym ---------------- */
const GYM_MODES=[["sino","Sino 일 이 삼"],["native","Native 하나 둘"],["time","Time"],["count","Counters & age"],["money","Money"],["mix","Mixed"]];
let gymMode="sino";
const COUNT_ITEMS=[["고양이","🐱","마리"],["강아지","🐶","마리"],["사과","🍎","개"],["책","📕","권"],["커피","☕","잔"],["맥주","🍺","잔"],["표","🎫","장"],["차","🚗","대"],["학생","🧑‍🎓","명"]];
const COUNTERS=["개","명","마리","권","잔","장","대"];
function gymQ(mode){
  if(mode==="mix") mode=pick(["sino","native","time","count","money"]);
  if(mode==="sino"){
    const r=Math.random(), n = r<.4 ? rand(11,99) : r<.8 ? rand(100,9999) : rand(10000,99999);
    const ans=sino(n);
    const c=[sino(n+1), sino(Math.max(1,n-1)), sino(n+10), n>=100?sino(n+100):sino(n+20), sino(n,true), n<100?native(n):sino(n*10)];
    return {mode, big:n.toLocaleString("en-US"), sub:"Read it with Sino-Korean numbers", ans, c:uniq4(ans,c), why:n>=10000?"Group by 만: "+Math.floor(n/10000)+" 만, then the rest.":"Leave off 일 before 십, 백, 천 and 만."};
  }
  if(mode==="native"){
    const n=rand(1,99), ans=native(n), t=Math.floor(n/10), o=n%10;
    const c=[sino(n), n<99?native(n+1):native(n-2), n>1?native(n-1):native(n+2), t<9&&t>0?NT[t+1]+NO[o]:native(Math.min(99,n+10)), t>1?NT[t-1]+NO[o]:"" , t>0&&o>0?NO[t]+"열"+NO[o]:""];
    return {mode, big:String(n), sub:"Count it in native Korean", ans, c:uniq4(ans,c), why:"Native numbers have a word for each ten: 열, 스물, 서른, 마흔, 쉰, 예순, 일흔, 여든, 아흔."};
  }
  if(mode==="time"){
    const h=rand(1,12), m=pick([0,0,5,10,15,20,25,30,35,40,45,50,55]);
    const mm = x => x ? " "+sino(x)+" 분" : "";
    const ans=nativeA(h)+" 시"+mm(m);
    const c=[sino(h)+" 시"+mm(m), native(h)+" 시"+mm(m), m?nativeA(h)+" 시 "+native(m)+" 분":nativeA(h)+" 시간", nativeA(h%12+1)+" 시"+mm(m), m?nativeA(h)+" 시"+mm((m+30)%60||15):sino(h)+" 시간"];
    return {mode, big:`${h}:${String(m).padStart(2,"0")}`, sub:"What time is it?", ans, c:uniq4(ans,c), why:"Hours are native (with 한, 두, 세, 네 shortened); minutes are Sino."+(m===30?" You can also say "+nativeA(h)+" 시 반.":"")};
  }
  if(mode==="count"){
    if(Math.random()<.3){
      const a=rand(1,99), ans=nativeA(a)+" 살";
      const c=[sino(a)+" 살", native(a)+" 살", nativeA(a===99?98:a+1)+" 살", sino(a)+" 세 살", nativeA(Math.max(1,a-1))+" 살"];
      return {mode, big:`${a} years old`, sub:"Say the age", ans, c:uniq4(ans,c), why:"Age with 살 uses native numbers. 20 is 스무 살; 21 is 스물한 살."};
    }
    const [nm,emo,ctr]=pick(COUNT_ITEMS), k=rand(1,6), ans=`${nm} ${nativeA(k)} ${ctr}`;
    const wrongC=shuffle(COUNTERS.filter(x=>x!==ctr));
    const c=[`${nm} ${native(k)} ${ctr}`, `${nm} ${sino(k)} ${ctr}`, `${nm} ${nativeA(k)} ${wrongC[0]}`, `${nm} ${nativeA(k)} ${wrongC[1]}`, `${nm} ${nativeA(k===6?5:k+1)} ${ctr}`];
    return {mode, big:emo.repeat(k), emo:true, sub:`How do you say this? (${nm})`, ans, c:uniq4(ans,c), why:`${nm} takes ${ctr}, with a native number before it.`};
  }
  const n=rand(2,198)*500, ans=sino(n)+" 원";
  const th=Math.floor(n/1000), rest=n%1000;
  const c=[sino(n+1000)+" 원", sino(Math.max(500,n-500))+" 원", sino(n*10)+" 원", sino(th)+"천"+(rest?sino(rest):"")+" 원", sino(n,true)+" 원"];
  return {mode:"money", big:"₩"+n.toLocaleString("en-US"), sub:"Read the price", ans, c:uniq4(ans,c), why:"Money uses Sino numbers, grouped by 만 (10,000)."};
}
function renderGym(){
  let streak=0, q=null, answered=false, runBest=0;
  const logRun=()=>{ if(runBest>=3) logEvent("gym", gymMode, runBest, 0); runBest=0; };
  leaveHook=logRun;
  app.innerHTML = `<div class="lhead"><div class="eyebrow">Drills</div>${wg("숫자 연습")}<h1>Number Gym</h1>
    <p class="lede" style="margin:0">Pick a drill and keep going. Press 1 to 4 to answer and Enter for the next one.</p></div>
    <div class="modes">${GYM_MODES.map(([k,t])=>`<button data-m="${k}" aria-pressed="${k===gymMode}">${t}</button>`).join("")}</div>
    <div class="quiz">
      <div class="stats"><span>Streak <b id="gs">0</b></span><span>Best <b id="gb">0</b></span><span>Answered <b id="gn">0</b></span></div>
      <div class="qbody"><div id="gbig"></div><div class="qsub" id="gsub" style="text-align:center;margin:0"></div><div class="choices" id="gch"></div></div>
      <div class="qfoot" id="gfoot" hidden></div>
    </div>`;
  const rec = () => state.gym[gymMode] || (state.gym[gymMode]={best:0,n:0});
  const stats=()=>{ $("#gs").textContent=streak; $("#gb").textContent=rec().best; $("#gn").textContent=rec().n; };
  const next=()=>{
    q=gymQ(gymMode); answered=false;
    $("#gbig").className="gymq"+(q.emo?" emo":""); $("#gbig").textContent=q.big;
    $("#gsub").textContent=q.sub;
    const opts=shuffle(q.c.slice());
    $("#gch").innerHTML=opts.map((o,j)=>`<button class="choice" data-j="${j}"><span class="kbd">${j+1}</span><span class="ko">${esc(o)}</span></button>`).join("");
    $("#gfoot").hidden=true;
    const btns=$$("#gch .choice");
    btns.forEach(b=>b.onclick=()=>{
      if(answered) return; answered=true;
      const o=opts[+b.dataset.j], ok=o===q.ans;
      btns.forEach(x=>{ x.disabled=true; if(opts[+x.dataset.j]===q.ans) x.classList.add("right"); });
      if(!ok) b.classList.add("wrong");
      const r=rec(); r.n++;
      if(ok){ streak++; if(streak>r.best){ r.best=streak; runBest=streak; } } else { logRun(); streak=0; }
      save(); stats();
      const f=$("#gfoot"); f.hidden=false; f.className="qfoot "+(ok?"ok":"no");
      f.innerHTML=`<div><strong>${ok?"Correct":"Not quite"}</strong> · <span class="ko">${esc(q.ans)}</span> ${sayBtn(q.ans)}<p>${hl(q.why)}</p></div><button class="btn primary" id="gnext">Next</button>`;
      $("#gnext").onclick=next; $("#gnext").focus({preventScroll:true});
    });
    keyHandler=e=>{ const n=+e.key; if(!answered && n>=1 && n<=4) btns[n-1].click(); else if(answered && e.key==="Enter"){ e.preventDefault(); next(); } };
  };
  $$(".modes button").forEach(b=>b.onclick=()=>{ logRun(); gymMode=b.dataset.m; streak=0; $$(".modes button").forEach(x=>x.setAttribute("aria-pressed", x===b)); stats(); next(); });
  stats(); next();
}

/* ---------------- who's studying ---------------- */
async function renderWho(){
  app.innerHTML = `<div class="lhead"><div class="eyebrow">Your name</div>${wg("이름")}<h1>Who's studying?</h1>
    <p class="lede" style="margin:0">Your name goes next to your scores on the Progress page. Use the same name on every phone or computer you study on, so the scores add up. Capitals don't matter: min and Min count as the same person.</p></div>
    <form class="card namef" id="namef">
      <label for="nameIn">First name or nickname</label>
      <div class="brow"><input id="nameIn" maxlength="30" autocomplete="nickname" placeholder="Your name"><button class="btn primary" type="submit">Save</button></div>
      <div class="brow" id="known"></div>
    </form>
    <form class="card namef" id="readerf" style="margin-top:16px">
      <label for="readerIn">Reader link (optional, this device only)</label>
      <p class="muted" style="margin:4px 0 8px;font-size:14px">Paste the address of another study app you use, and a Reader link appears in the menu on this device. It's saved only in this browser, so set it on each device you want it on.</p>
      <div class="brow"><input id="readerIn" type="url" inputmode="url" autocomplete="url" placeholder="https://…"><button class="btn primary" type="submit">Save</button><button class="btn" type="button" id="readerClear">Clear</button></div>
    </form>`;
  $("#nameIn").value = myName;
  $("#readerIn").value = readerUrl;
  $("#readerf").addEventListener("submit", e=>{ e.preventDefault(); const v=cleanUrl($("#readerIn").value);
    if(v===null){ toast("That doesn't look like a web address."); return; }
    if(!v){ toast("Paste an address first, or use Clear."); return; }
    setReader(v); $("#readerIn").value=v; toast("Saved. Reader is in the menu on this device."); });
  $("#readerClear").onclick=()=>{ setReader(""); $("#readerIn").value=""; toast("Reader link removed from this device."); };
  $("#namef").addEventListener("submit", e=>{ e.preventDefault(); let v=normName($("#nameIn").value); if(!v){ toast("Type a name first."); return; }
    // "min" and "Min" are the same person: reuse the spelling already on the sheet
    const known = sheetRows ? aggregate(sheetRows).map(p=>p.name) : [];
    v = known.find(k=>nameKey(k)===nameKey(v)) || v; setName(v); toast("Saved. Studying as "+myName); location.hash="#home"; });
  if(SHEET_URL){
    if(sheetRows===null) await fetchSheet();
    if(view!=="who" || !sheetRows) return;
    const names=aggregate(sheetRows).map(p=>p.name);
    if(names.length){
      const box=$("#known"); box.innerHTML='<span class="muted" style="font-size:14px">Already on the sheet:</span>';
      names.forEach(n=>{ const b=document.createElement("button"); b.type="button"; b.className="btn"; b.textContent=n; b.onclick=()=>{ $("#nameIn").value=n; }; box.appendChild(b); });
    }
  }
}

/* ---------------- progress ---------------- */
function lastLocal(){ return Math.max(0, ...Object.values(state.lessons).map(x=>+x.at||0)); }
async function renderProgress(){
  if(SHEET_URL && sheetRows===null){
    app.innerHTML = `<div class="lhead"><div class="eyebrow">Both of us</div>${wg("진도")}<h1>Progress</h1><p class="lede" style="margin:0">Loading scores from the shared sheet…</p></div>`;
    await fetchSheet();
    if(view!=="progress") return;
  }
  const people = sheetRows ? aggregate(sheetRows) : [];
  const meKey = nameKey(myName);
  let me = meKey ? people.find(p=>nameKey(p.name)===meKey) : null;
  if(me){ me.data = mergeState(me.data, state); me.last = Math.max(me.last, lastLocal()); me.isMe = true; }
  else people.unshift({name: myName || "You", data: state, last: lastLocal(), isMe: true});
  people.sort((a,b)=>(b.isMe?1:0)-(a.isMe?1:0));
  const cell = (d,id) => { const x=(d.lessons||{})[id]; if(!x) return '<span class="muted">·</span>';
    const st = x.slides && x.best>=0.8 ? "done" : "started";
    return `<span class="chip ${st}">${x.best?Math.round(x.best*100)+"%":(x.slides?"Slides":"Opened")}</span>`; };
  const note = !SHEET_URL ? "Progress saves on this device only. Once the shared Google Sheet is set up, both of your scores show up here."
    : sheetErr ? "Couldn't load the shared sheet just now, so this shows this device only. Try Refresh in a minute."
    : "Scores from the shared Google Sheet, plus anything on this device that hasn't been sent yet.";
  app.innerHTML = `<div class="lhead"><div class="eyebrow">Both of us</div>${wg("진도")}<h1>Progress</h1><p class="lede" style="margin:0">${note}</p></div>
  ${!myName?`<a class="card nameprompt" href="#who"><span>Set your name so your scores are labelled.</span><span class="btn">Set name</span></a>`:""}
  <div class="card cal" id="cal"></div>
  <div class="tw card" style="padding:0"><table class="ptable">
    <thead><tr><th>Lesson</th>${people.map((p,i)=>`<th class="nm" data-i="${i}"></th>`).join("")}</tr></thead>
    <tbody>
      ${UNITS.map(U=>`<tr class="grp"><td colspan="${people.length+1}">${U.name}</td></tr>`+inUnit(U.u).map((l,i)=>`<tr><td>${i+1}. ${esc(l.title)}</td>${people.map(p=>`<td>${cell(p.data,l.id)}</td>`).join("")}</tr>`).join("")).join("")}
      <tr><td>Mixed review (best)</td>${people.map(p=>`<td>${p.data.review&&p.data.review.best?Math.round(p.data.review.best*100)+"%":'<span class="muted">·</span>'}</td>`).join("")}</tr>
      <tr><td>Number Gym (best streak)</td>${people.map(p=>{ const b=Math.max(0,...Object.values(p.data.gym||{}).map(x=>+x.best||0)); return `<td>${b||'<span class="muted">·</span>'}</td>`; }).join("")}</tr>
      <tr><td>Lessons done</td>${people.map(p=>`<td><b>${LESSONS.filter(l=>{const x=(p.data.lessons||{})[l.id]; return x&&x.slides&&x.best>=0.8;}).length} / ${LESSONS.length}</b></td>`).join("")}</tr>
      <tr><td>Last studied</td>${people.map(p=>`<td class="muted">${p.last?new Date(p.last).toLocaleDateString(undefined,{month:"short",day:"numeric"}):"–"}</td>`).join("")}</tr>
    </tbody></table></div>
  <div class="brow" style="margin-top:12px">${SHEET_URL?'<button class="btn" id="refresh">Refresh</button>':""}<a class="btn" href="#who">Change name</a></div>
  <p class="muted" style="font-size:14px">A lesson counts as done after the last slide and a practice score of 80% or more.</p>`;
  $$(".nm").forEach(el=>{ const p=people[+el.dataset.i]; el.textContent = p.name + (p.isMe && myName ? " (you)" : ""); });
  const rb=$("#refresh"); if(rb) rb.onclick=()=>{ sheetRows=null; renderProgress(); };
  renderCal(people, studyDays(people));
}

/* ---------------- study calendar ---------------- */
// A day gets a person's dot when they finished anything that day: a lesson's slides, a practice
// quiz, the mixed review or a Number Gym streak. Dates are in this device's local time.
const pad2 = n => String(n).padStart(2,"0");
const dayKey = t => { const d=new Date(t); return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate()); };
const PCOL = ["var(--accent)","var(--mark)","var(--blue)","var(--r-c)","var(--r-e)"];
let calYM = null;
function studyDays(people){
  const sets = people.map(()=>new Set());
  const at = (who,t) => { t=+t||0; if(t<=0) return; const i=people.findIndex(p=>nameKey(p.name)===nameKey(who)); if(i>=0) sets[i].add(dayKey(t)); };
  for(const r of sheetRows||[]) at(r.who, new Date(r.when));
  // this device: scores not sent yet, and lesson finish times saved locally
  const me = people.find(p=>p.isMe);
  if(me){
    for(const e of loadPending()) if(!e.who || nameKey(e.who)===nameKey(myName)) at(me.name, e.at);
    for(const x of Object.values(state.lessons)) at(me.name, x.at);
  }
  return sets;
}
function renderCal(people, sets){
  const box=$("#cal"); if(!box) return;
  const now=new Date(), today=dayKey(now);
  if(!calYM) calYM=[now.getFullYear(), now.getMonth()];
  const all=[].concat(...sets.map(s=>[...s])).sort();
  const first=all.length ? all[0].slice(0,7) : today.slice(0,7);
  const [y,m]=calYM, ym=y+"-"+pad2(m+1), days=new Date(y,m+1,0).getDate(), lead=new Date(y,m,1).getDay();
  let cells="일월화수목금토".split("").map(d=>`<div class="dow">${d}</div>`).join("");
  for(let i=0;i<lead;i++) cells+='<div class="cd blank"></div>';
  for(let d=1; d<=days; d++){
    const k=ym+"-"+pad2(d), who=people.map((p,i)=>sets[i].has(k)?i:-1).filter(i=>i>=0);
    const cls=["cd", who.length?"on":"", who.length>1&&who.length===people.length?"all":"", k===today?"today":"", k>today?"future":""].filter(Boolean).join(" ");
    const label=new Date(y,m,d).toLocaleDateString(undefined,{month:"short",day:"numeric"})+": "+(who.length?who.map(i=>people[i].name).join(", "):"no study");
    cells+=`<div class="${cls}" title="${esc(label)}" aria-label="${esc(label)}"><span>${d}</span><span class="dots">${who.map(i=>`<i style="background:${PCOL[i%PCOL.length]}"></i>`).join("")}</span></div>`;
  }
  const monthName=new Date(y,m,1).toLocaleDateString(undefined,{month:"long",year:"numeric"});
  const legend=people.map((p,i)=>{ const n=[...sets[i]].filter(k=>k.startsWith(ym)).length;
    return `<span><i style="background:${PCOL[i%PCOL.length]}"></i>${esc(p.name)}${p.isMe&&myName?" (you)":""} <span class="muted">· ${n} day${n===1?"":"s"}</span></span>`; }).join("");
  box.innerHTML=`<div class="calhd"><button class="btn" id="calPrev" aria-label="Previous month"${ym<=first?" disabled":""}>‹</button>
    <h2>${monthName}</h2>
    <button class="btn" id="calNext" aria-label="Next month"${ym>=today.slice(0,7)?" disabled":""}>›</button></div>
    <div class="calgrid">${cells}</div>
    <div class="legend">${legend}</div>`;
  const go=step=>{ const d=new Date(calYM[0], calYM[1]+step, 1); calYM=[d.getFullYear(), d.getMonth()]; renderCal(people, sets); };
  $("#calPrev").onclick=()=>go(-1); $("#calNext").onclick=()=>go(1);
}

updateWho();
updateReader();
route();
flushLog();

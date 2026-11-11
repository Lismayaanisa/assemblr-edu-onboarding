(() => {
  const D = window.OB_DATA;
  const C = window.OB_COPY;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[m]);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NAME = "Angela";

  /* ---------- Icons (stroke only) ---------- */
  const P = {
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    cube: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/>',
    type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    blocks: '<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4M17 13V9a2 2 0 0 0-2-2h-4"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    phone: '<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M12 18h.01"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    left: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    right: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    sparkles: '<path d="m12 3-1.9 5.8L4 10.7l6.1 1.9L12 18.4l1.9-5.8 6.1-1.9-6.1-1.9z"/><path d="M5 3v4M3 5h4M19 17v4M17 19h4"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    present: '<path d="M2 3h20M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3M7 21l5-5 5 5"/>',
    school: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    play: '<path d="m6 3 14 9-14 9z"/>',
    map: '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3A5.7 5.7 0 0 0 22 9.7C22 5.4 17.5 2 12 2z"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    move: '<path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>',
    keyboard: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    refresh: '<path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    skip: '<path d="m5 4 10 8-10 8zM19 5v14"/>',
    minimize: '<path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>'
  };
  const ico = (n, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ""}</svg>`;

  const FEATURE_ICON = {
    "Editor": "cube", "Visual Coding": "blocks", "Collaborate": "users", "Edu Kits": "book", "Topic": "present",
    "Class": "school", "Publish and share (3D/AR viewer)": "share", "AI-3D Generation": "sparkles",
    "Editor + Custom Marker": "scan", "Custom Marker": "scan"
  };
  const featureLabel = (f) => (f === "Publish and share (3D/AR viewer)" ? "Present and share" : f);

  /* ---------- 3D objects ---------- */
  const SVG_OBJ = {
    volcano: `<svg viewBox="0 0 120 100"><defs><linearGradient id="vg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a1704f"/><stop offset="1" stop-color="#6b4430"/></linearGradient><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf4a"/><stop offset="1" stop-color="#e8392c"/></linearGradient></defs><ellipse cx="60" cy="92" rx="50" ry="7" fill="#000" opacity=".12"/><path d="M10 90 45 26h30l35 64z" fill="url(#vg)"/><path d="M45 26h30l-6 12c-4-3-6 6-10 2s-6 4-9-2z" fill="url(#lg)"/><path d="M52 40c2 10-6 18-2 28M66 40c4 12 0 22 6 32" stroke="url(#lg)" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="50" cy="14" r="7" fill="#d9dce3"/><circle cx="62" cy="9" r="9" fill="#e7e9ee"/><circle cx="74" cy="15" r="6" fill="#d9dce3"/></svg>`,
    heart: `<svg viewBox="0 0 120 100"><defs><radialGradient id="hg" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ff8aa6"/><stop offset=".6" stop-color="#e21b4f"/><stop offset="1" stop-color="#9c0f33"/></radialGradient></defs><ellipse cx="60" cy="94" rx="36" ry="5" fill="#000" opacity=".12"/><path d="M60 88C20 62 14 40 24 26c10-13 28-10 36 4 8-14 26-17 36-4 10 14 4 36-36 62z" fill="url(#hg)"/><path d="M50 22c-2-8 2-14 8-16M70 22c2-8 8-12 14-12" stroke="#4b7bd8" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="38" rx="8" ry="5" fill="#fff" opacity=".35" transform="rotate(-30 40 38)"/></svg>`,
    cell: `<svg viewBox="0 0 120 100"><defs><radialGradient id="cg" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#d6f7c9"/><stop offset="1" stop-color="#5cbf6a"/></radialGradient><radialGradient id="ng" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#d8b6ff"/><stop offset="1" stop-color="#7a3fd1"/></radialGradient></defs><ellipse cx="60" cy="93" rx="42" ry="5" fill="#000" opacity=".12"/><ellipse cx="60" cy="50" rx="48" ry="38" fill="url(#cg)" stroke="#3f9b4e" stroke-width="3"/><circle cx="64" cy="48" r="15" fill="url(#ng)"/><ellipse cx="32" cy="40" rx="9" ry="4" fill="#f2a53c" transform="rotate(-20 32 40)"/><ellipse cx="88" cy="64" rx="9" ry="4" fill="#f2a53c" transform="rotate(25 88 64)"/><circle cx="40" cy="66" r="4" fill="#2f8f49"/><circle cx="86" cy="34" r="3" fill="#2f8f49"/></svg>`
  };
  const OBJ = {
    planet: { name: "Planet", img: "assets/world/planet.png", tag: "Science" },
    volcano: { name: "Volcano", svg: SVG_OBJ.volcano, tag: "Geography" },
    heart: { name: "Human heart", svg: SVG_OBJ.heart, tag: "Biology" },
    cell: { name: "Plant cell", svg: SVG_OBJ.cell, tag: "Biology" },
    balloon: { name: "Hot-air balloon", img: "assets/world/balloon.png", tag: "Physics" },
    kite: { name: "Kite", img: "assets/world/kite.png", tag: "Physics" },
    plane: { name: "Paper plane", img: "assets/world/plane.png", tag: "Physics" }
  };
  const objArt = (id, cls = "") => {
    const o = OBJ[id] || OBJ.planet;
    return o.img ? `<img class="obj-art ${cls}" src="${o.img}" alt="${esc(o.name)}" draggable="false">` : `<span class="obj-art obj-svg ${cls}" role="img" aria-label="${esc(o.name)}">${o.svg}</span>`;
  };

  const SKETCH = {
    balloon: `<svg viewBox="0 0 100 100" fill="none" stroke="#3b3f4a" stroke-width="2.2" stroke-linecap="round"><path d="M50 12c-18 0-28 14-28 28 0 16 18 28 24 36h8c6-8 24-20 24-36 0-14-10-28-28-28z"/><path d="M50 12c-8 10-10 44-4 64M50 12c8 10 10 44 4 64M24 36h52M28 56h44"/><rect x="42" y="82" width="16" height="10" rx="2"/><path d="M46 76l-2 6M54 76l2 6"/></svg>`,
    kite: `<svg viewBox="0 0 100 100" fill="none" stroke="#3b3f4a" stroke-width="2.2" stroke-linecap="round"><path d="M50 8 78 40 50 72 22 40z"/><path d="M50 8v64M22 40h56"/><path d="M50 72c-4 8 6 10 2 18M52 90c-6 2-8 6-4 8"/><path d="M44 80l6 2-2 5M54 86l-6 1 3 5"/></svg>`,
    planet: `<svg viewBox="0 0 100 100" fill="none" stroke="#3b3f4a" stroke-width="2.2" stroke-linecap="round"><circle cx="50" cy="50" r="24"/><ellipse cx="50" cy="54" rx="44" ry="12" transform="rotate(-14 50 54)"/><path d="M36 40c6 2 10-2 16 0M40 58c8 2 12-2 20 0"/></svg>`
  };
  const MARKER = {
    book: { name: "Book page", svg: `<svg viewBox="0 0 120 90"><rect x="4" y="4" width="112" height="82" rx="6" fill="#fff" stroke="#d6dae3"/><rect x="14" y="14" width="44" height="34" rx="4" fill="#ffe2a8"/><circle cx="36" cy="31" r="10" fill="#f2a53c"/><path d="M66 18h40M66 26h34M66 34h38M66 42h26M14 58h92M14 66h80M14 74h88" stroke="#c5cad6" stroke-width="3" stroke-linecap="round"/></svg>` },
    poster: { name: "Poster", svg: `<svg viewBox="0 0 120 90"><rect x="4" y="4" width="112" height="82" rx="6" fill="#2f3d99"/><circle cx="84" cy="34" r="20" fill="#12a9e6"/><circle cx="84" cy="34" r="10" fill="#e8ae1a"/><path d="M14 20h40M14 30h30" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M14 66h92M14 76h60" stroke="#e21b72" stroke-width="4" stroke-linecap="round"/></svg>` },
    label: { name: "Product label", svg: `<svg viewBox="0 0 120 90"><rect x="4" y="4" width="112" height="82" rx="6" fill="#fff4e8" stroke="#f2c79a"/><circle cx="34" cy="45" r="22" fill="#e21b72"/><path d="M26 45l6 6 12-12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M66 30h40M66 42h32M66 54h36" stroke="#d29a62" stroke-width="4" stroke-linecap="round"/></svg>` }
  };

  const KITS = [
    { title: "The Life Cycle of a Butterfly", subject: "Biology", grade: "Grade 5", cover: "assets/covers/try-butterfly-cover.png", embed: "-59Pi5AeEZVisqSPhZSZ" },
    { title: "Geometry: Coordinates (X, Y, Z)", subject: "Math", grade: "Grade 7", cover: "assets/covers/try-geometry-cover.png", embed: "-AqmWYh8v6aW79c9iPdC" },
    { title: "Layers of the Earth", subject: "Geography", grade: "Grade 6", cover: "assets/covers/litosphere-cover.jpg", embed: "-u4GdF65A7hHvKx3H7i6" }
  ];
  const DECKS = [
    { title: "Heat and temperature", subject: "Science", grade: "Grade 5", cover: "assets/covers/try-temperature-topic.jpg", slides: 6 },
    { title: "Layers of the Earth", subject: "Geography", grade: "Grade 6", cover: "assets/covers/litosphere-cover.jpg", slides: 8 },
    { title: "The life cycle of a butterfly", subject: "Biology", grade: "Grade 5", cover: "assets/covers/try-butterfly-cover.png", slides: 5 }
  ];
  const SUBJECTS = ["Science", "Biology", "Math", "Geography", "History"];
  const GRADES = ["Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8"];
  const STUDENTS = [
    ["Ayu", "blr-1", "planet", true], ["Bima", "blr-3", "volcano", true], ["Citra", "blr-5", "heart", true],
    ["Dimas", "blr-7", "cell", false], ["Eka", "blr-9", "balloon", true], ["Farah", "blr-12", "kite", false]
  ];
  const TEMPLATES = [
    { id: "score", name: "Tap to score", desc: "Tap the object to earn a point.", blocks: ["When this object is tapped", "Add 1 to score", "Play a bounce"] },
    { id: "spin", name: "Spin and react", desc: "The object spins and cheers when tapped.", blocks: ["When this object is tapped", "Spin 360°", "Add 1 to score"] },
    { id: "move", name: "Catch the planet", desc: "The object jumps to a new spot after each tap.", blocks: ["When this object is tapped", "Move to a random spot", "Add 1 to score"] }
  ];

  /* ---------- Persistent demo state ---------- */
  const KEY = "assemblr-onboarding-demo-v1";
  const S = Object.assign(
    { role: "student", mi: 0, pick: 0, startFrom: "welcome", view: "landing", jobs: null, active: null, step: 0, tour: false, expanded: 0, flowRole: "student" },
    JSON.parse(localStorage.getItem(KEY) || "{}")
  );
  const save = () => localStorage.setItem(KEY, JSON.stringify(S));

  const roleData = (r = S.role) => D.find((x) => x.id === r) || D[0];
  const mot = (r = S.role, i = S.mi) => roleData(r).motivations[i] || roleData(r).motivations[0];
  const slides = () => mot().slides;
  const ctx = () => C.ctx(S.role, S.mi);
  const resetJobs = () => { S.jobs = slides().map(() => ({ status: "todo", done: 0 })); };
  if (!S.jobs || S.jobs.length !== slides().length) resetJobs();

  /* ---------- Workspace state ---------- */
  const freshWs = () => ({
    screen: "dash", drawer: null, modal: null, objects: [], label: "", labelDraft: "", projectName: "", published: false,
    phone: null, viewerSrc: null, kit: 0, template: null, tplPick: null, score: 0, joined: false,
    filters: { subject: null, grade: null }, filtered: false, ai: null, aiPct: 0, aiTab: "image", aiPick: null, aiText: "", aiObj: null,
    markerPick: null, marker: null, className: "", classMat: null, classMade: false, codeCopied: false, assignDraft: "",
    assignments: [], classTab: "materials", presentPick: null, presenting: false, rot: 0, copied: false
  });
  let ws = freshWs();
  const ensureEditor = (w) => {
    w.screen = "editor"; w.phone = null;
    if (!w.objects.length) w.objects.push({ id: w.aiObj || "planet", x: 50, y: 52 });
  };
  const DEFAULT_LABEL = "Our solar system";
  const keep = (w, m) => { if (w.modal !== m) w.modal = null; };

  /* ---------- Actions (shared by the UI and by step replay) ---------- */
  const ACT = {
    create: (w) => { w.screen = "editor"; w.drawer = null; w.modal = null; w.phone = null; },
    "open-library": (w) => { w.drawer = "library"; w.modal = null; },
    "close-drawer": (w) => { w.drawer = null; },
    drop: (w, d) => { w.objects.push({ id: d.id || "planet", x: d.x ?? 50, y: d.y ?? 52 }); w.drawer = null; },
    "open-text": (w) => { w.modal = "text"; w.drawer = null; },
    "add-label": (w) => { w.label = (w.labelDraft || "").trim() || DEFAULT_LABEL; w.modal = null; },
    "open-publish": (w) => { w.modal = "publish"; w.drawer = null; if (!w.projectName) w.projectName = w.label || DEFAULT_LABEL; },
    publish: (w) => { w.projectName = (w.projectName || "").trim() || w.label || DEFAULT_LABEL; w.published = true; w.modal = "share"; },
    "copy-link": (w) => { w.copied = true; toast("Link copied"); },
    "open-ar": (w) => { w.phone = "ar"; },
    "open-coding": (w) => { w.drawer = "coding"; w.modal = null; },
    "pick-tpl": (w, d) => { w.tplPick = d.id; },
    "use-template": (w) => { w.template = w.tplPick || "score"; w.drawer = null; },
    score: (w) => { w.score += 1; },
    scored: () => {},
    "open-collab": (w) => { w.modal = "collab"; w.drawer = null; },
    "copy-invite": (w) => { w.modal = null; toast("Invite link copied"); },
    "open-edukits": (w) => { w.screen = "edukits"; w.phone = null; w.modal = null; },
    "open-topic": (w) => { w.screen = "topic"; w.phone = null; w.modal = null; },
    "pick-filter": (w, d) => { w.filters[d.kind] = w.filters[d.kind] === d.value ? null : d.value; },
    "apply-filters": (w) => { w.filters.subject ||= "Biology"; w.filters.grade ||= "Grade 5"; w.filtered = true; },
    "open-kit": (w, d) => { w.screen = "viewer"; w.viewerSrc = "kit"; w.kit = d.i || 0; },
    "open-deck": (w) => { w.screen = "deck"; },
    present: (w) => { w.presenting = true; },
    "stop-present": (w) => { w.presenting = false; },
    "open-class": (w) => { w.modal = "class"; },
    "pick-mat": (w, d) => { w.classMat = d.id; },
    "create-class": (w) => { w.className = w.className.trim() || "Grade 5 Science"; w.classMat ||= "kit"; w.classMade = true; w.screen = "class"; w.modal = null; w.classTab = "materials"; },
    "copy-code": (w) => { w.codeCopied = true; toast("Class code copied"); },
    "open-assign": (w) => { w.modal = "assign"; },
    "give-assign": (w) => { w.assignments.push((w.assignDraft || "").trim() || "Build a 3D model of the water cycle"); w.modal = null; w.classTab = "assignments"; },
    "class-tab": (w, d) => { w.classTab = d.tab; },
    "pick-present": (w, d) => { w.presentPick = d.id; },
    "present-continue": (w) => { w.presentPick ||= "link"; w.modal = null; },
    "phone-ar": (w) => { w.phone = "ar"; },
    "open-ai": (w) => { w.screen = "ai"; w.phone = null; },
    "ai-tab": (w, d) => { w.aiTab = d.tab; },
    "ai-pick": (w, d) => { w.aiPick = d.id; },
    generate: (w) => { w.ai = "loading"; w.aiPct = 0; },
    generated: (w) => { w.ai = "done"; w.aiPct = 100; w.aiObj = w.aiPick || guessObj(w.aiText) || "balloon"; },
    "add-ai": (w) => { w.screen = "editor"; w.objects = [{ id: w.aiObj || "balloon", x: 50, y: 52 }]; w.label ||= ""; },
    "open-marker": (w) => { w.modal = "marker"; w.drawer = null; },
    "pick-marker": (w, d) => { w.markerPick = d.id; },
    "use-marker": (w) => { w.marker = w.markerPick || "book"; w.modal = null; },
    scan: (w) => { w.phone = "marker-ar"; },
    "close-phone": (w) => { w.phone = null; },
    "close-modal": (w) => { w.modal = null; },
    home: (w) => { Object.assign(w, { screen: "dash", drawer: null, modal: null, phone: null, presenting: false }); }
  };
  const guessObj = (t = "") => {
    t = t.toLowerCase();
    return ["balloon", "kite", "plane", "planet", "volcano", "heart", "cell"].find((k) => t.includes(k)) || (t.trim() ? "balloon" : null);
  };

  /* ---------- Step library: one entry per flow step in data.js ---------- */
  const view = (w, src) => { w.screen = "viewer"; w.modal = null; w.drawer = null; if (src) w.viewerSrc = src; else w.viewerSrc ||= "scene"; };
  const STEPS = {
    "Create project": { enter: (w) => ACT.home(w), target: "#qaCreate", kind: "click", expect: "create" },
    "3D library": { enter: (w) => { ensureEditor(w); w.objects = w.objects.filter(() => false); w.drawer = null; }, target: "#tbLibrary", kind: "click", expect: "open-library" },
    "Drop 3D object": { enter: (w) => { w.screen = "editor"; w.drawer = "library"; }, target: (w) => (w.drawer === "library" ? "#libDrawer, #canvas" : "#tbLibrary"), kind: "drag", expect: "drop", demo: { id: "planet" }, anchor: (w) => (w.drawer === "library" ? "#libDrawer" : null) },
    "Add garnish": { enter: (w) => { ensureEditor(w); keep(w, "text"); }, target: (w) => (w.modal === "text" ? "#textPop" : "#tbText"), kind: (w) => (w.modal === "text" ? "input" : "click"), expect: "add-label" },
    "Publish": { enter: (w) => { ensureEditor(w); keep(w, "publish"); w.drawer = null; }, target: (w) => (w.modal === "publish" ? "#publishModal" : "#btnPublish"), kind: (w) => (w.modal === "publish" ? "input" : "click"), expect: "publish" },
    "Publish the project": { enter: (w) => { ensureEditor(w); if (!w.label && !w.aiObj) w.label = DEFAULT_LABEL; keep(w, "publish"); }, target: (w) => (w.modal === "publish" ? "#publishModal" : "#btnPublish"), kind: (w) => (w.modal === "publish" ? "input" : "click"), expect: "publish" },
    "Share": { enter: (w) => { ensureEditor(w); w.published = true; w.modal = "share"; }, target: "#btnCopyLink", kind: "click", expect: "copy-link" },
    "Share the project": { enter: (w) => { ensureEditor(w); w.published = true; w.modal = "share"; }, target: "#btnCopyLink", kind: "click", expect: "copy-link", last: true },
    "View in 3D and AR": { enter: (w) => view(w), target: (w) => (w.phone ? ".ar-card" : "#btnAr, .stage"), anchor: (w) => (w.phone ? null : "#btnAr"), kind: "click", expect: "open-ar" },
    "View in 3D": { enter: (w) => { view(w, "game"); w.score = 0; }, target: ".stage", anchor: "#gameObj", kind: "click", expect: "scored" },
    "Pick a Visual Coding template": { enter: (w) => { ensureEditor(w); if (w.drawer !== "coding") w.drawer = null; }, target: (w) => (w.drawer === "coding" ? "#codeDrawer" : "#tbCoding"), kind: (w) => (w.drawer === "coding" ? "choose" : "click"), expect: "use-template", demo: {} },
    "Share the Collaborate link": { enter: (w) => { ensureEditor(w); keep(w, "collab"); }, target: (w) => (w.modal === "collab" ? "#btnCopyInvite" : "#btnCollab"), kind: "click", expect: "copy-invite" },
    "Another user joins": {
      enter: (w) => { ensureEditor(w); w.modal = null; if (!w.joined) { w.joined = true; w.objects.push({ id: "volcano", x: 72, y: 60, by: "Dimas" }); } },
      target: "#remoteCursor", kind: "watch"
    },
    "Open Edu Kits": { enter: (w) => ACT.home(w), target: "#qaEdukits", kind: "click", expect: "open-edukits" },
    "Open Topic": { enter: (w) => ACT.home(w), target: "#qaTopic", kind: "click", expect: "open-topic" },
    "Pick a subject and grade": { enter: (w) => { if (w.screen !== "topic") w.screen = "edukits"; w.filtered = false; }, target: "#filterBox", kind: "input", expect: "apply-filters" },
    "Open a project": { enter: (w) => { w.screen = "edukits"; w.filtered = true; }, target: "#card0", kind: "click", expect: "open-kit", demo: { i: 0 } },
    "Open learning slides": { enter: (w) => { w.screen = "topic"; w.filtered = true; }, target: "#card0", kind: "click", expect: "open-deck" },
    "The teacher presents the learning slides": { enter: (w) => { w.screen = "deck"; w.presenting = false; }, target: "#btnPresent", kind: "click", expect: "present" },
    "Create a Class and add materials": { enter: (w) => { if (w.modal !== "class") ACT.home(w); }, target: (w) => (w.modal === "class" ? "#classModal" : "#qaClass"), kind: (w) => (w.modal === "class" ? "input" : "click"), expect: "create-class" },
    "Invite students with the class code": { enter: (w) => { w.screen = "class"; w.modal = null; }, target: "#btnCode", kind: "click", expect: "copy-code" },
    "Give an assignment": { enter: (w) => { w.screen = "class"; keep(w, "assign"); }, target: (w) => (w.modal === "assign" ? "#assignModal" : "#btnAssign"), kind: (w) => (w.modal === "assign" ? "input" : "click"), expect: "give-assign" },
    "See every student's project": { enter: (w) => { w.screen = "class"; w.modal = null; w.classTab = "projects"; }, target: "#projGrid", kind: "watch" },
    "Show it on screen, or share the link": { enter: (w) => { ensureEditor(w); w.published = true; w.modal = "present"; }, target: "#presentModal", kind: "choose", expect: "present-continue" },
    "Students open the link on their phones": { enter: (w) => { ensureEditor(w); w.modal = null; w.phone = "link"; }, target: "#phones", kind: "watch" },
    "Assessors open the link on their phones": { enter: (w) => { ensureEditor(w); w.modal = null; w.phone = "link"; }, target: "#phones", kind: "watch" },
    "View it in AR": { enter: (w) => { ensureEditor(w); w.phone = "link"; }, target: "#phoneAr", kind: "click", expect: "phone-ar" },
    "Upload an image or type a text": { enter: (w) => { ACT["open-ai"](w); }, target: "#aiPickArea", kind: "input-next", ready: (w) => Boolean(w.aiPick || w.aiText.trim()), demo: {}, effect: (w) => { w.aiPick ||= "balloon"; } },
    "Generate 3D": { enter: (w) => { w.screen = "ai"; w.aiPick ||= w.aiText.trim() ? null : "balloon"; }, target: "#btnGenerate", kind: (w) => (w.ai === "loading" ? "loading" : "click"), expect: "generated" },
    "Add it to the project": { enter: (w) => { w.screen = "ai"; if (w.ai !== "done") ACT.generated(w); }, target: "#btnAddAi", kind: "click", expect: "add-ai" },
    "Upload a Custom Marker photo": { enter: (w) => { ensureEditor(w); if (!w.label) w.label = DEFAULT_LABEL; keep(w, "marker"); }, target: (w) => (w.modal === "marker" ? "#markerModal" : "#tbMarker"), kind: (w) => (w.modal === "marker" ? "choose" : "click"), expect: "use-marker" },
    "Scan the Custom Marker": { enter: (w) => { ensureEditor(w); w.marker ||= "book"; w.modal = null; w.phone = "scan"; }, target: "#btnScan", kind: "click", expect: "scan" },
    "View AR on top of the Custom Marker": { enter: (w) => { w.marker ||= "book"; w.phone = "marker-ar"; }, target: "#markerAr", kind: "watch" },
    "View AR on top of the Custom Marker or the physical product": { enter: (w) => { w.marker ||= "label"; w.phone = "marker-ar"; }, target: "#markerAr", kind: "watch" }
  };
  const KIND = {
    click: { icon: "hand", label: "Tap" }, drag: { icon: "move", label: "Drag" }, input: { icon: "keyboard", label: "Type" },
    "input-next": { icon: "keyboard", label: "Type or pick" }, choose: { icon: "list", label: "Choose" }, watch: { icon: "eye", label: "Watch" },
    loading: { icon: "clock", label: "Wait" }
  };
  const staticKind = (name) => {
    const def = STEPS[name];
    if (!def) return "watch";
    if (typeof def.kind !== "function") return def.kind;
    return { "Add garnish": "input", "Publish": "input", "Publish the project": "input", "Pick a Visual Coding template": "choose", "Create a Class and add materials": "input", "Give an assignment": "input", "Generate 3D": "click", "Upload a Custom Marker photo": "choose" }[name] || "click";
  };
  const stepMins = (n) => Math.max(2, Math.round(n * 0.5));

  /* ---------- Small helpers ---------- */
  let toastTimer, replaying = false;
  function toast(msg) {
    if (replaying) return;
    const t = $("#toast");
    t.innerHTML = `${ico("check")}<span>${esc(msg)}</span>`;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 1800);
  }
  const qr = (seed = 7) => {
    let s = seed, cells = "";
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    const finder = (x, y) => `<rect x="${x}" y="${y}" width="7" height="7" fill="none" stroke="#1f2937" stroke-width="1"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3" fill="#1f2937"/>`;
    for (let y = 0; y < 25; y++) for (let x = 0; x < 25; x++) {
      const inF = (x < 8 && y < 8) || (x > 16 && y < 8) || (x < 8 && y > 16);
      if (!inF && rnd() > 0.52) cells += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
    }
    return `<svg class="qr" viewBox="-1 -1 27 27" aria-hidden="true"><g fill="#1f2937">${cells}</g>${finder(0.5, 0.5)}${finder(17.5, 0.5)}${finder(0.5, 17.5)}</svg>`;
  };

  /* =========================================================
     Demo control (the one button) + panel
     ========================================================= */
  function demoLabel() {
    return `<span class="demo-btn-ico">${ico("sliders")}</span><span class="demo-btn-text"><small>Demo journey</small><b>${esc(C.ROLES[S.role].label)} · ${esc(mot().motivation)}</b></span>${ico("chevron", "demo-btn-chev")}`;
  }
  function paintDemoBtn() { $("#demoBtn").innerHTML = demoLabel(); }

  const draft = { role: S.role, mi: S.mi, pick: S.pick, startFrom: S.startFrom };
  function openPanel() {
    Object.assign(draft, { role: S.role, mi: S.mi, pick: S.pick, startFrom: S.startFrom });
    paintPanel();
    $("#panel").hidden = false;
    requestAnimationFrame(() => $("#panel").classList.add("is-open"));
    $("#demoBtn").setAttribute("aria-expanded", "true");
    setTimeout(() => $("#panel .panel-close").focus(), 50);
  }
  function closePanel() {
    $("#panel").classList.remove("is-open");
    $("#demoBtn").setAttribute("aria-expanded", "false");
    setTimeout(() => { $("#panel").hidden = true; }, 260);
  }
  function paintPanel() {
    const r = roleData(draft.role);
    const m = r.motivations[draft.mi] || r.motivations[0];
    const views = [["app", "Demo", "play"], ["flow", "Flow map", "map"], ["board", "Mood board", "palette"]];
    const curView = S.view === "flow" || S.view === "board" ? S.view : "app";
    $("#panelBody").innerHTML = `
      <div class="seg" role="tablist" aria-label="What to show">
        ${views.map(([v, l, i]) => `<button role="tab" class="seg-btn${v === curView ? " is-on" : ""}" aria-selected="${v === curView}" data-view-go="${v}">${ico(i)}${l}</button>`).join("")}
      </div>
      <section class="pn-sec">
        <h3 class="pn-h"><span class="pn-num">1</span>Role</h3>
        <div class="role-grid" role="radiogroup" aria-label="Role">
          ${D.map((x) => `<button role="radio" aria-checked="${x.id === draft.role}" class="role-chip${x.id === draft.role ? " is-on" : ""}" data-role-pick="${x.id}" style="--c:${C.ROLES[x.id].accent}"><span class="dot"></span>${esc(C.ROLES[x.id].label)}</button>`).join("")}
        </div>
      </section>
      <section class="pn-sec">
        <h3 class="pn-h"><span class="pn-num">2</span>Use motivation</h3>
        <div class="mot-list" role="radiogroup" aria-label="Use motivation">
          ${r.motivations.map((x, i) => `<button role="radio" aria-checked="${i === draft.mi}" class="mot-opt${i === draft.mi ? " is-on" : ""}" data-mot-pick="${i}"><span class="radio"></span><span><b>${esc(x.motivation)}</b>${x.followUp ? `<small>Asks: ${esc(x.followUp)}</small>` : ""}${x.draft ? `<small class="tag-draft">Draft welcome copy</small>` : ""}</span></button>`).join("")}
        </div>
      </section>
      <section class="pn-sec">
        <h3 class="pn-h"><span class="pn-num">3</span>Welcoming message <span class="pn-sub">Pick the job to test first</span></h3>
        <div class="wm-list" role="radiogroup" aria-label="Welcoming message">
          ${m.slides.map((s, i) => {
            const [jt] = C.job(draft.role, draft.mi, i);
            return `<button role="radio" aria-checked="${i === draft.pick}" class="wm-card${i === draft.pick ? " is-on" : ""}" data-wm-pick="${i}">
              <img src="${C.art(draft.role, draft.mi, s.feature)}" alt="">
              <span class="wm-text"><small>Slide ${i + 1} · ${ico(FEATURE_ICON[s.feature] || "cube")} ${esc(featureLabel(s.feature))}</small><b>${esc(s.title)}</b><span>\u201c${esc(s.message)}\u201d</span><em>Onboarding: ${esc(jt)}</em></span>
            </button>`;
          }).join("")}
        </div>
      </section>
      <section class="pn-sec">
        <h3 class="pn-h"><span class="pn-num">4</span>Start from</h3>
        <div class="seg seg-sm" role="radiogroup" aria-label="Start from">
          ${[["welcome", "Welcome page"], ["home", "Home checklist"], ["job", "Inside the job"]].map(([v, l]) => `<button role="radio" aria-checked="${v === draft.startFrom}" class="seg-btn${v === draft.startFrom ? " is-on" : ""}" data-start-pick="${v}">${l}</button>`).join("")}
        </div>
      </section>`;
  }
  function applyPanel() {
    const changed = draft.role !== S.role || draft.mi !== S.mi;
    Object.assign(S, { role: draft.role, mi: draft.mi, pick: draft.pick, startFrom: draft.startFrom, flowRole: draft.role });
    resetJobs();
    S.tour = false; S.active = null; S.expanded = S.pick;
    closePanel();
    if (S.startFrom === "welcome") showWelcome();
    else if (S.startFrom === "home") { S.view = "app"; ws = freshWs(); render(); }
    else startJob(S.pick, 0);
    if (changed) toast(`Showing ${C.ROLES[S.role].label} · ${mot().motivation}`);
    save();
  }

  $("#demoBtn").addEventListener("click", () => ($("#panel").hidden ? openPanel() : closePanel()));
  $("#panel").addEventListener("click", (e) => {
    const t = e.target.closest("button");
    if (e.target.id === "panel" || e.target.classList.contains("panel-scrim")) return closePanel();
    if (!t) return;
    if (t.classList.contains("panel-close")) return closePanel();
    if (t.id === "panelApply") return applyPanel();
    if (t.id === "panelReset") { resetJobs(); S.tour = false; S.active = null; ws = freshWs(); save(); closePanel(); S.view = "app"; render(); toast("Progress reset"); return; }
    if (t.dataset.rolePick) { draft.role = t.dataset.rolePick; draft.mi = 0; draft.pick = 0; }
    if (t.dataset.motPick) { draft.mi = +t.dataset.motPick; draft.pick = 0; }
    if (t.dataset.wmPick) draft.pick = +t.dataset.wmPick;
    if (t.dataset.startPick) draft.startFrom = t.dataset.startPick;
    if (t.dataset.viewGo) {
      const v = t.dataset.viewGo;
      closePanel();
      if (v === "app") { if (S.view === "landing" || S.view === "flow" || S.view === "board") { S.view = "app"; render(); } }
      else { S.view = v; S.flowRole = draft.role; render(); }
      save();
      return;
    }
    const sc = $("#panelBody").scrollTop;
    paintPanel();
    $("#panelBody").scrollTop = sc;
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#panel").hidden) closePanel(); });

  /* =========================================================
     Welcome carousel (continues the setup-moment prototype)
     ========================================================= */
  let wIndex = 0, wTimer;
  function showWelcome() {
    S.view = "welcome"; save();
    wIndex = 0;
    render();
    paintWelcome();
  }
  function paintWelcome(auto) {
    const sl = slides();
    const s = sl[wIndex];
    const box = $("#welcomeView");
    box.classList.remove("is-in");
    void box.offsetWidth;
    $("#welcomeTitle").textContent = s.title;
    $("#welcomeDesc").textContent = s.message;
    const img = $("#welcomeArt");
    img.src = C.art(S.role, S.mi, s.feature);
    img.alt = s.title;
    box.classList.add("is-in");
    $("#welcomeDots").innerHTML = sl.map((_, i) => `<button role="tab" aria-selected="${i === wIndex}" aria-label="Slide ${i + 1}" class="${i === wIndex ? "is-on" : ""}" data-w="${i}"></button>`).join("");
    $("#welcomeCta").hidden = wIndex !== sl.length - 1;
    clearTimeout(wTimer);
    if (wIndex < sl.length - 1 && !reduced) wTimer = setTimeout(() => { wIndex++; paintWelcome(true); }, 5000);
  }
  $("#welcomeDots").addEventListener("click", (e) => { const b = e.target.closest("[data-w]"); if (!b) return; wIndex = +b.dataset.w; paintWelcome(); });
  (() => {
    let x0 = null;
    const art = $("#welcomeView");
    art.addEventListener("pointerdown", (e) => { x0 = e.clientX; });
    art.addEventListener("pointerup", (e) => {
      if (x0 == null) return;
      const dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) < 40) return;
      wIndex = Math.max(0, Math.min(slides().length - 1, wIndex + (dx < 0 ? 1 : -1)));
      paintWelcome();
    });
  })();
  $("#welcomeCta").addEventListener("click", () => {
    clearTimeout(wTimer);
    S.view = "app"; S.expanded = S.pick; ws = freshWs(); save();
    render();
    setTimeout(() => $("#obCard")?.classList.add("is-hello"), 80);
  });

  /* =========================================================
     App shell: sidebar, top bar, workspace screens
     ========================================================= */
  function renderShell() {
    const nav = [["home", "Home", "home"], ["open-edukits", "Edu Kits", "book"], ["open-topic", "Topic", "present"], ["open-class", "Class", "school"], ["open-ai", "AI-3D Generation", "sparkles"]];
    const cur = { dash: "home", edukits: "open-edukits", topic: "open-topic", deck: "open-topic", class: "open-class", ai: "open-ai" }[ws.screen];
    const find = { edukits: "Search Edu Kits", topic: "Search learning slides", class: "Search in Class" }[ws.screen] || "Search projects, Edu Kits, and Topic";
    $("#app").classList.toggle("is-full", ["editor", "viewer", "deck"].includes(ws.screen));
    $("#side").innerHTML = `
      <button class="logo-wordmark" data-act="home" aria-label="Assemblr EDU home"><span><i>ASSEMBLR</i><em class="sep">|</em><b class="e">E</b><b class="d">D</b><b class="u">U</b></span></button>
      <nav class="side-nav" aria-label="Main">
        ${nav.map(([a, l, i]) => `<button class="side-link${a === cur ? " is-on" : ""}" data-act="${a}"${a === cur ? ' aria-current="page"' : ""}>${ico(i)}<span>${l}</span></button>`).join("")}
        <button class="side-link is-extra" data-act="home">${ico("folder")}<span>My projects</span></button>
      </nav>
      <div class="side-foot">
        <button class="nav-ico" aria-label="${find}" title="${find}">${ico("search")}</button>
        <button class="nav-ico" aria-label="Notifications">${ico("bell")}</button>
        <span class="me" title="${NAME} · ${esc(C.ROLES[S.role].label)}"><img src="assets/avatars/blr-1.png" alt="${NAME}"></span>
      </div>`;
  }

  function renderWs() {
    document.body.dataset.role = S.role;
    renderShell();
    const el = $("#ws");
    const scr = { dash: scrDash, editor: scrEditor, viewer: scrViewer, edukits: scrBrowse, topic: scrBrowse, deck: scrDeck, class: scrClass, ai: scrAi }[ws.screen] || scrDash;
    el.dataset.screen = ws.screen;
    el.innerHTML = scr() + overlays();
    $("#launcher").hidden = !(ws.screen !== "dash" && S.jobs);
    paintLauncher();
    if (T.on) positionSoon();
  }

  /* ---------- Home / dashboard ---------- */
  /* ---------- What's new slider ---------- */
  const NEWS = [
    {
      img: "assets/news/peoples-choice.jpg",
      alt: "BLR holding a tablet next to a People's Choice sign",
      title: "ImajiNation 2026: People's Choice",
      body: ["Support the best ImajiNation 2026 entries in People's Choice. Explore the top 50 entries from each level and vote for your favorite. The winner gets 1 year of the Assemblr EDU Starter Plan!"],
      cta: "Choose your favorite"
    },
    {
      img: "assets/news/grand-final.jpg",
      alt: "Gold ImajiNation trophies with confetti",
      partners: true,
      title: "ImajiNation Grand Final on November 5",
      body: [
        "Submissions are closed. Out of 1,640 entries, the finalists will take the national stage at Plaza Insan Berprestasi, Building A, Kemendikdasmen on November 5.",
        "See what they made, then vote for your favorite in People's Choice. 300 entries are nominated, and voting closes November 4."
      ],
      cta: "See the finalists"
    }
  ];
  let newsI = 0;
  function newsSlider() {
    return `
      <section class="news ds-fade-up" aria-roledescription="carousel" aria-label="What's new">
        <p class="eyebrow">${ico("sparkles")}What's new</p>
        <h2 class="sec-h">Latest from Assemblr EDU</h2>
        <div class="news-stage">
          <span class="news-peek is-l" aria-hidden="true"></span><span class="news-peek is-r" aria-hidden="true"></span>
          <div class="news-view">
            <div class="news-track" style="transform:translateX(-${newsI * 100}%)">
              ${NEWS.map((n, i) => `
              <article class="news-card" aria-roledescription="slide" aria-label="${i + 1} of ${NEWS.length}"${i === newsI ? "" : " inert"}>
                <div class="news-art"><img src="${n.img}" alt="${esc(n.alt)}"><span class="news-new"><i></i>New</span></div>
                <div class="news-copy">
                  ${n.partners ? `<div class="news-partners"><img src="assets/news/partners.png" alt="Kemendikdasmen and Assemblr EDU"><img class="news-imaji" src="assets/news/imajination-logo.png" alt="ImajiNation"></div>` : ""}
                  <div class="news-tags"><span class="news-tag is-gold">${ico("trophy")}Competition</span><span class="news-tag is-green"><i></i>Voting open</span></div>
                  <h3>${esc(n.title)}</h3>
                  ${n.body.map((p) => `<p>${esc(p)}</p>`).join("")}
                  <button class="btn btn-primary btn-sm" type="button">${esc(n.cta)}${ico("right")}</button>
                </div>
              </article>`).join("")}
            </div>
          </div>
          <button class="news-arrow is-prev" type="button" data-news="-1" aria-label="Previous">${ico("left")}</button>
          <button class="news-arrow is-next" type="button" data-news="1" aria-label="Next">${ico("right")}</button>
        </div>
        <div class="news-dots">${NEWS.map((_, i) => `<button type="button" data-news-go="${i}" aria-label="Show slide ${i + 1}"${i === newsI ? ' aria-current="true"' : ""}></button>`).join("")}</div>
      </section>`;
  }
  function newsShow(i) {
    newsI = (i + NEWS.length) % NEWS.length;
    const root = $(".news");
    if (!root) return;
    $(".news-track", root).style.transform = `translateX(-${newsI * 100}%)`;
    root.querySelectorAll(".news-card").forEach((c, k) => c.toggleAttribute("inert", k !== newsI));
    root.querySelectorAll("[data-news-go]").forEach((d, k) => d.toggleAttribute("aria-current", k === newsI));
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-news], [data-news-go]");
    if (!b) return;
    newsAt = Date.now();
    newsShow(b.dataset.newsGo != null ? +b.dataset.newsGo : newsI + +b.dataset.news);
  });
  let newsAt = 0;
  setInterval(() => {
    const root = $(".news");
    if (root && Date.now() - newsAt > 6500 && !root.matches(":hover, :focus-within") && !matchMedia("(prefers-reduced-motion: reduce)").matches) newsShow(newsI + 1);
  }, 7000);

  function scrDash() {
    const c = ctx();
    const tiles = [
      ["qaCreate", "create", "plus", "Create project", "Start from a blank scene"],
      ["qaEdukits", "open-edukits", "book", "Edu Kits", "Ready-to-use 3D/AR"],
      ["qaTopic", "open-topic", "present", "Topic", "Learning slides with 3D"],
      ["qaClass", "open-class", "school", "Class", "Assignments and materials"],
      ["qaAi", "open-ai", "sparkles", "AI-3D Generation", "Image or text to 3D"]
    ];
    const hasProject = ws.published || S.jobs.some((j) => j.status === "done");
    return `
      <div class="dash">
        <section class="hero ds-fade-up">
          ${S.jobs.every((j) => j.status === "done")
            ? `<h1>Nice work, ${NAME}!</h1>
          <p class="lead">You've explored Assemblr EDU. Now create your own and share it with ${esc(c.audience)}.</p>`
            : `<h1>Hi ${NAME}! Ready to explore?</h1>
          <p class="lead">Pick a mission below. In a few minutes, you'll have something to show ${esc(c.audience)}.</p>`}
        </section>
        <div class="dash-grid">
          ${checklist()}
          ${newsSlider()}
          <section class="qa ds-fade-up" aria-label="Quick actions">
            <h2 class="sec-h">Create and explore</h2>
            <div class="qa-grid">
              ${tiles.map(([id, a, i, t, s], k) => `<button id="${id}" class="qa-tile${k === 0 ? " is-primary" : ""}" data-act="${a}"><span class="qa-ico">${ico(i)}</span><b>${t}</b><small>${s}</small></button>`).join("")}
            </div>
            <h2 class="sec-h">My projects</h2>
            ${hasProject
              ? `<div class="proj-row"><article class="proj-card"><div class="proj-thumb">${objArt(ws.objects[0]?.id || "planet")}</div><b>${esc(ws.projectName || DEFAULT_LABEL)}</b><small>Published · just now</small></article></div>`
              : `<div class="empty"><span class="empty-ico">${ico("folder")}</span><b>Your projects will show up here</b><small>Finish your first step and it'll appear here, ready to share.</small></div>`}
          </section>
        </div>
      </div>`;
  }

  /* ---------- The onboarding checklist ---------- */
  function checklist(compact) {
    const sl = slides();
    const done = S.jobs.filter((j) => j.status === "done").length;
    const totalSteps = sl.reduce((a, s) => a + s.flow.length, 0);
    const doneSteps = S.jobs.reduce((a, j, i) => a + (j.status === "done" ? sl[i].flow.length : j.done), 0);
    const pct = Math.round((doneSteps / totalSteps) * 100);
    const left = sl.reduce((a, s, i) => a + (S.jobs[i].status === "done" ? 0 : stepMins(s.flow.length - S.jobs[i].done)), 0);
    const all = done === sl.length;
    const nextUp = S.jobs.findIndex((j) => j.status !== "done" && j.status !== "skipped");
    return `
      <section class="ob ms${compact ? " is-compact" : ""}${all ? " is-all" : ""}" id="${compact ? "obPop" : "obCard"}" aria-label="${esc(C.CHECKLIST_TITLE[S.role])}">
        <header class="ms-head">
          <span class="ms-stars" aria-hidden="true">${STARS}</span>
          <div class="ms-xp">
            <div class="ms-xp-top"><h2>${all ? "You've explored Assemblr EDU" : esc(C.CHECKLIST_TITLE[S.role])}</h2><span class="ms-xp-n"><b>${done}</b> of ${sl.length} tried</span></div>
            <div class="ms-xp-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="Exploring progress"><i class="is-done" style="width:${(S.jobs.reduce((a, j, i) => a + (j.status === "done" ? sl[i].flow.length : 0), 0) / totalSteps) * 100}%"></i><i class="is-doing" style="width:${(S.jobs.reduce((a, j) => a + (j.status === "done" ? 0 : j.done), 0) / totalSteps) * 100}%"></i></div>
            <p class="ms-xp-sub">${all ? `Congratulations! You've tried ${listJoin(sl.map((s) => featureLabel(s.feature)))}.` : `Try ${sl.length} things you can do in Assemblr EDU · ${left} min left`}</p>
          </div>        </header>
        <ol class="ob-list">
          ${sl.map((s, i) => obItem(s, i, i === nextUp)).join("")}
        </ol>
      </section>`;
  }
  const STARS = [[42, 22, 4, 0], [55, 70, 3, 1.2], [63, 34, 4.5, 2.1], [71, 78, 3, .6], [78, 18, 5, 1.7], [84, 56, 3.5, 2.6], [89, 30, 4, .3], [93, 74, 4.5, 1.4], [97, 14, 3, 2.3], [50, 46, 3, 1.9], [67, 12, 3, .9], [75, 48, 4, 2.9], [59, 88, 3, 1.6], [86, 86, 3.5, .1]]
    .map(([x, y, s, d]) => `<i style="left:${x}%;top:${y}%;--s:${s}px;--d:${d}s"></i>`).join("");
  const listJoin = (a) => (a.length < 2 ? a.join("") : `${a.slice(0, -1).join(", ")}${a.length > 2 ? "," : ""} and ${a[a.length - 1]}`);
  function obItem(s, i, isNext) {
    const j = S.jobs[i];
    const [title, sub] = C.job(S.role, S.mi, i);
    const open = S.expanded === i;
    const active = S.tour && S.active === i;
    const curName = s.flow[j.done];
    const needs = j.status === "active" && ["input", "input-next", "choose", "drag"].includes(staticKind(curName));
    const state = j.status === "done" ? "done" : j.status === "skipped" ? "skipped" : j.status === "active" ? (needs ? "needs" : "active") : "todo";
    const mark = state === "done" ? ico("check") : state === "skipped" ? ico("skip") : `<span>${i + 1}</span>`;
    const status = {
      done: `<span class="st-ico is-done" role="img" aria-label="Completed" title="Completed">${ico("check")}</span>`,
      skipped: `<span class="st st-skip">Skipped</span>`,
      active: `<span class="st-ico is-wait" role="img" aria-label="In progress, ${j.done} of ${s.flow.length} steps" title="In progress · ${j.done}/${s.flow.length}">${ico("clock")}</span>`,
      needs: `<span class="st-ico is-wait" role="img" aria-label="Waiting for you" title="Waiting for you">${ico("clock")}</span>`,
      todo: `<span class="st">${ico("clock")}${stepMins(s.flow.length)} min</span>`
    }[state];
    const feat = featureLabel(s.feature);
    const cta = state === "done" ? ["Try it again", "refresh"] : state === "active" || state === "needs" ? ["Continue", "play"] : ["Start", "play"];
    const reward = `<span class="ms-tag${state === "done" ? " is-done" : ""}">${ico(FEATURE_ICON[s.feature] || "cube")}${esc(feat)}</span>`;
    const stepsDone = state === "done" ? s.flow.length : j.done;
    return `
      <li class="ob-item" data-state="${state}"${open ? ' data-open="true"' : ""}${active ? ' data-live="true"' : ""}${isNext ? ' data-next="true"' : ""} style="--lp:${(stepsDone / s.flow.length) * 100}%">
        <button class="ob-row" data-ob-toggle="${i}" aria-expanded="${open}">
          <span class="ob-mark" style="--p:${(j.done / s.flow.length) * 100}">${mark}</span>
          <span class="ob-text"><small class="ms-eyebrow">Mission ${i + 1}${isNext && state === "todo" ? " · Up next" : ""}</small><b>${esc(title)}</b></span>
          <span class="ob-side">${reward}<span class="ob-st">${open ? "" : status}</span>${ico("chevron", "ob-chev")}</span>
        </button>
        <div class="ob-detail"${open ? "" : " inert"}>
          <div class="ob-detail-in">
            <p class="ob-sub">${esc(sub)}</p>
            <div class="ms-pips" aria-label="${stepsDone} of ${s.flow.length} steps done">${s.flow.map((_, k) => `<i class="${k < stepsDone ? "is-done" : k === stepsDone && state !== "todo" ? "is-now" : ""}"></i>`).join("")}<span>${state === "done" ? "All steps done" : state === "todo" ? `${s.flow.length} steps` : `Step ${j.done + 1} of ${s.flow.length}: ${esc(stepCopy(curName).title)}`}</span></div>
            <div class="ob-actions">
              <button class="btn btn-primary btn-sm" data-ob-start="${i}">${ico(cta[1])}${cta[0]}</button>
              ${state === "todo" ? `<span class="ob-time">${ico("clock")}About ${stepMins(s.flow.length)} min</span><button class="btn-link" data-ob-skip="${i}">Skip for now</button>` : ""}
            </div>
          </div>
        </div>
      </li>`;
  }
  function paintLauncher() {
    const l = $("#launcher");
    const n = slides().length, d = S.jobs.filter((j) => j.status === "done").length;
    l.innerHTML = `<span class="ring" style="--p:${(d / n) * 100}"><span>${d}/${n}</span></span><span class="launch-text"><small>Missions</small><b>${esc(C.CHECKLIST_TITLE[S.role])}</b></span>`;
    const pop = $("#obPopWrap");
    if (!pop.hidden) pop.innerHTML = checklist(true);
  }
  $("#launcher").addEventListener("click", () => {
    const pop = $("#obPopWrap");
    pop.hidden = !pop.hidden;
    $("#launcher").setAttribute("aria-expanded", String(!pop.hidden));
    if (!pop.hidden) pop.innerHTML = checklist(true);
  });

  /* ---------- Editor ---------- */
  function scrEditor() {
    const tools = [["tbLibrary", "open-library", "cube", "3D library"], ["tbText", "open-text", "type", "Text"], ["tbCoding", "open-coding", "blocks", "Visual Coding"], ["tbMarker", "open-marker", "scan", "Custom Marker"]];
    const on = { library: "tbLibrary", coding: "tbCoding" }[ws.drawer] || { text: "tbText", marker: "tbMarker" }[ws.modal];
    const tpl = TEMPLATES.find((t) => t.id === ws.template);
    return `
      <div class="ed">
        <header class="ed-bar">
          <button class="icon-btn" data-act="home" aria-label="Back to home">${ico("left")}</button>
          <div class="ed-name"><b>${esc(ws.projectName || ws.label || "Untitled project")}</b><small>${ws.published ? "Published" : "Draft · saved"}</small></div>
          <div class="ed-right">
            <div class="avatar-stack" id="avatarStack"><img src="assets/avatars/blr-1.png" alt="${NAME}">${ws.joined ? `<img class="pop-in" src="assets/avatars/blr-7.png" alt="Dimas">` : ""}</div>
            <button class="btn btn-ghost btn-sm" id="btnCollab" data-act="open-collab">${ico("users")}Collaborate</button>
            <button class="btn btn-primary btn-sm" id="btnPublish" data-act="open-publish">${ico("send")}Publish</button>
          </div>
        </header>
        <div class="ed-body">
          <nav class="ed-tools" aria-label="Editor tools">
            ${tools.map(([id, a, i, l]) => `<button id="${id}" class="tool${id === on ? " is-on" : ""}" data-act="${a}">${ico(i)}<span>${l}</span></button>`).join("")}
          </nav>
          ${ws.drawer === "library" ? libDrawer() : ""}
          ${ws.drawer === "coding" ? codeDrawer() : ""}
          <div class="canvas" id="canvas" aria-label="Scene">
            <div class="floor"></div>
            ${ws.objects.length ? "" : `<div class="canvas-empty">${ico("cube")}<b>Your scene is empty</b><small>Add a 3D object from the 3D library.</small></div>`}
            ${ws.objects.map((o, i) => `<div class="obj${i === ws.objects.length - 1 ? " is-sel" : ""}${o.by ? " by-remote" : ""}" style="left:${o.x}%;top:${o.y}%">${objArt(o.id)}${o.by ? `<span class="obj-by">${esc(o.by)}</span>` : ""}</div>`).join("")}
            ${ws.label ? `<div class="scene-label">${esc(ws.label)}</div>` : ""}
            ${ws.marker ? `<div class="marker-badge">${ico("scan")}Custom Marker: ${esc(MARKER[ws.marker].name)}</div>` : ""}
            ${ws.joined ? `<div class="remote-cursor" id="remoteCursor"><svg viewBox="0 0 24 24"><path d="M4 2l16 9-7 2-3 7z" fill="#12a9e6" stroke="#fff" stroke-width="1.5"/></svg><span>Dimas</span></div>` : ""}
            ${ws.modal === "text" ? textPop() : ""}
          </div>
          ${tpl ? `<aside class="blocks"><p class="eyebrow">Visual Coding</p><b>${esc(tpl.name)}</b>${tpl.blocks.map((b, i) => `<div class="block b${i}">${esc(b)}</div>`).join("")}</aside>` : ""}
        </div>
      </div>`;
  }
  function libDrawer() {
    return `<aside class="drawer" id="libDrawer" aria-label="3D library">
      <div class="drawer-head"><b>3D library</b><button class="icon-btn sm" data-act="close-drawer" aria-label="Close">${ico("x")}</button></div>
      <label class="search sm">${ico("search")}<input placeholder="Search 3D objects" aria-label="Search 3D objects"></label>
      <div class="lib-grid">
        ${Object.entries(OBJ).map(([id, o], i) => `<button class="lib-item${i === 0 ? " is-hint" : ""}" data-obj="${id}" ${i === 0 ? 'id="libFirst"' : ""}>${objArt(id)}<span>${esc(o.name)}</span><small>${o.tag}</small></button>`).join("")}
      </div>
    </aside>`;
  }
  function codeDrawer() {
    return `<aside class="drawer" id="codeDrawer" aria-label="Visual Coding templates">
      <div class="drawer-head"><b>Visual Coding templates</b><button class="icon-btn sm" data-act="close-drawer" aria-label="Close">${ico("x")}</button></div>
      <div class="tpl-list" role="radiogroup">
        ${TEMPLATES.map((t) => `<button role="radio" aria-checked="${ws.tplPick === t.id}" class="tpl${ws.tplPick === t.id ? " is-on" : ""}" data-act="pick-tpl" data-id="${t.id}"><span class="radio"></span><span><b>${t.name}</b><small>${t.desc}</small></span></button>`).join("")}
      </div>
      <button class="btn btn-primary btn-block" id="btnUseTpl" data-act="use-template" data-need="tpl" ${ws.tplPick ? "" : 'aria-disabled="true"'}>Use template</button>
      <p class="field-err" id="tplErr" hidden>${ico("alert")}Pick a template first.</p>
    </aside>`;
  }
  function textPop() {
    return `<div class="pop" id="textPop" role="dialog" aria-label="Add text">
      <label class="lbl" for="labelInput">Label</label>
      <input class="input" id="labelInput" data-model="labelDraft" value="${esc(ws.labelDraft)}" placeholder="e.g. ${DEFAULT_LABEL}" autocomplete="off">
      <p class="field-err" id="labelErr" hidden>${ico("alert")}Type a label so others know what this is.</p>
      <div class="pop-foot"><button class="btn btn-ghost btn-sm" data-act="close-modal">Cancel</button><button class="btn btn-primary btn-sm" id="btnAddLabel" data-act="add-label" data-need="label">Add</button></div>
    </div>`;
  }

  /* ---------- Viewer ---------- */
  function scrViewer() {
    const kit = KITS[ws.kit] || KITS[0];
    const tpl = TEMPLATES.find((t) => t.id === ws.template) || TEMPLATES[0];
    const title = ws.viewerSrc === "kit" ? kit.title : ws.projectName || ws.label || DEFAULT_LABEL;
    let stage;
    if (ws.viewerSrc === "kit") stage = `<iframe class="embed" title="${esc(kit.title)} in 3D" src="https://viewer-edu.assemblrworld.com/Embed/${kit.embed}" allow="xr-spatial-tracking; fullscreen"></iframe>`;
    else if (ws.viewerSrc === "game") stage = `<div class="game"><div class="score" aria-live="polite">Score <b>${ws.score}</b></div><button class="game-obj t-${tpl.id}" id="gameObj" data-act="score" style="${tpl.id === "move" ? `left:${30 + ((ws.score * 37) % 40)}%;top:${36 + ((ws.score * 23) % 30)}%` : ""}" aria-label="Tap the planet">${objArt(ws.objects[0]?.id || "planet")}</button>${ws.score >= 3 ? `<div class="win">${ico("sparkles")}You scored 3!</div>` : ""}</div>`;
    else stage = `<div class="scene-view" id="sceneView" style="--rot:${ws.rot}deg">${ws.objects.map((o) => `<div class="obj" style="left:${o.x}%;top:${o.y}%">${objArt(o.id)}</div>`).join("")}${ws.label ? `<div class="scene-label">${esc(ws.label)}</div>` : ""}<span class="drag-hint">${ico("move")}Drag to turn</span></div>`;
    return `
      <div class="viewer">
        <header class="ed-bar">
          <button class="icon-btn" data-act="home" aria-label="Back to home">${ico("left")}</button>
          <div class="ed-name"><b>${esc(title)}</b><small>${ws.viewerSrc === "kit" ? `Edu Kits · ${kit.subject} · ${kit.grade}` : "Viewer · how others see it"}</small></div>
          <div class="ed-right"><button class="btn btn-primary btn-sm" id="btnAr" data-act="open-ar">${ico("phone")}View in AR</button></div>
        </header>
        <div class="stage">${stage}</div>
      </div>`;
  }

  /* ---------- Edu Kits / Topic browse ---------- */
  function scrBrowse() {
    const topic = ws.screen === "topic";
    const items = topic ? DECKS : KITS;
    const f = ws.filters;
    const list = ws.filtered ? [...items].sort((a, b) => (b.subject === f.subject) - (a.subject === f.subject)) : items;
    const ready = f.subject && f.grade;
    return `
      <div class="browse">
        <p class="eyebrow">${topic ? "Topic" : "Edu Kits"}</p>
        <h1>${topic ? "Learning slides with 3D, ready to present" : "Ready-to-use 3D/AR for your subject"}</h1>
        <div class="filter-box${ws.filtered ? " is-set" : ""}" id="filterBox">
          <div class="filter-row"><span class="lbl">Subject</span><div class="chips">${SUBJECTS.map((s) => `<button class="chip${f.subject === s ? " is-on" : ""}" aria-pressed="${f.subject === s}" data-act="pick-filter" data-kind="subject" data-value="${s}">${s}</button>`).join("")}</div></div>
          <div class="filter-row"><span class="lbl">Grade</span><div class="chips">${GRADES.map((s) => `<button class="chip${f.grade === s ? " is-on" : ""}" aria-pressed="${f.grade === s}" data-act="pick-filter" data-kind="grade" data-value="${s}">${s}</button>`).join("")}</div></div>
          <div class="filter-foot"><span class="filter-sum">${ready ? `${esc(f.subject)} · ${esc(f.grade)}` : "Pick one subject and one grade"}</span><button class="btn btn-primary btn-sm" id="btnApply" data-act="apply-filters" data-need="filters" ${ready ? "" : 'aria-disabled="true"'}>Show ${topic ? "slides" : "projects"}</button></div>
          <p class="field-err" id="filterErr" hidden>${ico("alert")}Pick a subject and a grade first.</p>
        </div>
        <div class="card-grid">
          ${list.map((k, i) => `<button class="card" id="card${i}" data-act="${topic ? "open-deck" : "open-kit"}" data-i="${items.indexOf(k)}"><span class="card-media"><img src="${k.cover}" alt=""></span><span class="card-body"><span class="badges"><span class="badge">${k.subject}</span><span class="badge">${k.grade}</span></span><b>${esc(k.title)}</b><small>${topic ? `${k.slides} slides · with 3D` : "3D and AR · ready to use"}</small></span></button>`).join("")}
        </div>
      </div>`;
  }
  function scrDeck() {
    const d = DECKS[0];
    return `
      <div class="deck">
        <header class="ed-bar">
          <button class="icon-btn" data-act="open-topic" aria-label="Back to Topic">${ico("left")}</button>
          <div class="ed-name"><b>${d.title}</b><small>Topic · ${d.subject} · ${d.grade} · ${d.slides} slides</small></div>
          <div class="ed-right"><button class="btn btn-primary btn-sm" id="btnPresent" data-act="present">${ico("monitor")}Present</button></div>
        </header>
        <div class="deck-body">
          <ol class="thumbs">${Array.from({ length: d.slides }, (_, i) => `<li class="${i === 0 ? "is-on" : ""}"><img src="${i % 2 ? "assets/covers/temperature-slide-cover.jpg" : d.cover}" alt=""><span>${i + 1}</span></li>`).join("")}</ol>
          <div class="slide-main"><img src="${d.cover}" alt="First slide: ${d.title}"></div>
        </div>
        ${ws.presenting ? `<div class="presenting"><img src="${d.cover}" alt=""><div class="pres-bar"><span>Slide 1 of ${d.slides}</span><button class="btn btn-ghost btn-sm on-dark" data-act="stop-present">${ico("x")}Stop presenting</button></div></div>` : ""}
      </div>`;
  }

  /* ---------- Class ---------- */
  function scrClass() {
    const tabs = [["materials", "Materials"], ["assignments", "Assignments"], ["projects", "Student projects"]];
    const mat = { kit: ["Edu Kits", "The Life Cycle of a Butterfly", "assets/covers/try-butterfly-cover.png"], topic: ["Topic", "Heat and temperature", "assets/covers/try-temperature-topic.jpg"], file: ["File", "Lesson notes.pdf", null] }[ws.classMat || "kit"];
    let body = "";
    if (ws.classTab === "materials") body = `<div class="list-card"><div class="li">${mat[2] ? `<img src="${mat[2]}" alt="">` : `<span class="li-ico">${ico("folder")}</span>`}<span><b>${mat[1]}</b><small>${mat[0]} · added just now</small></span></div></div>`;
    if (ws.classTab === "assignments") body = ws.assignments.length ? `<div class="list-card">${ws.assignments.map((a) => `<div class="li"><span class="li-ico">${ico("flag")}</span><span><b>${esc(a)}</b><small>Due Friday · 0 of 6 turned in</small></span></div>`).join("")}</div>` : `<div class="empty sm"><b>No assignments yet</b><small>Give one and your students will find it here.</small></div>`;
    if (ws.classTab === "projects") body = `<div class="proj-grid" id="projGrid">${STUDENTS.map(([n, av, obj, ok]) => `<article class="sp${ok ? "" : " is-wait"}"><div class="sp-thumb">${ok ? objArt(obj) : ico("clock")}</div><div class="sp-meta"><img src="assets/avatars/${av}.png" alt=""><b>${n}</b><span class="st ${ok ? "st-done" : ""}">${ok ? "Turned in" : "Not yet"}</span></div></article>`).join("")}</div>`;
    return `
      <div class="cls">
        <section class="cls-hero">
          <div><p class="eyebrow">Class</p><h1>${esc(ws.className || "Grade 5 Science")}</h1><p class="lead">6 students · ${ws.assignments.length} assignment${ws.assignments.length === 1 ? "" : "s"}</p></div>
          <div class="cls-actions">
            <button class="code-chip" id="btnCode" data-act="copy-code"><small>Class code</small><b>BNNZH</b>${ico(ws.codeCopied ? "check" : "copy")}</button>
            <button class="btn btn-primary btn-sm" id="btnAssign" data-act="open-assign">${ico("plus")}New assignment</button>
          </div>
        </section>
        <div class="tabs" role="tablist">${tabs.map(([t, l]) => `<button role="tab" aria-selected="${ws.classTab === t}" class="tab${ws.classTab === t ? " is-on" : ""}" data-act="class-tab" data-tab="${t}">${l}</button>`).join("")}</div>
        ${body}
      </div>`;
  }

  /* ---------- AI-3D Generation ---------- */
  function scrAi() {
    const busy = ws.ai === "loading";
    const done = ws.ai === "done";
    const ready = ws.aiPick || ws.aiText.trim();
    const stage = ws.aiPct < 35 ? "Reading your input" : ws.aiPct < 75 ? "Shaping the 3D" : "Adding color and detail";
    return `
      <div class="ai">
        <p class="eyebrow">AI-3D Generation</p>
        <h1>Turn an image or text into 3D</h1>
        <div class="ai-grid">
          <section class="ai-in" id="aiInput">
            <div id="aiPickArea">
            <div class="seg seg-sm" role="tablist"><button role="tab" class="seg-btn${ws.aiTab === "image" ? " is-on" : ""}" data-act="ai-tab" data-tab="image">${ico("image")}Image</button><button role="tab" class="seg-btn${ws.aiTab === "text" ? " is-on" : ""}" data-act="ai-tab" data-tab="text">${ico("type")}Text</button></div>
            ${ws.aiTab === "image"
              ? `<div class="sketches" role="radiogroup" aria-label="Sample images">${Object.keys(SKETCH).map((k) => `<button role="radio" aria-checked="${ws.aiPick === k}" class="sketch${ws.aiPick === k ? " is-on" : ""}" data-act="ai-pick" data-id="${k}" ${busy ? "disabled" : ""}>${SKETCH[k]}<span>${OBJ[k].name} drawing</span></button>`).join("")}<button class="sketch is-upload" disabled>${ico("upload")}<span>Upload your own</span></button></div>`
              : `<label class="lbl" for="aiText">Describe your object</label><textarea class="input" id="aiText" data-model="aiText" rows="3" placeholder="e.g. a hot-air balloon with stripes" ${busy ? "disabled" : ""}>${esc(ws.aiText)}</textarea>`}
            </div>
            <button class="btn btn-primary btn-block" id="btnGenerate" data-act="generate" data-need="ai" ${ready && !busy ? "" : 'aria-disabled="true"'}>${ico("sparkles")}${busy ? "Generating…" : done ? "Generate again" : "Generate 3D"}</button>
            <p class="field-err" id="aiErr" hidden>${ico("alert")}Pick an image or type a description first.</p>
          </section>
          <section class="ai-out${done ? " is-done" : ""}" aria-live="polite">
            ${busy ? `<div class="gen"><div class="gen-orb"></div><b id="genStage">${stage}</b><div class="pbar sys" role="progressbar" aria-valuenow="${ws.aiPct}"><span id="genBar" style="width:${ws.aiPct}%"></span></div><small id="genPct">${ws.aiPct}%</small></div>`
              : done ? `<div class="gen-result">${objArt(ws.aiObj, "float")}<b>Your 3D ${esc(OBJ[ws.aiObj]?.name.toLowerCase() || "object")} is ready</b><button class="btn btn-primary btn-sm" id="btnAddAi" data-act="add-ai">${ico("plus")}Add to project</button></div>`
              : `<div class="empty"><span class="empty-ico">${ico("sparkles")}</span><b>Your 3D object will appear here</b><small>Pick an image or describe what you want.</small></div>`}
          </section>
        </div>
      </div>`;
  }

  /* ---------- Modals and phone overlays ---------- */
  function overlays() {
    let m = "";
    const c = ctx();
    if (ws.modal === "publish") m = modal("publishModal", "Publish your project", `
      <label class="lbl" for="pubName">Project name</label>
      <input class="input" id="pubName" data-model="projectName" value="${esc(ws.projectName)}" autocomplete="off">
      <p class="field-err" id="pubErr" hidden>${ico("alert")}Give your project a name first.</p>
      <p class="help">${ico("eye")}Anyone with the link can view it. You can keep editing after you publish.</p>`,
      `<button class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" id="btnDoPublish" data-act="publish" data-need="pub">${ico("send")}Publish</button>`);
    if (ws.modal === "share") m = modal("shareModal", "Your project is published", `
      <p class="help">Share it with ${esc(c.audience)}.</p>
      <div class="link-row"><span class="link-field">${ico("link")}edu.assemblrworld.com/view/7Hk2Qa</span><button class="btn btn-primary btn-sm" id="btnCopyLink" data-act="copy-link">${ico(ws.copied ? "check" : "copy")}${ws.copied ? "Copied" : "Copy link"}</button></div>
      <div class="share-qr">${qr(11)}<small>Or scan to open it on a phone</small></div>`, "");
    if (ws.modal === "collab") m = modal("collabModal", "Invite people to build with you", `
      <p class="help">Anyone you send this link to can join and edit this project with you.</p>
      <div class="link-row"><span class="link-field">${ico("link")}edu.assemblrworld.com/join/Qa9-2Kd</span><button class="btn btn-primary btn-sm" id="btnCopyInvite" data-act="copy-invite">${ico("copy")}Copy invite link</button></div>`, "");
    if (ws.modal === "marker") m = modal("markerModal", "Choose your Custom Marker", `
      <p class="help">Pick a printed image. Your 3D/AR appears on it when someone scans it.</p>
      <div class="marker-grid" role="radiogroup">${Object.entries(MARKER).map(([k, v]) => `<button role="radio" aria-checked="${ws.markerPick === k}" class="marker-opt${ws.markerPick === k ? " is-on" : ""}" data-act="pick-marker" data-id="${k}">${v.svg}<span>${v.name}</span></button>`).join("")}</div>
      <p class="field-err" id="markerErr" hidden>${ico("alert")}Pick an image first.</p>`,
      `<button class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" id="btnUseMarker" data-act="use-marker" data-need="marker" ${ws.markerPick ? "" : 'aria-disabled="true"'}>${ico("scan")}Use as Custom Marker</button>`);
    if (ws.modal === "class") m = modal("classModal", "Create a class", `
      <label class="lbl" for="className">Class name</label>
      <input class="input" id="className" data-model="className" value="${esc(ws.className)}" placeholder="e.g. Grade 5 Science" autocomplete="off">
      <span class="lbl">Add your first material</span>
      <div class="mat-grid" role="radiogroup">${[["kit", "book", "Edu Kits project"], ["topic", "present", "Topic slides"], ["file", "upload", "Upload a file"]].map(([k, i, l]) => `<button role="radio" aria-checked="${ws.classMat === k}" class="mat-opt${ws.classMat === k ? " is-on" : ""}" data-act="pick-mat" data-id="${k}">${ico(i)}<span>${l}</span></button>`).join("")}</div>
      <p class="field-err" id="classErr" hidden>${ico("alert")}Type a class name and pick a material.</p>`,
      `<button class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" id="btnCreateClass" data-act="create-class" data-need="class">Create class</button>`);
    if (ws.modal === "assign") m = modal("assignModal", "New assignment", `
      <label class="lbl" for="assignTitle">What should students make?</label>
      <input class="input" id="assignTitle" data-model="assignDraft" value="${esc(ws.assignDraft)}" placeholder="e.g. Build a 3D model of the water cycle" autocomplete="off">
      <div class="two"><div><span class="lbl">Due</span><div class="fake-input">${ico("clock")}Friday, 5 PM</div></div><div><span class="lbl">For</span><div class="fake-input">${ico("users")}All 6 students</div></div></div>
      <p class="field-err" id="assignErr" hidden>${ico("alert")}Type what students should make.</p>`,
      `<button class="btn btn-ghost" data-act="close-modal">Cancel</button><button class="btn btn-primary" id="btnGive" data-act="give-assign" data-need="assign">Give assignment</button>`);
    if (ws.modal === "present") m = modal("presentModal", "How do you want to present?", `
      <div class="opt-grid" role="radiogroup">
        ${[["screen", "monitor", "Show it on screen", "Present from your device on the class screen."], ["link", "link", "Share the link", `${C.cap(c.audience)} open it on their own phones.`]].map(([k, i, t, s]) => `<button role="radio" aria-checked="${ws.presentPick === k}" class="opt${ws.presentPick === k ? " is-on" : ""}" id="opt-${k}" data-act="pick-present" data-id="${k}"><span class="opt-ico">${ico(i)}</span><b>${t}</b><small>${s}</small><span class="radio"></span></button>`).join("")}
      </div>
      <p class="field-err" id="presentErr" hidden>${ico("alert")}Pick one way to present.</p>`,
      `<button class="btn btn-primary" id="btnPresentGo" data-act="present-continue" data-need="present" ${ws.presentPick ? "" : 'aria-disabled="true"'}>Continue</button>`);

    let p = "";
    const scene = (cls = "") => `<div class="ph-scene ${cls}">${(ws.objects.length ? ws.objects : [{ id: "planet", x: 50, y: 52 }]).slice(0, 2).map((o, i) => `<div class="ph-obj" style="left:${i ? 70 : 46}%">${objArt(o.id)}</div>`).join("")}</div>`;
    if (ws.phone === "ar") {
      const kit = ws.viewerSrc === "kit" ? KITS[ws.kit] || KITS[0] : null;
      p = `<div class="phone-layer" role="dialog" aria-label="View in AR">
        <div class="ar-card">
          <button class="icon-btn sm ar-close" data-act="close-phone" aria-label="Close">${ico("x")}</button>
          <div class="ar-qr">${qr(23)}<b>Scan with your phone</b><small>Point your camera at this code to open it in AR.</small></div>
          <div class="phone"><div class="phone-screen ar-room">${kit ? `<img class="ph-kit" src="${kit.cover}" alt="">` : scene()}<span class="ar-tag">${ico("phone")}AR · placed on your desk</span></div></div>
        </div></div>`;
    }
    if (ws.phone === "link") p = `<div class="phone-layer"><div class="phones" id="phones">
        ${[0, 1, 2].map((i) => `<div class="phone${i === 1 ? " is-main" : ""}"><div class="phone-screen"><div class="ph-url">${ico("lock")}edu.assemblrworld.com/view/7Hk2Qa</div><div class="ph-3d">${scene()}</div>${i === 1 ? `<button class="btn btn-primary btn-sm ph-ar" id="phoneAr" data-act="phone-ar">${ico("phone")}View in AR</button>` : `<span class="ph-name">${["Ayu", "", "Bima"][i]}</span>`}</div></div>`).join("")}
      </div></div>`;
    if (ws.phone === "scan" || ws.phone === "marker-ar") {
      const mk = MARKER[ws.marker || "book"];
      const on = ws.phone === "marker-ar";
      p = `<div class="phone-layer"><div class="scan-wrap">
        <div class="phone" id="${on ? "markerAr" : "scanPhone"}"><div class="phone-screen cam">
          <div class="cam-desk"><div class="cam-marker">${mk.svg}</div>${on ? `<div class="ar-pop">${objArt(ws.objects[0]?.id || "planet", "float")}</div>` : `<div class="scan-frame"><i></i><i></i><i></i><i></i><span class="scan-line"></span></div>`}</div>
          <div class="cam-ui">${on ? `<span class="ar-tag">${ico("scan")}Showing on your ${esc(mk.name.toLowerCase())}</span>` : `<button class="btn btn-primary btn-sm" id="btnScan" data-act="scan">${ico("scan")}Scan</button>`}</div>
        </div></div>
        <button class="icon-btn sm ar-close" data-act="close-phone" aria-label="Close">${ico("x")}</button>
      </div></div>`;
    }
    return m + p;
  }
  function modal(id, title, body, foot) {
    return `<div class="modal-layer"><div class="modal" id="${id}" role="dialog" aria-modal="true" aria-label="${esc(title)}">
      <div class="modal-head"><h3>${esc(title)}</h3><button class="icon-btn sm" data-act="close-modal" aria-label="Close">${ico("x")}</button></div>
      <div class="modal-body">${body}</div>${foot ? `<div class="modal-foot">${foot}</div>` : ""}</div></div>`;
  }

  /* ---------- Workspace events ---------- */
  const NEED = {
    label: () => (ws.labelDraft || "").trim() ? null : "labelErr",
    pub: () => (ws.projectName || "").trim() ? null : "pubErr",
    tpl: () => (ws.tplPick ? null : "tplErr"),
    filters: () => (ws.filters.subject && ws.filters.grade ? null : "filterErr"),
    ai: () => (ws.ai === "loading" ? "skip" : ws.aiPick || ws.aiText.trim() ? null : "aiErr"),
    marker: () => (ws.markerPick ? null : "markerErr"),
    class: () => ((ws.className || "").trim() && ws.classMat ? null : "classErr"),
    assign: () => ((ws.assignDraft || "").trim() ? null : "assignErr"),
    present: () => (ws.presentPick ? null : "presentErr")
  };
  function fieldError(id) {
    const e = document.getElementById(id);
    if (!e) return;
    e.hidden = false;
    e.classList.remove("shake"); void e.offsetWidth; e.classList.add("shake");
    const inp = e.parentElement.querySelector(".input");
    inp?.classList.add("is-error"); inp?.focus();
    if (T.on) coachState("error", e.textContent.trim());
  }

  $("#ws").addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b || b.disabled) return;
    if (b.dataset.need) { const err = NEED[b.dataset.need](); if (err === "skip") return; if (err) return fieldError(err); }
    const a = b.dataset.act;
    if (a === "generate") return runGenerate();
    act(a, { id: b.dataset.id, kind: b.dataset.kind, value: b.dataset.value, tab: b.dataset.tab, i: +b.dataset.i || 0 });
  });
  $("#side").addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b) return;
    if (T.on) return coachState("error", "Finish this step first, or tap Skip step.");
    act(b.dataset.act, {});
  });
  $("#ws").addEventListener("input", (e) => {
    const k = e.target.dataset.model;
    if (!k) return;
    ws[k] = e.target.value;
    e.target.classList.remove("is-error");
    const err = e.target.parentElement.querySelector(".field-err");
    if (err) err.hidden = true;
    if (k === "aiText") { ws.aiPick = null; const g = $("#btnGenerate"); if (g) g.toggleAttribute("aria-disabled", !ws.aiText.trim()); }
    if (T.on) paintCoach();
  });
  $("#ws").addEventListener("keydown", (e) => {
    if (e.key !== "Enter" || !e.target.dataset.model || e.target.tagName === "TEXTAREA") return;
    const btn = e.target.closest(".pop, .modal")?.querySelector("[data-need]");
    btn?.click();
  });

  /* Drag from the 3D library onto the canvas (tap also works). */
  $("#ws").addEventListener("pointerdown", (e) => {
    const item = e.target.closest(".lib-item");
    if (item) return startDrag(e, item);
    const sv = e.target.closest("#sceneView");
    if (sv) {
      const x0 = e.clientX, r0 = ws.rot;
      const mv = (ev) => { ws.rot = r0 + (ev.clientX - x0) * 0.6; sv.style.setProperty("--rot", ws.rot + "deg"); };
      const up = () => { removeEventListener("pointermove", mv); removeEventListener("pointerup", up); };
      addEventListener("pointermove", mv); addEventListener("pointerup", up);
    }
  });
  function startDrag(e, item) {
    e.preventDefault();
    const id = item.dataset.obj;
    const ghost = document.createElement("div");
    ghost.className = "drag-ghost";
    ghost.innerHTML = objArt(id);
    document.body.appendChild(ghost);
    const sx = e.clientX, sy = e.clientY;
    let moved = false;
    const place = (ev) => { ghost.style.transform = `translate(${ev.clientX - 48}px, ${ev.clientY - 48}px)`; };
    place(e);
    const canvas = $("#canvas");
    const mv = (ev) => {
      if (Math.hypot(ev.clientX - sx, ev.clientY - sy) > 6) { moved = true; ghost.classList.add("is-on"); }
      place(ev);
      const r = canvas.getBoundingClientRect();
      canvas.classList.toggle("is-drop", ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom);
    };
    const up = (ev) => {
      removeEventListener("pointermove", mv); removeEventListener("pointerup", up);
      ghost.remove(); canvas.classList.remove("is-drop");
      const r = canvas.getBoundingClientRect();
      const inside = ev.clientX > r.left && ev.clientX < r.right && ev.clientY > r.top && ev.clientY < r.bottom;
      if (!moved) return act("drop", { id, x: 50, y: 52 });
      if (inside) act("drop", { id, x: Math.round(((ev.clientX - r.left) / r.width) * 100), y: Math.round(((ev.clientY - r.top) / r.height) * 100) });
      else if (T.on) coachState("error", "Drop it inside the canvas to place it.");
    };
    addEventListener("pointermove", mv); addEventListener("pointerup", up);
  }

  let genTimer;
  function runGenerate() {
    act("generate", {});
    clearInterval(genTimer);
    genTimer = setInterval(() => {
      ws.aiPct = Math.min(100, ws.aiPct + (reduced ? 25 : 4));
      const bar = $("#genBar");
      if (bar) { bar.style.width = ws.aiPct + "%"; $("#genPct").textContent = ws.aiPct + "%"; $("#genStage").textContent = ws.aiPct < 35 ? "Reading your input" : ws.aiPct < 75 ? "Shaping the 3D" : "Adding color and detail"; }
      if (T.on) { const cp = $("#coachPct"); if (cp) cp.style.width = ws.aiPct + "%"; }
      if (ws.aiPct >= 100) { clearInterval(genTimer); act("generated", {}); }
    }, 90);
  }

  function act(type, data = {}) {
    ACT[type]?.(ws, data);
    renderWs();
    if (type === "score" && ws.score >= 3) return setTimeout(() => act("scored"), 250);
    if (T.on) checkExpect(type);
  }

  /* =========================================================
     Guided tour engine
     ========================================================= */
  const T = { on: false, done: false, timer: null };
  const curSlide = () => slides()[S.active];
  const curName = () => curSlide().flow[S.step];
  const curDef = () => STEPS[curName()] || { kind: "watch" };
  const val = (v) => (typeof v === "function" ? v(ws) : v);
  function stepCopy(name) { return (C.STEP[name] || (() => ({ title: name, body: "" })))(ctx()); }

  function startJob(i, k = 0) {
    S.view = "app"; S.active = i; S.tour = true; S.expanded = i;
    if (S.jobs[i].status !== "done") S.jobs[i].status = "active";
    ws = freshWs();
    const flow = slides()[i].flow;
    replaying = true;
    for (let j = 0; j < k; j++) replayStep(flow[j]);
    replaying = false;
    T.on = true;
    render();
    goStep(k);
  }
  function replayStep(name) {
    const d = STEPS[name];
    if (!d) return;
    d.enter?.(ws);
    if (d.expect) ACT[d.expect]?.(ws, d.demo || {});
    d.effect?.(ws);
  }
  function goStep(k) {
    clearTimeout(T.timer);
    S.step = k; T.done = false;
    const j = S.jobs[S.active];
    if (j.status !== "done") j.done = Math.max(j.done, k);
    curDef().enter?.(ws);
    $("#obPopWrap").hidden = true;
    renderWs();
    paintTourBar();
    paintCoach();
    save();
  }
  function checkExpect(type) {
    if (T.done) return;
    const d = curDef();
    if (d.expect === type) completeStep();
    else paintCoach();
  }
  function completeStep() {
    if (T.done) return;
    T.done = true;
    const last = S.step === curSlide().flow.length - 1;
    const j = S.jobs[S.active];
    if (j.status !== "done") j.done = Math.max(j.done, S.step + 1);
    paintTourBar();
    coachState("success");
    T.timer = setTimeout(() => (last ? finishJob() : goStep(S.step + 1)), last ? 1200 : 900);
  }
  function skipStep() {
    const d = curDef();
    if (d.expect === "generated") { clearInterval(genTimer); }
    if (d.expect) ACT[d.expect]?.(ws, d.demo || {});
    d.effect?.(ws);
    renderWs();
    completeStep();
  }
  function exitTour() {
    clearTimeout(T.timer);
    T.on = false; S.tour = false;
    ws = freshWs();
    hideTour();
    render();
    save();
  }
  function finishJob() {
    const i = S.active;
    S.jobs[i].status = "done"; S.jobs[i].done = curSlide().flow.length;
    T.on = false; S.tour = false;
    hideTour();
    save();
    celebrate(i);
  }

  function paintTourBar() {
    const s = curSlide();
    const [title] = C.job(S.role, S.mi, S.active);
    const tb = $("#tourBar");
    tb.hidden = false;
    tb.innerHTML = `
      <span class="tb-feat" style="--c:var(--accent)">${ico(FEATURE_ICON[s.feature] || "cube")}</span>
      <span class="tb-title"><small>${S.active + 1} of ${slides().length} · ${esc(featureLabel(s.feature))}</small><b>${esc(title)}</b></span>
      <ol class="segs" aria-label="Steps">
        ${s.flow.map((f, k) => {
          const st = k < S.step || (k === S.step && T.done) ? "done" : k === S.step ? "current" : "next";
          const needs = k === S.step && !T.done && ["input", "input-next", "choose", "drag"].includes(val(STEPS[f]?.kind));
          return `<li><button class="seg-step is-${st}${needs ? " is-needs" : ""}" data-jump="${k}" aria-label="Step ${k + 1}: ${esc(C.label(f))}"${st === "current" ? ' aria-current="step"' : ""}><span class="seg-tip">${k + 1}. ${esc(C.label(f))}</span></button></li>`;
        }).join("")}
      </ol>
      <span class="tb-count">${Math.min(S.step + 1, s.flow.length)}/${s.flow.length}</span>
      <button class="icon-btn sm tb-exit" id="tourExit" aria-label="Exit and save progress" title="Exit and save progress">${ico("x")}</button>`;
  }
  $("#tourBar").addEventListener("click", (e) => {
    if (e.target.closest("#tourExit")) return exitTour();
    const j = e.target.closest("[data-jump]");
    if (j) startJob(S.active, +j.dataset.jump);
  });

  function paintCoach() {
    if (!T.on) return;
    const name = curName(), d = curDef(), cp = stepCopy(name);
    const kind = val(d.kind) || "watch";
    const flow = curSlide().flow;
    const last = S.step === flow.length - 1;
    const needsInput = ["input", "input-next", "choose", "drag"].includes(kind);
    const ready = kind === "input-next" ? d.ready(ws) : true;
    const k = KIND[kind] || KIND.watch;
    const coach = $("#coach");
    coach.hidden = false;
    coach.dataset.state = kind === "loading" ? "loading" : needsInput ? (kind === "input-next" && ready ? "ready" : "needs") : kind === "watch" ? "default" : "action";
    coach.innerHTML = `
      <span class="coach-arrow"></span>
      <div class="coach-top">
        <span class="coach-step">Step ${S.step + 1} of ${flow.length}</span>
        <span class="coach-badge">${ico(k.icon)}${needsInput ? "Your turn" : kind === "loading" ? "Working on it" : kind === "watch" ? "Look" : "Your turn"}</span>
      </div>
      <h4 class="coach-title" id="coachTitle">${esc(cp.title)}</h4>
      <p class="coach-body">${esc(cp.body)}</p>
      ${kind === "loading" ? `<div class="pbar sys"><span id="coachPct" style="width:${ws.aiPct}%"></span></div>` : ""}
      ${cp.hint && kind !== "watch" && kind !== "loading" ? `<p class="coach-hint">${ico(k.icon)}<span>${esc(kind === "click" && cp.open ? cp.open : cp.hint)}</span></p>` : ""}
      <p class="coach-err" role="alert" hidden>${ico("alert")}<span></span></p>
      <p class="coach-ok" hidden>${ico("check")}<span>${last ? "Done! You finished this job." : `Done. Next: ${esc(stepCopy(flow[S.step + 1]).title)}`}</span></p>
      <div class="coach-foot">
        <span class="coach-dots" aria-hidden="true">${flow.map((_, i) => `<i class="${i < S.step ? "d" : i === S.step ? "c" : ""}"></i>`).join("")}</span>
        ${S.step > 0 ? `<button class="btn-link" data-coach="back">Back</button>` : ""}
        ${kind === "watch" || kind === "input-next"
          ? `<button class="btn btn-primary btn-sm" data-coach="next" ${ready ? "" : 'aria-disabled="true"'}>${last ? "Finish" : "Next"}${ico("right")}</button>`
          : `<button class="btn-link" data-coach="skip">Skip step</button>`}
      </div>`;
    coach.setAttribute("aria-labelledby", "coachTitle");
    positionSoon();
  }
  function coachState(state, msg) {
    const c = $("#coach");
    if (!T.on || c.hidden) return;
    if (state === "error") {
      if (T.done) return;
      const e = $(".coach-err", c);
      e.hidden = false;
      $("span", e).textContent = msg || `Try the highlighted area. ${stepCopy(curName()).hint || ""}`.trim();
      c.dataset.state = "error";
      c.classList.remove("shake"); void c.offsetWidth; c.classList.add("shake");
      const seg = $("#tourBar .seg-step.is-current");
      seg?.classList.add("is-error");
      setTimeout(() => seg?.classList.remove("is-error"), 1400);
      positionSoon();
      return;
    }
    if (state === "success") {
      c.dataset.state = "success";
      $(".coach-err", c).hidden = true;
      $(".coach-hint", c)?.setAttribute("hidden", "");
      $(".coach-ok", c).hidden = false;
      $(".coach-badge", c).innerHTML = `${ico("check")}Done`;
      $$("[data-coach]", c).forEach((b) => b.setAttribute("hidden", ""));
      $("#beacon").hidden = true;
    }
  }
  $("#coach").addEventListener("click", (e) => {
    const b = e.target.closest("[data-coach]");
    if (!b) return;
    const a = b.dataset.coach;
    if (a === "back") return startJob(S.active, S.step - 1);
    if (a === "skip") return skipStep();
    if (a === "next") {
      const d = curDef();
      if (val(d.kind) === "input-next" && !d.ready(ws)) return coachState("error", `${stepCopy(curName()).hint} first.`);
      d.effect?.(ws);
      completeStep();
    }
  });
  /* Clicks outside the highlighted area */
  $("#blockers").addEventListener("pointerdown", (e) => { e.preventDefault(); coachState("error"); });

  /* Position spotlight, blockers, beacon, and coach around the target. */
  let posRaf;
  function positionSoon() { cancelAnimationFrame(posRaf); posRaf = requestAnimationFrame(position); setTimeout(position, 260); }
  function targetRect(sel = val(curDef().target)) {
    if (!sel) return null;
    const rects = sel.split(",").map((s) => document.querySelector(s.trim())).filter(Boolean).map((el) => el.getBoundingClientRect()).filter((r) => r.width > 0);
    if (!rects.length) return null;
    const l = Math.min(...rects.map((r) => r.left)), t = Math.min(...rects.map((r) => r.top));
    const rr = Math.max(...rects.map((r) => r.right)), b = Math.max(...rects.map((r) => r.bottom));
    return { left: l, top: t, right: rr, bottom: b, width: rr - l, height: b - t };
  }
  function position() {
    if (!T.on) return;
    const r0 = targetRect();
    const spot = $("#spot"), coach = $("#coach"), beacon = $("#beacon");
    const vw = innerWidth, vh = innerHeight;
    if (!r0) { spot.hidden = true; beacon.hidden = true; setBlockers(null); coach.style.left = vw / 2 - 170 + "px"; coach.style.top = vh / 2 - 100 + "px"; coach.dataset.place = "none"; return; }
    const pad = 8;
    const r = { left: r0.left - pad, top: r0.top - pad, width: r0.width + pad * 2, height: r0.height + pad * 2 };
    r.right = r.left + r.width; r.bottom = r.top + r.height;
    spot.hidden = false;
    Object.assign(spot.style, { left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px" });
    setBlockers(r);
    const kind = val(curDef().kind);
    beacon.hidden = T.done || kind === "watch" || kind === "loading" || r0.width > 360;
    Object.assign(beacon.style, { left: r0.right - 6 + "px", top: r0.top - 6 + "px" });

    if (vw < 640) { coach.dataset.place = "sheet"; coach.style.left = ""; coach.style.top = ""; return; }
    const a0 = targetRect(val(curDef().anchor));
    if (a0) Object.assign(r, { left: a0.left - pad, top: a0.top - pad, width: a0.width + pad * 2, height: a0.height + pad * 2, right: a0.right + pad, bottom: a0.bottom + pad });
    const cw = coach.offsetWidth || 340, ch = coach.offsetHeight || 200, gap = 16;
    const space = { bottom: vh - r.bottom, top: r.top, right: vw - r.right, left: r.left };
    const pref = ["bottom", "right", "top", "left"].find((p) => (p === "bottom" || p === "top" ? space[p] > ch + gap + 8 : space[p] > cw + gap + 8)) || "inside";
    let x, y;
    if (pref === "bottom") { x = r.left + r.width / 2 - cw / 2; y = r.bottom + gap; }
    else if (pref === "top") { x = r.left + r.width / 2 - cw / 2; y = r.top - ch - gap; }
    else if (pref === "right") { x = r.right + gap; y = r.top + r.height / 2 - ch / 2; }
    else if (pref === "left") { x = r.left - cw - gap; y = r.top + r.height / 2 - ch / 2; }
    else { x = r.right - cw - 24; y = r.top + 24; }
    x = Math.max(12, Math.min(vw - cw - 12, x));
    y = Math.max(76, Math.min(vh - ch - 12, y));
    coach.dataset.place = pref;
    coach.style.left = x + "px"; coach.style.top = y + "px";
    const arrow = $(".coach-arrow", coach);
    if (arrow) {
      if (pref === "bottom" || pref === "top") arrow.style.left = Math.max(18, Math.min(cw - 18, r.left + r.width / 2 - x)) + "px", arrow.style.top = "";
      else arrow.style.top = Math.max(18, Math.min(ch - 18, r.top + r.height / 2 - y)) + "px", arrow.style.left = "";
    }
  }
  function setBlockers(r) {
    const b = $$("#blockers > i");
    if (!r) { b.forEach((x, i) => Object.assign(x.style, i === 0 ? { left: 0, top: 0, width: "100vw", height: "100vh" } : { width: 0, height: 0 })); return; }
    const vw = innerWidth, vh = innerHeight;
    const boxes = [
      { left: 0, top: 0, width: vw, height: Math.max(0, r.top) },
      { left: 0, top: r.bottom, width: vw, height: Math.max(0, vh - r.bottom) },
      { left: 0, top: r.top, width: Math.max(0, r.left), height: r.height },
      { left: r.right, top: r.top, width: Math.max(0, vw - r.right), height: r.height }
    ];
    b.forEach((x, i) => Object.assign(x.style, Object.fromEntries(Object.entries(boxes[i]).map(([k, v]) => [k, v + "px"]))));
  }
  function hideTour() {
    ["#tourBar", "#coach", "#spot", "#beacon"].forEach((s) => ($(s).hidden = true));
    $$("#blockers > i").forEach((x) => Object.assign(x.style, { width: 0, height: 0 }));
    document.body.classList.remove("is-touring");
  }
  addEventListener("resize", positionSoon);
  document.addEventListener("scroll", () => T.on && position(), true);
  setInterval(() => T.on && position(), 600);

  /* ---------- Celebration ---------- */
  function celebrate(i) {
    const s = slides()[i];
    const [title, fn] = C.DONE[s.feature] || ["Nice work", () => s.jtbd];
    const next = S.jobs.findIndex((j, k) => k !== i && j.status !== "done");
    const doneN = S.jobs.filter((j) => j.status === "done").length;
    const layer = $("#celebrate");
    layer.hidden = false;
    layer.innerHTML = `
      <div class="cele" role="dialog" aria-modal="true" aria-labelledby="celeTitle">
        <div class="confetti" aria-hidden="true">${Array.from({ length: 18 }, (_, k) => `<i style="--i:${k}"></i>`).join("")}</div>
        <div class="cele-jump" aria-hidden="true"><img class="cele-blr" src="assets/blr/wave.png" alt=""><span class="cele-shadow"></span></div>
        <p class="eyebrow">Mission ${i + 1} complete · ${doneN} of ${slides().length}</p>
        <p class="ms-gain">${doneN === slides().length ? `${ico("flag")}Congratulations! You've explored Assemblr EDU` : `${ico(FEATURE_ICON[s.feature] || "cube")}You tried ${esc(featureLabel(s.feature))}`}</p>
        <h3 id="celeTitle">${esc(title)}</h3>
        <p class="cele-body">${esc(fn(ctx()))}</p>
        <div class="pbar"><span style="width:${(doneN / slides().length) * 100}%"></span></div>
        <div class="cele-actions">
          ${next >= 0 ? `<button class="btn btn-primary" data-cele="next" data-i="${next}"><span class="cele-next"><small>Start Mission ${next + 1} · ${esc(featureLabel(slides()[next].feature))}</small><b>${esc(C.job(S.role, S.mi, next)[0])}</b></span>${ico("right")}</button>` : `<button class="btn btn-primary" data-cele="home">${ico("home")}Go to my home</button>`}
          ${next >= 0 ? `<button class="btn btn-ghost" data-cele="home">Back to home</button>` : ""}
        </div>
      </div>`;
    $("[data-cele]", layer).focus();
  }
  $("#celebrate").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cele]");
    if (!b) return;
    $("#celebrate").hidden = true;
    if (b.dataset.cele === "next") startJob(+b.dataset.i, 0);
    else { ws = freshWs(); ws.published = true; S.expanded = S.jobs.findIndex((j) => j.status !== "done"); render(); }
  });

  /* Checklist interactions (home card and launcher pop-over) */
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-ob-toggle], [data-ob-start], [data-ob-skip]");
    if (!t || !t.closest(".ob")) return;
    if (t.dataset.obToggle != null) {
      const i = +t.dataset.obToggle;
      S.expanded = S.expanded === i ? -1 : i;
      save();
      $$(".ob").forEach((ob) => {
        const wrap = ob.parentElement;
        const compact = ob.classList.contains("is-compact");
        ob.outerHTML = checklist(compact);
        void wrap;
      });
      return;
    }
    if (t.dataset.obSkip != null) { S.jobs[+t.dataset.obSkip].status = "skipped"; save(); return render(); }
    const i = +t.dataset.obStart;
    const j = S.jobs[i];
    $("#obPopWrap").hidden = true;
    startJob(i, j.status === "active" ? Math.min(j.done, slides()[i].flow.length - 1) : 0);
  });

  /* =========================================================
     Flow map
     ========================================================= */
  function renderFlow() {
    const r = roleData(S.flowRole);
    const total = D.reduce((a, x) => a + x.motivations.length, 0);
    $("#flow").innerHTML = `
      <div class="doc">
        <header class="doc-head">
          <p class="eyebrow">Flow map</p>
          <h1>Role → use motivation → welcoming message → onboarding</h1>
          <p class="lead">${total} use motivations, ${total * 3 - 0} onboarding jobs, 10 feature flows. Every job below is playable.</p>
          <div class="legend">${["click", "drag", "input", "choose", "watch"].map((k) => `<span>${ico(KIND[k].icon)}${KIND[k].label}</span>`).join("")}</div>
          <div class="role-tabs" role="tablist">${D.map((x) => `<button role="tab" aria-selected="${x.id === r.id}" class="role-chip${x.id === r.id ? " is-on" : ""}" data-flow-role="${x.id}" style="--c:${C.ROLES[x.id].accent}"><span class="dot"></span>${esc(C.ROLES[x.id].label)}</button>`).join("")}</div>
        </header>
        ${r.motivations.map((m, mi) => `
          <section class="fm-mot">
            <h2><span class="pn-num">${mi + 1}</span>${esc(m.motivation)}${m.followUp ? `<small>Asks: ${esc(m.followUp)}</small>` : ""}${m.draft ? `<small class="tag-draft">Draft welcome copy</small>` : ""}</h2>
            <div class="fm-grid">
              ${m.slides.map((s, si) => {
                const [jt, js] = C.job(r.id, mi, si);
                return `<article class="fm-card">
                  <div class="fm-photo"><img src="${C.art(r.id, mi, s.feature)}" alt="" loading="lazy"><span class="feat-chip">${ico(FEATURE_ICON[s.feature] || "cube")}${esc(featureLabel(s.feature))}</span></div>
                  <div class="fm-body">
                    <p class="fm-lbl">Welcoming message ${si + 1}</p>
                    <p class="fm-wm"><b>${esc(s.title)}</b> \u201c${esc(s.message)}\u201d</p>
                    ${s.check ? `<p class="fm-warn">${ico("alert")}${esc(s.check)} Onboarding follows the Visual Coding flow.</p>` : ""}
                    <p class="fm-lbl">Onboarding job</p>
                    <h3>${esc(jt)}</h3><p class="fm-sub">${esc(js)}</p>
                    <p class="fm-lbl">Flow · ${s.flow.length} steps</p>
                    <ol class="fm-steps">${s.flow.map((f) => `<li>${ico(KIND[staticKind(f)].icon)}<span><b>${esc(f)}</b><small>${esc(stepCopyFor(r.id, mi, f).title)}</small></span></li>`).join("")}</ol>
                    <p class="fm-lbl">Job to be done</p>
                    <p class="fm-jtbd">${esc(s.jtbd)}</p>
                    <button class="btn btn-primary btn-sm" data-play="${r.id}|${mi}|${si}">${ico("play")}Play this flow</button>
                  </div>
                </article>`;
              }).join("")}
            </div>
          </section>`).join("")}
      </div>`;
  }
  const stepCopyFor = (role, mi, f) => (C.STEP[f] || (() => ({ title: f })))(C.ctx(role, mi));
  $("#flow").addEventListener("click", (e) => {
    const t = e.target.closest("[data-flow-role]");
    if (t) { S.flowRole = t.dataset.flowRole; save(); renderFlow(); scrollTo(0, 0); return; }
    const p = e.target.closest("[data-play]");
    if (p) {
      const [role, mi, si] = p.dataset.play.split("|");
      S.role = role; S.mi = +mi; S.pick = +si; resetJobs();
      startJob(+si, 0);
    }
  });

  /* =========================================================
     Mood board: every tooltip and progress state
     ========================================================= */
  function renderBoard() {
    const card = (name, note, html, cls = "") => `<figure class="mb-card ${cls}"><div class="mb-stage">${html}</div><figcaption><b>${name}</b><span>${note}</span></figcaption></figure>`;
    const coachHtml = (o) => `<div class="coach is-static" data-state="${o.state}" data-place="${o.place || "bottom"}">
        <span class="coach-arrow" style="${o.place === "left" || o.place === "right" ? "top:50%" : "left:50%"}"></span>
        <div class="coach-top"><span class="coach-step">Step ${o.step || 3} of 7</span><span class="coach-badge">${ico(o.badgeIco || "hand")}${o.badge || "Your turn"}</span></div>
        <h4 class="coach-title">${o.title}</h4><p class="coach-body">${o.body}</p>
        ${o.extra || ""}
        ${o.hint ? `<p class="coach-hint">${ico(o.hintIco || "hand")}<span>${o.hint}</span></p>` : ""}
        ${o.err ? `<p class="coach-err">${ico("alert")}<span>${o.err}</span></p>` : ""}
        ${o.ok ? `<p class="coach-ok">${ico("check")}<span>${o.ok}</span></p>` : ""}
        ${o.noFoot ? "" : `<div class="coach-foot"><span class="coach-dots">${Array.from({ length: 7 }, (_, i) => `<i class="${i < (o.step || 3) - 1 ? "d" : i === (o.step || 3) - 1 ? "c" : ""}"></i>`).join("")}</span><button class="btn-link">Back</button>${o.primary ? `<button class="btn btn-primary btn-sm ${o.primaryCls || ""}" ${o.primaryDisabled ? 'aria-disabled="true"' : ""}>${o.primary}${ico("right")}</button>` : `<button class="btn-link">Skip step</button>`}</div>`}
      </div>`;
    const segs = (cur, n = 7, mod = "") => `<ol class="segs static">${Array.from({ length: n }, (_, k) => `<li><span class="seg-step is-${k < cur ? "done" : k === cur ? "current" : "next"}${k === cur && mod ? " is-" + mod : ""}"></span></li>`).join("")}</ol>`;
    const tourBar = (cur, mod, label) => `<div class="tour-bar static"><span class="tb-feat">${ico("cube")}</span><span class="tb-title"><small>1 of 3 · Editor</small><b>Bring your class project to life in 3D</b></span>${segs(cur, 7, mod)}<span class="tb-count">${label}</span><span class="icon-btn sm">${ico("x")}</span></div>`;
    const item = (state, extra = "", open = false) => {
      const marks = { done: ico("check"), skipped: ico("skip"), locked: ico("lock") };
      const sts = { todo: `<span class="st">${ico("clock")}4 min</span>`, hover: `<span class="st">${ico("clock")}4 min</span>`, active: `<span class="st-ico is-wait" role="img" aria-label="In progress" title="In progress · 3/7">${ico("clock")}</span>`, needs: `<span class="st-ico is-wait" role="img" aria-label="Waiting for you" title="Waiting for you">${ico("clock")}</span>`, done: `<span class="st-ico is-done" role="img" aria-label="Completed" title="Completed">${ico("check")}</span>`, skipped: `<span class="st st-skip">Skipped</span>`, locked: `<span class="st">${ico("lock")}After step 1</span>`, selected: `<span class="st">${ico("clock")}4 min</span>` };
      const reward = `<span class="ms-tag${state === "done" ? " is-done" : ""}">${ico("cube")}Editor</span>`;
      return `<ol class="ob-list ms static"><li class="ob-item${state === "hover" ? " is-hover" : ""}" data-state="${state === "hover" || state === "selected" ? "todo" : state}"${open ? ' data-open="true"' : ""}${state === "selected" ? ' data-next="true"' : ""}>
        <div class="ob-row"><span class="ob-mark" style="--p:${state === "active" || state === "needs" ? 43 : 0}">${marks[state] || "<span>1</span>"}</span><span class="ob-text"><small class="ms-eyebrow">Mission 1</small><b>Bring your class project to life in 3D</b></span><span class="ob-side">${reward}<span class="ob-st">${open ? "" : sts[state]}</span>${ico("chevron", "ob-chev")}</span></div>
        ${open ? `<div class="ob-detail"><div class="ob-detail-in"><p class="ob-sub">Build it your way in the Editor, then hold it in your hand with AR.</p><div class="ms-pips">${"<i></i>".repeat(7)}<span>7 steps</span></div><div class="ob-actions"><button class="btn btn-primary btn-sm">${ico("play")}Start</button><span class="ob-time">${ico("clock")}About 4 min</span><button class="btn-link">Skip for now</button></div></div></div>` : ""}
      </li></ol>`;
    };
    const ring = (d, n = 3, cls = "") => `<button class="launcher static ${cls}"><span class="ring" style="--p:${(d / n) * 100}"><span>${d}/${n}</span></span><span class="launch-text"><small>Missions</small><b>Your first steps</b></span></button>`;
    const pb = (p, label, cls = "") => `<div class="mb-pb"><div class="pb-row"><b>${label}</b><span>${p}%</span></div><div class="pbar ${cls}"><span style="width:${p}%"></span></div></div>`;
    const jb = (ps, label, hl = -1, all = false) => {
      const names = ["Bring your class project to life in 3D", "Make a game your friends will want to play", "Build it together with your classmates"];
      const rows = ps.map((p, i) => {
        const st = p === 100 ? "done" : p ? "active" : "todo";
        return `<li class="ob-item${i === hl ? " is-hover" : ""}" data-state="${st}" style="--lp:${p}%"><div class="ob-row"><span class="ob-mark" style="--p:${p}">${st === "done" ? ico("check") : `<span>${i + 1}</span>`}</span><span class="ob-text"><small class="ms-eyebrow">Mission ${i + 1}</small><b>${names[i]}</b></span></div></li>`;
      }).join("");
      return `<div class="ob ms static${all ? " is-all" : ""}"><header class="ob-head"><h2>Your first steps</h2><p class="ob-meta">${label}</p></header><ol class="ob-list">${rows}</ol></div>`;
    };
    const beacon = (cls) => `<div class="mb-beacon"><button class="btn btn-primary btn-sm ${cls === "active" ? "is-pressed" : ""}">${ico("send")}Publish</button><span class="beacon static ${cls ? "is-" + cls : ""}"></span></div>`;

    $("#board").innerHTML = `
      <div class="doc">
        <header class="doc-head">
          <p class="eyebrow">Mood board</p>
          <h1>Onboarding tooltips and progress, in every state</h1>
          <p class="lead">Live components from the demo, frozen in each state. Accent color follows the role picked in the demo control (${esc(C.ROLES[S.role].label)} now).</p>
          <nav class="mb-nav">${[["mb-progress", "Progress"], ["mb-check", "Checklist"], ["mb-coach", "Coach marks"], ["mb-place", "Placement"], ["mb-hot", "Hotspots and spotlight"], ["mb-voice", "Mascot, toast, celebration"], ["mb-btn", "Buttons"]].map(([id, l]) => `<a href="#${id}">${l}</a>`).join("")}</nav>
        </header>

        <section class="mb-sec" id="mb-progress"><h2>Progress</h2><p class="lead">Three levels: the whole journey (checklist), one job (step bar), and a system task (generating).</p>
          <div class="mb-grid">
            ${card("Journey · not started", "The progress line runs through each job's number. Time left makes it feel doable.", jb([0, 0, 0], "0 of 3 done · 9 min left"))}
            ${card("Journey · in progress", "Each stretch of line fills as that job's steps get done. Green when finished, role color while in progress.", jb([100, 43, 0], "1 of 3 done · 5 min left"))}
            ${card("Journey · hover a job", "Row tints and the title takes the role color. The line stays put, so progress reads the same.", jb([100, 43, 0], "1 of 3 done · 5 min left", 1))}
            ${card("Journey · complete", "The whole line is green and every number is a check.", jb([100, 100, 100], "All done", -1, true))}
            ${card("System progress · working", "Used when we make the user wait (AI-3D Generation). Always shows the current stage.", `<div class="gen sm"><div class="gen-orb"></div><b>Shaping the 3D</b><div class="pbar sys"><span style="width:56%"></span></div><small>56%</small></div>`)}
          </div>
          <div class="mb-grid one">
            ${card("Step bar · first step", "Current segment pulses softly. Hover a segment to see its step name.", tourBar(0, "", "1/7"))}
            ${card("Step bar · mid-way", "Done segments fill with the role accent; upcoming ones stay neutral.", tourBar(3, "", "4/7"))}
            ${card("Step bar · needs input", "Current segment gets a ring while we wait for the user to type, drag, or choose.", tourBar(3, "needs", "4/7"))}
            ${card("Step bar · error", "Turns red for a moment when the user taps outside the highlighted area.", tourBar(3, "error", "4/7"))}
            ${card("Step bar · complete", "All segments filled just before the celebration.", tourBar(7, "", "7/7"))}
          </div>
          <div class="mb-grid">
            ${card("Launcher · 0 of 3", "Minimized checklist, shown outside Home.", ring(0))}
            ${card("Launcher · hover", "Lifts 1px with a soft shadow.", ring(1, 3, "is-hover"))}
            ${card("Launcher · 2 of 3", "Ring fills per finished job.", ring(2))}
            ${card("Launcher · done", "Ring turns green.", ring(3, 3, "is-all"))}
          </div>
        </section>

        <section class="mb-sec" id="mb-check"><h2>Checklist items</h2><p class="lead">Each item is a job in the user's words. The feature appears as a chip, not the headline.</p>
          <div class="mb-grid two">
            ${card("Default", "Number, outcome-first title, time estimate. Nothing else until it's opened.", item("todo"))}
            ${card("Hover", "Role-tinted row, title takes the role color, number grows, chevron nudges down.", item("hover"))}
            ${card("Selected (expanded)", "White card with a role ring. Shows why it matters, time, and one button to start.", item("selected", "", true))}
            ${card("In progress", "Progress ring around the number, step count on the right.", item("active"))}
            ${card("Needs input", "We paused on a step that needs the user. Amber, never red.", item("needs"))}
            ${card("Completed", "Green check, muted title. Can be done again.", item("done"))}
            ${card("Skipped", "Stays on the list so it's easy to come back to.", item("skipped"))}
            ${card("Locked", "For jobs that depend on another. Dashed, with the reason.", item("locked"))}
          </div>
        </section>

        <section class="mb-sec" id="mb-coach"><h2>Coach marks</h2><p class="lead">The tooltip that walks users through each step. The badge tells them what kind of action we need.</p>
          <div class="mb-grid three">
            ${card("Default · look", "Nothing to do but read. Next is the only primary action.", coachHtml({ state: "default", badge: "Look", badgeIco: "eye", title: "Dimas just joined", body: "You can see each other's cursors and changes as they happen.", primary: "Next" }))}
            ${card("Hover on Next", "Button lifts 1px and deepens.", coachHtml({ state: "default", badge: "Look", badgeIco: "eye", title: "See every project in one place", body: "Work shows up here as students turn it in.", primary: "Next", primaryCls: "is-hover" }))}
            ${card("Action needed · tap", "The hint names the exact control. A beacon marks the target.", coachHtml({ state: "action", title: "Publish your assignment", body: "Publishing saves a version others can open.", hint: "Tap Publish" }))}
            ${card("Needs input · drag", "Amber badge while we wait. Tap also works as a fallback.", coachHtml({ state: "needs", badgeIco: "move", title: "Place it in your scene", body: "Drag the planet onto the canvas. You can move, turn, and resize it anytime.", hint: "Drag the planet onto the canvas, or tap it", hintIco: "move" }))}
            ${card("Needs input · not ready", "Next stays visible but explains itself when pressed.", coachHtml({ state: "needs", badgeIco: "keyboard", title: "Start with a picture or a few words", body: "Pick an image, or describe the object you want.", hint: "Pick an image or type a description", hintIco: "keyboard", primary: "Next", primaryDisabled: true }))}
            ${card("Needs input · ready", "Once the input is valid, the badge turns to the accent and Next unlocks.", coachHtml({ state: "ready", badgeIco: "keyboard", title: "Start with a picture or a few words", body: "Pick an image, or describe the object you want.", hint: "Hot-air balloon drawing picked", hintIco: "check", primary: "Next" }))}
            ${card("Working", "System progress inside the tooltip while we generate.", coachHtml({ state: "loading", badge: "Working on it", badgeIco: "clock", title: "Turn it into 3D", body: "Tap Generate 3D. It can take a moment.", extra: `<div class="pbar sys"><span style="width:62%"></span></div>`, noFoot: true }))}
            ${card("Error", "Tapped outside the highlight, or left a field empty. Says what to do, no blame.", coachHtml({ state: "error", title: "Add a label that explains it", body: "A short title helps your teacher understand what they're looking at.", err: "Type a label so others know what this is." }))}
            ${card("Success", "Green for 0.9s, then moves on by itself. Names the next step.", coachHtml({ state: "success", badge: "Done", badgeIco: "check", title: "Share it with your teacher", body: "Copy the link and send it however you like.", ok: "Done. Next: See it in 3D, then in AR", noFoot: true }))}
          </div>
        </section>

        <section class="mb-sec" id="mb-place"><h2>Placement</h2><p class="lead">The coach mark picks the side with the most room: bottom, right, top, then left. On phones it becomes a bottom sheet.</p>
          <div class="mb-grid four">
            ${["bottom", "top", "right", "left"].map((p) => card(`Placed ${p}`, `Arrow points ${{ bottom: "up", top: "down", right: "left", left: "right" }[p]} to the target.`, `<div class="mb-place is-${p}"><span class="mb-target">Target</span>${coachHtml({ state: "action", place: p, title: "Open the 3D library", body: "Choose a ready-to-use object.", hint: "Tap 3D library", noFoot: true })}</div>`)).join("")}
          </div>
        </section>

        <section class="mb-sec" id="mb-hot"><h2>Hotspots and spotlight</h2><p class="lead">The spotlight dims everything except the target. The beacon draws the eye to small controls.</p>
          <div class="mb-grid four">
            ${card("Beacon · idle", "Pulses every 1.6s. Hidden for large targets.", beacon(""))}
            ${card("Beacon · hover", "Pulse pauses, ring grows.", beacon("hover"))}
            ${card("Beacon · pressed", "Target pressed, beacon pops.", beacon("active"))}
            ${card("Beacon · done", "Turns into a check before the next step.", beacon("done"))}
          </div>
          <div class="mb-grid one">
            ${card("Spotlight", "Rounded cut-out with an 8px margin. Clicks outside it show the error state.", `<div class="mb-spot"><div class="mb-fake"><span></span><span></span><span class="is-t">${ico("cube")}3D library</span><span></span></div><div class="mb-spot-hole"></div>${coachHtml({ state: "action", place: "right", title: "Find a 3D object", body: "Open the 3D library to choose one.", hint: "Tap 3D library", noFoot: true })}</div>`)}
          </div>
        </section>

        <section class="mb-sec" id="mb-voice"><h2>Mascot, toast, and celebration</h2><p class="lead">blr orients, explains, or encourages. Every bubble has a job.</p>
          <div class="mb-grid three">
            ${card("blr · orient", "Used on the checklist header.", `<div class="blr-tip"><img src="assets/blr/hello.png" alt=""><p class="bubble">These are picked for what you told me. Start with any one.</p></div>`)}
            ${card("blr · explain", "When a step is new or unusual.", `<div class="blr-tip"><img src="assets/blr/think.png" alt=""><p class="bubble">A Custom Marker is a printed image. Scan it, and your 3D appears on top.</p></div>`)}
            ${card("blr · encourage", "After a job is done.", `<div class="blr-tip"><img src="assets/blr/cheer.svg" alt=""><p class="bubble">That's your first project, live. Want to make it a game next?</p></div>`)}
            ${card("Toast", "Quiet confirmation for small actions like copying.", `<div class="toast static is-on">${ico("check")}<span>Link copied</span></div>`)}
            ${card("Celebration", "After each job. States what the user can do now, then offers the next job.", `<div class="cele static"><div class="cele-jump" aria-hidden="true"><img class="cele-blr" src="assets/blr/wave.png" alt=""><span class="cele-shadow"></span></div><p class="eyebrow">Mission 1 complete · 1 of 3</p><h3>Your project is ready to explore</h3><p class="cele-body">You built a 3D scene, published it, and viewed it in 3D and AR. Your teacher can open it the same way.</p><div class="pbar"><span style="width:33%"></span></div><div class="cele-actions"><button class="btn btn-primary"><span class="cele-next"><small>Start Mission 2 · Visual Coding</small><b>Make a game your friends will want to play</b></span>${ico("right")}</button></div></div>`)}
            ${card("All done", "Checklist after the last job: green bar, header reads All done.", jb([100, 100, 100], "All done", -1, true))}
          </div>
        </section>

        <section class="mb-sec" id="mb-btn"><h2>Buttons in tooltips</h2>
          <div class="mb-row">
            <div><button class="btn btn-primary">Next${ico("right")}</button><small>Default</small></div>
            <div><button class="btn btn-primary is-hover">Next${ico("right")}</button><small>Hover</small></div>
            <div><button class="btn btn-primary is-pressed">Next${ico("right")}</button><small>Pressed</small></div>
            <div><button class="btn btn-primary is-focus">Next${ico("right")}</button><small>Focus</small></div>
            <div><button class="btn btn-primary" aria-disabled="true">Next${ico("right")}</button><small>Waiting for input</small></div>
            <div><button class="btn btn-ghost">Back to home</button><small>Secondary</small></div>
            <div><button class="btn-link">Skip step</button><small>Text link</small></div>
          </div>
        </section>
      </div>`;
  }

  /* =========================================================
     Top-level render
     ========================================================= */
  function render() {
    document.body.dataset.view = S.view;
    document.body.dataset.role = S.role;
    paintDemoBtn();
    $("#landing").hidden = S.view !== "landing";
    $("#welcome").hidden = S.view !== "welcome";
    $("#app").hidden = S.view !== "app";
    $("#flow").hidden = S.view !== "flow";
    $("#board").hidden = S.view !== "board";
    $("#celebrate").hidden = true;
    if (S.view !== "app" || !T.on) hideTour();
    if (S.view === "app") { renderWs(); if (T.on) { document.body.classList.add("is-touring"); paintTourBar(); paintCoach(); } }
    if (S.view === "flow") renderFlow();
    if (S.view === "board") renderBoard();
    if (S.view === "welcome") paintWelcome();
    if (S.view !== "app") $("#launcher").hidden = true;
  }

  window.__ob = { S, get ws() { return ws; }, startJob, render, celebrate };

  if (S.view === "app" && S.tour && S.active != null) startJob(S.active, S.step);
  else { if (S.view === "welcome") wIndex = 0; render(); }
})();

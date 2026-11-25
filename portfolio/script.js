(() => {
  const D = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ICONS = {
    brain: '<svg viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/></svg>',
    server: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',
    db: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',
    tool: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/></svg>',
    grad: '<svg viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>',
    award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="M8.2 13.6L7 22l5-3 5 3-1.2-8.4"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 2l3 6.6 7 .8-5.2 4.8 1.4 7L12 17.8 5.8 21.2l1.4-7L2 9.4l7-.8z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>',
  };

  const VISUALS = {
    ai: `<div class="v v-ai"><div class="doc"><i></i><i></i><i></i><i></i><span class="scan"></span></div><div class="flow"><b></b><b></b><b></b></div><div class="bubble">Answer ready</div></div>`,
    chat: `<div class="v v-chat"><div class="q">Role: Python Developer</div><div class="flow"><b></b><b></b><b></b></div><div class="bubble">Q1. Explain decorators in Python?</div></div>`,
    vision: `<div class="v v-vision"><div class="hand"><span class="pt p1"></span><span class="pt p2"></span><span class="pt p3"></span><span class="pt p4"></span><span class="pt p5"></span></div><svg class="cursor" viewBox="0 0 24 24"><path d="M4 3l7 18 2.5-7.5L21 11z"/></svg></div>`,
    web: `<div class="v v-web"><div class="win"><div class="bar"><i></i><i></i><i></i></div><div class="body"><div class="hdr"></div><div class="row"><span></span><span></span><span></span></div><div class="api">POST /register &nbsp;200 OK</div></div></div></div>`,
    shop: `<div class="v v-shop"><div class="card-s"></div><div class="card-s"></div><div class="card-s"></div><div class="cart">Cart <b>3</b></div></div>`,
    notes: `<div class="v v-notes"><div class="note n1"><i></i><i></i></div><div class="note n2"><i></i><i></i></div><div class="note n3"><i></i><i></i></div></div>`,
  };

  /* ---------- RENDER CONTENT FROM data.js ---------- */
  $$("[data-bind]").forEach((el) => (el.textContent = D[el.dataset.bind] ?? ""));
  $("#year").textContent = new Date().getFullYear();
  $("#resumeBtn").href = D.resume;
  $("#emailBtn").href = `mailto:${D.contact.email}`;

  $("#aboutText").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");

  $("#timeline").insertAdjacentHTML(
    "beforeend",
    D.experience
      .map(
        (e) => `
      <article class="t-item card reveal">
        <span class="t-node"></span>
        <div class="t-head">
          <div>
            <h3 class="t-role">${esc(e.role)}</h3>
            <div class="t-company">${esc(e.company)}${e.mode ? `<span class="mode">${esc(e.mode)}</span>` : ""}</div>
          </div>
          <div class="t-period">${esc(e.period)}${e.current ? '<span class="now">● now</span>' : ""}</div>
        </div>
        <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <div class="tags">${e.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </article>`
      )
      .join("")
  );

  $("#skillsGrid").innerHTML = D.skills
    .map(
      (g) => `
    <div class="skill-card card reveal">
      <div class="skill-head"><span class="skill-icon">${ICONS[g.icon] || ICONS.code}</span><h3>${esc(g.group)}</h3></div>
      <div class="skill-list">${g.items.map((i) => `<span class="skill">${esc(i)}</span>`).join("")}</div>
    </div>`
    )
    .join("");

  $("#projectsGrid").innerHTML = D.projects
    .map((p) => {
      const links = [
        p.demo && `<a class="btn-live" href="${esc(p.demo)}" target="_blank" rel="noopener">View Live ↗</a>`,
        p.github && `<a href="${esc(p.github)}" target="_blank" rel="noopener">View Code</a>`,
      ].filter(Boolean).join("");
      return `
    <article class="project card reveal">
      <div class="project-img">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" />` : VISUALS[p.visual] || VISUALS.web}</div>
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${links ? `<div class="project-links">${links}</div>` : ""}
      </div>
      <div class="glare"></div>
    </article>`;
    })
    .join("");

  $("#eduList").innerHTML = D.education
    .filter((e) => e.school)
    .map(
      (e) => `
    <div class="edu card reveal">
      <span class="edu-icon">${ICONS.grad}</span>
      <div>
        <h3>${esc(e.degree)}</h3>
        <div class="school">${esc(e.school)}</div>
        <div class="meta">${esc(e.period)}</div>
      </div>
      ${e.score ? `<div class="score"><b class="grad">${esc(e.score)}</b><span>${esc(e.scoreLabel || "")}</span></div>` : ""}
    </div>`
    )
    .join("");

  $("#certGrid").innerHTML = [
    ...(D.certifications || []).map((c) => ({ icon: "award", title: c.title, sub: c.issuer, kind: "Certification" })),
    ...(D.achievements || []).map((a) => ({ icon: "star", title: a.title, sub: a.text, kind: "Achievement" })),
  ]
    .map(
      (c) => `
    <div class="cert card reveal">
      <span class="cert-icon">${ICONS[c.icon]}</span>
      <div>
        <span class="cert-kind">${esc(c.kind)}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.sub)}</p>
      </div>
    </div>`
    )
    .join("");

  $("#socials").innerHTML = [
    ["mail", `mailto:${D.contact.email}`, D.contact.email],
    ["linkedin", D.contact.linkedin, "LinkedIn"],
    ["github", D.contact.github, "GitHub"],
  ]
    .filter(([, href]) => href)
    .map(([icon, href, label]) => `<a href="${esc(href)}" ${icon === "mail" ? "" : 'target="_blank" rel="noopener"'}>${ICONS[icon]} ${esc(label)}</a>`)
    .join("");

  /* ---------- THEME ---------- */
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) root.dataset.theme = "light";
  } catch (_) {}
  $("#themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
  });

  /* ---------- NAV ---------- */
  const nav = $(".nav"), links = $("#navLinks"), menuBtn = $("#menuBtn");
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  $$("a", links).forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

  const progress = $(".progress");
  const sections = $$("main section[id]");
  const tFill = $(".timeline-fill"), timeline = $("#timeline");
  const tItems = $$(".t-item");
  let sectionTops = [];
  const measure = () => { sectionTops = sections.map((s) => [s.id, s.offsetTop]); };
  measure();
  addEventListener("load", measure);
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScroll);
  };
  const updateScroll = () => {
    ticking = false;
    const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 20);
    progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;

    let current = "";
    sectionTops.forEach(([id, top]) => { if (y >= top - 140) current = id; });
    $$("a", links).forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));

    // timeline fills as you scroll
    const r = timeline.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
    tFill.style.height = `${pct * 100}%`;
    tItems.forEach((it) => it.classList.toggle("lit", it.getBoundingClientRect().top < innerHeight * 0.6));
  };
  addEventListener("scroll", onScroll, { passive: true });
  updateScroll();

  /* ---------- REVEAL + COUNTERS ---------- */
  const countUp = (el) => {
    const target = +el.dataset.count, dec = +el.dataset.dec, suf = el.dataset.suffix;
    if (reduceMotion) return (el.textContent = target.toFixed(dec) + suf);
    const t0 = performance.now(), dur = 1600;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        $$("[data-count]", en.target).forEach(countUp);
        io.unobserve(en.target);
      }),
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });

  /* ---------- TYPING EFFECT ---------- */
  const typed = $("#typed");
  let wi = 0, ci = 0, deleting = false;
  const type = () => {
    const word = D.typing[wi];
    typed.textContent = word.slice(0, ci);
    if (!deleting && ci < word.length) ci++;
    else if (deleting && ci > 0) ci--;
    else if (!deleting) { deleting = true; return setTimeout(type, 1600); }
    else { deleting = false; wi = (wi + 1) % D.typing.length; }
    setTimeout(type, deleting ? 35 : 70);
  };
  reduceMotion ? (typed.textContent = D.typing[0]) : type();

  /* ---------- CURSOR GLOW + PROJECT TILT ---------- */
  const glow = $(".cursor-glow");
  const mouse = { x: -9999, y: -9999 };
  const hasMouse = matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (hasMouse) {
    addEventListener("pointermove", (e) => {
      mouse.x = e.clientX; mouse.y = e.clientY;
      glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px";
    });
  }
  if (!reduceMotion && matchMedia("(hover: hover)").matches) {
    $$(".project").forEach((card) => {
      const glare = $(".glare", card);
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 10}deg) rotateX(${(0.5 - py) * 10}deg) translateY(-6px)`;
        glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.14), transparent 50%)`;
      });
      card.addEventListener("pointerleave", () => (card.style.transform = ""));
    });
  }

  /* ---------- NEURAL NETWORK BACKGROUND ---------- */
  const canvas = $("#neural"), ctx = canvas.getContext("2d");
  const lite = !hasMouse || innerWidth < 900; // phones & tablets get a lighter animation
  let W = 0, H = 0, nodes = [], pulses = [];
  const dpr = lite ? 1 : Math.min(devicePixelRatio || 1, 2);
  const LINK = lite ? 110 : 140;
  const css = (v) => getComputedStyle(root).getPropertyValue(v).trim();
  let c1 = css("--node"), c2 = css("--node-2");
  new MutationObserver(() => { c1 = css("--node"); c2 = css("--node-2"); }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  const resize = () => {
    // Phones fire resize when the address bar hides/shows while scrolling.
    // Only rebuild when the width really changes, so the background never jumps.
    const newW = innerWidth;
    const newH = Math.max(innerHeight, lite ? screen.height || 0 : 0);
    if (newW === W && (lite ? Math.abs(newH - H) < 160 : newH === H)) return;
    const widthChanged = newW !== W;
    W = newW; H = newH;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!widthChanged && nodes.length) return;
    const count = lite ? Math.min(32, Math.floor((W * H) / 22000)) : Math.min(110, Math.floor((W * H) / 14000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
    }));
  };
  resize();
  addEventListener("resize", resize);

  let last = 0;
  const draw = (t = 0) => {
    if (!reduceMotion) requestAnimationFrame(draw);
    if (document.hidden) return;
    if (lite && t - last < 33) return; // ~30fps on phones
    last = t;
    ctx.clearRect(0, 0, W, H);
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      // gentle pull toward mouse
      const mdx = mouse.x - n.x, mdy = mouse.y - n.y, md = Math.hypot(mdx, mdy);
      if (md < 180) { n.x += mdx * 0.004; n.y += mdy * 0.004; }
    }
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(${c1},${(1 - d / LINK) * 0.28})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          if (!lite && pulses.length < 14 && Math.random() < 0.0008) pulses.push({ a, b, t: 0 });
        }
      }
      const md = Math.hypot(mouse.x - a.x, mouse.y - a.y);
      if (md < 180) {
        ctx.strokeStyle = `rgba(${c2},${(1 - md / 180) * 0.55})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = `rgba(${md < 180 ? c2 : c1},0.85)`;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    // signals travelling along connections
    pulses = pulses.filter((p) => (p.t += 0.02) < 1);
    for (const p of pulses) {
      const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.fillStyle = `rgba(${c2},0.95)`;
      ctx.shadowColor = `rgb(${c2})`; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.arc(x, y, 2.2, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
    }
  };
  draw();

  /* ---------- ASK MY AI (scripted assistant) ---------- */
  const cur = D.experience.find((e) => e.current);
  const allSkills = D.skills.map((g) => `${g.group}: ${g.items.join(", ")}`).join("\n");
  const KB = [
    { q: "Who are you?", keys: ["who", "about", "yourself", "introduce", "hi", "hello"], a: () => `${D.name} is a ${D.title} working as ${D.currentRole}${cur ? ` at ${cur.company}` : ""}. ${D.about[1]}` },
    { q: "Skills?", keys: ["skill", "stack", "tech", "know", "language", "tool"], a: () => `Here's the stack:\n\n${allSkills}` },
    { q: "Current role?", keys: ["current", "job", "work", "now", "role", "company"], a: () => cur ? `${cur.role} at ${cur.company} (${cur.period}).\n• ${cur.points.join("\n• ")}` : D.currentRole },
    { q: "Experience?", keys: ["experience", "intern", "history", "career"], a: () => D.experience.map((e) => `• ${e.role} at ${e.company} (${e.period}${e.mode ? `, ${e.mode}` : ""})`).join("\n") },
    { q: "Projects?", keys: ["project", "built", "build", "portfolio", "ml", "nlp"], a: () => D.projects.map((p) => `• ${p.title}: ${p.description}`).join("\n\n") },
    { q: "Education?", keys: ["education", "degree", "college", "study", "cgpa", "btech", "university", "ssc", "school", "intermediate", "inter"], a: () => D.education.filter((e) => e.school).map((e) => `${e.degree}\n${e.school}, ${e.period}${e.score ? ` · ${e.scoreLabel} ${e.score}` : ""}`).join("\n") },
    { q: "LLM / AI experience?", keys: ["ai", "llm", "langchain", "rag", "gpt", "agent", "genai"], a: () => `At work, ${D.firstName} builds AI Assistant features for a FinOps application. Personal AI projects include a RAG chatbot that answers questions from PDFs (LangChain, FAISS, OpenAI), an AI interview question generator (Hugging Face FLAN-T5) and a crop recommendation model with 95% accuracy.` },
    { q: "Certifications?", keys: ["certif", "achievement", "award", "scholarship", "hackerrank", "salesforce"], a: () => [...D.certifications.map((c) => `• ${c.title} (${c.issuer})`), ...D.achievements.map((a) => `• ${a.title}`)].join("\n") },
    { q: "How to contact?", keys: ["contact", "email", "hire", "reach", "linkedin", "connect"], a: () => `Email: ${D.contact.email}\nLinkedIn & GitHub links are in the contact section below. Feel free to reach out anytime!` },
  ];
  const chat = $("#chat");
  const addMsg = (text, who) => {
    const m = document.createElement("div");
    m.className = `msg ${who}`;
    m.textContent = text;
    chat.appendChild(m);
    chat.scrollTop = chat.scrollHeight;
    return m;
  };
  let busy = false;
  const botReply = (text) => {
    busy = true;
    const m = addMsg("", "bot");
    m.innerHTML = '<span class="thinking"><span></span><span></span><span></span></span>';
    setTimeout(() => {
      m.textContent = "";
      let i = 0;
      const step = () => {
        i += 3;
        m.textContent = text.slice(0, i);
        chat.scrollTop = chat.scrollHeight;
        if (i < text.length && !reduceMotion) setTimeout(step, 12);
        else { m.textContent = text; busy = false; }
      };
      step();
    }, reduceMotion ? 0 : 650);
  };
  const ask = (q) => {
    if (busy || !q.trim()) return;
    addMsg(q, "user");
    const lower = q.toLowerCase();
    let best = null, score = 0;
    for (const k of KB) {
      const s = k.keys.filter((key) => lower.includes(key)).length;
      if (s > score) { score = s; best = k; }
    }
    botReply(best ? best.a() : `I'm a lightweight assistant, so I might not know that one. Try asking about skills, experience, projects, education or how to contact ${D.firstName}.`);
  };
  $("#suggestions").innerHTML = KB.slice(1).map((k, i) => `<button class="chip-btn" data-i="${i + 1}">${esc(k.q)}</button>`).join("");
  $("#suggestions").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) ask(KB[b.dataset.i].q);
  });
  $("#chatForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("#chatInput");
    ask(input.value);
    input.value = "";
  });
  /* ---------- VISITOR COUNTER (footer) ---------- */
  // Each browser is counted once. Later visits only read the number.
  // If the counter is unavailable the line simply stays hidden.
  (async () => {
    const box = $("#visits"), num = $("#visitCount");
    let counted = false;
    try { counted = localStorage.getItem("visit_counted") === "1"; } catch {}
    try {
      const r = await fetch("/api/visits", { method: counted ? "GET" : "POST" });
      if (!r.ok) return;
      const { count } = await r.json();
      if (!count) return;
      if (!counted) { try { localStorage.setItem("visit_counted", "1"); } catch {} }
      $("#visitWord").textContent = count === 1 ? "person" : "people";
      box.hidden = false;
      const fmt = (n) => Math.round(n).toLocaleString("en-IN");
      if (reduceMotion) { num.textContent = fmt(count); return; }
      const t0 = performance.now(), dur = 1400;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        num.textContent = fmt(count * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    } catch {}
  })();

  addMsg(`Hi! 👋 I'm Chandrika's AI. Ask me anything about ${D.firstName}'s work, or tap a question below.`, "bot");
})();

/* ============================================================
   TWD ONLINE — SURVIVAL DATABASE  (view renderer)
   ============================================================ */

/* ---------- icon helper ---------- */
function icon(glyph, cls) {
  return `<svg class="${cls || ""}" viewBox="0 0 64 64"><use href="#${glyph}"></use></svg>`;
}

/* ---------- visual: screenshot over neon glyph; never break layout ---------- */
function visual(it, cls) {
  const glyph = icon(it.icon || "g-gun", cls);
  if (!it.img) return glyph;
  return `<span class="pic">${glyph}<img src="${escapeHtml(it.img)}" alt="${escapeHtml(it.name)}" loading="lazy" onerror="this.remove()"></span>`;
}

/* ---------- item card (weapons/melee/gear/supplies) ---------- */
function itemCard(it) {
  const tier = it.tier ? `<span class="tierbadge tier-${(it.tier || "").toLowerCase()}">${it.tier}</span>` : "";
  const tag = it.subcat || it.type || it.effect || it.perk || "Other";
  const tags = [];
  if (it.subcat) tags.push(it.subcat);
  if (it.ammo) tags.push(it.ammo);
  if (it.mag) tags.push(`mag ${typeof it.mag === "string" ? it.mag : it.mag + " rnd"}`);
  if (it.rarity) tags.push(`<span class="c-tag hl">${it.rarity}</span>`);
  return `
  <div class="card" data-open="${it.id}" data-cat="${it._cat || ""}" data-tag="${escapeHtml(tag)}">
    ${tier}
    <div class="c-icon">${visual(it)}</div>
    <div class="c-name glow">${it.name}</div>
    <div class="c-sub">${it.subcat || it.effect || it.type || it.perk || ""}</div>
    <div class="c-tags">
      ${tags.map(t => `<span class="c-tag">${t}</span>`).join("")}
    </div>
  </div>`;
}

/* ---------- render helpers ---------- */
function el(tag, cls, html) {
  return `<${tag} class="${cls}">${html || ""}</${tag}>`;
}

function pageSub(text) {
  return `<p class="page-sub">${text}</p>`;
}

function clipHTML(c) {
  if (c.mp4) return `<video controls preload="none" src="assets/img/clips/${escapeHtml(c.mp4)}"></video>`;
  return `<iframe src="https://www.youtube-nocookie.com/embed/${c.id}" title="${escapeHtml(c.title)}" loading="lazy" allowfullscreen></iframe>`;
}

/* ---------- HOME ---------- */
function renderHome() {
  const g = GAME_INFO;

  const quicklinks = [
    ["weapons", "Firearms", FIREARMS.length, "g-rifle"],
    ["melee", "Melee", MELEE.length, "g-knife"],
    ["gear", "Gear", GEAR.length, "g-backpack"],
    ["supplies", "Supplies", SUPPLIES.length, "g-jerry"],
    ["vehicles", "Vehicles", VEHICLES.length, "g-sedan"],
    ["locations", "Locations", LOCATIONS.length, "g-town"],
    ["tiers", "Tier List", "S→D", "g-shield"],
    ["packs", "Starter Packs", STARTER_PACKS.length, "g-crate"]
  ]
    .map(([nav, name, count, gl]) => `
    <div class="ql" data-nav="${nav}">
      <span class="q-ico">${icon(gl)}</span>
      <div><div class="name">${name}</div><div class="count">${count} entries</div></div>
      <span class="go">→</span>
    </div>`)
    .join("");

  const j = `
  <section class="hero">
    <div class="chip">SURVIVAL ARCHIVE // ${g.status.toUpperCase()}</div>
    <h1><em>TWD</em> ONLINE</h1>
    <p class="tag">${g.tagline}</p>
  </section>

  <h2 style="font-size:1rem;color:var(--txt-dim);margin-bottom:14px">// QUICK DIRECTORY</h2>
  <div class="quicklinks">${quicklinks}</div>

  <div class="panel">
    <h3>PLAY THE GAME</h3>
    <p class="muted">
      Official experience:
      <a href="https://www.roblox.com/games/${g.v3Id}/The-Walking-Dead-Online" target="_blank" rel="noopener">The Walking Dead Online (V3 EARLY ACCESS)</a>
      &nbsp;•&nbsp; Legacy:
      <a href="https://www.roblox.com/games/${g.legacyId}/TWD-Online" target="_blank" rel="noopener">TWD Online [Legacy]</a>
    </p>
  </div>

  <h2 style="font-size:1rem;color:var(--txt-dim);margin-bottom:14px">// GAMEPLAY CLIPS</h2>
  <div class="clips">
    ${GAMEPLAY_CLIPS.map(c => `
    <div class="clip">
      <div class="clip-frame">${clipHTML(c)}</div>
      <div class="clip-cap">${escapeHtml(c.title)} <span>${escapeHtml(c.author || "")}</span></div>
    </div>`).join("")}
  </div>
  <p class="muted">Clips stream from YouTube — internet required. Add your own recordings: drop an <b>.mp4</b> into <b>assets/img/clips/</b> and set <b>mp4</b> inside <b>data.js → GAMEPLAY_CLIPS</b>.</p>`;
  return j;
}

/* ---------- GENERIC LIST VIEW (collapsible sections) ---------- */
function renderList(cfg) {
  const { title, sub, items, cat } = cfg;
  const listed = items.map(i => ({ ...i, _cat: cat || title }));
  const key = cfg.key || (i => i.subcat || i.type || i.effect || "Other");
  const slug = s => (s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "other");
  const groups = [...new Set(listed.map(key))].map(g => [g, listed.filter(i => key(i) === g)]);

  const jump = `<div class="toolbar">${groups.map(([g]) => `<button class="chip" data-sec="${slug(g)}">${escapeHtml(g).toUpperCase()}</button>`).join("")}</div>`;
  const sections = groups.map(([g, list]) => `
    <details class="sec" id="sec-${slug(g)}" open>
      <summary>
        <span class="sec-name">${escapeHtml(g)}</span>
        <span class="sec-count">${list.length}</span>
      </summary>
      <div class="sec-grid">${list.map(itemCard).join("")}</div>
    </details>`).join("");

  return `
    <div class="crumb">// ARCHIVE</div>
    <div class="section-head"><h2>${title}</h2></div>
    ${pageSub(sub)}
    ${jump}
    ${sections}`;
}

/* ---------- LOCATIONS VIEW ---------- */
function renderLocations() {
  const cards = LOCATIONS.map(loc => {
    const risk = (lvl, cls) => `<span class="risk ${cls}">${lvl}</span>`;
    const riskMap = { "Low": "lo", "Lowest": "lo", "Low–Medium": "md", "Medium": "md", "High": "hi", "Very High": "hi", "Extreme": "hi", "Safe zone": "lo", "—": "lo" };
    return `
    <div class="card loc-card" data-open="${loc.id}" data-cat="locations">
      <div class="c-icon">${icon(loc.icon)}</div>
      <div class="c-name glow">${loc.name}</div>
      <div class="c-sub">${loc.zone}</div>
      <div class="c-tags"><span class="c-tag hl">${loc.tier}</span></div>
      <div class="loc-risks">
        <span class="risk ${riskMap[loc.pvp] || 'md'}">Loot ${loc.loot}</span>
        <span class="risk ${riskMap[loc.pvp] || 'md'}">PvP ${loc.pvp}</span>
        <span class="risk ${loc.walkers.includes("None") ? "lo" : "md"}">Walkers ${loc.walkers}</span>
      </div>
    </div>`;
  }).join("");

  return `
    <div class="crumb">// WORLD MAP</div>
    <div class="section-head"><h2>Locations</h2></div>
    ${pageSub("Every named POI on the V3 map — press <b>M</b> in-game. Loot tier, PvP risk and walker density per zone.")}
    <div class="grid" data-grid="locations">${cards}</div>

    <div class="panel" style="margin-top:26px">
      <h3>SUGGESTED PROGRESSION ROUTE</h3>
      <p>
        <b style="color:#52ff9d">Starter:</b> Farmland → Woodbury → King County &nbsp;
        <b style="color:#b9ff3c">Mid:</b> Police Department → Correctional Facility → Radar Station &nbsp;
        <b style="color:#ffd166">Late / high tier:</b> National Guard Encampments → Hospital (Location 11) → Military Base / Bunker / Helicopter Crashes.
      </p>
      <p class="muted">Chain safe zones first (Sanctuary hub, Alexandria, Hilltop, Terminus) for food &amp; meds before pushing military POIs.</p>
    </div>`;
}

/* ---------- TIER LIST VIEW ---------- */
function renderTiers() {
  const rows = TIERS_FIREARM.map(t => `
    <div class="tierrow">
      <div class="tletter tier-${t.cls}">${t.tier}</div>
      <div>
        <b style="color:#b9ff3c;font-family:var(--font-head);letter-spacing:0.08em">${t.label}</b>
        <div class="tnote">${t.note}</div>
        <div class="titems">${t.items.map(i => `▸ ${i}`).join("&nbsp;&nbsp;")}</div>
      </div>
    </div>`).join("");

  return `
    <div class="crumb">// META</div>
    <div class="section-head"><h2>Weapon Tier List</h2></div>
    ${pageSub("Rankings consider walker headshot reliability, TTK vs plate carrier (+50 HP), reload speed, ammo availability and inventory slot efficiency. Early Access balance may shift after patches.")}
    ${rows}
    <div class="panel" style="margin-top:26px">
      <h3>BEST BY ACTIVITY</h3>
      <ul>
        <li><b>Helicopter crash PvP:</b> M24 or AK-47 + plate carrier.</li>
        <li><b>Silent Woodbury looting:</b> melee (blade) + USP backup.</li>
        <li><b>National Guard farming:</b> ACR for controllable clears.</li>
        <li><b>First hour:</b> grab whatever firearm spawns first, upgrade fast.</li>
        <li><b>Ammo economy:</b> an S-tier M24 with no rounds loses to a B-tier USP with plenty of ammo.</li>
      </ul>
    </div>`;
}

/* ---------- STARTER PACKS ---------- */
function renderPacks() {
  const cards = STARTER_PACKS.map(p => `
    <div class="panel pack">
      <span class="p-ico">${icon(p.icon)}</span>
      <div>
        <h3 style="color:#52ff9d">${p.name}</h3>
        <div class="p-de">${escapeHtml(p.de || "")}</div>
        <div class="p-price">${p.price}</div>
        <ul>${p.content.map(c => `<li>${c}</li>`).join("")}</ul>
      </div>
    </div>`).join("");

  return `
    <div class="crumb">// STORE</div>
    <div class="section-head"><h2>Starter Packs</h2></div>
    ${pageSub("Purchased with Robux in the in-game store (V3 Early Access). Roblox keeps 30% of each sale.")}
    ${cards}`;
}

/* ---------- GAMEPASSES ---------- */
function renderGamepasses() {
  const gps = GAMEPASSES.map(gp => `
    <div class="gp">${gp.img ? `<img src="${escapeHtml(gp.img)}" alt="${escapeHtml(gp.name)}" loading="lazy" onerror="this.style.display='none'">` : ""}<div><b>${gp.name}</b><span>${gp.desc}</span></div></div>`).join("");

  return `
    <div class="crumb">// STORE</div>
    <div class="section-head"><h2>Gamepasses</h2></div>
    ${pageSub("Current V3 store outfit packs. Starter packs are listed on the Starter Packs page. Legacy V2 gamepasses (Main Show Character Pack, Telltale, Team Leader +, Custom Character+, Walker Mode) are no longer sold.")}
    <div class="gp-grid">${gps}</div>`;
}

/* ---------- CONTROLS ---------- */
function renderControls() {
  const groups = [...new Set(CONTROLS.map(c => c.group))];
  const tables = groups.map(grp => `
    <h3 style="margin:26px 0 12px">${grp}</h3>
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Key</th><th>Action</th></tr></thead>
        <tbody>
          ${CONTROLS.filter(c => c.group === grp).map(c => `
            <tr><td>${c.keys.map(k => `<span class="key">${escapeHtml(k)}</span>`).join(" ")}</td><td>${c.action}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>`).join("");

  return `
    <div class="crumb">// FIELD MANUAL</div>
    <div class="section-head"><h2>Controls (PC)</h2></div>
    ${pageSub("Default keyboard bindings. Move, aim, drive and communicate. Combat tips: headshots only kill walkers — reload between engagements (R), not during them.")}
    ${tables}`;
}

/* ---------- UPDATE LOG ---------- */
function renderVersions() {
  const rows = VERSIONS.map(v => `
    <tr><td style="color:#52ff9d">${v.version}</td><td>${v.date}</td><td>${v.note}</td></tr>`).join("");
  return `
    <div class="crumb">// HISTORY</div>
    <div class="section-head"><h2>Update Log</h2></div>
    ${pageSub("Known version history from public community wikis. TWD Online shares live notes via their Discord — check it for patch-day changes.")}
    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Version</th><th>Date</th><th>What changed</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/* ============================================================
   VIEW DISPATCHER
   ============================================================ */
const ROUTES = {
  home: renderHome,
  weapons: () => renderList({ title: "Firearms", cat: "Firearms", sub: "Every gun in TWD Online. Headshots only kill walkers — pick your calibre and loot route. Conserve rifle ammo: 5.56x45mm and 7.62x39mm burn fast.", items: FIREARMS }),
  melee: () => renderList({ title: "Melee Weapons", cat: "Melee", sub: "Silent walker elimination — no gunshot noise, no ammo spent. Body hits merely stagger; you still need a headshot to drop a walker.", items: MELEE }),
  gear: () => renderList({ title: "Gear & Armor", cat: "Gear", sub: "Stat-bearing equipment plus wearables. Backpack (+10 slots) and Plate Carrier (+50 HP) are the two pieces that change your survival ceiling — everything else here is cosmetic.", items: GEAR }),
  supplies: () => renderList({
    title: "Supplies", cat: "Supplies", sub: "Medicals, food, water, fuel and keys. Reserve 3–5 slots for healing on military routes — entering PvP zones without meds is the #1 death cause.",
    key: i => ({ bandages: "Medical", antibiotics: "Medical", medkit: "Medical", water: "Drink", soda: "Drink", energy: "Drink", beans: "Food", tomato: "Food", dogfood: "Food", mre: "Food", jerrycan: "Fuel", bunkerkey: "Keys", walkie: "Comms" }[i.id] || "Other"),
    items: SUPPLIES }),
  vehicles: () => renderList({ title: "Vehicles", cat: "Vehicles", sub: "Drivable cars added in V3. All legacy models behave identically — cosmetics only. Roughly 4 Jerry Cans to fill any tank; cars are world objects, not storage.", items: VEHICLES }),
  locations: renderLocations,
  tiers: renderTiers,
  packs: renderPacks,
  gamepasses: renderGamepasses,
  controls: renderControls,
  versions: renderVersions
};

let currentView = "home";

/* ---------- search corpus ---------- */
const CORPUS = [
  ...FIREARMS.map(i => ({ ...i, _cat: "Firearms", _view: "weapons" })),
  ...MELEE.map(i => ({ ...i, _cat: "Melee", _view: "melee" })),
  ...GEAR.map(i => ({ ...i, _cat: "Gear", _view: "gear" })),
  ...SUPPLIES.map(i => ({ ...i, _cat: "Supplies", _view: "supplies" })),
  ...VEHICLES.map(i => ({ ...i, _cat: "Vehicles", _view: "vehicles" })),
  ...LOCATIONS.map(i => ({ ...i, _cat: "Locations", _view: "locations" }))
];
CORPUS.forEach(i => { i._join = `${i.name} ${i.subcat || ""} ${i.type || ""} ${i.effect || ""} ${i.desc || ""} ${(i.spawn || []).join(" ")} ${i.ammo || ""}`.toLowerCase(); });

function searchAll(q) {
  q = q.trim().toLowerCase();
  if (!q) return [];
  return CORPUS.filter(i => i._join.includes(q)).slice(0, 24);
}

/* ---------- main render ---------- */
const viewEl = document.getElementById("view");

function renderView() {
  const fn = ROUTES[currentView] || renderHome;
  viewEl.innerHTML = fn();
  rewireGrid();
  document.querySelectorAll(".nav-link").forEach(a => a.classList.toggle("active", a.dataset.nav === currentView));
  updateCount();
  const search = document.getElementById("globalSearch");
  if (search && currentView === "home") search.value = "";
}

function rewireGrid() {
  document.querySelectorAll("#view [data-nav]").forEach(l => l.addEventListener("click", () => { navigate(l.dataset.nav); }));

  // section jump chips
  document.querySelectorAll("#view .chip[data-sec]").forEach(chip => {
    chip.addEventListener("click", () => {
      const sec = document.getElementById("sec-" + chip.dataset.sec);
      if (!sec) return;
      if (!sec.open) sec.open = true;
      sec.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // cards -> modal
  document.querySelectorAll("#view .card[data-open]").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.open));
  });
}

/* ============================================================
   MODAL
   ============================================================ */
function statRow(k, v, cls) {
  return `<div class="statrow"><span class="k">${k}</span><span class="v ${cls || ""}">${v}</span></div>`;
}

function findItem(id) {
  return CORPUS.find(i => i.id === id) || null;
}

function openModal(id) {
  const it = findItem(id);
  if (!it) return;

  let hero, sub, stats = "", desc, tip;

  if (it._cat === "Locations") {
    hero = `<div class="m-hero"><span class="m-ico">${visual(it)}</span><div><div class="m-title">${it.name}</div><div class="m-sub">${it.zone} &nbsp;•&nbsp; Tier: ${it.tier}</div></div></div>`;
    stats = `
      ${statRow("Loot tier", it.loot, "good")}
      ${statRow("PvP risk", it.pvp, it.pvp.includes("High") || it.pvp.includes("Extreme") ? "bad" : "warn")}
      ${statRow("Walker density", it.walkers, it.walkers.includes("None") ? "good" : "warn")}`;
    desc = it.desc;
    tip = it.tips;
    sub = "<span class=\"m-cat\">Location</span>";
  } else {
    hero = `<div class="m-hero"><span class="m-ico">${visual(it)}</span><div><div class="m-title">${it.name}</div><div class="m-sub">${it.subcat || it.type || it.effect || ""} ${it.tier ? `&nbsp;•&nbsp; Tier: ${it.tier}` : ""}</div></div></div>`;
    sub = `<span class="m-cat">${it._cat}</span>`;
    if (it.ammo) stats += statRow("Ammo type", it.ammo);
    if (it.mag !== undefined) stats += statRow("Magazine", typeof it.mag === "string" ? it.mag : it.mag + " rounds");
    if (it.rarity) stats += statRow("Rarity", it.rarity);
    if (it.perk) stats += statRow("Perk", it.perk, "good");
    if (it.effect) stats += statRow("Effect", it.effect, "good");
    if (it.seats) stats += statRow("Seats", it.seats);
    if (it.fuel) stats += statRow("Fuel", it.fuel, "warn");
    desc = it.desc;
    tip = it.tips;
  }

  const spawn = it.spawn && it.spawn.length
    ? `<h4>KNOWN SPAWNS / LOCATIONS</h4><ul class="spawnlist">${it.spawn.map(s => `<li>${escapeHtml(s)}</li>`).join("")}</ul>`
    : "";

  const modal = document.getElementById("modalContent");
  modal.innerHTML = `
    <button class="m-close" id="modalClose" aria-label="Close">✕</button>
    ${sub}
    ${hero}
    ${stats ? `<div style="margin-bottom:16px">${stats}</div>` : ""}
    <p class="m-desc">${desc}</p>
    ${tip ? `<div class="m-tip">⚠ ${tip}</div>` : ""}
    ${spawn}`;

  const backdrop = document.getElementById("modalBackdrop");
  backdrop.classList.add("open");
  document.getElementById("modalClose").addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", escClose);
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
  document.removeEventListener("keydown", escClose);
}
function escClose(e) {
  if (e.key === "Escape") closeModal();
}

/* ---------- helpers ---------- */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function updateCount() {
  document.getElementById("totalItems").textContent = CORPUS.length;
}

function navigate(view) {
  currentView = view;
  if (location.hash !== "#" + view) {
    try { history.replaceState(null, "", "#" + view); } catch (e) {}
  }
  renderView();
}

/* ---------- global nav events ---------- */
document.querySelectorAll(".nav-link").forEach(a => {
  a.addEventListener("click", () => navigate(a.dataset.nav));
});
document.querySelectorAll(".brand").forEach(b => {
  b.addEventListener("click", () => navigate("home"));
});

window.addEventListener("hashchange", () => {
  const h = location.hash.replace("#", "");
  if (ROUTES[h]) { currentView = h; renderView(); }
});

/* ---------- global search ---------- */
const gSearch = document.getElementById("globalSearch");
gSearch.addEventListener("input", () => {
  const q = gSearch.value;
  const results = searchAll(q);
  if (!q || currentView === "home") {
    // still render home but show results strip
  }
  if (q.length < 2) { renderView(); return; }
  viewEl.innerHTML = `
    <div class="crumb">// SEARCH</div>
    <div class="section-head"><h2>Results for "<span style="color:#b9ff3c">${escapeHtml(q)}</span>"</h2></div>
    <div class="grid">
      ${results.length
        ? results.map(r => itemCard({ ...r, _cat: r._cat })).join("")
        : el("div", "empty", "No match in the archive. Try 'AK-47', 'Woodbury', 'jerry'…")}
    </div>`;
  rewireGrid();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== gSearch) {
    e.preventDefault();
    gSearch.focus();
  }
});

/* ---------- boot ---------- */
const initialHash = location.hash.replace("#", "");
if (ROUTES[initialHash]) currentView = initialHash;
renderView();
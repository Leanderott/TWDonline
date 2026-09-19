# TWD Online — Survival Database

A modern, self-contained fan-made reference site for **The Walking Dead Online** (Roblox, by TWD Online).

Green "apocalyptic terminal" theme, fully in English, works offline, and is ready to drop into your GitHub repo.

## Quick start

- Double-click **`start.bat`** → opens the site in your default browser.
- Or just open **`index.html`**.

## What's inside

| File / folder | Purpose |
| --- | --- |
| `index.html` | Page shell + all neon SVG item icons |
| `assets/css/style.css` | The green-neon / CRT theme |
| `assets/js/data.js` | **All game data** — edit this to add/change items |
| `assets/js/app.js` | View rendering, search, filters, detail modals |
| `assets/img/` | Drop real screenshots here to override icons (see below) |
| `start.bat` | One-click local preview |

## Content included

- **Firearms** — USP, M17, Beretta M9, Glock 17, Colt Python, M1911, Desert Eagle, AK-47, ACR, M4A1, M16, M16A1, Springfield, M24, Remington 870 / shotguns
  with ammo type, magazine size, rarity, spawns, tier and tactics.
- **Melee weapons** — knives, hunting knife, machete, baseball/metal bat, nightstick, crowbar, hammer, frying pan, hatchet, fire axe, pipe wrench, screwdriver.
- **Gear & armor** — Backpack (+10 slots), Plate Carrier (+50 HP), helmets, vests + cosmetics (balaclavas, hockey mask, eyepatch, bandanas).
- **Supplies** — bandages, antibiotics, med kits, food/water, jerry cans, bunker keycard, walkie-talkie.
- **Vehicles** — Hyundai Santa Fe, Mustang, Vintage Coupe + V3 sedan / pickup / military vehicles.
- **Locations** — Woodbury, Farmland, King County, Prison, National Guard, Hospital (Location 11), Radar Station,
  Military Base, Bunker, Sanctuary, Alexandria, Hilltop, Terminus, Police Department, Helicopter Crashes — with
  loot tier, PvP risk and walker density.
- **Tier lists, starter packs, gamepasses, PC controls, update log.**

## Photos of items — how it works

**35 real item images are already bundled**, organized into category subfolders under `assets/img/` (firearms, melee,
gear, supplies, gamepasses; `vehicles/`, `locations/` and `clips/` are ready but empty). Items without a photo still
show a hand-drawn neon SVG icon, so nothing is ever a broken image. You can override any image with your own in-game
screenshot:

1. Take a screenshot in-game of the item / weapon / car / location.
2. Save it in the matching subfolder using the item's id as filename:
   `assets/img/<category>/<item-id>.png` (see the `id` field in `assets/js/data.js`, e.g. `firearms/deagle.png`,
   `locations/sanctuary.png`).
3. The site automatically uses your photo instead. (PNG / JPG / WEBP all work — browsers auto-detect the format.)

The app.js code that enables this:

```js
// data.js: add an optional img to any item
{ id: "usp", img: "assets/img/firearms/usp.png", ... }

// app.js // itemCard / modal asset resolution
function itemVisual(it){ return it.img ? `<img src="${it.img}" ...>` : iconGlyph(it.icon); }
```

## Add / edit data

All content lives in **`assets/js/data.js`**. Every entry follows the same shape:

```js
{
  id: "ak47",                    // unique id -> used for img override filename
  name: "AK-47",
  subcat: "Automatic Rifle",
  ammo: "7.62x39mm",
  mag: 30,
  tier: "S",                     // S / A / B / C / D
  rarity: "Uncommon",
  icon: "g-rifle",               // neon glyph used when no photo exists
  spawn: ["National Guard Encampments", "Hospital — Location 11"],
  desc: "High damage and a great fire rate...",
  tips: "Conserve 7.62x39mm ammo."
}
```

To add an icon glyph: add a `<symbol id="g-myglyph">` block in `index.html` (inside the hidden `<svg>`).

## Publish on GitHub Pages (no git needed)

This repo folder is **already Pages-ready**: root contains `index.html`, all asset paths are relative,
and `.nojekyll` is present. To get it online:

1. Create a GitHub account at github.com and click **+ → New repository** (name it e.g. `twd-online`,
   keep it **Public**, do NOT check "Initialize with README").
2. In the new empty repo click **"uploading an existing file"** (or the "Add file → Upload files" button).
3. Drag the **contents** of this `twd-online-site/` folder into the browser window — keep `index.html`
   at the top level, don't nest it. Wait until all files are listed, commit to `main`.
4. Then: repo **Settings → Pages → Source → Deploy from a branch → main / (root) → Save**.
5. The site is online at `https://<your-username>.github.io/twd-online/`.

Every future change = upload the changed files the same way (or use git).

Alternative (with git installed):
```bash
cd twd-online-site
git init -b main
git add .
git commit -m "TWD Online fan database"
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```
Then enable Pages as in step 4. Your local `start.bat` keeps working for offline preview.

Note: YouTube gameplay clips need internet; everything else works fully offline.

## Data sources

Fan-made. Data compiled from public community wikis & guides:
the-walking-dead-online-roblox.fandom.com and walkingdeadonline3.wiki (July 2026), plus the official Roblox
experience pages. The game is in **Beta / Early Access** — stats change. **Roblox, AMC and the TWD Online creator
group remain the official sources.**
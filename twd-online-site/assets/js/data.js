/* ============================================================
   TWD ONLINE — SURVIVAL DATABASE
   Data collected from public community wikis & guides (fan-made).
   The game is in active Beta / Early Access — stats may change.
   ============================================================ */

const GAME_INFO = {
  title: "The Walking Dead Online",
  tagline: "Open-world survival in the post-apocalyptic world of The Walking Dead.",
  by: "TWD Online",
  creatorGroup: {
    name: "TWD Online",
    url: "https://www.roblox.com/communities/34088407/twd-online"
  },
  discord: "https://discord.gg/zPY878jtTV",
  legacyId: "16954579442",
  v3Id: "128039018996175",
  universeId: "7208219743",
  genre: "Survival — Open World",
  serverSize: "50 (Legacy) / 70 (V3)",
  status: "Beta / Early Access",
  dominance: ["Scavenging", "Headshot-only walkers", "PvP survival", "Factions"],
  description: "Scavenge abandoned towns, search for supplies, fight walkers, and survive against the infected and other players in a persistent online world. Build your character, collect weapons, vehicles, clothing and equipment, form factions with other survivors. The apocalypse is only just beginning.",
  quickFacts: [
    "Walkers only die to HEADSHOTS — every bullet or blade must land on the head.",
    "Gunfire attracts walkers AND players. Melee kills stay silent.",
    "Inventory: 20 base slots, 30 with a Backpack equipped.",
    "Plate Carrier gives +50 HP plus armor damage reduction.",
    "All vehicles need fuel from Jerry Cans (~4 cans to fill)."
  ]
};

const FIREARMS = [
  {
    id: "usp",
    name: "USP",
    subcat: "Pistol",
    ammo: ".45 ACP",
    mag: 12,
    tier: "B",
    rarity: "Common",
    icon: "g-pistol",
    img: "assets/img/firearms/usp.png",
    spawn: ["Most / all buildings and locations"],
    desc: "The USP is one of the most common firearms in the game — and .45 ACP ammo is everywhere. One clean headshot kills a walker, but pistol accuracy forces you close to the target.",
    tips: "The perfect starting sidearm. Pair it with a rifle as soon as you find one."
  },
  {
    id: "m17",
    name: "M17",
    subcat: "Pistol",
    ammo: "9mm",
    mag: 17,
    tier: "B",
    rarity: "Common",
    icon: "g-pistol",
    spawn: ["Most / all buildings and locations"],
    desc: "A semi-automatic 9mm pistol, very similar to the USP in accuracy and power but slightly less common. A solid early weapon for quick self-defence.",
    tips: "Great starter pistol — swap for a rifle before military zone routes."
  },
  {
    id: "glock17",
    name: "Glock 17",
    subcat: "Pistol",
    ammo: "9mm",
    mag: 12,
    tier: "A",
    rarity: "Uncommon",
    icon: "g-pistol",
    img: "assets/img/firearms/glock17.png",
    spawn: ["National Guard Encampments", "Woodbury Town Hall", "Radar Station", "Correctional Facility"],
    desc: "An effective pistol with better accuracy than other handguns. More rare than the USP, but a great long-term secondary.",
    tips: "Recommended secondary next to a USP / M17 / Desert Eagle pairing."
  },
  {
    id: "coltpython",
    name: "Colt Python",
    subcat: "Revolver",
    ammo: ".357 Magnum",
    mag: 6,
    tier: "B",
    rarity: "Rare",
    icon: "g-revolver",
    img: "assets/img/firearms/revolver.png",
    spawn: ["Correctional Facility", "National Guard Encampments", "Woodbury Town Hall", "Radar Station"],
    desc: "The only revolver in the game. Massive punch from common .357 Magnum rounds, but a slow fire rate, low capacity and low accuracy make it impractical for combat.",
    tips: "Fun to flex, but hard outclassed by rifles. Keep it as a backup only."
  },
  {
    id: "m1911",
    name: "M1911",
    subcat: "Pistol",
    ammo: ".45 ACP",
    mag: 9,
    tier: "C",
    rarity: "Extremely rare",
    icon: "g-pistol",
    img: "assets/img/firearms/m1911.png",
    spawn: ["Most / all buildings and locations"],
    desc: "A WWII classic firing .45 ACP. Essentially a nerfed version of other pistols — low effectiveness makes it a poor choice for long-term use.",
    tips: "Replace as soon as you find a USP or Glock."
  },
  {
    id: "deagle",
    name: "Desert Eagle",
    subcat: "Pistol",
    ammo: ".50 Cal",
    mag: 7,
    tier: "A",
    rarity: "Rare",
    icon: "g-deagle",
    spawn: ["Most / all buildings and locations"],
    desc: "A heavy-hitting powerhouse. Slower and lower capacity than other pistols, but serious damage and an acceptable fire rate make it a great long-term secondary.",
    tips: "Best paired with a USP, Glock 17 or M17 as your primary."
  },
  {
    id: "m9",
    name: "Beretta M9",
    subcat: "Pistol",
    ammo: "9mm",
    mag: 15,
    tier: "B",
    rarity: "Common",
    icon: "g-pistol",
    img: "assets/img/firearms/m9.png",
    spawn: ["Woodbury residential", "Police Department", "The Deputy starter pack"],
    desc: "The standard-issue service pistol in 9mm — the deputy loadout sidearm. Reliable, common and interchangeable with the USP/M17 family in terms of raw power.",
    tips: "Comes with 30 rounds in The Deputy pack. Solid back-up for Police Department routes."
  },
  {
    id: "ak47",
    name: "AK-47",
    subcat: "Automatic Rifle",
    ammo: "7.62x39mm",
    mag: 30,
    tier: "S",
    rarity: "Uncommon",
    icon: "g-rifle",
    img: "assets/img/firearms/ak47.png",
    spawn: ["National Guard Encampments", "Correctional Facility", "Woodbury Town Hall", "Radar Station", "Hospital — Location 11 (best spawn)", "Helicopter Crashes"],
    desc: "High damage and a great fire rate. Sacrifices accuracy and control for raw power — it can one-tap a walker. The most powerful of the automatics.",
    tips: "Conserve 7.62x39mm ammo. Use melee when you can."
  },
  {
    id: "acr",
    name: "ACR",
    subcat: "Automatic Rifle",
    ammo: "5.56x45mm",
    mag: 30,
    tier: "S",
    rarity: "Extremely rare",
    icon: "g-rifle",
    spawn: ["Zombie (Walker) Drops", "National Guard Encampments"],
    desc: "Well-balanced power, fire rate and accuracy — one of the best automatics in the game. Rare spawn, but if you find one it becomes your primary instantly.",
    tips: "The best all-rounder: walker headshots AND mid-range PvP."
  },
  {
    id: "m4a1",
    name: "M4A1",
    subcat: "Automatic Rifle",
    ammo: "5.56x45mm",
    mag: 30,
    tier: "A",
    rarity: "Uncommon",
    icon: "g-rifle",
    img: "assets/img/firearms/m4a1.png",
    spawn: ["National Guard Encampments", "Correctional Facility", "Woodbury Town Hall", "Radar Station"],
    desc: "A light, effective automatic. Decent, but the AK and ACR are better options. Nothing more than an average rifle.",
    tips: "Good mid-game bridge weapon until you find an AK or ACR."
  },
  {
    id: "m16",
    name: "M16",
    subcat: "Automatic Rifle",
    ammo: "5.56x45mm",
    mag: 30,
    tier: "A",
    rarity: "Uncommon",
    icon: "g-rifle",
    spawn: ["National Guard Encampments"],
    desc: "An average firearm that can still be effective. Similar accuracy and damage to the M4A1 and M16A1.",
    tips: "Grab it at National Guard camps — reliable until you find an S-tier."
  },
  {
    id: "m16a1",
    name: "M16A1",
    subcat: "Automatic Rifle",
    ammo: "5.56x45mm",
    mag: 30,
    tier: "A",
    rarity: "Uncommon",
    icon: "g-rifle",
    spawn: ["National Guard Encampments"],
    desc: "Essentially the same as the M16 — same family, same performance.",
    tips: "No reason to keep both M16 variants; keep the better-condition one."
  },
  {
    id: "springfield",
    name: "Springfield",
    subcat: "Sniper / Bolt-Action",
    ammo: "7.62x39mm",
    mag: 5,
    tier: "A",
    rarity: "Uncommon",
    icon: "g-sniper",
    spawn: ["National Guard Encampments", "Correctional Facility", "Woodbury Town Hall", "Radar Station"],
    desc: "Bridges the sniper and assault roles with faster follow-up shots than a dedicated sniper, at the cost of peak damage per round. Strong medium-long range headshots.",
    tips: "Great overwatch tool at helicopter crash sites."
  },
  {
    id: "m24",
    name: "M24",
    subcat: "Sniper / Bolt-Action",
    ammo: "7.62x39mm",
    mag: 5,
    tier: "S",
    rarity: "Rare",
    icon: "g-sniper",
    img: "assets/img/firearms/m24.png",
    spawn: ["National Guard Encampments (most common)", "Correctional Facility", "Woodbury Town Hall", "Radar Station", "Military Base", "Helicopter Crashes"],
    desc: "The premier long-range headshot weapon. One well-placed headshot drops walkers with minimal ammo waste — ideal when inventory space is tight. Dominates crash-site PvP from elevation.",
    tips: "Sniper rounds are rare — headshots only, never waste shots."
  },
  {
    id: "shotgun",
    name: "Shotgun (Remington 870 & variants)",
    subcat: "Shotgun",
    ammo: "12 Gauge (shells)",
    mag: "2–8 (varies)",
    tier: "A",
    rarity: "Uncommon",
    icon: "g-shotgun",
    img: "assets/img/firearms/remington870.png",
    spawn: ["Woodbury & residential zones", "Correctional Facility"],
    desc: "Close-range headshot bursts where aim precision matters less — especially valuable on mobile. Falls off at Military Base long sightlines.",
    tips: "Grab one for Woodbury clears; swap for a rifle before National Guard."
  }
];

const MELEE = [
  {
    id: "knife",
    name: "Knife",
    subcat: "Blade",
    tier: "A",
    rarity: "Common",
    icon: "g-knife",
    spawn: ["Woodbury kitchens", "Correctional Facility storage", "Most residential areas"],
    desc: "A plain civilian blade. Silent walker elimination: fast swings and reliable headshot follow-ups without spending a single bullet.",
    tips: "Fast blades = best stealth option. One inventory slot, always carry one."
  },
  {
    id: "huntingknife",
    name: "Hunting Knife",
    subcat: "Blade",
    tier: "B",
    rarity: "Common",
    icon: "g-knife",
    img: "assets/img/melee/huntingknife.png",
    spawn: ["Woodbury residential", "Hunting / tool shops", "Roadside vehicles"],
    desc: "A heavier fixed-blade hunting knife. Slightly slower than a chef's knife but with a stronger blade for repeated headshot swings.",
    tips: "Think of it as a tougher Knife with the same stealth profile."
  },
  {
    id: "screwdriver",
    name: "Screwdriver",
    subcat: "Improvised",
    tier: "D",
    rarity: "Common",
    icon: "g-knife",
    img: "assets/img/melee/screwdriver.png",
    spawn: ["Toolboxes", "Garages", "Workbenches", "Most buildings"],
    desc: "The stick-and-move special. Sharp enough for headshot pokes but the slow swing and short reach make it a last-resort melee.",
    tips: "Better than fists, barely. Drop it the moment you find any real blade."
  },
  {
    id: "machete",
    name: "Military Machete",
    subcat: "Blade",
    tier: "A",
    rarity: "Uncommon",
    icon: "g-machete",
    img: "assets/img/melee/machete.png",
    spawn: ["National Guard Encampments", "Military Base", "Veteran starter pack"],
    desc: "Military-grade blade. Faster and harder than civilian knives; excellent for silent guard clears and corridor work.",
    tips: "Included in The Veteran starter pack alongside the M1911."
  },
  {
    id: "bat",
    name: "Baseball Bat",
    subcat: "Blunt",
    tier: "B",
    rarity: "Common",
    icon: "g-bat",
    img: "assets/img/melee/baseballbat.png",
    spawn: ["Woodbury residential", "Roadside vehicles", "Most buildings"],
    desc: "The apocalypse classic. Medium speed with high stagger — great for knocking walkers off balance before the headshot finish.",
    tips: "Bat + headshot is reliable, but slower on follow-up swings than a knife."
  },
  {
    id: "metalbat",
    name: "Metal Bat",
    subcat: "Blunt",
    tier: "A",
    rarity: "Uncommon",
    icon: "g-bat",
    img: "assets/img/melee/metalbat.png",
    spawn: ["Woodbury garages", "Correctional Facility", "Storage sheds", "The Marauder starter pack"],
    desc: "A solid alloy bat with better durability and swing weight than the wooden version — a genuine upgrade, not just a flex.",
    tips: "The Marauder starter pack includes one. Great all-rounder while you hunt for an axe."
  },
  {
    id: "nightstick",
    name: "Nightstick / Baton",
    subcat: "Blunt",
    tier: "B",
    rarity: "Common",
    icon: "g-nightstick",
    spawn: ["Police Department", "Deputy starter pack"],
    desc: "Law-enforcement baton with medium speed and solid stagger. Not as dangerous as a blade, but reliable and common around the PD.",
    tips: "The Deputy starter pack starts you with one."
  },
  {
    id: "crowbar",
    name: "Crowbar",
    subcat: "Blunt",
    tier: "B",
    rarity: "Common",
    icon: "g-bat",
    img: "assets/img/melee/crowbar.png",
    spawn: ["Garages", "Tool sheds", "Construction sites", "Barns near Farmland"],
    desc: "Heavy, awkward and brutally effective. Slow swings trade a little speed for solid damage on headshot work.",
    tips: "The tool of choice at farms and construction spots — pairs with the aesthetic of a builder survivor."
  },
  {
    id: "hammer",
    name: "Hammer",
    subcat: "Blunt",
    tier: "C",
    rarity: "Common",
    icon: "g-bat",
    img: "assets/img/melee/hammer.png",
    spawn: ["Garages", "Toolboxes", "Workbenches", "Construction sites"],
    desc: "A claw hammer pressed into melee duty. Short reach and modest damage — strictly a make-do weapon.",
    tips: "Upgrade to a bat or blade as soon as one spawns."
  },
  {
    id: "fryingpan",
    name: "Frying Pan",
    subcat: "Blunt",
    tier: "C",
    rarity: "Common",
    icon: "g-bat",
    img: "assets/img/melee/fryingpan.png",
    spawn: ["Woodbury kitchens", "Alexandria homes", "Most residential areas"],
    desc: "The kitchen classic. Poor man's shield and club in one. Decent headshot bonk range, meme value included free.",
    tips: "It won't win PvP, but it WILL save you ammo early game."
  },
  {
    id: "hatchet",
    name: "Hatchet",
    subcat: "Heavy",
    tier: "A",
    rarity: "Uncommon",
    icon: "g-axe",
    img: "assets/img/melee/hatchet.png",
    spawn: ["Fire locations", "Tool sheds", "Campgrounds", "National Guard perimeter"],
    desc: "A one-handed chopper that sits between knife and full axe — faster than the Fire Axe with serious headshot damage.",
    tips: "The best middle-ground melee: fast enough to use, heavy enough to matter."
  },
  {
    id: "axe",
    name: "Fire Axe / Heavy Axe",
    subcat: "Heavy",
    tier: "A",
    rarity: "Uncommon",
    icon: "g-axe",
    spawn: ["Correctional Facility", "Fire stations", "Rail depots"],
    desc: "Slow but devastating. One-shot headshot potential, though the swing speed leaves you exposed between hits.",
    tips: "Begin a starter pack weapon — keep a fast blade as backup."
  },
  {
    id: "pipewrench",
    name: "Pipe Wrench",
    subcat: "Heavy",
    tier: "C",
    rarity: "Uncommon",
    icon: "g-axe",
    img: "assets/img/melee/pipewrench.png",
    spawn: ["Garages", "Plumbing / hardware stores", "Basements"],
    desc: "A heavy monkey wrench. Slow but hits like a truck — respect the swing commitment before swinging indoors.",
    tips: "Choose it only when you plan one or two careful headshots at a time."
  }
];

const GEAR = [
  {
    id: "backpack",
    name: "Backpack",
    subcat: "Equipment",
    perk: "+10 Inventory Slots (20 → 30)",
    tier: "S",
    rarity: "Uncommon",
    icon: "g-backpack",
    img: "assets/img/gear/backpack.png",
    spawn: ["Woodbury residential", "Correctional Facility storage", "National Guard supply tents"],
    desc: "The single most valuable gear piece. Expands your inventory from 20 to 30 slots so you can carry a rifle, sidearm, melee, plate carrier, meds, ammo AND extraction loot.",
    tips: "Try to equip a backpack before any multi-POI loot run."
  },
  {
    id: "platecarrier",
    name: "Plate Carrier",
    subcat: "Armor",
    perk: "+50 HP + armor damage reduction",
    tier: "S",
    rarity: "Rare",
    icon: "g-plate",
    img: "assets/img/gear/platecarrier.png",
    spawn: ["National Guard Encampments", "Military Base", "Helicopter Crashes"],
    desc: "Grants +50 HP and reduces damage taken — essential for PvP at the Military Base, helicopter crashes and National Guard camps. Without one, you lose most even fights.",
    tips: "Equip BEFORE entering any PvP zone, even if you 'play passive'."
  },
  {
    id: "helmet",
    name: "Military Helmet (M1)",
    subcat: "Cosmetic",
    perk: "Cosmetic during Early Access",
    tier: "C",
    rarity: "Uncommon",
    icon: "g-helmet",
    img: "assets/img/gear/helmet.png",
    spawn: ["Veteran starter pack", "Military zones"],
    desc: "Classic M1 helmet. Currently cosmetic only — no stat bonus confirmed during Early Access.",
    tips: "Style points at faction meets. Watch the update log in case stats arrive."
  },
  {
    id: "policevest",
    name: "Police Vest",
    subcat: "Cosmetic",
    perk: "Cosmetic / light protection",
    tier: "C",
    rarity: "Uncommon",
    icon: "g-vest",
    spawn: ["Police Department", "Deputy starter pack"],
    desc: "Standard-issue police vest. Legacy-era cosmetic; pairs with the deputy look.",
    tips: "Combine with a nightstick and Beretta M9 for the full deputy kit."
  },
  {
    id: "firefighter",
    name: "Firefighter Outfit",
    subcat: "Cosmetic",
    perk: "Cosmetic",
    tier: "C",
    rarity: "Common",
    icon: "g-helmet2",
    spawn: ["The Fire Fighter starter pack", "Fire locations"],
    desc: "Helmet + vest + fire axe + jerry can + bottled water starter kit. All cosmetic protection.",
    tips: "The cheapest starter pack (99 R$) — great first purchase."
  },
  {
    id: "balaclava",
    name: "Balaclava",
    subcat: "Cosmetic",
    perk: "Cosmetic — N/A",
    tier: "C",
    rarity: "Common",
    icon: "g-helmet",
    img: "assets/img/gear/balaclava.png",
    spawn: ["Military / drop loot", "National Guard Encampments", "Player drops"],
    desc: "A plain knit face covering. Hides your face model — pure PvP drip, no stat bonus.",
    tips: "Blocking your appearance can throw off players who track names by look."
  },
  {
    id: "balaclavacamo",
    name: "Balaclava Camo",
    subcat: "Cosmetic",
    perk: "Cosmetic — N/A",
    tier: "C",
    rarity: "Uncommon",
    icon: "g-helmet",
    img: "assets/img/gear/balaclavacamo.png",
    spawn: ["National Guard Encampments", "Military drops"],
    desc: "Camouflage balaclava. Blends with military-zone surroundings in name and spirit — cosmetic only.",
    tips: "The go-to face cover for National Guard loot runs."
  },
  {
    id: "balaclavaghost",
    name: "Balaclava Ghost",
    subcat: "Cosmetic",
    perk: "Cosmetic — N/A",
    tier: "C",
    rarity: "Rare",
    icon: "g-helmet",
    img: "assets/img/gear/balaclavaghost.png",
    spawn: ["Rare military drops", "Helicopter Crashes"],
    desc: "Pale ghost-white balaclava — one of the rarer cosmetics found in military loot.",
    tips: "White face + dark clothing reads surprisingly well in low light. Pure style."
  },
  {
    id: "hockeymask",
    name: "Hockey Mask",
    subcat: "Cosmetic",
    perk: "Cosmetic — N/A",
    tier: "C",
    rarity: "Uncommon",
    icon: "g-vest",
    img: "assets/img/gear/hockeymask.png",
    spawn: ["Woodbury residential", "Sports / hardware stores"],
    desc: "A weathered hockey goalie mask. No protection stat — it's a survival iconogram, not armor.",
    tips: "Wear it with an axe for the classic survivor look."
  },
  {
    id: "eyepatch",
    name: "Eyepatch",
    subcat: "Cosmetic",
    perk: "Cosmetic — N/A",
    tier: "C",
    rarity: "Common",
    icon: "g-helmet2",
    img: "assets/img/gear/eyepatch.png",
    spawn: ["Houses", "Medical locations", "Most buildings"],
    desc: "One eye, no fear. Cosmetic accessory with zero stat impact but infinite attitude.",
    tips: "Ideal roleplay piece for faction wars."
  },
  {
    id: "bandana_red",
    name: "Bandana (Red)",
    subcat: "Cosmetic",
    perk: "Cosmetic — N/A",
    tier: "C",
    rarity: "Common",
    icon: "g-vest",
    img: "assets/img/gear/bandana_red.png",
    spawn: ["Houses", "Stores", "Most buildings"],
    desc: "A red face bandana. Faction-signalling classic in survivor circles.",
    tips: "Great for identifying your squad in chaotic PvP — pick one colour and stick to it."
  },
  {
    id: "bandana_bw",
    name: "Bandana (Black / White)",
    subcat: "Cosmetic",
    perk: "Cosmetic — N/A",
    tier: "C",
    rarity: "Common",
    icon: "g-vest",
    img: "assets/img/gear/bandana_bw.png",
    spawn: ["Houses", "Stores", "Most buildings"],
    desc: "A black-and-white bandana for survivors who keep it neutral.",
    tips: "Understated camo that works on any terrain palette."
  }
];

const SUPPLIES = [
  {
    id: "bandages",
    name: "Bandages",
    effect: "Heals player",
    tier: "B",
    rarity: "Common",
    icon: "g-bandage",
    spawn: ["Houses", "Stores", "Hospital", "Roadside vehicles", "Most buildings", "Walker drops", "National Guard Encampments"],
    desc: "Stackable, slot-efficient healing. The backbone of any loadout — reserve 3-5 med slots on military routes.",
    tips: "Stack to the limit before adding new item types."
  },
  {
    id: "antibiotics",
    name: "Antibiotics",
    effect: "Heals player",
    tier: "A",
    rarity: "Uncommon",
    icon: "g-pills",
    spawn: ["Houses", "Stores", "Hospital", "Roadside vehicles", "Walker drops", "National Guard Encampments"],
    desc: "Medical supplies that restore health. Stronger healing than plain bandages in many cases.",
    tips: "Hospital and Correctional Facility medical wings stock these."
  },
  {
    id: "medkit",
    name: "Basic / Advanced Med Kit",
    effect: "Medium → High burst heal",
    tier: "A",
    rarity: "Uncommon → Rare",
    icon: "g-medkit",
    spawn: ["Correctional Facility medical (A-tier)", "National Guard Encampments (military-grade)", "Military Base (S-tier meds)", "Helicopter Crashes"],
    desc: "Burst healing between firefight cover exchanges. Advanced kits are the best healing items in the game.",
    tips: "Standard medkit: moderate slot efficiency. Advanced: highest value per slot."
  },
  {
    id: "water",
    name: "Water Bottle",
    effect: "+10 Thirst",
    tier: "B",
    rarity: "Common",
    icon: "g-water",
    img: "assets/img/supplies/water.png",
    spawn: ["Walker drops", "Houses", "Roadside vehicles", "Hospital", "Most buildings", "Spawns with player"],
    desc: "The best basic thirst restore at +10. Many players log in with one in hand.",
    tips: "Short runs can skip food/water; take some for multi-POI routes."
  },
  {
    id: "soda",
    name: "Soda Can",
    effect: "+5 Thirst",
    tier: "C",
    rarity: "Common",
    icon: "g-soda",
    img: "assets/img/supplies/soda.png",
    spawn: ["Walker drops", "Houses", "Roadside vehicles", "Hospital", "Most buildings"],
    desc: "Quick thirst top-up. Weaker than a water bottle but very common.",
    tips: "Not worth a dedicated slot unless you are already hot and heavy."
  },
  {
    id: "beans",
    name: "Canned Beans",
    effect: "+10 Hunger",
    tier: "B",
    rarity: "Common",
    icon: "g-beans",
    img: "assets/img/supplies/beans.png",
    spawn: ["Walker drops", "Houses", "Roadside vehicles", "Hospital", "Most buildings", "Spawns with player"],
    desc: "The standard +10 hunger restore. Found nearly everywhere.",
    tips: "Pair with a water bottle for the classic MRE-style snack."
  },
  {
    id: "tomato",
    name: "Tomato Soup",
    effect: "+12 Hunger",
    tier: "A",
    rarity: "Common",
    icon: "g-soup",
    img: "assets/img/supplies/soup.png",
    spawn: ["Walker drops", "Houses", "Roadside vehicles", "Hospital", "Most buildings"],
    desc: "The best basic food at +12 hunger.",
    tips: "Grab soup over beans when you find it — 2 extra hunger for free."
  },
  {
    id: "dogfood",
    name: "Dog Food",
    effect: "+5 Hunger",
    tier: "C",
    rarity: "Common",
    icon: "g-dogfood",
    img: "assets/img/supplies/dogfood.png",
    spawn: ["Walker drops", "Houses", "Roadside vehicles"],
    desc: "Only +5 hunger. Desperate measures, but it has kept many survivors alive early game.",
    tips: "Upgrade to beans or soup as soon as possible."
  },
  {
    id: "mre",
    name: "MRE",
    effect: "High hunger restore",
    tier: "A",
    rarity: "Rare",
    icon: "g-mre",
    spawn: ["Veteran starter pack", "Military Base", "National Guard Encampments"],
    desc: "Military ready-to-eat meal. Strong hunger restore, found in military supply lists.",
    tips: "The Veteran starter pack includes one."
  },
  {
    id: "energy",
    name: "Energy Drink",
    effect: "Stamina / thirst restore",
    tier: "B",
    rarity: "Uncommon",
    icon: "g-energy",
    spawn: ["The Marauder starter pack", "Convenience stores", "Gas stations"],
    desc: "Quick boost with a thirst restore angle. Part of the Marauder kit.",
    tips: "Great for sprint-heavy routing between POIs."
  },
  {
    id: "jerrycan",
    name: "Jerry Can",
    effect: "Vehicle fuel",
    tier: "A",
    rarity: "Uncommon",
    icon: "g-jerry",
    spawn: ["Garages", "Gas stations", "Military supply crates", "Fire Fighter starter pack"],
    desc: "Portable fuel. Vehicles need roughly 4 Jerry Cans to fill; tanks empty fast in PvP territory.",
    tips: "Always keep one jerry can for long routes. Refuel away from sniper sightlines."
  },
  {
    id: "bunkerkey",
    name: "Bunker Keycard",
    effect: "Unlocks the military Bunker",
    tier: "S",
    rarity: "Very rare",
    icon: "g-key",
    spawn: ["Military zones", "National Guard Encampments"],
    desc: "Looted from military zones, this keycard opens the keycard-gated military bunker — a high-tier dungeon rivaling helicopter crashes for endgame PvP.",
    tips: "Players camp the door. Listen for footsteps before inserting the key."
  },
  {
    id: "walkie",
    name: "Walkie-Talkie",
    effect: "Squad communication (T)",
    tier: "B",
    rarity: "Common",
    icon: "g-walkie",
    spawn: ["Police Department", "Stores"],
    desc: "Press T (PC) for squad comms. Coordinate group roles across long routes.",
    tips: "One squad member on logistics keeps fuel and meds covered."
  }
];

const VEHICLES = [
  {
    id: "santafe",
    name: "Hyundai Santa Fe",
    type: "SUV",
    rarity: "Common",
    seats: "4",
    fuel: "~4 Jerry Cans",
    icon: "g-suv",
    spawn: ["Roadside pull-offs", "Woodbury parking lots", "Gas stations"],
    desc: "A dependable family SUV. In TWD Online all vehicles behave identically under the hood — cosmetics are the only difference.",
    tips: "4 seats = move your whole squad on one tank."
  },
  {
    id: "mustang",
    name: "Mustang",
    type: "Exotic",
    rarity: "Rare",
    seats: "2",
    fuel: "~4 Jerry Cans",
    icon: "g-coupe",
    spawn: ["Rare roadside spawns", "Residential areas"],
    desc: "A rare exotic — flex value more than performance. Same fuel usage as every other vehicle.",
    tips: "2 seats only. Great for solo loot-route sprints."
  },
  {
    id: "vintage",
    name: "Vintage Coupe",
    type: "Coupe",
    rarity: "Common",
    seats: "2",
    fuel: "~4 Jerry Cans",
    icon: "g-coupe2",
    spawn: ["Woodbury outskirts", "Garages"],
    desc: "Classic two-door. Nothing special mechanically, but cheap to find and fun to drive.",
    tips: "A working car with a full tank beats the best car empty."
  },
  {
    id: "sedan",
    name: "Sedan (V3)",
    type: "Sedan",
    rarity: "Common",
    seats: "4",
    fuel: "~4 Jerry Cans",
    icon: "g-sedan",
    spawn: ["Roadside pull-offs", "Parking lots near Woodbury", "Gas stations"],
    desc: "The V3 staple — balanced speed and fuel use. The standard squad transport.",
    tips: "Best vehicle for solo players: speed to crash sites beats armor."
  },
  {
    id: "pickup",
    name: "Pickup / Utility (V3)",
    type: "Truck",
    rarity: "Common",
    seats: "2",
    fuel: "~4 Jerry Cans",
    icon: "g-pickup",
    spawn: ["Near National Guard areas", "Farms", "Military checkpoints"],
    desc: "Good off-road behaviour for crossing fields and fleeing checkpoint fights.",
    tips: "2 seats — pair with a dedicated passenger for loot protection."
  },
  {
    id: "emergency",
    name: "Emergency / Military Vehicle (V3)",
    type: "Military",
    rarity: "Rare",
    seats: "2",
    fuel: "~4 Jerry Cans",
    icon: "g-milvan",
    spawn: ["Military checkpoints", "Military Base"],
    desc: "Faster but attracts PvP attention. Community reports suggest it handles rough terrain better.",
    tips: "Expect to be chased. Bring a plate carrier and meds."
  }
];

const LOCATIONS = [
  {
    id: "woodbury",
    name: "Woodbury",
    zone: "Starter / Suburban",
    loot: "Low–Medium",
    pvp: "Low",
    walkers: "Moderate",
    tier: "Starter",
    icon: "g-town",
    desc: "Primary starter town and home of the Town Hall — a key pistol/rifle spawn. Residential loot: USP, bandages, melee, occasional backpacks.",
    tips: "Best zone to learn headshots and gear up for your first National Guard push."
  },
  {
    id: "farmland",
    name: "Farmland",
    zone: "Starter / Rural",
    loot: "Low",
    pvp: "Lowest",
    walkers: "Moderate",
    tier: "Starter",
    icon: "g-farm",
    desc: "Open agricultural starter zone with the lowest PvP risk on the map. A safe place to master the basics.",
    tips: "Skip forward quickly — food loot is thin here."
  },
  {
    id: "kingcounty",
    name: "King County",
    zone: "Landmark",
    loot: "Low–Medium",
    pvp: "Low–Medium",
    walkers: "Moderate",
    tier: "Beginner→Mid",
    icon: "g-town",
    desc: "Rick Grimes' hometown landmark. Shops offer decent food and medical loot; a natural mid-map transition zone.",
    tips: "Good stepping stone toward the Police Department."
  },
  {
    id: "prison",
    name: "Correctional Facility (Prison)",
    zone: "Mid-tier",
    loot: "Medium",
    pvp: "Medium",
    walkers: "High (indoors)",
    tier: "Mid",
    icon: "g-prison",
    desc: "Mixed firearms, A-tier medical supplies and moderate PvP traffic. Walkers cluster in cell blocks where melee headshots save ammo.",
    tips: "Second stop after Woodbury — clear cell blocks silently."
  },
  {
    id: "nationalguard",
    name: "National Guard Encampments",
    zone: "High-tier military",
    loot: "High",
    pvp: "High",
    walkers: "Moderate–High",
    tier: "Late-mid",
    icon: "g-camp",
    desc: "Multiple encampments spawning AK-47s, ACRs, rifle ammo, plate carriers and advanced med kits. Expect camping at tent spawns.",
    tips: "Group play dramatically improves survival odds here."
  },
  {
    id: "hospital",
    name: "Hospital (Location 11)",
    zone: "High-tier",
    loot: "High (Medical + AK-47)",
    pvp: "High",
    walkers: "Medium",
    tier: "Late-mid",
    icon: "g-hospital",
    desc: "Has the BEST AK-47 spawn on the map plus strong medical loot. Players fight over Location 11 constantly.",
    tips: "Clear the AK room first, then sweep the med wing."
  },
  {
    id: "radar",
    name: "Radar Station",
    zone: "Mid-tier",
    loot: "Medium–High",
    pvp: "Medium",
    walkers: "Medium",
    tier: "Mid",
    icon: "g-radar",
    desc: "Spawning ground for Glock 17, M4A1, Springfield and even Colt Python. A rifle-farming favourite.",
    tips: "Low-friction alternative to National Guard when servers are hot."
  },
  {
    id: "militarybase",
    name: "Military Base",
    zone: "End-game",
    loot: "Very High",
    pvp: "Very High",
    walkers: "High",
    tier: "End-game",
    icon: "g-military",
    desc: "Best static loot in the game — M24 snipers, Springfield rifles, plate carriers, military meds. The most contested POI on the map.",
    tips: "Solo runs are extremely risky. Bring plate carrier, full meds, S-tier weapon and a squad."
  },
  {
    id: "bunker",
    name: "Military Bunker",
    zone: "Dungeon",
    loot: "Very High",
    pvp: "Extreme",
    walkers: "None (players only)",
    tier: "End-game",
    icon: "g-bunker",
    desc: "Keycard-gated military dungeon: armory (AK-47/ACR rolls), supply closets, armor racks. Narrow corridors favour defenders with SMGs/shotguns.",
    tips: "Prioritise weapon → plate carrier → meds → ammo on extraction. Teammates must cover body recovery."
  },
  {
    id: "sanctuary",
    name: "Sanctuary",
    zone: "Safe hub",
    loot: "—",
    pvp: "Safe zone",
    walkers: "None",
    tier: "Hub",
    icon: "g-shield",
    desc: "The V3 safe hub for grouping up and planning runs. Neutral ground between POIs.",
    tips: "Use it to re-stock, coordinate factions and plan your next loot route."
  },
  {
    id: "alexandria",
    name: "Alexandria",
    zone: "Community",
    loot: "High (Food & Medical)",
    pvp: "Medium",
    walkers: "Medium",
    tier: "Mid",
    icon: "g-town",
    desc: "High-value food and medical loot from the show's walled community.",
    tips: "A safe-ish food run on the way to the Hospital."
  },
  {
    id: "hilltop",
    name: "Hilltop",
    zone: "Community",
    loot: "Medium",
    pvp: "Medium",
    walkers: "Medium",
    tier: "Mid",
    icon: "g-farm",
    desc: "Mid-tier community POI. Decent food and supply caches away from the hottest military zones.",
    tips: "Quiet second stop if the Prison feels crowded."
  },
  {
    id: "terminus",
    name: "Terminus",
    zone: "Landmark",
    loot: "Medium",
    pvp: "Medium",
    walkers: "Medium",
    tier: "Mid",
    icon: "g-terminus",
    desc: "Southwest map landmark with unique routing. Keep to the fences — players love ambushing the gates.",
    tips: "Never follow a stranger into Terminus. The menu is the menu."
  },
  {
    id: "pd",
    name: "Police Department",
    zone: "Mid-tier",
    loot: "Medium–High",
    pvp: "Medium",
    walkers: "Medium",
    tier: "Mid",
    icon: "g-police",
    desc: "Strong weapons and tactical gear: sidearms, nightsticks, vests, and an occasional walkie-talkie.",
    tips: "Good stepping stone before National Guard camps."
  },
  {
    id: "helicrash",
    name: "Helicopter Crashes",
    zone: "Dynamic event",
    loot: "Very High (dynamic)",
    pvp: "Extreme",
    walkers: "Variable",
    tier: "End-game",
    icon: "g-helicopter",
    desc: "Dynamic events spawning top-tier military weapons at random map locations. Temporary PvP hotspots rivaling the Military Base.",
    tips: "M24 + plate carrier + full meds required. Control high ground before pushing."
  }
];

const GAMEPASSES = [
  { name: "Frogman Corps (Outfit)", price: "699 R$", desc: "Combat / frogman suit with hood and face wrap.", img: "" },
  { name: "Ghillie Suit — Snow (Outfit)", price: "699 R$", desc: "White snow-pattern ghillie camouflage suit.", img: "assets/img/gamepasses/gamepass_ghillie.png" },
  { name: "Deputy Sheriff (Outfit)", price: "299 R$", desc: "Sheriff uniform — tan / yellow clothing with a cowboy hat.", img: "" },
  { name: "National Guard (Outfit)", price: "299 R$", desc: "National Guard military outfit in camouflage pattern (with rifle).", img: "" }
];

const STARTER_PACKS = [
  { name: "The Fire Fighter", de: "Der Feuerwehrmann", price: "99 R$", content: ["Firefighter helmet & vest", "Fire axe", "Bottled water", "Jerry can (fuel)"], icon: "g-helmet2" },
  { name: "The Marauder", de: "Der Plünderer", price: "299 R$", content: ["Baseball bat", "Crossbody bag / backpack", "Motorcycle helmet", "Pistol", "Bottled water"], icon: "g-bat" },
  { name: "The Deputy", de: "Der Stellvertreter", price: "399 R$", content: ["Pistol (Beretta M9)", "Nightstick (baton)", "Black bulletproof vest", "Bandage", "Bottled water"], icon: "g-nightstick" },
  { name: "The Veteran", de: "Der Veteran", price: "499 R$", content: ["Pistol (M1911)", "Military machete", "M1 military helmet", "Bandage", "MRE"], icon: "g-machete" }
];

const CONTROLS = [
  { keys: ["W", "A", "S", "D"], action: "Move", group: "Movement" },
  { keys: ["Left Shift"], action: "Sprint", group: "Movement" },
  { keys: ["Space"], action: "Jump / exit vehicle", group: "Movement" },
  { keys: ["C"], action: "Crouch", group: "Movement" },
  { keys: ["M"], action: "Open world map (V3)", group: "Map" },
  { keys: ["Left Mouse"], action: "Interact / shoot", group: "Combat" },
  { keys: ["Right Mouse"], action: "Camera / aim down sights", group: "Combat" },
  { keys: ["R"], action: "Reload", group: "Combat" },
  { keys: ["F"], action: "Enter / leave Fight Mode", group: "Combat" },
  { keys: ["X"], action: "Kick (Fight Mode)", group: "Combat" },
  { keys: ["Q"], action: "Lower gun", group: "Combat" },
  { keys: ["E"], action: "Pick up objects / open doors", group: "Interaction" },
  { keys: ["G"], action: "Open inventory", group: "Interaction" },
  { keys: ["Left Alt"], action: "Open gestures menu", group: "Interaction" },
  { keys: ["Backspace"], action: "Drop held item", group: "Interaction" },
  { keys: ["T"], action: "Walkie-talkie (squad comms)", group: "Interaction" },
  { keys: ["X"], action: "Car ignition", group: "Vehicle" },
  { keys: ["P"], action: "Park brake", group: "Vehicle" },
  { keys: ["Space"], action: "Get out of vehicle", group: "Vehicle" }
];

const TIERS_FIREARM = [
  { tier: "S", cls: "s", label: "S-TIER", note: "Meta picks. Dominant in PvP and walker headshot efficiency.", items: ["AK-47", "ACR", "M24"] },
  { tier: "A", cls: "a", label: "A-TIER", note: "Strong in most situations, missing the top-end dominance.", items: ["Glock 17", "Desert Eagle", "M4A1", "M16", "M16A1", "Springfield", "Shotguns"] },
  { tier: "B", cls: "b", label: "B-TIER", note: "Solid starters and sidearms — replace on military routes.", items: ["USP", "M17", "Beretta M9", "Colt Python"] },
  { tier: "C", cls: "c", label: "C-TIER", note: "Nerfed or niche. Fine early, outclassed fast.", items: ["M1911"] },
  { tier: "D", cls: "d", label: "D-TIER", note: "Replace immediately: jammed/empty guns, improvised-only loadouts.", items: ["Broken / empty firearms", "Melee-only military runs"] }
];

const VERSIONS = [
  { version: "1.3.20", date: "May 2024", note: "Added St. John's Dairy Farm. Updated main menu graphics. Rebalanced food item spawns." },
  { version: "2.0", date: "2024–2025", note: "Major map overhaul with a new location map. New gamepasses: Custom Character+ and Walker Mode." },
  { version: "3 / Early Access", date: "2025–2026", note: "New experience ID 128039018996175. Vehicles, named map POIs, Sanctuary safe hub, Military Base, bunker dungeon, helicopter crashes, inventory + gear systems (backpack, plate carrier)." }
];

const GAMEPLAY_CLIPS = [
  { id: "osrZPhAG0NQ", title: "TWD Online 3 — Gameplay (Roblox)", author: "YouTube" },
  { id: "jVOGmhNVguA", title: "TWD Online 3 [BETA] V3", author: "YouTube" },
  { id: "8Iny_3S1wGA", title: "Surviving the Zombie Apocalypse", author: "DariusT_Gaming" }
];
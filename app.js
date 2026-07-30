/* MyPokeHome Application Logic */

// --- Constants & Game Metadata ---
const GAMES = {
  all: { name: 'All Games', logo: 'HOME', region: 'All' },
  red: { name: 'Pokémon Red', logo: 'GB', region: 'Kanto' },
  blue: { name: 'Pokémon Blue', logo: 'GB', region: 'Kanto' },
  yellow: { name: 'Pokémon Yellow', logo: 'GBC', region: 'Kanto' },
  gold: { name: 'Pokémon Gold', logo: 'GBC', region: 'Johto' },
  silver: { name: 'Pokémon Silver', logo: 'GBC', region: 'Johto' },
  crystal: { name: 'Pokémon Crystal', logo: 'GBC', region: 'Johto' },
  ruby: { name: 'Pokémon Ruby', logo: 'GBA', region: 'Hoenn' },
  sapphire: { name: 'Pokémon Sapphire', logo: 'GBA', region: 'Hoenn' },
  emerald: { name: 'Pokémon Emerald', logo: 'GBA', region: 'Hoenn' },
  firered: { name: 'Pokémon FireRed', logo: 'GBA', region: 'Kanto' },
  leafgreen: { name: 'Pokémon LeafGreen', logo: 'GBA', region: 'Kanto' },
  diamond: { name: 'Pokémon Diamond', logo: 'DS', region: 'Sinnoh' },
  pearl: { name: 'Pokémon Pearl', logo: 'DS', region: 'Sinnoh' },
  platinum: { name: 'Pokémon Platinum', logo: 'DS', region: 'Sinnoh' },
  heartgold: { name: 'Pokémon HeartGold', logo: 'DS', region: 'Johto/Kanto' },
  soulsilver: { name: 'Pokémon SoulSilver', logo: 'DS', region: 'Johto/Kanto' },
  black: { name: 'Pokémon Black', logo: 'DS', region: 'Unova' },
  white: { name: 'Pokémon White', logo: 'DS', region: 'Unova' },
  black2: { name: 'Pokémon Black 2', logo: 'DS', region: 'Unova' },
  white2: { name: 'Pokémon White 2', logo: 'DS', region: 'Unova' },
  x: { name: 'Pokémon X', logo: '3DS', region: 'Kalos' },
  y: { name: 'Pokémon Y', logo: '3DS', region: 'Kalos' },
  omega_ruby: { name: 'Pokémon Omega Ruby', logo: '3DS', region: 'Hoenn' },
  alpha_sapphire: { name: 'Pokémon Alpha Sapphire', logo: '3DS', region: 'Hoenn' },
  sun: { name: 'Pokémon Sun', logo: '3DS', region: 'Alola' },
  moon: { name: 'Pokémon Moon', logo: '3DS', region: 'Alola' },
  ultra_sun: { name: 'Pokémon Ultra Sun', logo: '3DS', region: 'Alola' },
  ultra_moon: { name: 'Pokémon Ultra Moon', logo: '3DS', region: 'Alola' }
};

// Curated Achievements lists
const ACHIEVEMENTS = {
  red: [
    { id: 'r1', title: 'Boulder Badge', desc: 'Defeated Brock in Pewter City Gym' },
    { id: 'r2', title: 'Earth Badge', desc: 'Defeated Giovanni in Viridian City Gym' },
    { id: 'r3', title: 'Indigo Champion', desc: 'Defeated the Elite Four and your rival' },
    { id: 'r4', title: 'The Genetic Pokémon', desc: 'Caught Mewtwo in Cerulean Cave' }
  ],
  blue: [
    { id: 'b1', title: 'Boulder Badge', desc: 'Defeated Brock in Pewter City Gym' },
    { id: 'b2', title: 'Earth Badge', desc: 'Defeated Giovanni in Viridian City Gym' },
    { id: 'b3', title: 'Indigo Champion', desc: 'Defeated the Elite Four and your rival' },
    { id: 'b4', title: 'The Genetic Pokémon', desc: 'Caught Mewtwo in Cerulean Cave' }
  ],
  yellow: [
    { id: 'y1', title: 'Surfing Pikachu', desc: 'Obtained a Pikachu that knows Surf' },
    { id: 'y2', title: 'Three Starters', desc: 'Obtained Bulbasaur, Charmander, and Squirtle' },
    { id: 'y3', title: 'Indigo Champion', desc: 'Defeated the Elite Four and Blue' },
    { id: 'y4', title: 'The Genetic Pokémon', desc: 'Caught Mewtwo in Cerulean Cave' }
  ],
  gold: [
    { id: 'g1', title: 'Champion of Johto', desc: 'Defeated Lance and the Elite Four' },
    { id: 'g2', title: 'Redemption', desc: 'Defeated Red atop Mt. Silver' },
    { id: 'g3', title: 'Rainbow Wing', desc: 'Caught Ho-Oh at the Tin Tower' }
  ],
  silver: [
    { id: 's1', title: 'Champion of Johto', desc: 'Defeated Lance and the Elite Four' },
    { id: 's2', title: 'Redemption', desc: 'Defeated Red atop Mt. Silver' },
    { id: 's3', title: 'Silver Wing', desc: 'Caught Lugia in the Whirl Islands' }
  ],
  crystal: [
    { id: 'c1', title: 'Suicune\'s Chosen', desc: 'Caught Suicune at the Tin Tower' },
    { id: 'c2', title: 'Redemption', desc: 'Defeated Red atop Mt. Silver' },
    { id: 'c3', title: 'Unown Scholar', desc: 'Caught all 26 variants of Unown' }
  ],
  ruby: [
    { id: 'ru1', title: 'Hoenn Champion', desc: 'Defeated Steven Stone and the Elite Four' },
    { id: 'ru2', title: 'Groudon\'s Wrath', desc: 'Caught Groudon in the Cave of Origin' },
    { id: 'ru3', title: 'Sky Pillar Titan', desc: 'Caught Rayquaza at the Sky Pillar' }
  ],
  sapphire: [
    { id: 'sa1', title: 'Hoenn Champion', desc: 'Defeated Steven Stone and the Elite Four' },
    { id: 'sa2', title: 'Kyogre\'s Calm', desc: 'Caught Kyogre in the Cave of Origin' },
    { id: 'sa3', title: 'Sky Pillar Titan', desc: 'Caught Rayquaza at the Sky Pillar' }
  ],
  emerald: [
    { id: 'em1', title: 'Hoenn Champion', desc: 'Defeated Wallace and the Elite Four' },
    { id: 'em2', title: 'Battle Frontier Conqueror', desc: 'Obtained a Silver or Gold Symbol' },
    { id: 'em3', title: 'Sky Pillar Titan', desc: 'Caught Rayquaza at the Sky Pillar' }
  ],
  firered: [
    { id: 'fr1', title: 'Kanto Champion', desc: 'Defeated the Elite Four and your rival' },
    { id: 'fr2', title: 'Network Link', desc: 'Completed the Network Machine in One Island' },
    { id: 'fr3', title: 'Genetic Pokémon', desc: 'Caught Mewtwo in Cerulean Cave' }
  ],
  leafgreen: [
    { id: 'lg1', title: 'Kanto Champion', desc: 'Defeated the Elite Four and your rival' },
    { id: 'lg2', title: 'Network Link', desc: 'Completed the Network Machine in One Island' },
    { id: 'lg3', title: 'Genetic Pokémon', desc: 'Caught Mewtwo in Cerulean Cave' }
  ],
  diamond: [
    { id: 'di1', title: 'Sinnoh Champion', desc: 'Defeated Cynthia and the Elite Four' },
    { id: 'di2', title: 'Time Lord', desc: 'Caught Dialga at Spear Pillar' }
  ],
  pearl: [
    { id: 'pe1', title: 'Sinnoh Champion', desc: 'Defeated Cynthia and the Elite Four' },
    { id: 'pe2', title: 'Space Lord', desc: 'Caught Palkia at Spear Pillar' }
  ],
  platinum: [
    { id: 'pl1', title: 'Sinnoh Champion', desc: 'Defeated Cynthia and the Elite Four' },
    { id: 'pl2', title: 'Renegade Titan', desc: 'Caught Giratina in the Distortion World' },
    { id: 'pl3', title: 'Villa Owner', desc: 'Fully furnished the Resort Area Villa' }
  ],
  heartgold: [
    { id: 'hg1', title: 'Apex Trainer', desc: 'Defeated Red atop Mt. Silver' },
    { id: 'hg2', title: 'Ho-Oh Awakened', desc: 'Caught Ho-Oh at Bell Tower' },
    { id: 'hg3', title: 'Kanto Explorer', desc: 'Earned all 8 Kanto Gym Badges' }
  ],
  soulsilver: [
    { id: 'ss1', title: 'Apex Trainer', desc: 'Defeated Red atop Mt. Silver' },
    { id: 'ss2', title: 'Lugia Awakened', desc: 'Caught Lugia at Whirl Islands' },
    { id: 'ss3', title: 'Kanto Explorer', desc: 'Earned all 8 Kanto Gym Badges' }
  ],
  black: [
    { id: 'bl1', title: 'Ideal Hero', desc: 'Defeated N and Ghetsis at N\'s Castle' },
    { id: 'bl2', title: 'Unova Champion', desc: 'Defeated Alder and the Elite Four' },
    { id: 'bl3', title: 'Deep White', desc: 'Caught Reshiram at N\'s Castle' }
  ],
  white: [
    { id: 'wh1', title: 'Ideal Hero', desc: 'Defeated N and Ghetsis at N\'s Castle' },
    { id: 'wh2', title: 'Unova Champion', desc: 'Defeated Alder and the Elite Four' },
    { id: 'wh3', title: 'Deep Black', desc: 'Caught Zekrom at N\'s Castle' }
  ],
  black2: [
    { id: 'bk2_1', title: 'Black Tower Champion', desc: 'Defeated Benga in the Black Tower Area 10' },
    { id: 'bk2_2', title: 'W2/B2 Champion', desc: 'Defeated Iris and the Elite Four' },
    { id: 'bk2_3', title: 'Kyurem Reborn', desc: 'Caught Kyurem in the Giant Chasm' }
  ],
  white2: [
    { id: 'wt2_1', title: 'White Treehollow Champion', desc: 'Defeated Benga in the White Treehollow Area 10' },
    { id: 'wt2_2', title: 'W2/B2 Champion', desc: 'Defeated Iris and the Elite Four' },
    { id: 'wt2_3', title: 'Kyurem Reborn', desc: 'Caught Kyurem in the Giant Chasm' }
  ],
  x: [
    { id: 'x1', title: 'Kalos Champion', desc: 'Defeated Diantha and the Elite Four' },
    { id: 'x2', title: 'Mega Evolver', desc: 'Obtained the Mega Ring and defeated Korrina' }
  ],
  y: [
    { id: 'y1', title: 'Kalos Champion', desc: 'Defeated Diantha and the Elite Four' },
    { id: 'y2', title: 'Mega Evolver', desc: 'Obtained the Mega Ring and defeated Korrina' }
  ],
  omega_ruby: [
    { id: 'or1', title: 'Delta Episode Conqueror', desc: 'Completed the Delta Episode and caught Deoxys' },
    { id: 'or2', title: 'Hoenn Champion', desc: 'Defeated Steven and the Elite Four' }
  ],
  alpha_sapphire: [
    { id: 'as1', title: 'Delta Episode Conqueror', desc: 'Completed the Delta Episode and caught Deoxys' },
    { id: 'as2', title: 'Hoenn Champion', desc: 'Defeated Steven and the Elite Four' }
  ],
  sun: [
    { id: 'su1', title: 'First Alola Champion', desc: 'Defeated Professor Kukui to establish the League' },
    { id: 'su2', title: 'Island Challenge Champion', desc: 'Defeated all 4 Kahunas' }
  ],
  moon: [
    { id: 'mo1', title: 'First Alola Champion', desc: 'Defeated Professor Kukui to establish the League' },
    { id: 'mo2', title: 'Island Challenge Champion', desc: 'Defeated all 4 Kahunas' }
  ],
  ultra_sun: [
    { id: 'us1', title: 'Light Master', desc: 'Defeated Necrozma in Ultra Megalopolis' },
    { id: 'us2', title: 'Rainbow Rocket Defeated', desc: 'Defeated Giovanni and Team Rainbow Rocket' }
  ],
  ultra_moon: [
    { id: 'um1', title: 'Light Master', desc: 'Defeated Necrozma in Ultra Megalopolis' },
    { id: 'um2', title: 'Rainbow Rocket Defeated', desc: 'Defeated Giovanni and Team Rainbow Rocket' }
  ]
};

// Fallback species list (Gen 1-2 + popular starters/legendaries) for offline first-load
const FALLBACK_SPECIES = [
  { name: "bulbasaur", id: 1 }, { name: "ivysaur", id: 2 }, { name: "venusaur", id: 3 },
  { name: "charmander", id: 4 }, { name: "charmeleon", id: 5 }, { name: "charizard", id: 6 },
  { name: "squirtle", id: 7 }, { name: "wartortle", id: 8 }, { name: "blastoise", id: 9 },
  { name: "caterpie", id: 10 }, { name: "metapod", id: 11 }, { name: "butterfree", id: 12 },
  { name: "weedle", id: 13 }, { name: "kakuna", id: 14 }, { name: "beedrill", id: 15 },
  { name: "pidgey", id: 16 }, { name: "pidgeotto", id: 17 }, { name: "pidgeot", id: 18 },
  { name: "rattata", id: 19 }, { name: "raticate", id: 20 }, { name: "spearow", id: 21 },
  { name: "fearow", id: 22 }, { name: "ekans", id: 23 }, { name: "arbok", id: 24 },
  { name: "pikachu", id: 25 }, { name: "raichu", id: 26 }, { name: "sandshrew", id: 27 },
  { name: "sandslash", id: 28 }, { name: "nidoran-f", id: 29 }, { name: "nidorina", id: 30 },
  { name: "nidoqueen", id: 31 }, { name: "nidoran-m", id: 32 }, { name: "nidorino", id: 33 },
  { name: "nidoking", id: 34 }, { name: "clefairy", id: 35 }, { name: "clefable", id: 36 },
  { name: "vulpix", id: 37 }, { name: "ninetales", id: 38 }, { name: "jigglypuff", id: 39 },
  { name: "wigglytuff", id: 40 }, { name: "zubat", id: 41 }, { name: "golbat", id: 42 },
  { name: "oddish", id: 43 }, { name: "gloom", id: 44 }, { name: "vileplume", id: 45 },
  { name: "paras", id: 46 }, { name: "parasect", id: 47 }, { name: "venonat", id: 48 },
  { name: "venomoth", id: 49 }, { name: "diglett", id: 50 }, { name: "dugtrio", id: 51 },
  { name: "meowth", id: 52 }, { name: "persian", id: 53 }, { name: "psyduck", id: 54 },
  { name: "golduck", id: 55 }, { name: "mankey", id: 56 }, { name: "primeape", id: 57 },
  { name: "growlithe", id: 58 }, { name: "arcanine", id: 59 }, { name: "poliwag", id: 60 },
  { name: "poliwhirl", id: 61 }, { name: "poliwrath", id: 62 }, { name: "abra", id: 63 },
  { name: "kadabra", id: 64 }, { name: "alakazam", id: 65 }, { name: "machop", id: 66 },
  { name: "machoke", id: 67 }, { name: "machamp", id: 68 }, { name: "bellsprout", id: 69 },
  { name: "weepinbell", id: 70 }, { name: "victreebel", id: 71 }, { name: "tentacool", id: 72 },
  { name: "tentacruel", id: 73 }, { name: "geodude", id: 74 }, { name: "graveler", id: 75 },
  { name: "golem", id: 76 }, { name: "ponyta", id: 77 }, { name: "rapidash", id: 78 },
  { name: "slowpoke", id: 79 }, { name: "slowbro", id: 80 }, { name: "magnemite", id: 81 },
  { name: "magneton", id: 82 }, { name: "farfetchd", id: 83 }, { name: "doduo", id: 84 },
  { name: "dodrio", id: 85 }, { name: "seel", id: 86 }, { name: "dewgong", id: 87 },
  { name: "grimer", id: 88 }, { name: "muk", id: 89 }, { name: "shellder", id: 90 },
  { name: "cloyster", id: 91 }, { name: "gastly", id: 92 }, { name: "haunter", id: 93 },
  { name: "gengar", id: 94 }, { name: "onix", id: 95 }, { name: "drowzee", id: 96 },
  { name: "hypno", id: 97 }, { name: "krabby", id: 98 }, { name: "kingler", id: 99 },
  { name: "voltorb", id: 100 }, { name: "electrode", id: 101 }, { name: "exeggcute", id: 102 },
  { name: "exeggcutor", id: 103 }, { name: "cubone", id: 104 }, { name: "marowak", id: 105 },
  { name: "hitmonlee", id: 106 }, { name: "hitmonchan", id: 107 }, { name: "lickitung", id: 108 },
  { name: "koffing", id: 109 }, { name: "weezing", id: 110 }, { name: "rhyhorn", id: 111 },
  { name: "rhydon", id: 112 }, { name: "chansey", id: 113 }, { name: "tangela", id: 114 },
  { name: "kangaskhan", id: 115 }, { name: "horsea", id: 116 }, { name: "seadra", id: 117 },
  { name: "goldeen", id: 118 }, { name: "seaking", id: 119 }, { name: "staryu", id: 120 },
  { name: "starmie", id: 121 }, { name: "mr-mime", id: 122 }, { name: "scyther", id: 123 },
  { name: "jynx", id: 124 }, { name: "electabuzz", id: 125 }, { name: "magmar", id: 126 },
  { name: "pinsir", id: 127 }, { name: "tauros", id: 128 }, { name: "magikarp", id: 129 },
  { name: "gyarados", id: 130 }, { name: "lapras", id: 131 }, { name: "ditto", id: 132 },
  { name: "eevee", id: 133 }, { name: "vaporeon", id: 134 }, { name: "jolteon", id: 135 },
  { name: "flareon", id: 136 }, { name: "porygon", id: 137 }, { name: "omanyte", id: 138 },
  { name: "omastar", id: 139 }, { name: "kabuto", id: 140 }, { name: "kabutops", id: 141 },
  { name: "aerodactyl", id: 142 }, { name: "snorlax", id: 143 }, { name: "articuno", id: 144 },
  { name: "zapdos", id: 145 }, { name: "moltres", id: 146 }, { name: "dratini", id: 147 },
  { name: "dragonair", id: 148 }, { name: "dragonite", id: 149 }, { name: "mewtwo", id: 150 },
  { name: "mew", id: 151 }, { name: "chikorita", id: 152 }, { name: "cyndaquil", id: 155 },
  { name: "totodile", id: 158 }, { name: "lugia", id: 249 }, { name: "ho-oh", id: 250 },
  { name: "celebi", id: 251 }, { name: "treecko", id: 252 }, { name: "torchic", id: 255 },
  { name: "mudkip", id: 258 }, { name: "rayquaza", id: 384 }, { name: "arceus", id: 493 }
];

// Pokéball asset mapper
const POKEBALL_ICONS = {
  'poke-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  'great-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
  'ultra-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
  'master-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
  'safari-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/safari-ball.png',
  'sport-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sport-ball.png',
  'net-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/net-ball.png',
  'dive-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dive-ball.png',
  'nest-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/nest-ball.png',
  'repeat-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/repeat-ball.png',
  'timer-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/timer-ball.png',
  'luxury-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/luxury-ball.png',
  'premier-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png',
  'dusk-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-ball.png',
  'heal-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/heal-ball.png',
  'quick-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/quick-ball.png',
  'cherish-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cherish-ball.png'
};

// --- IndexedDB Controller ---
class MyPokeHomeDB {
  constructor() {
    this.dbName = 'MyPokeHomeDB';
    this.version = 1;
    this.db = null;
    this.useFallback = false;
    this.fallbackData = {
      pokemon: {},
      achievements: {},
      settings: {},
      species: {}
    };
  }

  init() {
    return new Promise((resolve) => {
      try {
        if (!window.indexedDB) {
          throw new Error('IndexedDB not supported');
        }
        const request = indexedDB.open(this.dbName, this.version);
        
        request.onerror = (event) => {
          console.warn('Database failed to open: ' + event.target.error + '. Using LocalStorage fallback.');
          this.setupFallback();
          resolve(this);
        };
        
        request.onsuccess = (event) => {
          this.db = event.target.result;
          resolve(this);
        };
        
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          
          // Pokemon store
          if (!db.objectStoreNames.contains('pokemon')) {
            db.createObjectStore('pokemon', { keyPath: 'id', autoIncrement: true });
          }
          // Achievements store
          if (!db.objectStoreNames.contains('achievements')) {
            db.createObjectStore('achievements', { keyPath: 'id' });
          }
          // Settings store
          if (!db.objectStoreNames.contains('settings')) {
            db.createObjectStore('settings');
          }
          // Species list cache store
          if (!db.objectStoreNames.contains('species')) {
            db.createObjectStore('species', { keyPath: 'name' });
          }
        };
      } catch (err) {
        console.warn('Database initialization blocked. Using LocalStorage fallback.', err);
        this.setupFallback();
        resolve(this);
      }
    });
  }

  setupFallback() {
    this.useFallback = true;
    try {
      const p = localStorage.getItem('mypokehome_fb_pokemon');
      const a = localStorage.getItem('mypokehome_fb_achievements');
      const s = localStorage.getItem('mypokehome_fb_settings');
      const sp = localStorage.getItem('mypokehome_fb_species');

      if (p) this.fallbackData.pokemon = JSON.parse(p);
      if (a) this.fallbackData.achievements = JSON.parse(a);
      if (s) this.fallbackData.settings = JSON.parse(s);
      if (sp) this.fallbackData.species = JSON.parse(sp);
    } catch (e) {
      console.error('LocalStorage fallback also failed:', e);
    }
  }

  saveFallback(storeName) {
    if (!this.useFallback) return;
    try {
      localStorage.setItem(`mypokehome_fb_${storeName}`, JSON.stringify(this.fallbackData[storeName]));
    } catch (e) {
      console.error('Failed to write to LocalStorage:', e);
    }
  }

  // General Store Operations
  getAll(storeName) {
    if (this.useFallback) {
      return Promise.resolve(Object.values(this.fallbackData[storeName]));
    }
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  get(storeName, key) {
    if (this.useFallback) {
      return Promise.resolve(this.fallbackData[storeName][key]);
    }
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  put(storeName, value, key) {
    if (this.useFallback) {
      let actualKey = key;
      if (actualKey === undefined) {
        if (value.id !== undefined) {
          actualKey = value.id;
        } else {
          const keys = Object.keys(this.fallbackData[storeName]).map(Number).filter(n => !isNaN(n));
          actualKey = keys.length > 0 ? Math.max(...keys) + 1 : 1;
          value.id = actualKey;
        }
      }
      this.fallbackData[storeName][actualKey] = value;
      this.saveFallback(storeName);
      return Promise.resolve(actualKey);
    }
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const req = key !== undefined ? store.put(value, key) : store.put(value);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  delete(storeName, key) {
    if (this.useFallback) {
      delete this.fallbackData[storeName][key];
      this.saveFallback(storeName);
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  clear(storeName) {
    if (this.useFallback) {
      this.fallbackData[storeName] = {};
      this.saveFallback(storeName);
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }
}

// --- Main Application Controller ---
const App = {
  db: null,
  pokemonList: [],
  achievementsData: {},
  settings: {
    activeBox: 1,
    wallpaper: 'forest',
    pinnedParty: [null, null, null, null, null, null],
    lastBackup: null
  },
  speciesCache: [],
  selectedPokemon: null,
  activeSlot: null,
  currentTab: 'box-view',
  gameFilter: 'all',
  editingId: null,

  async start() {
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW registration failed:', err));
    }

    // Init DB
    this.db = new MyPokeHomeDB();
    await this.db.init();

    // Load user settings, pokemon and achievements
    await this.loadSettings();
    await this.loadPokemon();
    await this.loadAchievements();

    // Cache species data from API or fallbacks
    await this.loadSpeciesCache();

    // Render Initial UI
    this.renderHeaderOptions();
    this.renderStats();
    this.renderPartyShowcase();
    this.renderPCBox();
    
    // Set initial select values
    document.getElementById('wallpaper-select').value = this.settings.wallpaper;

    this.setupEventListeners();
    this.checkBackupInterval();
  },

  async loadSettings() {
    try {
      const savedSettings = await this.db.get('settings', 'userConfig');
      if (savedSettings) {
        this.settings = { ...this.settings, ...savedSettings };
      }
    } catch (e) {
      console.warn("Failed to load settings:", e);
    }
  },

  async saveSettings() {
    await this.db.put('settings', this.settings, 'userConfig');
  },

  async loadPokemon() {
    this.pokemonList = await this.db.getAll('pokemon');
  },

  async loadAchievements() {
    const list = await this.db.getAll('achievements');
    list.forEach(item => {
      this.achievementsData[item.id] = item.completed;
    });
  },

  async loadSpeciesCache() {
    try {
      const cached = await this.db.getAll('species');
      if (cached.length > 0) {
        this.speciesCache = cached;
      } else {
        // Fetch from PokeAPI
        const res = await fetch('https://pokeapi.co/api/v2/pokemon-species?limit=1025');
        const data = await res.json();
        const formatted = data.results.map((item, index) => ({
          name: item.name,
          id: index + 1
        }));
        
        // Batch write to IndexedDB
        for (const spec of formatted) {
          await this.db.put('species', spec);
        }
        this.speciesCache = formatted;
      }
    } catch (e) {
      console.warn("Species fetch failed, using fallback list:", e);
      this.speciesCache = FALLBACK_SPECIES;
    }
  },

  renderHeaderOptions() {
    // Populate forms game selector
    const formGame = document.getElementById('form-game');
    formGame.innerHTML = '';
    
    // Group options by generation
    const optgroups = {};
    for (const [key, details] of Object.entries(GAMES)) {
      if (key === 'all') continue;
      const genLabel = details.logo === 'GB' || details.logo === 'GBC' ? 'Classic Game Boy' :
                       details.logo === 'GBA' ? 'Game Boy Advance' :
                       details.logo === 'DS' ? 'Nintendo DS' : 'Nintendo 3DS';
      
      if (!optgroups[genLabel]) optgroups[genLabel] = [];
      optgroups[genLabel].push({ key, name: details.name });
    }

    for (const [groupLabel, options] of Object.entries(optgroups)) {
      const groupEl = document.createElement('optgroup');
      groupEl.label = groupLabel;
      options.forEach(opt => {
        const optionEl = document.createElement('option');
        optionEl.value = opt.key;
        optionEl.textContent = opt.name;
        groupEl.appendChild(optionEl);
      });
      formGame.appendChild(groupEl);
    }

    // Populate Box selectors
    const formBox = document.getElementById('form-box');
    formBox.innerHTML = '';
    for (let i = 1; i <= 20; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `Box ${i}`;
      formBox.appendChild(opt);
    }
  },

  renderStats() {
    // Filter active items
    const filteredList = this.gameFilter === 'all' 
      ? this.pokemonList 
      : this.pokemonList.filter(p => p.game === this.gameFilter);
    
    document.getElementById('stat-total-count').textContent = filteredList.length;
    
    const shinyCount = filteredList.filter(p => p.shiny).length;
    document.getElementById('stat-shiny-count').textContent = shinyCount;

    // Dex progress
    const uniqueIds = new Set(filteredList.map(p => p.dexId));
    // Determine target size based on game gen
    let maxDex = 1025;
    if (this.gameFilter !== 'all') {
      const platform = GAMES[this.gameFilter].logo;
      if (platform === 'GB' || platform === 'GBC') maxDex = 251;
      else if (platform === 'GBA') maxDex = 386;
      else if (platform === 'DS') maxDex = 649;
    }
    const dexPercent = maxDex > 0 ? Math.min(100, Math.round((uniqueIds.size / maxDex) * 100)) : 0;
    document.getElementById('stat-dex-percent').textContent = `${dexPercent}%`;

    // Achievement count
    let activeAchievements = [];
    if (this.gameFilter === 'all') {
      // Collect all
      Object.keys(ACHIEVEMENTS).forEach(gk => {
        activeAchievements = activeAchievements.concat(ACHIEVEMENTS[gk]);
      });
    } else {
      activeAchievements = ACHIEVEMENTS[this.gameFilter] || [];
    }

    const completedCount = activeAchievements.filter(ach => this.achievementsData[ach.id]).length;
    document.getElementById('stat-badges-count').textContent = `${completedCount}/${activeAchievements.length}`;
  },

  renderPartyShowcase() {
    const grid = document.getElementById('party-grid');
    grid.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
      const partyItem = this.settings.pinnedParty[i];
      const slotEl = document.createElement('div');
      slotEl.className = 'party-slot';
      slotEl.dataset.slotIndex = i;
      
      const tagEl = document.createElement('span');
      tagEl.className = 'party-slot-tag';
      tagEl.textContent = `I${'I'.repeat(i)}`;
      slotEl.appendChild(tagEl);

      if (partyItem) {
        slotEl.classList.add('active-party');
        
        const spriteUrl = this.getSpriteUrl(partyItem.dexId, partyItem.shiny, partyItem.variant);
        const img = document.createElement('img');
        img.className = 'party-sprite';
        img.src = spriteUrl;
        img.alt = partyItem.name;
        img.loading = 'lazy';
        
        const name = document.createElement('span');
        name.className = 'party-name';
        name.textContent = partyItem.nickname || partyItem.name;
        
        slotEl.appendChild(img);
        slotEl.appendChild(name);

        slotEl.addEventListener('click', () => {
          this.showPokemonSummary(partyItem);
        });
      } else {
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-plus party-empty-icon';
        const txt = document.createElement('p');
        txt.textContent = 'Empty Slot';
        
        slotEl.appendChild(icon);
        slotEl.appendChild(txt);
        
        slotEl.addEventListener('click', () => {
          this.openPartyAssignModal(i);
        });
      }
      grid.appendChild(slotEl);
    }
  },

  getSpriteUrl(dexId, isShiny, variant) {
    let suffix = '';
    if (variant && variant !== 'normal') {
      suffix = `-${variant}`;
    }
    
    // Fallback logic if dexId is 0 or invalid
    if (!dexId) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
    
    const shinyPath = isShiny ? 'shiny/' : '';
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${shinyPath}${dexId}${suffix}.png`;
  },

  renderPCBox() {
    const grid = document.getElementById('pc-box-grid');
    grid.innerHTML = '';
    
    // Set wallpaper class
    grid.className = `pc-box-container wallpaper-${this.settings.wallpaper}`;

    // Filter pokemon list to current filtered game and active box
    const filteredByGame = this.gameFilter === 'all' 
      ? this.pokemonList
      : this.pokemonList.filter(p => p.game === this.gameFilter);
    
    const boxPokemon = filteredByGame.filter(p => p.box === this.settings.activeBox);

    // Render 30 Slots
    for (let slotIdx = 1; slotIdx <= 30; slotIdx++) {
      const slotEl = document.createElement('div');
      slotEl.className = 'pc-slot';
      slotEl.dataset.slotIndex = slotIdx;

      // Find if slot occupied
      const poke = boxPokemon.find(p => p.slot === slotIdx);

      if (poke) {
        const img = document.createElement('img');
        img.className = 'slot-sprite';
        img.src = this.getSpriteUrl(poke.dexId, poke.shiny, poke.variant);
        img.loading = 'lazy';
        slotEl.appendChild(img);

        const nickEl = document.createElement('div');
        nickEl.className = 'slot-nickname';
        nickEl.textContent = poke.nickname || poke.name;
        slotEl.appendChild(nickEl);

        // Markings Indicators
        if (poke.markings) {
          const marksWrapper = document.createElement('div');
          marksWrapper.className = 'slot-markings-indicator';
          Object.entries(poke.markings).forEach(([mName, active]) => {
            if (active) {
              const markCircle = document.createElement('span');
              markCircle.className = `mini-mark active`;
              marksWrapper.appendChild(markCircle);
            }
          });
          slotEl.appendChild(marksWrapper);
        }

        // Shiny Sparkle
        if (poke.shiny) {
          const shinyStar = document.createElement('span');
          shinyStar.className = 'shiny-star-indicator';
          shinyStar.innerHTML = '<i class="fa-solid fa-star"></i>';
          slotEl.appendChild(shinyStar);
        }

        slotEl.addEventListener('click', () => {
          this.showPokemonSummary(poke);
        });
      } else {
        // Empty slot can trigger Quick Add
        slotEl.addEventListener('click', () => {
          this.openAddModal(this.settings.activeBox, slotIdx);
        });
      }

      grid.appendChild(slotEl);
    }

    document.getElementById('box-title-label').textContent = `Box ${this.settings.activeBox}`;
  },

  renderLivingDex() {
    const grid = document.getElementById('national-dex-grid');
    grid.innerHTML = '';

    const searchQuery = document.getElementById('dex-search-input').value.toLowerCase();
    const hideCaught = document.getElementById('dex-filter-caught').checked;

    // Filter standard lists by active filter
    const activePokemon = this.gameFilter === 'all'
      ? this.pokemonList
      : this.pokemonList.filter(p => p.game === this.gameFilter);

    const depositedSet = new Set(activePokemon.map(p => p.dexId));

    // Support Gen 1-9 (up to 1025 entries)
    let maxDex = 1025;
    if (this.gameFilter !== 'all') {
      const platform = GAMES[this.gameFilter].logo;
      if (platform === 'GB' || platform === 'GBC') maxDex = 251;
      else if (platform === 'GBA') maxDex = 386;
      else if (platform === 'DS') maxDex = 649;
    }

    for (let id = 1; id <= maxDex; id++) {
      // Find matching species
      const matched = this.speciesCache.find(s => s.id === id);
      const name = matched ? matched.name : `Pokemon #${id}`;

      if (searchQuery && !name.toLowerCase().includes(searchQuery) && !id.toString().includes(searchQuery)) {
        continue;
      }

      const isDeposited = depositedSet.has(id);
      if (hideCaught && isDeposited) continue;

      const slotEl = document.createElement('div');
      slotEl.className = `dex-slot ${isDeposited ? 'filled-dex' : 'empty-dex'}`;

      const noTag = document.createElement('span');
      noTag.className = 'dex-no-tag';
      noTag.textContent = id.toString().padStart(3, '0');
      slotEl.appendChild(noTag);

      const img = document.createElement('img');
      img.className = 'dex-slot-sprite';
      
      // Determine if deposited variant shiny
      const matchingPokes = activePokemon.filter(p => p.dexId === id);
      const isShiny = matchingPokes.some(p => p.shiny);
      const matchedVariant = matchingPokes[0]?.variant || 'normal';

      img.src = this.getSpriteUrl(id, isShiny, matchedVariant);
      img.loading = 'lazy';
      slotEl.appendChild(img);

      const nameTag = document.createElement('span');
      nameTag.className = 'dex-slot-name';
      nameTag.textContent = name.charAt(0).toUpperCase() + name.slice(1);
      slotEl.appendChild(nameTag);

      if (isDeposited) {
        slotEl.addEventListener('click', () => {
          this.showPokemonSummary(matchingPokes[0]);
        });
      }

      grid.appendChild(slotEl);
    }
  },

  renderAchievements() {
    const listGrid = document.getElementById('achievements-list-grid');
    listGrid.innerHTML = '';

    const label = document.getElementById('game-badge-header-title');
    if (this.gameFilter === 'all') {
      label.textContent = 'All Games Combined';
    } else {
      label.textContent = GAMES[this.gameFilter].name;
    }

    // Pull achievements for selected game or list all
    let activeAchs = [];
    if (this.gameFilter === 'all') {
      Object.keys(ACHIEVEMENTS).forEach(gKey => {
        activeAchs = activeAchs.concat(ACHIEVEMENTS[gKey]);
      });
    } else {
      activeAchs = ACHIEVEMENTS[this.gameFilter] || [];
    }

    if (activeAchs.length === 0) {
      listGrid.innerHTML = '<div class="no-achievements">No achievements preloaded for this version. Unlock custom badges manually by trading!</div>';
      return;
    }

    activeAchs.forEach(ach => {
      const isDone = !!this.achievementsData[ach.id];
      const itemEl = document.createElement('div');
      itemEl.className = `achievement-item ${isDone ? 'completed' : ''}`;
      
      const checkWrapper = document.createElement('div');
      checkWrapper.className = 'achievement-checkbox-wrapper';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = isDone;
      checkbox.addEventListener('change', async (e) => {
        this.achievementsData[ach.id] = e.target.checked;
        await this.db.put('achievements', { id: ach.id, completed: e.target.checked });
        itemEl.classList.toggle('completed', e.target.checked);
        this.renderStats();
      });
      checkWrapper.appendChild(checkbox);

      const details = document.createElement('div');
      details.className = 'achievement-details';
      const title = document.createElement('span');
      title.className = 'achievement-title';
      title.textContent = ach.title;
      const desc = document.createElement('span');
      desc.className = 'achievement-desc';
      desc.textContent = ach.desc;

      details.appendChild(title);
      details.appendChild(desc);

      itemEl.appendChild(checkWrapper);
      itemEl.appendChild(details);
      
      // Toggle on item click
      itemEl.addEventListener('click', (e) => {
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event('change'));
        }
      });

      listGrid.appendChild(itemEl);
    });
  },

  showPokemonSummary(poke) {
    this.selectedPokemon = poke;

    document.getElementById('summary-placeholder').classList.add('hidden');
    const content = document.getElementById('summary-content');
    content.classList.remove('hidden');

    // Headers
    document.getElementById('current-card-game-badge').textContent = GAMES[poke.game]?.name || 'UNKNOWN';
    document.getElementById('summary-dex-no').textContent = poke.dexId.toString().padStart(3, '0');
    document.getElementById('summary-name').textContent = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
    document.getElementById('summary-gender').textContent = poke.gender || '⚲';
    document.getElementById('summary-level').textContent = poke.level || 50;

    // Sprite
    const sprite = document.getElementById('summary-sprite');
    sprite.src = this.getSpriteUrl(poke.dexId, poke.shiny, poke.variant);
    
    const shineSparkle = document.getElementById('summary-shine-sparkle');
    if (poke.shiny) {
      shineSparkle.classList.remove('hidden');
    } else {
      shineSparkle.classList.add('hidden');
    }

    // Ball
    const ballImg = document.getElementById('summary-ball-img');
    const ballLabel = document.getElementById('summary-ball-name');
    ballImg.src = POKEBALL_ICONS[poke.ball] || POKEBALL_ICONS['poke-ball'];
    ballLabel.textContent = poke.ball ? poke.ball.replace('-', ' ') : 'Poké Ball';

    // Type Badge
    const typeContainer = document.getElementById('summary-types');
    typeContainer.innerHTML = '';
    const types = poke.types || ['normal'];
    types.forEach(t => {
      const tag = document.createElement('span');
      tag.className = `type-badge ${t}`;
      tag.textContent = t;
      typeContainer.appendChild(tag);
    });

    // Markings Screen
    const markingsWrapper = document.getElementById('summary-markings');
    markingsWrapper.querySelectorAll('.mark').forEach(span => {
      const mName = span.dataset.mark;
      const isActive = poke.markings && poke.markings[mName];
      span.classList.toggle('active', !!isActive);
    });

    // Origin Logo
    const originLogo = document.getElementById('summary-origin-stamp');
    const logoTxt = GAMES[poke.game]?.logo || 'GAME';
    originLogo.textContent = logoTxt;

    // Tab content populate
    document.getElementById('summary-ot').textContent = poke.ot || 'Trainer';
    document.getElementById('summary-ot-id').textContent = poke.otId || '00000';
    document.getElementById('summary-nature').textContent = poke.nature || 'Hardy';
    document.getElementById('summary-ability').textContent = poke.ability || 'Overgrow';
    document.getElementById('summary-notes').textContent = poke.notes || 'None';

    // Stats Bars Calculation (mock stats based on level/nature)
    const baseStats = poke.stats || { hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50 };
    Object.entries(baseStats).forEach(([sKey, value]) => {
      const percent = Math.min(100, Math.max(10, (value / 250) * 100));
      const fillEl = document.getElementById(`stat-fill-${sKey}`);
      if (fillEl) fillEl.style.width = `${percent}%`;
      const valEl = document.getElementById(`stat-val-${sKey}`);
      if (valEl) valEl.textContent = value;
    });

    // Ribbons
    const ribbonsGrid = document.getElementById('summary-ribbons-grid');
    ribbonsGrid.innerHTML = '';
    const ribbonNames = {
      'hoenn-champion': 'Hoenn Champ',
      'sinnoh-champion': 'Sinnoh Champ',
      'unova-champion': 'League Champ',
      'alola-champion': 'Alola Champ',
      'effort': 'Effort',
      'footprint': 'Footprint',
      'artist': 'Contest Artist'
    };

    Object.entries(ribbonNames).forEach(([rId, rLabel]) => {
      const wrapper = document.createElement('div');
      const isEarned = poke.ribbons && poke.ribbons.includes(rId);
      wrapper.className = `ribbon-badge-wrapper ${isEarned ? '' : 'inactive'}`;

      const icon = document.createElement('i');
      icon.className = `fa-solid fa-ribbon ribbon-icon ${rId}`;
      const labelSpan = document.createElement('span');
      labelSpan.className = 'ribbon-name';
      labelSpan.textContent = rLabel;

      wrapper.appendChild(icon);
      wrapper.appendChild(labelSpan);
      ribbonsGrid.appendChild(wrapper);
    });
  },

  openAddModal(boxId, slotId) {
    this.editingId = null;
    this.activeSlot = slotId || null;
    document.getElementById('modal-title').textContent = 'Deposit Pokemon';
    document.getElementById('pokemon-form').reset();
    
    // Set box & slot preset
    document.getElementById('form-box').value = boxId || this.settings.activeBox;
    document.getElementById('form-sprite-preview').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
    
    document.getElementById('pokemon-modal').classList.remove('hidden');
  },

  async openEditModal() {
    if (!this.selectedPokemon) return;
    const poke = this.selectedPokemon;
    this.editingId = poke.id;

    document.getElementById('modal-title').textContent = 'Modify Deposited Pokemon';
    
    document.getElementById('form-species').value = poke.name;
    document.getElementById('form-variant').value = poke.variant || 'normal';
    document.getElementById('form-nickname').value = poke.nickname || '';
    document.getElementById('form-level').value = poke.level || 50;
    document.getElementById('form-game').value = poke.game || 'red';
    document.getElementById('form-ball').value = poke.ball || 'poke-ball';
    document.getElementById('form-shiny').checked = !!poke.shiny;
    document.getElementById('form-gender').value = poke.gender || '♂';
    document.getElementById('form-nature').value = poke.nature || 'Hardy';
    document.getElementById('form-ability').value = poke.ability || '';
    document.getElementById('form-ot').value = poke.ot || '';
    document.getElementById('form-ot-id').value = poke.otId || '';
    document.getElementById('form-box').value = poke.box || 1;
    document.getElementById('form-notes').value = poke.notes || '';

    // Checkboxes for ribbons
    const ribbonCheckboxes = document.getElementsByName('ribbons');
    ribbonCheckboxes.forEach(cb => {
      cb.checked = poke.ribbons && poke.ribbons.includes(cb.value);
    });

    document.getElementById('form-sprite-preview').src = this.getSpriteUrl(poke.dexId, poke.shiny, poke.variant);
    document.getElementById('pokemon-modal').classList.remove('hidden');
  },

  async releaseCurrent() {
    if (!this.selectedPokemon) return;
    if (confirm(`Are you sure you want to release ${this.selectedPokemon.nickname || this.selectedPokemon.name}?`)) {
      await this.db.delete('pokemon', this.selectedPokemon.id);
      
      // Remove from party if inside
      const partyIdx = this.settings.pinnedParty.findIndex(p => p && p.id === this.selectedPokemon.id);
      if (partyIdx !== -1) {
        this.settings.pinnedParty[partyIdx] = null;
        await this.saveSettings();
        this.renderPartyShowcase();
      }

      await this.loadPokemon();
      this.renderStats();
      this.renderPCBox();
      
      document.getElementById('summary-content').classList.add('hidden');
      document.getElementById('summary-placeholder').classList.remove('hidden');
      this.selectedPokemon = null;
    }
  },

  openPartyAssignModal(slotIndex) {
    const modal = document.getElementById('party-modal');
    document.getElementById('party-slot-indicator').textContent = slotIndex + 1;
    
    const listContainer = document.getElementById('party-assign-list');
    listContainer.innerHTML = '';

    if (this.pokemonList.length === 0) {
      listContainer.innerHTML = '<p class="text-muted">No Pokemon deposited yet. Deposit some from the boxes first!</p>';
    } else {
      this.pokemonList.forEach(poke => {
        // Exclude if already in party
        const alreadyInParty = this.settings.pinnedParty.some(p => p && p.id === poke.id);
        if (alreadyInParty) return;

        const item = document.createElement('div');
        item.className = 'assign-item';
        
        const info = document.createElement('div');
        info.className = 'assign-info';
        
        const sprite = document.createElement('img');
        sprite.className = 'assign-sprite';
        sprite.src = this.getSpriteUrl(poke.dexId, poke.shiny, poke.variant);
        
        const text = document.createElement('div');
        const name = document.createElement('div');
        name.className = 'assign-name';
        name.textContent = poke.nickname || poke.name;
        
        const game = document.createElement('div');
        game.className = 'assign-game';
        game.textContent = GAMES[poke.game]?.name || '';

        text.appendChild(name);
        text.appendChild(game);
        info.appendChild(sprite);
        info.appendChild(text);
        item.appendChild(info);

        const btn = document.createElement('button');
        btn.className = 'btn-assign-action';
        btn.textContent = 'Assign';
        btn.addEventListener('click', async () => {
          this.settings.pinnedParty[slotIndex] = poke;
          await this.saveSettings();
          this.renderPartyShowcase();
          modal.classList.add('hidden');
        });
        item.appendChild(btn);

        listContainer.appendChild(item);
      });
    }

    modal.classList.remove('hidden');
  },

  setupEventListeners() {
    // Autocomplete handler
    const speciesInput = document.getElementById('form-species');
    const suggestionsPanel = document.getElementById('species-suggestions');

    speciesInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase().trim();
      suggestionsPanel.innerHTML = '';
      if (!val) {
        suggestionsPanel.classList.add('hidden');
        return;
      }

      const matches = this.speciesCache
        .filter(s => s.name.toLowerCase().includes(val))
        .slice(0, 5);

      if (matches.length > 0) {
        matches.forEach(m => {
          const div = document.createElement('div');
          div.className = 'suggestion-item';
          div.innerHTML = `<span>${m.name.charAt(0).toUpperCase() + m.name.slice(1)}</span> <span class="suggestion-id">#${m.id}</span>`;
          div.addEventListener('click', () => {
            speciesInput.value = m.name;
            suggestionsPanel.classList.add('hidden');
            this.updateModalSpritePreview(m.id);
          });
          suggestionsPanel.appendChild(div);
        });
        suggestionsPanel.classList.remove('hidden');
      } else {
        suggestionsPanel.classList.add('hidden');
      }
    });

    // Hide suggestions on outside click
    document.addEventListener('click', (e) => {
      if (e.target !== speciesInput) {
        suggestionsPanel.classList.add('hidden');
      }
    });

    // Handle shiny preview toggle in modal
    document.getElementById('form-shiny').addEventListener('change', () => {
      const specName = speciesInput.value.toLowerCase().trim();
      const matched = this.speciesCache.find(s => s.name === specName);
      if (matched) {
        this.updateModalSpritePreview(matched.id);
      }
    });

    document.getElementById('form-variant').addEventListener('change', () => {
      const specName = speciesInput.value.toLowerCase().trim();
      const matched = this.speciesCache.find(s => s.name === specName);
      if (matched) {
        this.updateModalSpritePreview(matched.id);
      }
    });

    // Submit Pokemon Form
    document.getElementById('pokemon-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = speciesInput.value.toLowerCase().trim();
      const matchedSpec = this.speciesCache.find(s => s.name === name);
      const dexId = matchedSpec ? matchedSpec.id : 0;

      if (!dexId) {
        alert("Species not recognized. Please pick one from the autocomplete list.");
        return;
      }

      // Gather form inputs
      const nickname = document.getElementById('form-nickname').value.trim();
      const level = parseInt(document.getElementById('form-level').value) || 50;
      const game = document.getElementById('form-game').value;
      const ball = document.getElementById('form-ball').value;
      const shiny = document.getElementById('form-shiny').checked;
      const variant = document.getElementById('form-variant').value;
      const gender = document.getElementById('form-gender').value;
      const nature = document.getElementById('form-nature').value;
      const ability = document.getElementById('form-ability').value.trim();
      const ot = document.getElementById('form-ot').value.trim();
      const otId = document.getElementById('form-ot-id').value.trim();
      const box = parseInt(document.getElementById('form-box').value) || 1;
      const notes = document.getElementById('form-notes').value.trim();

      // Gather ribbons
      const ribbons = [];
      document.getElementsByName('ribbons').forEach(cb => {
        if (cb.checked) ribbons.push(cb.value);
      });

      // Find first empty slot in target box if slot not defined or if we're adding
      let slot = this.activeSlot || 1;
      if (this.editingId) {
        const currentPoke = this.pokemonList.find(p => p.id === this.editingId);
        slot = currentPoke ? currentPoke.slot : 1;
      } else if (!this.activeSlot) {
        const boxOccupiedSlots = this.pokemonList
          .filter(p => p.box === box && p.game === (this.gameFilter === 'all' ? p.game : this.gameFilter))
          .map(p => p.slot);
        for (let i = 1; i <= 30; i++) {
          if (!boxOccupiedSlots.includes(i)) {
            slot = i;
            break;
          }
        }
      }

      // Mock base stats
      const stats = {
        hp: 50 + Math.floor(Math.random() * 80),
        atk: 50 + Math.floor(Math.random() * 80),
        def: 50 + Math.floor(Math.random() * 80),
        spa: 50 + Math.floor(Math.random() * 80),
        spd: 50 + Math.floor(Math.random() * 80),
        spe: 50 + Math.floor(Math.random() * 80)
      };

      // Set Type based on typical PokeAPI attributes (mock common ones if offline, or async pull)
      let fetchedTypes = ['normal'];
      try {
        const typeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${dexId}`);
        const typeData = await typeRes.json();
        fetchedTypes = typeData.types.map(t => t.type.name);
      } catch (err) {
        console.warn("Could not load types online, fallback to normal:", err);
      }

      const pokemonData = {
        name,
        dexId,
        nickname,
        level,
        game,
        ball,
        shiny,
        variant,
        gender,
        nature,
        ability,
        ot,
        otId,
        box,
        slot,
        notes,
        ribbons,
        stats,
        types: fetchedTypes,
        markings: { circle: false, triangle: false, square: false, heart: false, star: false, diamond: false }
      };

      if (this.editingId) {
        pokemonData.id = this.editingId;
        // Keep existing markings
        const original = this.pokemonList.find(p => p.id === this.editingId);
        if (original && original.markings) pokemonData.markings = original.markings;
      }

      await this.db.put('pokemon', pokemonData);
      await this.loadPokemon();
      
      // Update local copy of active party if edited item is in active party
      const partyIdx = this.settings.pinnedParty.findIndex(p => p && p.id === this.editingId);
      if (partyIdx !== -1) {
        this.settings.pinnedParty[partyIdx] = pokemonData;
        await this.saveSettings();
        this.renderPartyShowcase();
      }

      this.renderStats();
      this.renderPCBox();

      // Show summary of newly added/edited pokemon
      if (this.editingId) {
        this.showPokemonSummary(pokemonData);
      }

      document.getElementById('pokemon-modal').classList.add('hidden');
    });

    // Close Modals
    document.getElementById('btn-modal-close').addEventListener('click', () => {
      document.getElementById('pokemon-modal').classList.add('hidden');
    });
    document.getElementById('btn-modal-cancel').addEventListener('click', () => {
      document.getElementById('pokemon-modal').classList.add('hidden');
    });
    document.getElementById('btn-party-modal-close').addEventListener('click', () => {
      document.getElementById('party-modal').classList.add('hidden');
    });

    // Add Trigger
    document.getElementById('btn-add-pokemon').addEventListener('click', () => {
      this.openAddModal();
    });

    // Box Nav Trigger
    document.getElementById('btn-prev-box').addEventListener('click', () => {
      this.settings.activeBox = this.settings.activeBox > 1 ? this.settings.activeBox - 1 : 20;
      this.saveSettings();
      this.renderPCBox();
    });
    document.getElementById('btn-next-box').addEventListener('click', () => {
      this.settings.activeBox = this.settings.activeBox < 20 ? this.settings.activeBox + 1 : 1;
      this.saveSettings();
      this.renderPCBox();
    });

    // Box Wallpaper Select
    document.getElementById('wallpaper-select').addEventListener('change', (e) => {
      this.settings.wallpaper = e.target.value;
      this.saveSettings();
      this.renderPCBox();
    });

    // Global Game Filter
    document.getElementById('game-filter').addEventListener('change', (e) => {
      this.gameFilter = e.target.value;
      this.renderStats();
      this.renderPCBox();
      this.renderLivingDex();
      this.renderAchievements();
    });

    // View switcher tabs
    document.querySelectorAll('.view-tabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.view-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        this.currentTab = tab;
        document.getElementById(`panel-${tab}`).classList.add('active');

        // Show/hide box customizer
        const customizer = document.getElementById('box-customizer-controls');
        if (tab === 'box-view') {
          customizer.classList.remove('hidden');
          this.renderPCBox();
        } else {
          customizer.classList.add('hidden');
          if (tab === 'living-dex') {
            this.renderLivingDex();
          } else if (tab === 'achievements-view') {
            this.renderAchievements();
          }
        }
      });
    });

    // Living Dex Search
    document.getElementById('dex-search-input').addEventListener('input', () => {
      this.renderLivingDex();
    });
    document.getElementById('dex-filter-caught').addEventListener('change', () => {
      this.renderLivingDex();
    });

    // Summary Screen Actions
    document.getElementById('btn-edit-current').addEventListener('click', () => {
      this.openEditModal();
    });
    document.getElementById('btn-delete-current').addEventListener('click', () => {
      this.releaseCurrent();
    });

    // GBA screen tabs click
    document.querySelectorAll('.gba-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.gba-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.gba-tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`gba-tab-${btn.dataset.gbaTab}`).classList.add('active');
      });
    });

    // GBA Markings toggle from GBA Screen
    document.querySelectorAll('#summary-markings .mark').forEach(span => {
      span.addEventListener('click', async () => {
        if (!this.selectedPokemon) return;
        const mark = span.dataset.mark;
        if (!this.selectedPokemon.markings) this.selectedPokemon.markings = {};
        
        // Toggle
        this.selectedPokemon.markings[mark] = !this.selectedPokemon.markings[mark];
        
        // Save
        await this.db.put('pokemon', this.selectedPokemon);
        await this.loadPokemon();
        
        // Update View
        span.classList.toggle('active', this.selectedPokemon.markings[mark]);
        this.renderPCBox();
      });
    });

    // Import / Export Buttons
    document.getElementById('btn-export').addEventListener('click', () => {
      this.exportLibrary();
    });
    
    const importInput = document.getElementById('file-import');
    document.getElementById('btn-import-trigger').addEventListener('click', () => {
      importInput.click();
    });
    
    importInput.addEventListener('change', (e) => {
      this.importLibrary(e);
    });
  },

  updateModalSpritePreview(dexId) {
    const isShiny = document.getElementById('form-shiny').checked;
    const variant = document.getElementById('form-variant').value;
    const imgEl = document.getElementById('form-sprite-preview');
    imgEl.src = this.getSpriteUrl(dexId, isShiny, variant);
  },

  exportLibrary() {
    const backupData = {
      pokemon: this.pokemonList,
      achievements: this.achievementsData,
      settings: this.settings,
      version: '1.0',
      timestamp: Date.now()
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `MyPokeHome_Library_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    this.settings.lastBackup = Date.now();
    this.saveSettings();
  },

  importLibrary(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (confirm("Importing this backup will overwrite your current library. Proceed?")) {
          // Clear current database stores
          await this.db.clear('pokemon');
          await this.db.clear('achievements');

          // Import Pokemon
          if (Array.isArray(imported.pokemon)) {
            for (const p of imported.pokemon) {
              // Strip ID to let AutoIncrement handle it if needed, or put directly
              await this.db.put('pokemon', p);
            }
          }

          // Import Achievements
          if (imported.achievements) {
            for (const [id, completed] of Object.entries(imported.achievements)) {
              await this.db.put('achievements', { id, completed });
            }
          }

          // Import Settings
          if (imported.settings) {
            this.settings = { ...this.settings, ...imported.settings };
            await this.saveSettings();
          }

          alert("Library backup successfully imported!");
          window.location.reload();
        }
      } catch (err) {
        alert("Failed to parse the backup file. Make sure it's a valid JSON file exported from MyPokeHome.");
      }
    };
    reader.readAsText(file);
  },

  checkBackupInterval() {
    // If no backup ever or last backup is over 30 days ago
    const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    if (!this.settings.lastBackup || (now - this.settings.lastBackup > thirtyDaysMs)) {
      setTimeout(() => {
        if (confirm("⚠️ You haven't backed up your Pokémon collection in over 30 days! Would you like to export a backup now?")) {
          this.exportLibrary();
        }
      }, 3000);
    }
  }
};

// Start application on page load
window.addEventListener('DOMContentLoaded', () => {
  App.start();
});

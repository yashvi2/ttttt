const SAVE_KEY = 'sistersApart.save.v1';
const META_KEY = 'sistersApart.meta.v1';

export function newState(route, opts = {}) {
  return {
    v: 1,
    route: route.id,
    day: 1,
    time: 7.75,
    district: route.startDistrict,
    pos: null,
    needs: { energy: 90, hunger: 55, mood: 60 },
    money: route.startMoney,
    phase: 1,
    tutorial: {},
    clues: {},
    deductions: {},
    npcs: {},
    visited: {},
    memories: [],
    journal: [],
    gems: {},
    perks: {},
    messages: [],
    firedMessages: {},
    assignment: null,
    assignmentsDone: {},
    sessions: 0,
    gigs: 0,
    journalDay: 0,
    weather: 'clear',
    dayLog: [],
    pursuit: null,
    late: 0,
    shots: 0,
    challenge: { speedrun: !!opts.speedrun, photoPerfect: !!opts.photoPerfect, shotsLeft: opts.photoPerfect ? 24 : null },
    playMs: 0,
    ended: false,
    flags: {},
  };
}

function safe(fn, fallback = null) {
  try { return fn(); } catch { return fallback; }
}

export function saveGame(state, key = SAVE_KEY) {
  safe(() => localStorage.setItem(key, JSON.stringify(state)));
}
export function loadGame(key = SAVE_KEY) {
  return safe(() => JSON.parse(localStorage.getItem(key)));
}
export function clearSave(key = SAVE_KEY) {
  safe(() => localStorage.removeItem(key));
}
export function loadMeta(key = META_KEY) {
  return safe(() => JSON.parse(localStorage.getItem(key)), null) || { completed: {}, best: {}, trueEnding: {}, endings: {} };
}
export function saveMeta(meta, key = META_KEY) {
  safe(() => localStorage.setItem(key, JSON.stringify(meta)));
}

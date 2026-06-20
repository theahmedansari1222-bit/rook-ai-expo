// Placeholder module for Memory Core

const memory = { preferences: {}, history: [] };

export function savePreference(key, value) {
  memory.preferences[key] = value;
}

export function getPreference(key) {
  return memory.preferences[key];
}

export function addHistory(item) {
  memory.history.push({ item, at: Date.now() });
}

export function getHistory() {
  return memory.history;
}

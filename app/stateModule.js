/**
 * stateModule.js
 * Central state management for the Yoga App.
 * Provides a simple observable store pattern.
 */

const initialState = {
  currentIndex: 0,
  isPlaying: false,
  timeLeft: 0,
  sessionStatus: 'not_started', // 'not_started' | 'running' | 'paused' | 'completed'
  startIndex: 0,
};

let state = { ...initialState };
const listeners = new Set();

export function getState() {
  return { ...state };
}

export function setState(partial) {
  state = { ...state, ...partial };
  listeners.forEach(fn => fn(state));
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function resetState() {
  state = { ...initialState };
  listeners.forEach(fn => fn(state));
}

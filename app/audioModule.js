/**
 * audioModule.js
 * Generates bell/chime sounds using the Web Audio API.
 * No external files needed — all synthesized in-browser.
 */

let audioCtx = null;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playTone(frequency, duration, type = 'sine', gainPeak = 0.4) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(gainPeak, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

export function playStartBell() {
  // Warm singing bowl sound: two tones in harmony
  playTone(528, 2.5, 'sine', 0.35);
  setTimeout(() => playTone(660, 2.0, 'sine', 0.2), 80);
}

export function playTransitionBell() {
  // Gentle single tone for transitions
  playTone(440, 1.8, 'sine', 0.3);
  setTimeout(() => playTone(550, 1.4, 'sine', 0.15), 100);
}

export function playCompletionBells() {
  // Three ascending bells for completion
  playTone(440, 1.5, 'sine', 0.3);
  setTimeout(() => playTone(528, 1.5, 'sine', 0.3), 500);
  setTimeout(() => playTone(660, 2.0, 'sine', 0.35), 1000);
}

export function playCountdownBeep() {
  // Subtle tick for last 5 seconds
  playTone(880, 0.1, 'square', 0.05);
}

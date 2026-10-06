'use strict';

// Keep all event information available without JavaScript.
// Correct anchor focus for keyboard users, while preserving native navigation.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});

const hero = document.querySelector('.hero');
const motionButton = document.querySelector('.motion-toggle');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let pausedByUser = false;
function updateMotion() {
  const paused = pausedByUser || motionPreference.matches;
  hero.classList.toggle('motion-enabled', !motionPreference.matches);
  hero.classList.toggle('motion-paused', paused);
  motionButton.hidden = motionPreference.matches;
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.textContent = paused ? '背景の動きを再生する' : '背景の動きを止める';
}
motionButton.addEventListener('click', () => {
  pausedByUser = !pausedByUser;
  updateMotion();
});
motionPreference.addEventListener('change', updateMotion);
updateMotion();

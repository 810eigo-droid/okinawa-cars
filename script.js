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
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateMotion() {
  hero.classList.toggle('motion-enabled', !motionPreference.matches);
}
motionPreference.addEventListener('change', updateMotion);
updateMotion();

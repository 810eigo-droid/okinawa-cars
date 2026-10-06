'use strict';
const menu = document.getElementById('fair-menu');
const toggle = document.querySelector('.menu-toggle');
function closeMenu() { menu.close(); }
toggle.addEventListener('click', () => { menu.showModal(); toggle.setAttribute('aria-expanded', 'true'); document.body.classList.add('menu-is-open'); });
menu.querySelector('.menu-close').addEventListener('click', closeMenu);
menu.addEventListener('click', event => { if (event.target === menu) { const r = menu.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right) closeMenu(); } });
menu.addEventListener('close', () => { toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-is-open'); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { closeMenu(); if (link.hash) requestAnimationFrame(() => { const target = document.querySelector(link.hash); if (target) { target.setAttribute('tabindex', '-1'); target.focus({preventScroll:true}); target.scrollIntoView(); } }); }));
matchMedia('(min-width:761px)').addEventListener('change', event => { if (event.matches && menu.open) closeMenu(); });

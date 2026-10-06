'use strict';
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...document.querySelectorAll('.intro h2, .stock, .section h2, .event-grid article, .trust-grid article, .dealer-grid a, .access figure, .flyer-layout>a, .benefit')];
  let observer;
  const showAll = () => {
    observer?.disconnect();
    targets.forEach(el => el.classList.remove('motion-wait'));
  };
  if (!preference.matches && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('motion-wait');
        entry.target.classList.add('motion-seen');
        observer.unobserve(entry.target);
      });
    }, {threshold:0.08});
    targets.forEach(el => {
      // Only hide offscreen content, leaving the first view immediately available.
      if(el.getBoundingClientRect().top < innerHeight) return;
      el.classList.add('motion-reveal','motion-wait');
      if(el.parentElement.matches('.event-grid,.trust-grid,.dealer-grid')) {
        const index = [...el.parentElement.children].indexOf(el);
        el.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
      }
      observer.observe(el);
    });
  }
  preference.addEventListener('change', showAll);
  // Keyboard focus and anchor navigation must never land on invisible content.
  document.addEventListener('focusin', event => {
    const target = event.target.closest('.motion-wait');
    if(target) {target.classList.remove('motion-wait');observer?.unobserve(target);}
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    const section = document.getElementById(link.hash.slice(1));
    section?.querySelectorAll('.motion-wait').forEach(el => {el.classList.remove('motion-wait');observer?.unobserve(el);});
  }));
})();

// Named text effects play once, without changing or duplicating the text.
(() => {
 const pref = matchMedia('(prefers-reduced-motion: reduce)');
 const items = [...document.querySelectorAll('[data-text-motion]')];
 if(pref.matches || !('IntersectionObserver' in window)) return;
 const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(!entry.isIntersecting) return;
  entry.target.classList.add('text-play');
  observer.unobserve(entry.target);
 }), {threshold:0.65});
 items.forEach(el => observer.observe(el));
 pref.addEventListener('change', () => {observer.disconnect();items.forEach(el => el.classList.remove('text-play'));});
})();

// A short arrival and light sweep; replay by touch, click or keyboard.
(() => {
 const banner = document.querySelector('.flyer-cars');
 if (!banner) return;
 const preference = matchMedia('(prefers-reduced-motion: reduce)');
 let timer;
 const play = () => {
  if(preference.matches || banner.classList.contains('cars-playing')) return;
  banner.classList.add('cars-playing');
  timer = setTimeout(() => banner.classList.remove('cars-playing'), 1800);
 };
 banner.addEventListener('click', play);
 banner.addEventListener('keydown', event => {
  if(event.key === 'Enter' || event.key === ' ') {event.preventDefault();play();}
 });
 let observer;
 if('IntersectionObserver' in window) {
  observer = new IntersectionObserver(entries => {
   if(entries.some(entry => entry.isIntersecting)) {play();observer.disconnect();}
  }, {threshold:.55});
  observer.observe(banner);
 }
 preference.addEventListener('change', () => {clearTimeout(timer);banner.classList.remove('cars-playing');observer?.disconnect();});
})();
// Mobile access bar appears after the midpoint; artwork banners stay in flow.
(() => {
 const bar = document.querySelector('.floating');
 if (!bar) return;
 const mobile = matchMedia('(max-width:800px)');
 let queued = false;
 function update() {
  queued = false;
  const range = Math.max(0, document.documentElement.scrollHeight - innerHeight);
  const visible = !mobile.matches || range === 0 || scrollY >= range * .5;
  bar.classList.toggle('mobile-bar-ready', visible);
  bar.inert = !visible;
  bar.setAttribute('aria-hidden', String(!visible));
 }
 function schedule() { if(!queued) {queued = true;requestAnimationFrame(update);} }
 bar.classList.add('mobile-bar-managed');
 addEventListener('scroll', schedule, {passive:true});
 addEventListener('resize', schedule);
 addEventListener('load', schedule);
 if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
 update();
})();

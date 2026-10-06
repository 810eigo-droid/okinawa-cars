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

'use strict';
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#primary-menu');
  if (toggle && menu) {
    const closeMenu = () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
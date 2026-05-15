/* ─────────────────────────────────────────
   FIEND — script.js
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── SCROLL REVEAL ─── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ─── NAV SHRINK ─── */
  const mainNav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    mainNav.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ─── HERO BG PARALLAX ─── */
  const heroBg = document.querySelector('.hero-bg-img');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('zoomed'), 100);
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `scale(1.06) translateY(${window.scrollY * 0.18}px)`;
    });
  }

  /* ─── MOBILE NAV ─── */
  const hamburger   = document.querySelector('.hamburger');
  const mobileNav   = document.querySelector('.nav-mobile');
  const mobileClose = document.querySelector('.nav-mobile-close');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.add('open');
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  const closeMenu = () => {
    hamburger && hamburger.classList.remove('open');
    mobileNav && mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  document.querySelectorAll('.nav-mobile a').forEach(l => l.addEventListener('click', closeMenu));

  /* ─── LIGHTBOX ─── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src || img.getAttribute('data-src');
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ─── ACTIVE NAV HIGHLIGHT ─── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.45 });
  sections.forEach(s => sectionObserver.observe(s));

  /* ─── CURSOR BLOOD TRAIL ─── */
  const TRAIL = 8;
  const dots = [];
  for (let i = 0; i < TRAIL; i++) {
    const d = document.createElement('div');
    const size = 3 + i * 0.8;
    d.style.cssText = `
      position:fixed; width:${size}px; height:${size}px;
      border-radius:50%; background:rgba(204,17,17,${0.55 - i * 0.06});
      pointer-events:none; z-index:9997;
      transform:translate(-50%,-50%);
      transition: left ${0.04 + i * 0.035}s ease, top ${0.04 + i * 0.035}s ease;
    `;
    document.body.appendChild(d);
    dots.push(d);
  }
  window.addEventListener('mousemove', e => {
    dots.forEach(d => { d.style.left = e.clientX + 'px'; d.style.top = e.clientY + 'px'; });
  });

  /* ─── RANDOM GLITCH ─── */
  const glitchEls = document.querySelectorAll('.band-card-name, .stat-num, .hero-title-red, .nav-logo-text');
  setInterval(() => {
    const el = glitchEls[Math.floor(Math.random() * glitchEls.length)];
    if (!el) return;
    const orig = el.style.textShadow;
    el.style.textShadow = '3px 0 #00e5ff, -3px 0 #cc1111';
    el.style.transform = `translateX(${Math.random() > 0.5 ? 3 : -3}px)`;
    setTimeout(() => { el.style.textShadow = orig; el.style.transform = ''; }, 80);
  }, 2600);

  /* ─── WHOLE-PAGE FLICKER ─── */
  setInterval(() => {
    document.body.style.filter = 'brightness(0.86)';
    setTimeout(() => { document.body.style.filter = ''; }, 55);
  }, 12000);

});
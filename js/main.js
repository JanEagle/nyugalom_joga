/* ==========================================================================
   Nyugalom Jóga – működés
   Menü, görgetési hatások, interaktív testtérkép
   ========================================================================== */
(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var SVGNS = 'http://www.w3.org/2000/svg';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Lábléc: évszám ---------- */
  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Fejléc és menü ---------- */
  var header = $('.site-header');
  var nav = $('#nav');
  var toggle = $('.nav-toggle');

  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setNav(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü bezárása' : 'Menü megnyitása');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
  }

  /* ---------- Aktív menüpont ---------- */
  if ('IntersectionObserver' in window) {
    var links = {};
    $$('.nav a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = links[en.target.id];
        if (!a || a.classList.contains('btn')) return;
        if (en.isIntersecting) {
          $$('.nav a.is-active').forEach(function (x) { x.classList.remove('is-active'); });
          a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) secObs.observe(s);
    });

    /* ---------- Megjelenési animáció ---------- */
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); revObs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach(function (el) { revObs.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ==========================================================================
     TESTTÉRKÉP
     ========================================================================== */
  var REGIONS = window.BODY_REGIONS || [];
  var CHIPS = window.BODY_CHIPS || { front: [], back: [] };
  var byId = {};
  REGIONS.forEach(function (r) { byId[r.id] = r; });

  var svg = $('#body-svg');
  if (!svg || !REGIONS.length) return;

  var caption = $('#body-caption');
  var HINT = 'Kattints egy testrészre';
  var layers = { front: $('#hs-front'), back: $('#hs-back') };
  var views = { front: $('#view-front'), back: $('#view-back') };
  var currentView = 'front';

  function setCaption(text, hint) {
    caption.textContent = text;
    caption.classList.toggle('is-hint', !!hint);
  }

  function makeShape(s) {
    var el;
    if (s.t === 'c') {
      el = document.createElementNS(SVGNS, 'circle');
      el.setAttribute('cx', s.x); el.setAttribute('cy', s.y); el.setAttribute('r', s.r);
    } else {
      el = document.createElementNS(SVGNS, 'ellipse');
      el.setAttribute('cx', s.x); el.setAttribute('cy', s.y);
      el.setAttribute('rx', s.rx); el.setAttribute('ry', s.ry);
    }
    return el;
  }

  function buildHotspots(view) {
    var layer = layers[view];
    layer.textContent = '';
    REGIONS.forEach(function (r) {
      var shapes = r.shapes && r.shapes[view];
      if (!shapes) return;
      var g = document.createElementNS(SVGNS, 'g');
      g.setAttribute('class', 'hs');
      g.setAttribute('role', 'button');
      g.setAttribute('tabindex', '0');
      g.setAttribute('data-region', r.id);
      g.setAttribute('aria-label', r.name + ' – ajánlott gyakorlatok megtekintése');

      shapes.forEach(function (s) {
        var area = makeShape(s);
        area.setAttribute('class', 'hs-area');
        g.appendChild(area);
      });
      shapes.forEach(function (s) {
        var cx = s.x, cy = s.y;
        var pulse = document.createElementNS(SVGNS, 'circle');
        pulse.setAttribute('class', 'hs-pulse');
        pulse.setAttribute('cx', cx); pulse.setAttribute('cy', cy); pulse.setAttribute('r', 3.4);
        var dot = document.createElementNS(SVGNS, 'circle');
        dot.setAttribute('class', 'hs-dot');
        dot.setAttribute('cx', cx); dot.setAttribute('cy', cy); dot.setAttribute('r', 3.4);
        g.appendChild(pulse); g.appendChild(dot);
      });

      g.addEventListener('mouseenter', function () { setCaption(r.name, false); });
      g.addEventListener('focus', function () { setCaption(r.name, false); });
      g.addEventListener('mouseleave', function () { setCaption(HINT, true); });
      g.addEventListener('blur', function () { setCaption(HINT, true); });
      g.addEventListener('click', function () { openRegion(r.id, g); });
      g.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openRegion(r.id, g); }
      });
      layer.appendChild(g);
    });
  }

  function setView(view) {
    if (view === currentView) return;
    var from = views[currentView];
    var to = views[view];
    $$('.view-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-view') === view));
    });
    currentView = view;
    setCaption(HINT, true);
    // SVG-elemeknél nincs `hidden` tulajdonság, ezért attribútummal dolgozunk
    var hide = function (el) { el.setAttribute('hidden', ''); };
    var show = function (el) { el.removeAttribute('hidden'); };
    if (reduceMotion) { hide(from); show(to); return; }
    from.classList.add('is-fading');
    setTimeout(function () {
      hide(from);
      from.classList.remove('is-fading');
      to.classList.add('is-fading');
      show(to);
      requestAnimationFrame(function () { requestAnimationFrame(function () { to.classList.remove('is-fading'); }); });
    }, 250);
  }

  buildHotspots('front');
  buildHotspots('back');
  $$('.view-toggle button').forEach(function (b) {
    b.addEventListener('click', function () { setView(b.getAttribute('data-view')); });
  });

  /* ---------- Chipek (lista alternatíva) ---------- */
  function buildChips(view) {
    var ul = $('#chips-' + view);
    if (!ul) return;
    (CHIPS[view] || []).forEach(function (id) {
      var r = byId[id];
      if (!r) return;
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.textContent = r.name;
      b.addEventListener('click', function () { openRegion(id, b); });
      li.appendChild(b);
      ul.appendChild(li);
    });
  }
  buildChips('front');
  buildChips('back');

  /* ---------- Felugró ablak ---------- */
  var dlg = $('#region-dialog');
  var lastTrigger = null;

  function fillList(ul, items, type) {
    ul.textContent = '';
    items.forEach(function (it) {
      var li = document.createElement('li');
      var strong = document.createElement('strong');
      strong.textContent = it[0];
      li.appendChild(strong);
      var desc;
      if (type === 'yoga') {
        if (it[1]) {
          var em = document.createElement('em');
          em.textContent = '(' + it[1] + ')';
          li.appendChild(em);
        }
        desc = it[2];
      } else {
        desc = it[1];
      }
      if (desc) {
        var sp = document.createElement('span');
        sp.textContent = desc;
        li.appendChild(sp);
      }
      ul.appendChild(li);
    });
  }

  function openRegion(id, trigger) {
    var r = byId[id];
    if (!r || !dlg) return;
    lastTrigger = trigger || null;

    $('#rd-eyebrow').textContent = 'Testrész';
    $('#rd-title').textContent = r.name;
    $('#rd-intro').textContent = r.intro;

    var issues = $('#rd-issues');
    issues.textContent = '';
    r.issues.forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      issues.appendChild(li);
    });

    fillList($('#rd-yoga'), r.yoga, 'yoga');
    fillList($('#rd-breath'), r.breath, 'other');
    fillList($('#rd-therapy'), r.therapy, 'other');
    $('#rd-warn').textContent = r.warn;

    var text = 'Szia! A következő miatt érdeklődöm: ' + r.name.toLowerCase() + '. Szeretnék többet megtudni a lehetőségekről.';
    var wa = $('#rd-wa');
    var base = (wa.getAttribute('href') || '').split('?')[0];
    wa.setAttribute('href', base + '?text=' + encodeURIComponent(text));

    $$('.hs.is-active').forEach(function (x) { x.classList.remove('is-active'); });
    $$('.hs[data-region="' + id + '"]').forEach(function (x) { x.classList.add('is-active'); });

    document.body.classList.add('no-scroll');
    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
    $('.rd-inner', dlg).scrollTop = 0;
  }

  function closeDialog() {
    if (dlg.open) dlg.close();
  }

  if (dlg) {
    $('#rd-close').addEventListener('click', closeDialog);
    $('#rd-book').addEventListener('click', closeDialog);
    // Kattintás a háttérre bezárja
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) closeDialog();
    });
    dlg.addEventListener('close', function () {
      document.body.classList.remove('no-scroll');
      $$('.hs.is-active').forEach(function (x) { x.classList.remove('is-active'); });
      if (lastTrigger && typeof lastTrigger.focus === 'function') {
        try { lastTrigger.focus({ preventScroll: true }); } catch (err) { /* nincs teendő */ }
      }
    });
  }
})();

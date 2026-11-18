/* H-FRAME landing — animazioni scroll-driven (vanilla JS, nessuna dipendenza).
   I link si modificano in /config.js */
(() => {
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- link dal config ---------- */
  const L = window.HFRAME_LINKS || {};
  $$('[data-link]').forEach(a => {
    const href = L[a.dataset.link];
    if (href) a.href = href;
    if (!href || !/^https?:/.test(href)) a.removeAttribute('target'); // segnaposto o pagina del sito: stessa scheda
  });
  $('#y').textContent = new Date().getFullYear();
  // "Scorri per i contatti": scorrimento morbido fino ai pulsanti, senza aggiungere #links all'URL
  const hint = $('.scroll-hint');
  if (hint) hint.addEventListener('click', e => {
    e.preventDefault();
    const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    $('#links').scrollIntoView({ behavior: rm ? 'auto' : 'smooth', block: 'start' });
  });

  /* ---------- lingua (testi in /i18n.js) ---------- */
  const DICT = window.HFRAME_I18N || {};
  const KEY = 'hframe-lang';
  let words = [];
  function splitWords() {
    $$('[data-words]').forEach(p => {
      const out = [];
      p.childNodes.forEach(n => {
        const isEm = n.nodeType === 1 && n.tagName === 'EM';
        n.textContent.split(/(\s+)/).forEach(t => {
          if (!t) return;
          if (/^\s+$/.test(t)) { out.push(' '); return; }
          out.push(`<span class="w${isEm ? ' g' : ''}">${t}</span>`);
        });
      });
      p.innerHTML = out.join('');
    });
    words = $$('.words .w');
  }
  function buildMarquee(items) {
    const one = items.map((t, i) => `<span${i % 2 ? ' class="o"' : ''}>${t}</span><b>✦</b>`).join('');
    $('.marquee-track').innerHTML = one + one; // duplicato per il loop infinito
  }
  /* ---------- epoche: parole + etichette ---------- */
  let eraWords = [], eraList = [], eraIdx = -1;
  function buildEras(d) {
    const wrap = (t, cls) => t.split(/\s+/).filter(Boolean).map(w => `<span class="ew ${cls}"><span>${w}</span></span>`).join(' ');
    $('[data-eras="lead"]').innerHTML = wrap(d.erasLead || '', 'lw');
    $('[data-eras="punch"]').innerHTML = wrap(d.erasPunch || '', 'pw');
    eraWords = $$('.eras .ew');
    eraList = d.eras || [];
    $('.era-dots').innerHTML = eraList.map((_, i) => `<li${i === eraList.length - 1 ? ' class="now"' : ''}></li>`).join('');
    eraIdx = -1;
  }
  function setLang(lang, save) {
    const d = DICT[lang] || DICT.it; if (!d) return;
    root.lang = lang; root.dataset.lang = lang;
    document.title = d.metaTitle;
    const md = $('meta[name="description"]'); if (md) md.content = d.metaDesc;
    $$('[data-i18n]').forEach(el => { const v = d[el.dataset.i18n]; if (typeof v === 'string') el.innerHTML = v; });
    $$('[data-i18n-attr]').forEach(el => {
      const [attr, k] = el.dataset.i18nAttr.split(':'); if (d[k]) el.setAttribute(attr, d[k]);
    });
    buildMarquee(d.marquee);
    buildEras(d);
    splitWords();
    $$('.lang-toggle button').forEach(b => b.setAttribute('aria-pressed', b.dataset.set === lang));
    if (save) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
    requestAnimationFrame(() => measure && measure());
  }
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash) scrollTo(0, 0);
  const initial = root.dataset.lang || ((navigator.language || 'it').toLowerCase().startsWith('it') ? 'it' : 'en');
  let measure = null;

  /* ---------- reveal con IntersectionObserver ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(el => io.observe(el));
  $$('.btn').forEach((el, i) => { el.style.transitionDelay = (i * 0.07) + 's'; io.observe(el); });
  setTimeout(() => $$('.reveal,.btn').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); }), 1500);

  /* ---------- tap ripple + tilt ---------- */
  $$('.btn').forEach(b => {
    b.addEventListener('pointerdown', e => {
      if (RM) return;
      const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height);
      const d = document.createElement('span');
      d.className = 'ripple';
      d.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
      b.appendChild(d); setTimeout(() => d.remove(), 700);
    });
    if (RM || !matchMedia('(hover:hover)').matches) return;
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      b.style.transform = `perspective(700px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-3px)`;
    });
    b.addEventListener('pointerleave', () => { b.style.transform = ''; });
  });

  /* ---------- scroll state ---------- */
  const links = $('#links'), bar = $('.progress span'), track = $('.marquee-track');
  setLang(initial, false);
  let sy = scrollY, lastY = sy, vel = 0, vh = innerHeight, linksTop = 1, docH = 1;
  measure = () => {
    vh = innerHeight;
    linksTop = links.getBoundingClientRect().top + scrollY - vh * 0.35;
    docH = document.documentElement.scrollHeight - vh;
  };
  addEventListener('resize', measure, { passive: true });
  addEventListener('load', measure);
  addEventListener('scroll', () => { sy = scrollY; }, { passive: true });
  measure();

  /* ---------- sfondo canvas: particelle d'oro + tracce di circuito ---------- */
  const cv = $('#bg'), ctx = cv.getContext('2d');
  let W = 0, H = 0, DPR = 1, parts = [], traces = [];
  const GOLD = [201, 162, 74], GOLDL = [232, 212, 154], PERI = [247, 240, 225]; // su fondo bordeaux: oro #C9A24A, oro chiaro #E8D49A, avorio
  const rnd = (a, b) => a + Math.random() * (b - a);
  function resize() {
    DPR = Math.min(devicePixelRatio || 1, 1.75);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * DPR; cv.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const n = Math.round(Math.min(110, W * H / 9000));
    parts = Array.from({ length: n }, () => newPart(true));
    traces = Array.from({ length: W < 600 ? 7 : 12 }, () => newTrace(true));
  }
  function newPart(init) {
    return { x: rnd(0, W), y: init ? rnd(0, H) : H + 10, r: rnd(.5, 2.2), s: rnd(.15, .6),
             a: rnd(.15, .8), ph: rnd(0, 6.28), z: rnd(.3, 1) };
  }
  function newTrace(init) {
    // traccia "circuito": segmenti ortogonali/diagonali con un impulso che la percorre
    const g = 28, pts = [];
    let x = Math.round(rnd(0, W) / g) * g, y = Math.round(rnd(0, H) / g) * g;
    let dir = [[1,0],[-1,0],[0,1],[0,-1]][Math.floor(rnd(0,4))];
    pts.push([x, y]);
    for (let i = 0; i < 6; i++) {
      const len = g * Math.floor(rnd(2, 6));
      x += dir[0] * len; y += dir[1] * len; pts.push([x, y]);
      const t = Math.random();
      dir = t < .5 ? [dir[1], dir[0]] : t < .75 ? [-dir[1], -dir[0]] : [Math.sign(dir[0] || 1), Math.sign(dir[1] || 1)];
    }
    let tot = 0; for (let i = 1; i < pts.length; i++) tot += Math.hypot(pts[i][0]-pts[i-1][0], pts[i][1]-pts[i-1][1]);
    return { pts, tot, t: init ? rnd(0, 1) : 0, sp: rnd(.0012, .003), z: rnd(.25, .7) };
  }
  function pointAt(tr, d) {
    let acc = 0;
    for (let i = 1; i < tr.pts.length; i++) {
      const [ax, ay] = tr.pts[i-1], [bx, by] = tr.pts[i], l = Math.hypot(bx-ax, by-ay);
      if (acc + l >= d) { const k = (d - acc) / l; return [ax + (bx-ax)*k, ay + (by-ay)*k, i]; }
      acc += l;
    }
    const last = tr.pts[tr.pts.length-1]; return [last[0], last[1], tr.pts.length];
  }
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

  function draw(time, p) {
    ctx.clearRect(0, 0, W, H);
    const boost = 1 + Math.min(Math.abs(vel) * 0.06, 6);
    const lift = 1 + p * .3; // più luce man mano che si scende
    // tracce
    ctx.lineWidth = 1.2; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const tr of traces) {
      tr.t += tr.sp * boost * (RM ? 0 : 1);
      if (tr.t > 1.35) Object.assign(tr, newTrace(false));
      const oy = -(sy * tr.z * 0.25) % H;
      const head = Math.min(tr.t, 1) * tr.tot, tail = Math.max(0, tr.t - .35) / 1 * tr.tot;
      ctx.save(); ctx.translate(0, oy < -H/2 ? oy + H : oy);
      // traccia base tenue
      ctx.strokeStyle = rgba(GOLD, .12 * lift);
      ctx.beginPath(); tr.pts.forEach(([x,y],i)=> i?ctx.lineTo(x,y):ctx.moveTo(x,y)); ctx.stroke();
      // segmento acceso
      const [hx, hy, hi] = pointAt(tr, head), [tx, ty, ti] = pointAt(tr, tail);
      ctx.strokeStyle = rgba(GOLDL, .5 * lift);
      ctx.beginPath(); ctx.moveTo(tx, ty);
      for (let i = ti; i < hi; i++) ctx.lineTo(tr.pts[i][0], tr.pts[i][1]);
      ctx.lineTo(hx, hy); ctx.stroke();
      // nodi
      ctx.fillStyle = rgba(GOLDL, .45 * lift);
      for (let i = 0; i < hi && i < tr.pts.length; i++) { ctx.beginPath(); ctx.arc(tr.pts[i][0], tr.pts[i][1], 2, 0, 6.28); ctx.fill(); }
      // testa luminosa
      if (tr.t <= 1) {
        const g = ctx.createRadialGradient(hx, hy, 0, hx, hy, 14);
        g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(.35, rgba(GOLD, .55)); g.addColorStop(1, rgba(GOLD, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(hx, hy, 14, 0, 6.28); ctx.fill();
      }
      ctx.restore();
    }
    // particelle
    for (const q of parts) {
      if (!RM) { q.y -= q.s * q.z * boost; q.x += Math.sin(time * .0006 + q.ph) * .25 * q.z; }
      if (q.y < -10) Object.assign(q, newPart(false));
      const y = ((q.y - sy * q.z * 0.15) % H + H) % H;
      const tw = .6 + .4 * Math.sin(time * .002 + q.ph);
      ctx.fillStyle = rgba(q.r > 1.6 ? GOLDL : (q.ph > 4.6 ? PERI : GOLD), Math.min(.85, q.a * tw * lift * .8));
      ctx.beginPath(); ctx.arc(q.x, y, q.r * q.z * 1.4, 0, 6.28); ctx.fill();
    }
  }


  /* ---------- hero: "H-FRAME" scritto da un terminale (cursore + decodifica) ----------
     Il testo è disegnato su una canvas fuori schermo (tcv) e poi sulla canvas visibile,
     così la dissolvenza a pixel e il glitch guidati dallo scroll continuano a funzionare.
     L'animazione gira da sola: lo scroll non è mai bloccato. */
  const WORD = 'H-FRAME', WORD_VW = .74, WORD_MAX_W = 980;
  const FONT = '"HFrame Serif"', INK = '#C9A24A', CIPHER_INK = '#F7F0E1';
  const CIPHER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&<>/{}=+*?!@[]';
  // tempi del ciclo (ms): vuoto → scrittura → parola intera → cancellazione → vuoto
  const T_BLANK = 900, T_CHAR = 290, T_SCR = 190, T_HOLD = 5200, T_DEL = 95, T_GAP = 350;
  const T_TYPE = WORD.length * T_CHAR, T_BACK = WORD.length * T_DEL;
  const CYCLE = T_BLANK + T_TYPE + T_HOLD + T_BACK + T_GAP;
  const bcv = $('.banner-cv'), bctx = bcv.getContext('2d');
  const tcv = document.createElement('canvas'), tctx = tcv.getContext('2d');
  const lframe = $('.logo-frame'), heroEl = $('.hero');
  let bW = 0, bH = 0, bDPR = 1, blocks = [], bsize = 16, glitchUntil = 0, nextGlitch = 2500;
  let fontReady = false, fs = 100, cap = 70, adv = [], wordW = 0, t0 = -1;
  const scr = WORD.split('').map(() => ({ ch: '', until: 0 }));
  function layoutWord() {
    tctx.font = `700 100px ${FONT}`;
    const a100 = WORD.split('').map(c => tctx.measureText(c).width);
    const w100 = a100.reduce((s, v) => s + v, 0);
    const target = Math.min(bW * WORD_VW, WORD_MAX_W);
    fs = 100 * target / w100;
    tctx.font = `700 ${fs}px ${FONT}`;
    cap = tctx.measureText('H').actualBoundingBoxAscent || fs * .72;
    adv = WORD.split('').map(c => tctx.measureText(c).width);
    wordW = adv.reduce((s, v) => s + v, 0);
  }
  function bResize() {
    bDPR = Math.min(devicePixelRatio || 1, 2);
    bW = bcv.clientWidth; bH = bcv.clientHeight;
    for (const cv of [bcv, tcv]) { cv.width = Math.round(bW * bDPR); cv.height = Math.round(bH * bDPR); }
    bctx.setTransform(bDPR, 0, 0, bDPR, 0, 0); tctx.setTransform(bDPR, 0, 0, bDPR, 0, 0);
    bsize = bW < 600 ? 5 : 9;
    blocks = [];
    const cols = Math.ceil(bW / bsize), rows = Math.ceil(bH / bsize);
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const bay = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]][r % 4][c % 4] / 16;
      blocks.push([c * bsize, r * bsize, bay * .45 + Math.random() * .3 + (1 - r / rows) * .25]);
    }
    layoutWord();
  }
  function bannerRect(pb) { // rettangolo della parola (altezza = altezza delle maiuscole)
    const w = wordW, h = cap, y = bH * .45 - h / 2;
    const s = 1 + pb * .35, w2 = w * s, h2 = h * s;
    return [(bW - w2) / 2, y - (h2 - h) / 2 - pb * bH * .1, w2, h2, s];
  }
  // stato del terminale al tempo t: quanti caratteri si vedono, quale sta decodificando, cursore
  function typeState(time) {
    if (RM) return { n: WORD.length, dec: -1, cursor: false, hold: true };
    if (t0 < 0) t0 = time;
    const t = (time - t0) % CYCLE;
    const blink = Math.floor(time / 380) % 2 === 0;
    if (t < T_BLANK) return { n: 0, dec: -1, cursor: blink };
    if (t < T_BLANK + T_TYPE) {
      const u = t - T_BLANK, i = Math.floor(u / T_CHAR), inChar = u - i * T_CHAR;
      return { n: i + 1, dec: inChar < T_SCR ? i : -1, cursor: true };
    }
    if (t < T_BLANK + T_TYPE + T_HOLD) return { n: WORD.length, dec: -1, cursor: false, hold: true };
    const u = t - T_BLANK - T_TYPE - T_HOLD;
    if (u < T_BACK) {
      const gone = Math.floor(u / T_DEL), inDel = u - gone * T_DEL;
      const n = WORD.length - gone;
      return { n, dec: inDel > T_DEL * .45 ? n - 1 : -1, cursor: true };
    }
    return { n: 0, dec: -1, cursor: blink };
  }
  function drawWord(time, st, x, y, w, h, s) {
    tctx.clearRect(0, 0, bW, bH);
    tctx.font = `700 ${fs * s}px ${FONT}`; tctx.textBaseline = 'alphabetic'; tctx.textAlign = 'left';
    const base = y + h; let cx = x;
    for (let i = 0; i < st.n; i++) {
      const aw = adv[i] * s, c = WORD[i];
      if (i === st.dec) { // decodifica: caratteri casuali che cambiano velocemente
        const sc = scr[i];
        if (time > sc.until) { sc.ch = CIPHER[Math.random() * CIPHER.length | 0]; sc.until = time + 45; }
        tctx.fillStyle = CIPHER_INK; tctx.textAlign = 'center';
        tctx.fillText(sc.ch, cx + aw / 2, base, aw * 1.05); tctx.textAlign = 'left';
      } else { tctx.fillStyle = INK; tctx.fillText(c, cx, base); }
      cx += aw;
    }
    if (st.cursor) { // cursore a blocco, alto come le lettere
      tctx.fillStyle = INK; tctx.fillRect(cx + h * .1, y, h * .62, h);
    }
  }
  function drawBanner(time, pb) {
    if (!fontReady || !bW) return;
    const st = typeState(time);
    const glitching = !RM && st.hold && pb < .02 && time < glitchUntil;
    if (!RM && time > nextGlitch) { glitchUntil = time + 150; nextGlitch = time + 2600 + Math.random() * 2800; }
    const [x, y, w, h, s] = bannerRect(pb);
    if (lframe) { const k = 1 + pb * 1.5, pad = Math.max(16, h * .55) * k, padX = Math.max(16, h * .95) * k; // spazio a destra anche per il cursore
      lframe.style.cssText = `left:${x - padX}px;top:${y - pad}px;width:${w + padX * 2}px;height:${h + pad * 2}px`;
      if (heroEl && pb < .001) { heroEl.style.setProperty('--word-h', h + 'px'); heroEl.style.setProperty('--frame-pad', pad + 'px'); } }
    drawWord(time, st, x, y, w, h, s);
    bctx.clearRect(0, 0, bW, bH);
    const dk = Math.max(0, (pb - .12) / .88); // la dissolvenza parte dopo un po' di scroll
    bctx.globalAlpha = RM ? 1 - dk : 1 - dk * .35;
    bctx.drawImage(tcv, 0, 0, bW, bH);
    bctx.globalAlpha = 1;
    if (glitching) { // piccolo glitch: 2-3 fette orizzontali spostate e tinte di verde
      const nS = 2 + (Math.random() * 2 | 0);
      for (let i = 0; i < nS; i++) {
        const sh = h * (.08 + Math.random() * .14), sy0 = y + Math.random() * (h - sh), dx = (Math.random() - .5) * w * .04;
        bctx.clearRect(x - 2, sy0, w + 4, sh);
        bctx.drawImage(tcv, 0, sy0 * bDPR, tcv.width, sh * bDPR, dx, sy0, bW, sh);
        bctx.globalCompositeOperation = 'source-atop'; bctx.fillStyle = 'rgba(138,42,62,.8)'; bctx.fillRect(x + dx, sy0, w, sh); bctx.globalCompositeOperation = 'source-over';
      }
    }
    if (!RM && dk > 0) {
      const k = dk * 1.25, edge = .05, x0 = Math.max(0, x), y0 = Math.max(0, y), x1 = Math.min(bW, x + w + h), y1 = Math.min(bH, y + h);
      bctx.globalCompositeOperation = 'source-atop'; // i pixel che brillano restano sulla sagoma delle lettere
      for (const [bx, by, t] of blocks) {
        if (bx + bsize < x0 || bx > x1 || by + bsize < y0 || by > y1) continue;
        if (t < k - edge) bctx.clearRect(bx, by, bsize, bsize);
        else if (t < k && ((bx / bsize + by / bsize) % 2 === 0)) {
          bctx.fillStyle = t < k - edge / 2 ? 'rgba(232,212,154,.75)' : 'rgba(201,162,74,.7)';
          bctx.fillRect(bx, by, bsize, bsize);
        }
      }
      bctx.globalCompositeOperation = 'source-over';
    }
  }
  bResize(); addEventListener('resize', bResize, { passive: true });
  if (window.ResizeObserver) new ResizeObserver(() => { if (bcv.clientWidth !== bW || bcv.clientHeight !== bH) bResize(); }).observe(bcv);
  (document.fonts ? document.fonts.load(`700 100px ${FONT}`) : Promise.resolve())
    .catch(() => {}).then(() => { fontReady = true; layoutWord(); });
  /* ---------- epoche: progresso dello scroll nella sezione "pinnata" ---------- */
  const erasSec = $('.eras'), eraLabel = $('.era-label');
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  function updateEras() {
    if (!erasSec) return;
    const r = erasSec.getBoundingClientRect();
    const e = clamp(-r.top / Math.max(1, r.height - vh));           // 0 → 1 mentre la sezione è bloccata
    const enter = clamp(1 - r.top / vh);                             // 0 → 1 mentre entra nello schermo
    erasSec.style.setProperty('--e', e.toFixed(4));
    erasSec.style.setProperty('--in', enter.toFixed(4));
    // parole: la frase principale si accende parola per parola, poi "Stai al passo." esplode in verde
    const n = eraWords.length, nl = eraWords.filter(w => w.classList.contains('lw')).length;
    eraWords.forEach((w, i) => {
      const isP = !w.classList.contains('lw');
      const start = isP ? .58 + (i - nl) * .06 : .02 + i * (.5 / Math.max(1, nl));
      const t = RM ? 1 : clamp((e - start) / (isP ? .1 : .09));
      w.style.setProperty('--t', t.toFixed(3));
    });
    // etichette epoca: scorrono con lo scroll, finiscono su "Oggi: AI"
    if (eraList.length) {
      const idx = Math.min(eraList.length - 1, Math.floor(clamp(e / .82) * (eraList.length - 1) + .0001));
      if (idx !== eraIdx) {
        eraIdx = idx;
        eraLabel.textContent = eraList[idx];
        eraLabel.classList.toggle('now', idx === eraList.length - 1);
        if (!RM) { eraLabel.classList.remove('flip'); void eraLabel.offsetWidth; eraLabel.classList.add('flip'); }
        $$('.era-dots li').forEach((li, i) => { li.classList.toggle('on', i <= idx); li.classList.toggle('cur', i === idx); });
      }
    }
  }

  /* ---------- loop rAF ---------- */
  let p = 0, mx = 0, rafId = 0;
  function frame(time) {
    vel += ((sy - lastY) - vel) * 0.2; lastY = sy;
    const target = Math.min(1, Math.max(0, sy / Math.max(1, vh * 0.6))); // il banner sparisce in ~60% di schermo
    p += (target - p) * (RM ? 1 : 0.22);
    root.style.setProperty('--p', p.toFixed(4));
    bar.style.transform = `scaleX(${Math.min(1, sy / Math.max(1, docH)).toFixed(4)})`;
    // marquee: scorre da solo e accelera con lo scroll
    if (!RM) {
      mx -= 0.6 + Math.abs(vel) * 0.35;
      const half = track.scrollWidth / 2;
      if (-mx > half) mx += half;
      track.style.transform = `translate3d(${mx}px,0,0)`;
    }
    // parole: si accendono quando superano il 78% dello schermo
    const line = vh * 0.78;
    for (const w of words) {
      const on = w.getBoundingClientRect().top < line;
      if (on !== w._on) { w._on = on; w.classList.toggle('on', on); }
    }
    draw(time, p);
    drawBanner(time, p);
    updateEras();
    rafId = requestAnimationFrame(frame); // un solo loop: il browser lo rallenta da solo quando la scheda è nascosta
  }
  resize(); addEventListener('resize', resize, { passive: true });
  function startLoop() { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(frame); }
  // ritorno con "indietro" (bfcache) o ricarica: ricalcola tutto e riparte da uno stato pulito
  addEventListener('pageshow', e => {
    sy = scrollY; lastY = sy; measure(); bResize(); t0 = -1;
    $$('.reveal,.btn').forEach(el => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('in'); });
    if (e.persisted) startLoop();
  });
  startLoop();

  /* ---------- intro: badge "Scegli la tua lingua" ---------- */
  const intro = $('#intro');
  $$('.lang-toggle button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.set, true)));
  function sparks(x, y) {
    if (RM) return;
    for (let i = 0; i < 18; i++) {
      const s = document.createElement('i'); s.className = 'spark';
      const a = (i / 18) * Math.PI * 2 + Math.random() * .3, d = 70 + Math.random() * 90;
      s.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px;--r:${Math.random() * 360}deg`;
      document.body.appendChild(s); setTimeout(() => s.remove(), 900);
    }
  }
  function reveal() {
    root.classList.remove('intro');
    intro && intro.remove();
    measure();
  }
  if (root.classList.contains('intro') && intro) {
    $$('.pick', intro).forEach(btn => btn.addEventListener('click', e => {
      if (intro.classList.contains('out')) return;
      setLang(btn.dataset.pick, true);
      btn.classList.add('chosen');
      const r = btn.getBoundingClientRect(); sparks(r.left + r.width / 2, r.top + r.height / 2);
      intro.classList.add('out');
      t0 = performance.now(); // la scritta riparte da capo mentre il badge esce
      root.classList.add('revealing');
      setTimeout(reveal, RM ? 350 : 950);
    }));
  } else if (intro) intro.remove();
})();

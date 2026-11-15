/* H-FRAME — pagina info: costruisce i contenuti dalla lingua scelta, indice, accordion, comparsa allo scroll */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement, KEY = 'hframe-lang';
  const T = window.HFRAME_INFO, L = window.HFRAME_LINKS || {};
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IDS = ['cose', 'branche', 'funziona', 'partecipa', 'entra', 'faq', 'contatti'];
  const esc = s => s; // i testi sono nostri (info-i18n.js), possono contenere HTML semplice
  const ph = s => s.replace(/\[([^\]]*)\]/g, '<mark class="ph">[$1]</mark>'); // segnaposto evidenziati
  const isReal = u => u && !u.startsWith('#');
  const ICON = {
    form: '<svg viewBox="0 0 24 24"><path d="M8 3h8l1 2h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2l1-2Z"/><path d="M8 11h8M8 15h5"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" class="fill"><path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.9L2.2 21.8l4.8-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"/></svg>'
  };
  const btn = b => {
    const href = L[b.link] || '#';
    return `<a class="btn ${b.cls}" href="${href}"${isReal(href) ? ' target="_blank" rel="noopener"' : ''}>
      <span class="ico">${ICON[b.link]}</span><span class="txt"><strong>${b.t}</strong><small>${b.s}</small></span><span class="arr">→</span></a>`;
  };
  const kicker = (i, k) => `<p class="kicker">${String(i + 1).padStart(2, '0')} — ${k}</p>`;

  function render(lang) {
    const t = T[lang];
    const n = id => IDS.indexOf(id);
    const contact = (label, url, shown) => `<li><span class="k">${label}</span>${isReal(url)
      ? `<a href="${url}" target="_blank" rel="noopener">${shown}</a>` : ph(t.contacts.missing)}</li>`;
    const handle = u => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
    const html = `
    <section class="hero" aria-labelledby="h1">
      <h1 id="h1" class="reveal">${t.heroTitle.replace(/^H-FRAME:/, '<span class="hl">H-FRAME:</span>')}</h1>
      <p class="sub reveal">${t.heroSub}</p>
      <nav class="toc reveal" aria-labelledby="tocT">
        <p class="toc-title" id="tocT">${t.tocTitle}</p>
        <ol>${IDS.map(id => `<li><a href="#${id}">${t.s[id]}</a></li>`).join('')}</ol>
      </nav>
    </section>

    <section id="cose" class="lead">
      ${kicker(n('cose'), t.s.cose)}
      <h2 class="reveal">${t.s.cose}</h2>
      ${t.about.map(p => `<p class="reveal">${p}</p>`).join('')}
    </section>

    <section id="branche">
      ${kicker(n('branche'), t.s.branche)}
      <h2 class="reveal">${t.branchesTitle}</h2>
      <div class="cards">${t.branches.map(b => `
        <article class="card ${b.cls} reveal"><h3><span class="emo" aria-hidden="true">${b.icon}</span>${b.name}</h3><p>${b.text}</p></article>`).join('')}
      </div>
    </section>

    <section id="funziona">
      ${kicker(n('funziona'), t.s.funziona)}
      <h2 class="reveal">${t.howTitle}</h2>
      <p class="reveal">${t.howIntro}</p>
      <ol class="steps">${t.steps.map(s => `<li class="reveal"><p><strong>${s[0]}</strong> ${s[1]}</p></li>`).join('')}</ol>
      <div class="month reveal"><h3>${t.monthTitle}</h3>
        <ol>${t.month.map(m => `<li><strong>${m[0]}</strong><span>${m[1]}</span></li>`).join('')}</ol></div>
      <p class="note reveal">${t.howOutro}</p>
    </section>

    <section id="partecipa">
      ${kicker(n('partecipa'), t.s.partecipa)}
      <h2 class="reveal">${t.joinTitle}</h2>
      <div class="roles">${t.roles.map(r => `<div class="role reveal"><span class="emo" aria-hidden="true">${r[0]}</span><p><strong>${r[1]}</strong> ${r[2]}</p></div>`).join('')}</div>
    </section>

    <section id="entra">
      ${kicker(n('entra'), t.s.entra)}
      <h2 class="reveal">${t.enterTitle}</h2>
      <ol class="enter">${t.enter.map(e => `<li class="reveal"><p><strong>${e.lead}</strong> ${e.text}</p>${e.btn ? btn(e.btn) : ''}</li>`).join('')}</ol>
    </section>

    <section id="faq">
      ${kicker(n('faq'), t.s.faq)}
      <h2 class="reveal">${t.faqTitle}</h2>
      <div class="faq">${t.faq.map((f, i) => `<details class="reveal"${i === 0 ? '' : ''}><summary>${f[0]}</summary><div class="ans"><p>${ph(f[1])}</p></div></details>`).join('')}</div>
    </section>

    <section id="contatti">
      ${kicker(n('contatti'), t.s.contatti)}
      <h2 class="reveal">${t.contactsTitle}</h2>
      <ul class="contacts reveal">
        ${contact(t.contacts.instagram, L.instagram, isReal(L.instagram) ? handle(L.instagram) : '')}
        ${contact(t.contacts.tiktok, L.tiktok, isReal(L.tiktok) ? handle(L.tiktok) : '')}
        ${contact(t.contacts.whatsapp, L.whatsapp, lang === 'it' ? 'Entra nel gruppo →' : 'Join the group →')}
        <li><span class="k">${t.contacts.email}</span>${ph(t.contacts.emailValue)}</li>
      </ul>
      <div class="closing reveal"><p>${t.closing1}</p><p class="punch">${t.closing2}</p></div>
    </section>`;
    $('#content').innerHTML = html;
    // testi fissi (header, footer, pulsante indice)
    $$('[data-i18n]').forEach(el => { const v = t[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
    $$('[data-i18n-attr]').forEach(el => { const [a, k] = el.dataset.i18nAttr.split(':'); if (t[k]) el.setAttribute(a, t[k]); });
    $('.sheet-list').innerHTML = IDS.map(id => `<li><a href="#${id}" data-id="${id}">${t.s[id]}</a></li>`).join('');
    document.title = t.title;
    const md = $('meta[name=description]'); if (md) md.content = t.desc;
    root.lang = lang; root.dataset.lang = lang;
    $$('.lang-toggle button').forEach(b => b.setAttribute('aria-pressed', b.dataset.set === lang));
    observe();
    cur = ''; updateCurrent();
  }

  /* comparsa allo scroll */
  let io;
  function observe() {
    if (io) io.disconnect();
    if (RM || !('IntersectionObserver' in window)) { $$('.reveal').forEach(e => e.classList.add('in')); return; }
    io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    $$('.reveal').forEach((e, i) => { e.style.transitionDelay = (e.closest('.cards,.roles,.steps,.faq,.enter') ? (i % 4) * 0.06 : 0) + 's'; io.observe(e); });
  }

  /* lingua */
  let lang = root.dataset.lang === 'en' ? 'en' : 'it';
  $$('.lang-toggle button').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.set === lang) return;
    lang = b.dataset.set; try { localStorage.setItem(KEY, lang); } catch (e) {}
    const y = scrollY; render(lang); scrollTo(0, y);
  }));

  /* indice fisso + sezione corrente + barra di avanzamento */
  const fab = $('.toc-fab'), sheet = $('#tocSheet'), bar = $('.progress span');
  let cur = '', ticking = false;
  function updateCurrent() {
    const toc = $('.toc'); const past = toc ? toc.getBoundingClientRect().bottom < 0 : false;
    fab.classList.toggle('show', past);
    let id = '';
    for (const s of IDS) { const el = document.getElementById(s); if (el && el.getBoundingClientRect().top < innerHeight * .35) id = s; }
    if (id !== cur) {
      cur = id;
      $('.cur', fab).textContent = id ? T[lang].s[id] : '';
      $$('.sheet-list a').forEach(a => a.classList.toggle('on', a.dataset.id === id));
    }
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; updateCurrent(); }); } }, { passive: true });
  addEventListener('resize', updateCurrent, { passive: true });
  const openSheet = () => { sheet.hidden = false; fab.setAttribute('aria-expanded', 'true'); const a = $('.sheet-list a.on') || $('.sheet-list a'); a && a.focus({ preventScroll: true }); };
  const closeSheet = () => { sheet.hidden = true; fab.setAttribute('aria-expanded', 'false'); };
  fab.addEventListener('click', openSheet);
  $('.sheet-x').addEventListener('click', () => { closeSheet(); fab.focus(); });
  sheet.addEventListener('click', e => { if (e.target === sheet) closeSheet(); if (e.target.closest('.sheet-list a')) closeSheet(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) { closeSheet(); fab.focus(); } });

  // link interni: scorrimento morbido (CSS) + aggiorna l'URL senza salti
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const el = document.getElementById(a.getAttribute('href').slice(1)); if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + el.id);
    el.querySelectorAll('.reveal').forEach(r => r.classList.add('in'));
  });

  render(lang);
  // arrivo diretto con #sezione nell'URL
  if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) { el.querySelectorAll('.reveal').forEach(r => r.classList.add('in')); requestAnimationFrame(() => el.scrollIntoView()); } }
})();

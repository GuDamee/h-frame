# H-FRAME — landing page (QR)

Sito statico, una pagina, mobile-first. Nessuna build, nessuna dipendenza esterna (font self-hosted in assets/fonts).

## Brand
- Sito verde chiaro: sfondo #C2DCB9, testo e logo neri #000. Effetti (particelle, circuiti, glitch, dissolvenza a pixel) in #187A30, #003A0A, #88B884 e nero. Variabili in cima a `assets/style.css`.
- Hero: la scritta "H-FRAME" digitata da un terminale (cursore a blocco, ogni lettera si "decodifica" da caratteri casuali, resta ferma ~5 s, poi si cancella e riparte). Font DejaVu Serif Bold (lo stesso del video di riferimento; licenza in assets/fonts/DejaVu-LICENSE.txt), sottoinsieme in assets/fonts/DejaVuSerif-Bold-sub.woff2. Tempi e testo in cima alla sezione "hero" di assets/main.js (WORD, T_HOLD, ...). Lo scroll non è mai bloccato; con "riduci movimento" la parola è fissa.
- Logo v4 (stesso font): `assets/hframe-logo-v4.png` nel badge della lingua e nel footer; originali in ../v4/. Il vecchio `assets/hframe-logo.png` resta ma non è più usato.
- Nessun banner: è stato rimosso.
- Pulsanti: Form blu navy #23254E, Presentazione terracotta #E2725B (testo bianco); WhatsApp verde, Instagram gradiente, TikTok nero.
- Favicon `assets/favicon-v4.png` + `assets/apple-touch-icon-v4.png` (H serif nera su verde chiaro), anteprima social `assets/og-v4.png`.

## Cambiare i link
Apri `config.js` e sostituisci i 5 valori:
```js
window.HFRAME_LINKS = {
  form: "https://forms.gle/...",
  whatsapp: "https://chat.whatsapp.com/...",
  instagram: "https://instagram.com/...",
  tiktok: "https://www.tiktok.com/@...",
  presentazione: "https://..."   // PDF / Slides / Canva IT-EN
};
```
I link veri si aprono in una nuova scheda; finché restano "#..." no.

## Testi e lingue (IT / EN)
Tutti i testi sono in `i18n.js` (dizionario `it` / `en`). Modifica lì, non in index.html.
Alla prima visita compare il badge "Scegli la tua lingua"; la scelta resta salvata (localStorage `hframe-lang`)
e si cambia col toggle IT/EN in alto a destra. Link diretto a una lingua: `?lang=en` o `?lang=it`.

## Pubblicare
- **Netlify (più veloce):** app.netlify.com/drop → trascina la cartella `sito`. Ottieni subito un URL https da mettere nel QR.
- **GitHub Pages:** crea un repo, carica il contenuto di `sito/` nella root, Settings → Pages → branch `main` / root.
- Qualsiasi hosting statico (Vercel, Cloudflare Pages) funziona uguale.

Le cartelle `screenshots/` e i file `preview.*` servono solo come anteprima: si possono non caricare.

## Test locale
`python3 -m http.server 8765` dentro `sito/` e apri http://localhost:8765

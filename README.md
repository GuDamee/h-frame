# H-FRAME — landing page (QR)

Sito statico, una pagina, mobile-first. Nessuna build, nessuna dipendenza esterna (font self-hosted in assets/fonts).

## Brand
- Palette v5 bordeaux & oro: fondo bordeaux profondo #3D0F19 / bordeaux #6B1E2E (#8A2A3E nei gradienti, #24080F per i fondi più scuri), oro #C9A24A / oro chiaro #E8D49A (#A8832F oro scuro), avorio #F7F0E1 per testo e superfici chiare, inchiostro #2A0911 sulle superfici chiare. Il banner scritto a macchina è in oro, i caratteri «scramble» sono avorio. Variabili in cima a `assets/style.css` e `info/info.css`.
- Hero: la scritta "H-FRAME" digitata da un terminale (cursore a blocco, ogni lettera si "decodifica" da caratteri casuali, resta ferma ~5 s, poi si cancella e riparte). Font DejaVu Serif Bold (lo stesso del video di riferimento; licenza in assets/fonts/DejaVu-LICENSE.txt), sottoinsieme in assets/fonts/DejaVuSerif-Bold-sub.woff2. Tempi e testo in cima alla sezione "hero" di assets/main.js (WORD, T_HOLD, ...). Lo scroll non è mai bloccato; con "riduci movimento" la parola è fissa.
- Logo v4 (stesso font): `assets/hframe-logo-v4.png` nel badge della lingua e nel footer; originali in ../v4/. Il vecchio `assets/hframe-logo.png` resta ma non è più usato.
- Nessun banner: è stato rimosso.
- Pulsanti: Form bordeaux (bordo oro, testo avorio), WhatsApp avorio con icona verde WhatsApp, «Scopri di più» oro (testo inchiostro). Instagram e TikTok: piccole pillole «A breve 👀» sotto le email.
- Logo v5: `assets/hframe-logo-v5.png` (oro, per fondi scuri), `assets/hframe-logo-v5-bordeaux.png` (per fondi chiari); favicon `assets/favicon-v5.png`, `assets/apple-touch-icon-v5.png` (H oro su bordeaux), anteprima social `assets/og-v5.png`. Sorgenti e profilo social in /workspace/hframe/v5/ (script `make_v5.py`).

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

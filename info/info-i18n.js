/* =====================================================================
   H-FRAME — PAGINA INFO: TESTI (IT + EN)
   I testi tra [parentesi quadre] sono segnaposto: vengono evidenziati in giallo
   sulla pagina. Sostituiscili con il testo vero (togliendo le parentesi).
   I link (form, WhatsApp, Instagram, TikTok) arrivano da /config.js.
   ===================================================================== */
window.HFRAME_INFO = {
  it: {
    title: "Info · H-FRAME · AI & Cybersecurity Club",
    desc: "Tutto su H-FRAME, il club di H-FARM College per AI e cybersecurity: cos'è, come funziona, come partecipare e come entrare.",
    home: "Torna alla home",
    toggleLabel: "Lingua",
    tocTitle: "Indice",
    tocBtn: "Indice",
    close: "Chiudi",
    heroTitle: "H-FRAME: intelligenza artificiale e cybersecurity, per tutti.",
    heroSub: "Dalla curiosità all'autonomia: il club di H-FARM College per imparare a usare la tecnologia, e a difenderla, davvero.",
    s: {
      cose: "Cos'è H-FRAME",
      branche: "Due branche",
      funziona: "Come funziona",
      partecipa: "Partecipa",
      entra: "Come si entra",
      faq: "Domande frequenti",
      contatti: "Contatti"
    },
    about: [
      "Ogni giorno apri un chatbot, scrivi una richiesta e in pochi secondi hai una risposta. Ma sai cosa succede dietro lo schermo? Sai perché un modello gratuito non è uguale a uno a pagamento, o cos'è di preciso un agente AI? E quando clicchi un link, scarichi un file o condividi un dato, sai cosa stai rischiando e come proteggerti?",
      "Sono due facce della stessa medaglia: più l'AI entra nel nostro modo di studiare e lavorare, più serve saperla usare bene e saper difendere ciò che le affidiamo. H-FRAME tiene insieme le due cose. È aperto a tutti gli studenti, di qualsiasi corso, e alcuni eventi sono aperti anche al pubblico esterno. Non serve saper programmare: basta la curiosità."
    ],
    branchesTitle: "Due branche, un unico club",
    branches: [
      { icon: "🤖", name: "H-FRAME AI", cls: "ai",
        text: "Capirai come funzionano i modelli linguistici (LLM), cioè i \"cervelli\" dietro chatbot come ChatGPT, Claude o Gemini, e gli agenti AI, programmi che non si limitano a rispondere ma compiono azioni al posto tuo, come scrivere un'email o organizzare un file. Saprai scegliere tra modelli a pagamento, open source (con il codice aperto a tutti) e open weight (scaricabili e usabili anche sul tuo computer), in base a ciò che ti serve. Imparerai ad automatizzare i compiti che ti rubano tempo, come report, email e ricerche, e a usare l'AI in modo responsabile, capendo quando fidarti e quando no. Si parte da zero e si arriva a costruire il tuo primo agente." },
      { icon: "🔐", name: "H-FRAME Cyber", cls: "cyber",
        text: "Imparerai a riconoscere gli attacchi più comuni e a difenderti. Tra questi ci sono il phishing, cioè email e messaggi falsi che cercano di rubarti password o dati, i link e file malevoli e le password deboli. Capirai come funziona un programma, come se ne trovano le vulnerabilità (i punti deboli che un attaccante potrebbe sfruttare) e quali strumenti di base usano i professionisti. Tutto si svolge su sistemi e ambienti di prova che abbiamo il permesso di testare: puoi sperimentare e sbagliare senza rischi." },
      { icon: "🤝", name: "Dove si incontrano", cls: "both",
        text: "Molti eventi uniranno le due branche: vedremo come l'AI può rendere i sistemi più sicuri, e come proteggere i tuoi dati quando lavori con l'AI. Altri eventi saranno dedicati a una sola delle due." }
    ],
    howTitle: "Come funziona",
    howIntro: "Ogni mese c'è un tema diverso, con almeno due incontri, sempre tra teoria e pratica.",
    steps: [
      ["Il talk:", "un professionista o un'azienda che lavora ogni giorno con l'AI o la sicurezza ci porta dentro casi reali."],
      ["L'approfondimento:", "riprendiamo insieme quello che abbiamo ascoltato, partendo dalle basi per chi inizia da zero."],
      ["Il workshop:", "mettiamo le mani su tutto ciò che abbiamo imparato, con esercizi e casi pratici."]
    ],
    monthTitle: "Un esempio di mese.",
    month: [
      ["Tema:", "\"Fai lavorare l'AI per te\"."],
      ["Prima settimana:", "un professionista racconta come usa gli agenti AI nel suo lavoro."],
      ["Settimane successive:", "capiamo insieme cos'è un agente e come si collega a email e documenti."],
      ["A fine mese:", "ognuno costruisce un piccolo agente che riassume le email o organizza gli appunti."]
    ],
    howOutro: "Il percorso è progressivo, dalle basi ai temi avanzati, e da ogni incontro esci con qualcosa di concreto.",
    joinTitle: "Partecipa come vuoi tu",
    roles: [
      ["👀", "Visitatore:", "vieni agli eventi che ti interessano, quando vuoi. Nessun impegno, nessun requisito."],
      ["🧠", "Organizzatore:", "entri nel team che dà vita al club e aiuti a ideare e realizzare gli eventi. Fai esperienza e costruisci una rete di contatti."],
      ["📱", "Social media manager:", "racconti H-FRAME su Instagram e TikTok. Metti in pratica creatività e comunicazione e costruisci il tuo portfolio."]
    ],
    enterTitle: "Come si entra",
    enter: [
      { lead: "Compila il form:", text: "ci dici cosa vuoi imparare e come vuoi partecipare. Puoi lasciarci un problema concreto da risolvere, come un compito da automatizzare, un dubbio sulla sicurezza dei tuoi dati o un progetto.",
        btn: { link: "form", cls: "b-form", t: "Compila il form", s: "Iscriviti al club" } },
      { lead: "Entra nel gruppo WhatsApp:", text: "lì arrivano date, luoghi e novità di ogni evento.",
        btn: { link: "whatsapp", cls: "b-wa", t: "Entra nel gruppo WhatsApp", s: "Novità, eventi e workshop" } },
      { lead: "Vieni al primo incontro:", text: "il resto si impara lì." }
    ],
    faqTitle: "Domande frequenti",
    faq: [
      ["Costa qualcosa?", "[Gratis per gli studenti di H-FARM College.]"],
      ["Dove e quando ci vediamo?", "[In campus a H-FARM, di solito il ... alle ...]. Date e luoghi precisi arrivano nel gruppo WhatsApp."],
      ["Devo portare il computer?", "[Per i talk no; per i workshop sì, porta il tuo portatile.]"],
      ["Non so niente di AI o informatica, va bene?", "Sì, è proprio per te: ogni tema parte dalle basi."],
      ["Devo partecipare a tutti gli incontri?", "No, vieni a quelli che ti interessano."],
      ["In che lingua si svolgono?", "[Italiano / inglese.]"]
    ],
    contactsTitle: "Contatti",
    contacts: { instagram: "Instagram", tiktok: "TikTok", whatsapp: "WhatsApp (gruppo)", email: "Email", emailValue: "[...]", missing: "[da aggiungere]" },
    closing1: "L'AI e la cybersecurity stanno cambiando ogni lavoro. Puoi subirle, oppure imparare a usarle e a difenderti.",
    closing2: "Ogni epoca ha la sua innovazione. Stai al passo.",
    footer: "Club studentesco di AI &amp; Cybersecurity · H-FARM College",
    backHome: "← Torna alla home"
  },

  en: {
    title: "Info · H-FRAME · AI & Cybersecurity Club",
    desc: "All about H-FRAME, the H-FARM College club for AI and cybersecurity: what it is, how it works, how to get involved and how to join.",
    home: "Back to home",
    toggleLabel: "Language",
    tocTitle: "Contents",
    tocBtn: "Contents",
    close: "Close",
    heroTitle: "H-FRAME: artificial intelligence and cybersecurity, for everyone.",
    heroSub: "From curiosity to independence: the H-FARM College club where you learn to really use technology, and to defend it.",
    s: {
      cose: "What is H-FRAME",
      branche: "Two branches",
      funziona: "How it works",
      partecipa: "Get involved",
      entra: "How to join",
      faq: "FAQ",
      contatti: "Contacts"
    },
    about: [
      "Every day you open a chatbot, type a request and get an answer in seconds. But do you know what happens behind the screen? Do you know why a free model isn't the same as a paid one, or what exactly an AI agent is? And when you click a link, download a file or share some data, do you know what you're risking and how to protect yourself?",
      "They're two sides of the same coin: the more AI becomes part of how we study and work, the more we need to know how to use it well and how to protect what we entrust to it. H-FRAME brings the two together. It's open to all students, from any programme, and some events are open to the public too. You don't need to know how to code: curiosity is enough."
    ],
    branchesTitle: "Two branches, one club",
    branches: [
      { icon: "🤖", name: "H-FRAME AI", cls: "ai",
        text: "You'll understand how language models (LLMs) work, the \"brains\" behind chatbots like ChatGPT, Claude or Gemini, and AI agents, programs that don't just answer but take actions for you, like writing an email or organising a file. You'll know how to choose between paid models, open source models (with code open to everyone) and open weight models (which you can download and run on your own computer), depending on what you need. You'll learn to automate the tasks that eat up your time, like reports, emails and research, and to use AI responsibly, knowing when to trust it and when not to. We start from zero and work up to building your first agent." },
      { icon: "🔐", name: "H-FRAME Cyber", cls: "cyber",
        text: "You'll learn to recognise the most common attacks and to defend yourself. They include phishing, fake emails and messages that try to steal your passwords or data, malicious links and files, and weak passwords. You'll understand how a program works, how its vulnerabilities are found (the weak spots an attacker could exploit) and which basic tools professionals use. Everything happens on test systems and environments we have permission to test: you can experiment and make mistakes without any risk." },
      { icon: "🤝", name: "Where they meet", cls: "both",
        text: "Many events will bring the two branches together: we'll see how AI can make systems more secure, and how to protect your data when you work with AI. Other events will focus on just one of the two." }
    ],
    howTitle: "How it works",
    howIntro: "Every month has a different theme, with at least two sessions, always mixing theory and practice.",
    steps: [
      ["The talk:", "a professional or a company that works with AI or security every day takes us inside real cases."],
      ["The deep dive:", "we go back over what we heard together, starting from the basics for anyone starting from zero."],
      ["The workshop:", "we get hands-on with everything we've learned, through exercises and practical cases."]
    ],
    monthTitle: "An example month.",
    month: [
      ["Theme:", "\"Make AI work for you\"."],
      ["First week:", "a professional explains how they use AI agents in their work."],
      ["Following weeks:", "together we work out what an agent is and how it connects to email and documents."],
      ["End of the month:", "everyone builds a small agent that summarises emails or organises notes."]
    ],
    howOutro: "The path is progressive, from the basics to advanced topics, and you leave every session with something concrete.",
    joinTitle: "Get involved your way",
    roles: [
      ["👀", "Visitor:", "come to the events that interest you, whenever you like. No commitment, no requirements."],
      ["🧠", "Organiser:", "join the team that runs the club and help plan and put on the events. Gain experience and build a network of contacts."],
      ["📱", "Social media manager:", "tell the H-FRAME story on Instagram and TikTok. Put your creativity and communication skills into practice and build your portfolio."]
    ],
    enterTitle: "How to join",
    enter: [
      { lead: "Fill in the form:", text: "tell us what you want to learn and how you'd like to take part. You can also leave us a real problem to solve, like a task to automate, a question about the security of your data, or a project.",
        btn: { link: "form", cls: "b-form", t: "Fill in the form", s: "Sign up for the club" } },
      { lead: "Join the WhatsApp group:", text: "that's where dates, places and news for every event are shared.",
        btn: { link: "whatsapp", cls: "b-wa", t: "Join the WhatsApp group", s: "News, events and workshops" } },
      { lead: "Come to the first session:", text: "you'll pick up the rest there." }
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Does it cost anything?", "[Free for H-FARM College students.]"],
      ["Where and when do we meet?", "[On the H-FARM campus, usually on ... at ...]. Exact dates and places are shared in the WhatsApp group."],
      ["Do I need to bring a computer?", "[Not for the talks; for the workshops, yes, bring your laptop.]"],
      ["I don't know anything about AI or computers. Is that OK?", "Yes, it's made for you: every topic starts from the basics."],
      ["Do I have to come to every session?", "No, come to the ones that interest you."],
      ["What language are they in?", "[Italian / English.]"]
    ],
    contactsTitle: "Contacts",
    contacts: { instagram: "Instagram", tiktok: "TikTok", whatsapp: "WhatsApp (group)", email: "Email", emailValue: "[...]", missing: "[to be added]" },
    closing1: "AI and cybersecurity are changing every job. You can let them happen to you, or learn to use them and to defend yourself.",
    closing2: "Every era has its innovation. Keep up.",
    footer: "AI &amp; Cybersecurity Student Club · H-FARM College",
    backHome: "← Back to home"
  }
};

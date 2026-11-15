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
      branche: "Due branche: AI e Cybersecurity",
      funziona: "Come funziona",
      partecipa: "Partecipa",
      entra: "Come si entra",
      faq: "Domande frequenti",
      contatti: "Contatti"
    },
    about: [
      "Ogni giorno apri un chatbot, scrivi una richiesta e in pochi secondi hai una risposta. Ma sai cosa succede dietro lo schermo? Sai perché un modello gratuito non è uguale a uno a pagamento, o cos'è di preciso un agente AI? E quando clicchi un link, scarichi un file o condividi un dato, sai cosa stai rischiando e come proteggerti?",
      "Sono due facce della stessa medaglia: più l'AI entra nel nostro modo di studiare e lavorare, più serve saperla usare bene e saper difendere ciò che le affidiamo. H-FRAME tiene insieme le due cose. È aperto a tutti gli studenti interessati e con voglia di imparare, di qualsiasi corso. Non serve saper programmare: basta la curiosità."
    ],
    levelQ: "Conosci già l'argomento?", levelBasic: "Sono alle prime armi", levelPro: "Ne so già qualcosa",
    branchesTitle: "Due branche: AI e Cybersecurity",
    branches: [
      { icon: "🤖", name: "H-FRAME AI", cls: "ai",
        basic: "Un'AI come ChatGPT, Claude o Gemini è un programma che ha letto moltissimi testi e ha imparato a rispondere come farebbe una persona. Non è magia e non sa tutto: a volte sbaglia, e ti mostreremo come accorgertene. Imparerai a usarla bene per studiare e lavorare: riassumere appunti, preparare una presentazione, scrivere un'email. Scoprirai come risparmiare tempo lasciandole i compiti noiosi, e cos'è un agente: un'AI che non solo risponde, ma fa le cose al posto tuo.",
        text: "Partiamo da come funzionano gli LLM: modelli che prevedono il testo un token (un pezzo di parola) alla volta, dentro una finestra di contesto limitata. Vedremo prompt e context engineering, cioè come scrivere istruzioni e scegliere le informazioni giuste da dare al modello, e la RAG, che gli fa consultare i tuoi documenti prima di rispondere. Poi agenti e tool use: modelli che usano strumenti per agire, collegati ad app e dati tramite MCP, lo standard aperto per farlo. Confronteremo modelli chiusi, open weight (pesi scaricabili) e open source (anche codice e dati aperti), e quando conviene un modello locale sul tuo computer. Obiettivo: costruire il tuo primo agente." },
      { icon: "🔐", name: "H-FRAME Cyber", cls: "cyber",
        basic: "La cybersecurity è l'insieme dei modi per proteggere dati, account e dispositivi. Ti riguarda ogni giorno: un'email che sembra della tua banca, un messaggio che ti chiede un codice, una password usata ovunque. Imparerai a riconoscere le truffe online, a creare password sicure, ad attivare la verifica in due passaggi e a capire quali link e file evitare. Tutto con esempi pratici e senza rischi: non serve nessuna conoscenza tecnica.",
        text: "Studieremo phishing e social engineering, cioè gli attacchi che sfruttano la fiducia delle persone più che i difetti del software. Vedremo le basi delle reti (indirizzi IP, porte, protocolli) e come leggerne il traffico, e le vulnerabilità più comuni delle applicazioni web secondo la OWASP Top 10, come injection e controlli d'accesso sbagliati. Faremo OSINT, la raccolta di informazioni da fonti pubbliche, e sfide CTF (Capture The Flag), esercizi a punti per trovare falle. Useremo gli strumenti base dei professionisti e vedremo come l'AI aiuta a difendere i sistemi. Sempre e solo in laboratori e ambienti di prova autorizzati." },
      { icon: "🤝", name: "Dove si incontrano", cls: "both",
        text: "Molti eventi uniranno le due branche: vedremo come l'AI può rendere i sistemi più sicuri, e come proteggere i tuoi dati quando lavori con l'AI. Altri eventi saranno dedicati a una sola delle due." }
    ],
    howTitle: "Come funziona",
    howIntro: "Ogni mese ha un tema diverso. C'è un evento a settimana, salvo imprevisti, e si alternano AI e Cybersecurity, sempre tra teoria e pratica.",
    steps: [
      ["Una settimana AI, una Cyber:", "gli eventi si alternano tra le due branche, così ogni tema si guarda da entrambi i lati."],
      ["I talk:", "durante il mese, professionisti che lavorano ogni giorno con l'AI o la sicurezza ci portano dentro casi reali."],
      ["La settimana dei workshop:", "ci sono entrambi gli eventi, un workshop di AI e uno di Cybersecurity, per mettere le mani su ciò che abbiamo imparato con esercizi e casi pratici."]
    ],
    monthTitle: "Un esempio di mese.",
    month: [
      ["Tema:", "\"Agenti AI: falli lavorare per te, in sicurezza\"."],
      ["Settimana 1 · AI:", "un professionista racconta come usa gli agenti AI nel suo lavoro."],
      ["Settimana 2 · Cyber:", "un esperto di sicurezza spiega quali rischi corrono i tuoi dati quando li affidi a un agente."],
      ["Settimana 3 · AI:", "capiamo insieme cos'è un agente e come si collega a email e documenti, partendo dalle basi."],
      ["Settimana dei workshop · AI + Cyber:", "nel workshop di AI ognuno costruisce un piccolo agente che riassume le email; in quello di Cyber lo mettiamo alla prova e scopriamo come renderlo sicuro."]
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
      ["A chi è rivolto?", "A tutti gli studenti interessati e volenterosi di imparare ad applicare ciò che scoprono e a responsabilizzarsi."],
      ["Ogni quanto ci vediamo?", "Un evento a settimana, salvo imprevisti, alternando un evento di AI e uno di Cybersecurity. Ogni mese c'è un tema diverso. Nella settimana dei workshop ci saranno entrambi gli eventi."],
      ["Dove e a che ora?", "Date e luoghi precisi arrivano nel {wa}gruppo WhatsApp{/wa}. Stiamo organizzando il Day 0: a breve aggiornamenti!"],
      ["Devo portare il computer?", "Per i talk no, a meno che tu non voglia prendere appunti: le slide verranno condivise. Per i workshop sì, porta il tuo portatile."],
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
      branche: "Two branches: AI and Cybersecurity",
      funziona: "How it works",
      partecipa: "Get involved",
      entra: "How to join",
      faq: "FAQ",
      contatti: "Contacts"
    },
    about: [
      "Every day you open a chatbot, type a request and get an answer in seconds. But do you know what happens behind the screen? Do you know why a free model isn't the same as a paid one, or what exactly an AI agent is? And when you click a link, download a file or share some data, do you know what you're risking and how to protect yourself?",
      "They're two sides of the same coin: the more AI becomes part of how we study and work, the more we need to know how to use it well and how to protect what we entrust to it. H-FRAME brings the two together. It's open to all students who are interested and keen to learn, from any programme. You don't need to know how to code: curiosity is enough."
    ],
    levelQ: "Already know the topic?", levelBasic: "I'm a beginner", levelPro: "I know a bit already",
    branchesTitle: "Two branches: AI and Cybersecurity",
    branches: [
      { icon: "🤖", name: "H-FRAME AI", cls: "ai",
        basic: "An AI like ChatGPT, Claude or Gemini is a program that has read a huge amount of text and learned to answer the way a person would. It isn't magic and it doesn't know everything: sometimes it gets things wrong, and we'll show you how to spot it. You'll learn to use it well for studying and work: summarising notes, preparing a presentation, writing an email. You'll find out how to save time by handing it the boring tasks, and what an agent is: an AI that doesn't just answer, but does things for you.",
        text: "We start with how LLMs work: models that predict text one token (a piece of a word) at a time, within a limited context window. We'll cover prompt and context engineering, how to write instructions and pick the right information to give the model, and RAG, which lets it look things up in your documents before answering. Then agents and tool use: models that use tools to take action, connected to apps and data through MCP, an open standard. We'll compare closed, open weight (downloadable weights) and open source (code and data open too) models, and when a local model on your computer makes sense. Goal: build your first agent." },
      { icon: "🔐", name: "H-FRAME Cyber", cls: "cyber",
        basic: "Cybersecurity is all the ways we protect data, accounts and devices. It affects you every day: an email that looks like it's from your bank, a message asking for a code, one password used everywhere. You'll learn to spot online scams, create strong passwords, turn on two-step verification and tell which links and files to avoid. All with practical examples and no risk: no technical knowledge needed.",
        text: "We'll study phishing and social engineering, attacks that exploit people's trust rather than software flaws. We'll cover network basics (IP addresses, ports, protocols) and how to read network traffic, plus the most common web app vulnerabilities from the OWASP Top 10, such as injection and broken access control. We'll practise OSINT, gathering information from public sources, and CTF (Capture The Flag) challenges, point-scoring exercises where you hunt for flaws. We'll use the basic tools professionals use and see how AI helps defend systems. Always and only in authorized labs and test environments." },
      { icon: "🤝", name: "Where they meet", cls: "both",
        text: "Many events will bring the two branches together: we'll see how AI can make systems more secure, and how to protect your data when you work with AI. Other events will focus on just one of the two." }
    ],
    howTitle: "How it works",
    howIntro: "Every month has a different theme. There's one event a week, barring the unexpected, alternating between AI and Cybersecurity, always mixing theory and practice.",
    steps: [
      ["One week AI, one week Cyber:", "events alternate between the two branches, so every theme is seen from both sides."],
      ["The talks:", "during the month, professionals who work with AI or security every day take us inside real cases."],
      ["Workshop week:", "both events happen, an AI workshop and a Cybersecurity one, to get hands-on with what we've learned through exercises and practical cases."]
    ],
    monthTitle: "An example month.",
    month: [
      ["Theme:", "\"AI agents: make them work for you, safely\"."],
      ["Week 1 · AI:", "a professional explains how they use AI agents in their work."],
      ["Week 2 · Cyber:", "a security expert explains what risks your data faces when you hand it to an agent."],
      ["Week 3 · AI:", "together we work out what an agent is and how it connects to email and documents, starting from the basics."],
      ["Workshop week · AI + Cyber:", "in the AI workshop everyone builds a small agent that summarises emails; in the Cyber one we put it to the test and find out how to make it secure."]
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
      ["Who is it for?", "All students who are interested and keen to learn how to apply what they discover and to take responsibility."],
      ["How often do we meet?", "One event a week, barring the unexpected, alternating between an AI event and a Cybersecurity event. Each month has a different theme. In workshop week, both events take place."],
      ["Where and at what time?", "Exact dates and places are shared in the {wa}WhatsApp group{/wa}. We're organising Day 0: updates coming soon!"],
      ["Do I need to bring a computer?", "Not for the talks, unless you want to take notes: the slides will be shared. For the workshops, yes, bring your laptop."],
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

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

for (const element of document.querySelectorAll(".section-title, .product, .principle-grid > div, .roadmap article, .soon-card, .contact")) {
  element.classList.add("reveal");
  observer.observe(element);
}

const copy = {
  pl: {
    pageTitle: "Szycko Studio | Praktyczne aplikacje lokalne",
    meta: "Szycko Studio tworzy praktyczne aplikacje lokalne: bez kont, bez chmury, bez reklam i bez abonamentu. Jedna opłata, dane na Twoim urządzeniu.",
    nav: ["Aplikacje", "Zasady", "W planach", "Lista zainteresowanych", "Kontakt"],
    heroEyebrow: "Niezależne studio aplikacji",
    heroTitle: "Praktyczne aplikacje. Lokalne dane. Jedna opłata na zawsze.",
    heroLead: "Tworzymy spokojne, użyteczne narzędzia dla osób, które chcą mieć kontrolę nad własnymi danymi bez kont, banków, reklam, chmury i abonamentów.",
    heroActions: ["Zobacz aplikacje", "Nasze zasady"],
    firstProduct: "Pierwszy produkt",
    savingsTitle: "Skarbonka: Oszczędności i Budżet",
    savingsIntro: "Prywatny planer fizycznych kopert i skrytek na gotówkę. Bez konta. Bez banku. Bez reklam. Wszystko lokalnie.",
    savingsStatus: "Dostępna w Microsoft Store",
    savingsHeading: "Lokalny notes do odkładania pieniędzy",
    savingsBody: "Aplikacja pomaga dzielić oszczędności na cele, koperty i skrytki. Możesz planować wpłaty z terminem albo bez daty, zapisywać wypłaty, tworzyć backupy i pilnować postępów bez podpinania konta bankowego.",
    savingsFeatures: ["Cele oszczędnościowe i prywatne skrytki", "Planowanie z terminem albo bez daty", "Lokalne dane, kopie zapasowe i brak chmury", "Model: płacisz raz i masz na zawsze"],
    savingsImage: "assets/skarb-onka-screenshot-pl.png",
    productActions: ["Otwórz w Microsoft Store", "Zapytaj o aplikację"],
    principlesEyebrow: "Filozofia",
    principlesTitle: "Małe narzędzia, które szanują użytkownika",
    principles: [
      ["Bez konta", "Użytkownik nie musi zakładać profilu, żeby zacząć korzystać z aplikacji."],
      ["Bez chmury", "Dane zostają lokalnie, a kopie zapasowe są pod kontrolą użytkownika."],
      ["Bez reklam", "Nie budujemy aplikacji wokół śledzenia, klików i rozpraszania uwagi."],
      ["Bez abonamentu", "Preferujemy uczciwy zakup jednorazowy zamiast małych opłat bez końca."]
    ],
    roadmapEyebrow: "W przygotowaniu",
    roadmapTitle: "Kolejne praktyczne aplikacje",
    roadmapIntro: "Szycko Studio rozwija portfolio narzędzi osobistych i domowych, zaczynając od finansów, paragonów i spokojnego zarządzania codziennością.",
    roadmap: [
      ["Bank paragonów", "Telefoniczny skaner paragonów z lokalną historią zakupów, gwarancji i wydatków."],
      ["Planer ciszy", "Prosty harmonogram trybu bez dźwięku dla osób, które chcą odzyskać spokojny czas."],
      ["Domowe narzędzia offline", "Małe aplikacje do organizacji codziennych spraw bez kont, reklam i subskrypcji."]
    ],
    soonEyebrow: "Soon",
    guardianTitle: "Domowy Strażnik",
    guardianIntro: "Życie nie może czekać. Twoje przypomnienia już tak. Pracujemy nad lokalną aplikacją PC do rodzinnych terminów, przypomnień, notatek i potwierdzeń odczytu: OC auta, ubezpieczenie domu, urodziny, imieniny, rocznice, lekarz, rachunki i inne ważne sprawy. Bez konta, bez chmury i bez abonamentu.",
    soonBadge: "SOON",
    guardianStatus: "W produkcji",
    guardianHeading: "Twój drugi mózg. Tylko spokojniejszy.",
    guardianBody: "W natłoku obowiązków łatwo zgubić polisę, wizytę, rachunek albo ważną rodzinną datę. Domowy Strażnik ma przypominać wcześniej, nie w ostatniej chwili: spokojnie, lokalnie i bez śledzenia użytkownika.",
    guardianFeatures: ["Przypomnienia o OC auta, ubezpieczeniu domu, lekarzu i rachunkach", "Urodziny, imieniny, rocznice i rodzinne daty w jednym miejscu", "Potwierdzenie odczytu dla ważnych spraw", "Notatki między domownikami", "Promocja startowa dla pierwszych zainteresowanych"],
    wishlistIdle: "Obserwuję projekt",
    wishlistSaved: "Dodano do obserwowanych",
    wishlistNoteIdle: "Kliknięcie zapisuje zainteresowanie lokalnie na tym urządzeniu. Mail pozwoli nam faktycznie poinformować Cię o starcie i promocji.",
    wishlistNoteSaved: "Dziękujemy. Na tym urządzeniu projekt jest oznaczony jako obserwowany. Żebyśmy mogli odezwać się przy premierze, wyślij też krótki sygnał mailem.",
    mailSignal: "Zostaw sygnał mailem",
    mailSubject: "Domowy Straznik - lista zainteresowanych",
    mailBody: "Chce dostac informacje o premierze aplikacji Domowy Straznik i promocji startowej.",
    contactEyebrow: "Kontakt",
    contactTitle: "Masz pytanie albo pomysł?",
    contactBody: "Napisz do Szycko Studio. Odpowiadamy po ludzku i rozwijamy aplikacje na bazie realnych potrzeb użytkowników.",
    footer: "© 2026 Szycko Studio. All rights reserved.",
    privacy: "Prywatność"
  },
  en: {
    pageTitle: "Szycko Studio | Practical Local Apps",
    meta: "Szycko Studio builds practical local apps: no accounts, no cloud, no ads and no subscriptions. One payment, your data on your device.",
    nav: ["Apps", "Principles", "Roadmap", "Wishlist", "Contact"],
    heroEyebrow: "Independent app studio",
    heroTitle: "Practical apps. Local data. One payment forever.",
    heroLead: "We build calm, useful tools for people who want control over their own data without accounts, banks, ads, cloud services or subscriptions.",
    heroActions: ["See apps", "Our principles"],
    firstProduct: "First product",
    savingsTitle: "Piggy Bank: Savings & Budget",
    savingsIntro: "A private planner for physical cash envelopes and money boxes. No account. No bank. No ads. Everything local.",
    savingsStatus: "Available in Microsoft Store",
    savingsHeading: "A local notebook for saving money",
    savingsBody: "The app helps you split savings into goals, envelopes and vaults. Plan deposits with or without deadlines, record withdrawals, create backups and track progress without connecting a bank account.",
    savingsFeatures: ["Savings goals and private vaults", "Planning with or without a deadline", "Local data, backups and no cloud", "Model: pay once and keep it forever"],
    savingsImage: "assets/skarb-onka-screenshot-en.png",
    productActions: ["Open in Microsoft Store", "Ask about the app"],
    principlesEyebrow: "Philosophy",
    principlesTitle: "Small tools that respect the user",
    principles: [
      ["No account", "The user does not need to create a profile to start using the app."],
      ["No cloud", "Data stays local and backups remain under the user's control."],
      ["No ads", "We do not build apps around tracking, clicks and distraction."],
      ["No subscription", "We prefer a fair one-time purchase over endless small payments."]
    ],
    roadmapEyebrow: "In progress",
    roadmapTitle: "More practical apps",
    roadmapIntro: "Szycko Studio is building a portfolio of personal and home tools, starting with finances, receipts and calm everyday organization.",
    roadmap: [
      ["Receipt Bank", "A phone receipt scanner with local history of purchases, warranties and spending."],
      ["Quiet Planner", "A simple silent-mode schedule for people who want to reclaim peaceful time."],
      ["Offline home tools", "Small apps for organizing daily life without accounts, ads or subscriptions."]
    ],
    soonEyebrow: "Soon",
    guardianTitle: "Home Reminder",
    guardianIntro: "Life cannot wait. Reminders can. We are building a local PC app for family deadlines, reminders, notes and read confirmations: car insurance, home insurance, birthdays, name days, anniversaries, doctors, bills and other important home matters. No account, no cloud and no subscription.",
    soonBadge: "SOON",
    guardianStatus: "In production",
    guardianHeading: "Your second brain. Just calmer.",
    guardianBody: "In the rush of everyday life, it is easy to lose a policy, appointment, bill or important family date. Home Reminder is designed to remind you early, not at the last second: calmly, locally and without tracking you.",
    guardianFeatures: ["Reminders for car insurance, home insurance, doctors and bills", "Birthdays, name days, anniversaries and family dates in one place", "Read confirmation for important matters", "Notes between household members", "Launch promotion for early followers"],
    wishlistIdle: "Follow project",
    wishlistSaved: "Added to followed projects",
    wishlistNoteIdle: "This click saves interest locally on this device. Email lets us actually notify you about launch and the opening promotion.",
    wishlistNoteSaved: "Thank you. This device marks the project as followed. To let us contact you at launch, send a short email signal too.",
    mailSignal: "Send interest by email",
    mailSubject: "Home Reminder - early interest list",
    mailBody: "I want to receive information about the Home Reminder launch and opening promotion.",
    contactEyebrow: "Contact",
    contactTitle: "Have a question or idea?",
    contactBody: "Write to Szycko Studio. We answer like humans and develop apps around real user needs.",
    footer: "© 2026 Szycko Studio. All rights reserved.",
    privacy: "Privacy"
  },
  de: {
    pageTitle: "Szycko Studio | Praktische lokale Apps",
    meta: "Szycko Studio entwickelt praktische lokale Apps: ohne Konten, ohne Cloud, ohne Werbung und ohne Abos. Einmal zahlen, Daten auf deinem Gerät.",
    nav: ["Apps", "Prinzipien", "Geplant", "Interessentenliste", "Kontakt"],
    heroEyebrow: "Unabhängiges App-Studio",
    heroTitle: "Praktische Apps. Lokale Daten. Einmal zahlen, dauerhaft nutzen.",
    heroLead: "Wir entwickeln ruhige, nützliche Werkzeuge für Menschen, die Kontrolle über ihre Daten wollen: ohne Konten, Banken, Werbung, Cloud und Abonnements.",
    heroActions: ["Apps ansehen", "Unsere Prinzipien"],
    firstProduct: "Erstes Produkt",
    savingsTitle: "Sparschwein: Sparen & Budget",
    savingsIntro: "Ein privater Planer für physische Bargeld-Umschläge und Geldverstecke. Kein Konto. Keine Bank. Keine Werbung. Alles lokal.",
    savingsStatus: "Im Microsoft Store verfügbar",
    savingsHeading: "Ein lokales Notizbuch zum Geldzurücklegen",
    savingsBody: "Die App hilft, Ersparnisse in Ziele, Umschläge und Verstecke aufzuteilen. Plane Einzahlungen mit oder ohne Termin, speichere Auszahlungen, erstelle Backups und verfolge Fortschritte ohne Bankverbindung.",
    savingsFeatures: ["Sparziele und private Verstecke", "Planung mit oder ohne Termin", "Lokale Daten, Backups und keine Cloud", "Modell: einmal zahlen und dauerhaft nutzen"],
    savingsImage: "assets/skarb-onka-screenshot-de.png",
    productActions: ["Im Microsoft Store öffnen", "Zur App fragen"],
    principlesEyebrow: "Philosophie",
    principlesTitle: "Kleine Werkzeuge, die Nutzer respektieren",
    principles: [
      ["Kein Konto", "Der Nutzer muss kein Profil erstellen, um die App zu verwenden."],
      ["Keine Cloud", "Daten bleiben lokal und Backups bleiben unter Kontrolle des Nutzers."],
      ["Keine Werbung", "Wir bauen Apps nicht um Tracking, Klicks und Ablenkung herum."],
      ["Kein Abo", "Wir bevorzugen einen fairen Einmalkauf statt endloser kleiner Zahlungen."]
    ],
    roadmapEyebrow: "In Vorbereitung",
    roadmapTitle: "Weitere praktische Apps",
    roadmapIntro: "Szycko Studio entwickelt ein Portfolio persönlicher und häuslicher Werkzeuge, beginnend mit Finanzen, Belegen und ruhiger Alltagsorganisation.",
    roadmap: [
      ["Belegbank", "Ein Smartphone-Scanner für Belege mit lokaler Historie von Einkäufen, Garantien und Ausgaben."],
      ["Ruheplaner", "Ein einfacher Zeitplan für lautlose Phasen für Menschen, die ruhige Zeit zurückgewinnen möchten."],
      ["Offline-Haushaltstools", "Kleine Apps zur Organisation des Alltags ohne Konten, Werbung und Abos."]
    ],
    soonEyebrow: "Soon",
    guardianTitle: "FamilienReminder",
    guardianIntro: "Das Leben wartet nicht. Erinnerungen schon. Wir arbeiten an einer lokalen PC-App für Familientermine, Erinnerungen, Notizen und Lesebestätigungen: Autoversicherung, Hausversicherung, Geburtstage, Namenstage, Jahrestage, Arzttermine, Rechnungen und andere wichtige Haushaltsthemen. Ohne Konto, ohne Cloud und ohne Abo.",
    soonBadge: "SOON",
    guardianStatus: "In Produktion",
    guardianHeading: "Dein zweites Gehirn. Nur ruhiger.",
    guardianBody: "Im Alltag gehen Policen, Termine, Rechnungen oder wichtige Familiendaten leicht unter. FamilienReminder soll früh erinnern, nicht im letzten Moment: ruhig, lokal und ohne Nutzertracking.",
    guardianFeatures: ["Erinnerungen an Autoversicherung, Hausversicherung, Arzttermine und Rechnungen", "Geburtstage, Namenstage, Jahrestage und Familiendaten an einem Ort", "Lesebestätigung für wichtige Angelegenheiten", "Notizen zwischen Haushaltsmitgliedern", "Startangebot für frühe Interessenten"],
    wishlistIdle: "Projekt beobachten",
    wishlistSaved: "Zu beobachteten Projekten hinzugefügt",
    wishlistNoteIdle: "Dieser Klick speichert das Interesse lokal auf diesem Gerät. Per E-Mail können wir dich wirklich zum Start und Angebot informieren.",
    wishlistNoteSaved: "Danke. Auf diesem Gerät ist das Projekt als beobachtet markiert. Sende zusätzlich eine kurze E-Mail, damit wir dich zum Start kontaktieren können.",
    mailSignal: "Interesse per E-Mail senden",
    mailSubject: "FamilienReminder - Interessentenliste",
    mailBody: "Ich moechte Informationen zum Start von FamilienReminder und zum Einfuehrungsangebot erhalten.",
    contactEyebrow: "Kontakt",
    contactTitle: "Hast du eine Frage oder Idee?",
    contactBody: "Schreib an Szycko Studio. Wir antworten menschlich und entwickeln Apps auf Basis echter Nutzerbedürfnisse.",
    footer: "© 2026 Szycko Studio. All rights reserved.",
    privacy: "Datenschutz"
  }
};

const selectors = {
  nav: () => document.querySelectorAll("nav a"),
  heroEyebrow: () => document.querySelector(".hero-copy .eyebrow"),
  heroTitle: () => document.querySelector(".hero-copy h1"),
  heroLead: () => document.querySelector(".hero-copy .lead"),
  heroActions: () => document.querySelectorAll(".hero-actions .button"),
  firstProduct: () => document.querySelector("#apps .section-title .eyebrow"),
  savingsTitle: () => document.querySelector("#apps .section-title h2"),
  savingsIntro: () => document.querySelector("#apps .section-title p:last-child"),
  savingsStatus: () => document.querySelector(".product-copy .status-pill"),
  savingsHeading: () => document.querySelector(".product-copy h3"),
  savingsBody: () => document.querySelector(".product-copy > p:not(.status-pill)"),
  savingsFeatures: () => document.querySelectorAll(".product-copy .feature-list li"),
  productActions: () => document.querySelectorAll(".product-copy .product-actions .button"),
  savingsShot: () => document.querySelector(".product-shot"),
  savingsIcon: () => document.querySelector(".product-icon"),
  principlesEyebrow: () => document.querySelector("#principles .section-title .eyebrow"),
  principlesTitle: () => document.querySelector("#principles .section-title h2"),
  principles: () => document.querySelectorAll(".principle-grid > div"),
  roadmapEyebrow: () => document.querySelector("#roadmap .section-title .eyebrow"),
  roadmapTitle: () => document.querySelector("#roadmap .section-title h2"),
  roadmapIntro: () => document.querySelector("#roadmap .section-title p:last-child"),
  roadmap: () => document.querySelectorAll(".roadmap-grid article"),
  soonEyebrow: () => document.querySelector("#wishlist .section-title .eyebrow"),
  guardianTitle: () => document.querySelector("#wishlist .section-title h2"),
  guardianIntro: () => document.querySelector("#wishlist .section-title p:last-child"),
  soonBadge: () => document.querySelector(".soon-visual span"),
  guardianStatus: () => document.querySelector(".soon-copy .status-pill"),
  guardianHeading: () => document.querySelector(".soon-copy h3"),
  guardianBody: () => document.querySelector(".soon-copy > p:not(.status-pill):not(.wishlist-note)"),
  guardianFeatures: () => document.querySelectorAll(".soon-copy .feature-list li"),
  mailSignal: () => document.querySelector(".soon-copy .product-actions a"),
  contactEyebrow: () => document.querySelector("#contact .eyebrow"),
  contactTitle: () => document.querySelector("#contact h2"),
  contactBody: () => document.querySelector("#contact p:last-child"),
  footerText: () => document.querySelector("footer span"),
  privacy: () => document.querySelector("footer a")
};

function setText(element, text) {
  if (element) element.textContent = text;
}

function setList(nodeList, values) {
  nodeList.forEach((node, index) => setText(node, values[index]));
}

function applyLanguage(lang) {
  const data = copy[lang] || copy.pl;
  document.documentElement.lang = lang;
  document.title = data.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", data.meta);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", data.heroTitle);

  setList(selectors.nav(), data.nav);
  setText(selectors.heroEyebrow(), data.heroEyebrow);
  setText(selectors.heroTitle(), data.heroTitle);
  setText(selectors.heroLead(), data.heroLead);
  setList(selectors.heroActions(), data.heroActions);
  setText(selectors.firstProduct(), data.firstProduct);
  setText(selectors.savingsTitle(), data.savingsTitle);
  setText(selectors.savingsIntro(), data.savingsIntro);
  setText(selectors.savingsStatus(), data.savingsStatus);
  setText(selectors.savingsHeading(), data.savingsHeading);
  setText(selectors.savingsBody(), data.savingsBody);
  setList(selectors.savingsFeatures(), data.savingsFeatures);
  selectors.savingsShot()?.setAttribute("src", data.savingsImage);
  selectors.savingsShot()?.setAttribute("alt", data.savingsTitle);
  selectors.savingsIcon()?.setAttribute("alt", data.savingsTitle);
  setList(selectors.productActions(), data.productActions);
  setText(selectors.principlesEyebrow(), data.principlesEyebrow);
  setText(selectors.principlesTitle(), data.principlesTitle);
  selectors.principles().forEach((card, index) => {
    setText(card.querySelector("strong"), data.principles[index]?.[0]);
    setText(card.querySelector("span"), data.principles[index]?.[1]);
  });
  setText(selectors.roadmapEyebrow(), data.roadmapEyebrow);
  setText(selectors.roadmapTitle(), data.roadmapTitle);
  setText(selectors.roadmapIntro(), data.roadmapIntro);
  selectors.roadmap().forEach((card, index) => {
    setText(card.querySelector("h3"), data.roadmap[index]?.[0]);
    setText(card.querySelector("p"), data.roadmap[index]?.[1]);
  });
  setText(selectors.soonEyebrow(), data.soonEyebrow);
  setText(selectors.guardianTitle(), data.guardianTitle);
  setText(selectors.guardianIntro(), data.guardianIntro);
  setText(selectors.soonBadge(), data.soonBadge);
  setText(selectors.guardianStatus(), data.guardianStatus);
  setText(selectors.guardianHeading(), data.guardianHeading);
  setText(selectors.guardianBody(), data.guardianBody);
  setList(selectors.guardianFeatures(), data.guardianFeatures);
  setText(selectors.mailSignal(), data.mailSignal);
  selectors.mailSignal()?.setAttribute(
    "href",
    `mailto:szyckotomasz@gmail.com?subject=${encodeURIComponent(data.mailSubject)}&body=${encodeURIComponent(data.mailBody)}`
  );
  setText(selectors.contactEyebrow(), data.contactEyebrow);
  setText(selectors.contactTitle(), data.contactTitle);
  setText(selectors.contactBody(), data.contactBody);
  setText(selectors.footerText(), data.footer);
  setText(selectors.privacy(), data.privacy);

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  localStorage.setItem("szycko-studio:language", lang);
  renderWishlistState(localStorage.getItem(wishlistKey()) === "yes", lang);
}

function wishlistKey() {
  return "szycko-studio:wishlist:domowy-straznik";
}

const wishlistButton = document.querySelector(".wishlist-button");
const wishlistNote = document.querySelector(".wishlist-note");

function renderWishlistState(active, lang = localStorage.getItem("szycko-studio:language") || "pl") {
  if (!wishlistButton || !wishlistNote) return;
  const data = copy[lang] || copy.pl;
  wishlistButton.textContent = active ? data.wishlistSaved : data.wishlistIdle;
  wishlistNote.textContent = active ? data.wishlistNoteSaved : data.wishlistNoteIdle;
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang || "pl"));
});

if (wishlistButton && wishlistNote) {
  wishlistButton.addEventListener("click", () => {
    localStorage.setItem(wishlistKey(), "yes");
    renderWishlistState(true);
  });
}

applyLanguage(localStorage.getItem("szycko-studio:language") || "pl");

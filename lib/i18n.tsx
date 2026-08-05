"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Lang = "en" | "sq";

const STORAGE_KEY = "kafeneja-lang";

const dict = {
  "nav.menu": { en: "Menu", sq: "Menuja" },
  "nav.about": { en: "About", sq: "Rreth Nesh" },
  "nav.journal": { en: "Journal", sq: "Ditari" },
  "nav.contact": { en: "Contact", sq: "Kontakt" },
  "nav.reserve": { en: "Reserve a Table", sq: "Rezervo Tavolinë" },
  "nav.openMenu": { en: "Open menu", sq: "Hap menunë" },
  "nav.closeMenu": { en: "Close menu", sq: "Mbyll menunë" },

  "order.label": { en: "Order via", sq: "Porosit me" },
  "order.heading": { en: "Order Ahead", sq: "Porosit Paraprakisht" },

  "hero.eyebrow": { en: "Blloku, Tirana · Est. 2019", sq: "Blloku, Tiranë · Themeluar 2019" },
  "hero.title1": { en: "Coffee, slowed", sq: "Kafeja, ngadalësuar" },
  "hero.title2": { en: "down on purpose.", sq: "me qëllim." },
  "hero.sub": {
    en: "Single-origin beans, roasted in small batches and pulled with care, in the heart of Tirana's Blloku district.",
    sq: "Kokrra kafeje me origjinë të vetme, të pjekura në sasi të vogla dhe përgatitura me kujdes, në zemër të Bllokut të Tiranës.",
  },
  "hero.viewMenu": { en: "View the Menu", sq: "Shiko Menunë" },
  "hero.reserveArrow": { en: "Reserve a table →", sq: "Rezervo tavolinë →" },
  "hero.reviews": { en: "reviews on Google", sq: "vlerësime në Google" },

  "cta.title": { en: "Come sit with us. The coffee's ready.", sq: "Eja e ulu me ne. Kafeja është gati." },
  "cta.sub": {
    en: "Rruga Ismail Qemali 12, Blloku, Tirana. Open daily from 07:30.",
    sq: "Rruga Ismail Qemali 12, Blloku, Tiranë. Hapur çdo ditë nga ora 07:30.",
  },
  "cta.reserve": { en: "Reserve a Table", sq: "Rezervo Tavolinë" },
  "cta.seeMenu": { en: "See the Menu", sq: "Shiko Menunë" },

  "testimonials.eyebrow": { en: "Regulars & Reviews", sq: "Klientë & Vlerësime" },
  "testimonials.title": { en: "What our regulars say.", sq: "Çfarë thonë klientët tanë të rregullt." },
  "testimonials.since": { en: "regular since", sq: "klient që nga" },

  "featuredMenu.eyebrow": { en: "From the Bar", sq: "Nga Banaku" },
  "featuredMenu.title": { en: "A short list, done properly.", sq: "Një listë e shkurtër, e bërë si duhet." },
  "featuredMenu.fullMenu": { en: "Full menu →", sq: "Menuja e plotë →" },

  "aboutTeaser.eyebrow": { en: "Our Story", sq: "Historia Jonë" },
  "aboutTeaser.title": {
    en: "Built by three friends who missed home-brewed coffee.",
    sq: "Krijuar nga tre miq që u mungonte kafeja e bërë në shtëpi.",
  },
  "aboutTeaser.p1": {
    en: "Kafeneja opened its doors in 2019 in a converted apartment on Rruga Ismail Qemali, the kind of Blloku building that still has its original tile floors. We roast in small batches, source directly where we can, and treat kafe turke with the same respect as a dialed-in V60.",
    sq: "Kafeneja hapi dyert në 2019 në një apartament të kthyer në lokal, në Rrugën Ismail Qemali, nga ato ndërtesa të Bllokut që ende kanë dyshemetë origjinale me pllaka. Pjekim në sasi të vogla, blejmë drejtpërdrejt kur mundemi, dhe e trajtojmë kafen turke me të njëjtin respekt si një V60 të përsosur.",
  },
  "aboutTeaser.p2": {
    en: "Today we're a small team of baristas, bakers, and one very particular roaster, still pouring the same espresso we'd want to drink ourselves.",
    sq: "Sot jemi një ekip i vogël baristash, furrtarësh, dhe një pjekës shumë i kujdesshëm, që ende përgatit të njëjtin espresso që do të donim ta pinim vetë.",
  },
  "aboutTeaser.readMore": { en: "Read our full story →", sq: "Lexo historinë tonë të plotë →" },

  "gallery.eyebrow": { en: "Around the Shop", sq: "Rreth Lokalit" },
  "gallery.title": { en: "A few honest snapshots.", sq: "Disa pamje të sinqerta." },

  "journalTeaser.eyebrow": { en: "From the Journal", sq: "Nga Ditari" },
  "journalTeaser.title": { en: "Notes & news.", sq: "Shënime & Lajme." },
  "journalTeaser.all": { en: "All posts →", sq: "Të gjitha shkrimet →" },

  "footer.tagline": {
    en: "A slow-roasted corner of Blloku, pouring single-origin espresso, house pastries, and honest hospitality since 2019.",
    sq: "Një cep i Bllokut i pjekur ngadalë, që shërben espresso me origjinë të vetme, ëmbëlsira shtëpiake, dhe mikpritje të sinqertë që nga 2019.",
  },
  "footer.visit": { en: "Visit", sq: "Na Vizito" },
  "footer.hours": { en: "Hours", sq: "Orari" },
  "footer.hours1": { en: "Mon to Fri, 07:30 to 20:00", sq: "Hën - Pre, 07:30 - 20:00" },
  "footer.hours2": { en: "Sat and Sun, 08:00 to 21:00", sq: "Sht - Die, 08:00 - 21:00" },
  "footer.rights": { en: "All rights reserved.", sq: "Të gjitha të drejtat e rezervuara." },
  "footer.contact": { en: "Contact", sq: "Kontakt" },
  "footer.menu": { en: "Menu", sq: "Menuja" },
  "footer.orderAhead": { en: "Order Ahead", sq: "Porosit Paraprakisht" },

  "newsletter.title": { en: "One email a month, no more.", sq: "Një email në muaj, jo më shumë." },
  "newsletter.sub": {
    en: "New arrivals and roasting notes from the journal, straight to your inbox.",
    sq: "Ardhje të reja dhe shënime pjekjeje nga ditari, direkt në email-in tuaj.",
  },
  "newsletter.success": {
    en: "You're on the list. First one lands next roast day.",
    sq: "Je regjistruar. E para vjen ditën e pjekjes tjetër.",
  },
  "newsletter.placeholder": { en: "you@email.com", sq: "ti@email.com" },
  "newsletter.subscribe": { en: "Subscribe", sq: "Regjistrohu" },
  "newsletter.joining": { en: "Joining…", sq: "Duke u regjistruar…" },
  "newsletter.emailLabel": { en: "Email address", sq: "Adresa e email-it" },

  "menuPage.eyebrow": { en: "The Menu", sq: "Menuja" },
  "menuPage.title": { en: "Simple, seasonal, well made.", sq: "E thjeshtë, sezonale, e bërë mirë." },
  "menuPage.sub": {
    en: "Prices in Albanian Lek (L). Ask your barista about today's single-origin rotation on filter and espresso.",
    sq: "Çmimet në Lekë Shqiptare (L). Pyet baristin për origjinën e sotme në filtër dhe espresso.",
  },

  "aboutPage.eyebrow": { en: "Our Story", sq: "Historia Jonë" },
  "aboutPage.title": {
    en: "Three friends, one espresso machine, no exit strategy.",
    sq: "Tre miq, një makinë espresso, pa plan daljeje.",
  },
  "aboutPage.p1": {
    en: "Kafeneja began in 2019 when Griselda, back in Tirana after years pulling shots in Bologna, couldn't find the coffee she missed. So she, her brother Ard, and their friend Redi gutted a ground-floor apartment on Rruga Ismail Qemali and built the bar themselves.",
    sq: "Kafeneja nisi në 2019 kur Griselda, e kthyer në Tiranë pas vitesh duke përgatitur kafe në Bolonja, nuk gjeti dot kafenë që i mungonte. Kështu ajo, vëllai i saj Ard, dhe miku i tyre Redi rrënuan një apartament në katin përdhe në Rrugën Ismail Qemali dhe ndërtuan vetë banakun.",
  },
  "aboutPage.p2": {
    en: "The name Kafeneja, an old Albanian word for a neighborhood coffee house, was a deliberate choice. We wanted a space that felt like it had always been there, even on day one.",
    sq: "Emri Kafeneja, një fjalë e vjetër shqipe për një kafene lagjeje, ishte një zgjedhje e qëllimshme. Donim një hapësirë që të dukej sikur ka qenë gjithmonë atje, që në ditën e parë.",
  },
  "aboutPage.p3": {
    en: "Six years on, we roast our own beans, bake everything on-site before 7am, and still argue about ratios more than any small business should. Some things haven't changed.",
    sq: "Gjashtë vite më vonë, pjekim vetë kokrrat tona, pjekim gjithçka në vend para orës 7 të mëngjesit, dhe ende debatojmë për proporcionet më shumë sesa duhet një biznes i vogël. Disa gjëra nuk kanë ndryshuar.",
  },
  "aboutPage.statFounded": { en: "Founded", sq: "Themeluar" },
  "aboutPage.statFriends": { en: "Friends who started it", sq: "Miq që e nisën" },
  "aboutPage.statYears": { en: "Years roasting", sq: "Vite duke pjekur" },
  "aboutPage.statPastries": { en: "Pastries out daily", sq: "Ëmbëlsira çdo ditë" },
  "aboutPage.beliefEyebrow": { en: "What We Believe", sq: "Çfarë Besojmë" },
  "aboutPage.beliefTitle": {
    en: "A few things we won't compromise on.",
    sq: "Disa gjëra që nuk i kompromentojmë.",
  },
  "aboutPage.teamEyebrow": { en: "The Team", sq: "Ekipi" },
  "aboutPage.teamTitle": { en: "The people behind the bar.", sq: "Njerëzit pas banakut." },
  "aboutPage.teamSub": {
    en: "Three people, one bar, and a running disagreement about the right water temperature. We hire slowly, train each other constantly, and mean it when we say the person who made your coffee is probably still in the room.",
    sq: "Tre veta, një banak, dhe një mospajtim i vazhdueshëm për temperaturën e duhur të ujit. Punësojmë ngadalë, trajnojmë njëri-tjetrin vazhdimisht, dhe e mendojmë seriozisht kur themi se personi që bëri kafenë tuaj ndoshta është ende në dhomë.",
  },
  "aboutPage.est": { en: "Est. 2019", sq: "Themeluar 2019" },
  "aboutPage.teamSize": { en: "3-person team", sq: "Ekip 3-vetësh" },
  "aboutPage.googleReviews": { en: "320+ Google reviews", sq: "320+ vlerësime në Google" },

  "journalPage.eyebrow": { en: "Journal", sq: "Ditari" },
  "journalPage.title": { en: "Notes, events & roasting stories.", sq: "Shënime, evente & histori pjekjeje." },
  "journalPage.readMore": { en: "Read more →", sq: "Lexo më shumë →" },
  "journalPost.back": { en: "← All journal posts", sq: "← Të gjitha shkrimet" },
  "journalPost.more": { en: "More from the journal", sq: "Më shumë nga ditari" },

  "contactPage.eyebrow": { en: "Get in Touch", sq: "Na Kontakto" },
  "contactPage.title": { en: "Come find us in Blloku.", sq: "Na gjej në Bllok." },
  "contactPage.bookEyebrow": { en: "Book a Table", sq: "Rezervo Tavolinë" },
  "contactPage.bookTitle": { en: "Reserve your spot.", sq: "Rezervo vendin tënd." },
  "contactPage.bookSub": {
    en: "Tell us when you're coming and how many of you there are. We hold tables for groups of 4 or more; for same-day reservations, calling ahead is fastest.",
    sq: "Na trego kur po vjen dhe sa jeni. Mbajmë tavolina për grupe me 4 ose më shumë veta; për rezervime ditën e njëjtë, telefonata është më e shpejtë.",
  },
  "contactPage.address": { en: "Address", sq: "Adresa" },
  "contactPage.hours": { en: "Hours", sq: "Orari" },
  "contactPage.hours1day": { en: "Monday to Friday", sq: "Hënë deri Premte" },
  "contactPage.hours1time": { en: "07:30 to 20:00", sq: "07:30 - 20:00" },
  "contactPage.hours2day": { en: "Saturday to Sunday", sq: "Shtunë deri Dielë" },
  "contactPage.hours2time": { en: "08:00 to 21:00", sq: "08:00 - 21:00" },
  "contactPage.direct": { en: "Direct", sq: "Kontakt Direkt" },
  "contactPage.sendTitle": { en: "Send us a message", sq: "Na dërgo një mesazh" },
  "contactPage.sendSub": {
    en: "For anything that isn't a reservation, feedback, press, or otherwise.",
    sq: "Për çdo gjë që nuk është rezervim, mendim, shtyp, apo tjetër.",
  },

  "form.name": { en: "Name", sq: "Emri" },
  "form.email": { en: "Email", sq: "Email" },
  "form.phoneOptional": { en: "Phone (optional)", sq: "Telefoni (opsional)" },
  "form.date": { en: "Date", sq: "Data" },
  "form.time": { en: "Time", sq: "Ora" },
  "form.selectTime": { en: "Select a time", sq: "Zgjidh një orë" },
  "form.partySize": { en: "Party size", sq: "Numri i personave" },
  "form.guest": { en: "guest", sq: "person" },
  "form.guests": { en: "guests", sq: "persona" },
  "form.groupNote": { en: "For groups of 4 or more, we'll confirm by phone.", sq: "Për grupe me 4 ose më shumë veta, konfirmojmë me telefon." },
  "form.notesOptional": { en: "Notes (optional)", sq: "Shënime (opsionale)" },
  "form.notesPlaceholder": {
    en: "Window seat if possible, celebrating a birthday, allergies…",
    sq: "Vend pranë dritares nëse mundet, festë ditëlindjeje, alergji…",
  },
  "form.requestReservation": { en: "Request Reservation", sq: "Kërko Rezervim" },
  "form.sending": { en: "Sending…", sq: "Duke dërguar…" },
  "form.subject": { en: "Subject", sq: "Subjekti" },
  "form.subjectPlaceholder": { en: "Reservation, feedback, press...", sq: "Rezervim, mendim, shtyp..." },
  "form.message": { en: "Message", sq: "Mesazhi" },
  "form.sendMessage": { en: "Send Message", sq: "Dërgo Mesazhin" },
  "form.sendAnother": { en: "Send another message", sq: "Dërgo një mesazh tjetër" },
  "form.bookAnother": { en: "Book another table", sq: "Rezervo një tavolinë tjetër" },
  "form.reservationSuccessTitle": { en: "Faleminderit, request sent!", sq: "Faleminderit, kërkesa u dërgua!" },
  "form.reservationSuccessBody": {
    en: "We'll confirm your reservation by email or phone shortly. Groups of 4 or more may get a quick call to lock in the details.",
    sq: "Do ta konfirmojmë rezervimin tuaj shpejt me email ose telefon. Grupet me 4 ose më shumë veta mund të marrin një telefonatë të shkurtër për detajet.",
  },
  "form.contactSuccessTitle": { en: "Faleminderit, message sent!", sq: "Faleminderit, mesazhi u dërgua!" },
  "form.contactSuccessBody": {
    en: "We usually reply within one business day. For same-day questions, call us directly.",
    sq: "Zakonisht përgjigjemi brenda një dite pune. Për pyetje urgjente, na telefononi direkt.",
  },
  "form.errorName": { en: "Please tell us your name.", sq: "Na trego emrin tënd." },
  "form.errorEmailOrPhone": { en: "Leave an email or phone so we can confirm.", sq: "Lër një email ose telefon që të konfirmojmë." },
  "form.errorEmailInvalid": { en: "That email doesn't look right.", sq: "Ky email nuk duket i saktë." },
  "form.errorEmailRequired": { en: "We need an email to reply to you.", sq: "Na duhet një email për t'u përgjigjur." },
  "form.errorDate": { en: "Pick a date.", sq: "Zgjidh një datë." },
  "form.errorTime": { en: "Pick a time.", sq: "Zgjidh një orë." },
  "form.errorMessage": { en: "Add a short message so we know how to help.", sq: "Shto një mesazh të shkurtër që ta dimë si të ndihmojmë." },
} as const;

export type DictKey = keyof typeof dict;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
  pick: <T,>(en: T, sq: T) => T;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "sq") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback((key: DictKey) => dict[key][lang], [lang]);
  const pick = useCallback(<T,>(en: T, sq: T) => (lang === "en" ? en : sq), [lang]);

  const value = useMemo(() => ({ lang, setLang, t, pick }), [lang, setLang, t, pick]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

const tidy = 'https://tidycal.com/deccompass';
const translations = {
  "en": {
    "nav.method": "Method",
    "nav.services": "Services",
    "nav.programs": "Programs",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.subscription": "Subscription",
    "nav.book": "Unlock your Full Potential",
    "hero.eyebrow": "Decision Coaching",
    "hero.title": "Find Your Direction In A World Full Of Options",
    "hero.lead": "Personalised coaching and practical tools to help you move from confusion to clarity and confidence.",
    "hero.note": "You are only one step away from the solution you’re looking for!",
    "hero.book": "Book a Free Call",
    "hero.programs": "View programs",
    "hero.caption": "Marianna Spanidi - Youth Transition & Decision Coach",
    "method.eyebrow": "The Method",
    "method.title": "Your Map, Your Direction",
    "method.subtitle": "A guided coaching process designed to turn confusion into a clear next step.",
    "method.pause.title": "Pause",
    "method.pause.text": "Create space from pressure, noise, and outside expectations.",
    "method.explore.title": "Explore",
    "method.explore.text": "Understand your real options, values, fears, and trade-offs.",
    "method.choose.title": "Choose",
    "method.choose.text": "Move forward in a decision that feels honest, practical, and aligned.",
    "method.act.title": "Act",
    "method.act.text": "Build a simple action plan so the decision becomes progress.",
    "services.eyebrow": "Support Areas",
    "services.title": "More Clarity. Less Mental Noise.",
    "services.career.title": "Career Decisions",
    "services.career.text": "Explore job changes, next steps, purpose, growth, professional direction and ways to achieve financial independence.",
    "services.life.title": "Life Transitions",
    "services.life.text": "Navigate change, uncertainty, relocation, relationships, and identity shifts.",
    "services.personal.title": "Personal Clarity",
    "services.personal.text": "Untangle overthinking and reconnect with what matters most to you.",
    "blocks.eyebrow": "Decision Blocks",
    "blocks.title": "Sources Of Real Dilemmas",
    "blocks.options.title": "Too many options",
    "blocks.options.text": "When everything feels possible, choosing one path can feel impossible.",
    "blocks.regret.title": "Fear of regret",
    "blocks.regret.text": "Learn how to decide without needing perfect certainty first.",
    "blocks.pressure.title": "Outside pressure",
    "blocks.pressure.text": "Separate your own voice from expectations coming from others.",
    "blocks.fog.title": "Emotional fog",
    "blocks.fog.text": "Slow down the inner noise and reconnect with clear priorities.",
    "programs.eyebrow": "Coaching Programs",
    "programs.title": "Choose The Support You Need",
    "programs.book": "Book now",
    "programs.sprint.title": "Decision Sprint ⭐",
    "programs.sprint.sub": "4 Private Sessions",
    "programs.sprint.meta1": "1 month",
    "programs.sprint.meta2": "4 sessions/month",
    "programs.sprint.meta3": "60 min/session",
    "programs.sprint.price": "€90/session",
    "programs.sprint.li1": "Clear, confident decisions",
    "programs.sprint.li2": "Personalised action plan",
    "programs.transition.badge": "Best for a major change",
    "programs.transition.title": "Transition Program 🏆",
    "programs.transition.sub": "8 Private Sessions",
    "programs.transition.meta1": "2 months",
    "programs.transition.meta2": "4 sessions/month",
    "programs.transition.meta3": "60 min/session",
    "programs.transition.price": "€87/session",
    "programs.transition.li1": "Structured transition support",
    "programs.transition.li2": "Guidance from decision to action",
    "programs.individual.title": "Individual Membership",
    "programs.individual.sub": "24 Private Sessions",
    "programs.membership.heading": "The best gift you can give yourself is committing to a year of change.",
    "programs.individual.meta1": "12 months",
    "programs.individual.meta2": "2 sessions/month",
    "programs.individual.meta3": "60 min/session",
    "programs.individual.price": "€45/session",
    "programs.individual.li1": "Consistent long-term guidance",
    "programs.individual.li2": "Skills, empowerment & confidence",
    "programs.plus.badge": "I don't wanna do this alone",
    "programs.plus.title": "Plus 1 Membership",
    "programs.plus.sub": "24 Shared Sessions",
    "programs.plus.note": "with someone you choose",
    "programs.plus.meta1": "12 months",
    "programs.plus.meta2": "2 sessions/month",
    "programs.plus.meta3": "75 min/session",
    "programs.plus.price": "€50/person/session",
    "programs.plus.li1": "Make decisions together",
    "programs.plus.li2": "Ideal for couples, friends, family, high-school & university students",
    "programs.premium.badge": "I want it all deal",
    "programs.premium.title": "Premium Partnership 👑",
    "programs.premium.private": "Private deal",
    "programs.premium.sub": "24 Premium Sessions",
    "programs.premium.meta1": "12 months",
    "programs.premium.meta2": "2 sessions/month",
    "programs.premium.meta3": "60 min/session",
    "programs.premium.price": "€100/session",
    "programs.premium.li1": "Personal Decision & Transition Roadmap",
    "programs.premium.li2": "Behavioural patterns, mindset reset, extra material & useful methodologies",
    "process.eyebrow": "How We Work",
    "process.title": "How We Work Together",
    "process.book.title": "Book",
    "process.book.text": "Choose a time that works for you.",
    "process.clarify.title": "Clarify",
    "process.clarify.text": "Bring the question, dilemma, or transition.",
    "process.map.title": "Map",
    "process.map.text": "We structure your options and priorities.",
    "process.move.title": "Move",
    "process.move.text": "You leave with a clear next step, motivation & a long-term plan.",
    "testimonial.title": "What Young People Say",
    "testimonial.quote": "“I came in confused and left with a clear decision, a calmer mind, and a concrete first step.”",
    "testimonial.author": "— Coaching client",
    "coach.eyebrow": "Meet Your Coach",
    "coach.title": "Make Room For A Clearer Choice",
    "coach.text": "<p>Ever felt stuck between different paths, unsure which decision is the right one? I know that feeling well.</p><p>I am an MSc graduate in Behavioural Economics from Tilburg University in the Netherlands and a certified Economist Educator from the Athens University of Economics and Business, with years of experience alongside young people. Throughout the last 15 years, while navigating major life transitions myself through endless research, reflection, and trial and error, I realised how many of us make life-changing decisions without the guidance we need.</p><p>That inspired me to found Decision Compass in June 2026, where I now work as a Youth Transition &amp; Decision Coach. My vision is to help young people find clarity, confidence, and direction sooner, with less stress and worries by making important life decisions feel less overwhelming and more aligned with who they are and who they want to become.</p>",
    "coach.cta": "Book a free call",
    "cta.eyebrow": "Start Now",
    "cta.title": "Your Future Doesn’t Need More Thinking. It Needs Action.",
    "cta.button": "Book your session",
    "footer.tagline": "Clarity coaching for meaningful decisions.",
    "footer.social": "Find me on social media",
    "footer.rights": "All rights reserved."
  },
  "el": {
    "nav.method": "Μέθοδος",
    "nav.services": "Υπηρεσίες",
    "nav.programs": "Προγράμματα",
    "nav.about": "Σχετικά",
    "nav.contact": "Επικοινωνία",
    "nav.subscription": "Συνδρομή",
    "nav.book": "Ξεκλείδωσε τις δυνατότητές σου",
    "hero.eyebrow": "Coaching Αποφάσεων",
    "hero.title": "Βρες την Κατεύθυνσή σου σε έναν Κόσμο Γεμάτο Επιλογές",
    "hero.lead": "Εξατομικευμένο coaching και πρακτικά εργαλεία για να περάσεις από τη σύγχυση στη σαφήνεια και την αυτοπεποίθηση.",
    "hero.note": "Είσαι μόνο ένα βήμα μακριά από τη λύση που αναζητάς!",
    "hero.book": "Κλείσε μια δωρεάν κλήση",
    "hero.programs": "Δες τα προγράμματα",
    "hero.caption": "Μαριάννα Σπανίδη, Coach Νέων σε μεταβάσεις",
    "method.eyebrow": "Η Μέθοδος",
    "method.title": "Ο Χάρτης σου, η Κατεύθυνσή σου",
    "method.subtitle": "Μια καθοδηγούμενη διαδικασία coaching που μετατρέπει τη σύγχυση σε ένα ξεκάθαρο επόμενο βήμα.",
    "method.pause.title": "Παύση",
    "method.pause.text": "Δημιούργησε χώρο μακριά από πίεση, θόρυβο και εξωτερικές προσδοκίες.",
    "method.explore.title": "Εξερεύνηση",
    "method.explore.text": "Κατανόησε τις πραγματικές επιλογές, αξίες, φόβους και συμβιβασμούς σου.",
    "method.choose.title": "Επιλογή",
    "method.choose.text": "Προχώρησε σε μια απόφαση που νιώθεις ειλικρινή, πρακτική και ευθυγραμμισμένη.",
    "method.act.title": "Δράση",
    "method.act.text": "Χτίσε ένα απλό πλάνο ώστε η απόφαση να γίνει πρόοδος.",
    "services.eyebrow": "Πεδία Υποστήριξης",
    "services.title": "Περισσότερη Διαύγεια. Λιγότερος Θόρυβος.",
    "services.career.title": "Αποφάσεις Καριέρας",
    "services.career.text": "Εξερεύνησε αλλαγές εργασίας, επόμενα βήματα, σκοπό, εξέλιξη, επαγγελματική κατεύθυνση και τρόπους για να πετύχεις οικονομική ανεξαρτησία.",
    "services.life.title": "Μεταβάσεις Ζωής",
    "services.life.text": "Διαχειρίσου αλλαγή, αβεβαιότητα, μετακόμιση, σχέσεις και αλλαγές ταυτότητας.",
    "services.personal.title": "Προσωπική Διαύγεια",
    "services.personal.text": "Ξεμπέρδεψε την υπερανάλυση και συνδέσου ξανά με όσα έχουν σημασία για εσένα.",
    "blocks.eyebrow": "Εμπόδια Απόφασης",
    "blocks.title": "Πηγές Πραγματικών Διλημμάτων",
    "blocks.options.title": "Πάρα πολλές επιλογές",
    "blocks.options.text": "Όταν όλα μοιάζουν πιθανά, η επιλογή ενός δρόμου μπορεί να μοιάζει αδύνατη.",
    "blocks.regret.title": "Φόβος μετάνοιας",
    "blocks.regret.text": "Μάθε να αποφασίζεις χωρίς να χρειάζεσαι πρώτα τέλεια βεβαιότητα.",
    "blocks.pressure.title": "Εξωτερική πίεση",
    "blocks.pressure.text": "Ξεχώρισε τη δική σου φωνή από τις προσδοκίες των άλλων.",
    "blocks.fog.title": "Συναισθηματική ομίχλη",
    "blocks.fog.text": "Ηρέμησε τον εσωτερικό θόρυβο και ξαναβρές τις καθαρές σου προτεραιότητες.",
    "programs.eyebrow": "Προγράμματα Coaching",
    "programs.title": "Διάλεξε την Υποστήριξη που Χρειάζεσαι",
    "programs.book": "Κλείσε τώρα",
    "programs.sprint.title": "Decision Sprint ⭐",
    "programs.sprint.sub": "4 Ιδιωτικές Συνεδρίες",
    "programs.sprint.meta1": "1 μήνας",
    "programs.sprint.meta2": "4 συνεδρίες/μήνα",
    "programs.sprint.meta3": "60 λεπτά/συνεδρία",
    "programs.sprint.price": "€90/συνεδρία",
    "programs.sprint.li1": "Καθαρές αποφάσεις με αυτοπεποίθηση",
    "programs.sprint.li2": "Εξατομικευμένο πλάνο δράσης",
    "programs.transition.badge": "Το καλύτερο για μια μεγάλη αλλαγή",
    "programs.transition.title": "Transition Program 🏆",
    "programs.transition.sub": "8 Ιδιωτικές Συνεδρίες",
    "programs.transition.meta1": "2 μήνες",
    "programs.transition.meta2": "4 συνεδρίες/μήνα",
    "programs.transition.meta3": "60 λεπτά/συνεδρία",
    "programs.transition.price": "€87/συνεδρία",
    "programs.transition.li1": "Δομημένη υποστήριξη μετάβασης",
    "programs.transition.li2": "Καθοδήγηση από την απόφαση στη δράση",
    "programs.individual.title": "Ατομική Συνδρομή",
    "programs.individual.sub": "24 Ιδιωτικές Συνεδρίες",
    "programs.membership.heading": "Το καλύτερο δώρο για τον εαυτό σου είναι η δέσμευση σε ένα έτος αλλαγών.",
    "programs.individual.meta1": "12 μήνες",
    "programs.individual.meta2": "2 συνεδρίες/μήνα",
    "programs.individual.meta3": "60 λεπτά/συνεδρία",
    "programs.individual.price": "€45/συνεδρία",
    "programs.individual.li1": "Σταθερή μακροπρόθεσμη καθοδήγηση",
    "programs.individual.li2": "Δεξιότητες, ενδυνάμωση και αυτοπεποίθηση",
    "programs.plus.badge": "Δεν θέλω να το κάνω μόνος/η",
    "programs.plus.title": "Συνδρομή Plus 1",
    "programs.plus.sub": "24 Κοινές Συνεδρίες",
    "programs.plus.note": "με ένα άτομο που επιλέγεις εσύ",
    "programs.plus.meta1": "12 μήνες",
    "programs.plus.meta2": "2 συνεδρίες/μήνα",
    "programs.plus.meta3": "75 λεπτά/συνεδρία",
    "programs.plus.price": "€50/άτομο/συνεδρία",
    "programs.plus.li1": "Πάρτε αποφάσεις μαζί",
    "programs.plus.li2": "Ιδανικό για ζευγάρια, φίλους, οικογένεια, μαθητές λυκείου και φοιτητές",
    "programs.premium.badge": "Το deal που τα έχει όλα",
    "programs.premium.title": "Premium Partnership 👑",
    "programs.premium.private": "Ιδιωτικό πακέτο",
    "programs.premium.sub": "24 Premium Συνεδρίες",
    "programs.premium.meta1": "12 μήνες",
    "programs.premium.meta2": "2 συνεδρίες/μήνα",
    "programs.premium.meta3": "60 λεπτά/συνεδρία",
    "programs.premium.price": "€100/συνεδρία",
    "programs.premium.li1": "Προσωπικός χάρτης αποφάσεων και μετάβασης",
    "programs.premium.li2": "Μοτίβα συμπεριφοράς, επανεκκίνηση νοοτροπίας, επιπλέον υλικό και χρήσιμες μεθοδολογίες",
    "process.eyebrow": "Πώς Δουλεύουμε",
    "process.title": "Πώς Δουλεύουμε Μαζί",
    "process.book.title": "Κλείσε",
    "process.book.text": "Επίλεξε ώρα που σε εξυπηρετεί.",
    "process.clarify.title": "Ξεκαθάρισε",
    "process.clarify.text": "Φέρε την ερώτηση, το δίλημμα ή τη μετάβαση.",
    "process.map.title": "Χαρτογράφησε",
    "process.map.text": "Δομούμε τις επιλογές και τις προτεραιότητές σου.",
    "process.move.title": "Προχώρα",
    "process.move.text": "Φεύγεις με ένα ξεκάθαρο επόμενο βήμα, κίνητρο και ένα μακροπρόθεσμο πλάνο.",
    "testimonial.title": "Τι Λένε οι Νέοι",
    "testimonial.quote": "«Ήρθα μπερδεμένη και έφυγα με καθαρή απόφαση, πιο ήρεμο μυαλό και ένα συγκεκριμένο πρώτο βήμα.»",
    "testimonial.author": "— Coaching client",
    "coach.eyebrow": "Γνώρισε την Coach σου",
    "coach.title": "Δημιούργησε Χώρο για μια Ξεκάθαρη Επιλογή",
    "coach.text": "<p>Έχεις νιώσει ποτέ κολλημένος/η ανάμεσα σε διαφορετικούς δρόμους, χωρίς να ξέρεις ποια απόφαση είναι η σωστή; Γνωρίζω πολύ καλά αυτό το συναίσθημα.</p><p>Είμαι απόφοιτη MSc στη Συμπεριφορική Οικονομική απ'το Tilburg της Ολλανδίας και Πιστοποιημένη Εκπαιδευτικός Οικονομολόγος του ΟΠΑ με χρόνια εμπειρίας δίπλα σε νέους ανθρώπους. Τα τελευταία 15 χρόνια, καθώς διαχειριζόμουν σημαντικές μεταβάσεις στη δική μου ζωή μέσα από ατελείωτη αναζήτηση, αναστοχασμό και δοκιμή, συνειδητοποίησα πόσοι από εμάς παίρνουμε αποφάσεις ζωής χωρίς την καθοδήγηση που χρειαζόμαστε.</p><p>Αυτό με ενέπνευσε να ιδρύσω το Decision Compass τον Ιούνιο του 2026, όπου εργάζομαι ως Coach Νέων σε μεταβάσεις. Το όραμά μου είναι να βοηθώ νέους ανθρώπους να βρίσκουν σαφήνεια, αυτοπεποίθηση και κατεύθυνση από νωρίς, με λιγότερο άγχος και ανησυχίες, κάνοντας τις σημαντικές αποφάσεις ζωής λιγότερο μπερδεμένες και πιο ευθυγραμμισμένες με το ποιοι είναι και ποιοι θέλουν να γίνουν.</p>",
    "coach.cta": "Κλείσε δωρεάν μια κλήση",
    "cta.eyebrow": "Ξεκίνα Τώρα",
    "cta.title": "Το Μέλλον σου Δεν Χρειάζεται Άλλη Σκέψη. Χρειάζεται Δράση.",
    "cta.button": "Κλείσε συνεδρία",
    "footer.tagline": "Coaching σαφήνειας για αποφάσεις με νόημα.",
    "footer.social": "Βρες με στα social media",
    "footer.rights": "Με επιφύλαξη παντός δικαιώματος."
  }
};

function setLang(lang) {
  const selectedLang = translations[lang] ? lang : 'en';
  const dict = translations[selectedLang];
  document.documentElement.lang = selectedLang === 'el' ? 'el' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (typeof value === 'string') el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = dict[el.dataset.i18nHtml];
    if (typeof value === 'string') el.innerHTML = value;
  });
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === selectedLang);
    button.setAttribute('aria-pressed', button.dataset.lang === selectedLang ? 'true' : 'false');
  });
  localStorage.setItem('dc-lang', selectedLang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLang(button.dataset.lang));
  });

  document.querySelectorAll('a[href="https://tidycal.com/deccompass"]').forEach((link) => {
    link.href = tidy;
  });

  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.desktop-nav');

  menuBtn?.setAttribute('aria-expanded', 'false');
  menuBtn?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.querySelectorAll('.desktop-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  setLang(localStorage.getItem('dc-lang') || 'en');
});


document.querySelectorAll('.program-card[data-booking-url]').forEach(card => {
  const openBooking = () => window.location.href = card.dataset.bookingUrl;
  card.addEventListener('click', event => {
    if (!event.target.closest('a, button')) openBooking();
  });
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openBooking();
    }
  });
});

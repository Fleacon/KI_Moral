// ── PROGRESS BAR ──
window.addEventListener("scroll", () => {
  const el = document.getElementById("progress");
  const pct = (scrollY / (document.body.scrollHeight - innerHeight)) * 100;
  el.style.width = pct + "%";

  const nav = document.getElementById("nav");
  nav.classList.toggle("scrolled", scrollY > 60);
});

// ── REVEAL ON SCROLL ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ── NODE DATA ──
const nodeData = {
  morality: {
    tag: "Grundbegriff — Ethik",
    title: "Moralisches Handeln",
    color: "#c8f060",
    body: `
      <p>Moralisches Handeln bezeichnet Verhalten, das nach ethischen Maßstäben als gut oder richtig bewertet werden kann. Entscheidend ist dabei nicht nur <em>was</em> getan wird, sondern <em>warum</em> – also die Absicht hinter der Handlung.</p>
      <p>Nach Immanuel Kant setzt echtes moralisches Handeln drei Dinge voraus: <strong>freien Willen</strong>, <strong>Vernunft</strong> und das Bewusstsein, einer Pflicht zu folgen. Der berühmte Kategorische Imperativ lautet: Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.</p>
      <p>Die zentrale Frage lautet: Kann eine KI, die nur Muster berechnet, jemals diese Voraussetzungen erfüllen – oder ahmt sie moralisches Handeln lediglich nach?</p>
    `,
    tags: ["Kant", "Freier Wille", "Kategorischer Imperativ", "Pflicht", "Vernunft"],
  },
  artificial: {
    tag: "Kernthese — KI-Ethik",
    title: "Artificial Morality",
    color: "#60c8f0",
    body: `
      <p><strong>Artificial Morality</strong> bezeichnet die Fähigkeit von KI-Systemen, in moralisch relevanten Situationen Entscheidungen zu treffen – unabhängig davon, ob sie dabei „echte" Moral besitzen.</p>
      <p>Man unterscheidet zwischen <em>operativer Moralität</em> (KI handelt nach ethischen Regeln, ohne sie zu verstehen) und <em>vollständiger Moralität</em> (KI versteht und empfindet moralische Prinzipien). Letzteres gilt nach aktuellem Stand als nicht erreichbar.</p>
      <p>Das Paradox: KI kann in vielen Situationen konsistenter und fehlerfreier nach ethischen Regeln handeln als Menschen – und trotzdem kein moralisches Wesen sein. Ist das gut genug?</p>
    `,
    tags: ["Operative Moralität", "Simulation", "Moralische Kompetenz", "Paradox"],
  },
  topdown: {
    tag: "Ansatz 1 — Regelbasiert",
    title: "Top-down Ethik",
    color: "#f060c8",
    body: `
      <p>Beim <strong>Top-down Ansatz</strong> werden ethische Prinzipien explizit formuliert und direkt in das KI-System programmiert. Die Maschine folgt klaren Regeln, die von Menschen definiert wurden.</p>
      <p>Ein klassisches Beispiel sind Asimovs Robotergesetze. Modern: Unternehmen wie Anthropic oder OpenAI trainieren ihre Modelle mit expliziten Richtlinien (z.B. „Lehne gefährliche Anfragen ab").</p>
      <p><strong>Vorteil:</strong> Transparenz und Nachvollziehbarkeit. <strong>Nachteil:</strong> Regeln können in Konflikt geraten (wie in Asimovs Geschichten gezeigt) oder neue, unvorhergesehene Situationen nicht abdecken. Außerdem: Wessen Moral wird kodiert?</p>
    `,
    tags: ["Regelbasiert", "Asimov", "Kategorischer Imperativ", "Transparenz", "Kodierung"],
  },
  bottomup: {
    tag: "Ansatz 2 — Lernbasiert",
    title: "Bottom-up Ethik",
    color: "#f0a060",
    body: `
      <p>Beim <strong>Bottom-up Ansatz</strong> lernt die KI moralisches Verhalten nicht durch explizite Regeln, sondern durch Daten, Feedback und Erfahrung – ähnlich wie Kinder moralische Normen durch Sozialisation erwerben.</p>
      <p>Technisch relevant: <em>Reinforcement Learning from Human Feedback (RLHF)</em> – Menschen bewerten KI-Antworten, das Modell lernt durch diese Rückmeldungen. Die KI entwickelt so implizite Wertvorstellungen.</p>
      <p><strong>Vorteil:</strong> Flexibel und anpassungsfähig. <strong>Nachteil:</strong> Die KI kann Vorurteile aus den Trainingsdaten übernehmen. Zudem ist schwer zu kontrollieren, was genau sie „gelernt" hat – der Prozess bleibt oft eine Black Box.</p>
    `,
    tags: ["Maschinelles Lernen", "RLHF", "Sozialisation", "Black Box", "Bias"],
  },
  chancen: {
    tag: "Analyse — Potenziale",
    title: "Chancen von KI",
    color: "#60f0a0",
    body: `
      <p>KI bietet im ethisch relevanten Bereich erhebliche Chancen – gerade dort, wo menschliche Entscheidungen durch Müdigkeit, Stress oder unbewusste Vorurteile beeinflusst werden.</p>
      <p><strong>Rechtswesen:</strong> Automatisierte Analyse von Gerichtsentscheidungen kann Inkonsistenzen aufdecken. COMPAS (USA) analysiert Rückfallrisiken. <strong>Medizin:</strong> KI-Systeme treffen in bestimmten Diagnoseaufgaben genauere Entscheidungen als Menschen. <strong>Pflege:</strong> Assistenzsysteme können älteren Menschen mehr Unabhängigkeit ermöglichen.</p>
      <p>Auch praktisch: KI kann schneller, günstiger und skalierbarer Entscheidungen treffen – was Zugang zu Beratung und Rechtshilfe demokratisieren könnte.</p>
    `,
    tags: ["Effizienz", "Konsistenz", "Medizin", "Rechtswesen", "Demokratisierung"],
  },
  kosten: {
    tag: "Analyse — Risiken",
    title: "Risiken & Kosten",
    color: "#f06060",
    body: `
      <p>Den Chancen stehen erhebliche Risiken gegenüber, die ethisch nicht ignoriert werden können.</p>
      <p><strong>Black Box Problem:</strong> Viele KI-Entscheidungen sind nicht nachvollziehbar – weder für Betroffene noch für Experten. <strong>Verantwortungslücke:</strong> Wer haftet, wenn eine KI falsch entscheidet? Entwickler, Betreiber oder niemand? <strong>Diskriminierung:</strong> Systeme wie COMPAS wurden kritisiert, rassistische Muster aus historischen Daten zu reproduzieren.</p>
      <p><strong>Rechtlich (Deutschland):</strong> Art. 97 GG schützt die richterliche Unabhängigkeit – vollautomatische Urteile wären verfassungswidrig. Die EU-KI-Verordnung (2024) stuft solche Hochrisikosysteme streng ein.</p>
    `,
    tags: ["Black Box", "Haftung", "Diskriminierung", "EU AI Act", "Verfassungsrecht"],
  },
  richter: {
    tag: "Fallbeispiel — Justiz",
    title: "KI als Richter",
    color: "#a060f0",
    body: `
      <p>Das vielleicht kontroverseste Anwendungsfeld: KI im Rechtswesen. In mehreren Ländern werden bereits KI-Systeme zur Unterstützung von Richtern eingesetzt – von der Aktenzusammenfassung bis zur Strafempfehlung.</p>
      <p><strong>COMPAS (USA):</strong> Berechnet Rückfallwahrscheinlichkeiten für Straftäter. Eine investigative Analyse von ProPublica (2016) zeigte, dass das System schwarze Angeklagte systematisch höher einstufte. <strong>China:</strong> KI-Systeme helfen bei bis zu 7.000 Verwaltungsverfahren täglich.</p>
      <p>Das fundamentale Problem: Recht ist nicht nur Berechnung – es erfordert das Abwägen von Würde, Kontext und moralischer Verantwortung. Eine KI, die nur auf Datenmuster reagiert, kann diese Tiefe nicht erreichen. Und: Entscheidungen müssen begründet und anfechtbar sein.</p>
    `,
    tags: ["COMPAS", "Justiz", "Grundgesetz Art. 97", "ProPublica", "Würde"],
  },
  widerspruch: {
    tag: "Philosophisches Problem",
    title: "Der Widerspruch",
    color: "#f0d060",
    body: `
      <p>Im Kern der KI-Ethik steckt ein fundamentaler Widerspruch: Eine KI kann nicht moralisch sein – und dennoch moralisch handeln. Wie ist das möglich?</p>
      <p>Die Antwort liegt in der Unterscheidung von <em>Moralität</em> (der inneren Haltung) und <em>moralisch relevantem Verhalten</em> (der äußeren Handlung). Ein Taschenrechner der richtig addiert „verhält sich korrekt" – aber er versteht keine Mathematik.</p>
      <p>Ähnlich: Eine KI, die konsistent faire Entscheidungen trifft, produziert moralisch wertvolle Ergebnisse – ohne selbst ein moralisches Subjekt zu sein. Die Frage verschiebt sich dann: Reicht das aus? Und wer trägt die Verantwortung für diese „Moralattrappe"?</p>
    `,
    tags: ["Subjekt vs. Verhalten", "Verantwortung", "Chinesisches Zimmer", "Emergenz"],
  },
};

let activeNode = null;

// ── NODE CARDS ──
document.querySelectorAll(".node-card").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.node;
    const data = nodeData[key];
    const panel = document.getElementById("detailPanel");
    const grid = document.getElementById("nodesGrid");

    if (activeNode === key) {
      closePanel();
      return;
    }

    document.querySelectorAll(".node-card").forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    activeNode = key;

    document.getElementById("detailTag").textContent = data.tag;
    document.getElementById("detailTitle").textContent = data.title;
    document.getElementById("detailBody").innerHTML = data.body;

    const tagsEl = document.getElementById("detailTags");
    tagsEl.innerHTML = data.tags.map((t) => `<span class="tag">${t}</span>`).join("");

    panel.style.setProperty("--panel-color", data.color);
    panel.classList.add("open");

    grid.insertAdjacentElement("afterend", panel);

    setTimeout(() => {
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  });
});

// ── CLOSE PANEL ──
function closePanel() {
  document.getElementById("detailPanel").classList.remove("open");
  document.querySelectorAll(".node-card").forEach((c) => c.classList.remove("active"));
  activeNode = null;
}

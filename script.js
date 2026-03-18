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
      <p>Nach Immanuel Kant setzt echtes moralisches Handeln vier Dinge voraus: <strong>freien Willen</strong>, <strong>Vernunft</strong>, das Bewusstsein einer Pflicht – und die Fähigkeit, <em>gegen</em> die eigene Neigung zu handeln. Wer nur aus Pflichtmäßigkeit handelt (weil es nützt), handelt nicht moralisch. Nur wer <em>aus Pflicht</em> handelt, handelt moralisch.</p>
      <p>Eine ergänzende Perspektive liefert <strong>John Rawls</strong>: Moralisch ist eine Handlung dann, wenn sie Prinzipien folgt, auf die man sich hinter dem <em>Schleier des Nichtwissens</em> einigen würde – also ohne zu wissen, welche Position man in der Gesellschaft einnimmt. Wer nicht weiß, ob er Richter oder Angeklagter, Reich oder Arm ist, wird sich für faire, schützende Regeln entscheiden. Rawls' <strong>Differenzprinzip</strong> geht noch weiter: Ungleichheiten sind nur dann gerechtfertigt, wenn sie den Schwächsten in der Gesellschaft nützen.</p>
      <p>Die zentrale Frage lautet: Kann eine KI, die nur Muster berechnet, jemals wirklich gerecht urteilen – oder reproduziert sie immer die Ungerechtigkeiten ihrer Trainingsdaten?</p>
    `,
    tags: ["Kant", "Rawls", "Schleier des Nichtwissens", "Differenzprinzip", "Freier Wille", "Gerechtigkeit"],
  },

  kant: {
    tag: "Philosophische Grundlage — Kant",
    title: "Kant & die KI",
    color: "#e8c060",
    body: `
      <p>Kants Moralphilosophie liefert eines der schärfsten Argumente gegen moralische KI. Er unterscheidet zwei Arten von Kausalität:</p>
      <p><strong>Naturkausalität</strong> folgt dem Prinzip von Ursache und Wirkung – deterministisch, vorhersagbar, mechanisch. KI ist darin gefangen: Jede Ausgabe folgt aus Eingabe und Programmierung. <strong>Transzendentale Kausalität</strong> hingegen ist dem Menschen vorbehalten – die Fähigkeit, selbst eine neue Kausalkette zu beginnen, unabhängig von äußeren Einflüssen. Das ist der Kern des freien Willens.</p>
      <p><strong>Hypothetischer vs. Kategorischer Imperativ:</strong> KI folgt hypothetischen Imperativen – „Wenn-dann"-Logiken, ausgerichtet auf Nützlichkeit oder das Glück des Nutzers. Der kategorische Imperativ hingegen gebietet unbedingt: Handle nicht für das Ergebnis, sondern weil die Handlung moralisch ist – unabhängig von Gefühlen oder Konsequenzen.</p>
      <p><strong>Heteronomer vs. Autonomer Wille:</strong> Ein heteronomer Wille wird von außen gesteuert – durch Triebe, Gefühle, Nützlichkeitserwägungen. Ein autonomer Wille gibt sich selbst ein Gesetz, allein aus Vernunft. KI besitzt nur einen heteronomen Willen: Sie wird vom Programmierer gesteuert, ihre „Rationalität" ist ein Spiegel der Werte des Entwicklers.</p>
      <p>Fazit: KI kann nur <em>pflichtmäßig</em> handeln, nicht <em>aus Pflicht</em>. Ihre Handlungen sind damit laut Kant <strong>amoralisch</strong> – nicht böse, aber nicht moralisch bewertbar. Sie ist keine „Kantianische Maschine", sondern eine <strong>„Happiness Provider Machine"</strong>: eine Glücksbereitstellungsmaschine, die dem Nützlichkeitsprinzip folgt, nicht dem kategorischen Imperativ.</p>
    `,
    tags: ["Naturkausalität", "Transzendentale Kausalität", "Hypothetischer Imperativ", "Autonomer Wille", "Amoralisch", "Happiness Provider Machine"],
  },

  artificial: {
    tag: "Kernthese — KI-Ethik",
    title: "Artificial Morality",
    color: "#60c8f0",
    body: `
      <p><strong>Artificial Morality</strong> bezeichnet die Fähigkeit von KI-Systemen, in moralisch relevanten Situationen Entscheidungen zu treffen – unabhängig davon, ob sie dabei „echte" Moral besitzen.</p>
      <p>Man unterscheidet zwischen <em>operativer Moralität</em> (KI handelt nach ethischen Regeln, ohne sie zu verstehen) und <em>vollständiger Moralität</em> (KI versteht und empfindet moralische Prinzipien). Letzteres gilt nach aktuellem Stand als nicht erreichbar.</p>
      <p>Forschungsansätze wie <strong>Artificial Moral Advisors (AMAs)</strong> zielen nicht auf moralische Entscheidungsträger, sondern auf Empfehlungssysteme: Die KI gibt moralische Hinweise, die Entscheidung bleibt beim Menschen. Beispiele: <em>Delphi</em> (Allen Institute) mit Ja/Nein-Antworten auf moralische Fragen – kritisiert wegen westlicher Verzerrung. <em>Sokratische KI</em> – dialogisch, regt zur eigenen Reflexion an, versteht aber keine echte Moral.</p>
      <p>Das Paradox: KI kann konsistenter nach ethischen Regeln handeln als Menschen – und trotzdem kein moralisches Wesen sein. Ist das gut genug?</p>
    `,
    tags: ["Operative Moralität", "AMA", "Delphi", "Sokratische KI", "Simulation", "Paradox"],
  },

  topdown: {
    tag: "Ansatz 1 — Regelbasiert",
    title: "Top-down Ethik",
    color: "#f060c8",
    body: `
      <p>Beim <strong>Top-down Ansatz</strong> werden ethische Prinzipien explizit formuliert und direkt in das KI-System programmiert. Mögliche Grundlagen: die Goldene Regel, der Kategorische Imperativ, Utilitarismus oder deontologische Ethik.</p>
      <p><strong>Varianten:</strong> Gebots- und Regelmodelle geben klare Handlungsanweisungen, stoßen aber bei Regelkonflikten an Grenzen. Utilitaristische Modelle wählen die Handlung mit dem größten Gesamtnutzen – theoretisch berechenbar, praktisch extrem komplex. Kantianische Implementierungen scheitern daran, dass Maschinen keinen Zugang zu echten Motiven haben.</p>
      <p><strong>Praxisbeispiel:</strong> UCL-Forscher programmierten moralische Regeln direkt ins Belohnungssystem eines KI-Agenten. Ergebnis: Das Modell erlernte ethisches Verhalten und konnte es auf neue Situationen übertragen – auch egoistische Modelle ließen sich „umtrainieren".</p>
      <p><strong>Grundproblem:</strong> Vollständige moralische Bewertung verlangt potenziell unbegrenzte Information. Regeln sind oft kontextabhängig. Menschliche Moral integriert Emotionen wie Empathie und Schuld – regelbasierte Systeme bleiben neutral. Und: Wessen Moral wird kodiert?</p>
    `,
    tags: ["Regelbasiert", "Kategorischer Imperativ", "Utilitarismus", "UCL-Experiment", "Deontologie", "Regelkonflikt"],
  },

  bottomup: {
    tag: "Ansatz 2 — Lernbasiert",
    title: "Bottom-up Ethik",
    color: "#f0a060",
    body: `
      <p>Beim <strong>Bottom-up Ansatz</strong> lernt die KI moralisches Verhalten nicht durch explizite Regeln, sondern durch Daten, Feedback und Erfahrung – ähnlich wie Kinder moralische Normen durch Sozialisation erwerben.</p>
      <p><strong>Varianten:</strong> Evolutionäre Ansätze simulieren natürliche Selektion mit genetischen Algorithmen – Kooperation erweist sich als evolutionär stabil. Unbiased Learning optimiert ein Ziel ohne vorgegebene Moral. Assoziatives Lernen (RLHF) stärkt moralische Verhaltensweisen durch menschliches Feedback – birgt aber die Gefahr rein oberflächlicher Anpassung.</p>
      <p><strong>Praxisbeispiel (Univ. Washington):</strong> KI wurde auf altruistischen Datensätzen trainiert. Ergebnis: Das Modell zeigte höhere Altruismus-Tendenzen auch in neuen Spielsituationen. Proof of Concept – aber kein Beweis für echtes moralisches Verständnis.</p>
      <p><strong>TU Darmstadt:</strong> KI „lernte" moralische Antworten aus menschlichen Texten – erkannte, dass Lügen falsch ist, aber „Zeit totschlagen" akzeptabel. Impliziert: Modelle extrahieren ethische Präferenzen, übernehmen aber auch menschliche Vorurteile.</p>
      <p><strong>Moral Grammar Hypothese:</strong> Menschen besitzen möglicherweise eine angeborene moralische Intuition. Ob KI dies nachbilden kann, ist empirisch ungeklärt und technisch kaum formalisierbar.</p>
    `,
    tags: ["RLHF", "Evolutionäre Algorithmen", "Altruismus", "Moral Grammar", "TU Darmstadt", "Sozialisation"],
  },

  chancen: {
    tag: "Analyse — Potenziale",
    title: "Chancen von KI",
    color: "#60f0a0",
    body: `
      <p>KI bietet im ethisch relevanten Bereich erhebliche Chancen – gerade dort, wo menschliche Entscheidungen durch Müdigkeit, Stress oder unbewusste Vorurteile beeinflusst werden.</p>
      <p><strong>Objektivität:</strong> Eine SSRN-Studie (2024) verglich GPT-4o mit menschlichen Richtern: Die KI agierte deutlich legalistischer, ließ sich nicht von Sympathie oder emotionalem Eindruck leiten – in allen 25 Fällen blieb die Bewertung konsistent, auch bei manipulierten Prompts.</p>
      <p><strong>Entlastung:</strong> NRW, Niedersachsen, Brandenburg und Hessen unterzeichneten im März 2025 eine Kooperationsvereinbarung für KI-Unterstützung in Massenverfahren (z.B. Fluggastrechte). Die KI übernimmt Textvergleiche, Metadatenextraktion, Entscheidungsvorschläge – der Richter bleibt zuständig.</p>
      <p><strong>Zugangsgerechtigkeit:</strong> KI kann schneller, günstiger und skalierbarer Rechts- und Beratungsdienstleistungen anbieten – und damit bisher schwer zugängliche Hilfe demokratisieren.</p>
    `,
    tags: ["Objektivität", "GPT-4o Studie", "NRW 2025", "Entlastung", "Zugangsgerechtigkeit", "Legalismus"],
  },

  kosten: {
    tag: "Analyse — Risiken",
    title: "Risiken & Kosten",
    color: "#f06060",
    body: `
      <p>Den Chancen stehen erhebliche Risiken gegenüber, die ethisch nicht ignoriert werden können.</p>
      <p><strong>Black Box:</strong> Viele KI-Entscheidungen sind weder für Betroffene noch für Experten nachvollziehbar – ein direkter Widerspruch zu Art. 92 und 97 GG, die rechtsprechende Gewalt natürlichen Personen vorbehalten. Ein menschlicher Richter muss KI-Entscheidungen nachvollziehen und hinterfragen können.</p>
      <p><strong>Racial Bias (COMPAS) – eine Rawlssche Kritik:</strong> Das US-System zur Rückfallprognose stufte schwarze Angeklagte systematisch höher ein – historische Vorurteile aus Trainingsdaten wurden reproduziert. Aus der Perspektive von John Rawls ist das ein fundamentales moralisches Versagen: Eine KI hat keinen echten Schleier des Nichtwissens – ihre Trainingsdaten haben bereits eine Perspektive eingebaut. Ein gerechtes System dürfte nach Rawls' Differenzprinzip nie systematisch die Schwächsten benachteiligen.</p>
      <p><strong>Halluzinationen:</strong> KI-Systeme erfinden Fakten mit erschreckender Selbstsicherheit. Über 300 dokumentierte Fälle zeigen, dass KI-generierte Schriftsätze nicht existierende Urteile zitierten – allein in den USA fast 200. Inzwischen sind auch Richter betroffen: In New Jersey musste ein Bundesrichter eine Anordnung neu ausstellen, in Mississippi enthielt eine richterliche Anordnung falsche Parteien und erfundene Anschuldigungen. Richter Schlegel warnt: „Eine Krise, die nur darauf wartet, zu passieren."</p>
      <p><strong>Verantwortungslücke:</strong> Wer haftet, wenn eine KI falsch entscheidet – Entwickler, Betreiber oder der Richter, der unterschreibt? Diese Lücke ist rechtlich ungeklärt und moralisch gefährlich: Sie lädt dazu ein, Verantwortung weiterzuschieben. Schlegel bringt es auf den Punkt: „Wenn das Gericht einen Fehler macht, ist das das Gesetz – ich kann nicht Monate später sagen: Ups, tut mir leid."</p>
    `,
    tags: ["Black Box", "COMPAS", "Racial Bias", "Rawls", "Halluzination", "Art. 92/97 GG", "Verantwortungslücke"],
  },

  richter: {
    tag: "Fallbeispiel — Justiz",
    title: "KI als Richter",
    color: "#a060f0",
    body: `
      <p>Das kontroverseste Anwendungsfeld: KI im Rechtswesen. Zwei Szenarien werden diskutiert:</p>
      <p><strong>Szenario 1 – KI als Unterstützer:</strong> Hilfe bei juristischer Recherche, Analyse großer Datenmengen, Entscheidungsvorschläge. Die letzte Entscheidung bleibt beim Menschen.</p>
      <p><strong>Szenario 2 – KI als Richter:</strong> Autonome Entscheidungen bei standardisierbaren, geringwertigen Fällen (z.B. Verkehrsrecht) – unter der Bedingung, dass rechtsstaatliche Prinzipien gewahrt bleiben und die KI weniger Fehler macht als Menschen.</p>
      <p><strong>Internationale Beispiele:</strong> Estland: „KrattAI" für Verwaltungsfälle bis 7.000 €, anfechtbar vor menschlichem Richter. Kolumbien: Richter zog KI bei Urteilsfindung heran (Versorgung eines autistischen Kindes / Krankenversicherung). Frankreich: „Predictrice" berechnet Abfindungszahlungen. Niederlande: „Rechtswijzer" für Online-Mediation. USA: ROSS Intelligence für Rechtsprechungsanalyse und COMPAS für Rückfallprognosen. China: KI in Internet-Gerichten und für Arbeitsentlastung von Richtern.</p>
      <p><strong>Rechtslage Deutschland:</strong> Art. 92 und 97 GG reservieren die rechtsprechende Gewalt für natürliche Personen – vollautomatische Urteile wären verfassungswidrig.</p>
    `,
    tags: ["KrattAI", "COMPAS", "Predictrice", "Rechtswijzer", "ROSS Intelligence", "Art. 92/97 GG", "Estland", "Kolumbien"],
  },

  widerspruch: {
    tag: "Philosophisches Problem",
    title: "Der Widerspruch",
    color: "#f0d060",
    body: `
      <p>Im Kern der KI-Ethik steckt ein fundamentaler Widerspruch: Eine KI kann nicht moralisch sein – und dennoch moralisch handeln. Wie ist das möglich?</p>
      <p>Die Antwort liegt in der Unterscheidung von <em>Moralität</em> (der inneren Haltung) und <em>moralisch relevantem Verhalten</em> (der äußeren Handlung). Ein Taschenrechner der richtig addiert „verhält sich korrekt" – aber er versteht keine Mathematik. Ähnlich: Eine KI, die konsistent faire Entscheidungen trifft, produziert moralisch wertvolle Ergebnisse – ohne selbst ein moralisches Subjekt zu sein.</p>
      <p>Die <strong>Tugendethik</strong> verschärft diesen Widerspruch: Für Aristoteles ist Moral keine Frage von Regeln oder Ergebnissen, sondern von <em>Charakter</em>. Moralisch gut handelt, wer durch Übung, Reflexion und soziale Einbettung Tugenden wie Gerechtigkeit, Empathie und Klugheit entwickelt hat. Eine KI hat keinen Charakter – sie hat Parameter. Sie kann Tugend simulieren, aber nie verkörpern.</p>
      <p>Die Frage verschiebt sich damit: Reicht moralisch korrektes Verhalten ohne moralische Haltung aus? Und wer trägt die Verantwortung, wenn es schiefgeht? Laut TAMU-Forschung stets der Entwickler oder Anwender – nicht die KI selbst.</p>
    `,
    tags: ["Subjekt vs. Verhalten", "Tugendethik", "Charakter", "Verantwortung", "Chinesisches Zimmer", "TAMU"],
  },

  arendt: {
    tag: "Philosophische Warnung — Hannah Arendt",
    title: "Banalität des Bösen",
    color: "#f09060",
    body: `
      <p>Hannah Arendts Konzept der <strong>„Banalität des Bösen"</strong> – entwickelt zur Analyse des Eichmann-Prozesses – gewinnt im Kontext von KI eine beunruhigende neue Bedeutung.</p>
      <p>Arendt beschrieb, wie Ungerechtigkeit nicht durch böse Absicht, sondern durch <em>gedankenloses Ausführen von Befehlen</em> entsteht. Menschen, die kritisches Denken aufgeben und sich auf Strukturen und Autoritäten verlassen, werden zu passiven Vollstreckern – ohne moralische Reflexion.</p>
      <p><strong>Übertragung auf KI:</strong> Wenn Menschen zunehmend KI-Entscheidungen passiv vertrauen, ohne sie zu hinterfragen, droht genau dieser Mechanismus. Ungerechtigkeit normalisiert sich durch Untätigkeit. Die kritische Reflexion bleibt aus, weil „die KI es ja so gesagt hat".</p>
      <p>Die Gefahr ist strukturell: Nicht die KI wird böse – sondern die Menschen, die aufhören, selbst zu denken. Moralische Verantwortung lässt sich nicht an Algorithmen delegieren. Die Suche nach technischen Lösungen für moralische und gesellschaftliche Krisen lenkt zudem von den eigentlichen Ursachen ab.</p>
    `,
    tags: ["Hannah Arendt", "Banalität des Bösen", "Kritische Reflexion", "Passive Verantwortung", "Normalisierung", "Moral Outsourcing"],
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

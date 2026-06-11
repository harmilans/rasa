const egos = [
  {
    id: "krodha",
    name: "KRODHA",
    meaning: "Beautiful rage",
    role: "For the moments you need to burn clean.",
    product: "Chilli cacao crunch",
    ingredients: ["ashwagandha", "dark cacao", "red chilli", "magnesium"],
    phrase: "Controlled fury. No apology.",
    visual: "black chrome, torn heat, molten type",
    palette: ["#ff1d18", "#090909", "#d8d8d8", "#ff7b00"],
    font: "font-brutal",
    mood: "rage"
  },
  {
    id: "mada",
    name: "MADA",
    meaning: "Main character",
    role: "For walking in like the room asked for you.",
    product: "Saffron guava vanilla",
    ingredients: ["saffron", "guava", "b12", "citrus peel"],
    phrase: "Glossy ego. Full volume.",
    visual: "hot pink, liquid gold, warped mirror fruit",
    palette: ["#ff2bbd", "#0b050b", "#f7c845", "#ffffff"],
    font: "font-luxe",
    mood: "glamour"
  },
  {
    id: "nirvana",
    name: "NIRVANA",
    meaning: "Soft disappearance",
    role: "For vanishing from the noise without leaving the room.",
    product: "Vanilla cardamom blueberry",
    ingredients: ["cardamom", "chamomile", "blueberry", "l-theanine"],
    phrase: "Float mode. Signal muted.",
    visual: "frosted glass, mist, icy silence",
    palette: ["#dff9ff", "#0d1e35", "#88d9ff", "#ffffff"],
    font: "font-serene",
    mood: "quiet"
  },
  {
    id: "bhaya",
    name: "BHAYA",
    meaning: "Delicious fear",
    role: "For the night-screen thrill and the sour little dare.",
    product: "Tamarind lime shock",
    ingredients: ["tamarind", "lime", "green mango", "electrolytes"],
    phrase: "Scare yourself awake.",
    visual: "toxic green, ultraviolet, glitch warnings",
    palette: ["#8cff00", "#050706", "#7b2cff", "#eaff00"],
    font: "font-glitch",
    mood: "fear"
  },
  {
    id: "shringar",
    name: "SHRINGAR",
    meaning: "Edible desire",
    role: "For wanting, being wanted, and pretending it was accidental.",
    product: "Rose cocoa berry",
    ingredients: ["rose", "cocoa", "strawberry", "silver leaf"],
    phrase: "Desire with teeth.",
    visual: "plum velvet, lipstick chrome, perfume danger",
    palette: ["#561034", "#f03c73", "#c6c6d0", "#1a0612"],
    font: "font-luxe",
    mood: "desire"
  },
  {
    id: "veera",
    name: "VEERA",
    meaning: "Hero mode",
    role: "For the pitch, the exam, the first rep, the last lap.",
    product: "Masala cacao charge",
    ingredients: ["cacao", "brahmi", "sea salt", "saffron"],
    phrase: "Enter like a victory.",
    visual: "cobalt, saffron, sharp steel geometry",
    palette: ["#0647ff", "#ff8a00", "#e8edf6", "#07122e"],
    font: "font-brutal",
    mood: "hero"
  },
  {
    id: "hasya",
    name: "HASYA",
    meaning: "Chaos giggle",
    role: "For making the group chat louder.",
    product: "Mango popping candy",
    ingredients: ["mango", "popping candy", "banana", "jaggery"],
    phrase: "Unhinge the snack break.",
    visual: "stickers, candy noise, cartoon impact",
    palette: ["#ffe500", "#1da7ff", "#ff3b30", "#111111"],
    font: "font-pop",
    mood: "play"
  },
  {
    id: "karuna",
    name: "KARUNA",
    meaning: "Soft armor",
    role: "For the day that needs a gentler ending.",
    product: "Coconut jaggery almond",
    ingredients: ["coconut", "jaggery", "almond", "shatavari"],
    phrase: "Hold yourself properly.",
    visual: "quilted lilac, cream, handwritten softness",
    palette: ["#c9a7ff", "#fff0d8", "#ff7f6e", "#352047"],
    font: "font-soft",
    mood: "comfort"
  }
];

const app = document.querySelector("#app");

function paletteDots(colors) {
  return colors.map((color) => `<span style="--swatch:${color}"></span>`).join("");
}

function packMarkup(ego) {
  return `
    <div class="pack-shell ${ego.mood}" aria-label="${ego.name} pack mockup">
      <div class="pack-topline">RASA</div>
      <div class="pack-sigil">${ego.name.slice(0, 1)}</div>
      <div class="pack-name">${ego.name}</div>
      <div class="pack-meaning">${ego.meaning}</div>
      <div class="pack-product">${ego.product}</div>
      <div class="pack-footer">Pick your feeling.</div>
    </div>
  `;
}

function egoCard(ego) {
  return `
    <a class="ego-tile ${ego.mood}" href="#${ego.id}" style="--a:${ego.palette[0]};--b:${ego.palette[1]};--c:${ego.palette[2]}">
      <span>${ego.name}</span>
      <small>${ego.meaning}</small>
    </a>
  `;
}

function homeView() {
  return `
    <section class="home-hero">
      <div class="hero-copy">
        <p class="eyebrow">Ancient moods. Modern snack egos.</p>
        <h1>Pick your feeling. Wear the ego.</h1>
        <p class="hero-text">
          RASA is a fictional mood snack universe. Every pack is an alter ego:
          rage, glamour, silence, thrill, desire, courage, comedy, comfort.
        </p>
        <div class="hero-actions">
          <a class="primary-action" href="#krodha">Enter KRODHA</a>
          <a class="secondary-action" href="#lineup">See all egos</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="orbit-word orbit-one">KRODHA</div>
        <div class="orbit-word orbit-two">MADA</div>
        <div class="orbit-word orbit-three">NIRVANA</div>
        <div class="hero-pack-stack">
          ${packMarkup(egos[0])}
          ${packMarkup(egos[1])}
          ${packMarkup(egos[2])}
        </div>
      </div>
    </section>

    <section id="lineup" class="lineup-section">
      <div class="section-heading">
        <p class="eyebrow">The drop list</p>
        <h2>Eight snacks. Eight egos. One parent brand with no chill.</h2>
      </div>
      <div class="ego-grid">
        ${egos.map(egoCard).join("")}
      </div>
    </section>

    <section class="mockup-section">
      <div class="mockup-copy">
        <p class="eyebrow">Packaging territory</p>
        <h2>Streetwear drop, perfume counter, night-market snack shelf.</h2>
        <p>
          The parent brand stays restrained. The packs misbehave. Each SKU owns
          a visual language strong enough to become a collectible, a sticker,
          a hoodie, a vending machine, or a limited edition collab.
        </p>
      </div>
      <img src="assets/rasa-ego-mockups.png" alt="RASA emotion snack packaging mockup board">
    </section>
  `;
}

function detailView(ego) {
  document.body.dataset.ego = ego.id;
  return `
    <section
      class="ego-page ${ego.mood} ${ego.font}"
      style="--a:${ego.palette[0]};--b:${ego.palette[1]};--c:${ego.palette[2]};--d:${ego.palette[3]}"
    >
      <div class="ego-background" aria-hidden="true">
        <span>${ego.name}</span>
        <span>${ego.meaning}</span>
        <span>${ego.phrase}</span>
      </div>
      <div class="ego-copy">
        <a class="back-link" href="#home">Back to RASA</a>
        <p class="eyebrow">${ego.meaning}</p>
        <h1>${ego.name}</h1>
        <p class="ego-role">${ego.role}</p>
        <p class="ego-phrase">${ego.phrase}</p>
        <div class="identity-strip">
          <div>
            <span>Snack</span>
            <strong>${ego.product}</strong>
          </div>
          <div>
            <span>Visual code</span>
            <strong>${ego.visual}</strong>
          </div>
        </div>
        <div class="ingredient-list">
          ${ego.ingredients.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="palette" aria-label="${ego.name} palette">
          ${paletteDots(ego.palette)}
        </div>
      </div>
      <div class="ego-stage">
        ${packMarkup(ego)}
      </div>
      <div class="next-row">
        ${egos.filter((item) => item.id !== ego.id).slice(0, 3).map(egoCard).join("")}
      </div>
    </section>
  `;
}

function render() {
  const id = window.location.hash.replace("#", "") || "home";
  const ego = egos.find((item) => item.id === id);
  document.body.dataset.ego = ego ? ego.id : "home";
  app.innerHTML = ego ? detailView(ego) : homeView();
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", render);
render();

const egos = [
  {
    id: "krodha",
    name: "KRODHA",
    meaning: "Beautiful rage",
    role: "For the moments you need to burn clean.",
    product: "Chilli Cacao Crunch",
    price: 349,
    pack: "Box of 6 crisp wafers",
    badge: "Bestseller",
    ingredients: ["ashwagandha", "dark cacao", "red chilli", "magnesium"],
    benefits: ["Spicy dark cacao", "Low sugar", "5g fiber", "No artificial colors"],
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
    product: "Saffron Guava Vanilla",
    price: 389,
    pack: "Box of 6 crisp wafers",
    badge: "New drop",
    ingredients: ["saffron", "guava", "b12", "citrus peel"],
    benefits: ["Saffron citrus glaze", "Low sugar", "5g fiber", "Vitamin B12"],
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
    product: "Vanilla Cardamom Blueberry",
    price: 369,
    pack: "Box of 6 crisp wafers",
    badge: "Night snack",
    ingredients: ["cardamom", "chamomile", "blueberry", "l-theanine"],
    benefits: ["Soft vanilla snap", "Low sugar", "5g fiber", "Made for wind-down"],
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
    product: "Tamarind Lime Shock",
    price: 349,
    pack: "Box of 6 sour bites",
    badge: "Sour mode",
    ingredients: ["tamarind", "lime", "green mango", "electrolytes"],
    benefits: ["Electric sour", "Low sugar", "5g fiber", "Gaming desk approved"],
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
    product: "Rose Cocoa Berry",
    price: 399,
    pack: "Box of 6 chocolate wafers",
    badge: "After dark",
    ingredients: ["rose", "cocoa", "strawberry", "silver leaf"],
    benefits: ["Rose cocoa shell", "Low sugar", "5g fiber", "Date-night coded"],
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
    product: "Masala Cacao Charge",
    price: 369,
    pack: "Box of 6 crisp wafers",
    badge: "Focus pick",
    ingredients: ["cacao", "brahmi", "sea salt", "saffron"],
    benefits: ["Salted masala cacao", "Low sugar", "5g fiber", "Desk-to-gym energy"],
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
    product: "Mango Popping Candy",
    price: 329,
    pack: "Box of 6 candy wafers",
    badge: "Party pack",
    ingredients: ["mango", "popping candy", "banana", "jaggery"],
    benefits: ["Mango pop crackle", "Low sugar", "5g fiber", "Shareable chaos"],
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
    product: "Coconut Jaggery Almond",
    price: 349,
    pack: "Box of 6 comfort wafers",
    badge: "Soft reset",
    ingredients: ["coconut", "jaggery", "almond", "shatavari"],
    benefits: ["Coconut jaggery melt", "Low sugar", "5g fiber", "Comfort without crash"],
    phrase: "Hold yourself properly.",
    visual: "quilted lilac, cream, handwritten softness",
    palette: ["#c9a7ff", "#fff0d8", "#ff7f6e", "#352047"],
    font: "font-soft",
    mood: "comfort"
  }
];

const app = document.querySelector("#app");
let cart = JSON.parse(localStorage.getItem("rasa-cart") || "[]");
let cartOpen = false;

function money(value) {
  return `₹${value}`;
}

function saveCart() {
  localStorage.setItem("rasa-cart", JSON.stringify(cart));
  updateCartButton();
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function updateCartButton() {
  const button = document.querySelector(".cart-button");
  if (button) button.textContent = `Bag (${cartCount()})`;
}

function paletteDots(colors) {
  return colors.map((color) => `<span style="--swatch:${color}"></span>`).join("");
}

function packMarkup(ego, extraClass = "") {
  return `
    <div class="pack-shell ${ego.mood} ${extraClass}" aria-label="${ego.name} pack mockup">
      <div class="pack-topline">RASA</div>
      <div class="pack-sigil">${ego.name.slice(0, 1)}</div>
      <div class="pack-name">${ego.name}</div>
      <div class="pack-meaning">${ego.meaning}</div>
      <div class="pack-product">${ego.product}</div>
      <div class="pack-footer">Pick your feeling.</div>
    </div>
  `;
}

function productCard(ego) {
  return `
    <article class="product-card ${ego.mood}" style="--a:${ego.palette[0]};--b:${ego.palette[1]};--c:${ego.palette[2]};--d:${ego.palette[3]}">
      <a class="product-art" href="#${ego.id}" aria-label="View ${ego.name}">
        ${packMarkup(ego, "mini-pack")}
      </a>
      <div class="product-info">
        <div class="product-meta">
          <span>${ego.badge}</span>
          <strong>${money(ego.price)}</strong>
        </div>
        <h3>${ego.name}</h3>
        <p>${ego.meaning} · ${ego.product}</p>
        <div class="product-actions">
          <button data-add="${ego.id}">Add to bag</button>
          <a href="#${ego.id}">Details</a>
        </div>
      </div>
    </article>
  `;
}

function heroStack() {
  return `
    <div class="hero-pack-stack">
      ${packMarkup(egos[0])}
      ${packMarkup(egos[1])}
      ${packMarkup(egos[2])}
    </div>
  `;
}

function homeView() {
  return `
    <section class="shop-hero">
      <div class="hero-copy">
        <p class="eyebrow">Mood snacks for emotional main characters</p>
        <h1>Snack into the state you want.</h1>
        <p class="hero-text">
          Crisp mood wafers. Indian hero ingredients. Loud western packaging.
          Pick a box. Pick an ego.
        </p>
        <div class="hero-offer">
          <span>Launch drop</span>
          <strong>Build any 4 boxes and save 15%</strong>
        </div>
        <div class="hero-actions">
          <a class="primary-action" href="#shop">Shop the drop</a>
          <button class="secondary-action" data-add="bundle">Add starter kit</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="price-burst">
          <span>From</span>
          <strong>₹329</strong>
          <small>box of 6</small>
        </div>
        <div class="orbit-word orbit-one">SHOP RAGE</div>
        <div class="orbit-word orbit-two">BUY CALM</div>
        <div class="orbit-word orbit-three">EAT EGO</div>
        ${heroStack()}
      </div>
    </section>

    <section id="shop" class="shop-section">
      <div class="section-heading">
        <p class="eyebrow">Shop by state</p>
        <h2>Eight egos. Cart them like moods.</h2>
      </div>
      <div class="slider-shell">
        <div class="slider-controls" aria-label="Product slider controls">
          <button data-slide="products" data-dir="-1" aria-label="Previous products">Prev</button>
          <button data-slide="products" data-dir="1" aria-label="Next products">Next</button>
        </div>
        <div class="product-grid slider-track" data-slider="products">
          ${egos.map(productCard).join("")}
        </div>
      </div>
    </section>

    <section id="bundle" class="bundle-section">
      <div class="bundle-copy">
        <p class="eyebrow">Starter kit</p>
        <h2>The first four boxes to launch with.</h2>
        <p>
          KRODHA for heat, MADA for gloss, NIRVANA for wind-down, HASYA for
          chaotic sharing. A tight D2C entry bundle with obvious use occasions.
        </p>
        <button class="primary-action" data-add="bundle">Add starter kit · ₹1299</button>
      </div>
      <div class="bundle-packs">
        ${[egos[0], egos[1], egos[2], egos[6]].map((ego) => packMarkup(ego, "bundle-pack")).join("")}
      </div>
    </section>

    <section class="proof-strip">
      <div><strong>5g</strong><span>fiber per pack</span></div>
      <div><strong>&lt;4g</strong><span>added sugar</span></div>
      <div><strong>8</strong><span>collectible egos</span></div>
      <div><strong>0</strong><span>boring beige wellness</span></div>
    </section>

    <section class="subscribe-section">
      <div>
        <p class="eyebrow">Subscribe and rotate</p>
        <h2>Your monthly mood drawer.</h2>
      </div>
      <form class="email-capture">
        <input type="email" placeholder="email for first drop access" aria-label="Email">
        <button type="submit">Join waitlist</button>
      </form>
    </section>
  `;
}

function detailView(ego) {
  document.body.dataset.ego = ego.id;
  return `
    <section
      class="pdp-page ${ego.mood} ${ego.font}"
      style="--a:${ego.palette[0]};--b:${ego.palette[1]};--c:${ego.palette[2]};--d:${ego.palette[3]}"
    >
      ${universeLayer(ego)}
      <div class="ego-background" aria-hidden="true">
        <span>${ego.name}</span>
        <span>${ego.meaning}</span>
        <span>${ego.phrase}</span>
      </div>
      <div class="pdp-gallery">
        ${packMarkup(ego, "pdp-pack")}
        <div class="pdp-thumbs">
          <span style="--swatch:${ego.palette[0]}"></span>
          <span style="--swatch:${ego.palette[1]}"></span>
          <span style="--swatch:${ego.palette[2]}"></span>
        </div>
      </div>
      <div class="pdp-buybox">
        <a class="back-link" href="#shop">Back to shop</a>
        <p class="eyebrow">${ego.badge}</p>
        <h1>${ego.name}</h1>
        <p class="ego-role">${ego.role}</p>
        <p class="ego-phrase">${ego.phrase}</p>
        <div class="buy-row">
          <div>
            <span>${ego.pack}</span>
            <strong>${money(ego.price)}</strong>
          </div>
          <button data-add="${ego.id}">Add to bag</button>
        </div>
        <div class="benefit-grid">
          ${ego.benefits.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="identity-strip">
          <div>
            <span>Flavor</span>
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
        <div class="pdp-note">
          <strong>No heavy wellness lecture.</strong>
          <span>Just a crisp snack with a specific emotional costume.</span>
        </div>
      </div>
      <section class="ego-mockup-panel">
        <div>
          <p class="eyebrow">Mockup world</p>
          <h2>${ego.name} belongs to the full RASA drop.</h2>
          <p>
            Every ego gets its own shelf energy and its own bite architecture:
            wrapper, texture, filling, dusting, and hero ingredient cues.
          </p>
        </div>
        <div class="mockup-stack">
          <img src="assets/rasa-ego-mockups.png" alt="RASA ego packaging mockup board">
          <img src="assets/rasa-inside-mockups.png" alt="RASA opened packs with snack pieces and ingredients">
        </div>
      </section>
      <div class="related-row">
        <div class="slider-controls" aria-label="Related product slider controls">
          <button data-slide="related" data-dir="-1" aria-label="Previous related products">Prev</button>
          <button data-slide="related" data-dir="1" aria-label="Next related products">Next</button>
        </div>
        <div class="related-track slider-track" data-slider="related">
          ${egos.filter((item) => item.id !== ego.id).map(productCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function universeLayer(ego) {
  const symbols = {
    rage: ["FIRE", "HEAT", "RAGE", "BITE", "BACK"],
    glamour: ["GLOSS", "GOLD", "MAIN", "MIRROR", "STAR"],
    quiet: ["FLOAT", "HUSH", "SOFT", "VANISH", "AIR"],
    fear: ["DARE", "SOUR", "RUN", "GLITCH", "NIGHT"],
    desire: ["WANT", "ROSE", "VELVET", "LOUD", "PULSE"],
    hero: ["HERO", "STRIKE", "GO", "RISE", "WIN"],
    play: ["POP", "HAHA", "CRACK", "BOOM", "ROOM"],
    comfort: ["HOLD", "SOFT", "WARM", "RESET", "HOME"]
  };

  return `
    <div class="universe-layer ${ego.mood}-universe" aria-hidden="true">
      ${symbols[ego.mood].map((symbol, index) => `<span class="universe-token token-${index + 1}">${symbol}</span>`).join("")}
      <i class="universe-shape shape-one"></i>
      <i class="universe-shape shape-two"></i>
      <i class="universe-shape shape-three"></i>
    </div>
  `;
}

function cartDrawer() {
  const items = cart
    .map((item) => `
      <div class="cart-item">
        <span>${item.name}</span>
        <small>${item.qty} × ${money(item.price)}</small>
        <button data-remove="${item.id}" aria-label="Remove ${item.name}">Remove</button>
      </div>
    `)
    .join("");

  return `
    <aside class="cart-drawer ${cartOpen ? "open" : ""}" aria-label="Shopping bag">
      <div class="cart-head">
        <strong>Your bag</strong>
        <button data-cart-close>Close</button>
      </div>
      <div class="cart-items">
        ${cart.length ? items : "<p>Your bag is emotionally empty.</p>"}
      </div>
      <div class="cart-total">
        <span>Total</span>
        <strong>${money(cartTotal())}</strong>
      </div>
      <button class="checkout-button">Checkout concept</button>
    </aside>
  `;
}

function addToCart(id) {
  if (id === "bundle") {
    const bundle = { id: "starter-kit", name: "Starter Kit", price: 1299 };
    const existing = cart.find((item) => item.id === bundle.id);
    if (existing) existing.qty += 1;
    else cart.push({ ...bundle, qty: 1 });
  } else {
    const ego = egos.find((item) => item.id === id);
    if (!ego) return;
    const existing = cart.find((item) => item.id === ego.id);
    if (existing) existing.qty += 1;
    else cart.push({ id: ego.id, name: ego.name, price: ego.price, qty: 1 });
  }
  cartOpen = true;
  saveCart();
  render();
}

function removeFromCart(id) {
  cart = cart
    .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
    .filter((item) => item.qty > 0);
  saveCart();
  render();
}

function render() {
  const id = window.location.hash.replace("#", "") || "home";
  const ego = egos.find((item) => item.id === id);
  document.body.dataset.ego = ego ? ego.id : "home";
  app.innerHTML = `${ego ? detailView(ego) : homeView()}${cartDrawer()}`;
  updateCartButton();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  const remove = event.target.closest("[data-remove]");
  const open = event.target.closest("[data-cart-open]");
  const close = event.target.closest("[data-cart-close]");
  const slide = event.target.closest("[data-slide]");

  if (add) addToCart(add.dataset.add);
  if (remove) removeFromCart(remove.dataset.remove);
  if (slide) {
    const track = document.querySelector(`[data-slider="${slide.dataset.slide}"]`);
    if (track) {
      const direction = Number(slide.dataset.dir || 1);
      const distance = Math.max(track.clientWidth * 0.82, 260);
      track.scrollBy({ left: direction * distance, behavior: "smooth" });
    }
  }
  if (open) {
    cartOpen = true;
    render();
  }
  if (close) {
    cartOpen = false;
    render();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches(".email-capture")) {
    event.preventDefault();
    event.target.classList.add("submitted");
    event.target.innerHTML = "<strong>You're on the first drop list.</strong>";
  }
});

window.addEventListener("hashchange", render);
render();

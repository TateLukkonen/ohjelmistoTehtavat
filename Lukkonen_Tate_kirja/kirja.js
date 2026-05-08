import "./ostoskori.js";

class KirjaElementti extends HTMLElement {
  static get observedAttributes() {
    return ["data-url"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._kirjat = [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data-url" && oldValue !== newValue) {
      this.lataaKirjat(newValue);
    }
  }

  async lataaKirjat(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      this.kirjat = data;
    } catch (err) {
      console.error("Kirjojen lataus epäonnistui:", err);
    }
  }

  get kirjat() {
    return this._kirjat;
  }

  set kirjat(value) {
    this._kirjat = value;
    this.render();
  }

  lisaaKoriin(kirja) {
    this.dispatchEvent(
      new CustomEvent("add-to-cart", {
        detail: kirja,
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .books {
          display: flex;
          justify-content: center;
          border: solid, black, 3px;
          padding-bottom: 20px;
          gap: 30px;
        }
      </style>
      <div class="books">
        ${this._kirjat
          .map(
            (t) => `
              <div>
                <h4>${t.nimi}</h4>
                <p>${t.julkaisija}</p>
                <p>${t.kirjanumero}</p>
                <p>${t.painovuosi}</p>
                <p>${t.hinta} €</p>
                <button data-id="${t.kirjanumero}">Lisää koriin</button>
              </div>
            `,
          )
          .join("")}
      </div>
    `;

    this.shadowRoot.querySelectorAll("button[data-id]").forEach((btn) => {
      btn.onclick = () => {
        const kirja = this._kirjat.find(
          (k) => k.kirjanumero === Number(btn.dataset.id),
        );
        this.lisaaKoriin(kirja);
      };
    });
  }

  connectedCallback() {
    if (this.hasAttribute("data-url")) {
      this.lataaKirjat(this.getAttribute("data-url"));
    }
  }
}

customElements.define("kirja-elementti", KirjaElementti);
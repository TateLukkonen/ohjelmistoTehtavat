class OstoskoriElementti extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._ostoskori = new Map();
  }

  connectedCallback() {
    // Listen for events from ANY component
    window.addEventListener("add-to-cart", (e) => {
      this.lisaa(e.detail);
    });

    this.render();
  }

  lisaa(kirja) {
    const id = kirja.kirjanumero;

    if (this._ostoskori.has(id)) {
      this._ostoskori.get(id).maara++;
    } else {
      this._ostoskori.set(id, { ...kirja, maara: 1 });
    }

    this.render();
  }

  poista(id) {
    if (!this._ostoskori.has(id)) return;

    const item = this._ostoskori.get(id);
    item.maara--;

    if (item.maara <= 0) {
      this._ostoskori.delete(id);
    }

    this.render();
  }

  tyhjenna() {
    this._ostoskori.clear();
    this.render();
  }

  laskeSumma() {
    let sum = 0;
    this._ostoskori.forEach((item) => {
      sum += item.hinta * item.maara;
    });
    return sum;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="cart">
        <h2>Ostoskori</h2>

        ${[...this._ostoskori.values()]
          .map(
            (i) => `
              <div>
                ${i.nimi} x ${i.maara}
                <button data-id="${i.kirjanumero}">-</button>
              </div>
            `,
          )
          .join("")}

        <p><b>Yhteensä: ${this.laskeSumma()} €</b></p>
        <button id="clear">Tyhjennä kori</button>
      </div>
    `;

    this.shadowRoot.querySelectorAll("button[data-id]").forEach((btn) => {
      btn.onclick = () => this.poista(Number(btn.dataset.id));
    });

    this.shadowRoot.querySelector("#clear").onclick = () => {
      this.tyhjenna();
    };
  }
}

customElements.define("ostoskori-elementti", OstoskoriElementti);
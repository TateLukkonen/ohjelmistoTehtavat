class kirjaElementti extends HTMLElement {
  static get observedAttributes() {
    return ["data-url"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._Kirjat = [];
    this._ostoskori = new Map();
  }

  //  ATTRIBUUTIT
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data-url" && oldValue !== newValue) {
      this.lataaKirjat(newValue);
    }
  }

  // GETTERIT / SETTERIT
  get Kirjat() {
    return this._Kirjat;
  }

  set Kirjat(arvo) {
    this._Kirjat = arvo;
    this.render();
  }

  get ostoskori() {
    return this._ostoskori;
  }

  //  DATA
  async lataaKirjat(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      this.Kirjat = data;
    } catch (err) {
      console.error("Kirjojen lataus epäonnistui:", err);
    }
  }

  // OSTOSKORI
  lisaaKoriin(id) {
    const kirja = this._Kirjat.find((t) => t.kirjanumero === id);
    if (!kirja) return;

    if (this._ostoskori.has(id)) {
      this._ostoskori.get(id).maara++;
    } else {
      this._ostoskori.set(id, { ...kirja, maara: 1 });
    }
    this.render();
  }

  poistaKorista(id) {
    if (!this._ostoskori.has(id)) return;

    const item = this._ostoskori.get(id);
    item.maara--;

    if (item.maara <= 0) {
      this._ostoskori.delete(id);
    }

    this.render();
  }

  tyhjennaKori() {
    this._ostoskori.clear();
    this.render();
  }

  //  YHTEENVETO
  laskeSumma() {
    let sum = 0;
    this._ostoskori.forEach((item) => {
      sum += item.hinta * item.maara;
    });
    return sum;
  }

  //  RENDER
  render() {
    this.shadowRoot.innerHTML = `
      <h2>Kirjat</h2>
      <div class="books">
        ${this._Kirjat
          .map(
            (t) => `
          <div class="book">
            <h4>${t.nimi}</h4>
            <p>Painovuosi: ${t.painovuosi}</p>
            <p>Hinta: ${t.hinta} €</p>
            <p>Julkaisija: ${t.julkaisija}</p>
            <button data-id="${t.kirjanumero}">Lisää koriin</button>
          </div>
        `,
          )
          .join("")}
      </div>
      
      <style>
          .books {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 30px;
          border: solid, 3px, black;
          padding-bottom: 20px;
          }
      </style>

      <div>
        <h2>Ostoskori</h2>
        ${[...this._ostoskori.values()]
          .map(
            (i) => `
          <div>
            ${i.nimi} x ${i.maara}
            <button data-remove="${i.kirjanumero}">-</button>
          </div>
        `,
          )
          .join("")}

        <p><b>Yhteensä: ${this.laskeSumma()} €</b></p>
        <button>Tyhjennä kori</button>
      </div>
    `;

    this.shadowRoot.querySelectorAll("button[data-id]").forEach((btn) => {
      btn.onclick = () => this.lisaaKoriin(Number(btn.dataset.id));
    });

    this.shadowRoot.querySelectorAll("button[data-remove]").forEach((btn) => {
      btn.onclick = () => this.poistaKorista(Number(btn.dataset.remove));
    });

    this.shadowRoot.querySelector("#clear").onclick = () => this.tyhjennaKori();
  }

  connectedCallback() {
    if (this.hasAttribute("data-url")) {
      this.lataaKirjat(this.getAttribute("data-url"));
    }
  }
}

customElements.define("kirja-elementti", kirjaElementti);

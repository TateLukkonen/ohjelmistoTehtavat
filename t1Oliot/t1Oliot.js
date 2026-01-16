const oppilas = {
  nimi: "Tate",
  ikä: 17,
  kurssi: "ohjelmointi",
};
console.log("1)", oppilas.nimi, oppilas.ikä, oppilas.kurssi);

class Auto {
  constructor(merkki, vuosi, malli) {
    this.merkki = merkki;
    this.vuosi = vuosi;
    this.malli = malli;
  }
  tiedot() {
    console.log(
      `2) merkki: ${this.merkki}, vuosi: ${this.vuosi}, malli: ${this.malli}`
    );
  }
}
const car = new Auto("Bmw", 2000, "idk");
const car2 = new Auto("Toyota", 2010, "idk");
car.tiedot();
car2.tiedot();

const kirjat = [
  {
    nimi: "Sinuhe egyptiläinen",
    kirjailija: "Mika Waltari",
    vuosi: 1945,
  },
  {
    nimi: "Seitsemän veljestä",
    kirjailija: "Aleksis Kivi",
    vuosi: 1870,
  },
  {
    nimi: "Pride and Prejudice",
    kirjailija: "Jane Austen",
    vuosi: 1813,
  },
];
kirjat.forEach((kirja) => {
  console.log(`3) ${kirja.nimi}, ${kirja.kirjailija}, (${kirja.vuosi})`);
});

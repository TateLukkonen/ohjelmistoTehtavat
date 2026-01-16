//t1
const numerot = [10, 20, 30, 40];
const eka = numerot[0]

const listLength = numerot.length
const loput = numerot.slice(1, listLength)

console.log("1)", eka);    // 10
console.log("1)", loput);  // [20, 30, 40]

//2 
const opiskelija = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki",
};

const {nimi, ika, ...muutTiedot} = opiskelija;

console.log("2)", nimi)
console.log("2)", ika)
console.log("2)", muutTiedot)

//3
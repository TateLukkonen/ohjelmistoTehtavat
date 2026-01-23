//t1
const numerot = [10, 20, 30, 40];
const eka = numerot[0];

const listLength = numerot.length;
const loput = numerot.slice(1, listLength);

console.log("1)", eka); // 10
console.log("1)", loput); // [20, 30, 40]

//2
const opiskelija = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki",
};

const { nimi, ika, ...muutTiedot } = opiskelija;

console.log("2)", nimi);
console.log("2)", ika);
console.log("2)", muutTiedot);

//3
const backend = ["Node.js", "SQL"];
const frontend = ["HTML", "CSS", "JavaScript"];

const fullstack = [...backend, ...frontend];
fullstack.push("git");

console.log(`3) ${fullstack}`);

//4
const perusTiedot = {
  nimi: "Anna",
  ika: 19,
};
const lisatiedot = {
  kaupunki: "Espoo",
  harrastus: "Ohjelmointi",
};

const kayttaja = { ...perusTiedot, ...lisatiedot };
kayttaja.aktiivinen = true;

console.log(`4) `, kayttaja);
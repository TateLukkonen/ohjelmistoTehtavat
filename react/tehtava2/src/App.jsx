import * as React from "react"

function OpiskelijaTiedot() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <p>Nimi: {opiskelija.nimi}</p>
      <p>Ikä: {opiskelija.ika}</p>
      <p>Kurssi: {opiskelija.kurssi}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <OpiskelijaTiedot/>
    </div>
  )
}

export default App
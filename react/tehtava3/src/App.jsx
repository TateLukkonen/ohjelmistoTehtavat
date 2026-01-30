import * as React from "react";
import OpiskelijaTiedot from "./OpiskelijaTiedot";

function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;
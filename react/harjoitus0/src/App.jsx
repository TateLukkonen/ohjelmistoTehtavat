import * as React from "react"

function App() {
  console.log("Onpa React jännää");
  const luku1 = 2;
  const luku2 = 4;
  const summa = luku1 + luku2;
  const teksti = `${summa} = ${luku1} + ${luku2}`;
  return (
    <div>
      <h1>Hello world!</h1>
      <p>Summa on: {summa}</p>
      <p>
        Huomaatko muuttujien käytössä jotain erilaista verrattuna tavalliseen
        JavaScriptiin? {teksti}
      </p>
    </div>
  );
}

export default App
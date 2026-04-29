import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //alkuarvo on 0

  const laskuri = () => {
    setCount(count + 1); //setCount-funktiolla päivitetään nykyistä arvoa count
  };

  return (
    <div>
      <p>Nykyinen arvo: {count}</p>
      <button onClick={laskuri}>Kasvata Lukemaa</button>{" "}
      {/*Tapahtumankäsittelijä */}
    </div>
  );
}
export default App;

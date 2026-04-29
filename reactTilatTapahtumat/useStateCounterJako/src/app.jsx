import { useState } from "react";
import Lisaa from "./lisaa.jsx";
import Vahenna from "./vahenna.jsx";
import Nollaa from "./nollaa.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Nykyinen arvo: {count}</p>

      <Lisaa setCount={setCount} />
      <Vahenna setCount={setCount} />
      <Nollaa setCount={setCount} />
    </div>
  );
}

export default App;

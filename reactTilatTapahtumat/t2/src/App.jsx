import { useState } from "react";
import linkit from "./linkkilista";

function App() {
  return (
    <ul>
      {linkit.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.nimi}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;

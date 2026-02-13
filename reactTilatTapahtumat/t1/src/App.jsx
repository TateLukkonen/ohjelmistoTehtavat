import * as React from "react";
import lista from "./infolista";

function App() {
  return (
    <ul>
      {lista.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
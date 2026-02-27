import { useState } from 'react'
import Kayttajakortti from "./Kayttajakortti";

function App() {
  return (
    <Kayttajakortti
      nimi="Ville"
      lista={["React", "JavaScript", "CSS"]}
    />
  );
}

export default App
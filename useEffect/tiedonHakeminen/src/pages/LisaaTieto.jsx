import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LisaaTieto() {
  const [nimi, setNimi] = useState("");
  const [hinta, setHinta] = useState("");
  const [kategoria, setKategoria] = useState("");

  const navigate = useNavigate();

  function lisaaTuote(e) {
    e.preventDefault();

    const uusiTuote = {
      nimi,
      hinta: Number(hinta),
      kategoria,
    };

    fetch("http://localhost:3001/tuotteet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uusiTuote),
    }).then(() => navigate("/"));
  }

  return (
    <div>
      <h1>Lisää uusi tuote</h1>

      <form onSubmit={lisaaTuote}>
        <input
          value={nimi}
          onChange={(e) => setNimi(e.target.value)}
          placeholder="Nimi"
          required
        />

        <input
          value={hinta}
          onChange={(e) => setHinta(e.target.value)}
          placeholder="Hinta"
          required
        />

        <input
          value={kategoria}
          onChange={(e) => setKategoria(e.target.value)}
          placeholder="Kategoria"
          required
        />

        <button>Lisää</button>
      </form>
    </div>
  );
}

export default LisaaTieto;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuokkaaTieto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nimi, setNimi] = useState("");
  const [hinta, setHinta] = useState("");
  const [kategoria, setKategoria] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/tuotteet/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNimi(data.nimi);
        setHinta(data.hinta);
        setKategoria(data.kategoria);
      });
  }, [id]);

  function paivitaTuote(e) {
    e.preventDefault();

    const paivitettyTuote = {
      nimi,
      hinta: Number(hinta),
      kategoria,
    };

    fetch(`http://localhost:3001/tuotteet/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paivitettyTuote),
    }).then(() => navigate("/"));
  }

  return (
    <div>
      <h1>Muokkaa tuotetta</h1>

      <form onSubmit={paivitaTuote}>
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

        <button>Tallenna</button>
      </form>
    </div>
  );
}

export default MuokkaaTieto;

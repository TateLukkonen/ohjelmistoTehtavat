import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function YksiTieto() {
  const { id } = useParams();
  const [tuote, setTuote] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/tuotteet/${id}`)
      .then((res) => res.json())
      .then((data) => setTuote(data));
  }, [id]);

  if (!tuote) {
    return <p>Ladataan...</p>;
  }

  return (
    <div>
      <h1>Yksittäinen tuote</h1>
      <p>ID: {tuote.id}</p>
      <p>Nimi: {tuote.nimi}</p>
      <p>Hinta: {tuote.hinta} €</p>
      <p>Kategoria: {tuote.kategoria}</p>
    </div>
  );
}

export default YksiTieto;

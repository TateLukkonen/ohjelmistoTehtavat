import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function KaikkiTiedot() {
  const [tuotteet, setTuotteet] = useState([]);

  useEffect(() => {
    haeTuotteet();
  }, []);

  function haeTuotteet() {
    fetch("http://localhost:3001/tuotteet")
      .then((res) => res.json())
      .then((data) => setTuotteet(data));
  }

  function poistaTuote(id) {
    fetch(`http://localhost:3001/tuotteet/${id}`, {
      method: "DELETE",
    }).then(() => haeTuotteet());
  }

  return (
    <div>
      <h1>Kaikki tuotteet</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nimi</th>
            <th>Hinta</th>
            <th>Kategoria</th>
            <th>Toiminnot</th>
          </tr>
        </thead>

        <tbody>
          {tuotteet.map((tuote) => (
            <tr key={tuote.id}>
              <td>{tuote.id}</td>
              <td>{tuote.nimi}</td>
              <td>{tuote.hinta} €</td>
              <td>{tuote.kategoria}</td>
              <td>
                <Link to={`/tuote/${tuote.id}`}>Näytä</Link>{" "}
                <Link to={`/muokkaa/${tuote.id}`}>Muokkaa</Link>{" "}
                <button onClick={() => poistaTuote(tuote.id)}>Poista</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KaikkiTiedot;

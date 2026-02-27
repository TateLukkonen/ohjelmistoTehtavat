import Tervehdys from "../../../react/tehtava1/src/tervehdys";
import App from "../../t1/src/App";

function kayttajakortti({ nimi, lista }) {
  return (
    <div>
      <Tervehdys nimi={nimi} />
      <App lista={lista} />
    </div>
  );
}

export default kayttajakortti;
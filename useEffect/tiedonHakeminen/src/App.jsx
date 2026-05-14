import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import KaikkiTiedot from "./pages/KaikkiTiedot";
import LisaaTieto from "./pages/LisaaTieto";
import MuokkaaTieto from "./pages/MuokkaaTieto";
import YksiTieto from "./pages/YksiTieto";



function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Kaikki tiedot</Link>
        <Link to="/lisaa">Lisää tieto</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<KaikkiTiedot />} />
          <Route path="/tuote/:id" element={<YksiTieto />} />
          <Route path="/lisaa" element={<LisaaTieto />} />
          <Route path="/muokkaa/:id" element={<MuokkaaTieto />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

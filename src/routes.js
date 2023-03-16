import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Rodape from './components/Rodape';
import Home from './pages/Home'
import Sobremim from './pages/Sobremim'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<Sobremim />} />
        <Route path="*" element={<h1 style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Tá procurando o que curioso?</h1>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App;

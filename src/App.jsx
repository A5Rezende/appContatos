import Contato from "./pages/Contato"
import Lista from "./pages/Lista"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

export default function App() {
  
  // Criar a estrutura de rotas de navegação
  return (
    <Router>
      <div className="container mt-3">
        <nav className="text-center">
          <Link className="btn btn-outline-primary btn-sm m-1" to="/lista">Lista de Contatos</Link>
          <Link className="btn btn-outline-primary btn-sm m-1" to="/contato">Adicionar Contato</Link>
        </nav>

        <Routes>
          <Route path="/contato" element={<Contato />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </div>
    </Router>
  )
}

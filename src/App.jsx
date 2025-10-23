import Contato from "./components/Contato"
import Lista from "./components/Lista";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={<Lista />} />
          <Route path='/novo' element={<Contato />} />
          <Route path='/editar/:id' element={<Contato />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
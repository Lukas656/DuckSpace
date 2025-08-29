import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Loja from "./pages/Loja"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Loja />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

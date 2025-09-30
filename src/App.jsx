import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Loja from "./pages/Loja";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/duckspace/:slug" element={<Loja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Pagamento } from "./pages/Página de Pagamento/Pagamento";
import { NotaFiscal } from "./pages/Página de Pagamento/NotaFiscal";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagamento />} />
        <Route path="/NotaFiscal" element={<NotaFiscal />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}


import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import CardPage from "./pages/CardPage";

function App() {
  return (
    // <p>APP</p>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

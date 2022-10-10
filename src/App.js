import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImgProvider from "./context/ImgProvider";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";
import SearchPkm from "./views/SearchPkm";
import DetailsPkm from "./Components/DetailsPkm";

export default function App() {
  return (
    <ImgProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<SearchPkm />} />
          <Route path="/pokemones/:name" element={<DetailsPkm />} />
        </Routes>
      </BrowserRouter>
    </ImgProvider>
  );
}

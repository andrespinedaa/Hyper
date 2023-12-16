import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Header from "./components/header/Header";
import "./App.css";
import Panels from "./pages/panels/Panels";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panels" element={<Panels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

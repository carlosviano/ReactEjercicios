import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import CharacterDetail from "./Views/CharacterDetail";
import Home from "./Views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<CharacterDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

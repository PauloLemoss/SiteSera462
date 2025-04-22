import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Equipe from "./Equipe";
import Contato from "./Contato";
import Parceiros from "./Parceiros";

const AppRouter = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/parceiros" element={<Parceiros />} />
    </Route>
  </Routes>
);

export default AppRouter;
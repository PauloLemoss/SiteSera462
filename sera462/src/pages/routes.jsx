import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Equipe from "./Equipe";
import Contato from "./Contato";
import Parceiros from "./Parceiros";
import QuemSomos from "./QuemSomos";
import AreadeAcesso from "./AreaDeAcesso";
import CadastroAluno from "./CadastroAluno";
import CadastroTurma from "./CadastroTurma";
import CadastroProfessor from "./CadastroProfessor";

const AppRouter = () => (
  <Routes>
    {/* Todas as rotas abaixo compartilham o Layout (com o menu) */}
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="/quemsomos" element={<QuemSomos />} />
      <Route path="/areadeacesso" element={<AreadeAcesso />} />
      
      {/* Cadastro de Aluno */}
      <Route
        path="/cadastroaluno"
        element={
          <CadastroAluno
            instituicoes={[{ nome: "Instituição A" }, { nome: "Instituição B" }]}
            turmas={[{ nome: "Turma 1" }, { nome: "Turma 2" }]}
          />
        }
      />

      {/* Cadastro de Turma */}
      <Route
        path="/cadastroturma"
        element={
          <CadastroTurma
            instituicoes={[{ nome: "Instituição A" }, { nome: "Instituição B" }]}
          />
        }
      />

      {/* Cadastro de Professor (agora dentro do Layout) */}
      <Route
        path="/cadastroprofessor"
        element={
          <CadastroProfessor
            instituicoes={[{ nome: "Instituição A" }, { nome: "Instituição B" }]}
          />
        }
      />
    </Route>
  </Routes>
);

export default AppRouter;
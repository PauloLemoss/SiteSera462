import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Equipe from "./Equipe";
import Contato from "./Contato";
import Parceiros from "./Parceiros";
import QuemSomos from "./QuemSomos";
import AreadeAcesso from "./AreaDeAcesso";
import CadastroAluno from "./CadastroAluno";
import CadastroProfessor from "./CadastroProfessor";
import Tenant from "./Tenant";
import User from "./User";
import Escola from "./Escola";
import Turma from "./Turma";

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

      {/* Cadastro de Professor */}
      <Route
        path="/cadastroprofessor"
        element={
          <CadastroProfessor
            instituicoes={[{ nome: "Instituição A" }, { nome: "Instituição B" }]}
          />
        }
      />

      {/* Cadastro de Escola */}
      <Route path="/escola" element={<Escola />} />

      {/* Cadastro de Turma */}
      <Route path="/turma" element={<Turma />} />

      {/* Cadastro de Tenant (Instituição) */}
      <Route 
        path="/tenant" 
        element={<Tenant />} 
      />

      {/* Cadastro de Usuário */}
      <Route 
        path="/user" 
        element={<User />} 
      />
    </Route>
  </Routes>
);

export default AppRouter;
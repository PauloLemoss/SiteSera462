import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

function CadastroAluno({ instituicoes = [], turmas = [] }) {
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    nome: "",
    matricula: "",
    nascimento: "",
    sexo: "",
    turma: "",
    instituicao: "",
  });

  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((prev) => ({ ...prev, [name]: value }));

    setErros((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novosErros = {};
    Object.keys(valores).forEach((campo) => {
      novosErros[campo] = valores[campo].trim() === "";
    });

    setErros(novosErros);

    const formularioValido = Object.values(novosErros).every((val) => val === false);

    if (formularioValido) {
      alert("Aluno cadastrado com sucesso!");
      setValores({
        nome: "",
        matricula: "",
        nascimento: "",
        sexo: "",
        turma: "",
        instituicao: "",
      });
      setErros({});
    }
  };

  const handleVoltar = () => {
    navigate("/areadeacesso");
  };

  return (
    <div className="container-formulario">
      <form className="preencher-informacoes" onSubmit={handleSubmit}>
        <h2 className="form-title">Cadastrar Aluno</h2>

        <div className="formulario-campos">
          {/* Matrícula */}
          <div className="campo-simples">
            <input
              name="matricula"
              type="text"
              className={`input-text ${erros.matricula ? "borda-vermelha" : valores.matricula ? "borda-verde" : ""}`}
              placeholder="Matrícula *"
              value={valores.matricula}
              onChange={handleChange}
            />
            {erros.matricula && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </div>

          {/* Nome */}
          <div className="campo-simples">
            <input
              name="nome"
              type="text"
              className={`input-text ${erros.nome ? "borda-vermelha" : valores.nome ? "borda-verde" : ""}`}
              placeholder="Nome *"
              value={valores.nome}
              onChange={handleChange}
            />
            {erros.nome && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </div>

          {/* Data de Nascimento */}
          <div className="campo-simples">
            <input
              name="nascimento"
              type="date"
              className={`input-text ${erros.nascimento ? "borda-vermelha" : valores.nascimento ? "borda-verde" : ""}`}
              value={valores.nascimento}
              onChange={handleChange}
            />
            {erros.nascimento && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </div>

          {/* Sexo + Turma */}
          <div className="linha-dois-campos">
            <div>
              <select
                name="sexo"
                className={`input-text ${erros.sexo ? "borda-vermelha" : valores.sexo ? "borda-verde" : ""}`}
                value={valores.sexo}
                onChange={handleChange}
              >
                <option value="">Sexo *</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
              {erros.sexo && <p className="paragrafo-mostrar">campo obrigatório*</p>}
            </div>

            <div>
              <select
                name="turma"
                className={`input-text ${erros.turma ? "borda-vermelha" : valores.turma ? "borda-verde" : ""}`}
                value={valores.turma}
                onChange={handleChange}
              >
                <option value="">Turma *</option>
                {turmas.map((turma, idx) => (
                  <option key={idx} value={turma.nome}>
                    {turma.nome}
                  </option>
                ))}
              </select>
              {erros.turma && <p className="paragrafo-mostrar">campo obrigatório*</p>}
            </div>
          </div>

          {/* Instituição */}
          <div className="campo-simples">
            <select
              name="instituicao"
              className={`input-text ${erros.instituicao ? "borda-vermelha" : valores.instituicao ? "borda-verde" : ""}`}
              value={valores.instituicao}
              onChange={handleChange}
            >
              <option value="">Instituição *</option>
              {instituicoes.map((inst, idx) => (
                <option key={idx} value={inst.nome}>
                  {inst.nome}
                </option>
              ))}
            </select>
            {erros.instituicao && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </div>
        </div>

        <p className="paragrafo-campo">* campos obrigatórios</p>

        <div className="botoes-navegacao">
          <button className="button" type="submit">
            Cadastrar
          </button>
          <button type="button" className="botao-voltar" onClick={handleVoltar}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroAluno;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./areadeacesso.css"; // Reutilizando o mesmo CSS

function CadastroProfessor({ instituicoes = [] }) {
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
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
      alert("Professor cadastrado com sucesso!");
      setValores({
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
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
        <h2 className="form-title">Cadastrar Professor</h2>

        <div className="formulario-campos">
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

          {/* CPF */}
          <div className="campo-simples">
            <input
              name="cpf"
              type="text"
              className={`input-text ${erros.cpf ? "borda-vermelha" : valores.cpf ? "borda-verde" : ""}`}
              placeholder="CPF *"
              value={valores.cpf}
              onChange={handleChange}
            />
            {erros.cpf && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </div>

          {/* Email */}
          <div className="campo-simples">
            <input
              name="email"
              type="email"
              className={`input-text ${erros.email ? "borda-vermelha" : valores.email ? "borda-verde" : ""}`}
              placeholder="Email *"
              value={valores.email}
              onChange={handleChange}
            />
            {erros.email && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </div>

          {/* Telefone */}
          <div className="campo-simples">
            <input
              name="telefone"
              type="tel"
              className={`input-text ${erros.telefone ? "borda-vermelha" : valores.telefone ? "borda-verde" : ""}`}
              placeholder="Telefone *"
              value={valores.telefone}
              onChange={handleChange}
            />
            {erros.telefone && <p className="paragrafo-mostrar">campo obrigatório*</p>}
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

export default CadastroProfessor;
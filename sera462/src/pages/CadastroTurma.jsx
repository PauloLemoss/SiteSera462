import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./areadeacesso.css"; // Reutilizando o mesmo CSS

function CadastroTurma({ instituicoes = [] }) {
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    nome: "",
    horario: "",
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
      alert("Turma cadastrada com sucesso!");
      setValores({
        nome: "",
        horario: "",
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
        <h2 className="form-title">Cadastrar Turma</h2>

        <div className="formulario-campos">
          {/* Nome da Turma */}
          <div className="campo-simples">
            <input
              name="nome"
              type="text"
              className={`input-text ${erros.nome ? "borda-vermelha" : valores.nome ? "borda-verde" : ""}`}
              placeholder="Nome da Turma *"
              value={valores.nome}
              onChange={handleChange}
            />
            {erros.nome && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </div>

          {/* Horário */}
          <div className="campo-simples">
            <input
              name="horario"
              type="time"
              className={`input-text ${erros.horario ? "borda-vermelha" : valores.horario ? "borda-verde" : ""}`}
              placeholder="Horário *"
              value={valores.horario}
              onChange={handleChange}
            />
            {erros.horario && <p className="paragrafo-mostrar">campo obrigatório*</p>}
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

export default CadastroTurma;
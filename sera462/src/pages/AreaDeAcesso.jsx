import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

function AreaDeAcesso() {
    const navigate = useNavigate();

    const [valores, setValores] = useState({
        nome: '',
        telefone: '',
        cnpj: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
    });

    const [erros, setErros] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        let novoValor = value;

        if (['telefone', 'cnpj', 'cep', 'numero'].includes(name)) {
            novoValor = value.replace(/\D/g, '');
        }

        setValores((prev) => ({ ...prev, [name]: novoValor }));

        setErros((prev) => ({
            ...prev,
            [name]: novoValor.trim() === '',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const novosErros = {};
        Object.keys(valores).forEach((campo) => {
            novosErros[campo] = valores[campo].trim() === '';
        });

        setErros(novosErros);

        const formularioValido = Object.values(novosErros).every((campo) => campo === false);

        if (formularioValido) {
            alert('Cadastro de instituição enviado com sucesso!');
            setValores({
                nome: '',
                telefone: '',
                cnpj: '',
                rua: '',
                numero: '',
                bairro: '',
                cidade: '',
                estado: '',
                cep: '',
            });
            setErros({});
        }
    };

    return (
        <div className="container-formulario">
            <form className="preencher-informacoes" onSubmit={handleSubmit}>
                <h2 className="form-title">Cadastrar Instituição</h2>
                <div className="formulario-campos">
                    <div className="campo-simples">
                        <input
                            name="nome"
                            className={`input-text ${erros.nome ? 'borda-vermelha' : valores.nome ? 'borda-verde' : ''}`}
                            type="text"
                            placeholder="Nome da instituição *"
                            value={valores.nome}
                            onChange={handleChange}
                        />
                        {erros.nome && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                    </div>

                    <div className="campo-simples">
                        <input
                            name="telefone"
                            className={`input-text ${erros.telefone ? 'borda-vermelha' : valores.telefone ? 'borda-verde' : ''}`}
                            type="text"
                            placeholder="Telefone *"
                            value={valores.telefone}
                            onChange={handleChange}
                        />
                        {erros.telefone && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                    </div>

                    <div className="campo-simples">
                        <input
                            name="cnpj"
                            className={`input-text ${erros.cnpj ? 'borda-vermelha' : valores.cnpj ? 'borda-verde' : ''}`}
                            type="text"
                            placeholder="CNPJ *"
                            value={valores.cnpj}
                            onChange={handleChange}
                        />
                        {erros.cnpj && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                    </div>

                    <div className="linha-dois-campos">
                        <div>
                            <input
                                name="rua"
                                className={`input-text ${erros.rua ? 'borda-vermelha' : valores.rua ? 'borda-verde' : ''}`}
                                type="text"
                                placeholder="Rua *"
                                value={valores.rua}
                                onChange={handleChange}
                            />
                            {erros.rua && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                        </div>
                        <div>
                            <input
                                name="numero"
                                className={`input-text ${erros.numero ? 'borda-vermelha' : valores.numero ? 'borda-verde' : ''}`}
                                type="text"
                                placeholder="Número *"
                                value={valores.numero}
                                onChange={handleChange}
                            />
                            {erros.numero && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                        </div>
                    </div>

                    <div className="campo-simples">
                        <input
                            name="bairro"
                            className={`input-text ${erros.bairro ? 'borda-vermelha' : valores.bairro ? 'borda-verde' : ''}`}
                            type="text"
                            placeholder="Bairro *"
                            value={valores.bairro}
                            onChange={handleChange}
                        />
                        {erros.bairro && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                    </div>

                    <div className="linha-tres-campos">
                        <div>
                            <input
                                name="cidade"
                                className={`input-text ${erros.cidade ? 'borda-vermelha' : valores.cidade ? 'borda-verde' : ''}`}
                                type="text"
                                placeholder="Cidade *"
                                value={valores.cidade}
                                onChange={handleChange}
                            />
                            {erros.cidade && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                        </div>
                        <div className="campo-estado">
                            <input
                                name="estado"
                                className={`input-text ${erros.estado ? 'borda-vermelha' : valores.estado ? 'borda-verde' : ''}`}
                                type="text"
                                placeholder="Estado *"
                                value={valores.estado}
                                onChange={handleChange}
                            />
                            {erros.estado && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                        </div>
                        <div>
                            <input
                                name="cep"
                                className={`input-text ${erros.cep ? 'borda-vermelha' : valores.cep ? 'borda-verde' : ''}`}
                                type="text"
                                placeholder="CEP *"
                                value={valores.cep}
                                onChange={handleChange}
                            />
                            {erros.cep && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                        </div>
                    </div>
                </div>

                <p className="paragrafo-campo">* campos obrigatórios</p>
                <button className="button" type="submit">Cadastrar</button>
            </form>

            <div className="botoes-navegacao">
                <button
                    className="button botao-navegacao"
                    type="button"
                    onClick={() => navigate('/cadastroaluno')}
                >
                    Ir para Cadastro de Aluno
                </button>
                <button
                    type="button"
                    className="button botao-navegacao"
                    onClick={() => navigate("/cadastroturma")}
                >
                    Ir para Cadastro de Turma
                </button>
                <button
                    type="button"
                    className="button botao-navegacao"
                    onClick={() => navigate("/cadastroprofessor")}
                >
                    Ir para Cadastro de Professor
                </button>
            </div>
        </div>
    );
}

export default AreaDeAcesso;
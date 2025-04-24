import React, { useState } from 'react';
import './contato.css';

function Contato() {
    const [valores, setValores] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
    });

    const [erros, setErros] = useState({
        nome: false,
        email: false,
        telefone: false,
        mensagem: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

    let novoValor = value;

   
    if (name === 'telefone') {
       
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

        const novosErros = {
            nome: valores.nome.trim() === '',
            email: valores.email.trim() === '',
            telefone: valores.telefone.trim() === '',
            mensagem: false,
        };

        setErros(novosErros);

        const formularioValido = Object.values(novosErros).every((campo) => campo === false);

        if (formularioValido) {
            alert('Formulário enviado com sucesso!');
            setValores({ nome: '', email: '', telefone: '', mensagem: '' });
            setErros({ nome: false, email: false, telefone: false, mensagem: false });
        }
    };

    return (
        <div className="container-formulario">
            <form className="preencher-informacoes" onSubmit={handleSubmit}>
                <ul className="list-informacoes">
                    <li className="li">
                        <input
                            name="nome"
                            className={`input-text ${erros.nome ? 'borda-vermelha' : valores.nome ? 'borda-verde' : ''}`}
                            type="text"
                            placeholder="Nome completo *"
                            value={valores.nome}
                            onChange={handleChange}
                        />
                        {erros.nome && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                    </li>
                    <li className="li">
                        <input
                            name="email"
                            className={`input-text ${erros.email ? 'borda-vermelha' : valores.email ? 'borda-verde' : ''}`}
                            type="text"
                            placeholder="Email *"
                            value={valores.email}
                            onChange={handleChange}
                        />
                        {erros.email && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                    </li>
                    <li className="li">
                        <input
                            name="telefone"
                            className={`input-text ${erros.telefone ? 'borda-vermelha' : valores.telefone ? 'borda-verde' : ''}`}
                            type="text"
                            placeholder="Telefone *"
                            value={valores.telefone}
                            onChange={handleChange}
                        />
                        {erros.telefone && <p className="paragrafo-mostrar">campo obrigatório*</p>}
                    </li>
                    <li className="li">
                        <textarea
                            name="mensagem"
                            className={`input-text ${erros.mensagem ? 'borda-vermelha' : valores.mensagem ? 'borda-verde' : ''}`}
                            placeholder="Mensagem *"
                            value={valores.mensagem}
                            onChange={handleChange}
                        />
                        
                    </li>
                </ul>
                <p className="paragrafo-campo">* campos obrigatórios</p>
                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contato;
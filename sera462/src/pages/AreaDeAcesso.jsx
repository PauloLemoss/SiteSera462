import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BuildingOfficeIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let novoValor = value;

        if (['telefone', 'cnpj', 'cep', 'numero'].includes(name)) {
            novoValor = value.replace(/\D/g, '');
        }

        setValores((prev) => ({ ...prev, [name]: novoValor }));

        // Clear error when user starts typing
        if (erros[name]) {
            setErros((prev) => ({
                ...prev,
                [name]: false,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novosErros = {};
        Object.keys(valores).forEach((campo) => {
            novosErros[campo] = valores[campo].trim() === '';
        });

        setErros(novosErros);

        const formularioValido = Object.values(novosErros).every((campo) => campo === false);

        if (formularioValido) {
            setIsSubmitting(true);
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                setIsSubmitted(true);
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
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="card p-8 max-w-md mx-auto text-center">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Instituição Cadastrada!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Sua instituição foi cadastrada com sucesso no sistema.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="btn-primary"
                    >
                        Cadastrar Nova Instituição
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="gradient-hero py-20">
                <div className="container-custom">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BuildingOfficeIcon className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Área de Acesso
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Cadastre sua instituição e acesse nossa plataforma educacional
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="section">
                <div className="container-custom max-w-4xl">
                    <div className="card p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Cadastrar Instituição
                        </h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Basic Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nome" className="form-label">
                                        Nome da Instituição *
                                    </label>
                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        className={`form-input ${erros.nome ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                        placeholder="Nome da instituição"
                                        value={valores.nome}
                                        onChange={handleChange}
                                    />
                                    {erros.nome && <p className="form-error">Campo obrigatório</p>}
                                </div>

                                <div>
                                    <label htmlFor="telefone" className="form-label">
                                        Telefone *
                                    </label>
                                    <input
                                        id="telefone"
                                        name="telefone"
                                        type="tel"
                                        className={`form-input ${erros.telefone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                        placeholder="(11) 99999-9999"
                                        value={valores.telefone}
                                        onChange={handleChange}
                                    />
                                    {erros.telefone && <p className="form-error">Campo obrigatório</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="cnpj" className="form-label">
                                    CNPJ *
                                </label>
                                <input
                                    id="cnpj"
                                    name="cnpj"
                                    type="text"
                                    className={`form-input ${erros.cnpj ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                    placeholder="XX.XXX.XXX/XXXX-XX"
                                    value={valores.cnpj}
                                    onChange={handleChange}
                                />
                                {erros.cnpj && <p className="form-error">Campo obrigatório</p>}
                            </div>

                            {/* Address Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="rua" className="form-label">
                                        Rua *
                                    </label>
                                    <input
                                        id="rua"
                                        name="rua"
                                        type="text"
                                        className={`form-input ${erros.rua ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                        placeholder="Nome da rua"
                                        value={valores.rua}
                                        onChange={handleChange}
                                    />
                                    {erros.rua && <p className="form-error">Campo obrigatório</p>}
                                </div>

                                <div>
                                    <label htmlFor="numero" className="form-label">
                                        Número *
                                    </label>
                                    <input
                                        id="numero"
                                        name="numero"
                                        type="text"
                                        className={`form-input ${erros.numero ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                        placeholder="Número"
                                        value={valores.numero}
                                        onChange={handleChange}
                                    />
                                    {erros.numero && <p className="form-error">Campo obrigatório</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="bairro" className="form-label">
                                    Bairro *
                                </label>
                                <input
                                    id="bairro"
                                    name="bairro"
                                    type="text"
                                    className={`form-input ${erros.bairro ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                    placeholder="Nome do bairro"
                                    value={valores.bairro}
                                    onChange={handleChange}
                                />
                                {erros.bairro && <p className="form-error">Campo obrigatório</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label htmlFor="cidade" className="form-label">
                                        Cidade *
                                    </label>
                                    <input
                                        id="cidade"
                                        name="cidade"
                                        type="text"
                                        className={`form-input ${erros.cidade ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                        placeholder="Nome da cidade"
                                        value={valores.cidade}
                                        onChange={handleChange}
                                    />
                                    {erros.cidade && <p className="form-error">Campo obrigatório</p>}
                                </div>

                                <div>
                                    <label htmlFor="estado" className="form-label">
                                        Estado *
                                    </label>
                                    <select
                                        id="estado"
                                        name="estado"
                                        className={`form-input ${erros.estado ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                        value={valores.estado}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecione o estado</option>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                    </select>
                                    {erros.estado && <p className="form-error">Campo obrigatório</p>}
                                </div>

                                <div>
                                    <label htmlFor="cep" className="form-label">
                                        CEP *
                                    </label>
                                    <input
                                        id="cep"
                                        name="cep"
                                        type="text"
                                        className={`form-input ${erros.cep ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                                        placeholder="XXXXX-XXX"
                                        value={valores.cep}
                                        onChange={handleChange}
                                    />
                                    {erros.cep && <p className="form-error">Campo obrigatório</p>}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full py-3 text-lg"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="spinner w-5 h-5 mr-2"></div>
                                            Cadastrando...
                                        </div>
                                    ) : (
                                        'Cadastrar Instituição'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button
                            className="btn-outline flex items-center justify-center py-3"
                            onClick={() => navigate('/escola')}
                        >
                            Cadastro de Escola
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                        <button
                            className="btn-outline flex items-center justify-center py-3"
                            onClick={() => navigate('/turma')}
                        >
                            Cadastro de Turma
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                        <button
                            className="btn-outline flex items-center justify-center py-3"
                            onClick={() => navigate('/cadastroaluno')}
                        >
                            Cadastro de Aluno
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                        <button
                            className="btn-outline flex items-center justify-center py-3"
                            onClick={() => navigate('/cadastroprofessor')}
                        >
                            Cadastro de Professor
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AreaDeAcesso;
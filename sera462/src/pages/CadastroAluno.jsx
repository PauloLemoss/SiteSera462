import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  AcademicCapIcon, 
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

function CadastroAluno() {
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    nome: "",
    matricula: "",
    nascimento: "",
    sexo: "",
    turma_id: "",
    instituicao_id: "",
  });

  const [turmas, setTurmas] = useState([]);
  const [instituicoes, setInstituicoes] = useState([]);
  const [erros, setErros] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load turmas from API
  const loadTurmas = async () => {
    try {
      const response = await fetch("https://appcad.vps5695.panel.icontainer.run/int/v1/turmas/list");
      if (response.ok) {
        const data = await response.json();
        setTurmas(data);
      } else {
        console.error("Failed to load turmas");
      }
    } catch (error) {
      console.error("Error loading turmas:", error);
    }
  };

  // Load instituicoes from API
  const loadInstituicoes = async () => {
    try {
      const response = await fetch("https://appcad.vps5695.panel.icontainer.run/int/v1/instituicoes/list");
      if (response.ok) {
        const data = await response.json();
        setInstituicoes(data);
      } else {
        console.error("Failed to load instituicoes");
      }
    } catch (error) {
      console.error("Error loading instituicoes:", error);
    }
  };

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([loadTurmas(), loadInstituicoes()]);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((prev) => ({ ...prev, [name]: value }));

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
      novosErros[campo] = valores[campo].trim() === "";
    });

    setErros(novosErros);

    const formularioValido = Object.values(novosErros).every((val) => val === false);

    if (formularioValido) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitted(true);
        setValores({
          nome: "",
          matricula: "",
          nascimento: "",
          sexo: "",
          turma_id: "",
          instituicao_id: "",
        });
        setErros({});
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleVoltar = () => {
    navigate("/areadeacesso");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="card p-8 max-w-md mx-auto text-center">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Aluno Cadastrado!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            O aluno foi cadastrado com sucesso no sistema.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Cadastrar Novo Aluno
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
              <AcademicCapIcon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Cadastro de Aluno
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cadastre novos alunos no sistema educacional
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container-custom max-w-2xl">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Informações do Aluno
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Matrícula */}
              <div>
                <label htmlFor="matricula" className="form-label">
                  Matrícula *
                </label>
                <input
                  id="matricula"
                  name="matricula"
                  type="text"
                  className={`form-input ${erros.matricula ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="Número da matrícula"
                  value={valores.matricula}
                  onChange={handleChange}
                />
                {erros.matricula && <p className="form-error">Campo obrigatório</p>}
              </div>

              {/* Nome */}
              <div>
                <label htmlFor="nome" className="form-label">
                  Nome Completo *
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  className={`form-input ${erros.nome ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="Nome completo do aluno"
                  value={valores.nome}
                  onChange={handleChange}
                />
                {erros.nome && <p className="form-error">Campo obrigatório</p>}
              </div>

              {/* Data de Nascimento */}
              <div>
                <label htmlFor="nascimento" className="form-label">
                  Data de Nascimento *
                </label>
                <input
                  id="nascimento"
                  name="nascimento"
                  type="date"
                  className={`form-input ${erros.nascimento ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  value={valores.nascimento}
                  onChange={handleChange}
                />
                {erros.nascimento && <p className="form-error">Campo obrigatório</p>}
              </div>

              {/* Sexo e Turma */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sexo" className="form-label">
                    Sexo *
                  </label>
                  <select
                    id="sexo"
                    name="sexo"
                    className={`form-input ${erros.sexo ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    value={valores.sexo}
                    onChange={handleChange}
                  >
                    <option value="">Selecione o sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {erros.sexo && <p className="form-error">Campo obrigatório</p>}
                </div>

                <div>
                  <label htmlFor="turma_id" className="form-label">
                    Turma *
                  </label>
                  <select
                    id="turma_id"
                    name="turma_id"
                    disabled={isLoading}
                    className={`form-input ${erros.turma_id ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    value={valores.turma_id}
                    onChange={handleChange}
                  >
                    <option value="">
                      {isLoading ? "Carregando..." : "Selecione a turma"}
                    </option>
                    {turmas.map((turma) => (
                      <option key={turma.id} value={turma.id}>
                        {turma.name}
                      </option>
                    ))}
                  </select>
                  {erros.turma_id && <p className="form-error">Campo obrigatório</p>}
                </div>
              </div>

              {/* Instituição */}
              <div>
                <label htmlFor="instituicao_id" className="form-label">
                  Instituição *
                </label>
                <select
                  id="instituicao_id"
                  name="instituicao_id"
                  disabled={isLoading}
                  className={`form-input ${erros.instituicao_id ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  value={valores.instituicao_id}
                  onChange={handleChange}
                >
                  <option value="">
                    {isLoading ? "Carregando..." : "Selecione a instituição"}
                  </option>
                  {instituicoes.map((inst) => (
                    <option key={inst.id} value={inst.id}>
                      {inst.nome}
                    </option>
                  ))}
                </select>
                {erros.instituicao_id && <p className="form-error">Campo obrigatório</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="btn-primary w-full py-3 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="spinner w-5 h-5 mr-2"></div>
                      Cadastrando...
                    </div>
                  ) : (
                    'Cadastrar Aluno'
                  )}
                </button>
              </div>
            </form>

            {/* Back Button */}
            <div className="mt-6">
              <button
                type="button"
                className="btn-outline w-full flex items-center justify-center py-3"
                onClick={handleVoltar}
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Voltar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CadastroAluno;
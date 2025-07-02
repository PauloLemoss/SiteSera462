import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CadastroTurma() {
  const navigate = useNavigate();

  const [valores, setValores] = useState({
    nome: "",
    horario: "",
    instituicao_id: "",
  });

  const [instituicoes, setInstituicoes] = useState([]);
  const [erros, setErros] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load instituicoes from API
  const loadInstituicoes = async () => {
    try {
      const response = await fetch("https://appcad.vps5547.panel.icontainer.run/int/v1/instituicoes/list");
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
      await loadInstituicoes();
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
        
        alert("Turma cadastrada com sucesso!");
        setValores({
          nome: "",
          horario: "",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Cadastrar Turma
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Preencha os dados da turma
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome da Turma */}
            <div>
              <label htmlFor="nome" className="form-label">
                Nome da Turma *
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                className={`form-input ${erros.nome ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="Ex: Turma A - Matemática"
                value={valores.nome}
                onChange={handleChange}
              />
              {erros.nome && <p className="form-error">Campo obrigatório</p>}
            </div>

            {/* Horário */}
            <div>
              <label htmlFor="horario" className="form-label">
                Horário *
              </label>
              <select
                id="horario"
                name="horario"
                value={valores.horario}
                onChange={handleChange}
                className={`form-input ${erros.horario ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
              >
                <option value="" style={{ backgroundColor: '#ffffff', color: '#000000' }}>Selecione o horário</option>
                <option value="manhã" style={{ backgroundColor: '#ffffff', color: '#000000' }}>Manhã</option>
                <option value="tarde" style={{ backgroundColor: '#ffffff', color: '#000000' }}>Tarde</option>
                <option value="noite" style={{ backgroundColor: '#ffffff', color: '#000000' }}>Noite</option>
              </select>
              {erros.horario && <p className="form-error">Campo obrigatório</p>}
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
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
              >
                <option value="" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  {isLoading ? "Carregando..." : "Selecione a instituição"}
                </option>
                {instituicoes.map((inst) => (
                  <option key={inst.id} value={inst.id} style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                    {inst.name}
                  </option>
                ))}
              </select>
              {erros.instituicao_id && <p className="form-error">Campo obrigatório</p>}
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                * campos obrigatórios
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Cadastrando...
                    </span>
                  ) : (
                    "Cadastrar Turma"
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={handleVoltar}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Voltar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroTurma;
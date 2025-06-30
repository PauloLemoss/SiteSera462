import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Turma() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id_instituicao: "",
    nome: "",
    horario: "",
  });

  const [institutions, setInstitutions] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Load institutions on component mount
  useEffect(() => {
    loadInstitutions();
  }, []);

  const loadInstitutions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://appcad.vps5547.panel.icontainer.run/int/v1/instituicoes/list",
        {
          method: "GET",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setInstitutions(data);
      } else {
        setMessage({
          type: "error",
          text: "Erro ao carregar instituições. Tente novamente.",
        });
      }
    } catch (error) {
      console.error("Erro ao carregar instituições:", error);
      setMessage({
        type: "error",
        text: "Erro de conexão. Verifique sua internet.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Clear message when user makes changes
    if (message.text) {
      setMessage({ type: "", text: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.id_instituicao.trim()) {
      newErrors.id_instituicao = "Instituição é obrigatória";
    }

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome da turma é obrigatório";
    }

    if (!formData.horario) {
      newErrors.horario = "Horário é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const now = new Date().toISOString();
      const classData = {
        id_instituicao: formData.id_instituicao,
        nome: formData.nome,
        horario: formData.horario,
        enabled: true,
        created_at: now,
        updated_at: now,
      };

      const response = await fetch(
        "https://appcad.vps5547.panel.icontainer.run/int/v1/turmas",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-tenant-id": "3204fdce-560b-4f19-9bc8-875825662a4a",
          },
          body: JSON.stringify(classData),
        }
      );

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Turma cadastrada com sucesso!",
        });
        
        // Reset form
        setFormData({
          id_instituicao: "",
          nome: "",
          horario: "",
        });
        setErrors({});
        
        // Redirect after 2 seconds
        setTimeout(() => {
          navigate("/areadeacesso");
        }, 2000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setMessage({
          type: "error",
          text: errorData.message || "Erro ao cadastrar turma. Tente novamente.",
        });
      }
    } catch (error) {
      console.error("Erro ao cadastrar turma:", error);
      setMessage({
        type: "error",
        text: "Erro de conexão. Verifique sua internet.",
      });
    } finally {
      setIsSubmitting(false);
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

          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
                  : "bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Instituição */}
            <div>
              <label className="form-label">
                Instituição *
              </label>
              <select
                name="id_instituicao"
                value={formData.id_instituicao}
                onChange={handleChange}
                disabled={isLoading}
                className={`form-input ${errors.id_instituicao ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              >
                <option value="">
                  {isLoading ? "Carregando..." : "Selecione uma instituição"}
                </option>
                {institutions.map((institution) => (
                  <option 
                    key={institution.id} 
                    value={institution.id}
                    data-loaded="true"
                  >
                    {institution.name}
                  </option>
                ))}
              </select>
              {errors.id_instituicao && (
                <p className="form-error">
                  {errors.id_instituicao}
                </p>
              )}
            </div>

            {/* Nome da Turma */}
            <div>
              <label className="form-label">
                Nome da Turma *
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={`form-input ${errors.nome ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="Ex: Turma A - Matemática"
              />
              {errors.nome && (
                <p className="form-error">
                  {errors.nome}
                </p>
              )}
            </div>

            {/* Horário */}
            <div>
              <label className="form-label">
                Horário *
              </label>
              <select
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                className={`form-input ${errors.horario ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              >
                <option value="">Selecione o horário</option>
                <option value="manhã">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
              </select>
              {errors.horario && (
                <p className="form-error">
                  {errors.horario}
                </p>
              )}
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

export default Turma; 
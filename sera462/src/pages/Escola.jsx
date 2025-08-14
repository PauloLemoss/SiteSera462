import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Escola() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cnpj: "",
    email: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Format specific fields
    if (name === "cnpj") {
      newValue = formatCNPJ(value);
    } else if (name === "telefone") {
      newValue = formatPhone(value);
    } else if (name === "cep") {
      newValue = formatCEP(value);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Clear message when user makes changes
    if (message.text) {
      setMessage({ type: "", text: "" });
    }
  };

  const formatCNPJ = (value) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  };

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const formatCEP = (value) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{5})(\d{3})/, "$1-$2");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (formData.telefone.replace(/\D/g, "").length < 10) {
      newErrors.telefone = "Telefone inválido";
    }

    if (!formData.cnpj.trim()) {
      newErrors.cnpj = "CNPJ é obrigatório";
    } else if (formData.cnpj.replace(/\D/g, "").length !== 14) {
      newErrors.cnpj = "CNPJ inválido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.cep.trim()) {
      newErrors.cep = "CEP é obrigatório";
    } else if (formData.cep.replace(/\D/g, "").length !== 8) {
      newErrors.cep = "CEP inválido";
    }

    if (!formData.rua.trim()) {
      newErrors.rua = "Rua é obrigatória";
    }

    if (!formData.bairro.trim()) {
      newErrors.bairro = "Bairro é obrigatório";
    }

    if (!formData.cidade.trim()) {
      newErrors.cidade = "Cidade é obrigatória";
    }

    if (!formData.uf) {
      newErrors.uf = "UF é obrigatória";
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
      const institutionData = {
        nome: formData.nome,
        telefone: formData.telefone,
        cnpj: formData.cnpj.replace(/\D/g, ""),
        email: formData.email,
        cep: formData.cep,
        rua: formData.rua,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        enabled: true,
      };

      const response = await fetch(
        "https://appcad.vps5695.panel.icontainer.run/int/v1/instituicoes",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-tenant-id": "3204fdce-560b-4f19-9bc8-875825662a4a",
          },
          body: JSON.stringify(institutionData),
        }
      );

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Instituição cadastrada com sucesso!",
        });
        
        // Reset form
        setFormData({
          nome: "",
          telefone: "",
          cnpj: "",
          email: "",
          cep: "",
          rua: "",
          bairro: "",
          cidade: "",
          uf: "",
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
          text: errorData.message || "Erro ao cadastrar instituição. Tente novamente.",
        });
      }
    } catch (error) {
      console.error("Erro ao cadastrar instituição:", error);
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

  const estados = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Cadastrar Escola
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Preencha os dados da instituição educacional
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
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="form-label">
                  Nome da Instituição *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`form-input ${errors.nome ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="Nome da instituição"
                />
                {errors.nome && (
                  <p className="form-error">
                    {errors.nome}
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div>
                <label className="form-label">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={`form-input ${errors.telefone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
                {errors.telefone && (
                  <p className="form-error">
                    {errors.telefone}
                  </p>
                )}
              </div>
            </div>

            {/* CNPJ and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CNPJ */}
              <div>
                <label className="form-label">
                  CNPJ *
                </label>
                <input
                  type="text"
                  name="cnpj"
                  value={formData.cnpj}
                  onChange={handleChange}
                  className={`form-input ${errors.cnpj ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="XX.XXX.XXX/XXXX-XX"
                  maxLength={18}
                />
                {errors.cnpj && (
                  <p className="form-error">
                    {errors.cnpj}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="contato@escola.com"
                />
                {errors.email && (
                  <p className="form-error">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Address Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* CEP */}
              <div>
                <label className="form-label">
                  CEP *
                </label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  className={`form-input ${errors.cep ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="XXXXX-XXX"
                  maxLength={9}
                />
                {errors.cep && (
                  <p className="form-error">
                    {errors.cep}
                  </p>
                )}
              </div>

              {/* Cidade */}
              <div>
                <label className="form-label">
                  Cidade *
                </label>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className={`form-input ${errors.cidade ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="Nome da cidade"
                />
                {errors.cidade && (
                  <p className="form-error">
                    {errors.cidade}
                  </p>
                )}
              </div>

              {/* UF */}
              <div>
                <label className="form-label">
                  UF *
                </label>
                <select
                  name="uf"
                  value={formData.uf}
                  onChange={handleChange}
                  className={`form-input ${errors.uf ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                >
                  <option value="">Selecione o estado</option>
                  {estados.map((estado) => (
                    <option key={estado.value} value={estado.value}>
                      {estado.label}
                    </option>
                  ))}
                </select>
                {errors.uf && (
                  <p className="form-error">
                    {errors.uf}
                  </p>
                )}
              </div>
            </div>

            {/* Rua and Bairro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rua */}
              <div>
                <label className="form-label">
                  Rua *
                </label>
                <input
                  type="text"
                  name="rua"
                  value={formData.rua}
                  onChange={handleChange}
                  className={`form-input ${errors.rua ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="Nome da rua"
                />
                {errors.rua && (
                  <p className="form-error">
                    {errors.rua}
                  </p>
                )}
              </div>

              {/* Bairro */}
              <div>
                <label className="form-label">
                  Bairro *
                </label>
                <input
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  className={`form-input ${errors.bairro ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="Nome do bairro"
                />
                {errors.bairro && (
                  <p className="form-error">
                    {errors.bairro}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                * campos obrigatórios
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
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
                    "Cadastrar Escola"
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

export default Escola; 
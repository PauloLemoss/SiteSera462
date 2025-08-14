import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CadastroProfessor() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id_instituicao: "",
    name: "",
    email: "",
    sex: "",
    telephone: "",
    document: "",
  });

  const [institutions, setInstitutions] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const loadInstitutions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://appcad.vps5695.panel.icontainer.run/int/v1/instituicoes/list");
      if (response.ok) {
        const data = await response.json();
        setInstitutions(data);
      } else {
        console.error("Failed to load institutions");
      }
    } catch (error) {
      console.error("Error loading institutions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInstitutions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (message.text) {
      setMessage({ type: "", text: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.id_instituicao.trim()) newErrors.id_instituicao = "Instituição é obrigatória";
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";
    if (!formData.sex) newErrors.sex = "Sexo é obrigatório";
    if (!formData.telephone.trim()) newErrors.telephone = "Telefone é obrigatório";
    if (!formData.document.trim()) newErrors.document = "CPF é obrigatório";
    else if (!/^\d{11}$/.test(formData.document.replace(/\D/g, ""))) newErrors.document = "CPF inválido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const teacherData = {
        id_instituicao: formData.id_instituicao,
        id_usuario: "550e8400-e29b-41d4-a716-446655440001",
        nome: formData.name,        // corrigido
        email: formData.email,
        sexo: formData.sex,         // corrigido
        telefone: formData.telephone, // corrigido
        tipo: "PROFESSOR",          // corrigido
        documento: formData.document.replace(/\D/g, ""), // corrigido
        enabled: true,
      };

      const response = await fetch("https://appcad.vps5695.panel.icontainer.run/int/v1/professores", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-tenant-id": "3204fdce-560b-4f19-9bc8-875825662a4a",
        },
        body: JSON.stringify(teacherData),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Professor cadastrado com sucesso!" });
        setFormData({ id_instituicao: "", name: "", email: "", sex: "", telephone: "", document: "" });
        setErrors({});
        setTimeout(() => navigate("/areadeacesso"), 2000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setMessage({ type: "error", text: errorData.message || "Erro ao cadastrar professor. Tente novamente." });
      }
    } catch (error) {
      console.error("Erro ao cadastrar professor:", error);
      setMessage({ type: "error", text: "Erro de conexão. Verifique sua internet." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVoltar = () => navigate("/areadeacesso");

  const formatCPF = (value) => value.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  const formatPhone = (value) => value.replace(/\D/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Cadastrar Professor</h2>
            <p className="text-gray-600 dark:text-gray-400">Preencha os dados do professor</p>
          </div>

          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${message.type === "success" ? "bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400" : "bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Instituição */}
            <div>
              <label className="form-label">Instituição *</label>
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
                  <option key={institution.id} value={institution.id}>
                    {institution.nome}
                  </option>
                ))}
              </select>
              {errors.id_instituicao && <p className="form-error">{errors.id_instituicao}</p>}
            </div>

            {/* Nome */}
            <div>
              <label className="form-label">Nome Completo *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="Digite o nome completo"
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="Digite o email"
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            {/* Sexo */}
            <div>
              <label className="form-label">Sexo *</label>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className={`form-input ${errors.sex ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              >
                <option value="">Selecione o sexo</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
              {errors.sex && <p className="form-error">{errors.sex}</p>}
            </div>

            {/* Telefone */}
            <div>
              <label className="form-label">Telefone *</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={(e) => setFormData(prev => ({ ...prev, telephone: formatPhone(e.target.value) }))}
                className={`form-input ${errors.telephone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="(11) 99999-9999"
                maxLength={15}
              />
              {errors.telephone && <p className="form-error">{errors.telephone}</p>}
            </div>

            {/* CPF */}
            <div>
              <label className="form-label">CPF *</label>
              <input
                type="text"
                name="document"
                value={formData.document}
                onChange={(e) => setFormData(prev => ({ ...prev, document: formatCPF(e.target.value) }))}
                className={`form-input ${errors.document ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                placeholder="000.000.000-00"
                maxLength={14}
              />
              {errors.document && <p className="form-error">{errors.document}</p>}
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">* campos obrigatórios</p>
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
                  ) : "Cadastrar Professor"}
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

export default CadastroProfessor;

import React, { useState } from 'react';
import { 
  UserCircleIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const User = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    dataNascimento: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    cargo: '',
    departamento: '',
    senha: '',
    confirmarSenha: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome completo é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.cpf.trim()) {
      newErrors.cpf = 'CPF é obrigatório';
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formData.cpf)) {
      newErrors.cpf = 'CPF deve estar no formato XXX.XXX.XXX-XX';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }
    
    if (!formData.dataNascimento.trim()) {
      newErrors.dataNascimento = 'Data de nascimento é obrigatória';
    }
    
    if (!formData.endereco.trim()) {
      newErrors.endereco = 'Endereço é obrigatório';
    }
    
    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade é obrigatória';
    }
    
    if (!formData.estado.trim()) {
      newErrors.estado = 'Estado é obrigatório';
    }
    
    if (!formData.cep.trim()) {
      newErrors.cep = 'CEP é obrigatório';
    } else if (!/^\d{5}-\d{3}$/.test(formData.cep)) {
      newErrors.cep = 'CEP deve estar no formato XXXXX-XXX';
    }
    
    if (!formData.cargo.trim()) {
      newErrors.cargo = 'Cargo é obrigatório';
    }
    
    if (!formData.departamento.trim()) {
      newErrors.departamento = 'Departamento é obrigatório';
    }
    
    if (!formData.senha.trim()) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (formData.senha.length < 8) {
      newErrors.senha = 'Senha deve ter pelo menos 8 caracteres';
    }
    
    if (!formData.confirmarSenha.trim()) {
      newErrors.confirmarSenha = 'Confirmação de senha é obrigatória';
    } else if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'Senhas não coincidem';
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
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your API
      console.log('User form data:', formData);
      
      setIsSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        dataNascimento: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: '',
        cargo: '',
        departamento: '',
        senha: '',
        confirmarSenha: ''
      });
    } catch (error) {
      console.error('Error submitting user form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="card p-8 max-w-md mx-auto text-center">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Usuário Cadastrado!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            O usuário foi cadastrado com sucesso no sistema.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Cadastrar Novo Usuário
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
              <UserCircleIcon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Cadastro de Usuário
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cadastre novos usuários no sistema para gerenciar acessos e permissões 
              da sua instituição educacional.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Informações do Usuário
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="form-label">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={`form-input ${errors.nome ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Nome completo do usuário"
                  />
                  {errors.nome && (
                    <p className="form-error">{errors.nome}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="usuario@email.com"
                  />
                  {errors.email && (
                    <p className="form-error">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="cpf" className="form-label">
                    CPF *
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    className={`form-input ${errors.cpf ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="XXX.XXX.XXX-XX"
                  />
                  {errors.cpf && (
                    <p className="form-error">{errors.cpf}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="telefone" className="form-label">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className={`form-input ${errors.telefone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.telefone && (
                    <p className="form-error">{errors.telefone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="dataNascimento" className="form-label">
                    Data de Nascimento *
                  </label>
                  <input
                    type="date"
                    id="dataNascimento"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    className={`form-input ${errors.dataNascimento ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.dataNascimento && (
                    <p className="form-error">{errors.dataNascimento}</p>
                  )}
                </div>
              </div>

              {/* Address Information */}
              <div>
                <label htmlFor="endereco" className="form-label">
                  Endereço Completo *
                </label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  className={`form-input ${errors.endereco ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="Rua, número, complemento"
                />
                {errors.endereco && (
                  <p className="form-error">{errors.endereco}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="cidade" className="form-label">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    className={`form-input ${errors.cidade ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Nome da cidade"
                  />
                  {errors.cidade && (
                    <p className="form-error">{errors.cidade}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="estado" className="form-label">
                    Estado *
                  </label>
                  <select
                    id="estado"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    className={`form-input ${errors.estado ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
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
                  {errors.estado && (
                    <p className="form-error">{errors.estado}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="cep" className="form-label">
                    CEP *
                  </label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    className={`form-input ${errors.cep ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="XXXXX-XXX"
                  />
                  {errors.cep && (
                    <p className="form-error">{errors.cep}</p>
                  )}
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cargo" className="form-label">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    className={`form-input ${errors.cargo ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Professor, Coordenador, etc."
                  />
                  {errors.cargo && (
                    <p className="form-error">{errors.cargo}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="departamento" className="form-label">
                    Departamento *
                  </label>
                  <input
                    type="text"
                    id="departamento"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    className={`form-input ${errors.departamento ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Administrativo, Pedagógico, etc."
                  />
                  {errors.departamento && (
                    <p className="form-error">{errors.departamento}</p>
                  )}
                </div>
              </div>

              {/* Password Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="senha" className="form-label">
                    Senha *
                  </label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    className={`form-input ${errors.senha ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Mínimo 8 caracteres"
                  />
                  {errors.senha && (
                    <p className="form-error">{errors.senha}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirmarSenha" className="form-label">
                    Confirmar Senha *
                  </label>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    className={`form-input ${errors.confirmarSenha ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Confirme sua senha"
                  />
                  {errors.confirmarSenha && (
                    <p className="form-error">{errors.confirmarSenha}</p>
                  )}
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
                    'Cadastrar Usuário'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User; 
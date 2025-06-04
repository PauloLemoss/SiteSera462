import React, { useState } from 'react';
import '../styles/main.css';

const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    tenant_id: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    tenant_id: false
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: value.trim() === ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      password: formData.password.trim() === '',
      tenant_id: formData.tenant_id.trim() === ''
    };

    setErrors(newErrors);

    const isFormValid = Object.values(newErrors).every(error => error === false);

    if (!isFormValid) {
      return;
    }

    console.log('Sending request with payload:', formData);

    try {
      const response = await fetch('https://access-control-zpss.onrender.com/api/v1/User/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      const data = await response.json();
      console.log('Response data:', data);

      if (response.status === 201) {
        setMessage('User created successfully.');
        setFormData({
          name: '',
          email: '',
          password: '',
          tenant_id: ''
        });
        setErrors({
          name: false,
          email: false,
          password: false,
          tenant_id: false
        });
      } else {
        const errorMessage = data.msg || 'An error occurred while creating the user.';
        console.error('API Error:', {
          status: response.status,
          message: errorMessage,
          data: data
        });
        setError(errorMessage);
      }
    } catch (err) {
      console.error('Network Error:', {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
      setError(`An error occurred while connecting to the server: ${err.message}`);
    }
  };

  return (
    <div className="container-formulario">
      <form className="preencher-informacoes" onSubmit={handleSubmit}>
        <ul className="list-informacoes">
          <li className="li">
            <input
              name="name"
              className={`input-text ${errors.name ? 'borda-vermelha' : formData.name ? 'borda-verde' : ''}`}
              type="text"
              placeholder="Nome completo *"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </li>
          <li className="li">
            <input
              name="email"
              className={`input-text ${errors.email ? 'borda-vermelha' : formData.email ? 'borda-verde' : ''}`}
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </li>
          <li className="li">
            <input
              name="password"
              className={`input-text ${errors.password ? 'borda-vermelha' : formData.password ? 'borda-verde' : ''}`}
              type="password"
              placeholder="Senha *"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </li>
          <li className="li">
            <input
              name="tenant_id"
              className={`input-text ${errors.tenant_id ? 'borda-vermelha' : formData.tenant_id ? 'borda-verde' : ''}`}
              type="text"
              placeholder="ID da Instituição *"
              value={formData.tenant_id}
              onChange={handleChange}
            />
            {errors.tenant_id && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </li>
        </ul>
        <p className="paragrafo-campo">* campos obrigatórios</p>
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
        <button className="button-enviar" type="submit">Cadastrar Usuário</button>
      </form>
    </div>
  );
};

export default User; 
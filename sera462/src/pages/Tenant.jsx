import React, { useState } from 'react';
import '../styles/main.css';

const Tenant = () => {
  const [formData, setFormData] = useState({
    cnpj: '',
    name: '',
    schema_name: ''
  });

  const [errors, setErrors] = useState({
    cnpj: false,
    name: false,
    schema_name: false
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'cnpj') {
      newValue = value.replace(/\D/g, '');
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));

    setErrors(prev => ({
      ...prev,
      [name]: newValue.trim() === ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const newErrors = {
      cnpj: formData.cnpj.trim() === '',
      name: formData.name.trim() === '',
      schema_name: false
    };

    setErrors(newErrors);

    const isFormValid = Object.values(newErrors).every(error => error === false);

    if (!isFormValid) {
      return;
    }

    console.log('Sending request with payload:', formData);

    try {
      const response = await fetch('https://access-control-zpss.onrender.com/api/v1/Tenant/', {
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
        setMessage('Tenant created successfully.');
        setFormData({
          cnpj: '',
          name: '',
          schema_name: ''
        });
        setErrors({
          cnpj: false,
          name: false,
          schema_name: false
        });
      } else {
        const errorMessage = data.msg || 'An error occurred while creating the tenant.';
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
              name="cnpj"
              className={`input-text ${errors.cnpj ? 'borda-vermelha' : formData.cnpj ? 'borda-verde' : ''}`}
              type="text"
              placeholder="CNPJ *"
              value={formData.cnpj}
              onChange={handleChange}
              pattern="[0-9]{14}"
              title="CNPJ must be exactly 14 digits"
            />
            {errors.cnpj && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </li>
          <li className="li">
            <input
              name="name"
              className={`input-text ${errors.name ? 'borda-vermelha' : formData.name ? 'borda-verde' : ''}`}
              type="text"
              placeholder="Nome da Instituição *"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="paragrafo-mostrar">campo obrigatório*</p>}
          </li>
          <li className="li">
            <input
              name="schema_name"
              className={`input-text ${errors.schema_name ? 'borda-vermelha' : formData.schema_name ? 'borda-verde' : ''}`}
              type="text"
              placeholder="Nome do Schema"
              value={formData.schema_name}
              onChange={handleChange}
            />
          </li>
        </ul>
        <p className="paragrafo-campo">* campos obrigatórios</p>
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
        <button className="button-enviar" type="submit">Cadastrar Instituição</button>
      </form>
    </div>
  );
};

export default Tenant; 
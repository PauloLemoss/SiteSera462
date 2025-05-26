import React, { useState } from "react";
import './header.css';
import { Link } from "react-router-dom";

function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="nav">
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`list-home ${menuAtivo ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuAtivo(false)}>HOME</Link></li>
          <li><Link to="/quemsomos" onClick={() => setMenuAtivo(false)}>QUEM SOMOS</Link></li>
          <li><Link to="/parceiros" onClick={() => setMenuAtivo(false)}>PARCEIROS</Link></li>
          <li><Link to="/equipe" onClick={() => setMenuAtivo(false)}>EQUIPE</Link></li>
          <li><Link to="/contato" onClick={() => setMenuAtivo(false)}>CONTATO</Link></li>
          <li><Link to="/areadeacesso" onClick={() => setMenuAtivo(false)}>ÁREA DE ACESSO</Link></li>
          <li>
            <button className="login-button" onClick={() => setMenuAtivo(false)}>
              LOGIN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
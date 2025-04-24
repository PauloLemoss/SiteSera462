import './header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="list-home">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/quemsomos">QUEM SOMOS</Link></li>
          <li className='clientes' ><Link to="/clientes">CLIENTES</Link></li>
          <li><Link to="/parceiros">PARCEIROS</Link></li>
          <li><Link to="/equipe">EQUIPE</Link></li>
          <li><Link to="/contato">CONTATO</Link></li>
          <li><button className="login-button">LOGIN</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
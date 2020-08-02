import React from 'react';
import Logo from '../../assets/img/logotipo.png';
// import ButtonLink from './components/ButtonLink';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logotipo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;

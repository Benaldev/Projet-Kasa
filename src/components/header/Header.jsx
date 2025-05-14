import React from 'react';
import Logo from '../../assets/images/logo.png';
import './styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img className='logo' src={Logo} alt='Kasa logo' />
      <nav className='nav'>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/about-us'>A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

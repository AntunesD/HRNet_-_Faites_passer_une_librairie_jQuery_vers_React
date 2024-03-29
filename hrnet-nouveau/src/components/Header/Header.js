import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo.png';

const Header = ({ link, linkName }) => {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt='Logo SportSee'></img></div>
      <h1>HRnet</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to={link} className="nav-link">{linkName}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

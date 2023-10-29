import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState(0); // Estado para controlar o desfoque

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // Calcule o desfoque com base na posição atual de rolagem
      const scrollY = window.scrollY;
      const blurValue = Math.min(10, scrollY / 10); // Ajuste o valor máximo do desfoque (no exemplo, 10)
      setNavbarBlur(blurValue);
    });
  }, []);

  // Crie um estilo inline para aplicar o desfoque
  const headerStyle = {
    backdropFilter: `blur(${navbarBlur}px)`,
  };

  return (
    <header className="header" style={headerStyle}>
      <nav className={showMenu ? 'show' : ''}>
        <button className="menu-button" onClick={toggleMenu}>
          ☰ Menu
        </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">Sobre</Link></li>
          <li><Link to="/Projects">Portfólio</Link></li>
          <li><Link to="/Contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

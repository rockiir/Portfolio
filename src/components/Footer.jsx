import React from 'react';
import './Footer.css'; 
import { FaGithub,FaLinkedinIn } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer">
      <div className="full-width-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="auto"
          viewBox="0 0 1440 344"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 258L60 229.333C120 200.667 240 143.333 360 150.5C480 157.667 600 229.333 720 229.333C840 229.333 960 157.667 1080 107.5C1200 57.3333 1320 28.6667 1380 14.3333L1440 0V344H1380C1320 344 1200 344 1080 344C960 344 840 344 720 344C600 344 480 344 360 344C240 344 120 344 60 344H0V258Z"
            fill="#FDC435"
          />
        </svg>
          </div>
        <div className="footer-content">
          <div className="social-media">
            <a href="#">  <FaGithub />Github</a>
            <a href="#"><FaLinkedinIn />Linkedin</a>
          </div>
          <div className="contact-info">
            <p>Entre em contato:</p>
            <ul>
              <li>Email: contato@example.com</li>
              <li>Telefone: (123) 456-7890</li>
              <li>Endereço: Rua Exemplo, 123, Cidade Exemplo</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

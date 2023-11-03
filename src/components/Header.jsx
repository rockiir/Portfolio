import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useHistory
import imagem from '../images/image6.png';
import './Header.css';

function Header() {
  const history = useNavigate(); // Inicialize o useHistory

  const handleSaibaMaisClick = () => {
    // Use history.push para redirecionar para a página "About"
    history('/About');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/raquel-matos-mauricio/', '_blank');
  };

  return (
    <div className="container">
      <table className="header">
        <tbody>
          <tr>
            <td>
              <div className='bloco-1'>
                <div className='tituloDev'>DEV front-end e dados</div>
                <h1>Raquel Matos</h1>
                <p className='descricao'>Bem-vindo ao meu mundo digital! Sou Raquel Matos, uma entusiasta de tecnologia, apaixonada por codificação, design e inovação. Aqui, compartilho minha jornada de aprendizado e exploração no universo da programação e desenvolvimento front-end. Vamos embarcar nessa jornada tecnológica!</p>
                <button className="button-saiba-mais" onClick={handleSaibaMaisClick}>Saiba mais</button>
                <button className="button-linkedin" onClick={handleLinkedinClick}>Linkedin</button>
              </div>
            </td>
            <td>
              <img src={imagem} alt="" className="image" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Header;

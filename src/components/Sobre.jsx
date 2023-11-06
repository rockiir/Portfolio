import React from 'react';
import './Sobre.css';

function Sobre(props) {
  return (
    <div className="container-sobre">

    <div className="sobre">
      <div className="conteudo">
        <div className="texto">
          <h2>{props.titulo}</h2>
          <p>{props.texto}</p>
        </div>
        <div className="imagem">
          <img src={props.imagemSrc} alt={props.imagemAlt} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Sobre;

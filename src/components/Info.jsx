import React from 'react';
import './info.css';


function Info(props) {
    return (
        <div className="Info">
            <div className='titulo-container'>
                <h2 className='titulo'>{props.titulo}</h2>
            </div>
            <p className='titulo-info'>{props.tituloInfo}</p>
            <p className='texto-bloco-info'>{props.texto}</p>
            <p className='texto-descricacao'>{props.textoDescricao}</p>
        </div>
    );
}

export default Info;

import React, { useState } from 'react';
import './Project.css';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageListItem from '@mui/material/ImageListItem';

function Projeto(props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { tecnologias, imagens } = props; // Adicione imagens como parte das props

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const descricaoLimitada = props.descricao.length > 50 ? `${props.descricao.slice(0, 100)}...` : props.descricao;
  const descricaoStyle = {
    margin: '200px',
  };

  return (
    <div className="projeto" >
<div className="imagem-principal">
        <img src={imagens[0]} alt={props.imagemAlt} />
      </div>
            <div className="descricao">
        <h3>{props.titulo}</h3>
        <p>{props.descricaoResumida}</p>
        <Button onClick={handleDialogOpen} variant="contained" color="primary">
          Ver Projeto
        </Button>
        <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="sm">
          <div className="dialog-content">
            <h2>{props.titulo}</h2>
            <p className='paragrafoDescricao' dangerouslySetInnerHTML={{ __html: props.descricao }} />
            <div className="tags"><strong>Tecnologias:  
              {tecnologias && tecnologias.map((tecnologia, index) => (
                
                <span key={index}>#{tecnologia}</span>
              ))}
              </strong>
            </div>

            <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
              {imagens && imagens.map((imagens, index) => (
                <div key={index}>
                  <ImageListItem>
                    <img src={imagens} alt={props.imagemAlt} />
                  </ImageListItem>
                </div>
              ))}
            </Carousel>

            <div className="button-container">
              <Button
                component="a"
                href={props.linkExecutar}
                variant="contained"
                color="primary"
                target="_blank"
              >
                Executar
              </Button>
              <Button
                component="a"
                href={props.linkCodigo}
                variant="contained"
                color="primary"
                target="_blank"
              >
                Código
              </Button>

              <Button onClick={handleDialogClose} color="primary">
                Fechar
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default Projeto;

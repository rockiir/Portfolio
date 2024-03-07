import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import imagem2 from '../images/21dias.png';
import imagem3 from '../images/21dias2.png';
import imagem1 from '../images/21dias3.png';
import imagem4 from '../images/pokedex.png';
import imagem5 from '../images/portfolio.png';
import imagem6 from '../images/portfolio2.png';
import Projeto from './Project';
import './BasicTabs.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '90%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Front-End" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Projeto
            imagens={[imagem5, imagem6]}
            imagemAlt="Descrição da imagem"
            titulo="Portfólio"
            descricaoResumida="Este projeto é um portfólio pessoal criado para exibir informações sobre mim, meus projetos, habilidades e formas de contato. Ele também inclui uma página de erro 404 para direcionar os usuários em caso de URL não encontrada."
            descricao="Este projeto é um portfólio pessoal criado para exibir informações sobre mim, meus projetos, habilidades e formas de contato. Ele também inclui uma página de erro 404 para direcionar os usuários em caso de URL não encontrada."
            tecnologias={['React', 'Node.js', 'Material-UI', 'React Icons', 'styled-components', 'EmailJS' ]} 
            linkExecutar="https://raqueldematos.tech/#/"
            linkCodigo="https://github.com/rockiir/Portfolio?tab=readme-ov-file#tecnologias"
          />
          <Projeto
            imagens={[imagem1, imagem2, imagem3]}

            imagemAlt="Descrição da imagem"
            titulo="Projetos variados"
            tecnologias={['React', 'Node.js']} 
            descricaoResumida ="Desafio proposto pela Rocketseat com 21 projetos para serem desenvolvidos em 21 dias, cada um em um dia, no propósito de estimular a prática diária de estudos de programação. "
            descricao= "Desafio proposto pela Rocketseat com 21 projetos para serem desenvolvidos em 21 dias, cada um em um dia, no propósito de estimular a prática diária de estudos de programação.  "
            
            linkExecutar="https://rockiir.github.io/Desafio-de-21-dias-de-codigo/"
            linkCodigo="https://github.com/rockiir/Desafio-de-21-dias-de-codigo/"
          />
          <Projeto
            imagens={[imagem4]}
            imagemAlt="Descrição da imagem"
            titulo="Projeto com PokeApi"
            descricaoResumida="O   projeto 'Pokedex' é um aplicativo web que permite aos entusiastas de Pokémon pesquisar e obter informações detalhadas sobre seus Pokémon favoritos. Utilizando a API pública do Pokémon PokeApi..."
            descricao="O   projeto <b>'Pokedex'</b> é um aplicativo web que permite aos entusiastas de Pokémon pesquisar e obter informações detalhadas sobre seus Pokémon favoritos. Utilizando a API pública do Pokémon PokeApi, o aplicativo oferece dados precisos, como nome, tipo, altura, peso e informações de evolução, tudo apresentado de forma amigável e acessível por meio de uma interface moderna construída com React e React Router. <br> Com uma estrutura de código organizada, linting com ESLint e testes com Jest, o projeto oferece uma experiência de desenvolvimento sólida e amigável para os desenvolvedores. Uma ferramenta ideal para os fãs de Pokémon explorarem o vasto mundo dessas criaturas adoráveis."
            tecnologias={['React', 'Node.js', 'Api']} 
            linkExecutar="https://rockiir.github.io/Pokedex/"
            linkCodigo="https://github.com/rockiir/Pokedex"
          />
        </div>
      </CustomTabPanel>
      {/*}   <CustomTabPanel value={value} index={1}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Projeto
            imagemSrc={imagem2}
            imagemAlt="Descrição da imagem"
            titulo="Meu Projeto Incrível"
            descricao="Este é um projeto incrível que fiz. Ele faz coisas incríveis e é super legal."
            link="https://github.com/seu-usuario/meu-projeto"
          />
        </div>
  </CustomTabPanel>*/}
    </Box>
  );
}

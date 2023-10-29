import React from 'react';
import Sobre from '../components/Sobre';
import Info from '../components/Info';
import imagem2 from '../images/image9.png'; // Importe a imagem corretamente


function About() {
  return (
    <div className="animação-contato">
      <div>
      <div>
      <Sobre
  titulo="Quem sou eu"
  texto="Olá, sou a Raquel de Matos Mauricio, estudante de Sistemas de Informação, com previsão de formação em agosto de 2024. Estou apaixonada por tecnologia e busco oportunidades para aplicar meus conhecimentos em desenvolvimento front-end , Python, dados e inteligência artificial. Adoro aprender, colaborar e explorar novas tecnologias. Vamos criar coisas incríveis juntos!"
  imagemSrc={imagem2}
  imagemAlt="Descrição da imagem" 
/>

      <Info
      titulo =" Formação"
      tituloInfo = "Sistemas de Informação - Una"
      texto = "Previssão de formação - Agosto 2024"
      textoDescricao = "O curso de Sistemas de Informação é uma jornada empolgante que me proporcionou uma base sólida em tecnologia da informação e ciência da computação. Durante meus estudos, adquiri conhecimentos em programação, gerenciamento de projetos, análise de sistemas, banco de dados e muito mais. O curso me permitiu explorar minha paixão por resolver problemas complexos por meio de soluções de software e me deu as habilidades necessárias para criar aplicações de software inovadoras. Estou ansioso para aplicar esses conhecimentos em desafios do mundo real e continuar aprendendo e crescendo no campo da tecnologia."
      />
      <Info
      titulo =" Experiência"
      tituloInfo = "Analista desenvolvedora estágiaria"
      texto = "08/2021 - 08/2023"
      textoDescricao ="Como estagiária analista de desenvolvimento no Mercantil do Brasil foi uma oportunidade valiosa de aprendizado prático em programação e análise de sistemas. Trabalhei em projetos desafiadores, adquiri conhecimentos em desenvolvimento de software e contribuí para o sucesso da equipe.Através dessas experiências, aprimorei minhas habilidades em programação, análise de sistemas e resolução de problemas complexos. Além disso, tive a oportunidade de aprender sobre as melhores práticas da indústria, bem como a importância da comunicação eficaz no ambiente de trabalho."
      />
      <Info
      titulo ="Projetos Sociais"
      tituloInfo = "FavelaWare"
      texto = "09/2023 - Atualmente"
      textoDescricao ="FavelaWare é um projeto social no Brasil que ensina programação para jovens de favelas. Foi criado em 2022 pela Mundiale, em parceria com Obras Pavonianas e Ânima, e é apoiado pela Meta.
      O FavelaWare tem como objetivo dar aos jovens de favelas a oportunidade de aprender uma habilidade valiosa que pode ajudá-los a conseguir um emprego na indústria de tecnologia. O projeto também fornece aos alunos mentoria e suporte, e ajuda-os a desenvolver suas habilidades interpessoais, como comunicação e trabalho em equipe."

      />
    </div>
    </div>
      

    </div>
  );
}

export default About;

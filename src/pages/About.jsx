import React from 'react';
import Sobre from '../components/Sobre';
import Info from '../components/Info';
import imagem2 from '../images/image9.png'; 


function About() {
  return (
    <div className="animação-contato">
      <div>
      <div>
      <Sobre
  titulo="Quem sou eu"
  texto="Olá, sou a Raquel de Matos Mauricio, estudante de Sistemas de Informação, com previsão de formação em agosto de 2024. Estou apaixonada por tecnologia e busco oportunidades para aplicar meus conhecimentos em desenvolvimento. Adoro aprender, colaborar e explorar novas tecnologias. Vamos criar coisas incríveis juntos!"
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
      tituloInfo = "Analista desenvolvedora estágiaria - Mercantil do Brasil"
      texto = "08/2021 - 08/2023"
      textoDescricao ="Como estagiária analista de desenvolvimento no Mercantil do Brasil foi uma oportunidade valiosa de aprendizado prático em programação e análise de sistemas. Trabalhei em projetos desafiadores, adquiri conhecimentos em desenvolvimento de software e contribuí para o sucesso da equipe.Através dessas experiências, aprimorei minhas habilidades em programação, análise de sistemas e resolução de problemas complexos. Além disso, tive a oportunidade de aprender sobre as melhores práticas da indústria, bem como a importância da comunicação eficaz no ambiente de trabalho."
      />
      <Info
      titulo ="Projetos Sociais"
      tituloInfo = "Instrutora - FavelaWare"
      texto = "09/2023 - Atualmente"
      textoDescricao ="FavelaWare é um projeto social no Brasil que ensina programação para jovens perifericos. Foi criado em 2022 pela Mundiale, em parceria com Obras Pavonianas e Ânima, e é apoiado pela Meta.
      O FavelaWare tem como objetivo dar aos jovens a oportunidade de aprender uma habilidade valiosa que pode ajudá-los a conseguir um emprego na indústria de tecnologia. O projeto também fornece aos alunos mentoria e suporte, e ajuda-os a desenvolver suas habilidades interpessoais, como comunicação e trabalho em equipe."
      exibirLink={true}
      link="https://favelaware.animahub.com.br/sobre"
      textoLink="Saiba Mais"

      />
      <Info
      titulo ="Hackathoons e etc.."
      />
      <Info
      tituloInfo = "Entre os 10 selecionados para a final do hackathon da OLX com o grupo BelloHills"
      exibirLink={true}
      link="https://media.licdn.com/dms/image/C5622AQHyH9jwbUmTbA/feedshare-shrink_800/0/1646345801061?e=1701907200&v=beta&t=am0SirlBEkrkaWdtm1DCis1zUfcXzUHy0hSVhfzO1gs"
      textoLink="Print"
      
      />

      <Info
      tituloInfo = "Finalista no power programs for girls. 6/200 no power programs for girls."
      exibirLink={true}
      link="https://media.licdn.com/dms/image/C4D22AQHi8eyEwxwewQ/feedshare-shrink_2048_1536/0/1622434035330?e=1701907200&v=beta&t=fC9pjxoX5XgAYhugWK_JDIHeEMt5TCdkvL1WImlZyHk"
      textoLink="Certificado"      />
      <Info
      tituloInfo = "Em 4 lugar no Deepracer da ânima"
      exibirLink={true}
      link="https://media.licdn.com/dms/image/C4E22AQH-eUTZ0PbzEw/feedshare-shrink_800/0/1622679381614?e=1701907200&v=beta&t=88LqJyEtJKMNjKyT0MJVwViqBjSNJa_bxE6PmUwNArU"
      textoLink="Print"      
      />
    </div>
    </div>
      

    </div>
  );
}

export default About;

import React from 'react';
import './projects.css';
import Info from '../components/Info';
import Basic from '../components/BasicTabs';


function Projects() {
  return (
    <div className="animação-home">
    <div className='content-project'>
        <Info titulo = "Projetos" 
        tituloInfo = "Aqui estão alguns dos meus projetos recentes:"
        />
        <Basic />
      <ul>
        <div className="projetos-container">
        </div>

      </ul>
    </div>
    </div>
  );
}

export default Projects;

import React from 'react';
import './Skills.css';
import { Typography, Box } from '@mui/material';
import { FaJs, FaHtml5, FaCss3, FaPython, FaReact, FaFigma, FaNode, FaAngular } from 'react-icons/fa';
import CircularProgress from '@mui/material/CircularProgress';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 80, icon: <FaJs /> },
    { name: 'HTML', level: 90, icon: <FaHtml5 /> },
    { name: 'CSS', level: 85, icon: <FaCss3 /> },
    { name: 'React', level: 70, icon: <FaReact /> },
    { name: 'Python', level: 60, icon: <FaPython /> },
    { name: 'Node', level: 60, icon: <FaNode /> },
    { name: 'Figma', level: 80, icon: <FaFigma /> },
    { name: 'Angular', level: 60, icon: <FaAngular /> },
  ];

  return (
    <div className="skills">
      <Typography className="skills-title" variant="h4" component="h2" gutterBottom>
  Minhas Habilidades
</Typography>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Box key={index} className="skill">
            <CircularProgress
              variant="determinate"
              value={skill.level}
              size={50}
              thickness={5}
              color="primary"
            />
            <div className="skill-icon">{skill.icon}</div>
            <Typography variant="h6" component="p">
              {skill.name}
            </Typography>
          </Box>
        ))}
      </div>
    </div>
  );
}

export default Skills;

import React, { useState } from 'react';
import './Contact.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import './Contact.css';

function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const handleTextFieldClick = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="animação-contato">

      <h2>Entre em Contato</h2>
      <p>E-mail: <a href="mailto:raquelmatos09@yahoo.com.br">raquelmatos09@yahoo.com.br</a></p>
      <p><a href="https://www.linkedin.com/in/raquel-matos-mauricio/"  target="_blank">Linkedin</a></p>

      <div className="contact-container">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Nome"
            variant="standard"
            onClick={handleTextFieldClick}
          />
          <TextField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            onClick={handleTextFieldClick}
          />
          <TextField
            id="outlined-multiline-static"
            label="Mensagem"
            multiline
            rows={4}
            defaultValue=""
          />
        </Box>
      </div>
      {showAlert && (
        <div className="top-alert">
          <Alert severity="error">
            Este é um alerta de erro - o sistema ainda não tem servidor. Por favor, tente entrar em contato por e-mail ou pelo Linkedin.
          </Alert>
        </div>
      )}
    </div>
  );
}

export default Contact;

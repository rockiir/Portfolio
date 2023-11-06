import React, { useState } from 'react';
import './Contact.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import emailjs from 'emailjs-com';

function Contact() {
  const [enviado, setEnviado] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  emailjs.init('Zo72WV7ZKcIX5tpsa');

  const sendEmail = (name, email, message) => {
    emailjs.send('service_7bypmkm', 'template_2urgj4s', {
      from_name: name,
      message: message,
      reply_to: email,
    }).then(function(response) {
      setEnviado(true);

      setTimeout(() => {
        setEnviado(false);
      }, 5000);
      console.log('E-mail enviado com sucesso!', response);
      setEnviado(true); 
    }, function(error) {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      console.error('Erro ao enviar o e-mail:', error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.nome.value;
    const email = e.target.email.value;
    const message = e.target.mensagem.value;

    sendEmail(name, email, message);

    e.target.nome.value = '';
    e.target.email.value = '';
    e.target.mensagem.value = '';
  };

  return (
    <div className='container-contato'>
    <div className="animação-contato">
      <h2>Entre em Contato</h2>
      <p>E-mail: <a href="mailto:raquelmatos09@yahoo.com.br">raquelmatos09@yahoo.com.br</a></p>
      <p><a href="https://www.linkedin.com/in/raquel-matos-mauricio" target="_blank" rel="noreferrer">Linkedin</a></p>
      <p><a href="https://github.com/rockiir" target="_blank" rel="noreferrer">Github</a></p>

      <div className="contact-container">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="nome"
            label="Nome"
            variant="standard"
          />
          <TextField
            name="email"
            label="E-mail"
            variant="standard"
          />
          <TextField
            name="mensagem"
            label="Mensagem"
            multiline
            rows={4}
            defaultValue=""
          />
          <button type="submit" className='button'>  
         
Enviar</button>
        </Box>
      </div>

      {enviado && (
        <div className="top-alert">
          <Alert severity="success">
            Mensagem enviada com sucesso!
          </Alert>
        </div>
      )}
      

      {showAlert && (
        <div className="top-alert">
          <Alert severity="error">
            Ocorreu um erro ao enviar a mensagem. Por favor, entre em contato pelo <a href="mailto:raquelmatos09@yahoo.com.br">e-mail</a>, <a href="https://www.linkedin.com/in/raquel-matos-mauricio" target="_blank" rel="noreferrer">LinkedIn</a> ou <a href="https://github.com/rockiir" target="_blank" rel="noreferrer">GitHub</a>.
          </Alert>
        </div>
      )}
    </div>
    </div>
  );
}

export default Contact;

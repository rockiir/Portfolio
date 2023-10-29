import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/createTheme';
import { IoLogoWhatsapp } from 'react-icons/io';


function App() {
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
        <Navbar /> {/* Deixe o Navbar fora do ThemeProvider */}
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </div>
        </ThemeProvider>
        <Footer />
      </Router>
      <div className="whatsapp-button">
  <a href="https://api.whatsapp.com/send?phone=5531985064785" target="_blank">
    <IoLogoWhatsapp size={44} />
    <span></span>
  </a>
</div>
    </div>
  );
}

export default App;

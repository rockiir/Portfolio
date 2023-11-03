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
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <div>
    <div>
      <Router>
        <ThemeProvider theme={theme}>
        <Navbar /> 
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="*" element={<PageNotFound />} />

            </Routes>
          </div>
        </ThemeProvider>
        <Footer />
      </Router>
    <span></span>
    </div>
      <div className="whatsapp-button">
<a href="https://api.whatsapp.com/send?phone=5531985064785" target="_blank" rel="noreferrer noopener">
    <IoLogoWhatsapp size={44} />
  </a>
</div>
    </div>
  );
}

export default App;

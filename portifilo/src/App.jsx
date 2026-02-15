import React from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <BackgroundAnimation />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
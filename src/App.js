import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/portfolio/' element={<Home />} />
        <Route path='/portfolio/about' element={<About />} />
        <Route path='/portfolio/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
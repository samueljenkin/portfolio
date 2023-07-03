import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
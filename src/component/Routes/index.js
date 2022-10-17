import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Menu from '../../pages/Menu';
import Footer from '../Footer';
import Navbar from '../Navbar';

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={< Menu/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/contact" element={< Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default index;
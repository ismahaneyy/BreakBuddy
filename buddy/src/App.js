import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Timer from './components/timer';
import FlashCard from './components/FlashCard';
import Testimonials from './components/Testimonials';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <HeroSection />
            <section id="home">
            </section>
            <section id="blog">
            </section>
            <Blog />
            <section id="testimonials">
              <Testimonials />
            </section>
            
            <Footer />
            
          </div>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/notes" element={<FlashCard />} />
      </Routes>
    </Router>
  );
};

export default App;

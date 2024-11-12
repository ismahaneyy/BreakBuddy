import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <nav className="navbar" onClick={scrollToTop}>
      <h1>BreakBuddy</h1>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQs</a>
        <button className="login-btn" onClick={handleLoginClick}>LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;
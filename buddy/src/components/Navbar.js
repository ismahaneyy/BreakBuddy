import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar" onClick={scrollToTop}>
      <h1>BreakBuddy</h1>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQs</a>
        <button className="login-btn">LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <nav className="navbar">
      <h1>BreakBuddy</h1>
      <div className="menu">
       <a> Why BreakBuddy</a>
        <a href="#home">Home</a>
        <a href="#testimonials">Testimonials</a>
        <a>FAQ</a>
        <a href="#blog">Blog</a>
        <button className="login-btn" onClick={handleLoginClick}>LOGIN</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" onClick={scrollToTop}>
      <div className="footer-left">
        <p>BreakBuddy Footer</p>
      </div>
      <div className="footer-right">
        <p>
          Support: 
          <a href="mailto:ismahanabdirizakk@gmail.com"> ismahanabdirizakk@gmail.com</a> | 
          <a href="mailto:mujahidabdi5070@gmail.com"> mujahidabdi5070@gmail.com</a>
        </p>
        <p>2024, Mujahid and Ismahan. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

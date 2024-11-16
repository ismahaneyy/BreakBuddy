import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';


import heroBg from '../assets/hero-bg.jpeg'
import student1 from '../assets/student1.jpg'
import student2 from '../assets/student2.jpg'
import student3 from '../assets/student3.jpg'
import student4 from '../assets/student4.jpg'
import student5 from '../assets/student5.jpg'

function Hero() {
  const [backgroundImage, setBackgroundImage] = useState(heroBg); 
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  useEffect(() => {
    const images = [heroBg, student1, student2, student3, student4, student5];
    
    let currentIndex = 0;

    const changeBackground = () => {
      setBackgroundImage(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length; 
    };

    
    const intervalId = setInterval(changeBackground, 5000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>Master Your Time, Maximize Your Potential</h1>
        <p>Automate your productivity with smart scheduling and powerful motivation with BreakBuddy.</p>
        <button className="hero-btn" onClick={handleSignupClick}>Get Started</button>
      </div>
    </section>
  );
}

export default Hero;

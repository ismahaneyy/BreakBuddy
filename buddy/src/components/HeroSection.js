import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';  

const HeroSection = (props) => {
  const navigate = useNavigate();  
  const handleGetStarted = () => {
    navigate('/signup');  
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>{props.heading}</h2>
        <p>{props.subheading}</p>
        <button onClick={handleGetStarted}>{props.buttonText}</button> 
      </div>
      <div className="hero-image">
        <img src={props.image} alt={props.imageAlt} />  
      </div>
    </section>
  );
};

export default HeroSection;

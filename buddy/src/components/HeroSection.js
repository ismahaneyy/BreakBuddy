import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const HeroSection = (props) => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleGetStarted = () => {
    navigate('/signup');  // Navigate to the signup page when the button is clicked
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>{props.heading}</h2>
        <p>{props.subheading}</p>
        <button onClick={handleGetStarted}>{props.buttonText}</button> {/* Add onClick event */}
      </div>
      <div className="hero-image">
        <img src={props.image} alt={props.imageAlt} />  {/* Use the image passed as a prop */}
      </div>
    </section>
  );
};

export default HeroSection;

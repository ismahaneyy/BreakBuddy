import React from 'react';
import './Testimonials.css';
import womanImage from '../assets/womanimae.jpeg';
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Discover why others love it</h2>
      <div className="testimonial-slider">
        <div className="testimonial">
          <img src={womanImage} alt="User 1" className="testimonial-image" />
          <p>Before this, I barely studied. Now, I do it regularly. Thank you, BreakBuddy.</p>
          <h4>- Ismahan, University Student</h4>
        </div>
        <div className="testimonial">
          <img src={womanImage} alt="User 2" className="testimonial-image" />
          <p>"BreakBuddy transformed my study habits!"</p>
          <h4>- Jamie, College Student</h4>
        </div>
        <div className="testimonial">
          <img src={womanImage} alt="User 3" className="testimonial-image" />
          <p>"As someone who constantly procrastinates, this has been a game-changer in motivating me to complete my homework."</p>
          <h4>- Nethan, High School Student</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

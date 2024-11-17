import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide
  const totalSlides = 5; // Total number of testimonials

  // Use useEffect to set the interval for sliding the testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Loop through the slides
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="text-center mb-4">What Our Users Say</h2>
      <div className="testimonial-carousel">
        {/* All testimonials are now enclosed within this single div */}
        <div className="testimonial-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          <div className="testimonial-box">
            <p className="testimonial-text">
              "BreakBuddy helped me stay focused during long study sessions. The break reminders kept me refreshed and motivated!"
            </p>
            <h5 className="testimonial-author">John Doe</h5>
            <p className="testimonial-role">Student</p>
          </div>

          <div className="testimonial-box">
            <p className="testimonial-text">
              "As a bodybuilder, BreakBuddy helped me keep track of my workouts and rest days, boosting my consistency."
            </p>
            <h5 className="testimonial-author">Jane Smith</h5>
            <p className="testimonial-role">Bodybuilder</p>
          </div>

          <div className="testimonial-box">
            <p className="testimonial-text">
              "I love how easy it is to track my study hours and breaks with BreakBuddy. It keeps me on track and motivated!"
            </p>
            <h5 className="testimonial-author">Alice Cooper</h5>
            <p className="testimonial-role">Student</p>
          </div>

          <div className="testimonial-box">
            <p className="testimonial-text">
              "BreakBuddy is a game-changer for my productivity! The break scheduling system really helps me stay focused."
            </p>
            <h5 className="testimonial-author">Mark Lee</h5>
            <p className="testimonial-role">Worker</p>
          </div>

          <div className="testimonial-box">
            <p className="testimonial-text">
              "The reminders to take breaks helped me prevent burnout. I now work smarter, not harder!"
            </p>
            <h5 className="testimonial-author">Sara Johnson</h5>
            <p className="testimonial-role">Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

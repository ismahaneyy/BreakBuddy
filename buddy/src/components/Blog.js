import React from 'react';
import './Blog.css';
import testimonialImage1 from '../assets/testimonial1.jpeg';
import testimonialImage2 from '../assets/testimonial2.jpeg';
import testimonialImage3 from '../assets/testimonial3.jpeg';

const Blog = () => {
  return (
    <div className="blog-section">
    <div className="blog-item">
      <div className="blog-text">
        <h2>Group Study Rooms</h2>
        <p>Join motivated students from all over the world to boost your productivity and find your study flow.</p>
        <a href="#" className="learn-more">How To Study Together </a>
      </div>
      <img src={testimonialImage1} alt="Group Study Rooms" className="blog-image" />
    </div>
  
    <div className="blog-item">
    <div className="blog-text">
    <h2>Stay Motivated with our Study Streak feature!</h2>
    <p>Track your progress, maintain your streaks, and achieve your study goals consistently.</p>
  </div>
  <img src={testimonialImage2} alt="Stay Motivated" className="blog-image" />
  
</div>

  
    <div className="blog-item">
      <div className="blog-text">
        <h2>Ask. Answer. Achieve. Together</h2>
        <p>Ask questions on any topic and receive answers from a diverse pool of users. Enhance your understanding and be part of a supportive learning community!</p>
      </div>
      <img src={testimonialImage3} alt="Ask. Answer. Achieve." className="blog-image" />
    </div>
  </div>
  
  );
};

export default Blog;

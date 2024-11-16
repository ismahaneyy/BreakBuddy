import React from 'react';
import './Blog.css';
import testimonialImage1 from '../assets/testimonial1.jpeg';
import stud22 from '../assets/stud3.png'
import stud3 from '../assets/stud1.png'

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
  <img src={stud22} alt="Stay Motivated" className="blog-image" />
  
</div>

  
    <div className="blog-item">
      <div className="blog-text">
        <h2>Ask. Answer. Achieve. Together</h2>
        <p>Ask questions on any topic and receive answers from a diverse pool of users. Enhance your understanding and be part of a supportive learning community!</p>
      </div>
      <img src={stud3} alt="Ask. Answer. Achieve." className="blog-image" />
    </div>
  </div>
  
  );
};

export default Blog;

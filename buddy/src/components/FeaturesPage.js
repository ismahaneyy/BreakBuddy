import React from 'react';
import './FeaturesPage.css';
import img4 from '../assets/stud1.png';

const FeaturesPage = () => {
  return (
    <section className="features-page">
      <div className="text-content">
  <h2>Maximize Your Productivity with BreakBuddy</h2>
  <p>We all know how hard it can be to stay focused for long study or work sessions. That’s where BreakBuddy comes in. Our app helps you maintain peak performance by ensuring you take regular breaks, so you stay refreshed and energized.</p>
  <p>Whether you're a student cramming for exams, a bodybuilder tracking workout sessions, or a worker tackling a long to-do list, BreakBuddy is here to help. It creates personalized schedules to keep you focused and prevent burnout, so you can reach your goals faster.</p>
  <p>Take control of your productivity, track your progress, and reward yourself for consistent effort. With BreakBuddy, you’ll never feel drained during a session again. Set your work intervals, take meaningful breaks, and achieve your best results!</p>
</div>

      <div className="image-content">
        <img src={img4} alt="Study Image" />
      </div>
    </section>
  );
};

export default FeaturesPage;

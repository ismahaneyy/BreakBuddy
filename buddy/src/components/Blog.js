import React from 'react';
import './Blog.css';
import img1 from '../assets/student2.jpg';
import img2 from '../assets/stud1.png';
import img3 from '../assets/stud3.png';
import img6 from '../assets/Timer.gif';
import img5 from '../assets/achievements.jpg';
import img4 from '../assets/stud1.png';

const blogData = [
  { imgSrc: img1, title: 'Solo Mode', 
    description: 'Set your ideal study and break intervals to match your personal flow. Whether you prefer short, focused sessions or longer study blocks, you control the pace, making it easier to stay on track and avoid burnout.' },
  { imgSrc: img2, title: 'Buddy Mode', description: 'Sync up with a friend to study together, with shared focus sessions and break times. Keep each other motivated, stay accountable, and power through your study goals as a team.' },
  { imgSrc: img3, title: 'Achievements & Streaks', description: 'Unlock achievements as you hit milestones, and keep your streaks growing with consistent study habits. But if you don’t study within 24 hours, your streaks will reset, motivating you to keep going. And compete with your besties!!!' },
  // { imgSrc: img6,  title: 'Smart Timer',
  //   description: 'BreakBuddy helps you study efficiently by customizing your study and break times, while keeping things fun and motivating. Study for long hours without getting tired thus reducing burnouts.' },
  // { imgSrc: img4,  title: 'Games During Breaks',
  //   description: 'Take fun mini-breaks with games designed to refresh your mind. Whether it’s a quick puzzle or a fun challenge, reward yourself during those breaks for staying focused!' },
  // { imgSrc: img5,  title: 'Study Stats',
  //   description: 'See your progress every day in your progress page and compare with your friends' },
];

const Blog = () => (
  <section className="blog">
    <h2>Why BreakBuddy?</h2>
    <div className="blog-grid">
      <div className="blog-slider">
        {blogData.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.imgSrc} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;

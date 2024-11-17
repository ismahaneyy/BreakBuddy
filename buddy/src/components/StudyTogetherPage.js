import React from "react";
import "./StudyTogetherPage.css";
import { useNavigate } from 'react-router-dom';
// import img1 from '../assets/student2.jpg';
// import img2 from '../assets/stud1.png';


const StudyTogetherPage = () => {
  
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="study-together-container">
      <header className="header">
      <h1 className="h1">
  More Than Just Studying 📚✨
</h1>
<h2>
  Connect with your crew 🤝, set your goals 🎯, crush them 💪, and celebrate your wins 🏆!
</h2>

      </header>

      <main className="main-content">
        <div className="text-content">
          <h3>Study Together 💻🎓</h3>
<p>
<div className="moving-images">
          
          <img src="./src/assets/womanimae" alt="sharon" className="avatar avatar1" />
          <img src="/assets/student2.jpg" alt="james" className="avatar avatar2" />
          <img src="/assets/student3.jpg" alt="sandra" className="avatar avatar3" />
         
        </div>
  Study with your friends, connect on a Zoom call, and chat with them while staying productive. 
  Work together, support each other, and make studying fun and engaging! 
  Stay focused, celebrate milestones, and enjoy the journey of learning with your study buddies.
  
</p>


        </div>

       

        <div className="action-buttons">
          <button className="btn" onClick={handleSignupClick}>Find Friends</button>
          <button className="btn" onClick={handleSignupClick}>Join Study Room</button>
        </div>
      </main>
    </div>
  );
};

export default StudyTogetherPage;
import React, { useEffect, useState } from 'react';
import './StudentNavbar.css';

const StudentNavbar = () => {
  const [user, setUser] = useState({ username: '' });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setUser({ username: userData.username });
    }
  }, []);

  return (
    <nav className="student-navbar">
      <div className="navbar-content">
      <div className="links">
        <a href="#home">Timer</a>
        <a href="#home">Notes</a>
        <a href="#testimonials">Progress</a>
        <a href="#faq">Profile</a>
      </div>

      </div>
    </nav>
  );
};

export default StudentNavbar;

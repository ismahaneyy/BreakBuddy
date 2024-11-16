import React from 'react';
import './StudentNavbar.css';
import { Link } from 'react-router-dom';

const StudentNavbar = () => {
 

  return (
    <nav className="student-navbar">
      <div className="navbar-content">
      <div className="links">
      <Link to="/timer">Timer</Link> 
          <Link to="/notes">Notes</Link>
          <Link to="#progress">Progress</Link>
          <Link to="#profile">Profile</Link>
      </div>

      </div>
    </nav>
  );
};

export default StudentNavbar;


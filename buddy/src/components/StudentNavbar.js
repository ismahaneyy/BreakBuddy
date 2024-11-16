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
<<<<<<< HEAD
          <Link to="/progress">Progress</Link>
          <Link to="#profile">Profile</Link>
=======
          <Link to="/manager">Rooms  </Link>
          <Link to="/progress">Progress</Link>
          {/* <Link to="#profile">Profile</Link> */}
    
>>>>>>> a79365b241571488d77c5c2b3497bc1653c019bb
      </div>

      </div>
    </nav>
  );
};

export default StudentNavbar;


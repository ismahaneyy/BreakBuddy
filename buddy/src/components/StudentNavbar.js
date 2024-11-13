import React, { useEffect, useState } from 'react';
import './StudentNavbar.css';

const StudentNavbar = ({ userId }) => {
  const [user, setUser] = useState({ username: '', profilePicture: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://bbbackend.onrender.com/user/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setUser({
            username: userData.username,
            profilePicture: userData.profilePicture,
          });
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <nav className="student-navbar">
      <div className="navbar-content">
        <img
          src={user.profilePicture || 'default-profile.png'}
          alt="Profile"
          className="profile-picture"
        />
        <span className="username">{user.username}</span>
      </div>
    </nav>
  );
};

export default StudentNavbar;

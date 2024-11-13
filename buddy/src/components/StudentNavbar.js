import React, { useEffect, useState } from 'react';

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
        <span className="username">{user.username}</span>
      </div>
    </nav>
  );
};

export default StudentNavbar;

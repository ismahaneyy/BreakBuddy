import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setFormData({ name: userData.name, username: userData.username, email: userData.email });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem('userId'));
    try {
      const response = await axios.patch(`https://bbbackend.onrender.com/user/${userId}`, formData);
      if (response.status === 200) {
        // Save updated details in localStorage
        localStorage.setItem('userData', JSON.stringify(formData));
        console.log("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default StudentProfile;

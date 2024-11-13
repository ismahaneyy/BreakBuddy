import React, { useEffect, useState } from 'react';

const StudentProfile = ({ userId }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    profilePicture: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://bbbackend.onrender.com/user`);
        if (response.ok) {
          const userData = await response.json();
          setFormData({
            name: userData.name,
            username: userData.username,
            email: userData.email,
            profilePicture: userData.profilePicture || '',
          });
        } else {
          console.error("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://bbbackend.onrender.com/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Profile updated successfully.");
      } else {
        console.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error:", error);
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
        <label>
          Profile Picture:
          <input type="file" onChange={handleFileChange} />
          {formData.profilePicture && (
            <img src={formData.profilePicture} alt="Profile" className="profile-preview" />
          )}
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default StudentProfile;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentProfile.css';
import Achievements from './Achievements';

const StudentProfile = ({ handleUpload, image_url }) => {
  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    age: '',
    image_url: ''
  });
  
  const userId = 2

  useEffect(() => {
    fetch(`https://bbbackend.onrender.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setStudent(data);
        setFormData({
          name: data.name,
          username: data.username,
          age: data.age,
          image_url: data.image_url || ''
        });
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`https://bbbackend.onrender.com/users/${userId}`, { ...formData, image_url });
      if (response.status === 200) {
        setStudent(response.data);
        setIsEditing(false);
        console.log("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-details">
        {student && (
          <>
            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <div className='e1'>
                  <img
                    src={image_url || 'bbp.png'}
                    alt="Profile"
                    className="profile-image"
                    style={{ width: "150px", height: "150px", borderRadius: "50%", cursor: "pointer" }}
                    onClick={handleUpload} 
                  />
                </div>

                <div className='p2'>
                  <label>Name:</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                  <label>Username:</label>
                  <input type="text" name="username" value={formData.username} onChange={handleChange}/>
                  <label>Age:</label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange}/>
                </div>
              
                <button className='save' type="submit">Save Changes </button>
              </form>
            ) : (
              <>
                <div className='p1'>
                  <img
                    src={student.image_url || image_url || 'bbp.png'}
                    alt="Profile"
                    className="profile-image"
                    style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                  />
                   <p>{student.name}</p>
                </div>
                
                <div className='p2'>
                   <p><strong>Name:</strong> {student.name}</p>
                   <p><strong>Username:</strong> {student.username}</p>
                </div>
                
                <p className='age'><strong>Age:</strong> {student.age}</p>
                <button className='edit' onClick={() => setIsEditing(true)}>Edit details</button>
              </>
            )}
          </>
        )}
      </div>


      <div className='achievements'>
        <Achievements/>
      </div>
    </div>
  );
};

export default StudentProfile;


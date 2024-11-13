import React, { useEffect, useState } from 'react';

const StudentProfile = () => {
  const [student, setStudent] = useState(null); 
  const userId = 2; 

  useEffect(() => {
    
    fetch(`https://bbbackend.onrender.com/user/${userId}`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setStudent(data); 
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  }, [userId]);

  
  

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        {student.image_url && <img src={student.image_url} alt="Profile" className="profile-image" />}
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Username:</strong> {student.username}</p>
        <p><strong>Date of birth:</strong> {student.date_of_birth}</p>
        <button>Edit details</button>
      </div>
    </div>
  );
};

export default StudentProfile;

import React, { useEffect, useState, useRef } from 'react';
import './Dashboard.css';
import StudentNavbar from './StudentNavbar';
<<<<<<< HEAD
// import StudentComponents from './StudentComponents';
=======
import StudentComponents from './StudentComponents';
import Timer from './timer';
import FlashCard from './FlashCard';
import JoinCreateRoom from './JoinCreateRoom';
import StudentProfile from './StudentProfile';
>>>>>>> a79365b241571488d77c5c2b3497bc1653c019bb


function Dashboard() {
  const [cloudinaryRes, setCloudinaryRes] = useState(null);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dgdwsxao6',
        uploadPreset: 'breakbuddy'
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log('File uploaded successfully: ', result.info);
          setCloudinaryRes(result.info.secure_url); 
        }
      }
    );
  }, []);

  const handleUpload = () => {
    widgetRef.current.open();
  };

  return (
    <div className="dashboard-container">
      <StudentNavbar />
      {/* <StudentComponents image_url={cloudinaryRes} handleUpload={handleUpload} /> */}

    </div>
  );
}

export default Dashboard;

// import React from 'react';
// import './Dashboard.css';
// import StudentNavbar from './StudentNavbar';
// import StudentProfile from './StudentProfile';

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       < StudentNavbar  />
         
//       <div className="dashboard-content">
//        <StudentProfile />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState, useRef } from 'react';
import './Dashboard.css';
import StudentNavbar from './StudentNavbar';
import StudentComponents from './StudentComponents';

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
      <StudentComponents image_url={cloudinaryRes} handleUpload={handleUpload} />
    </div>
  );
}

export default Dashboard;

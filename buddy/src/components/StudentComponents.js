// import React, { useEffect, useState, useRef } from 'react';
// import './StudentComponents.css';
// import StudentProfile from './StudentProfile';
// // import StudentNavbar from './StudentNavbar'; // Ensure Navbar is at the top


// function StudentComponents({ handleUpload, image_url }) {
//   const [student, setStudent] = useState(null);
//   const [streak, setStreak] = useState(0)
//   const userId = 1

//   useEffect(() => {
//     fetch(`https://bbbackend.onrender.com/user/${userId}/streaks`)
//       .then((response) => response.json())
//       .then((data) => setStreak(data))
//       .catch((error) => console.error('Error fetching streak:', error));
//   }, [userId]);

//   useEffect(() => {
//     fetch(`https://bbbackend.onrender.com/users/${userId}`)
//       .then((response) => response.json())
//       .then((data) => setStudent(data))
//       .catch((error) => console.error('Error fetching student details:', error));
//   }, [userId]);

//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     widgetRef.current = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: 'dgdwsxao6',
//         uploadPreset: 'breakbuddy',
//       },
//       (error, result) => {
//         if (!error && result && result.event === 'success') {
//           setCloudinaryRes(result.info.secure_url);
//         }
//       }
//     );
//   }, []);

//   const handleUpload = () => {
//     widgetRef.current.open();
//   };

//   return (
//     <div className="student_comps">
//       <div className="top">
//         <h2>BreakBuddy</h2>
//         <div className="top-right">
//           <p>{streak.streak_length || 0} 🔥</p>
//           <img src={student?.image_url || cloudinaryRes || 'bbp.png'} alt="Profile" />
//           <p>{student?.username || 'Loading...'}</p>
//         </div>
//       </div>

//       {/* Render Student Profile */}
//       <StudentProfile image_url={cloudinaryRes} handleUpload={handleUpload} />
//     </div>
//   );
// }

//   useEffect(() => {
//     fetch(`https://bbbackend.onrender.com/users/${userId}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setStudent(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching student details:', error);
//       });
//   }, [userId]);

//   return (
//     <div className="student_comps">
//       <div className="top">
//         <h2>BreakBuddy</h2>
//         <div className='top-right'>
//           <p>{streak.streak_length || 0} 🔥</p>
//           <img src={student?.image_url || image_url || 'bbp.png'} alt="Profile" />
//           <p>{student?.username || 'Loading...'}</p>
//         </div>
       
//       </div>
      
//       <StudentProfile image_url={image_url} handleUpload={handleUpload} />
//     </div>
//   );


// export default StudentComponents;













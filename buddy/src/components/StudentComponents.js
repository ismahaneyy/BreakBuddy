import React from 'react';
import './StudentComponents.css';
import StudentProfile from './StudentProfile';

function StudentComponents() {
  return (
    <div className="student_comps">
      <h2>Navbar</h2>
       <StudentProfile/>
    </div>
  );
}

export default StudentComponents;
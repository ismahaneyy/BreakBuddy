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



import React from 'react';
import './Dashboard.css';
import StudentNavbar from './StudentNavbar';
import StudentComponents from './StudentComponents';

function Dashboard() {
  return (
    <div className="dashboard-container">
      < StudentNavbar  />
      <StudentComponents/>
      
    </div>
  );
}

export default Dashboard;
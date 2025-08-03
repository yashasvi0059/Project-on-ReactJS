// import React from 'react' 
// import backgroundImage from './assets/img1.png';
// import './App.css'

// function App() {
//   const backgroundStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     height: '100vh',
//   };

//   return (
//     <div style={backgroundStyle}>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// import React from 'react';
// import Image from './assets/img3.png';
// import './App.css';

// function App() {
//   return (
//     <div className="container">
//       {/* Header */}
//       <div className="header">
//         <div className="photo">
//           <img src={Image} alt="Profile" height='200px' weidth='200px'/>
//         </div>
//         <div className="info">
//           <h1>Yashasvi Upadhaya</h1>
//           <p><b>yashasviupadhaya@gmail.com</b> | <b>+91 6291543220</b></p>
//           <a href="https://www.linkedin.com/in/yashasvi-upadhaya-1010042a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a> | <a href="https://www.github.com">Github</a>
//         </div>
//       </div>

//       {/* Sections */}
//       <div className="section">
//         <h2>Skills</h2>
//         <ul>
//           <li>Python</li>
//           <li>C (Basics)</li>
//           <li>HTML, CSS</li>
//           <li>Git, GitHub</li>
//           <li>JavaScript (Basics)</li>
//         </ul>
//       </div>

//       <div className="section">
//         <h2>Education</h2>
//         <p><b>BCA</b> | NSHM Knowledge Campus, Kolkata - CGPA: 6.56 | Aug ('23 - '26)</p>
//         <p><b>XII</b> | Gems Akademia International School - 72.89% | 2023</p>
//       </div>

//       <div className="section">
//         <h2>Certifications</h2>
//         <ul>
//           <li>CSRBOX completion certificate</li>
//           <li>Webel Certificate of Web Development</li>
//           <li>Edx certificate</li>
//           <li>Introduction to Web Development with HTML5, CSS3, and JavaScript</li>
//           <li>Python Basics for Data Science</li>
//           <li>Webel Certificate of cybersecurity</li>
//           <li>IBM SkillsBuild - Data Analytics: Turning Data into Decisions using Python</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Image from "./assets/img3.png";
// import "./App.css";

// const StudentCard = ({ image, name, course }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={name} className="profile-img" />
//       <h3>{name}</h3>
//       <p>{course}</p>
//     </div>
//   );
// };

// function App() {
//   const students = [
//     { name: "Yashasvi Upadhaya", course: "BCA", image: Image },
//     { name: "Yashasvi Upadhaya", course: "BCA", image: Image },
//     { name: "Yashasvi Upadhaya", course: "BCA", image: Image },
//     { name: "Yashasvi Upadhaya", course: "BCA", image: Image },
//     { name: "Yashasvi Upadhaya", course: "BCA", image: Image },
//   ];

//   return (
//     <div className="container">
//       {students.map((student, index) => (
//         <StudentCard
//           key={index}
//           image={student.image}
//           name={student.name}
//           course={student.course}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// App.jsx
// import React from 'react';
// import EmployeeList from './Components/EmployeeList'; 


// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to the Employee Dashboard</h1>
//       <EmployeeList /> 
//       <First/>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import FoodData from './Components/FoodData';
import FoodItem from './Components/FoodItems';
import Image from "./assets/Pizza.png"; 

const App = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-6">Food Menu</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {FoodData.map((item, index) => (
          <FoodItem key={index} name={item.name} image={item.image} />
        ))}
        
      </div>
    </div>
  );
};

export default App;


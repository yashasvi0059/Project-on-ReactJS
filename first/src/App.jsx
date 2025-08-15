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

import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import FoodData from './Components/FoodData';
import FoodItem from './Components/FoodItems';
import Pizza from './Components/Pizza';
import Burger from './Components/Burger';
import Pasta from './Components/Pasta';
import Momo from './Components/Momo';
import Chinese from './Components/Chinese';
import Cake from './Components/Cake';
import Shake from './Components/Shake';
import Sweets from './Components/Sweets';
import Beverages from './Components/Beverages';

const Home = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <>
    <div className="container">
      <h2 className="section-title">Popular Food</h2>

      <div className="scroll-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>&lt;</button>

        <div className="food-row" ref={scrollRef}>
          {FoodData.map((food) => (
            <FoodItem key={food.id} id={food.id} name={food.name} image={food.image} />
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </div>
    </>
  );
};

const FoodDetail = () => {
  const { foodId } = useParams();
  const food = FoodData.find((item) => item.id === foodId);
  if (!food) return <h2 style={{ padding: '20px' }}>Food item not found</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{food.name}</h2>
      <img src={food.image} alt={food.name} style={{ width: '300px', borderRadius: '10px' }} />
      <p style={{ marginTop: '15px' }}>{food.description}</p>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food/:foodId" element={<FoodDetail />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/burger" element={<Burger />} />
      <Route path="/pasta" element={<Pasta />} />
      <Route path="/momo" element={<Momo />} />
      <Route path="/chinese" element={<Chinese />} />
      <Route path="/cake" element={<Cake />} />
      <Route path="/shake" element={<Shake />} />  
      <Route path="/sweets" element={<Sweets />} /> 
      <Route path="/beverages" element={<Beverages />} /> 
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  </Router>
);

export default App;



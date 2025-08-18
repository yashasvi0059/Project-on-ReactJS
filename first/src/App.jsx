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


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Menu from "./Components/Menu";
import Offers from "./Components/Offers";

import Pizza from "./Components/Pizza";
import Burger from "./Components/Burger";
import Pasta from "./Components/Pasta";
import Momo from "./Components/Momo";
import Chinese from "./Components/Chinese";
import Cake from "./Components/Cake";
import Shake from "./Components/Shake";
import Sweets from "./Components/Sweets";
import Beverages from "./Components/Beverages";
import Cart from "./Components/Cart";
import FoodDetail from "./Components/FoodItems";

// ✅ Auth Component (Login + Register + Forgot all inside it)
import Login from "./Components/Login";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <Router>
        {/* ✅ Header/Footer only if logged in */}
        {isLoggedIn && <Header />}

        <Routes>
          {/* ✅ Auth Route */}
          <Route
            path="/login"
            element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
          />

          {/* ✅ Protected Routes */}
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/offers" element={<Offers />} />

              {/* Food Categories */}
              <Route path="/pizza" element={<Pizza />} />
              <Route path="/burger" element={<Burger />} />
              <Route path="/pasta" element={<Pasta />} />
              <Route path="/momo" element={<Momo />} />
              <Route path="/chinese" element={<Chinese />} />
              <Route path="/cake" element={<Cake />} />
              <Route path="/shake" element={<Shake />} />
              <Route path="/sweets" element={<Sweets />} />
              <Route path="/beverages" element={<Beverages />} />

              {/* Cart */}
              <Route path="/cart" element={<Cart />} />

              {/* Food Detail Page */}
              <Route path="/food/:foodId" element={<FoodDetail />} />

              {/* 404 Fallback */}
              <Route path="*" element={<h2 style={{ padding: "20px" }}>Page Not Found</h2>} />
            </>
          ) : (
            // agar login nahi hai → sab route forcefully /login par redirect
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>

        {isLoggedIn && <Footer />}
      </Router>
    </CartProvider>
  );
}

export default App;

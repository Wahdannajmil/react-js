import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./componen/NavBar";
import { Banner } from "./componen/Banner";
import { Skills } from "./componen/Skills";
import { Projects } from "./componen/Projects";
import { Contact } from "./componen/Contact";
import { Footer } from "./componen/Footer";
import React, {useState } from 'react';
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
// import React, { Component } from "react";
// import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Article from "./Pages/Article";
// import Favorite from "./Pages/Favorit";
// import Foot from "./Components/Foot";
 
// class App extends Component {
//   render() {
//     const now = new Date();
//     const dname = now.getDay(),
//       mo = now.getMonth(),
//       dnum = now.getDate(),
//       yr = now.getFullYear();
      
//     const months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
//     const week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
//     const values = [week[dname], months[mo], dnum, yr];

//     return (
//       <Router>
//         <div>
//           <nav id="navbar" className="navbar navbar-expand-lg">
//             <div className="container-fluid">
//               <Link className="navbar-brand" to="/">
//                 WahdanFood
//               </Link>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="">
//                   <i className="fa-solid fa-bars"></i>
//                 </span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                     <Link className="nav-item nav-link" to="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-item nav-link desaible" to="/Recipes">
//                       Favorit
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-item nav-link" to="/Article">
//                       Article
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-item nav-link" to="/About">
//                       About
//                     </Link>
//                   </li>
//                 </ul>
//                 <div className="tgl">
//                   <p className="navbar-item">
//                     {values[0]} / {values[2]} / {values[1]} / {values[3]}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </nav>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/Article" element={<Article />} />
//             <Route path="/Recipes" element={<Favorite />} />
//             <Route path="/About" element={<About />} />
//           </Routes>
//         </div>
//         <Foot></Foot>
//       </Router>
//     );
//   }
// }

// export default App;
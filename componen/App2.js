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
import {Button} from "./componen/Form";
function App() {
  return (
    <div>
      <Button/>
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
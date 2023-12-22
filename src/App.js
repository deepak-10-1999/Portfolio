import React, { useState } from 'react'
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/Education" element = {<Education/>}/>
        <Route path="/Projects" element = {<Projects/>}/>
        <Route path="/Skills" element = {<Skills/>}/>
        <Route path="/Certificates" element = {<Certificates/>}/>
        <Route path="/Contact" element = {<Contact/>}/>

      </Routes>
      
    </div>
  )
}

export default App
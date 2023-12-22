import React from 'react'
import photo from '../assets/img/photo.png'
import About from './About';
import Certificates from './Certificates';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import { Link } from 'react-router-dom';
const Home = () => {

  return (
    <>
    <div className="bg-sky-800 text-white">
    <div className="max-w-[1240px]  mx-auto pt-[100px] p-[50px]  md:grid grid-cols-2">
      <div className=" col-span-1 flex flex-col  justify-center">

         <h2 className='text-3xl font-semibold'>Hello, I'm</h2>

         <h1 className='font-bold my-2 text-5xl'>
            Deepak kumar lodhi
         </h1>
         <h3 className='font-semibold text-2xl' >Web Developer</h3>
         <p className='my-2 text-justify'>
            With a passion for coding and problem-solving, I have honed my skills in various programming languages and technologies to create innovative and user-friendly web applications.

         </p>
         <button className='w-[30%] bg-black text-white p-3 rounded mt-[10px]'>Contact Me</button>
      </div>
      <div className="col-span-1 md:w-[100%] md:p-[20px]">
         <img className='h-[500px] w-full rounded-2xl' src={photo} alt="" />
      </div>
    </div>
    </div>
     <About/>
     <Education/>
     <Projects/>
     <Skills/>
     <Certificates/>
     <Contact/>
    </>
  )
}

export default Home
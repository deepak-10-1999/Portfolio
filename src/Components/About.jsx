import React from 'react'
import photo2 from '../assets/img/photo2.jpg'
import { IoPerson } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import DeepaklodhiCV from "../assets/img/DeepaklodhiCV.pdf"
const About = () => {
  return (
  <>
  <h1 className='text-center pt-[100px] font-bold text-[70px]'>About Me</h1>
  <h3 className='text-center text-[green] font-bold text-[30px]'>Introduction</h3>
   <div className="max-w-[1240px] mx-auto p-[50px] md:grid grid-cols-2 ">
    
      <div className="col-span-1 md:w-[80%]">
        <img className='rounded-2xl' src={photo2} alt="" />
      </div>


      <div className="col-sapn-1 sm-text-[10px]">
        <p>Hello! My name is Aditya Goel and I am currently pursuing my Bachlor's degree from Birla Institute of Technology, Mesra, Ranchi. I am a creative Web Developer and a determined Competitive Programmer who aims to keep pushing my limits to excel.</p>
        <hr />
        <h1 className='flex item-center p-[10px] gap-[10px]'><IoPerson className='text-2xl' /> Deepak Kumar Lodhi</h1>
        <h1 className='flex item-center p-[10px] gap-[10px]'><IoCall className='text-2xl' /> 9982094538</h1>
        <h1 className='flex item-center p-[10px] gap-[10px]'><IoMdHome className='text-2xl' /> Lakshmi Narain College teachnology</h1>
        <h1 className='flex item-center p-[10px] gap-[10px]'><IoMail className='text-2xl' /> deepak.10lodhi1999@gmail.com</h1>
        <button className='w-30% bg-black text-white p-3 rounded mt-[10px]'><a href={DeepaklodhiCV} target="blank">Download CV</a></button>
      </div>

    </div>
  </>
   
  )
}

export default About
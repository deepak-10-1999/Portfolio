import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiAppwrite } from "react-icons/si";

const Skills = () => {
  return (
    <>
    <h1 className='text-center pt-[100px] font-bold text-[70px]'>Skills</h1>
    <h2 className='text-center font-bold text-[20px] text-green-600'>My Skills</h2>
    <div className="flex flex-wrap gap-[40px] justify-evenly md:p-[50px]  max-w-[1000px] border  md:border-black rounded-3xl mx-auto">
      <div className="h-[160px] w-[180px] items-center justify-evenly  flex flex-col shadow-2xl border border-black rounded-2xl hover:bg-blue-500 hover:text-white">
      <FaHtml5 className='text-[70px]' />
        <h2 className='text-[20px]'>HTML</h2>
        </div>
      <div className="h-[160px] w-[180px] items-center justify-evenly  flex flex-col shadow-2xl border border-black rounded-2xl hover:bg-blue-500 hover:text-white">
      <DiCss3 className='text-[70px]' />
        <h2 className='text-[20px]'>CSS</h2>
        </div>
      <div className="h-[160px] w-[180px] items-center justify-evenly  flex flex-col shadow-2xl border border-black rounded-2xl hover:bg-blue-500 hover:text-white">
      <IoLogoJavascript className='text-[70px]' />
        <h2 className='text-[20px]'>Javascript</h2>
        </div>
      <div className="h-[160px] w-[180px] items-center justify-evenly  flex flex-col shadow-2xl border border-black rounded-2xl hover:bg-blue-500 hover:text-white">
      <FaReact className='text-[70px]' />
        <h2 className='text-[20px]'>React.js</h2>
        </div>
      <div className="h-[160px] w-[180px] items-center justify-evenly  flex flex-col shadow-2xl border border-black rounded-2xl hover:bg-blue-500 hover:text-white">
      <SiTailwindcss className='text-[70px]' />
        <h2 className='text-[20px]'>Tailwind Css</h2>
        </div>
      <div className="h-[160px] w-[180px] items-center justify-evenly  flex flex-col shadow-2xl border border-black rounded-2xl hover:bg-blue-500 hover:text-white">
      <FaBootstrap className='text-[70px]' />
        <h2 className='text-[20px]'>Bootstrap</h2>
        </div>
      <div className="h-[160px] w-[180px] items-center justify-evenly  flex flex-col shadow-2xl border border-black rounded-2xl hover:bg-blue-500 hover:text-white">
      <FaNodeJs className='text-[70px]' />
        <h2 className='text-[20px]'>Node.js</h2>
        </div>
      <div className="h-[160px] w-[180px] items-center justify-evenly  flex flex-col shadow-2xl border border-black rounded-2xl hover:bg-blue-500 hover:text-white">
      <SiAppwrite className='text-[70px]' />
        <h2 className='text-[20px]'>Appwrite</h2>
        </div>
    </div>
    </>
  )
}

export default Skills
import React from 'react'
import lnct from '../assets/img/lnct.png'
import career from '../assets/img/career.jpg'
import shanti from '../assets/img/shanti.png'
import trinity from '../assets/img/trinity.png'

const Education = () => {
  
  return (
    <>
    <h1 className='text-center pt-[100px] font-bold text-[70px]'>Education</h1>
    <div className="flex flex-wrap gap-[50px] justify-evenly p-[20px] max-w-[1240px] mx-auto">
      <div className="h-[200px] w-[400px] items-center flex flex-col shadow-2xl border border-black rounded-3xl hover:bg-blue-500 hover:text-white">
        <img className='w-[100px]' src={lnct} alt="" />
        <h2>Lakshmi narain college of technology</h2>
        <h2>Master of computer application:8.4 CGPA</h2>
        <h2>July 2021 - June 2023</h2>

      </div>
      <div className="h-[200px] w-[400px] items-center flex flex-col shadow-2xl border border-black rounded-3xl   hover:bg-blue-500 hover:text-white">
        <img className='w-[100px]' src={career} alt="" />
        <h2>Career College Bhopal</h2>
        <h2>B.sc (Information Technology):70%</h2>
        <h2>July 2018 - June 2021</h2>

      </div>
      <div className="h-[200px] w-[400px] items-center flex flex-col shadow-2xl border border-black rounded-3xl   hover:bg-blue-500 hover:text-white">
        <img className='w-[100px]' src={shanti} alt="" />
        <h2>Shanti Niketan high school</h2>
        <h2>Intermediate: 60%</h2>
        <h2>July 2016 - June 2018</h2>

      </div>
      <div className="h-[200px] w-[400px] items-center flex flex-col shadow-2xl border border-black rounded-3xl   hover:bg-blue-500 hover:text-white">
        <img className='w-[100px]' src={trinity} alt="" />
        <h2>Trinity Convent Sr. Sec. School</h2>
        <h2>Board: 8.2 CGPA</h2>
        <h2>July 2016 - June 2018</h2>
        
      </div>
    </div>
    </>
  )
}

export default Education
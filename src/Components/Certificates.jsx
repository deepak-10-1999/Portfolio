import React from 'react'
import frontend from "../assets/img/frontend.png"
import mern from "../assets/img/mern.png"
import { FaFilePdf } from "react-icons/fa";
import front from "../assets/img/front.pdf"
import mernpdf from "../assets/img/mernpdf.pdf"


const Certificates = () => {
  
  return (
    <>
    <h1 className='text-center pt-[100px] font-bold text-[70px]'>Certificates</h1>
    <div className="flex flex-wrap text-[15px] md:text-[20px] gap-[50px] justify-evenly p-[20px] max-w-[1240px] mx-auto">
      <div className="h-[300px] w-[500px] flex flex-col bg-slate-300 shadow-2xl overflow-hidden border border-black rounded-3xl hover:bg-blue-500 hover:text-white">
        <img className='w-[100%] h-[80%]'  src={frontend} alt="" />
        <div className="flex justify-between p-[15px] items-center ">
          <h2 className=' font-bold'>FRONT-END CRETIFICATE</h2>
          <a href={front}
          target='blank'>
          <FaFilePdf />
          </a>
          
        </div>

      </div>
      <div className="h-[300px] w-[500px] flex bg-slate-300  flex-col shadow-2xl overflow-hidden border border-black rounded-3xl   hover:bg-blue-500 hover:text-white">
        <img className='w-[100%] h-[80%] ' src={mern} alt="" />

        <div className="flex justify-between p-[15px] items-center ">
          <h2 className=' font-bold'>MERN FULL STACK DEVELOPMENT</h2>
          <a href={mernpdf}
          target='blank'>
          <FaFilePdf />
          </a>
          
        </div>

      </div>
      
    </div>
    </>
  )
}

export default Certificates
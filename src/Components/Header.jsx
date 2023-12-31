import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom";

const Header = () => {
   
   const [toggle, settoggle] = useState(false);
   
   const clickHandler =() =>{
      settoggle(!toggle)
   }
  return (
    <div className='p-4 broder shadow-xl fixed w-full bg-white'>
      <div className="max-w-[1240px] mx-auto py-[12px] flex justify-between items-center">
         <div className="text-3xl font-bold">Portfolio</div>
         
         {
            toggle?
            <AiOutlineClose onClick={() => settoggle(!toggle)} className='text-black text-2xl md:hidden block' />
            :
            <AiOutlineMenu onClick={() =>settoggle(!toggle)} className='text-black text-2xl md:hidden block' />
         }

         <ul className='hidden md:flex gap-10 text-black '>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/About">About</Link> </li>
            <li><Link to="/Education">Education</Link> </li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Certificates">Certificates</Link></li>
            <li><Link to="/Contact">Contact</Link></li>

         </ul>
         {/* {Responsive Menu} */}
         <ul className={`duration-300 md:hidden text-white fixed text-center pt-[100px] flex flex-col gap-5 bg-black top-[80px] w-full h-screen
         ${toggle ? 'left-[0]':'left-[-100%]'}`}>
             <li><Link onClick={clickHandler} to="/">Home</Link> </li>
            <li><Link onClick={clickHandler} to="/About">About</Link> </li>
            <li><Link onClick={clickHandler} to="/Education">Education</Link> </li>
            <li><Link onClick={clickHandler} to="/Projects">Projects</Link></li>
            <li><Link onClick={clickHandler} to="/Skills">Skills</Link></li>
            <li><Link onClick={clickHandler} to="/Certificates">Certificates</Link></li>
            <li><Link onClick={clickHandler} to="/Contact">Contact</Link></li>

           
         </ul>
      </div>
    </div>
  )
}

export default Header
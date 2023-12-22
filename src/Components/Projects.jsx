import React from "react";
import wstech from "../assets/img/wstech.png";
import portfolio from "../assets/img/portfolio.png"
import quiz from "../assets/img/quiz.png"
import todo from "../assets/img/todo.png"
import food from "../assets/img/food.png"

import { FaGithub } from "react-icons/fa";
import { SiRender } from "react-icons/si";

export default function Projects() {
  
  return (
    <>
      <div className="bg-sky-800 min-h-screen w-full pt-[100px] pb-[45px]">
        <div className="text-center pt-[14px]">
          <h1 className="text-3xl  my-3 text-white font-bold text-[70px] ">Projects </h1>
        </div>
        <div className="max-w-[1000px] m-auto  mt-10 flex flex-wrap justify-center gap-7 md:gap-0 ">

        <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950   rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={wstech}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[16px]">
                WsCube Tech Clone
              </h1>

              <div className="flex gap-3 text-[20px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/deepak-10-1999/Ws-Tech"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className=" p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://ws-tech.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={todo}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[17px]">
              To-Do-List App
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/deepak-10-1999/Todo_App"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className=" p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://todo-app-2y9s.onrender.com"
                    target="blank">
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[340px] md:w-[300px] m-auto md:m-4  border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={portfolio}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[17px]">
              Personal-Portfolio-Website
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/deepak-10-1999/Portfolio"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className="p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://portfolio-42w7.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded duration-1000">
            <div className="overflow-hidden h-[200px] p-1 rounded  ">
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={quiz}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[17px]">
                Quiz App
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/deepak-10-1999/Quiz-App"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className=" p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://quiz-app-pkca.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[340px] md:w-[300px] m-auto md:m-4 border border-white  bg-gray-300 hover:text-white hover:bg-sky-950 rounded">
            <div className="overflow-hidden h-[200px] p-1 rounded" >
              <img
                className="hover:scale-105 h-[190px] duration-500 "
                src={food}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <h1 className="font-bold md:text-[14px] text-[18px]">
                Food Store Web Clone
              </h1>

              <div className="flex gap-3 text-[22px]">
                <div className=" p-2 rounded w-8">
                  <a
                    href="https://github.com/deepak-10-1999/Food-Shop"
                    target="blank"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </div>

                <div className=" p-2 rounded w-8">
                  {" "}
                  <a
                    href="https://food-shop-dwna.onrender.com"
                    target="blank"
                  >
                    {" "}
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}

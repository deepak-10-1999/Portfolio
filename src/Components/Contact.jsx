import React from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiRender } from "react-icons/si";
import { IoShareSocialOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const notify = ()=>toast('✅ Form Submitted Successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  return (
    <div className=" min-h-screen bg-sky-800 pt-[100px] pb-[80px] ">
      <div className="text-center pt-[20px]">
        <h1 className="text-3xl font-bold text-[70px] my-3 text-white">Contact</h1>
      </div>

      <div className="max-w-[900px] md:flex justify-between m-auto mt-[50px] p-4 text-white">
        <div className="max-w-[400px] md:mt-[40px] mt-[-30px] ">
          <div className="h-200px border border-white rounded-2xl m-5 p-4 font-semibold">
            <h1 className="flex items-center gap-3 text-2xl ">
              <span className="text-2xl py-2 px-2 text-white  bg-sky-950 rounded-full">
                <IoShareSocialOutline />{" "}
              </span>{" "}
              Social Profile ------
            </h1>
            <div>
              <div className="flex justify-evenly my-6 text-2xl m-auto ">
                <div className=" py-3 px-3 text-black  rounded-full   bg-gray-300 hover:text-white hover:bg-sky-950 duration-500 ">
                  <a href="https://www.facebook.com/deepak.lodhi.948494" target="blank">
                    <FaFacebookF />
                  </a>
                </div>

                <div className=" py-3 px-3 text-black   rounded-full bg-gray-300 hover:text-white hover:bg-sky-950 duration-500">
                  <a
                    href="https://www.linkedin.com/in/deepak-kumar-lodhi-012584229/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className=" py-3 px-3 text-black   rounded-full bg-gray-300 hover:text-white hover:bg-sky-950 duration-500">
                  <a href="https://github.com/deepak-10-1999" target="blank">
                    <FaGithub />
                  </a>
                </div>
                <div className=" py-3 px-3 text-black   rounded-full bg-gray-300 hover:text-white hover:bg-sky-950 duration-500">
                  <a href="https://dashboard.render.com/" target="blank">
                    <SiRender />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-200px border border-white m-5 p-4 font-semibold rounded-2xl">
            <h1 className="flex items-center gap-3 text-2xl ">
              <span className="text-2xl py-2 px-2 text-white  bg-sky-950 rounded-full ">
                <SiGmail />{" "}
              </span>{" "}
              Email ------
            </h1>
            <div className="m-auto   font-semibold text-[18px] text-white    py-5 px-6  ">
              <a
                href="https://mail.google.com/mail/u/1/?ogbl#inbox?compose=new"
                target="blank"
              >
                deepak.10lodhi1999@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ......imput form.......... */}

        <div className="max-w-[500px]  border border-white rounded-2xl  ">
          <h1 className="text-center text-white font-bold text-[22px] mt-2">
            Get In Touch
          </h1>

          <div className=" max-w-[400px]  text-black text-center mt-[30px]  ">
            <form className="flex flex-col max-w-[400px] p-4 md:w-[500px]">
              <input
                type=" text"
                placeholder="Enter Name"
                className="rounded-lg py-2 px-2 mb-4 "
              />
              <input
                type=" email"
                placeholder="Enter Email"
                className="rounded-lg py-2 px-2 mb-4"
              />
              <input
                type=" number"
                placeholder="Enter Phone no."
                className="rounded-lg  py-2 px-2 mb-4"
              />

              <textarea
                name=""
                id=""
                cols="10"
                rows="4"
                placeholder="Enter Message Here..."
                className="p-2 rounded-xl "
              ></textarea>

              <div><button onClick={notify} className="border border-white  bg-gray-300 hover:text-white  m-auto hover:bg-sky-950 font-semibold  p-2 px-6 max-w-[100px] rounded-xl mt-8 mb-[10px]">
                Submit
              </button>
              <ToastContainer/></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import a from "../../public/a.jpeg";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt:12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,I'm a</h1>
              {/* <span className="text-red-700 font-bold ">Developer</span> */}
              {/* react-typed toggling  */}
              <ReactTyped className="text-red-700 font-bold "
                strings={["Developer","Programmer","Designer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm md:text-md text-justify">
              I'm a dedicated Computer Science and Engineering student.My
              passion lies in becoming proficient full stack developer ,and I'm
              driven by a keen interest indelving into UI/UX development
              ,coupled with technical skills ,I also a penchant for artistry,
              which I beleive adds a unique dimension to my approach in creating
              engaging user experiences.
            </p>
            <br />
            <div className="space-y-6 items-center flex flex-col md:flex-row justify-between">
              <div className="space-y-2">
                <h1 className="text-xl">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <IoLogoFacebook className="text-3xl cursor-pointer" />
                  </li>
                  <li>
                    <FaLinkedin className="text-3xl cursor-pointer" />
                  </li>
                  <li>
                    <FaInstagramSquare className="text-3xl cursor-pointer" />
                  </li>
                  <li>
                    <FaTelegram className="text-3xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-xl">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-100 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-100 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-100 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-100 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 m-8 md:ml-48 md:mt-20 order-1 md:order-2">
            <img src={a} alt="" className="rounded-full md:w-[400px] md:h-[400px] " />
          </div>
        </div><hr />
      </div>
      
    </>
  );
}

export default Home;

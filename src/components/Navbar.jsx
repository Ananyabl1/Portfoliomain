import React, { useState } from "react";
import a from "../../public/a.jpeg";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navitems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={a} className="h-14 w-14 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Anan<span className="text-green-800 text-2xl">y</span>a
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex list-item:none space-x-8">
              {navitems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>
        {/*mobile navbar*/}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navitems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import Mongodb from "../../public/Mongodb.png";
import Reactjs from "../../public/Reactjs.png";
import Python from "../../public/Python.png";
import MySQL from "../../public/MySQL.png";

function Portfolio() {
  const carditems = [
    {
      id: 1,
      logo: Mongodb,
      Name: "Mongodb",
      paragraph:
        "MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.",
    },
    {
      id: 2,
      logo: Reactjs,
      Name: "Reactjs",
      paragraph:
        "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    },
    {
      id: 3,
      logo: Python,
      Name: "Python",
      paragraph:
        "Python is commonly used for developing websites and software, task automation, data analysis, and data visualisation.",
    },
    {
      id: 4,
      logo: MySQL,
      Name: "MySQL",
      paragraph:
        "MySQL is a relational database management system.Databases are the essential data repository for all software applications",
    },
  ];
  return (
    <>
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="text-xl font-semibold underline">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {carditems.map(({ id, logo, Name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg hover:scale-110 duration-200 shadow-lg p-1 cursor-pointer"
              key={id}
            >
              <img
                src={logo}
                className="w-[140px] h-[140px] m-4  rounded-full border-[2px]"
                alt=""
              />
              <div className="font-bold px-6 text-xl mb-2">{Name}</div>
              {/* <div>{paragraph}</div> */}
              {/* <p></p> */}
              <div className="px-6 py-4 justify-around space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white font-bold rounded">Video</button>
                <button className="bg-green-500 hover:bg-green-700 px-4 py-2 text-white font-bold rounded">Source Code</button>
              </div>
            </div>
          ))}
        </div>
     
      </div>
      <hr />
    </>
  );
}

export default Portfolio;

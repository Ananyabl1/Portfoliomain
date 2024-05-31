import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/javascript.png";
import Reactjs from "../../public/Reactjs.png";
import MySQL from "../../public/MySQL.png";
import nodejs from "../../public/nodejs.png";
import git from "../../public/git.png";
import vscode from "../../public/vscode.png";
import dsa from "../../public/dsa.png";



function Experience() {
  const carditems = [
    {
      id: 1,
      logo: html,
      Name: "Html",
    },
    {
      id: 2,
      logo: css,
      Name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      Name: "Javascript",
    },
    {
      id: 4,
      logo: Reactjs,
      Name: "Reactjs",
    },
    {
        id: 5,
        logo: MySQL,
        Name: "MySQL",
      },
      {
        id: 6,
        logo: nodejs,
        Name: "Nodejs",
      },
      {
        id: 7,
        logo: git,
        Name: "Git",
      },
      {
        id: 8,
        logo: vscode,
        Name: "VScode",
      },
      {
        id: 9,
        logo: dsa,
        Name: "DSA",
      },


  ];
  return (
    <>
      <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {carditems.map(({ id, logo, Name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] md:w-[200px] md:h-[200px] rounded-full hover:scale-110 duration-200 shadow-lg p-1 cursor-pointer"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] rounded-full"
                alt=""
              />
              <div className="">{Name}</div>
              {/* <div>{paragraph}</div> */}
              {/* <p></p> */}
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}

export default Experience;

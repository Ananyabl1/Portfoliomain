import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 ">
          <div className="flex text-3xl items-center justify-center  space-x-3 ">
            <IoLogoFacebook />
            <FaLinkedin />
            <FaInstagramSquare />
            <FaTelegram />
          </div>
          <div className="space-x-2 pt-8 flex flex-col items-center">
            <p>&copy;2024 -All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

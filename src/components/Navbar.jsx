import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const toggleNav = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center bg-[#0a192f] px-4 text-gray-300">
      {/* Logo */}
      <div className="z-10">
        <img src={Logo} alt="Logo Picture" className="w-[50px]" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smoth={true} duration={500}>Home</Link>
        </li>
        <li><Link to="about" smoth={true} duration={500}>About</Link></li>
        <li><Link to="work" smoth={true} duration={500}>Work</Link></li>
        <li><Link to="skills" smoth={true} duration={500}>Skills</Link></li>
        <li><Link to="contact" smoth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hambugrer */}
      <div onClick={toggleNav} className="block md:hidden z-10 cursor-pointer">
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}

      <div
        className={
          nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>

      <div className="flex fixed flex-col left-0 top-[35%]  hidden md:flex">
        <ul>
          <li className="w-[160px] h-[60px] m-2 bg-[#0077B5] flex justify-between items-center ml-[-100px] hover:ml-[-10px]">
            <a
              href="https://www.linkedin.com/in/anas-elmakhloufi.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] m-2 bg-[#181717] flex justify-between items-center ml-[-100px] hover:ml-[-10px]">
            <a
              href="https://www.github/anasmak04.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] m-2 bg-[#D44638] flex justify-between items-center ml-[-100px] hover:ml-[-10px]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

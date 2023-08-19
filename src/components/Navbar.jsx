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
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  const [nav, setNav] = useState(true);
  const toggleNav = () => setNav(!nav);
  
  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center bg-[#0a192f] px-4 text-gray-300">
      {/* Logo */}
      <div className="z-10">
        {/* <img src={Logo} alt="Logo Picture" className="w-[50px]" /> */}
        <span className="text-xl  text-[#D44638] font-bolder">Anas Mak</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" spy={true} offset={50} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} offset={50} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} offset={50} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} offset={50} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            offset={50}
            smooth={true}
            duration={500}
          >
            Contact Me
          </Link>
        </li>

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
          <li>
          <Link to="home" spy={true} offset={50} smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li>
            <Link
            to="about"
              className="py-6 text-4xl"
              spy={true}
              offset={50}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
            to="work"
              className="py-6 text-4xl"
              spy={true}
              offset={50}
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="py-6 text-4xl"
              to="skills"
              spy={true}
              offset={50}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="py-6 text-4xl"
              to="contact"
              spy={true}
              offset={50}
              smooth={true}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
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

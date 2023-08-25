import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const toggleNav = () => setNav(!nav);
  const logo = "<Anas />";
  return (
    <div>
      <div className="fixed w-full h-[100px]  flex justify-between items-center bg-[#0a192f] px-4 text-gray-300">
        {/* Logo */}
        <div className="z-10">
          {/* <img src={Logo} alt="Logo Picture" className="w-[50px]" /> */}
          <span className="text-xl  text-[#D44638] font-bolder "> {logo}</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex">
          <li>
            <Link to="/" className="text-gray-300  text-xl ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 text-xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/work" className="text-gray-300 text-xl">
              Work
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-gray-300 text-xl">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 text-xl">
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Hambugrer */}
        <div
          onClick={toggleNav}
          className="block md:hidden z-10 cursor-pointer"
        >
          {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-black  flex flex-col justify-center items-center text-center"
          }
        >
          <ul>
            <li className="py-6">
              <Link to="/" className="text-4xl" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li className="py-6">
              <Link to="/about" className="text-4xl" onClick={toggleNav}>
                About
              </Link>
            </li>
            <li className="py-6">
              <Link to="/work" className="text-4xl" onClick={toggleNav}>
                Work
              </Link>
            </li>
            <li className="py-6">
              <Link to="/skills" className="text-4xl" onClick={toggleNav}>
                Skills
              </Link>
            </li>
            <li className="py-6">
              <Link to="/contact" className="text-4xl" onClick={toggleNav}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex fixed flex-col left-0 top-[35%]  hidden md:hidden lg:flex">
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
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Navbar;

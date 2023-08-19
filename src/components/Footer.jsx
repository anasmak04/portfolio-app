import { BsStackOverflow } from "react-icons/bs";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import Like from "../assets/heartemoji.png";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#0a192f]   h-[100px]">
        <div className="bg-[#0a192f] max-w-[1000px] flex justify-center items-center mx-auto  h-full w-full">
          <div className="flex flex-col">
            <div className="flex items-center justify-center space-x-2 ">
              <h2 className="text-gray-500">Made with</h2>
              <img className="w-[30px]" src={Like} alt="Like Emoji" />
              <h2 className="text-gray-500">By Me</h2>
            </div>

            <div className="flex  items-center justify-center space-x-6">
              <a href="">
                <BsStackOverflow size={20} className="text-white" />
              </a>
              <a href="">
                <FaLinkedinIn size={20} className=" text-white" />
              </a>
              <a href="">
                <FaGithub size={20} className=" text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

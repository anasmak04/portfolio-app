import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Mongo from "../assets/mongo.png";
import Github from "../assets/github.png";
import Javascript from "../assets/javascript.png";
import react from "../assets/react.png";
const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-gray-300 w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Experience
          </p>
          <p className="py-4">//these are the technologies i've worked with</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8">
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Html} className="w-20 mx-auto" alt="icon" />
            <p className="my-4">html</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Css} className="w-20 mx-auto" alt="icon" />
            <p className="my-4">Css</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Javascript} className="w-20 mx-auto" alt="icon" />
            <p className="my-4">Javascript</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Mongo} className="w-20 mx-auto" alt="icon" />
            <p className="my-4">Mongo</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} className="w-20 mx-auto" alt="icon" />
            <p className="my-4">Github</p>
          </div>

          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} className="w-20 mx-auto" alt="icon" />
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { data } from "../data/data.js";
import WorkImg from "../assets/workImg.jpeg";
const Work = () => {
  return (
    <div name="work" className="w-full bg-[#0a192f] md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
      <p className="capitalize text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">work</p>
        <p className="py-6">// check out some my recent work</p>
      </div>
      </div>

      <div style={{backgroundImage: `url(${WorkImg})`}}
       className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="shadow-ld shadow-[#0f0c16] group container rounded-md flex justify-center items-center ms-auto content-div">
  
          <div className="">
            <span></span>
            <div className="">
            <a href="/">
              <button></button>
            </a>
            <a href="/">
              <button></button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

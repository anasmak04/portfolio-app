import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px]  mx-auto flex flex-col justify-center px-8 h-full space-y-4  text-white capitalize">
        <p className="text-pink-600 ">Hi , My name is</p>
        <h1 className="text-4xl sm-text-7xl font-bold text-[#ccd6f6]">
          Anas Elmakhloufi
        </h1>
        <h2 className="text-4xl sm-text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Devloper .
        </h2>
        <p className=" text-[#8892b0] max-w-[700px]">
          I'm a full stack developer specializing in building occasinally
          designin exceptional digital experiences . currently , i'm focused on
          building responsive full stack web application
        </p>
        <div className="">
          <button className="group flex items-center border-2 px-8 py-3 hover:bg-pink-600 hover:border-white">
            view work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

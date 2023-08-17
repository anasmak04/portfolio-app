import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px]  mx-auto flex flex-col justify-center px-8 h-full space-y-4  text-white capitalize">
        <p className="text-[#FF7F50] ">Hi , My name is</p>
        <h1 className="text-4xl sm-text-7xl font-bold text-[#ccd6f6]">
          Anas Elmakhloufi
        </h1>
        <h2 className="text-4xl sm-text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Devloper .
        </h2>
        <p className=" text-[#8892b0] max-w-[700px]">
        I am excited about the opportunity to contribute my skills and knowledge to create impactful software solutions that drive business growth and enhance user experiences. If you're looking for a dedicated software engineer who is passionate about delivering high-quality code and exceeding expectations, I would love to connect and discuss potential collaborations.
        </p>
        <div className="">
          <button className="group flex items-center border-2 px-8 py-3 hover:bg-[#FF7F50] hover:border-white">
            <Link to="work" smoth={true} duration={500}>
              view work
            </Link>
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

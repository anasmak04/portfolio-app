import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols2 gap-8">
          <div className="text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FF7F50]">
              About
            </p>
          </div>

          <div></div>

          <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2  gap-8">
            <div className="text-4xl font-bold capitalize sm:text-right placeholder:">
              <p className="">
                Hi im anas nice to meet you please take a look around
              </p>
            </div>

            <div>
              <p>
                {" "}
                I am passionate about building excelent software . 
                I have a strong background in developing robust and scalable software solutions, specializing in web applications
                 I would love to connect and discuss potential collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

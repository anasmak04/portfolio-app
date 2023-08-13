import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols2 gap-8">
          <div className="text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
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
                I am passionate about building excelent software that omproves
                the lives of those around me i specialize in creating software
                for clients ranging for individuals and small-buisness all the
                way to large entreprise coporations what would you do if you had
                a software expert available at your finance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

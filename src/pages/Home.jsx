import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="home-container flex flex-col md:flex-row m-auto border-1 border-black w-[98vw] md:w-[90vw] mt-2">
        <div className="home-p-1 w-full md:w-[45vw] h-auto md:h-[90vh] text-white flex flex-col items-center bg-black ">
          <p className="mt-10 md:mt-[170px] mb-[10px] ml-0 md:ml-[-250px] text-orange-400 text-center md:text-left">
            Hello!
          </p>
          <p className="text-[40px] md:text-[80px] ml-0 md:ml-[120px] text-center md:text-left">
            I'm <span className=" text-orange-400 font-medium"> Anurag</span>
          </p>
          <p className="text-[28px] md:text-[50px] ml-0 md:ml-[-30px] pt-0 text-orange-400 font-medium text-center md:text-left">
            Choudhary
          </p>

          <li className="mt-6 md:mt-10 ml-0 md:ml-[60px] text-[18px] md:text-[30px] list-none text-center md:text-left">
            Frontend Web Developer
          </li>

          <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
            <Link
              to="/skills"
              className="home-btn skills px-9.5 py-2 rounded-3xl font-bold text-lg border-2 ml-[9px]
              border-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-300"
            >
              SKILLS
            </Link>

            <span>
              <Link
                to="/projects"
                className="home-btn works px-4 py-2 rounded-3xl font-bold text-lg ml-2 border-2
                border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                MY WORKS
              </Link>
            </span>
          </div>
        </div>
        <div className="home-p-2 w-full md:w-[45vw] h-auto md:h-[90vh] flex justify-center items-center overflow-hidden mt-8 md:mt-0">
          <img
            className="w-[90vw] md:w-[800px] max-w-full h-auto object-contain border-4 border-black"
            src="/picofme.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Home;

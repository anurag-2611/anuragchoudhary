import React from "react";

export const About = () => {
  return (
    <div className="about-main h-[70vh] w-[110vh] rounded-2xl m-auto mt-16 flex justify-center items-center border-2 flex-row animate-fadein ">
      <div className="about-p1 w-[50%] h-full ">
        {" "}
        <img
          className="w-[350px] mx-5 overflow-hidden "
          src="/picofme-2.png"
          alt=""
        />
      </div>

      <div className="about-p2 w-[50%] h-full">
        <h1 className="text-center text-2xl mt-6 font-semibold text-orange-500 ">
          About me
        </h1>
        <p className="text-sm p-5 mt-1 font-lighter text-gray-300 ">
          Opportunities don't happen, you create them and I am creating
          Opportunities for me.
        </p>
        <ul className="text-[18] p-5 pt-0">
          <li className="font-bold mt-4">
            Name :{" "}
            <span className="text-[16] text-gray font-normal ml-6">
              Anurag Choudhary
            </span>
          </li>
          <li className="font-bold mt-4">
            Date of Birth :{" "}
            <span id="db" className="text-[16] text-gray font-normal ml-6">
              26-November-2004
            </span>
          </li>
          <li className="font-bold mt-4">
            Address :{" "}
            <span className="text-[16] text-gray font-normal ml-8">
              kelod,dewas
            </span>
          </li>
          <li className="font-bold mt-4">
            Pin code :{" "}
            <span className="text-[16] text-gray font-normal ml-8">455001</span>
          </li>
          <li className="font-bold mt-4">
            Email :{" "}
            <span id="email" className="text-[12] text-gray font-normal ml-2 ">
              anuragchoudhary126@gmail.com
            </span>
          </li>
          <li className="font-bold mt-4">
            Phone :{" "}
            <span className="text-[16] text-gray font-normal ml-6">
              +91 8319038102
            </span>
          </li>
        </ul>
        <p id="project" className="text-orange-500 text-2xl px-5">
          13<span className="text-white"> Projects</span>
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          // rel="noopener noreferrer"
          className="center px-6 py-2 mt-2 ml-35 border-2 border-orange-500 hover:bg-orange-500 hover:border-none rounded-4xl text-center inline-block"
        >
          Resume
        </a>

      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein {
          animation: fadein 0.7s both;
        }
        `}</style>
    </div>
  );
};

import React from "react";

export const Skills = () => {
  return (
    <div className="skills-main min-h-[80vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-black py-10 px-2 mb-20">
      <h1 className="skill-heading pb-2 text-4xl md:text-4xl font-bold text-black mb-20 text-center tracking-wide">
        My Skills
      </h1>
      <p className="center font-xxl p-3 mt-[-70px] text-black">
        Hear some skills that I learned for web Development 👍
      </p>
      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein">
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">HTML</h2>
          <p className="text-gray-300">
            Proficient in creating semantic and accessible HTML structures.
          </p>
        </div>
        <div
          className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">CSS</h2>
          <p className="text-gray-300">
            Experienced in styling web pages with CSS, including Flexbox and
            Grid layouts.
          </p>
        </div>
        <div
          className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            JavaScript
          </h2>
          <p className="text-gray-300">
            Skilled in writing clean and efficient JavaScript code for dynamic
            web applications.
          </p>
        </div>
        <div
          className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">React</h2>
          <p className="text-gray-300">
            Proficient in building interactive user interfaces using React.js
          </p>
        </div>
        <div
          className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            Node.js
          </h2>
          <p className="text-gray-300">
            Experienced in server-side development with Node.js and Express.
          </p>
        </div>
        <div
          className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein"
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">SQL</h2>
          <p className="text-gray-300">
            Knowledgeable in SQL for database management and data manipulation.
          </p>
        </div>
        <div
          className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein"
          style={{ animationDelay: "0.6s" }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            REST APIs
          </h2>
          <p className="text-gray-300">
            Knowledgeable in designing and consuming RESTful APIs for data
            exchange.
          </p>
        </div>
        <div
          className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein"
          style={{ animationDelay: "0.7s" }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">Git</h2>
          <p className="text-gray-300">
            Familiar with version control using Git for collaborative
            development.
          </p>
        </div>
        <div
          className="skill-card bg-[#000000] border border-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform animate-fadein"
          style={{ animationDelay: "0.8s" }}
        >
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            Responsive Design
          </h2>
          <p className="text-gray-300">
            Experienced in creating responsive web designs that work across
            various devices and screen sizes.
          </p>
        </div>
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

import React from "react";

export const Projects = () => {
  return (
    <div className="projects-main min-h-[80vh] w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-black py-10 px-2">
      <h1 className="text-4xl md:text-4xl font-bold text-black mb-6 text-center tracking-wide">
        My Projects
      </h1>
      <p className="text-center text-lg mb-10 text-gray-800 max-w-2xl px-7">
        Here are some of the projects I have worked on:
      </p>
      <div
        className="projects-list flex flex-col items-center w-full"
        style={{ maxWidth: "70vw", margin: "0 auto" }}
      >
        {[
          {
            title: "Portfolio Website",
            desc: "A personal portfolio website showcasing my skills and projects.",
          },
          {
            title: "Tic Tac Toe",
            desc: "A simple tic tac toe game built with JavaScript.",
          },
          {
            title: "Weather App",
            desc: "A weather application that fetches data from a weather API.",
          },
          {
            title: "Bubble Game",
            desc: "A fun bubble popping game built with JavaScript.",
          },
          {
            title: "To-Do App",
            desc: "A simple To-Do list application to manage tasks.",
          },
          {
            title: "Calculator",
            desc: "A basic calculator application built with HTML, CSS, and JavaScript.",
          },
          {
            title: "Twitter Clone",
            desc: "A clone of Twitter with basic functionalities like posting tweets and following users.",
          },
        ].map((project, idx) => (
          <div
            key={project.title}
            className="project-item bg-[#000000] border border-orange-300 rounded-2xl p-6 shadow-lg mb-8 w-full transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-orange-500 hover:shadow-2xl animate-fadein"
            style={{
              animationDelay: `${idx * 0.08}s`,
              animationDuration: "0.7s",
              animationFillMode: "both",
            }}
          >
            <h2 className="text-2xl font-semibold text-orange-400 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300">{project.desc}</p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadein {
          animation-name: fadein;
        }
      `}</style>
    </div>
  );
};

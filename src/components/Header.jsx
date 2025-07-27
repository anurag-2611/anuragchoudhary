import React, { useState } from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Project" },
    { to: "/myblog", label: "My Blog" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <>
      <div className="nav w-[98vw] md:w-[90vw] m-auto p-4 md:p-5 bg-black text-white flex flex-wrap items-center justify-between ">
        <div className="part-1 pl-4 md:pl-[4rem]">
          <h3 className="text-xl md:text-2xl font-bold">
            ANURAG.<span className="text-orange-400">com</span>
          </h3>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl pr-4 "
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
        {/* Navigation links */}
        <div
          className={`part-2 flex-col md:flex md:flex-row gap-6 md:gap-10 pr-0 md:pr-[5rem] w-full md:w-auto left-0 md:static absolute top-[70px] z-40 transition-all duration-300 ease-in-out md:bg-transparent ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
          style={
            menuOpen
              ? {
                  background: "rgba(0, 0, 0, 0.8) ",
                  borderRadius: "2rem 2rem 2rem 2rem",
                  border: "2px solid white",
                  padding: "2rem 1rem 2.5rem 2rem",
                  marginTop: "0.5rem",
                  backdropFilter: "blur(20px)",
                }
              : {}
          }
        >
          {navLinks.map((link) => (
            <div className="nav-element" key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={
                  location.pathname === link.to
                    ? " border-b-3 border-orange-400 pb-1 "
                    : ""
                }
                aria-current={
                  location.pathname === link.to ? "page" : undefined
                }
              >
                {link.label}
                {location.pathname === link.to && (
                  <span>
                    
                  </span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

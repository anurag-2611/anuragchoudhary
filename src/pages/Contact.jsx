import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-600 py-10 px-4 ">
      <div className="max-w-2xl w-full bg-white border border-blue-300 rounded-3xl shadow-2xl p-8 md:p-12 animate-fadein">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center tracking-wide drop-shadow">
          Contact Me
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-6">
              Contact Info
            </h2>
            <ul className="text-gray-700 text-base space-y-2">
              <li className="mb-4">
                <span className=" font-semibold text-blue-500">Email:</span>{" "}
                anuragchoudhary126@gmail.com
              </li>
              <li className="mb-4">
                <span className="font-semibold text-blue-500">Phone:</span> +91
                8319038102
              </li>
              <li>
                <span className="font-semibold text-blue-500">Address:</span>{" "}
                607 m.n.kelod, Dewas road, Dewas
              </li>
            </ul>
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-blue-600 mb-6">
                Follow Me
              </h2>
              <ul className="flex flex-wrap gap-4 mt-2">
                <li>
                  <a
                    href="https://github.com/anurag-2611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900 font-semibold transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/anuuragg?igsh=MWEzM3l6ZG84dDdxcA==&utm_source=ig_contact_invite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900 font-semibold transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anurag-choudhary-a32a66325/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900 font-semibold transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pr-5">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Send a Message
            </h2>
            <form className="flex flex-col gap-4 w-[90%]">
              <input
                type="text"
                placeholder="Your Name"
                className="text-black rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="text-black rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="text-black rounded-lg border border-blue-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
              <button
                type="submit"
                onSubmit={(e) => {
                    // Handle form submission logic here
                    console.log(e.target.value);
                }}
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded-lg transition-colors duration-200 shadow"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>©2025 Anurag Choudhary. All rights reserved.</p>
          <p>Designed by Anurag Choudhary</p>
        </div>
      </div>
      <style>{`
        .animate-fadein {
          animation: fadein 0.7s;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

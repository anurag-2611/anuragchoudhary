import React from "react";
import { useState } from "react";

export const Footer = () => {
  const [email, setemail] = useState("anuragchoudhary126@gmail.com");
  const [phone, setphone] = useState("+91 8319038102");
  const [address, setaddress] = useState("607 m.n.kelod,Dewas road,Dewas");
  return (
    <>
      <hr className="mt-20" />
      <div className="footer bg-black text-white p-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 m-auto w-[95vw] md:w-[80vw] items-start">
        <div className="footer-p1 w-full flex flex-col justify-start items-start border-2 border-black p-4 ">
          <h2 className="m-0 text-2xl text-white font-bold py-4 pb-10 ">
            Contact Info
          </h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
        <div className="footer-p2 w-full flex flex-col justify-start items-start border-2 border-black p-4 ml-14">
          <ul className="social-links ">
            <h2 className="py-4 text-2xl text-white font-bold pb-10">
              Follow on
            </h2>
            <li>
              <a
                href="https://github.com/anurag-2611"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Hub
              </a>
            </li>
            <li>
              <a
                href="https://www.snapchat.com/add/anurag_26114?share_id=elaG20Tq0T4&locale=en-IN "
                target="_blank"
                rel="noopener noreferrer"
              >
                Snapchat
              </a>
            </li>
            <li>
              <a
                href=" https://www.instagram.com/anuuragg?igsh=MWEzM3l6ZG84dDdxcA==&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anurag-choudhary-a32a66325/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-p3 w-full flex flex-col justify-start items-start border-2 border-black p-4">
          <h2 className="py-4 text-2xl text-white font-bold pb-10">Legal</h2>
          <p> @2025 Anurag Choudhary. All rights reserved.</p>
          <p>Designed by Anurag Choudhary</p>
        </div>
      </div>
    </>
  );
};

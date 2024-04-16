import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from "../../Components/Navbar";

function Aboutus() {
  // The URL to be shared

  return (
    <>
      {/* Navbar Component to Navigate */}
      <Navbar />

      {/* Main Content */}
      <div className="items-center justify-center ml-[10vw] mr-[10vw] mt-[5vw]">
        <h1 className="font-bold text-3xl text-center md:text-4xl mb-[2vw]">
          " Welcome to Resume Builder! "
        </h1>
        <br></br>
        <p className="mt-15 text-xl justify-center">
          At Resume Builder, we understand the importance of crafting a
          compelling resume that effectively showcases your skills, experiences,
          and achievements. Our mission is to empower individuals like you to
          create professional resumes effortlessly, enabling you to stand out in
          today's competitive job market. We believe that everyone deserves
          access to tools that help them succeed in their career endeavors.
          That's why we strive to make our resume builder accessible,
          affordable, and intuitive for users of all backgrounds and skill
          levels.
          <br style={{ marginTop: "5px" }} />
          <ul>
            <li>1. Our cutting-edge resume builder app. </li>
            <li>
              2. Specialized resume templates and examples crafted by certified
              resume writers.
            </li>
            <li>3. Advice from industry recruiters and career coaches. </li>
          </ul>
          <br />
          The Resume Builder app shows you how to make an ideal resume,
          including what keywords and relevant experience you should use.
        </p>

        <h2 className="mt-20 font-bold text-xl text-center">
          Share with Your Friends.
        </h2>

        {/* Pesonal social Media buttons */}
        <div className="mt-8 flex justify-center ">
          <div
            className="hover:scale-110 transition duration-300"
            style={{ marginRight: "2vh" }}
          >
            {/*Github Profile*/}
            <a
              href="https://github.com/RohitPundir98"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub className="buttonIcons" size={40} round={true} />
            </a>
          </div>
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/rohit-pundir-21b551285/"
            rel="noreferrer"
            target="_blank"
            style={{ marginRight: "2vh" }}
            className="hover:scale-110 transition duration-300"
          >
            <FaLinkedin className="buttonIcons" size={40} round={true} />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/rohit_.pundir/?next=%2F"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-110 transition duration-300"
            style={{ marginRight: "2vh" }}
          >
            <FaInstagram className="buttonIcons" size={40} round={true} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Aboutus;

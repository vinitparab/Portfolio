
import { Github, Linkedin, FileUser, Hand } from "lucide-react";
import React from "react";

const HandleGithub = ()=>{
  window.open("https://github.com/vinitparab", "_blank");
}
const HandleLinkedin = ()=>{
  window.open("https://www.linkedin.com/in/vinit-parab-339b57253/", "_blank");
}
const HandleResume = ()=>{
  window.open("https://drive.google.com/file/d/1i82Q0J6b5o36m34W2xM488Z85xg8QO1R/view?usp=sharing", "_blank");
}

const Hero = ({sectionRef}) => {
  return (
    <div ref={sectionRef} className="pt-20 bg-blue-100 w-full h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
      <h1 className="text-center text-7xl font-bold text-blue-500">
        Hello, I'm Vinit Parab
      </h1>
      <p className="text-center text-2xl mt-4 text-blue-500 font-semibold">
        Aspiring Full Stack Developer
      </p>
      <p className="mt-6 text-center text-[20px] text-gray-700 max-w-2xl px-4">
        Fresh graduate passionate about creating innovative web solutions and
        eager to start my journey in tech.
      </p>
      <div className="mt-[2.5rem] flex justify-center gap-4 items-center">
        <button
          className="  border-2 border-blue-500 rounded-[10px] px-4 py-2 text-white font-semibold bg-blue-500 h flex gap-3 justify-between items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          onClick={HandleGithub}
        >
          <Github />
          Github
        </button>
        <button
          className="  border-2 border-blue-500 rounded-[10px] px-4 py-2 text-white font-semibold bg-blue-500 h flex gap-3 justify-between items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          onClick={HandleLinkedin}
        >
          <Linkedin />
          Linkedin
        </button>
        <button
          className="  border-2 border-blue-500 rounded-[10px] px-4 py-2 text-white font-semibold bg-blue-500 h flex gap-3 justify-between items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          onClick={HandleResume}
        >
          <FileUser />
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;

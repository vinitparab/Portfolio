import React from 'react';

const NavBar = ({ onScroll, homeRef, aboutRef, skillsRef, projectsRef }) => {
  return (
    <div className="bg-blue-950 w-full h-20 flex justify-between items-center sticky top-0 z-50">
      <div className="p-4 ml-10">
        <h1 className="font-bold text-white text-2xl">Vinit Parab</h1>
      </div>
      <div className="flex mr-10 p-4">
        <ul className="flex justify-between items-center gap-10 font-semibold text-white text-[20px]">
          <li
            onClick={() => onScroll(homeRef)}
            className="hover:underline decoration-white underline-offset-4 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => onScroll(projectsRef)}
            className="hover:underline decoration-white underline-offset-4 cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => onScroll(aboutRef)}
            className="hover:underline decoration-white underline-offset-4 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => onScroll(skillsRef)}
            className="hover:underline decoration-white underline-offset-4 cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
            }
            className="hover:underline decoration-white underline-offset-4 cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

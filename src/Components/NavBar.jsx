import React from 'react'

const NavBar = ({onScroll , aboutRef ,skillsRef,homeRef}) => {
  return (
    <>
      <div className="bg-blue-600 width-full h-20 flex justify-between items-center sticky top-0 z-50 ">
        <div className="p-4 ml-10">
          <h1 className="font-bold text-white text-2xl">Vinit Parab</h1>
        </div>
        <div className="flex mr-10 p-4">
          <ul className="flex justify-between items-center gap-10 mr-10 font-semibold text-white text-[20px]  ">
            <li
              onClick={() => onScroll(homeRef)}
              className="hover:underline decoration-white-500 underline-offset-4"
            >
             Home
            </li>
            <li className="hover:underline decoration-white-500 underline-offset-4">
              Projects
            </li>
            <li
              onClick={() => onScroll(aboutRef)}
              className="hover:underline decoration-white-500 underline-offset-4"
            >
             About
            </li>
            <li onClick={() => onScroll(skillsRef)} className="hover:underline decoration-white-500 underline-offset-4">
            Skills
            </li>
            <li  className="hover:underline decoration-white-500 underline-offset-4">
             Contact Us
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar

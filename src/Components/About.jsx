import React from 'react'

const About = ({sectionRef}) => {
  return (
    <>
      <div ref={sectionRef} className=" pt-20 w-full h-[45.5rem] bg-blue-600 px-6 py-10   ">
        <h1 className="text-5xl font-bold text-white text-center mb-10 mt-10">
          About Me
        </h1>
        <div className="flex flex-col gap-5">
          <div className=" w-[50rem] ml-[20rem]  text-white text-[19px] mt-5">
            I'm a passionate and motivated fresh graduate with a strong
            foundation in web development and design. I love learning new
            technologies and building projects that solve real problems with
            clean, efficient code.
          </div>
          <div className=" w-[50rem] ml-[20rem]  text-white text-[19px] mt-5">
            During my studies, I've worked on various academic projects and
            personal side projects to strengthen my skills. I'm eager to
            contribute to innovative teams and grow as a developer while making
            meaningful impact.
          </div>
        </div>
        <div className="flex  gap-5 mt-10 justify-between items-center w-[35rem] ml-[20rem] ">
          <div>
            <h1 className="text-white font-bold">Status</h1>
            <p className="text-gray-200 font-semibold">Fresh Graduate</p>
          </div>
          <div>
            <h1 className="text-white font-bold">Projects</h1>
            <p className="text-gray-200 font-semibold">Academic & Personal</p>
          </div>
        </div>

        <div className="flex  gap-5 mt-10 justify-between items-center w-[35rem] ml-[20rem] ">
          <div>
            <h1 className="text-white font-bold">Focus</h1>
            <p className="text-gray-200 font-semibold">
              Full Stack Development
            </p>
          </div>
          <div className="mr-[27px]">
            <h1 className="text-white font-bold">Goal</h1>
            <p className="text-gray-200 font-semibold">First Opportunity</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About

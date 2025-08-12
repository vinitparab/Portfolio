import React from 'react';
import { Code, GitBranch, Server ,Brain } from 'lucide-react';

const Skills = ({sectionRef}) => {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Learning to build responsive web applications with modern frameworks and technologies.",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
      level: "Learning",
    },
    {
      id: "tools",
      title: "Development Tools",
      description: "Getting comfortable with essential development tools and version control systems.",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Terminal"],
      level: "Beginner",
    },
    {
      id: "backend", 
      title: "Backend Development",
      description: "Starting to explore server-side programming and database interactions.",
      icon: Server,
      skills: ["Node.js", "Basic APIs"],
      level: "Learning",
    },
  

    
  ];
const LearningSkills = ["TypeScript", "Tailwind CSS", "Database Design", "REST APIs", "Testing"];
  return (
    <>
      <div
        ref={sectionRef}
        className=" pt-20 w-auto h-auto bg-blue-950 text-white py-10"
      >
        <h1 className="text-5xl font-bold text-center mt-10">
          Skills & Learning Journey
        </h1>
        <p className="text-center mt-5 w-[50rem] ml-[23rem] text-[1.2rem]">
          As a fresh graduate, I'm building my foundation in web development and
          excited to grow my technical skills through hands-on projects and
          continuous learning.
        </p>

        <div className="grid grid-cols-3 justify-items-center gap-8 m-[5rem]">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="h-[250px] w-[400px] rounded-2xl bg-blue-600 hover:shadow-5xl  hover:scale-105  transition-all duration-300 "
            >
              <div className="flex flex-col px-5 py-5">
                <category.icon size={38} />
                <h1 className="mt-[1rem] font-bold">{category.title}</h1>
                <p className="mt-[1rem]">{category.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 px-2 mt-2 ">
                {category.skills.map((skill, index) => (
                  <h5
                    key={index}
                    className="hover:border rounded-2xl px-3 py-1 bg-blue-500 hover:bg-blue-950 cursor-pointer text-sm"
                  >
                    {skill}
                  </h5>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[200px] w-[83rem] border-2 border-blue-600 bg-blue-600 rounded-xl  flex flex-col items-center gap-4 ">
            <h2 className="mt-8 font-semibold text-2xl">Next Learning Goals</h2>
            <p className="w-1/2 text-center text-gray-200">
              I'm excited to expand my skills and dive deeper into these
              technologies as I continue my development journey.
            </p>
            <div className="flex gap-4">
              {LearningSkills.map((skill, index) => {
                return (
                  <h5
                    key={index}
                    className="hover:border rounded-2xl px-3 py-1 bg-blue-500 hover:bg-blue-950 cursor-pointer text-sm"
                  >
                    🎯{skill}
                  </h5>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

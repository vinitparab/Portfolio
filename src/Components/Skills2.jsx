// components/Skills.jsx
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact className="text-3xl text-blue-500" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-3xl text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-3xl text-blue-400" /> },
  { name: 'JavaScript', icon: <FaJs className="text-3xl text-yellow-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-3xl text-red-500" /> },
  { name: 'Python', icon: <FaPython className="text-3xl text-blue-600" /> },
];

const Skills = () => {
  return (
    <div className="bg-gray-100 py-12" id="skills">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-32 h-32 bg-white shadow-md rounded-xl flex flex-col justify-center items-center p-4 hover:shadow-lg transition-all duration-300"
          >
            {skill.icon}
            <p className="mt-2 text-sm font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

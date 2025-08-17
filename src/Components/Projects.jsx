import { ExternalLink, Github } from 'lucide-react';
import React from 'react';

const Projects = ({ sectionRef }) => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS'],
      demo: 'https://functionalweb3portfolio.netlify.app',
      code: 'https://github.com/vinitparab/portfolio',
    },
    {
      title: 'Diabetic Retinopathy Detection',
      description:
        'Deep learning-based system using CNN to detect diabetic retinopathy from retinal images. Deployed with Django full-stack and AWS.',
      tech: ['Python', 'Django', 'CNN', 'AWS'],
      demo: 'https://yourdiabeticretinopathyapp.vercel.app',
      code: 'https://github.com/yourusername/diabetic-retinopathy',
    },
    {
      title: 'Employee Management System',
      description:
        'A full-stack web application to manage employees, roles, and departments. Features authentication, CRUD operations, and dashboard analytics.',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      demo: 'https://youremployeems.vercel.app',
      code: 'https://github.com/yourusername/employee-management-system',
    },
  ];

  return (
    <div ref={sectionRef} className="w-full bg-blue-900 h-auto scroll-mt-20">
      {/* Header */}
      <div className="flex justify-center items-center flex-col py-[2rem] gap-[2rem]">
        <h1 className="text-5xl text-white font-bold">Featured Projects</h1>
        <p className="text-white text-[20px] w-1/2 text-center">
          A showcase of my academic and personal projects demonstrating practical
          application of web development skills
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12 pb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f172a] text-white rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-2xl transition flex flex-col"
          >
            {/* Preview Area */}
            <div className="h-40 bg-gray-800 flex items-center justify-center">
              <ExternalLink size={48} className="text-gray-400" />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-1 min-h-[220px]">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 
                               bg-gray-800 hover:bg-blue-600 hover:scale-105 
                               transition-transform transition-colors duration-300 
                               px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 
                               bg-gray-800 hover:bg-green-600 hover:scale-105 
                               transition-transform transition-colors duration-300 
                               px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

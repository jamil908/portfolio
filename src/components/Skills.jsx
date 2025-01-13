import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import Reveal from "./Reveal";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Tailwind", icon: <RiTailwindCssFill className="text-pink-600" /> },
      { name: "DaisyUI", icon: <SiDaisyui className="text-blue-400" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[900px] mx-auto flex flex-col justify-center px-6 py-12 text-gray-200"
      id="skills"
    >
      <Reveal>
      
        <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          My Skills
        </h2>
        <p className="text-center text-lg mb-10 text-gray-300">
          Below are some of the technologies I have worked with across various frontend and fullstack projects.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group border border-gray-700 p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 w-full md:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-200 group-hover:text-pink-500">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2  md:space-x-4 bg-gray-800/80  p-2 md:p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <span className="text-4xl">{tech.icon}</span>
                    <span className="text-lg font-semibold">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;

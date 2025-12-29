import React, { useRef } from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiTypescript } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      { name: "Typescript", icon: <SiTypescript className="text-blue-500" /> },
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
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.from(".skill-title", {
        scrollTrigger: {
          trigger: ".skill-title",
          start: "top 90%",
        },
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".skill-desc", {
        scrollTrigger: {
          trigger: ".skill-desc",
          start: "top 90%",
        },
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      // Animate each category separately
      skills.forEach((_, index) => {
        const categoryClass = `.skill-category-${index}`;
        const itemsClass = `${categoryClass} .skill-item`;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: categoryClass,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(categoryClass, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        });

        // Removed item-level opacity animation to ensure visibility.
        // Items will simply appear with their parent category.
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="max-w-[1000px] mx-auto flex flex-col justify-center px-6 py-20 text-gray-200"
      id="skills"
    >
      <h2 className="skill-title text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        My Arsenal
      </h2>
      <p className="skill-desc text-center text-lg mb-16 text-gray-400 max-w-2xl mx-auto">
        Tools and technologies I leverage to build robust, scalable, and beautiful web applications.
      </p>

      <div className="space-y-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-category skill-category-${index} w-full`}
          >
            <h3 className="text-3xl font-bold mb-8 text-center md:text-left text-gray-100 border-l-4 border-purple-500 pl-4">
              {skill.category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skill.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="skill-item group flex flex-col items-center justify-center p-6 bg-gray-800/40 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                >
                  <span className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

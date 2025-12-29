import React from 'react';
import { motion } from 'framer-motion';
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact, DiMongodb } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiTypescript } from 'react-icons/si';
import { FaCode, FaProjectDiagram, FaCoffee, FaUsers } from 'react-icons/fa';
import { Link } from 'react-scroll';

const EnhancedAbout = () => {
  const stats = [
    { icon: <FaProjectDiagram />, number: "15+", label: "Projects Completed" },
    { icon: <FaCode />, number: "2+", label: "Years Experience" },
    { icon: <FaCoffee />, number: "500+", label: "Cups of Coffee" },
    { icon: <FaUsers />, number: "10+", label: "Happy Clients" },
  ];

  const techStack = [
    { name: "React", icon: <DiReact className="text-blue-400" />, level: 90 },
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" />, level: 85 },
    { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" />, level: 80 },
    { name: "MongoDB", icon: <DiMongodb className="text-green-600" />, level: 75 },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 70 },
    { name: "Express", icon: <SiExpress className="text-gray-400" />, level: 80 },
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-20 px-6" id="about">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate Full Stack Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hi there! 👋 I'm a dedicated Computer Science and Engineering student with a passion for 
              creating innovative web solutions. I specialize in the MERN stack and love turning complex 
              problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development started with curiosity and has evolved into a deep passion 
              for building applications that make a difference. I'm constantly learning new technologies 
              and best practices to stay at the forefront of web development.
            </p>
          </div>

          {/* Skills Progress Bars */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground mb-4">Technical Expertise</h4>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-foreground font-medium">{tech.name}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">{tech.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="text-3xl text-purple-500 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6"
          >
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Ready to collaborate?
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              I'm always excited to work on new projects and bring ideas to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedAbout;
import React from "react";
import { motion } from "framer-motion";
import educationData from "/public/educationData.json";

const Education = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto py-16 px-4 md:px-8"
      id="education"
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Education
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: edu.id * 0.2 }}
            className="relative group bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-lg shadow-lg p-6 border border-purple-400 hover:border-pink-500 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            <h3 className="text-2xl font-bold text-purple-400 group-hover:text-pink-500 transition-colors duration-300">
              {edu.degree}
            </h3>
            <p className="text-gray-300 text-lg mt-2">{edu.institution}</p>
            <p className="text-gray-400 text-sm italic">{edu.duration}</p>
            <p className="text-gray-300 mt-4">{edu.description}</p>
            <motion.div
              className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Highlight
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;

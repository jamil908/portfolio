import React from "react";
import profilepic from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[1200px] pt-24 mx-auto px-6 md:px-12 relative overflow-hidden">
      {/* Main Content */}
      <div className="grid md:flex place-items-center  md:justify-between  gap-8">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <TypeAnimation
            sequence={[
              "Junior",
              1000,
              "Mernstack Developer",
              1000,
              "Webdesigner",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            repeat={{ Infinity }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Jamil Hossain</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-2xl max-w-md mx-auto md:mx-0 mb-6"
          >
            I am a junior{" "}
            <span className="text-purple-300 font-bold">Mernstack</span>{" "}
            developer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              href="/MD_Jamil_Hossain_Front-end_web-developer (2).pdf"
              download="MD_Jamil_Hossain_Front-end_web-developer (2).pdf"
              className="z-10 cursor-pointer font-bold text-gray-200 text-sm md:text-base lg:text-lg px-4 py-2 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.a>

            <div className="flex gap-6 text-3xl sm:text-4xl md:text-5xl text-purple-400">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/jamil-hossain-rafi-86780633b"
              >
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/jamil908"
              >
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.img
          src={profilepic}
          alt="Jamil Hossain"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] border-4 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col items-center py-12"
      >
       
      </motion.div>

      {/* Shiny Effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;

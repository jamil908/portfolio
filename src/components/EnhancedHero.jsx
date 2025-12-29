import React from "react";
import profilepic from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const EnhancedHero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-[1200px] mx-auto px-6 md:px-12 relative overflow-hidden">
      {/* Main Content */}
      <div className="grid md:grid-cols-2 place-items-center gap-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-purple-400 font-medium text-lg"
          >
            👋 Hello, I'm
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            Jamil <span className="text-purple-500">Hossain</span>
          </motion.h1>

          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Specialist",
                2000,
                "UI/UX Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-semibold"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Passionate about creating exceptional digital experiences through clean code, 
            innovative design, and cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer"
              >
                Let's Work Together
              </Link>
            </motion.div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Resume.pdf"
              download="Jamil_Hossain_Resume.pdf"
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex gap-6 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://www.linkedin.com/in/jamil-hossain-rafi-05feb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-muted-foreground hover:text-blue-500 transition-colors"
            >
              <AiOutlineLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://github.com/jamil908"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <AiOutlineGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-muted-foreground hover:text-pink-500 transition-colors"
            >
              <AiOutlineInstagram />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            
            {/* Profile Image */}
            <img
              src={profilepic}
              alt="Jamil Hossain"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-purple-500/30 shadow-2xl"
            />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full opacity-60"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <HiArrowDown size={24} />
        </motion.div>
      </motion.div>

      {/* Shiny Effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default EnhancedHero;
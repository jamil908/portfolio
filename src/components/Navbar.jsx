import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-opacity-70 bg-background backdrop-blur-md z-50 border-b border-border/20">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between h-16 md:h-20 text-foreground px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <a href="#" className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
          Jamil Hossain
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center cursor-pointer text-sm lg:text-base">
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-purple-400 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-purple-400 transition-all duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-purple-400 transition-all duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-purple-400 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <ThemeToggle />
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
            }}
            href="/Resume.pdf"
            download="MD_Jamil_Hossain_Front-end_web-developer (2).pdf"
            className="cursor-pointer font-bold text-foreground px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Download CV
          </motion.a>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <div onClick={toggleNav} className="z-50 text-foreground">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-1/2 min-h-screen bg-background border-r border-border z-40"
        >
          <ul className="flex flex-col items-center justify-center font-semibold text-xl sm:text-2xl space-y-6 sm:space-y-8 mt-20 sm:mt-24 text-foreground px-4">
            <li>
              <Link
                to="about"
                onClick={closeNav}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple-400 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                onClick={closeNav}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple-400 transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                onClick={closeNav}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple-400 transition-all duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={closeNav}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple-400 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                href="/Resume.pdf"
                download="MD_Jamil_Hossain_Front-end_web-developer (2).pdf"
                className="cursor-pointer font-bold text-foreground px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg border border-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Download CV
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  const closeNav = () => {
    setNav(false)
  }

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  }

  return (

    
    <div className="fixed top-0 container mx-auto bg-opacity-70 bg-inherit backdrop-blur-md z-50">
      <div className="flex  items-center justify-between  mx-auto h-20 text-gray-200 text-xl px-4 md:px-12">
        {/* Logo */}
        <a href="#" className="font-bold text-lg md:text-2xl">
          Jamil Hossain
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center cursor-pointer">
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-purple-300 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-purple-300 transition-all duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-purple-300 transition-all duration-300"
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
              className="hover:text-purple-300 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Download CV Button (Desktop Only) */}
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)',
          }}
          href="/MD_Jamil_Hossain_Front-end_web-developer (2).pdf"
          download="MD_Jamil_Hossain_Front-end_web-developer (2).pdf"
          className="hidden md:block cursor-pointer font-bold text-gray-200 p-3 border border-purple-400 rounded-lg hover:bg-purple-500 transition-all duration-300"
        >
          Download CV
        </motion.a>

        {/* Hamburger Menu (Mobile Only) */}
        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed left-0 top-0 w-8/12 min-h-screen bg-gray-900 z-40"
        >
          <ul className="flex flex-col items-center justify-center font-semibold text-2xl space-y-8 mt-24 text-gray-200">
            <li>
              <Link
                to="about"
                onClick={closeNav}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple-300 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                onClick={closeNav}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple-300 transition-all duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                onClick={closeNav}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-purple-300 transition-all duration-300"
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
                className="hover:text-purple-300 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)',
                }}
                href="/MD_Jamil_Hossain_Front-end_web-developer (2).pdf"
                download="MD_Jamil_Hossain_Front-end_web-developer (2).pdf"
                className="cursor-pointer font-bold text-gray-200 p-3 border border-purple-400 rounded-lg hover:bg-purple-500 transition-all duration-300"
              >
                Download CV
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>



  )
}

export default Navbar

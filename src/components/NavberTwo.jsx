import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

const NavberTwo = () => {
  return (
    <div className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-base sm:text-lg md:text-xl font-bold text-foreground hover:text-purple-500 transition-colors">
            Jamil Hossain
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link
              to="/"
              className="px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg font-medium transition-all duration-300"
            >
              Back to Home
            </Link>

            <ThemeToggle />

            <a
              href="/Resume.pdf"
              download="Jamil_Hossain_Resume.pdf"
              className="px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm text-foreground p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-card border border-border rounded-box z-[1] mt-3 w-48 sm:w-52 p-2 shadow-lg"
              >
                <li>
                  <Link
                    to="/"
                    className="text-foreground hover:text-purple-500 transition-colors"
                  >
                    Back to Home
                  </Link>
                </li>
                <li>
                  <a
                    href="/Resume.pdf"
                    download="Jamil_Hossain_Resume.pdf"
                    className="text-foreground hover:text-purple-500 transition-colors"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavberTwo;

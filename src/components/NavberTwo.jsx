import React from "react";
import { Link } from "react-router-dom";

const NavberTwo = () => {
  return (
    <div className="navbar bg-opacity-70 bg-inherit fixed top-0 z-50 backdrop-blur-md md:w-[80%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-lg transition-all"
              >
                Back to Home
              </Link>
            </li>
            <li>
              {/* Fixed Download CV Button */}
              <a
                href="/public/Jamil_Hossain_CV.pdf"
                download="Jamil_Hossain_CV.pdf"
                className="cursor-pointer font-bold text-gray-200 p-3 border border-purple-400 rounded-lg hover:bg-purple-500 transition-all duration-300"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Jamil Hossain</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-lg transition-all"
            >
              Back to Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Fixed Download CV Button */}
        <a
          href="/public/Jamil_Hossain_CV.pdf"
          download="Jamil_Hossain_CV.pdf"
          className="hidden md:block cursor-pointer font-bold text-gray-200 p-3 border border-purple-400 rounded-lg hover:bg-purple-500 transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default NavberTwo;

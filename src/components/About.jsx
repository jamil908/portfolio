import React from 'react';
import Marquee from 'react-fast-marquee';
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiDaisyui, SiExpress, SiTypescript } from 'react-icons/si';

const About = () => {
    return (
        <div className=' container mx-auto' >
          <div>
                <div className="text-gray-300 my-3" id='about'>
                    <h3 className=" md:text-4xl w-fit mx-auto text-xl font-semibold mb-5">About <span>Me</span></h3>
                    <p className="text-justify leading-7 w-8/12 mx-auto">
                    Hi there! 👋 I’m a passionate and dedicated Computer Science and Engineering student with a strong interest in web development and software engineering. I enjoy building dynamic, user-friendly applications that solve real-world problems and enhance user experiences. My journey in programming has led me to explore modern technologies such as React, Node.js, MongoDB, and Firebase, and I’m constantly learning new tools to improve my craft.
                    </p>
                </div>

                <div className="flex mt-10 w-fit mx-auto items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">11
                            <span>+</span>
                        </h3>
                        <p className="text-xs w-fit mx-auto md:text-base"><span>Projects</span></p>
                    </div>

               

                    

                </div>

            </div>
            <p className='text-fuchsia-600 md:mt-5 mt-2 md:text-4xl text-xl font-bold animate-pulse w-fit mx-auto'>My Tech Stack</p>
        <div className=' w-[100vw]  md:w-[100%] mx-auto'>
        <div className=" md:w-[100%] w-[100vw] overflow-hidden">
          <Marquee
            speed={70}
            gradient={true}
            gradientColor={[50, 50, 100]} // Softer gradient color
            gradientWidth={150}
            pauseOnHover={true} // Allow pausing on hover for better user interaction
            className="w-full py-6 px-4 mx-auto rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex w-8/12 items-center text-center space-x-8">
              <div>
                <DiHtml5
                  className="text-orange-600 animate-pulse"
                  style={{ height: "120px", width: "120px" }}
                />
                <span>HTML</span>
              </div>
              <div>
                <DiCss3
                  className="text-blue-600 animate-pulse"
                  style={{ height: "120px", width: "120px" }}
                />
                <span>CSS</span>
              </div>
              <div>
                <DiJavascript1
                  className="text-yellow-500 animate-pulse"
                  style={{ height: "120px", width: "120px" }}
                />
                <span>JavaScript</span>
              </div>
              <div>
                <DiReact
                  className="text-blue-400 animate-spin"
                  style={{ height: "120px", width: "120px" }}
                />
                <span>React</span>
              </div>
              <div>
                <DiNodejsSmall
                  className="text-green-500 animate-pulse"
                  style={{ height: "120px", width: "120px" }}
                />
                <span>NodeJS</span>
              </div>
              <div>
                <RiTailwindCssFill
                  className="text-blue-500 animate-pulse"
                  style={{ height: "120px", width: "120px" }}
                />
                <span>Tailwind</span>
              </div>
              <div>
                <SiDaisyui
                  className="text-yellow-200 animate-pulse"
                  style={{ height: "120px", width: "120px" }}
                />
                <span>DaisyUI</span>
              </div>
            
              <div>
                <SiExpress
                  className="text-green-400 animate-pulse"
                  style={{ height: "120px", width: "120px" }}
                />
                <span>Express</span>
              </div>
            </div>
          </Marquee>
        </div>
        </div>
            
        </div>
    );
};

export default About;
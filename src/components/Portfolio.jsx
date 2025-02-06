import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import projects from "/public/project.json";

const Portfolio = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-6 md:py-24" id="portfolio" >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        My Portfolio
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div
              className={`relative flex flex-col items-center rounded-xl overflow-hidden  border-gray-700 p-6  bg-gradient-to-br from-purple-900/20 to-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300`}
            >
              {/* Image Section */}
              <div className=" md:w-full w-[80%] h-[80%] md:h-full  overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full md:w-[400px] md:h-[400px] object-cover rounded-t-lg transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col items-start space-y-4 w-full">
                <h3 className="text-2xl font-bold text-purple-400 hover:text-pink-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg">{project.name}</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  {/* View Site Button */}
                  <Link
                    to={project.links.site}
                    className="px-6 py-2 border-fuchsia-600 border-2 text-gray-100 font-semibold rounded-lg shadow-md hover:bg-pink-500 transition duration-300"
                  >
                    View Site
                  </Link>
                  {/* GitHub Button */}
                  <Link
                    to={project.links.github}
                    className="flex items-center px-6 py-2 border-fuchsia-600 border-2 text-gray-100 font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                  >
                    <AiOutlineGithub className="mr-2 text-xl" />
                    GitHub
                  </Link>
                  {/* View Details Button */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="px-6 py-2 border-fuchsia-600 border-2 text-gray-100 font-semibold rounded-lg shadow-md hover:bg-pink-500 transition duration-300"
                  >
                    View Details
                  </Link>
                
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

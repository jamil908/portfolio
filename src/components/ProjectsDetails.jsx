import { Link, useParams } from "react-router-dom";
import projects from "/public/project.json";
import NavberTwo from "./NavberTwo";
import Footer from "./Footer";

const ProjectsDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));


  return (
    <>
    <NavberTwo></NavberTwo>
    <div  className="flex flex-col items-center min-h-screen  pt-20 px-4">
      <div className="w-full container group border border-gray-700 p-6  bg-gradient-to-br from-purple-900/20 to-gray-800  hover:shadow-2xl transform transition duration-300 rounded-lg shadow-xl overflow-hidden">
        {/* Project Image */}
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Project Content */}
        <div className="p-6 text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            {project.title}
          </h2>
          <h3 className="text-xl font-semibold text-center">{project.name}</h3>
          <p className="text-lg font-light text-center leading-relaxed">
            {project.description}
          </p>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              to={project.links.site}
              className="px-6 py-3  hover:bg-fuchsia-600 border-fuchsia-400 border-2 text-white rounded-lg font-medium shadow-lg transition-all"
            >
              Live Site
            </Link>
            <Link
              to={project.links.github}
              className="px-6 py-3  hover:bg-fuchsia-800 border-fuchsia-400 border-2 text-white rounded-lg font-medium shadow-lg transition-all"
            >
              GitHub Repo
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="z-50">
        <Link
          to="/"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-lg transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
    <Footer></Footer>
    </>
  
  );
};

export default ProjectsDetails;

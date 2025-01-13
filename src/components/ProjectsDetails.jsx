import { Link, useParams } from "react-router-dom";
import projects from "/public/project.json";
import NavberTwo from "./NavberTwo";

const ProjectsDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));


  return (
    <>
    <NavberTwo></NavberTwo>
    <div  className="flex flex-col items-center min-h-screen  pt-20 px-4">
      <div className="w-full max-w-[1000px] bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 rounded-lg shadow-xl overflow-hidden">
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
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-lg transition-all"
            >
              Live Site
            </Link>
            <Link
              to={project.links.github}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-medium shadow-lg transition-all"
            >
              GitHub Repo
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="mt-8">
        <Link
          to="/"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-lg transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
    </>
  );
};

export default ProjectsDetails;

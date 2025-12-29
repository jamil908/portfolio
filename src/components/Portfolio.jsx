import projects from "../data/project.json";
import { Zoom } from "react-awesome-reveal";

const Portfolio = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-6 md:py-24" id="portfolio">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        My Portfolio
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-11 mx-auto  2xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <Zoom key={index}>
            <div className="card flex flex-col mx-auto " id="card">
              <div className="content md:p-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-[100%]  h-[50%] object-cover  rounded-lg mb-1 "
                />
                <h3 className="text-xl font-semibold text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.name}</p>
                <div className="mt-4">
                  <a
                    href={`/projects/${project.id}`}
                    className="inline-block mt-2 px-4 py-2 border border-fuchsia-600 text-gray-100 font-semibold rounded-md hover:bg-pink-500 transition"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>

    </div>
  );
};

export default Portfolio;

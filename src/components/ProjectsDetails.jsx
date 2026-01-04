import { Link, useParams } from "react-router-dom";
import projects from "../data/enhanced-projects.json";
import NavberTwo from "./NavberTwo";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const ProjectsDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-purple-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen text-foreground">
      <NavberTwo />

      <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-border">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-purple-400 font-medium">
                {project.name}
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-md border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground">About the Project</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>
              
              {/* Technologies Used */}
              {project.technologies && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold mb-3 text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-4 px-6 rounded-xl font-bold shadow-lg shadow-purple-900/40 flex items-center justify-center space-x-2 transition-all hover:-translate-y-1"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] bg-card hover:bg-muted border border-border hover:border-purple-500/50 text-foreground py-4 px-6 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all hover:-translate-y-1"
                >
                  <FaGithub className="text-xl" />
                  <span>View Code</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsDetails;

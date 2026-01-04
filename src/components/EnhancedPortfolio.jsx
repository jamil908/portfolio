import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/enhanced-projects.json";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const EnhancedPortfolio = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique categories from projects
  const categories = ["all", ...new Set(projects.map(project => project.category || "web"))];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => (project.category || "web") === filter);

  return (
    <div className="max-w-[1400px] mx-auto py-20 px-6" id="portfolio">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          My <span className="text-purple-500">Portfolio</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          A collection of projects that showcase my skills and passion for creating
          exceptional digital experiences.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === category
              ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
              : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-purple-500/50"
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-purple-500/20 rounded-2xl transition-colors duration-300" />


                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors"
                    >
                      <FiExternalLink size={16} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-gray-800 transition-colors"
                    >
                      <FiGithub size={16} />
                    </motion.a>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.category || "Web App"}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-purple-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description || project.name}
                </p>

                {/* Tech Stack */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* View More Button */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-600 font-medium text-sm transition-colors group/link"
                >
                  <FiEye size={16} />
                  View Details
                  <motion.span
                    className="inline-block"
                    animate={{ x: hoveredProject === project.id ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/jamil908"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          <FiGithub size={20} />
          View All Projects on GitHub
        </motion.a>
      </motion.div>
    </div>
  );
};

export default EnhancedPortfolio;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import projects from "../data/project.json";
// import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const EnhancedPortfolio = () => {
//   const [filter, setFilter] = useState("all");

//   const categories = [
//     "all",
//     ...new Set(projects.map(p => p.category || "web")),
//   ];

//   const filteredProjects =
//     filter === "all"
//       ? projects
//       : projects.filter(p => (p.category || "web") === filter);

//   return (
//     <div className="max-w-[1400px] mx-auto py-20 px-6" id="portfolio">
//       <h2 className="text-4xl font-bold text-center mb-12">
//         My <span className="text-purple-500">Portfolio</span>
//       </h2>

//       {/* Filters */}
//       <div className="flex justify-center gap-4 mb-10">
//         {categories.map(cat => (
//           <button
//             key={cat}
//             onClick={() => setFilter(cat)}
//             className={`px-5 py-2 rounded-full ${
//               filter === cat
//                 ? "bg-purple-600 text-white"
//                 : "border border-gray-600 text-gray-400"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={filter}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredProjects.map(project => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="relative bg-card border border-border rounded-xl overflow-hidden group"
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={project.img}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />

//                 {/* overlay (NON-CLICKABLE) */}
//                 <div className="absolute inset-0 pointer-events-none bg-black/40 opacity-0 group-hover:opacity-100 transition" />
//               </div>

//               {/* Content */}
//               <div className="p-6 relative z-10">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {project.title}
//                 </h3>

//                 <p className="text-sm text-gray-400 mb-4">
//                   {project.description || project.name}
//                 </p>

//                 <div className="flex items-center gap-4">
//                   {/* Internal Route */}
//                   <Link
//                     to={`/projects/${project.id}`}
//                     className="flex items-center gap-2 text-purple-500 hover:text-purple-400 font-medium"
//                   >
//                     <FiEye />
//                     View Details
//                   </Link>

//                   {/* External links */}
//                   {project.githubUrl && (
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-gray-400 hover:text-white"
//                     >
//                       <FiGithub />
//                     </a>
//                   )}

//                   {project.liveUrl && (
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-gray-400 hover:text-white"
//                     >
//                       <FiExternalLink />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default EnhancedPortfolio;

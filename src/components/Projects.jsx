import { motion } from "framer-motion";
import { FaGithub, FaFileAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-5xl font-bold text-center mb-6"
        >
          Featured <span className="text-blue-400">Projects</span>
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Some of the projects I've developed using Artificial Intelligence,
          Full Stack Development, and Database Technologies.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
            >

              <div className="overflow-hidden">

                {project.image ? (
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                    />
                ) : (
                    <div className="h-56 bg-slate-700 flex items-center justify-center text-gray-400 text-lg">
                    Project Screenshot Coming Soon
                    </div>
                )}

</div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map((tech, index) => (

                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                    <FaGithub />
                    GitHub
                 </a>

                  {project.paper && (
                    <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-500 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                        <FaFileAlt />
                        View Paper
                    </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
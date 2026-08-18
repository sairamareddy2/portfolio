import { motion } from "framer-motion";
import { FaGithub, FaFileAlt, FaCircle } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-6"
        >
          Project <span className="text-blue-400">Timeline</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-3xl mx-auto mb-20"
        >
          A journey through the projects I've developed using Artificial
          Intelligence, Machine Learning, Full Stack Development, and
          Database Technologies.
        </motion.p>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-500/40 md:-translate-x-1/2" />

          <div className="space-y-16">

            {projects.map((project, index) => {

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative flex items-center"
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg shadow-blue-500/50" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isLeft
                        ? "md:pr-16 md:text-right"
                        : "md:ml-auto md:pl-16"
                    }`}
                  >

                    {/* Date / Number */}
                    <div
                      className={`text-blue-400 font-semibold mb-3 ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Project Card */}
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 text-left"
                    >

                      {/* Image */}
                      <div className="overflow-hidden">

                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                          />
                        ) : (
                          <div className="h-56 bg-slate-700 flex items-center justify-center text-gray-400">
                            Project Screenshot Coming Soon
                          </div>
                        )}

                      </div>

                      {/* Details */}
                      <div className="p-6">

                        <h3 className="text-2xl font-bold mb-4">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 mb-6 leading-7">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">

                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3">

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 transition"
                            >
                              <FaGithub />
                              GitHub
                            </a>
                          )}

                          {project.paper && (
                            <a
                              href={project.paper}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border border-blue-500 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2 transition"
                            >
                              <FaFileAlt />
                              View Paper
                            </a>
                          )}

                        </div>

                      </div>

                    </motion.div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
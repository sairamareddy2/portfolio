import { motion } from "framer-motion";
import {  FaGithub } from "react-icons/fa";
import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "R", icon: "📈" },
    ],
  },

  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "Streamlit", icon: "⚡" },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
  },

  {
    title: "Data Analytics & BI",
    skills: [
      { name: "Power BI", icon: "📊" },
      { name: "Tableau", icon: "📉" },
    ],
  },

  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-6"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Here are the programming languages, web technologies, databases,
          analytics platforms, and development tools I use to build software
          solutions and data-driven applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">

                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-lg"
                  >
                    <span className="text-3xl">
                      {skill.icon}
                    </span>

                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
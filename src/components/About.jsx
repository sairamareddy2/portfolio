import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBrain, FaDatabase } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-5xl font-bold text-center mb-6"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-3xl mx-auto text-lg leading-8"
        >
          I am a passionate Artificial Intelligence & Data Science undergraduate with a strong
          interest in Artificial Intelligence, Machine Learning, Web
          Development, and solving real-world problems through technology.
          I enjoy learning new technologies and building innovative software
          solutions.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* Education Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-700"
          >
            <FaGraduationCap className="text-blue-400 text-4xl mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Education
            </h3>

            <p className="text-gray-300">
              <strong>B.Tech - Artificial Intelligence & Data Science</strong>
            </p>

            <p className="text-gray-400 mt-2">
              VNR Vignana Jyothi Institute of Engineering & Technology
            </p>

            <p className="text-gray-400 mt-2">
              Hyderabad, Telangana
            </p>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-6">
              Interests
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaBrain className="text-blue-400 text-2xl" />
                <span>Artificial Intelligence & Machine Learning</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLaptopCode className="text-blue-400 text-2xl" />
                <span>Full Stack Web Development</span>
              </div>

              <div className="flex items-center gap-4">
                <FaDatabase className="text-blue-400 text-2xl" />
                <span>Database Management Systems</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
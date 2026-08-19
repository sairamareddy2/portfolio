import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import resume from "../assets/resume/resume.pdf";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center pt-28"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-400">RamaKrishna Reddy</span>
          </h1>

          <h2 className="text-2xl md:text-3xl mt-5 text-gray-300">
            Artificial Intelligence & Data Science Undergraduate
          </h2>

          <div className="text-2xl font-semibold text-blue-400 mt-6 h-12">
            <Typewriter
              words={[
                "Machine Learning Enthusiast",
                "Full Stack Developer",
                "Java Programmer",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>
          <div className="inline-block mt-6 px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500">
            🟢 Open to Internship Opportunities
         </div>

          <p className="text-gray-400 mt-8 leading-8 max-w-xl text-lg">
            Passionate about building intelligent software solutions using
            Artificial Intelligence, Machine Learning, and Full Stack
            Development. I enjoy turning ideas into real-world applications
            that solve meaningful problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold transition cursor-pointer inline-block"
                >
                View Projects
            </Link>

            <a
                href={resume}
                download
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300 px-8 py-3 rounded-xl font-semibold">
                Download Resume
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Sscvv Ramakrishna Reddy"
            className="w-72 md:w-80 lg:w-96 rounded-3xl object-cover border-4 border-blue-500 shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
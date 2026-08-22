import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import resume from "../assets/resume/resume.pdf";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center pt-28"
    >

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Blue Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-semibold tracking-widest uppercase mb-5"
          >
            AI & Data Science Developer
          </motion.p>


          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              RamaKrishna Reddy
            </span>

          </h1>


          {/* Degree */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mt-6 text-gray-300"
          >
            Artificial Intelligence & Data Science Undergraduate
          </motion.h2>


          {/* Typewriter */}
          <div className="text-xl md:text-2xl font-semibold text-blue-400 mt-6 h-10">

            <Typewriter
              words={[
                "Machine Learning Enthusiast",
                "Full Stack Developer",
                "Java Programmer",
                "Problem Solver",
                "AI Explorer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />

          </div>


          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/40"
          >

            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-2.5 h-2.5 rounded-full bg-green-400"
            />

            Open to Internship Opportunities

          </motion.div>


          {/* Description */}
          <p className="text-gray-400 mt-8 leading-8 max-w-xl text-lg">
            Passionate about building intelligent software solutions using
            Artificial Intelligence, Machine Learning, and Full Stack
            Development. I enjoy transforming ideas into real-world
            applications that solve meaningful problems.
          </p>


          {/* ================= BUTTONS ================= */}

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="group bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              View Projects

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>

            </Link>


            <a
              href={resume}
              download
              className="border border-blue-400/60 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 px-7 py-3 rounded-xl font-semibold hover:-translate-y-1"
            >
              Download Resume
            </a>

          </div>


          {/* ================= SOCIAL ICONS ================= */}

          <div className="flex items-center gap-4 mt-8">

            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="https://github.com/sairamareddy2"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
            >
              <FaGithub size={21} />
            </motion.a>


            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="www.linkedin.com/in/sairamareddy-mallidi-b25b96325"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition-all"
            >
              <FaLinkedin size={21} />
            </motion.a>


            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.15, y: -4 }}
              href="mailto:mallidisairamareddy40@gmail.com"
              aria-label="Email"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-gray-400 hover:text-red-400 hover:border-red-500 hover:bg-red-500/10 transition-all"
            >
              <FaEnvelope size={21} />
            </motion.a>

          </div>

        </motion.div>


        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >

          {/* Outer Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-blue-500/20 blur-3xl"
          />


          {/* Profile Image */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >

            <img
              src={profile}
              alt="RamaKrishna Reddy"
              className="relative z-10 w-72 md:w-80 lg:w-96 h-auto rounded-3xl object-cover border-2 border-blue-400/70 shadow-[0_0_50px_rgba(59,130,246,0.35)] hover:shadow-[0_0_70px_rgba(59,130,246,0.55)] hover:scale-[1.03] transition-all duration-500"
            />

          </motion.div>


          {/* Floating AI Badge */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -left-3 md:-left-8 top-10 bg-slate-900/90 backdrop-blur-md border border-blue-500/30 px-4 py-3 rounded-xl shadow-xl"
          >
            <span className="text-blue-400 font-semibold">
              🤖 AI / ML
            </span>
          </motion.div>


          {/* Floating Developer Badge */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="absolute -right-3 md:-right-8 bottom-12 bg-slate-900/90 backdrop-blur-md border border-purple-500/30 px-4 py-3 rounded-xl shadow-xl"
          >
            <span className="text-purple-400 font-semibold">
              💻 Developer
            </span>
          </motion.div>

        </motion.div>

      </div>


      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase">
            Scroll
          </span>

          <FaArrowDown />

        </Link>

      </motion.div>

    </section>
  );
}

export default Hero;
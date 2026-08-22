import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaFileDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/resume/resume.pdf";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "certificates",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-xl"
          : "bg-slate-950/40 backdrop-blur-md"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* ================= LOGO ================= */}

          <Link
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >

              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center">
                <span className="text-blue-400 font-bold text-lg">
                  R
                </span>
              </div>

              <div className="hidden sm:block">

                <h1 className="text-lg font-bold text-white leading-none">
                  RamaKrishna Reddy
                </h1>

                <p className="text-xs text-blue-400 mt-1">
                  AI & Data Science
                </p>

              </div>

            </motion.div>
          </Link>


          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (

              <li key={item}>

                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  activeClass="text-blue-400"
                  className="relative cursor-pointer capitalize text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 group"
                >

                  {item}

                  {/* Animated underline */}

                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" />

                </Link>

              </li>

            ))}

          </ul>


          {/* ================= DESKTOP ACTIONS ================= */}

          <div className="hidden lg:flex items-center gap-3">

            {/* GitHub */}

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </motion.a>


            {/* Resume */}

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={resume}
              download
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-500/20"
            >
              <FaFileDownload />
              Resume
            </motion.a>

          </div>


          {/* ================= MOBILE BUTTON ================= */}

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 rounded-xl border border-slate-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes size={20} />
            ) : (
              <FaBars size={20} />
            )}
          </motion.button>

        </div>


        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >

              <div className="pt-5 pb-3 space-y-1">

                {navItems.map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >

                    <Link
                      to={item}
                      spy={true}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      activeClass="text-blue-400 bg-blue-500/10"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl capitalize text-gray-300 hover:text-blue-400 hover:bg-slate-800 cursor-pointer transition-all"
                    >
                      {item}
                    </Link>

                  </motion.div>

                ))}


                {/* Mobile Resume */}

                <a
                  href={resume}
                  download
                  className="mt-3 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-xl font-semibold transition"
                >
                  <FaFileDownload />
                  Download Resume
                </a>


                {/* Mobile GitHub */}

                <a
                  href="https://github.com/sairamareddy2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 px-4 py-3 rounded-xl text-gray-300 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.nav>
  );
}

export default Navbar;
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-400">
              Mallidi Sscvv Ramakrishna Reddy
            </h2>

            <p className="text-gray-400 mt-2">
              AI & Data Science Undergraduate
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/sairamareddy2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sairamareddy-mallidi-b25b96325/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mallidisairamareddy40@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-gray-400">

            <p className="text-lg font-medium text-white">
                Designed & Developed by
            </p>

            <p className="text-blue-400 font-semibold mt-1">
                Mallidi SSCVV Ramakrishna Reddy
            </p>

            <p className="mt-3 text-sm">
                Built with React.js, Vite, Tailwind CSS & Framer Motion
            </p>

            <p className="mt-3 text-sm">
                © {new Date().getFullYear()} Mallidi SSCVV Ramakrishna Reddy. All Rights Reserved.
            </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
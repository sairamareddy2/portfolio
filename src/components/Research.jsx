import { motion } from "framer-motion";
import { FaBookOpen, FaFilePdf } from "react-icons/fa";
import manuscript from "../assets/research/manuscript.pdf";

function Research() {
  return (
    <section
      id="research"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-5xl font-bold text-center mb-6"
        >
          Research <span className="text-blue-400">& Innovation</span>
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          My research focuses on developing secure and intelligent software
          solutions for real-world applications.
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-800 rounded-3xl p-10 border border-slate-700 hover:border-blue-500 transition"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300">
            🟡 Status: Manuscript Ready for Submission
          </div>

          <h3 className="text-3xl font-bold mb-6">
            A Multi-Layer Authentication Framework for Secure Real-Time Attendance Verification Using Dynamic QR Codes and Geofencing
          </h3>

          <p className="text-gray-400 leading-8 text-lg">
            Designed and developed a secure attendance verification framework
            using Dynamic QR Codes and Geofencing to prevent proxy attendance
            in educational institutions. The research integrates secure
            authentication, real-time monitoring, attendance analytics, and
            role-based access control through a full-stack web application.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "SQLite",
              "JWT",
              "Dynamic QR",
              "Geofencing",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-10">
            <a
                href={manuscript}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl flex items-center gap-2"
                >
                <FaBookOpen />
                View Research
                </a>

                <a
                href={manuscript}
                download
                className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-2"
                >
                <FaFilePdf />
                Download Manuscript
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Research;
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-5xl font-bold text-center mb-6"
        >
          My <span className="text-blue-400">Certificates</span>
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Professional certifications and training programs that have helped me
          strengthen my technical skills in AI, Data Analytics, Full Stack
          Development, and IoT.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {certificates.map((certificate) => (

            <motion.div
              key={certificate.id}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all"
            >

              <div className="flex items-center gap-4 mb-5">

                <FaCertificate className="text-5xl text-blue-400" />

                <div>

                  <h3 className="text-xl font-bold">
                    {certificate.title}
                  </h3>

                  <p className="text-gray-400">
                    {certificate.issuer}
                  </p>

                </div>

              </div>

              <div className="flex justify-between items-center mt-6">

                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                  {certificate.category}
                </span>

                <span className="text-gray-400">
                  {certificate.year}
                </span>

              </div>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <FaExternalLinkAlt />
                View Certificate
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;
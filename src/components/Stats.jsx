import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCertificate,
  FaBookOpen,
  FaTools,
} from "react-icons/fa";

const stats = [
  {
    number: "3+",
    title: "Projects",
    icon: <FaLaptopCode />,
  },
  {
    number: "4",
    title: "Certificates",
    icon: <FaCertificate />,
  },
  {
    number: "1",
    title: "Research Project",
    icon: <FaBookOpen />,
  },
  {
    number: "10+",
    title: "Technologies",
    icon: <FaTools />,
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
            >

              <div className="text-5xl text-blue-400 mb-4 flex justify-center">
                {stat.icon}
              </div>

              <h2 className="text-4xl font-bold">
                {stat.number}
              </h2>

              <p className="text-gray-400 mt-2">
                {stat.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;
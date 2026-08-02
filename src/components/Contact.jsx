import { motion } from "framer-motion";
import resume from "../assets/resume/resume.pdf";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Contact() {
    const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4sfwcjj",
      "template_zm373tx",
      form.current,
      "zCaD1C6xiNRohrQ_2"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      }
    );
};
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-5xl font-bold text-center mb-6"
        >
          Contact <span className="text-blue-400">Me</span>
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Interested in collaborating, internships, or discussing projects?
          Feel free to reach out.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-3xl text-blue-400" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  mallidisairamareddy40@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-3xl text-blue-400" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-400">
                  https://github.com/sairamareddy2
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-3xl text-blue-400" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-400">
                  https://www.linkedin.com/in/sairamareddy-mallidi-b25b96325/
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-3xl text-blue-400" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Hyderabad, Telangana
                </p>
              </div>
            </div>

            <a
                href={resume}
                download="Mallidi_SSCVV_Ramakrishna_Reddy_Resume.pdf"
                className="mt-8 inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition duration-300"
                >
                <FaDownload />
                Download Resume
            </a>

          </div>

          {/* Right Side */}
          <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-6"
>

            <input
  type="text"
  name="from_name"
  placeholder="Your Name"
  required
              className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
  type="email"
  name="from_email"
  placeholder="Your Email"
  required
              className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

           <textarea
  name="message"
  rows="6"
  placeholder="Your Message"
  required
              className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
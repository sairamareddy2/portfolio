import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =====================================================
   MINI 3D ROBOT
===================================================== */

function MiniRobot() {
  const robot = useRef();

  useFrame((state) => {
    if (!robot.current) return;

    const time = state.clock.elapsedTime;

    robot.current.rotation.y =
      Math.sin(time * 0.8) * 0.25;

    robot.current.position.y =
      Math.sin(time * 2) * 0.05;
  });

  return (
    <group ref={robot} scale={0.75}>

      {/* HEAD */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.75, 0.62, 0.55]} />
        <meshStandardMaterial
          color="#172554"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* FACE */}
      <mesh position={[0, 0.85, 0.29]}>
        <boxGeometry args={[0.58, 0.42, 0.03]} />
        <meshStandardMaterial
          color="#020617"
          emissive="#0369a1"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* EYES */}
      <mesh position={[-0.15, 0.9, 0.33]}>
        <sphereGeometry args={[0.075, 20, 20]} />
        <meshStandardMaterial
          color="#cffafe"
          emissive="#22d3ee"
          emissiveIntensity={7}
        />
      </mesh>

      <mesh position={[0.15, 0.9, 0.33]}>
        <sphereGeometry args={[0.075, 20, 20]} />
        <meshStandardMaterial
          color="#cffafe"
          emissive="#22d3ee"
          emissiveIntensity={7}
        />
      </mesh>

      {/* MOUTH */}
      <mesh position={[0, 0.73, 0.33]}>
        <boxGeometry args={[0.25, 0.025, 0.02]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={5}
        />
      </mesh>

      {/* ANTENNA */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 0.18, 12]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>

      <mesh position={[0, 1.36, 0]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={8}
        />
      </mesh>

      {/* BODY */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.9, 0.85, 0.58]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
          roughness={0.18}
        />
      </mesh>

      {/* CHEST */}
      <mesh position={[0, 0.08, 0.31]}>
        <sphereGeometry args={[0.11, 20, 20]} />
        <meshStandardMaterial
          color="#a5f3fc"
          emissive="#06b6d4"
          emissiveIntensity={8}
        />
      </mesh>

      {/* ARMS */}
      <mesh
        position={[-0.63, 0.02, 0]}
        rotation={[0, 0, -0.12]}
      >
        <capsuleGeometry args={[0.09, 0.45, 6, 12]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
        />
      </mesh>

      <mesh
        position={[0.63, 0.02, 0]}
        rotation={[0, 0, 0.12]}
      >
        <capsuleGeometry args={[0.09, 0.45, 6, 12]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
        />
      </mesh>

      {/* LEGS */}
      <mesh position={[-0.2, -0.7, 0]}>
        <capsuleGeometry args={[0.11, 0.55, 6, 12]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
        />
      </mesh>

      <mesh position={[0.2, -0.7, 0]}>
        <capsuleGeometry args={[0.11, 0.55, 6, 12]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
        />
      </mesh>

    </group>
  );
}


/* =====================================================
   REAL PORTFOLIO DATA
   Based on the uploaded resume
===================================================== */

const portfolioData = {

  name: "Mallidi Sscvv Ramakrishna Reddy",

  shortName: "Reddy",

  role: "Artificial Intelligence and Data Science Undergraduate",

  college:
    "VNR Vignana Jyothi Institute of Engineering and Technology",

  degree:
    "B.Tech – Artificial Intelligence and Data Science",

  educationPeriod: "2024–2028",

  cgpa: "9.2",

  objective:
    "AI and Data Science undergraduate majoring in Python, Data Structures, and Machine Learning, interested in creating AI-based solutions and utilizing AI knowledge and software/data analysis skills.",

  programming: [
    "Java",
    "Python",
    "C",
    "R",
  ],

  web: [
    "HTML",
    "CSS",
    "Streamlit",
    "Node.js",
  ],

  databases: [
    "MySQL",
    "MongoDB",
  ],

  tools: [
    "Git",
    "Power BI",
    "Excel",
    "Tableau",
    "StarUML",
    "Google Colab",
  ],

  projects: [

    {
      name: "AI Subtitle Generator",

      technologies: [
        "Python",
        "Streamlit",
        "OpenAI Whisper",
        "FFmpeg",
        "MoviePy",
        "Google Translate API",
      ],

      description:
        "An AI-based web application that creates subtitles from video audio and translates those subtitles to five languages.",

      details:
        "The project uses OpenAI Whisper for speech-to-text transcription and FFmpeg and MoviePy for subtitle embedding. It also provides an interactive Streamlit interface for uploading videos, generating subtitles, selecting languages and downloading captioned videos or subtitles.",
    },

    {
      name: "Clinic Management System",

      technologies: [
        "MySQL",
        "SQL",
        "Stored Procedures",
        "Triggers",
        "Python",
      ],

      description:
        "A Python-based clinic management system for managing patients, doctors, appointments, medical history and billing.",

      details:
        "The system uses a normalized MySQL database with relationship tables and foreign keys. Stored procedures and triggers provide data consistency and automate processes. SQL reporting mechanisms generate patient history, appointment schedules, doctor statistics and billing reports.",
    },

    {
      name: "Smart Attendance Guard",

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "SQLite",
        "JWT",
        "QR Code",
        "Geolocation API",
      ],

      description:
        "An attendance management application using dynamic QR code scanning and geofencing to prevent proxy attendance.",

      details:
        "The system includes role-based authentication for students, faculty and administration, real-time attendance monitoring and automatic QR verification. Attendance analysis dashboards were designed to improve accuracy and productivity.",
    },

  ],

  certificates: [
    "Industry based Training program on Agentic AI and LLMs",
    "Deloitte Data Analytics Job Simulation",
    "Completed Training in Full Stack Web Development",
    "NPTEL Introduction to IoT (Elite Silver)",
  ],

  positions: [
    "Volunteer of Computer Society of India (CSI) Student Chapter at VNRVJIET",
    "Volunteer of National Service Scheme (NSS)",
    "Volunteer of Data Quester Club at VNRVJIET",
  ],

  links: {
    linkedin: "https://linkedin.com/in/sairamareddy",
    github: "https://github.com/sairamareddy2",
  },

};


/* =====================================================
   AI RESPONSE ENGINE
===================================================== */

function getAIResponse(question) {

  const q = question
    .toLowerCase()
    .trim();


  /* GREETING */

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey")
  ) {
    return {
      text:
        `Hello! 👋 I'm ${portfolioData.name}'s AI portfolio assistant. Ask me about his education, skills, projects, research, certificates or experience.`,
      action: null,
    };
  }


  /* NAME */

  if (
    q.includes("name") ||
    q.includes("who is reddy") ||
    q.includes("who are you")
  ) {
    return {
      text:
        `His name is ${portfolioData.name}. He is an ${portfolioData.role}.`,
      action: "home",
    };
  }


  /* ABOUT */

  if (
    q.includes("about him") ||
    q.includes("about reddy") ||
    q.includes("tell me about him") ||
    q.includes("profile")
  ) {
    return {
      text:
        `${portfolioData.name} is an ${portfolioData.role} at ${portfolioData.college}. He is pursuing ${portfolioData.degree} from ${portfolioData.educationPeriod} with a current CGPA of ${portfolioData.cgpa}.`,
      action: "about",
    };
  }


  /* EDUCATION */

  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("university") ||
    q.includes("study") ||
    q.includes("cgpa") ||
    q.includes("degree")
  ) {

    return {
      text:
        `Reddy is pursuing ${portfolioData.degree} at ${portfolioData.college} from ${portfolioData.educationPeriod}. His current CGPA is ${portfolioData.cgpa}.`,
      action: "about",
    };

  }


  /* PROGRAMMING */

  if (
    q.includes("programming") ||
    q.includes("programming language") ||
    q.includes("coding language")
  ) {

    return {
      text:
        `Reddy's programming languages are ${portfolioData.programming.join(", ")}.`,
      action: "skills",
    };

  }


  /* SKILLS */

  if (
    q.includes("skill") ||
    q.includes("technical") ||
    q.includes("technology") ||
    q.includes("technologies")
  ) {

    return {
      text:
        `Reddy's technical skills include Programming: ${portfolioData.programming.join(", ")}. Web technologies: ${portfolioData.web.join(", ")}. Databases: ${portfolioData.databases.join(", ")}. Tools: ${portfolioData.tools.join(", ")}.`,
      action: "skills",
    };

  }


  /* DATABASE */

  if (
    q.includes("database") ||
    q.includes("mysql") ||
    q.includes("mongodb")
  ) {

    return {
      text:
        `Reddy has experience with ${portfolioData.databases.join(" and ")}.`,
      action: "skills",
    };

  }


  /* PROJECTS */

  if (
    q.includes("projects") ||
    q.includes("project") ||
    q.includes("built") ||
    q.includes("work")
  ) {

    const projectNames =
      portfolioData.projects
        .map((project) => project.name)
        .join(", ");

    return {
      text:
        `Reddy has worked on three major projects: ${projectNames}.`,
      action: "projects",
    };

  }


  /* AI SUBTITLE */

  if (
    q.includes("subtitle") ||
    q.includes("whisper") ||
    q.includes("caption")
  ) {

    const project =
      portfolioData.projects[0];

    return {
      text:
        `${project.name}: ${project.description} ${project.details} Technologies include ${project.technologies.join(", ")}.`,
      action: "projects",
    };

  }


  /* CLINIC */

  if (
    q.includes("clinic") ||
    q.includes("hospital") ||
    q.includes("medical")
  ) {

    const project =
      portfolioData.projects[1];

    return {
      text:
        `${project.name}: ${project.description} ${project.details} Technologies include ${project.technologies.join(", ")}.`,
      action: "projects",
    };

  }


  /* ATTENDANCE */

  if (
    q.includes("attendance") ||
    q.includes("qr") ||
    q.includes("geolocation") ||
    q.includes("geofencing") ||
    q.includes("proxy attendance")
  ) {

    const project =
      portfolioData.projects[2];

    return {
      text:
        `${project.name}: ${project.description} ${project.details} Technologies include ${project.technologies.join(", ")}.`,
      action: "projects",
    };

  }


  /* PROJECT TECHNOLOGIES */

  if (
    q.includes("project technology") ||
    q.includes("project tech") ||
    q.includes("tech stack")
  ) {

    return {
      text:
        portfolioData.projects
          .map(
            (project) =>
              `${project.name}: ${project.technologies.join(", ")}`
          )
          .join(" | "),
      action: "projects",
    };

  }


  /* CERTIFICATES */

  if (
    q.includes("certificate") ||
    q.includes("certification") ||
    q.includes("certificates")
  ) {

    return {
      text:
        `Reddy's certificates include: ${portfolioData.certificates.join("; ")}.`,
      action: "certificates",
    };

  }


  /* AGENTIC AI */

  if (
    q.includes("agentic") ||
    q.includes("llm") ||
    q.includes("large language")
  ) {

    return {
      text:
        "Reddy completed an industry-based training program on Agentic AI and LLMs.",
      action: "certificates",
    };

  }


  /* RESPONSIBILITY */

  if (
    q.includes("volunteer") ||
    q.includes("responsibility") ||
    q.includes("club") ||
    q.includes("csi") ||
    q.includes("nss")
  ) {

    return {
      text:
        `Reddy has been involved as a volunteer with the ${portfolioData.positions.join("; ")}.`,
      action: "about",
    };

  }


  /* RESEARCH */

  if (
    q.includes("research") ||
    q.includes("paper") ||
    q.includes("publication")
  ) {

    return {
      text:
        "The uploaded resume does not list specific research papers or publications. The portfolio can be updated with those details when they are available.",
      action: "projects",
    };

  }


  /* GITHUB */

  if (
    q.includes("github") ||
    q.includes("source code")
  ) {

    return {
      text:
        `Reddy's GitHub profile is available at ${portfolioData.links.github}.`,
      action: null,
      external: portfolioData.links.github,
    };

  }


  /* LINKEDIN */

  if (
    q.includes("linkedin") ||
    q.includes("professional profile")
  ) {

    return {
      text:
        `Reddy's LinkedIn profile is available at ${portfolioData.links.linkedin}.`,
      action: null,
      external: portfolioData.links.linkedin,
    };

  }


  /* CONTACT */

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach")
  ) {

    return {
      text:
        "You can use the Contact section of the portfolio to get in touch with Reddy.",
      action: "contact",
    };

  }


  /* HOME */

  if (
    q.includes("portfolio") ||
    q.includes("home")
  ) {

    return {
      text:
        `Welcome to ${portfolioData.name}'s portfolio. You can explore his education, technical skills, projects, certificates and experience.`,
      action: "home",
    };

  }


  /* DEFAULT */

  return {
    text:
      "I can answer questions about Reddy's education, skills, projects, technologies, certificates, volunteering, GitHub and LinkedIn. Try asking something like: “What projects has Reddy built?”",
    action: null,
  };

}


/* =====================================================
   FLOATING ASSISTANT
===================================================== */

function FloatingAssistant() {

  const [open, setOpen] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {
        sender: "ai",
        text:
          `Hi! 👋 I'm ${portfolioData.shortName}'s AI assistant. Ask me anything about his portfolio.`,
      },
    ]);

  const [input, setInput] =
    useState("");


  /* NAVIGATION */

  const goTo = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setOpen(false);

  };


  /* ASK AI */

  const askAI = (customQuestion = null) => {

    const question =
      customQuestion || input.trim();

    if (!question) return;

    const result =
      getAIResponse(question);


    setMessages((prev) => [
      ...prev,

      {
        sender: "user",
        text: question,
      },

      {
        sender: "ai",
        text: result.text,
        action: result.action,
        external: result.external,
      },

    ]);

    setInput("");

  };


  /* ENTER KEY */

  const handleKeyDown = (event) => {

    if (event.key === "Enter") {
      askAI();
    }

  };


  const quickQuestions = [
    "Who is Reddy?",
    "What are his skills?",
    "What projects has he built?",
    "What is his CGPA?",
    "What certificates does he have?",
  ];


  return (
    <>

      {/* =================================================
          CHAT WINDOW
      ================================================= */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.92,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              right-5
              bottom-28
              z-[999]
              w-[370px]
              max-w-[calc(100vw-40px)]
              rounded-2xl
              border
              border-cyan-400/30
              bg-slate-950/95
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(34,211,238,0.2)]
              overflow-hidden
            "
          >

            {/* HEADER */}

            <div
              className="
                px-5
                py-4
                border-b
                border-slate-800
                bg-cyan-500/5
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    overflow-hidden
                    border
                    border-cyan-400/40
                    bg-slate-950
                  "
                >

                  <Canvas
                    camera={{
                      position: [0, 0, 4],
                      fov: 40,
                    }}
                    dpr={[1, 1.5]}
                  >

                    <ambientLight
                      intensity={2}
                    />

                    <pointLight
                      position={[2, 2, 4]}
                      intensity={8}
                      color="#22d3ee"
                    />

                    <MiniRobot />

                  </Canvas>

                </div>


                <div>

                  <h3
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    Reddy's AI Assistant
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mt-1
                    "
                  >

                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_8px_#22d3ee]
                      "
                    />

                    <span
                      className="
                        text-xs
                        text-cyan-400
                      "
                    >
                      Resume Knowledge Active
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* MESSAGES */}

            <div
              className="
                h-[320px]
                overflow-y-auto
                px-4
                py-4
                space-y-3
              "
            >

              {messages.map(
                (message, index) => (

                  <div
                    key={index}
                    className={`
                      flex
                      ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }
                    `}
                  >

                    <div
                      className={`
                        max-w-[88%]
                        px-3
                        py-2
                        rounded-xl
                        text-sm
                        leading-5

                        ${
                          message.sender === "user"
                            ? "bg-cyan-500 text-slate-950"
                            : "bg-slate-900 border border-slate-800 text-gray-300"
                        }
                      `}
                    >

                      {message.text}


                      {/* SECTION LINK */}

                      {message.action && (

                        <button
                          onClick={() =>
                            goTo(message.action)
                          }
                          className="
                            block
                            mt-2
                            text-xs
                            text-cyan-400
                            hover:text-cyan-300
                            underline
                          "
                        >
                          Explore this section →
                        </button>

                      )}


                      {/* EXTERNAL LINK */}

                      {message.external && (

                        <a
                          href={
                            message.external
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="
                            block
                            mt-2
                            text-xs
                            text-cyan-400
                            hover:text-cyan-300
                            underline
                          "
                        >
                          Open profile →
                        </a>

                      )}

                    </div>

                  </div>

                )
              )}

            </div>


            {/* QUICK QUESTIONS */}

            <div
              className="
                px-4
                pb-3
                flex
                flex-wrap
                gap-2
              "
            >

              {quickQuestions.map(
                (question) => (

                  <button
                    key={question}
                    onClick={() =>
                      askAI(question)
                    }
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-slate-700
                      bg-slate-900
                      text-gray-400
                      hover:text-cyan-400
                      hover:border-cyan-400/40
                      text-xs
                      transition
                    "
                  >
                    {question}
                  </button>

                )
              )}

            </div>


            {/* INPUT */}

            <div
              className="
                p-4
                border-t
                border-slate-800
              "
            >

              <div
                className="
                  flex
                  gap-2
                "
              >

                <input
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  onKeyDown={
                    handleKeyDown
                  }
                  placeholder="Ask about Reddy..."
                  className="
                    flex-1
                    min-w-0
                    px-3
                    py-2.5
                    rounded-xl
                    bg-slate-900
                    border
                    border-slate-700
                    text-white
                    text-sm
                    outline-none
                    focus:border-cyan-400
                    placeholder:text-gray-600
                  "
                />

                <button
                  onClick={() =>
                    askAI()
                  }
                  className="
                    px-4
                    rounded-xl
                    bg-cyan-500
                    hover:bg-cyan-400
                    text-slate-950
                    font-semibold
                    transition
                  "
                >
                  →
                </button>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>


      {/* =================================================
          FLOATING 3D ROBOT
      ================================================= */}

      <motion.button
        onClick={() =>
          setOpen(!open)
        }
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          fixed
          right-5
          bottom-5
          z-[1000]
          w-20
          h-20
          rounded-full
          bg-slate-950
          border
          border-cyan-400/60
          shadow-[0_0_25px_rgba(34,211,238,0.3)]
          hover:shadow-[0_0_40px_rgba(34,211,238,0.55)]
          transition-shadow
          overflow-hidden
        "
        aria-label="Open AI Assistant"
      >

        <Canvas
          camera={{
            position: [0, 0, 4],
            fov: 40,
          }}
          dpr={[1, 1.5]}
        >

          <ambientLight
            intensity={1.8}
          />

          <directionalLight
            position={[2, 3, 4]}
            intensity={3}
          />

          <pointLight
            position={[1, 1, 3]}
            intensity={10}
            color="#22d3ee"
          />

          <MiniRobot />

        </Canvas>


        {/* ONLINE INDICATOR */}

        <span
          className="
            absolute
            right-1
            top-1
            w-3
            h-3
            rounded-full
            bg-cyan-400
            border-2
            border-slate-950
            shadow-[0_0_12px_#22d3ee]
          "
        />

      </motion.button>

    </>
  );
}

export default FloatingAssistant;
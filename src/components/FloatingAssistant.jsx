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

    const time =
      state.clock.elapsedTime;

    /* Floating */

    robot.current.position.y =
      Math.sin(time * 2) * 0.05;

    /* Gentle rotation */

    robot.current.rotation.y =
      Math.sin(time * 0.8) * 0.25;

  });


  return (

    <group
      ref={robot}
      scale={0.75}
    >

      {/* =================================================
          HEAD
      ================================================= */}

      <mesh
        position={[0, 0.85, 0]}
      >

        <boxGeometry
          args={[
            0.75,
            0.62,
            0.55,
          ]}
        />

        <meshStandardMaterial
          color="#172554"
          metalness={0.85}
          roughness={0.2}
        />

      </mesh>


      {/* =================================================
          FACE
      ================================================= */}

      <mesh
        position={[
          0,
          0.85,
          0.29,
        ]}
      >

        <boxGeometry
          args={[
            0.58,
            0.42,
            0.03,
          ]}
        />

        <meshStandardMaterial
          color="#020617"
          emissive="#0369a1"
          emissiveIntensity={0.8}
        />

      </mesh>


      {/* =================================================
          LEFT EYE
      ================================================= */}

      <mesh
        position={[
          -0.15,
          0.9,
          0.33,
        ]}
      >

        <sphereGeometry
          args={[
            0.075,
            20,
            20,
          ]}
        />

        <meshStandardMaterial
          color="#cffafe"
          emissive="#22d3ee"
          emissiveIntensity={7}
        />

      </mesh>


      {/* =================================================
          RIGHT EYE
      ================================================= */}

      <mesh
        position={[
          0.15,
          0.9,
          0.33,
        ]}
      >

        <sphereGeometry
          args={[
            0.075,
            20,
            20,
          ]}
        />

        <meshStandardMaterial
          color="#cffafe"
          emissive="#22d3ee"
          emissiveIntensity={7}
        />

      </mesh>


      {/* =================================================
          MOUTH
      ================================================= */}

      <mesh
        position={[
          0,
          0.73,
          0.33,
        ]}
      >

        <boxGeometry
          args={[
            0.25,
            0.025,
            0.02,
          ]}
        />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={5}
        />

      </mesh>


      {/* =================================================
          ANTENNA
      ================================================= */}

      <mesh
        position={[
          0,
          1.25,
          0,
        ]}
      >

        <cylinderGeometry
          args={[
            0.018,
            0.018,
            0.18,
            12,
          ]}
        />

        <meshStandardMaterial
          color="#64748b"
        />

      </mesh>


      <mesh
        position={[
          0,
          1.36,
          0,
        ]}
      >

        <sphereGeometry
          args={[
            0.045,
            16,
            16,
          ]}
        />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={8}
        />

      </mesh>


      {/* =================================================
          BODY
      ================================================= */}

      <mesh
        position={[
          0,
          0.05,
          0,
        ]}
      >

        <boxGeometry
          args={[
            0.9,
            0.85,
            0.58,
          ]}
        />

        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
          roughness={0.18}
        />

      </mesh>


      {/* =================================================
          CHEST
      ================================================= */}

      <mesh
        position={[
          0,
          0.08,
          0.31,
        ]}
      >

        <boxGeometry
          args={[
            0.45,
            0.32,
            0.025,
          ]}
        />

        <meshStandardMaterial
          color="#082f49"
          emissive="#0891b2"
          emissiveIntensity={1.5}
        />

      </mesh>


      {/* =================================================
          LEFT ARM
      ================================================= */}

      <mesh
        position={[
          -0.63,
          0.02,
          0,
        ]}
        rotation={[
          0,
          0,
          -0.12,
        ]}
      >

        <capsuleGeometry
          args={[
            0.09,
            0.45,
            6,
            12,
          ]}
        />

        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
        />

      </mesh>


      {/* =================================================
          RIGHT ARM
      ================================================= */}

      <mesh
        position={[
          0.63,
          0.02,
          0,
        ]}
        rotation={[
          0,
          0,
          0.12,
        ]}
      >

        <capsuleGeometry
          args={[
            0.09,
            0.45,
            6,
            12,
          ]}
        />

        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
        />

      </mesh>


      {/* =================================================
          LEFT LEG
      ================================================= */}

      <mesh
        position={[
          -0.2,
          -0.7,
          0,
        ]}
      >

        <capsuleGeometry
          args={[
            0.11,
            0.55,
            6,
            12,
          ]}
        />

        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
        />

      </mesh>


      {/* =================================================
          RIGHT LEG
      ================================================= */}

      <mesh
        position={[
          0.2,
          -0.7,
          0,
        ]}
      >

        <capsuleGeometry
          args={[
            0.11,
            0.55,
            6,
            12,
          ]}
        />

        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
        />

      </mesh>

    </group>

  );

}


/* =====================================================
   FLOATING AI ASSISTANT
===================================================== */

function FloatingAssistant() {

  const [open, setOpen] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {
        sender: "ai",

        text:
          "Hi! 👋 I'm Reddy's AI assistant. Ask me anything about his portfolio.",
      },
    ]);


  /* =====================================================
     PORTFOLIO NAVIGATION
  ===================================================== */

  const goTo = (id) => {

    const section =
      document.getElementById(id);

    if (!section) {

      console.warn(
        `Portfolio section #${id} was not found.`
      );

      return;

    }


    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });


    /*
      Keep the assistant open so the visitor can
      see the AI response while the page moves.
    */

  };


  /* =====================================================
     SEND MESSAGE TO BACKEND
  ===================================================== */

  const askAI = async (
    customQuestion = null
  ) => {

    const question =
      customQuestion ??
      input.trim();


    if (
      !question ||
      loading
    ) {

      return;

    }


    /* =================================================
       ADD USER MESSAGE
    ================================================= */

    setMessages((prev) => [

      ...prev,

      {
        sender: "user",
        text: question,
      },

    ]);


    setInput("");

    setLoading(true);


    try {


      /* ===============================================
         CONVERSATION HISTORY
      =============================================== */

      const conversation =
        messages

          .filter(
            (message) =>
              message.sender === "user" ||
              message.sender === "ai"
          )

          .slice(-10)

          .map((message) => ({

            role:
              message.sender === "user"
                ? "user"
                : "assistant",

            content:
              message.text,

          }));


      /* ===============================================
         CALL OLLAMA BACKEND
      =============================================== */

      const response =
        await fetch(
          "http://localhost:5000/api/chat",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                message: question,
                conversation,
              }),
          }
        );


      const data =
        await response.json();


      /* ===============================================
         CHECK SERVER RESPONSE
      =============================================== */

      if (!response.ok) {

        throw new Error(
          data.error ||
          "AI server returned an error."
        );

      }


      /* ===============================================
         ADD AI RESPONSE
      =============================================== */

      setMessages((prev) => [

        ...prev,

        {
          sender: "ai",

          text:
            data.answer ||
            "I couldn't generate a response.",
        },

      ]);


      /* ===============================================
         AI CONTROLLED NAVIGATION
      =============================================== */

      if (data.navigateTo) {

        const allowedSections = [
          "home",
          "about",
          "skills",
          "projects",
          "research",
          "certifications",
          "contact",
        ];


        /*
          Security/safety check:
          only allow known portfolio sections.
        */

        if (
          allowedSections.includes(
            data.navigateTo
          )
        ) {

          setTimeout(() => {

            goTo(
              data.navigateTo
            );

          }, 600);

        }

      }

    }

    catch (error) {

      console.error(
        "AI Assistant Error:",
        error
      );


      setMessages((prev) => [

        ...prev,

        {
          sender: "ai",

          text:
            "⚠️ I couldn't connect to the AI server. Please make sure the backend is running with `npm run server`.",
        },

      ]);

    }

    finally {

      setLoading(false);

    }

  };


  /* =====================================================
     ENTER KEY
  ===================================================== */

  const handleKeyDown = (
    event
  ) => {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      askAI();

    }

  };


  /* =====================================================
     QUICK QUESTIONS
  ===================================================== */

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


            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                px-5
                py-4
                border-b
                border-slate-800
                bg-cyan-500/5
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >


                {/* MINI ROBOT */}

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
                      position: [
                        0,
                        0,
                        4,
                      ],

                      fov: 40,
                    }}

                    dpr={[
                      1,
                      1.5,
                    ]}
                  >

                    <ambientLight
                      intensity={2}
                    />

                    <pointLight
                      position={[
                        2,
                        2,
                        4,
                      ]}
                      intensity={8}
                      color="#22d3ee"
                    />

                    <MiniRobot />

                  </Canvas>

                </div>


                {/* TITLE */}

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

                      {loading
                        ? "Thinking..."
                        : "AI Online"}

                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                MESSAGES
            ================================================= */}

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
                (
                  message,
                  index
                ) => (

                  <div
                    key={index}
                    className={`
                      flex
                      ${
                        message.sender ===
                        "user"
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
                          message.sender ===
                          "user"

                            ? "bg-cyan-500 text-slate-950"

                            : "bg-slate-900 border border-slate-800 text-gray-300"
                        }
                      `}
                    >

                      {message.text}

                    </div>

                  </div>

                )
              )}


              {/* =================================================
                  THINKING
              ================================================= */}

              {loading && (

                <div
                  className="
                    flex
                    justify-start
                  "
                >

                  <div
                    className="
                      px-4
                      py-3
                      rounded-xl
                      bg-slate-900
                      border
                      border-slate-800
                      text-cyan-400
                      text-sm
                    "
                  >

                    <span
                      className="
                        animate-pulse
                      "
                    >
                      AI is thinking...
                    </span>

                  </div>

                </div>

              )}

            </div>


            {/* =================================================
                QUICK QUESTIONS
            ================================================= */}

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

                    disabled={loading}

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
                      disabled:opacity-40
                    "
                  >

                    {question}

                  </button>

                )
              )}

            </div>


            {/* =================================================
                INPUT
            ================================================= */}

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

                  onChange={(event) =>
                    setInput(
                      event.target.value
                    )
                  }

                  onKeyDown={
                    handleKeyDown
                  }

                  disabled={loading}

                  placeholder={
                    loading
                      ? "AI is thinking..."
                      : "Ask about Reddy..."
                  }

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
                    disabled:opacity-50
                  "

                />


                <button

                  onClick={() =>
                    askAI()
                  }

                  disabled={
                    loading ||
                    !input.trim()
                  }

                  className="
                    px-4
                    rounded-xl
                    bg-cyan-500
                    hover:bg-cyan-400
                    text-slate-950
                    font-semibold
                    transition
                    disabled:opacity-40
                    disabled:cursor-not-allowed
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
          FLOATING ROBOT BUTTON
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
            position: [
              0,
              0,
              4,
            ],

            fov: 40,
          }}

          dpr={[
            1,
            1.5,
          ]}
        >

          <ambientLight
            intensity={1.8}
          />

          <directionalLight
            position={[
              2,
              3,
              4,
            ]}
            intensity={3}
          />

          <pointLight
            position={[
              1,
              1,
              3,
            ]}
            intensity={10}
            color="#22d3ee"
          />

          <MiniRobot />

        </Canvas>


        {/* =================================================
            ONLINE DOT
        ================================================= */}

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
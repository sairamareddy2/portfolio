import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

import robotModel from "../assets/models/robot.glb";


// ======================================================
// 3D ROBOT
// ======================================================

function Robot({ active, setActive }) {
  const group = useRef();
  const { scene } = useGLTF(robotModel);

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    // ------------------------------------------
    // Floating animation
    // ------------------------------------------

    group.current.position.y =
      Math.sin(time * 1.4) * 0.06;


    // ------------------------------------------
    // Mouse interaction
    // ------------------------------------------

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;


    // Robot faces forward
    // Small mouse movement only
    const targetRotationY =
  mouseX * 0.18;

    const targetRotationX =
      -mouseY * 0.08;


    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotationY,
        0.04
      );


    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetRotationX,
        0.04
      );
  });


  return (
    <group
      ref={group}
      onClick={() => setActive(!active)}
    >

      <primitive
        object={scene}
        scale={1.45}
        position={[0, -1.15, 0]}
      />

    </group>
  );
}



// ======================================================
// INTERACTIVE ROBOT DASHBOARD
// ======================================================

function InteractiveRobot() {

  const [active, setActive] = useState(false);


  return (
    <section
      id="ai-dashboard"
      className="
        relative
        min-h-screen
        bg-slate-950
        text-white
        overflow-hidden
      "
    >


      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="absolute inset-0 pointer-events-none">


        {/* Cyan glow */}

        <div
          className="
            absolute
            w-[650px]
            h-[650px]
            bg-cyan-500/10
            rounded-full
            blur-[160px]
            top-[-100px]
            right-[-100px]
          "
        />


        {/* Blue glow */}

        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            bg-blue-600/10
            rounded-full
            blur-[160px]
            bottom-[-150px]
            left-[-100px]
          "
        />


        {/* Center glow */}

        <div
          className="
            absolute
            w-[300px]
            h-[300px]
            bg-cyan-400/5
            rounded-full
            blur-[120px]
            top-[40%]
            right-[25%]
          "
        />

      </div>



      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          min-h-screen
          px-6
          lg:px-10
          grid
          lg:grid-cols-2
          gap-4
          items-center
        "
      >


        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}
        >


          {/* Label */}

          <p
            className="
              text-cyan-400
              tracking-[0.35em]
              text-sm
              font-semibold
              mb-5
            "
          >
            AI PORTFOLIO SYSTEM
          </p>



          {/* Name */}

          <h1
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-[1.05]
            "
          >

            Hi, I'm

            <br />

            <span
              className="
                text-cyan-400
                drop-shadow-[0_0_20px_rgba(34,211,238,0.15)]
              "
            >
              RamaKrishna Reddy
            </span>

          </h1>



          {/* Degree */}

          <p
            className="
              text-xl
              md:text-2xl
              text-gray-400
              mt-6
            "
          >
            Artificial Intelligence & Data Science
          </p>



          {/* ==================================================
              AI ASSISTANT CARD
          ================================================== */}

          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.8,
              duration: 0.7,
            }}

            className="
              mt-8
              max-w-xl
              bg-slate-900/70
              backdrop-blur-xl
              border
              border-slate-700
              rounded-2xl
              p-6
              shadow-[0_0_40px_rgba(34,211,238,0.05)]
            "
          >

            <p
              className="
                text-cyan-400
                text-sm
                font-semibold
                mb-2
              "
            >
              🤖 AI ASSISTANT
            </p>


            <p
              className="
                text-gray-300
                leading-7
              "
            >

              {active
                ? "System activated. Welcome to Reddy's portfolio. Explore my projects, skills and research."
                : "Hello! I'm Reddy's AI portfolio assistant. Click the robot to activate the system."
              }

            </p>

          </motion.div>



          {/* ==================================================
              ENTER PORTFOLIO BUTTON
          ================================================== */}

          <motion.button

            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(34,211,238,0.35)",
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={() => {
              document
                .getElementById("home")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}

            className="
              mt-8
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-400
              text-slate-950
              font-bold
              transition-all
              duration-300
            "
          >

            ENTER PORTFOLIO →

          </motion.button>



          {/* ==================================================
              SKILLS
          ================================================== */}

          <div
            className="
              flex
              flex-wrap
              gap-3
              mt-8
            "
          >

            {[
              "AI / ML",
              "Data Science",
              "Full Stack",
              "Research",
            ].map((skill) => (

              <motion.span
                key={skill}

                whileHover={{
                  scale: 1.05,
                  borderColor: "#22d3ee",
                }}

                className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-900
                  border
                  border-slate-700
                  text-gray-300
                  text-sm
                  transition
                "
              >
                {skill}
              </motion.span>

            ))}

          </div>

        </motion.div>



        {/* ==================================================
            RIGHT SIDE - ROBOT
        ================================================== */}

        <motion.div

          initial={{
            opacity: 0,
            scale: 0.8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1.2,
            delay: 0.3,
          }}

          className="
            relative
            h-[650px]
            lg:h-[700px]
            w-full
          "
        >


          {/* Robot glow */}

          <div
            className="
              absolute
              w-[350px]
              h-[350px]
              bg-cyan-400/10
              rounded-full
              blur-[100px]
              top-[25%]
              left-[50%]
              -translate-x-1/2
            "
          />


          <Canvas

            camera={{
              position: [0, 0, 7.5],
              fov: 38,
            }}

            dpr={[1, 2]}

          >

            {/* ==================================================
                LIGHTING
            ================================================== */}

            <ambientLight
              intensity={1.4}
            />


            <directionalLight
              position={[5, 6, 5]}
              intensity={3}
            />


            {/* Cyan key light */}

            <pointLight
              position={[3, 3, 4]}
              intensity={20}
              color="#22d3ee"
            />


            {/* Blue rim light */}

            <pointLight
              position={[-4, 2, 3]}
              intensity={12}
              color="#3b82f6"
            />


            {/* Bottom light */}

            <pointLight
              position={[0, -3, 2]}
              intensity={8}
              color="#06b6d4"
            />


            {/* ==================================================
                ROBOT
            ================================================== */}

            <Robot
              active={active}
              setActive={setActive}
            />

          </Canvas>

        </motion.div>

      </div>


    </section>
  );
}



// ======================================================
// PRELOAD MODEL
// ======================================================

useGLTF.preload(robotModel);


export default InteractiveRobot;
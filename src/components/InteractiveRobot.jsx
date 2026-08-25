import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

/* =========================
   ROBOT
========================= */

function Robot({ active, setActive }) {
  const robot = useRef();

  useFrame((state) => {
    if (!robot.current) return;

    const time = state.clock.elapsedTime;

    /* Floating */
    robot.current.position.y =
      Math.sin(time * 1.5) * 0.08;

    /* Mouse */
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    const targetRotationY =
      mouseX * 0.25;

    const targetRotationX =
      -mouseY * 0.08;

    robot.current.rotation.y =
      THREE.MathUtils.lerp(
        robot.current.rotation.y,
        targetRotationY,
        0.05
      );

    robot.current.rotation.x =
      THREE.MathUtils.lerp(
        robot.current.rotation.x,
        targetRotationX,
        0.05
      );
  });

  return (
    <group
      ref={robot}
      position={[0, -0.25, 0]}
      scale={1.25}
      onClick={() => setActive(!active)}
    >

      {/* ======================
          HEAD
      ====================== */}

      <group position={[0, 1.65, 0]}>

        {/* Head shell */}

        <mesh>
          <boxGeometry args={[0.95, 0.8, 0.7]} />

          <meshStandardMaterial
            color="#172554"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>


        {/* Face screen */}

        <mesh position={[0, 0, 0.37]}>

          <boxGeometry
            args={[0.78, 0.58, 0.035]}
          />

          <meshStandardMaterial
            color="#020617"
            emissive="#0369a1"
            emissiveIntensity={0.8}
          />

        </mesh>


        {/* LEFT EYE */}

        <mesh
          position={[-0.2, 0.08, 0.41]}
        >

          <sphereGeometry
            args={[0.105, 32, 32]}
          />

          <meshStandardMaterial
            color="#cffafe"
            emissive="#22d3ee"
            emissiveIntensity={6}
          />

        </mesh>


        {/* RIGHT EYE */}

        <mesh
          position={[0.2, 0.08, 0.41]}
        >

          <sphereGeometry
            args={[0.105, 32, 32]}
          />

          <meshStandardMaterial
            color="#cffafe"
            emissive="#22d3ee"
            emissiveIntensity={6}
          />

        </mesh>


        {/* MOUTH */}

        <mesh
          position={[0, -0.14, 0.41]}
        >

          <boxGeometry
            args={[0.38, 0.045, 0.03]}
          />

          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={5}
          />

        </mesh>


        {/* HEAD ANTENNA */}

        <mesh position={[0, 0.52, 0]}>

          <cylinderGeometry
            args={[0.025, 0.025, 0.22, 16]}
          />

          <meshStandardMaterial
            color="#64748b"
            metalness={0.9}
          />

        </mesh>


        <mesh position={[0, 0.66, 0]}>

          <sphereGeometry
            args={[0.06, 24, 24]}
          />

          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={7}
          />

        </mesh>

      </group>


      {/* ======================
          NECK
      ====================== */}

      <mesh position={[0, 1.08, 0]}>

        <cylinderGeometry
          args={[0.18, 0.18, 0.25, 24]}
        />

        <meshStandardMaterial
          color="#334155"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* ======================
          BODY
      ====================== */}

      <mesh position={[0, 0.45, 0]}>

        <boxGeometry
          args={[1.2, 1.25, 0.72]}
        />

        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
          roughness={0.18}
        />

      </mesh>


      {/* CHEST PANEL */}

      <mesh
        position={[0, 0.55, 0.39]}
      >

        <boxGeometry
          args={[0.75, 0.7, 0.04]}
        />

        <meshStandardMaterial
          color="#020617"
          emissive="#082f49"
          emissiveIntensity={1}
        />

      </mesh>


      {/* CHEST REACTOR */}

      <mesh
        position={[0, 0.55, 0.43]}
      >

        <sphereGeometry
          args={[0.17, 32, 32]}
        />

        <meshStandardMaterial
          color="#a5f3fc"
          emissive="#06b6d4"
          emissiveIntensity={8}
          metalness={0.2}
          roughness={0.1}
        />

      </mesh>


      {/* ======================
          SHOULDERS
      ====================== */}

      <mesh
        position={[-0.78, 0.82, 0]}
      >

        <sphereGeometry
          args={[0.24, 32, 32]}
        />

        <meshStandardMaterial
          color="#1e3a8a"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      <mesh
        position={[0.78, 0.82, 0]}
      >

        <sphereGeometry
          args={[0.24, 32, 32]}
        />

        <meshStandardMaterial
          color="#1e3a8a"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* ======================
          ARMS
      ====================== */}

      <mesh
        position={[-0.92, 0.25, 0]}
        rotation={[0, 0, -0.15]}
      >

        <capsuleGeometry
          args={[0.15, 0.75, 8, 20]}
        />

        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      <mesh
        position={[0.92, 0.25, 0]}
        rotation={[0, 0, 0.15]}
      >

        <capsuleGeometry
          args={[0.15, 0.75, 8, 20]}
        />

        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* HANDS */}

      <mesh
        position={[-1.02, -0.2, 0]}
      >

        <sphereGeometry
          args={[0.19, 24, 24]}
        />

        <meshStandardMaterial
          color="#334155"
          metalness={0.85}
          roughness={0.2}
        />

      </mesh>


      <mesh
        position={[1.02, -0.2, 0]}
      >

        <sphereGeometry
          args={[0.19, 24, 24]}
        />

        <meshStandardMaterial
          color="#334155"
          metalness={0.85}
          roughness={0.2}
        />

      </mesh>


      {/* ======================
          HIPS
      ====================== */}

      <mesh position={[0, -0.28, 0]}>

        <boxGeometry
          args={[0.75, 0.35, 0.6]}
        />

        <meshStandardMaterial
          color="#172554"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* ======================
          LEGS
      ====================== */}

      <mesh
        position={[-0.3, -0.85, 0]}
      >

        <capsuleGeometry
          args={[0.18, 1.0, 8, 20]}
        />

        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
          roughness={0.18}
        />

      </mesh>


      <mesh
        position={[0.3, -0.85, 0]}
      >

        <capsuleGeometry
          args={[0.18, 1.0, 8, 20]}
        />

        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
          roughness={0.18}
        />

      </mesh>


      {/* KNEE LIGHTS */}

      <mesh
        position={[-0.3, -0.78, 0.18]}
      >

        <sphereGeometry
          args={[0.07, 20, 20]}
        />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={5}
        />

      </mesh>


      <mesh
        position={[0.3, -0.78, 0.18]}
      >

        <sphereGeometry
          args={[0.07, 20, 20]}
        />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={5}
        />

      </mesh>


      {/* ======================
          FEET
      ====================== */}

      <mesh
        position={[-0.3, -1.48, 0.1]}
      >

        <boxGeometry
          args={[0.48, 0.22, 0.7]}
        />

        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      <mesh
        position={[0.3, -1.48, 0.1]}
      >

        <boxGeometry
          args={[0.48, 0.22, 0.7]}
        />

        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>

    </group>
  );
}


/* =========================
   MAIN COMPONENT
========================= */

function InteractiveRobot() {

  const [active, setActive] =
    useState(false);

  return (

    <section
      id="ai-dashboard"
      className="
        relative
        min-h-screen
        bg-[#020617]
        text-white
        overflow-hidden
      "
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            w-[700px]
            h-[700px]
            rounded-full
            bg-cyan-500/10
            blur-[170px]
            right-[-100px]
            top-[-100px]
          "
        />

        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
            left-[-100px]
            bottom-[-100px]
          "
        />

      </div>


      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          min-h-screen
          px-6
          grid
          lg:grid-cols-2
          gap-8
          items-center
        "
      >

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
        >

          <p
            className="
              text-cyan-400
              tracking-[0.4em]
              text-xs
              mb-6
            "
          >
            AI PORTFOLIO SYSTEM
          </p>


          <h1
            className="
              text-5xl
              md:text-6xl
              font-extrabold
              leading-tight
            "
          >

            Meet

            <br />

            <span className="text-cyan-400">
              Reddy's
            </span>

            <br />

            AI Assistant

          </h1>


          <p
            className="
              text-gray-400
              text-lg
              mt-5
            "
          >
            An interactive AI-powered gateway
            to my portfolio.
          </p>


          {/* AI CARD */}

          <motion.div
            className="
              mt-7
              max-w-xl
              rounded-2xl
              border
              border-cyan-500/40
              bg-slate-900/70
              backdrop-blur-xl
              p-5
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
            "
          >

            <p
              className="
                text-cyan-400
                text-xs
                font-semibold
                mb-3
              "
            >

              <span
                className="
                  inline-block
                  w-2
                  h-2
                  rounded-full
                  bg-cyan-400
                  mr-2
                  shadow-[0_0_12px_#22d3ee]
                "
              />

              AI ASSISTANT

            </p>


            <p
              className="
                text-gray-300
                text-sm
                leading-6
              "
            >

              {active
                ? "System activated. Welcome to Reddy's portfolio. Explore my projects, skills and research."
                : "Hello! I'm Reddy's AI assistant. Click the robot to activate the portfolio system."
              }

            </p>

          </motion.div>


          {/* BUTTON */}

         <motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 25px rgba(34, 211, 238, 0.35)",
  }}
  whileTap={{
    scale: 0.95,
  }}
  onClick={() => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
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

          {/* TAGS */}

          <div
            className="
              flex
              flex-wrap
              gap-2
              mt-7
            "
          >

            {[
              "AI / ML",
              "Data Science",
              "Full Stack",
              "Research"
            ].map((item) => (

              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900/70
                  text-gray-300
                  text-xs
                "
              >
                {item}
              </span>

            ))}

          </div>

        </motion.div>


        {/* ROBOT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1
          }}
          className="
            relative
            h-[620px]
            w-full
          "
        >

          <Canvas
            camera={{
              position: [0, 0.15, 7],
              fov: 40
            }}
            dpr={[1, 2]}
          >

            {/* LIGHT */}

            <ambientLight
              intensity={1.8}
            />

            <directionalLight
              position={[4, 6, 5]}
              intensity={4}
            />

            <pointLight
              position={[2, 2, 4]}
              intensity={20}
              color="#22d3ee"
            />

            <pointLight
              position={[-3, 2, 3]}
              intensity={12}
              color="#2563eb"
            />

            <pointLight
              position={[0, -2, 2]}
              intensity={8}
              color="#06b6d4"
            />


            <Robot
              active={active}
              setActive={setActive}
            />


            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
            />

          </Canvas>


          {/* ROBOT FLOOR GLOW */}

          <div
            className="
              absolute
              left-1/2
              bottom-8
              -translate-x-1/2
              w-64
              h-16
              rounded-full
              bg-cyan-400/20
              blur-3xl
              pointer-events-none
            "
          />


          {/* FLOOR RING */}

          <div
            className="
              absolute
              left-1/2
              bottom-8
              -translate-x-1/2
              w-56
              h-12
              rounded-full
              border
              border-cyan-300/50
              shadow-[0_0_30px_rgba(34,211,238,0.2)]
              pointer-events-none
            "
          />

        </motion.div>

      </div>


      {/* STATUS */}

      <div
        className="
          absolute
          bottom-8
          right-10
          text-[10px]
          tracking-[0.25em]
          text-cyan-400
        "
      >

        <span
          className="
            inline-block
            w-2
            h-2
            rounded-full
            bg-cyan-400
            mr-2
            shadow-[0_0_12px_#22d3ee]
          "
        />

        {active
          ? "SYSTEM ONLINE"
          : "SYSTEM STANDBY"
        }

      </div>

    </section>
  );
}

export default InteractiveRobot;
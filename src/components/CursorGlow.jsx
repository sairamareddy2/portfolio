import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setIsVisible(true);

      const target = e.target;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-pointer"
      );

      setHovering(Boolean(interactive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hide Default Cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
        `}
      </style>

      {/* Custom Cursor */}
      <motion.div
        animate={{
          x: position.x - (hovering ? 16 : 12),
          y: position.y - (hovering ? 16 : 12),
          width: hovering ? 32 : 24,
          height: hovering ? 32 : 24,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
          mass: 0.15,
        }}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
        style={{
          background: hovering
            ? "rgb(52, 211, 153)"
            : "rgb(125, 211, 252)",

          boxShadow: hovering
            ? `
              0 0 8px rgba(52, 211, 153, 0.9),
              0 0 20px rgba(52, 211, 153, 0.8),
              0 0 40px rgba(52, 211, 153, 0.6),
              0 0 70px rgba(16, 185, 129, 0.35)
            `
            : `
              0 0 8px rgba(125, 211, 252, 0.95),
              0 0 20px rgba(56, 189, 248, 0.8),
              0 0 40px rgba(56, 189, 248, 0.55),
              0 0 70px rgba(14, 165, 233, 0.3)
            `,
        }}
      />
    </>
  );
}

export default CursorGlow;
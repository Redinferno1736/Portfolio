import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import armas from '../assets/pic.jpg';

export default function AnimatedAboutSection({ isDark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="about absolute z-10 top-[120vh] flex flex-row gap-[20px] items-center justify-center w-screen">
      {/* Image Animation */}
      <motion.div
        className="first w-[20vw] h-full flex justify-center items-center"
        initial={{ x: 0, opacity: 0, scale: 0.7 }}
        animate={isInView ? { x: "-20vw", opacity: 1, scale: 1 } : {}}
        transition={{ type:"spring", stiffness: 70, damping: 20, duration: 5 }}
        style={{ position: "relative", left: "20vw" }} // Start at center
      >
        <img src={armas} alt="Profile" className="w-full h-full object-cover" />
      </motion.div>
      {/* Text Animation with conditional color */}
      <motion.div
        className={`${isDark ? "text-white" : "text-[#191818]"} card w-[40vw]`}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
      >
        Hi, I'm Pranav D P, a full stack developer passionate about building unique and efficient web applications. Over the past year, I’ve been actively creating web development projects and honing my skills across the stack. I’m also deeply interested in data structures and algorithms, and enjoy solving challenging problems with clean, impactful code. Continuous learning and exploring new technologies drive my journey as a developer.
      </motion.div>
    </div>
  );
}

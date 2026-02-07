import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profilePic from '../assets/pic.jpeg';

export default function AnimatedAboutSection({ isDark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="about z-10 flex flex-row gap-[40px] items-center justify-center w-screen px-10">
      {/* Image Container */}
      <motion.div
        className="first w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-2xl shadow-2xl"
        initial={{ x: 0, opacity: 0, scale: 0.7 }}
        animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}} // Removed x offset for cleaner centering
        transition={{ type:"spring", stiffness: 70, damping: 20, duration: 1.5 }}
      >
        <img 
          src={profilePic} 
          alt="Pranav D P" 

          className="w-full h-full object-cover object-center" 
        />
      </motion.div>
      {/* Text Animation */}
      <motion.div
        className={`${isDark ? "text-[#B0B7B5]" : "text-[#333333]"} card max-w-[500px]`}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        style={{ 
          fontFamily: 'quicksand',
          fontWeight: "700",
          fontSize: "1.1rem",
          lineHeight: "1.6"
        }}
      >
        Hi, I’m Pranav D P — I build web apps, fight bugs, and lose sleep over edge cases. I’m passionate about full-stack development, addicted to DSA problems, and constantly chasing cleaner code and better architecture. If a problem is challenging, it has my attention.
      </motion.div>
    </div>
  );
}
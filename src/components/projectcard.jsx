import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, githubLink, siteLink, index, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.05,
        boxShadow:"0 10px 40px rgba(19, 112, 98, 0.4)",
        // boxShadow: isDark
        //   ? "0 10px 40px rgba(19, 112, 98, 0.4)"
          // : "0 10px 35px rgba(19, 112, 98, 0.4)",
      }}
      style={{
        backgroundColor: isDark ? "rgba(20, 24, 27, 1)" : "#c6d6e9",  // Baby Blue for light theme
        padding: "20px",
        borderRadius: "12px",
        margin: "10px",
        width: "300px",
        color: isDark ? "white" : "#191818",
        position: "relative",
        border: isDark
          ? "1px solid rgba(22, 70, 65, 0.2)"
          : "1px solid rgba(19, 112, 98, 0.2)",
        boxShadow: isDark ? "0 4px 10px rgba(22, 70, 65, 0.2)":'0 4px 10px rgba(19, 112, 98, 0.2)',
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        style={{ color: isDark ? "#ffffff" : "#191818" ,
          fontFamily:"poppins"
        }}
      >
        {title}
      </motion.h3>

      <br />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        style={{
          minHeight: "60px",
          color: isDark ? "#B0B7B5" : "#333333",
          fontFamily:"quicksand",
        }}
      >
        {description}
      </motion.p>

      {/* Icons section */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
          display: "flex",
          gap: "15px",
        }}
      >
        {/* GitHub icon */}
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          style={{
            color: isDark ? "white" : "#191818",
            transition: "color 0.3s ease",
          }}
        >
          <FaGithub size={24} />
        </motion.a>

        {/* External Link icon */}
        <motion.a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          style={{
            color: "#137062",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FiExternalLink size={24} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

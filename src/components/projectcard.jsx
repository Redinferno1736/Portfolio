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
        scale: 1.03,
        boxShadow: "0 10px 40px rgba(19, 112, 98, 0.4)",
      }}
      style={{
        backgroundColor: isDark ? "rgba(20, 24, 27, 1)" : "#c6d6e9",
        padding: "1.25rem",
        borderRadius: "12px",
        /*
         * FIX: Original used clamp(260px, 28vw, 320px) which on single-column
         * mobile would be 260px min — fine alone, but combined with grid gap
         * it could overflow. We now use w-full with a max-width so the card
         * fills its grid cell and never pushes outside.
         */
        width: "100%",
        maxWidth: "320px",
        minHeight: "180px",
        color: isDark ? "white" : "#191818",
        position: "relative",
        border: isDark
          ? "1px solid rgba(22, 70, 65, 0.2)"
          : "1px solid rgba(19, 112, 98, 0.2)",
        boxShadow: isDark
          ? "0 4px 10px rgba(22, 70, 65, 0.2)"
          : "0 4px 10px rgba(19, 112, 98, 0.2)",
        transition: "background-color 0.3s ease, color 0.3s ease",
        boxSizing: "border-box",
        // Ensure there's always room at bottom for the icons
        paddingBottom: "3rem",
      }}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        style={{
          color: isDark ? "#ffffff" : "#191818",
          fontFamily: "poppins",
          fontSize: "1rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        style={{
          color: isDark ? "#B0B7B5" : "#333333",
          fontFamily: "quicksand",
          fontSize: "0.9rem",
          lineHeight: "1.5",
        }}
      >
        {description}
      </motion.p>

      {/* Icons — absolutely positioned at bottom right */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "12px",
          right: "12px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: isDark ? "white" : "#191818", transition: "color 0.3s ease" }}
        >
          <FaGithub size={22} />
        </motion.a>

        {siteLink && (
          <motion.a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "#137062", display: "flex", alignItems: "center" }}
          >
            <FiExternalLink size={22} />
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

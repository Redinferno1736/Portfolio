import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaBootstrap, FaGithub, FaNpm, FaDatabase } from "react-icons/fa";
import {
  SiVite, SiFlask, SiTailwindcss, SiHtml5, SiCss3, SiNextdotjs,
  SiGit, SiMongodb, SiPython, SiC
} from "react-icons/si";
import { DiJavascript1, DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <DiJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C", icon: <SiC /> },
      { name: "JavaScript", icon: <DiJavascript1 /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Flask", icon: <SiFlask /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "npm", icon: <FaNpm /> },
    ],
  },
  {
    category: "Database Management",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQLite", icon: <FaDatabase /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

function SkillsGrid({ skills = skillsData, isDark }) {
  const gridStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.8rem",
    background: isDark ? "#181c1f" : "#c6d6e9",
    padding: "1.8rem",
    borderRadius: "16px",
    color: isDark ? "#ffffff" : "#191818",
    maxWidth: "900px",
    margin: "2rem auto",
    border: isDark
      ? "1px solid rgba(19, 112, 98, 0.2)"
      : "1px solid rgba(19, 112, 98, 0.1)",
    boxShadow: isDark
      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
      : "0 4px 15px rgba(0,0,0,0.08)",
  };

  const categoryStyle = {
    marginBottom: "1rem",
    fontFamily: "Poppins",
    color: isDark ? "#ffffff" : "#191818",
    fontWeight: "700",
  };

  const skillsRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    fontFamily: "quicksand",
  };

  const skillBoxStyle = (isDark) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    background: isDark ? "rgba(40,40,40,0.7)" : "#e6eef7",
    borderRadius: "10px",
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    minWidth: "120px",
    border: "1px solid transparent",
    boxShadow: isDark
      ? "0 3px 10px rgba(0,0,0,0.3)"
      : "0 3px 8px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  });

  return (
    <motion.div
      style={gridStyle}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {skills.map((group) => (
        <motion.div key={group.category} variants={categoryVariants}>
          <motion.h2 style={categoryStyle}>{group.category}</motion.h2>
          <div style={skillsRowStyle}>
            {group.skills.map((skill) => (
              <motion.div
                key={skill.name}
                style={skillBoxStyle(isDark)}
                variants={skillVariants}
                whileHover={{
                  scale: 1.1,
                  borderColor: "#137062",
                  boxShadow: isDark
                    ? "0 5px 15px rgba(19, 112, 98, 0.3)"
                    : "0 5px 15px rgba(19, 112, 98, 0.25)",
                  background: isDark
                    ? "rgba(19, 112, 98, 0.2)"
                    : "rgba(19, 112, 98, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  style={{
                    fontSize: "1.5rem",
                    color: "#137062",
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SkillsGrid;

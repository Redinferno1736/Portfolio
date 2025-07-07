import React from "react";
import { FaReact, FaNodeJs, FaBootstrap, FaGithub, FaNpm,FaDatabase } from "react-icons/fa";
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

const gridStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  background: "#181c1f",
  padding: "2rem",
  borderRadius: "16px",
  color: "#fff",
  maxWidth: "900px",
  margin: "2rem auto",
};

const categoryStyle = {
  marginBottom: "1rem",
};

const skillsRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
};

const skillBoxStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  background: "rgba(40,40,40,0.7)",
  borderRadius: "10px",
  padding: "0.75rem 1.5rem",
  fontSize: "1.1rem",
  minWidth: "120px",
};

function SkillsGrid({ skills = skillsData }) {
  return (
    <div style={gridStyle}>
      {skills.map((group) => (
        <div key={group.category}>
          <h2 style={categoryStyle}>{group.category}</h2>
          <div style={skillsRowStyle}>
            {group.skills.map((skill) => (
              <div key={skill.name} style={skillBoxStyle}>
                <span style={{ fontSize: "1.5rem", color:"#137062"}}>{skill.icon}</span>
                <span >{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsGrid;

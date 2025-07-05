import React from "react";

// Example icons (replace with your own or from a library)
import { FaReact, FaNodeJs, FaPhp, FaSass, FaBootstrap, FaGithub, FaNpm, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiVite, SiWebpack, SiPrisma, SiTailwindcss, SiHtml5, SiCss3, SiSocketdotio, SiDirectus, SiVisualstudiocode } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "NextJS", icon: <FaReact /> },
      { name: "Node", icon: <FaNodeJs /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Webpack", icon: <SiWebpack /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "Javascript", icon: <DiJavascript1 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "SASS", icon: <FaSass /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Github", icon: <FaGithub /> },
      { name: "Wordpress", icon: <FaWordpress /> },
      { name: "Directus", icon: <SiDirectus /> },
      { name: "NPM", icon: <FaNpm /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
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
                <span style={{ fontSize: "1.5rem" }}>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export default SkillsGrid;

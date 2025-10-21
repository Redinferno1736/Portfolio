import { motion } from 'framer-motion';
import ProjectCard from './projectcard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function ProjectsSection({isDark}) {
  const projects = [
    {
      title: "FabrAIc",
      description: "AI-powered website that stores all the clothes in your wardrobe and generates outfit combinations.",
      githubLink: "https://github.com/yourusername/fabraic",
      siteLink: "https://fabraic.example.com"
    },
    {
      title: "CareBridgeAI",
      description: "An AI chatbot designed for refugees providing immediate medical assistance and helping NGOs contact them efficiently.",
      githubLink: "https://github.com/yourusername/carebridgeai",
      siteLink: "https://carebridgeai.example.com"
    },
    {
      title: "HackArena",
      description: "A platform to host and attend hackathons, offering interfaces for uploading hackathon details and submitting projects as teams.",
      githubLink: "https://github.com/yourusername/hackarena",
      siteLink: "https://hackarena.example.com"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, featuring smooth animations and a modern design.",
      githubLink: "https://github.com/yourusername/portfolio",
      siteLink: "https://portfolio.example.com"
    },
    {
      title: "Jarvis",
      description: "A voice and text-operated chatbot with a user-defined personality.",
      githubLink: "https://github.com/yourusername/jarvis",
      siteLink: "https://jarvis.example.com"
    },
    {
      title: "Marin Web App",
      description: "A basic personal assistant that performs tasks like controlling system settings, searching the web, and playing music based on user preferences.",
      githubLink: "https://github.com/yourusername/marin-web-app",
      siteLink: "https://marinwebapp.example.com"
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          index={index}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
          siteLink={project.siteLink}
          isDark={isDark}
        />
      ))}
    </motion.div>
  );
}

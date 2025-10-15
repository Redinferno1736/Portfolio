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

export default function ProjectsSection() {
  const projects = [
    {
      title: "Hackarena",
      description: "Text-guided image editing by manipulating diffusion path without any training.",
      githubLink: "https://github.com/yourusername/project1",
      siteLink: "https://project1.example.com"
    },
    {
      title: "CareBridgeAI",
      description: "AI-powered medical chatbot with multilingual support and voice interaction.",
      githubLink: "https://github.com/yourusername/project2",
      siteLink: "https://project2.example.com"
    },
    {
      title: "Portfolio Website",
      description: "Modern, interactive portfolio with smooth animations and dynamic effects.",
      githubLink: "https://github.com/yourusername/project3",
      siteLink: "https://project3.example.com"
    },
    {
      title: "Task Manager Pro",
      description: "Full-stack task management application with real-time collaboration features.",
      githubLink: "https://github.com/yourusername/project4",
      siteLink: "https://project4.example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with 7-day forecasts and location-based alerts.",
      githubLink: "https://github.com/yourusername/project5",
      siteLink: "https://project5.example.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and inventory management.",
      githubLink: "https://github.com/yourusername/project6",
      siteLink: "https://project6.example.com"
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
        />
      ))}
    </motion.div>
  );
}

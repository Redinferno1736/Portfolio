import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './projectcard';
import { projectData } from '../data/projects'; // Import your data

const ITEMS_PER_PAGE = 6;

export default function ProjectsSection({ isDark }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const totalPages = Math.ceil(projectData.length / ITEMS_PER_PAGE);

  // Calculate the projects to display for the current page
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentProjects = projectData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Animation variants for the sliding effect
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      
      {/* Navigation Controls (Top Right or Absolute) */}
      <div className="flex gap-4 justify-end w-full px-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`p-3 rounded-full transition-all duration-300 ${
            currentPage === 0 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-[#137062] hover:text-white cursor-pointer'
          } ${isDark ? 'text-white bg-white/10' : 'text-black bg-black/10'}`}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`p-3 rounded-full transition-all duration-300 ${
            currentPage === totalPages - 1 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-[#137062] hover:text-white cursor-pointer'
          } ${isDark ? 'text-white bg-white/10' : 'text-black bg-black/10'}`}
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Project Grid Container with AnimatePresence */}
      <div className="w-full relative min-h-[70vh]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="flex flex-wrap justify-center gap-4 w-full absolute top-0"
          >
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={`${currentPage}-${index}`} // Unique key ensures re-render on page change
                index={index} // Resets delay for every page
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                siteLink={project.siteLink}
                isDark={isDark}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page Indicator */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentPage 
                ? 'w-8 bg-[#137062]' 
                : `w-2 ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`
            }`}
          />
        ))}
      </div>
    </div>
  );
}
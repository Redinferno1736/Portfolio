import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './projectcard';
import { projectData } from '../data/projects';

const ITEMS_PER_PAGE = 8; // 2 rows x 4 columns on desktop

export default function ProjectsSection({ isDark }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(projectData.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentProjects = projectData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* Pagination Arrows */}
      <div className="flex gap-4 justify-end w-full px-6 mb-8">
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

      {/* Grid */}
      <div className="w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 250, damping: 25 },
              opacity: { duration: 0.2 }
            }}
            className="
            grid
            grid-cols-1
            min-[550px]:grid-cols-2
            min-[800px]:grid-cols-3
            min-[1350px]:grid-cols-4
            gap-6
            w-full
            justify-items-center
          "

          >
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={`${currentPage}-${index}`}
                index={index}
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

      {/* Page Dots */}
      <div className="flex gap-2 mt-4">
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

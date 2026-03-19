import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./projectcard";
import { projectData } from "../data/projects";

export default function ProjectsSection({ isDark }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(2);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      // Columns based on width
      if (width >= 1350) setColumns(4);
      else if (width >= 900) setColumns(3);
      else if (width >= 550) setColumns(2);
      else setColumns(1);

      // Rows: simpler fixed approach — avoids dynamic calculation bugs
      // on small screens. Just fix to 2 rows on all sizes for clean pagination.
      setRows(2);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const ITEMS_PER_PAGE = columns * rows;
  const totalPages = Math.ceil(projectData.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(0);
    }
  }, [columns, rows, totalPages]);

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

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? "4vw" : "-4vw", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? "4vw" : "-4vw", opacity: 0 }),
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* ── Pagination Controls ── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center w-full mb-6 gap-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`p-3 rounded-full transition-all duration-300 ${
              currentPage === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-[#137062] hover:text-white cursor-pointer"
            } ${isDark ? "text-white bg-white/10" : "text-black bg-black/10"}`}
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentPage ? 1 : -1);
                  setCurrentPage(i);
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentPage ? '24px' : '8px',
                  height: '8px',
                  background: i === currentPage
                    ? '#137062'
                    : (isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'),
                }}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`p-3 rounded-full transition-all duration-300 ${
              currentPage === totalPages - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-[#137062] hover:text-white cursor-pointer"
            } ${isDark ? "text-white bg-white/10" : "text-black bg-black/10"}`}
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      )}

      {/* ── Grid Container ── */}
      {/*
        FIX: The original used `min-h-[55vh]` which caused layout collapse on mobile.
        We use `auto` min-height here and let the cards define the height.
        The grid uses justify-items-center to prevent cards from stretching weirdly.
        Card width is now controlled inside ProjectCard via max-width/width constraints.
      */}
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
              x: { type: "spring", stiffness: 180, damping: 28 },
              opacity: { duration: 0.25 },
            }}
            className="
              grid
              grid-cols-1
              min-[550px]:grid-cols-2
              min-[900px]:grid-cols-3
              min-[1350px]:grid-cols-4
              gap-4
              sm:gap-6
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

    </div>
  );
}

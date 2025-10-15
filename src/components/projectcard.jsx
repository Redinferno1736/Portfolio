import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, githubLink, siteLink, index }) => {
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
        boxShadow: "0 10px 40px rgba(19, 112, 98, 0.4)"
      }}
      style={{
        backgroundColor: '#181c1f',
        padding: '20px',
        borderRadius: '12px',
        margin: '10px',
        width: '300px',
        color: 'white',
        position: 'relative',
        border: '1px solid rgba(19, 112, 98, 0.2)',
      }}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {title}
      </motion.h3>
      <br />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        style={{ minHeight: '60px' }}
      >
        {description}
      </motion.p>
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px',
          display: 'flex',
          gap: '15px'
        }}
      >
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: 'white' }}
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          style={{
            color: '#137062',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <FiExternalLink size={24} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

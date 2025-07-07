import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({
  title,
  description,
  githubLink,
  siteLink,
}) => {
  return (
    <div style={{
      backgroundColor: '#181c1f',
      padding: '20px',
      borderRadius: '8px',
      margin: '10px',
      width: '300px',
      color:'white',
      position: 'relative'
    }}>
      <h3>{title}</h3>
      <br />
      <p>{description}</p>
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        display: 'flex',
        gap: '10px'
      }}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          <FaGithub size={24} />
        </a>
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#007bff',
            display: 'flex',
            alignItems: 'center'
          }}
          title="Visit Site"
        >
          <FiExternalLink size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

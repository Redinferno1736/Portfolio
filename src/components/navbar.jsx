import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar({ onAboutClick, onSkillsClick, onProjectsClick, onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    width: "70%",
    height: "6vh",
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "30px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    position: "fixed",
    top: 25,
    zIndex: 1000,
    transition: "all 0.3s ease",
    border: scrolled ? "1px solid rgba(19, 112, 98, 0.3)" : "1px solid transparent",
  };

  const linkStyle = {
    position: "relative",
    color: "#D6D6D6",
    cursor: "pointer",
    padding: "5px 10px",
    transition: "color 0.3s ease",
  };

  return (
    <motion.nav
      style={navbarStyle}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        style={{ margin: 0, fontSize: "2rem", fontFamily: "Allura", color: "white" }}
        whileHover={{ scale: 1.05, color: "#137062" }}
        transition={{ duration: 0.2 }}
      >
        Pranav D P
      </motion.h1>
      <div className="flex gap-6 align-middle justify-center" style={{ fontFamily: "Poppins" }}>
        {[
          { name: 'About', onClick: onAboutClick },
          { name: 'Skills', onClick: onSkillsClick },
          { name: 'Projects', onClick: onProjectsClick },
          { name: 'Contact', onClick: onContactClick }
        ].map((item) => (
          <motion.a
            key={item.name}
            href={`#${item.name.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              item.onClick();
              setActiveSection(item.name);
            }}
            style={linkStyle}
            whileHover={{ color: "#137062", scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "#137062",
              }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;

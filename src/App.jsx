import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ToggleSwitch from './components/toggleswitch';
import Navbar from "./components/navbar";
import SpotlightText from './components/spotlight';
import MinimalIcons from './components/minimalicons';
import TextPressure from './components/textpressure';
import CombinedCanvas from './components/combinedcanvas';
import AnimatedAboutSection from './components/animatedabout';
import SkillsGrid from './components/skillsgrid';
import ProjectsSection from './components/projectsection';
import TechSetLogo from './components/techset';
import { FiFileText } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Helix } from 'ldrs/react';
import 'ldrs/react/Helix.css';
import ContactSection from './components/contactsection';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  const aboutSectionRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const dark = savedTheme === "dark";
      setIsDark(dark);
      document.body.style.backgroundColor = dark ? "#222222" : "#f3f3f3";
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      document.body.style.backgroundColor = newTheme ? "#222222" : "#f3f3f3";
      return newTheme;
    });
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#222222]">
        <Helix size="65" speed="2.5" color="white" />
      </div>
    );
  }

  const items = [
    { icon: <FiFileText />, color: 'grey', label: 'Resume' },
    { icon: <FaGithub />, color: 'grey', label: 'GitHub' },
    { icon: <FaLinkedin />, color: 'grey', label: 'LinkedIn' },
    { icon: <MdEmail />, color: 'grey', label: 'Email' },
  ];

  return (
    <div className={isDark ? "dark" : "light"}>
      <div className="relative z-1000 h-[100vh] transition-colors duration-300">
        <div className="flex items-center relative justify-between">
          {/* Navbar wrapper to center */}
          <div className="flex-grow flex justify-center">
            <Navbar
              onAboutClick={() => aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
              onSkillsClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}
              onProjectsClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
              onContactClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
              isDark={isDark}
            />
          </div>

          {/* ToggleSwitch aligned right */}
          <ToggleSwitch isDark={isDark} toggleTheme={toggleTheme} />
        </div>

        <div className="hero mt-15 flex flex-col justify-center items-center h-3/4 w-screen">
          <div
            style={{ position: 'relative', height: '90px' }}
            className={`${isDark ? 'fs' : 'fs-light'} w-1/4`}
          >
            <TextPressure
              text="FULL STACK"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              isDark={isDark}
              textColor={isDark ? "#ffffff" : "#191818"}
              strokeColor={isDark ? "#ff0000" : "#b03737"}
              minFontSize={48}
            />
          </div>
          <SpotlightText>
            DEVELOPER
          </SpotlightText>
          <div
            className="tag w-full flex items-center justify-center"
            style={{ color: isDark ? "#B0B7B5" : "#333333", fontFamily:"quicksand",fontWeight:"500" }}
          >
            Turning complex problems into elegant, high-performance software
          </div>
        </div>
      </div>

      <div ref={aboutSectionRef}>
        <CombinedCanvas isDark={isDark} />
        <AnimatedAboutSection isDark={isDark} />
        <div style={{ height: '200px' }} className="w-full grid place-items-center absolute top-[170vh] z-30">
          <MinimalIcons items={items} isDark={isDark} className="custom-class" />
        </div>
      </div>

      <div ref={skillsRef} className='h-[100vh]'>
        <div className='absolute top-[210vh] w-[95vw] z-40 flex'>
          <div className="flex w-full">
            <div className="flex-1">
              <SkillsGrid isDark={isDark} />
            </div>
            <div className="flex items-center justify-center" style={{ minWidth: 420 }}>
              <TechSetLogo first="TECH" second="STACK" isDark={isDark} />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={projectsRef}
        className="w-full py-22 flex justify-center"
        style={{
          background: isDark
            ? "linear-gradient(135deg,#137062 0%, #181c1f 20%,#181c1f 80%, #137062 100%)"
            : "linear-gradient(135deg,#137062 0%,#c6d6e9 20%,#c6d6e9 80%, #137062 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '500px',
            height: '500px',
            pointerEvents: 'none',
            background: 'radial-gradient(circle at 90% 80%, #16e1b0 0%, transparent 70%)',
            opacity: 0.26,
            zIndex: 1
          }}
        />
        <div className="flex flex-col md:flex-row items-center gap-70 w-full justify-between relative z-10">
          <div className="md:w-1/3 w-full flex pl-10 md:justify-start justify-center mb-8 md:mb-0">
            <TechSetLogo first="FEATURED" second="PROJECTS" isDark={isDark} />
          </div>
          <div className="md:w-2/3 w-full flex md:justify-end justify-center">
            <ProjectsSection isDark={isDark} />
          </div>
        </div>
      </div>

      <div ref={contactRef} className="w-full flex justify-center ">
        <div className="w-full">
          <ContactSection isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export default App;

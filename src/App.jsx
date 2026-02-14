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
import ProjectsTitle from './components/projectstitle';
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
    {
      icon: <FiFileText />,
      color: 'grey',
      label: 'Resume',
      href: '/PranavDP_Resume.pdf'
    },
    {
      icon: <FaGithub />,
      color: 'grey',
      label: 'GitHub',
      href: 'https://github.com/Redinferno1736'
    },
    {
      icon: <FaLinkedin />,
      color: 'grey',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pranav-d-p-a2100a333/'
    },
    {
      icon: <MdEmail />,
      color: 'grey',
      label: 'Email',
      href: 'mailto:email.pranavdp@gmail.com'
    },
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden ${isDark ? "dark bg-[#222222]" : "light bg-[#f3f3f3]"}`}>

      <div className="relative flex flex-col min-h-screen transition-colors duration-300">

        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex-grow flex justify-center">
            <Navbar
              onAboutClick={() => aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
              onSkillsClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}
              onProjectsClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
              onContactClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
              isDark={isDark}
            />
          </div>
          <ToggleSwitch isDark={isDark} toggleTheme={toggleTheme} />
        </div>

        <div className="hero flex-grow flex flex-col justify-center items-center px-4 text-center">
          <div
            style={{ position: 'relative' }}
            className={`${isDark ? 'fs' : 'fs-light'} w-[60vw] md:w-[30vw] h-auto`}

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
            className="tag w-full max-w-lg mt-4 text-center"
            style={{ color: isDark ? "#B0B7B5" : "#333333" }}
          >
            Turning complex problems into elegant, high-performance software
          </div>
        </div>
      </div>

      <div ref={aboutSectionRef} className="relative w-full">
        <CombinedCanvas isDark={isDark} />
        <div className='absolute top-[15vh] min-[900px]:top-[20vh] flex flex-col gap-8'>
          <AnimatedAboutSection isDark={isDark} />

          <div className="w-full flex justify-center">
            <MinimalIcons items={items} isDark={isDark} />
          </div>
        </div>
      </div>

      <div ref={skillsRef} className="w-full min-h-screen flex items-center justify-center py-30">
        <div className="
    w-[95vw] 
    grid grid-cols-1 
    min-[900px]:grid-cols-[7fr_3fr]
    items-center 
    min-[900px]:gap-10
  ">

          {/* LOGO — first on mobile, second on desktop */}
          <div className="
  flex items-center justify-center 
  order-1 min-[900px]:order-2
  w-full min-h-[300px]
">
            <TechSetLogo first="TECH" second="STACK" isDark={isDark} />
          </div>


          {/* SKILLS — second on mobile, first on desktop */}
          <div className="order-2 min-[900px]:order-1">
            <SkillsGrid isDark={isDark} />
          </div>

        </div>
      </div>



      <div
        ref={projectsRef}
        className="w-full flex justify-center min-h-screen"
        style={{
          background: isDark
            ? "linear-gradient(135deg,#137062 0%, #181c1f 20%,#181c1f 80%, #137062 100%)"
            : "linear-gradient(135deg,#137062 0%,#c6d6e9 20%,#c6d6e9 80%, #137062 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background glow */}
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

        <div className="w-[95vw] relative z-10 py-16 flex flex-col items-center">

          {/* TITLE ON TOP */}
          <div className="pt-7">
            <ProjectsTitle isDark={isDark} />
          </div>

          {/* PROJECT GRID */}
          <div className="w-full">
            <ProjectsSection isDark={isDark} />
          </div>

        </div>
      </div>

      <div ref={contactRef} className="w-full">
        <ContactSection isDark={isDark} />
      </div>

    </div>
  );
}

export default App;

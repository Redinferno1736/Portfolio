import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import Navbar from "./components/navbar";
import SpotlightText from './components/spotlight';
import MinimalIcons from './components/minimalicons';
import TextPressure from './components/textpressure';
import CombinedCanvas from './components/combinedcanvas';
import AnimatedAboutSection from './components/animatedabout';
import SkillsGrid from './components/skillsgrid';
import ProjectsSection from './components/projectsection';
import TechSetLogo from './components/techset';
import { motion } from 'framer-motion';
import { FiFileText } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Helix } from 'ldrs/react'
import 'ldrs/react/Helix.css'
import ContactSection from './components/contactsection';

function App() {
  const [loading, setLoading] = useState(true);
  const aboutSectionRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      <div className="relative z-1000 h-[100vh]">
        <div className="flex justify-center items-center">
          <Navbar onAboutClick={() => aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
            onSkillsClick={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}
            onProjectsClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
            onContactClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} />

        </div>
        <div className="hero mt-35 flex flex-col justify-center items-center h-3/4 w-screen">
          <div style={{ position: 'relative', height: '90px' }} className='fs w-1/4'>
            <TextPressure
              text="FULL STACK"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={48}
            />
          </div>
          <SpotlightText>
            DEVELOPER
          </SpotlightText>
          <div className="tag w-full flex items-center justify-center">
            Turning complex problems into elegant, high-performance software
          </div>
        </div>
      </div>
      <div ref={aboutSectionRef}>
        <CombinedCanvas />
        <AnimatedAboutSection />
        <div style={{ height: '200px' }} className="w-full grid place-items-center absolute top-[170vh] z-30">
          <MinimalIcons items={items} className="custom-class" />
        </div>
      </div>
      <div ref={skillsRef} className='h-[100vh]' >
        <div className='absolute top-[210vh] w-[95vw] z-40 flex'>
          <div className="flex w-full">
            <div className="flex-1">
              <SkillsGrid />
            </div>
            <div className="flex items-center justify-center" style={{ minWidth: 420 }}>
              <TechSetLogo first="TECH" second="STACK" />
            </div>
          </div>
        </div>
      </div>
      <div ref={projectsRef} className="w-full py-22 flex justify-center">
        <div className="flex flex-col md:flex-row items-center gap-35 w-full justify-between">
          <div className="md:w-1/3 w-full flex pl-10 md:justify-start justify-center mb-8 md:mb-0">
            <TechSetLogo first="FEATURED" second="PROJECTS" />
          </div>
          <div className="md:w-2/3 w-full flex md:justify-end justify-center">
            <ProjectsSection />
          </div>
        </div>
      </div>


      <div ref={contactRef} className="w-full flex justify-center ">
        <div className="w-full">
          <ContactSection />
        </div>
      </div>

    </>
  )
}

export default App

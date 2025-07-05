import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import Navbar from "./components/navbar";
import SpotlightText from './components/spotlight';
import GlassIcons from './components/glassicons';
import TextPressure from './components/textpressure';
import CombinedCanvas from './components/combinedcanvas';
import AnimatedAboutSection from './components/animatedabout';
import SkillsGrid from './components/skillsgrid';
import { FiFileText } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Helix } from 'ldrs/react'
import 'ldrs/react/Helix.css'

function App() {
  const [loading, setLoading] = useState(true);
  const aboutSectionRef = useRef(null);
  const skillsRef = useRef(null);
  
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
      <div className="relative z-10 h-[100vh]">
        <div className="flex justify-center items-center">
          <Navbar onAboutClick={() => aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })} />
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
          <GlassIcons items={items} className="custom-class" />
        </div>
      </div>
      <div ref={skillsRef} className='absolute top-[220vh] w-screen z-40'>
        <SkillsGrid />
      </div>
    </>
  )
}

export default App

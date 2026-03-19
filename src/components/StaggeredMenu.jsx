import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiFileText } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ToggleSwitch from './toggleswitch';

export const StaggeredMenu = ({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
  isDark,
  toggleTheme,
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);

  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);

  const textInnerRef = useRef(null);
  const [textLines, setTextLines] = useState(['Menu', 'Close']);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);

  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef(null);

  // Colors matching the portfolio teal theme
  const colors = isDark
    ? ['rgba(19,112,98,0.6)', 'rgba(19,112,98,0.85)']
    : ['rgba(19,112,98,0.4)', 'rgba(19,112,98,0.7)'];

  const panelBg = isDark ? '#181c1f' : '#c6d6e9';
  const accentColor = '#137062';
  const menuButtonColor = isDark ? '#ffffff' : '#191818';

  const navItems = [
    { label: 'About', action: onAboutClick },
    { label: 'Skills', action: onSkillsClick },
    { label: 'Projects', action: onProjectsClick },
    { label: 'Contact', action: onContactClick },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Redinferno1736', icon: <FaGithub /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranav-d-p-a2100a333/', icon: <FaLinkedin /> },
    { label: 'Email', href: 'mailto:email.pranavdp@gmail.com', icon: <MdEmail /> },
    { label: 'Resume', href: '/PranavDP_Resume.pdf', icon: <FiFileText /> },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      gsap.set([panel, ...preLayers], { xPercent: 100 });
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();
    closeTweenRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const toggleWrap = panel.querySelector('.sm-toggle-wrap');

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (toggleWrap) gsap.set(toggleWrap, { opacity: 0, y: 15 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(panel, { xPercent: panelStart }, { xPercent: 0, duration: panelDuration, ease: 'power4.out' }, panelInsertTime);

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15;
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1 } }, itemsStart);
    }

    const socialsStart = panelInsertTime + panelDuration * 0.4;
    if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
    if (socialLinks.length) {
      tl.to(socialLinks, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', stagger: { each: 0.08 } }, socialsStart + 0.04);
    }
    if (toggleWrap) {
      tl.to(toggleWrap, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, socialsStart + 0.15);
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => { busyRef.current = false; });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    closeTweenRef.current?.kill();
    closeTweenRef.current = gsap.to([...layers, panel], {
      xPercent: 100,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => { busyRef.current = false; }
    });
  }, []);

  const animateIcon = useCallback(opening => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.timeline({ defaults: { ease: 'power4.out' } })
        .to(h, { rotate: 45, duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
        .to(h, { rotate: 0, duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0);
    }
  }, []);

  const animateColor = useCallback(opening => {
    const btn = toggleBtnRef.current;
    if (!btn) return;
    colorTweenRef.current?.kill();
    colorTweenRef.current = gsap.to(btn, {
      color: opening ? '#ffffff' : menuButtonColor,
      delay: 0.18,
      duration: 0.3,
      ease: 'power2.out'
    });
  }, [menuButtonColor]);

  const animateText = useCallback(opening => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();

    const seq = [opening ? 'Menu' : 'Close', opening ? 'Close' : 'Menu', opening ? 'Close' : 'Menu'];
    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });

    const lineCount = seq.length;
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -((lineCount - 1) / lineCount) * 100,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) playOpen(); else playClose();
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText]);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);
    playClose();
    animateIcon(false);
    animateColor(false);
    animateText(false);
  }, [playClose, animateIcon, animateColor, animateText]);

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;
    const handle = (e) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        toggleBtnRef.current && !toggleBtnRef.current.contains(e.target)
      ) closeMenu();
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open, closeMenu]);

  const handleNavClick = (action) => {
    closeMenu();
    setTimeout(() => action?.(), 350);
  };

  const scrollToTop = () => {
    closeMenu();
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 350);
  };

  return (
    <div className="sm-scope fixed top-0 left-0 w-screen h-screen pointer-events-none z-50">
      <div className="relative w-full h-full pointer-events-none">

        {/* Pre-layers (teal swoosh) */}
        <div
          ref={preLayersRef}
          className="absolute top-0 right-0 bottom-0 pointer-events-none"
          style={{ width: '100vw', zIndex: 5 }}
          aria-hidden="true"
        >
          {colors.map((c, i) => (
            <div
              key={i}
              className="sm-prelayer absolute top-0 right-0 h-full w-full"
              style={{ background: c }}
            />
          ))}
        </div>

        {/* Top bar: logo + hamburger */}
        <header
          className="absolute top-0 left-0 w-full flex items-center justify-between px-5 pointer-events-auto"
          style={{
            height: '64px',
            zIndex: 20,
            background: isDark
              ? 'rgba(34,34,34,0.85)'
              : 'rgba(216,226,238,0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${isDark ? 'rgba(19,112,98,0.2)' : 'rgba(19,112,98,0.15)'}`,
          }}
        >
          {/* Logo */}
          <span
            onClick={scrollToTop}
            style={{
              fontFamily: 'Allura',
              fontSize: '1.8rem',
              color: isDark ? '#ffffff' : '#191818',
              cursor: 'pointer',
            }}
          >
            Pranav D P
          </span>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-3">
            <button
              ref={toggleBtnRef}
              onClick={toggleMenu}
              className="flex items-center gap-2 bg-transparent border-0 cursor-pointer font-medium"
              style={{
                color: isDark ? '#ffffff' : '#191818',
                fontFamily: 'Poppins',
                fontSize: '0.9rem',
                padding: '8px 4px',
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {/* Text cycle */}
              <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  height: '1em',
                  overflow: 'hidden',
                  width: '42px',
                  textAlign: 'right',
                }}
                aria-hidden="true"
              >
                <span ref={textInnerRef} style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                  {textLines.map((l, i) => (
                    <span key={i} style={{ display: 'block', height: '1em', lineHeight: 1 }}>{l}</span>
                  ))}
                </span>
              </span>

              {/* Plus/X icon */}
              <span
                ref={iconRef}
                style={{
                  position: 'relative',
                  width: '14px',
                  height: '14px',
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-hidden="true"
              >
                <span
                  ref={plusHRef}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '100%',
                    height: '2px',
                    background: 'currentColor',
                    borderRadius: '2px',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
                <span
                  ref={plusVRef}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '100%',
                    height: '2px',
                    background: 'currentColor',
                    borderRadius: '2px',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </span>
            </button>
          </div>
        </header>

        {/* Slide-in Panel */}
        <aside
          ref={panelRef}
          aria-hidden={!open}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100vw',
            height: '100%',
            background: panelBg,
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
            display: 'flex',
            flexDirection: 'column',
            padding: '80px 2rem 2rem 2rem',
            overflowY: 'auto',
            zIndex: 10,
            pointerEvents: open ? 'auto' : 'none',
          }}
        >
          {/* Nav items */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                style={{ position: 'relative', overflow: 'hidden', lineHeight: 1 }}
              >
                <button
                  onClick={() => handleNavClick(item.action)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Montserrat, Arial, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(2.8rem, 12vw, 5rem)',
                    color: isDark ? '#ffffff' : '#191818',
                    lineHeight: 1,
                    letterSpacing: '-2px',
                    textTransform: 'uppercase',
                    padding: '0.1em 0',
                    display: 'inline-block',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = accentColor}
                  onMouseLeave={e => e.currentTarget.style.color = isDark ? '#ffffff' : '#191818'}
                >
                  <span
                    className="sm-panel-itemLabel"
                    style={{ display: 'inline-block', transformOrigin: '50% 100%', willChange: 'transform' }}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div
            style={{
              marginTop: '2rem',
              height: '1px',
              width: '60px',
              background: accentColor,
              borderRadius: '2px',
            }}
          />

          {/* Social links */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3
              className="sm-socials-title"
              style={{
                margin: 0,
                fontFamily: 'Poppins',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: accentColor,
              }}
            >
              Connect
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              {socialLinks.map((s, i) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="sm-socials-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'Quicksand, sans-serif',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: isDark ? '#B0B7B5' : '#333333',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      padding: '4px 0',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = accentColor}
                    onMouseLeave={e => e.currentTarget.style.color = isDark ? '#B0B7B5' : '#333333'}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{s.icon}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme toggle note at bottom */}
          <div
            className="sm-toggle-wrap"
            style={{
              marginTop: 'auto',
              paddingTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontSize: '0.85rem',
                color: isDark ? '#B0B7B5' : '#555',
              }}
            >
              {isDark ? 'Dark mode' : 'Light mode'}
            </span>

            <ToggleSwitch isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StaggeredMenu;

import React from 'react';
import styled from 'styled-components';

const ToggleSwitch = ({ isDark, toggleTheme }) => {
  return (
    <StyledWrapper>
      <label className="toggle-label" aria-label="Toggle theme">
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          className="toggle-input"
        />
        <div className="toggle-track">
          <div className="toggle-thumb">
            {/* Moon — shown in dark mode */}
            <svg className="icon-moon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
            </svg>
            {/* Sun — shown in light mode */}
            <svg className="icon-sun" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1"  x2="12" y2="4"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="4.22" y1="4.22"   x2="6.34"  y2="6.34"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="1"  y1="12" x2="4"  y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  .toggle-label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .toggle-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  /* ── Full pill track ── */
  .toggle-track {
    position: relative;
    width: 58px;
    height: 30px;
    border-radius: 10px;
    background: #238C7D;
    transition: background 0.35s ease, box-shadow 0.35s ease;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
  }

  /* ── Circular white thumb ── */
  .toggle-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 22px;
    height: 22px;
    border-radius: 8px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
      background 0.35s ease;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }

  .icon-moon,
  .icon-sun {
    position: absolute;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  /* Light mode: blue track, sun icon, thumb on left */
  .icon-moon { opacity: 0; transform: scale(0.5) rotate(30deg); color: #3b82f6; }
  .icon-sun  { opacity: 1; transform: scale(1)   rotate(0deg);  color: #f59e0b; }

  /* ── Dark mode (checked) ── */
  .toggle-input:checked ~ .toggle-track {
    background: #137062;
    box-shadow: 0 0 10px rgba(19, 112, 98, 0.5);
  }

  .toggle-input:checked ~ .toggle-track .toggle-thumb {
    transform: translateX(28px);
  }

  .toggle-input:checked ~ .toggle-track .icon-moon {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    color: #137062;
  }

  .toggle-input:checked ~ .toggle-track .icon-sun {
    opacity: 0;
    transform: scale(0.5) rotate(-30deg);
  }

  /* Hover */
  .toggle-label:hover .toggle-track {
    filter: brightness(1.15);
  }
`;

export default ToggleSwitch;

import React from "react";

const getStyles = (isDark) => ({
  tech: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    fontFamily: "Montserrat, Arial, sans-serif",
    fontWeight: "900",
    fontSize: "clamp(60px, 5vw, 80px)",
    color: isDark ? "#fff" : "#191818",
    letterSpacing: "2px",
    zIndex: 2,
    textTransform: "uppercase",
  },
  set: {
    position: "absolute",
    top: "48px",
    left: "0",
    width: "100%",
    fontFamily: "Montserrat, Arial, sans-serif",
    fontWeight: "900",
    fontSize: "clamp(60px, 5vw, 80px)",
    color: "transparent",
    letterSpacing: "2px",
    zIndex: 3,
    textTransform: "uppercase",
    WebkitTextStroke: isDark ? "3px #137062" : "3px #0c7663",
  },
});

function TechSetLogo({ first, second, isDark }) {
  const styles = getStyles(isDark);

  return (
    <div
      style={{ position: "relative" }}
      className="
        w-[280px] 
        sm:w-[340px] 
        lg:w-[420px] 
        h-[180px]
      "
    >
      <span style={styles.tech}>{first}</span>
      <span style={styles.set}>{second}</span>
    </div>
  );
}

export default TechSetLogo;

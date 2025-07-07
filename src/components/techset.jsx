import React from "react";

const styles = {
  tech: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    fontFamily: "Montserrat, Arial, sans-serif",
    fontWeight: "900",
    fontSize: "90px",
    color: "#fff",
    letterSpacing: "2px",
    zIndex: 2,
    textTransform: "uppercase",
  },
  set: {
    position: "absolute",
    top: "50px",
    left: "0",
    width: "100%",
    fontFamily: "Montserrat, Arial, sans-serif",
    fontWeight: "900",
    fontSize: "90px",
    color: "transparent",
    letterSpacing: "2px",
    zIndex: 3,
    textTransform: "uppercase",
    WebkitTextStroke: "3px #137062",
    textStroke: "3px #137062",
    // The blue outline
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
};

function TechSetLogo({first,second}) {
  return (
    <div style={{ position: "relative", width: 420, height: 180}}>
      <span style={styles.tech}>{first}</span>
      <span style={styles.set}>{second}</span>
    </div>
  );
}


export default TechSetLogo;

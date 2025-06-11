import React from "react";

const navbarStyle = {
  width: "70%",
  height: "6vh",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  borderRadius: "30px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justify: "center",
  padding: "0 2rem",
  position: "fixed",
  top: 25,
  zIndex: 1000,
};

function Navbar() {
  return (
    <nav className="flex align-middle justify-between" style={navbarStyle}>
      <h1 style={{ margin: 0,fontSize:"2rem",fontFamily: "Allura", color:"white" }}>Pranav D P</h1>
      <div className="flex gap-4 align-middle justify-center" style={{fontFamily:"Poppins", color:"#D6D6D6"}}>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}

export default Navbar;

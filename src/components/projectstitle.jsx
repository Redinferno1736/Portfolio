import React from "react";

function ProjectsTitle({ isDark }) {
    return (
        <div className="w-full flex flex-col items-center justify-center mb-12">

            {/* Small top label (optional but premium) */}
            {/* <div
        className={`text-sm tracking-[0.3em] mb-3 ${
          isDark ? "text-[#137062]" : "text-[#0c7663]"
        }`}
      >
        SELECTED WORK
      </div> */}

            {/* Main Title */}
            <h2
                className="
                    font-extrabold uppercase text-center
                    transition-all duration-300
                    text-[34px]
                    min-[600px]:text-[48px]
                    min-[900px]:text-[64px]
                    min-[1200px]:text-[72px]
                "
                style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
                <span style={{ color: isDark ? "#ffffff" : "#191818" }}>
                    Featured{" "}
                </span>
                <span style={{ color: isDark ? "#137062" : "#0c7663" }}>
                    Projects
                </span>
            </h2>


            {/* Accent Line */}
            <div
                className="mt-6 h-[3px] w-[80px] rounded-full transition-all duration-300"
                style={{
                    backgroundColor: isDark ? "#137062" : "#0c7663"
                }}
            />

        </div>
    );
}

export default ProjectsTitle;

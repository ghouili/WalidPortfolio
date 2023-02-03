import "./Experience.css";
import React, { useContext } from "react";
import { themeContext } from "../../Context/Context";

export const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          1+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years</span>
        <span>Experiences</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          10+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed</span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          1+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

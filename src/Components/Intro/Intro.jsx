import "./Intro.css";
import React, { useContext } from "react";
import { motion } from "framer-motion";

import Github from "../../Images/github.png";
import Instagram from "../../Images/instagram.png";
import LinkedIn from "../../Images/linkedin.png";
import Vecto1 from "../../Images/Vector1.png";
import Vector2 from "../../Images/Vector2.png";
import Boy from "../../Images/boy.png";
import Thumbup from "../../Images/thumbup.png";
import GlassesImoji from "../../Images/glassesimoji.png";
import Crown from "../../Images/crown.png";
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context/Context";

export const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I am</span>
          <span>Walid Ghouili</span>
          <span>
            I am a skilled and passionate web and mobile app developer with a
            strong drive to deliver innovative and user-friendly solutions.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="Github Icon" />
          <img src={LinkedIn} alt="LinkedIn Icon" />
          <img src={Instagram} alt="Instagram icon" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vecto1} alt="Vector 01" />
        <img src={Vector2} alt="Vector 02" />
        <img src={Boy} alt="Boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassesImoji}
          alt="Classes Imoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className='floating-div'
        >
          <FloatingDiv image={Crown} txt1={"Web"} txt2={"Developer"} />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className='floating-div'
        >
          <FloatingDiv image={Thumbup} txt1={"Best"} txt2={"Design"} />
        </motion.div>
        {/* Blur */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }} />
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-19rem",
          }}
        />
      </div>
    </div>
  );
};

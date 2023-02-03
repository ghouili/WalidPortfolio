import "./services.css";
import React, { useContext } from "react";
import { motion } from "framer-motion";

import HeartImoji from "../../Images/heartemoji.png";
import Glasses from "../../Images/glasses.png";
import Humble from "../../Images/humble.png";
import { Card } from "../Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context/Context";

export const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* Left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Crafting Efficient and Dynamic Full Stack Solutions
          <br />
          for Your Business Needs
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} />
      </div>

      {/* rignt side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: " 16rem" }}
        >
          <Card
            imoji={HeartImoji}
            header={"Header"}
            detail={"Description and detials"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: " -4rem", top: "12rem" }}
        >
          <Card
            imoji={Glasses}
            header={"Header"}
            detail={"Description and detials"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: " 14rem", top: "19rem" }}
        >
          <Card
            imoji={Humble}
            header={"Header"}
            detail={"Description and detials"}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }} />
      </div>
    </div>
  );
};

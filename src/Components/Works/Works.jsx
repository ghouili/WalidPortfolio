import "./Works.css";
import React, { useContext } from "react";
import { motion } from "framer-motion";

import UpWork from "../../Images/Upwork.png";
import Fiverr from "../../Images/fiverr.png";
import Amazon from "../../Images/amazon.png";
import Shopify from "../../Images/Shopify.png";
import Facebook from "../../Images/Facebook.png";
import { themeContext } from "../../Context/Context";

export const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      {/* Left side */}
      <div className="awesome">
        <span style={{ color: darkMode? 'white' : ''}} >Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Crafting Efficient and Dynamic Full Stack for Your Business Needs
          Solutions
          <br />
          for Your Business Needs
          <br />
          for Your Business Needs Crafting Efficient and Dynamic Full Stack
          Solutions
          <br />
          for Your Business Needs
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} />
      </div>
      
      {/* Right Side  */}
      <div className="w-right">
        <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="w-mainCircle">

            <div className="w-secCircle">
                <img src={UpWork} alt="Upwork" />    
            </div>

            <div className="w-secCircle">
                <img src={Fiverr} alt="Fiverr" />    
            </div>

            <div className="w-secCircle">
                <img src={Amazon} alt="amazon" />    
            </div>

            <div className="w-secCircle">
                <img src={Shopify} alt="shopify" />    
            </div>

            <div className="w-secCircle">
                <img src={Facebook} alt="facebook" />    
            </div>

        </motion.div>

        {/* Background circles */}
        <div className="w-backgroundCircle blueCircle" />
        <div className="w-backgroundCircle yellowCircle" />
      </div>
    </div>
  );
};

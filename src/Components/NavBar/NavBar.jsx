import "./NavBar.css";
import React from "react";
import { Link } from "react-scroll";

import Toggle from "../Toggle/Toggle";

export const NavBar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Walid</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              smooth={true}
              to="Navbar"
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Services"
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Experience"
              activeClass="activeClass"
            >
              <li>Experiences</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Portfolio"
              activeClass="activeClass"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Testimonials"
              activeClass="activeClass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

import React from "react";
import HeaderSocial from "./HeaderSocial";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assests/me.png";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Kaleb Mikiyas</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} className="header_img" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

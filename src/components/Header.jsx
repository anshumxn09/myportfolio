import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">Portfolio</div>
        <div className="featured">
            <a href="#about">About Me</a>
            <a href="#lang">Languages</a>
            <a href="#int">Interest</a>
            <a href="#proj">Projects</a>
        </div> 
        <div className="contactMe" title="social links">
            <a href="#social">Contact Me</a>
        </div> 
      </div>
    </>
  );
};

export default Header;

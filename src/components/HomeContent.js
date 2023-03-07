import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeContent.css";

const HomeContent = () => {
  return (
    <section className="homepageContent">
      <div className="homePageName">
        <span>Nawal</span>
        <span>Al Saidi</span>
      </div>
      <div className="homePageWorkTitle">
        <div>Full Stack Developer / Cloud Developer</div>
        <div className="blinking-cursor"></div>
      </div>
      <div className="homePageButtons">
        <Link id="view-work" to="projects">
          View Work
        </Link>
        <Link id="contact-me" to="/contact">
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default HomeContent;

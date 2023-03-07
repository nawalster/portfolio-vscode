import React from "react";
import "../styles/Tabsbar.css";
import Tab from "./Tab";

const Tabsbar = () => {
  return (
    <section className="tabsbar">
      <Tab className="tabsbar__tab" iconName="react" name="home.jsx" path="/" />
      <Tab
        className="tabsbar__tab"
        iconName="html"
        name="about.html"
        path="/about"
      />
      <Tab
        className="tabsbar__tab"
        iconName="css"
        name="contact.css"
        path="/contact"
      />
      <Tab
        className="tabsbar__tab"
        iconName="js"
        name="projects.js"
        path="/projects"
      />
      <Tab
        className="tab"
        iconName="json"
        name="articles.json"
        path="/articles"
      />
      <Tab className="tab" iconName="github" name="resume.md" path="/resume" />
    </section>
  );
};

export default Tabsbar;

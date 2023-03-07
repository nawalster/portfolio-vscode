import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Editor.css";
import HomeContent from "./HomeContent";
import ContactContent from "./ContactContent";
import AboutContent from "./AboutContent";
import ProjectsContent from "./ProjectsContent";
import ArticlesContent from "./ArticlesContent";
import ResumeContent from "./ResumeContent";

const Editor = ({ tab }) => {
  let url = useLocation();
  const pathName = url.pathname;

  return (
    <section className="editor">
      {pathName === "/" ? <HomeContent /> : null}
      {pathName === "/contact" ? <ContactContent /> : null}
      {pathName === "/about" ? <AboutContent /> : null}
      {pathName === "/projects" ? <ProjectsContent /> : null}
      {pathName === "/articles" ? <ArticlesContent /> : null}
      {pathName === "/resume" ? <ResumeContent /> : null}
    </section>
  );
};

export default Editor;

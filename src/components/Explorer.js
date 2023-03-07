import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Explorer.css";
import { VscChevronDown, VscChevronRight, VscJson } from "react-icons/vsc";
import {
  DiReact,
  DiHtml5,
  DiJsBadge,
  DiMarkdown,
  DiCss3Full
} from "react-icons/di";

const Explorer = () => {
  const [expand, setExpand] = useState(true);

  return (
    <section className="explorer">
      <span className="explorer__title">Explorer</span>
      <div className="portfolioContainer">
        <div
          className="portfolioContainer__title"
          onClick={() => setExpand((prev) => !prev)}
        >
          {expand ? <VscChevronDown /> : <VscChevronRight />}
          <span>Portfolio</span>
        </div>
        <div
          className="portfolioContainer__itemsContainer"
          style={{ display: expand ? "flex" : "none" }}
        >
          <Link className="" to="/">
            <div className="itemsContainer__item">
              <div className="iconWrapper">
                <DiReact
                  className="explorer__icon"
                  style={{ color: "#00BCD4" }}
                />
              </div>
              <span s>home.jsx</span>
            </div>
          </Link>
          <Link to="/about">
            <div className="itemsContainer__item">
              <DiHtml5
                className="explorer__icon"
                style={{ color: "#E44D26" }}
              />
              <span>about.html</span>
            </div>
          </Link>
          <Link to="/contact">
            <div className="itemsContainer__item">
              <DiCss3Full
                className="explorer__icon"
                style={{ color: "#41A5F5" }}
              />
              <span>contact.css</span>
            </div>
          </Link>
          <Link to="/projects">
            <div className="itemsContainer__item">
              <DiJsBadge
                className="explorer__icon"
                id="jsIcon"
                style={{ color: "#FFCA27" }}
              />
              <span>projects.js</span>
            </div>
          </Link>
          <Link to="/articles">
            <div className="itemsContainer__item">
              <VscJson
                className="explorer__icon"
                style={{ color: "#CB9D30" }}
              />
              <span>articles.json</span>
            </div>
          </Link>
          <Link to="/resume">
            <div className="itemsContainer__item">
              <DiMarkdown
                className="explorer__icon"
                style={{ color: "#41A5F5" }}
              />
              <span>resume.md</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explorer;

import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Tab.css";
import { VscJson } from "react-icons/vsc";
import {
  DiReact,
  DiHtml5,
  DiJsBadge,
  DiMarkdown,
  DiCss3Full
} from "react-icons/di";

const Tab = ({ iconName, name, path }) => {
  let url = useLocation();
  const pathName = url.pathname;

  return (
    <section className={`tab ${path === pathName && `active`}`}>
      <Link to={path}>
        {/* <span> */}
        <Icon iconName={iconName} />
        {/* </span> */}
        <span>{name}</span>
      </Link>
    </section>
  );
};

export default Tab;

const Icon = ({ iconName }) => {
  return (
    <div>
      {iconName === "react" ? (
        <DiReact className="tab__icon" style={{ color: "#00BCD4" }} />
      ) : null}
      {iconName === "html" ? (
        <DiHtml5
          className="tab__icon"
          style={{ color: "#E44D26", height: "1rem" }}
        />
      ) : null}
      {iconName === "css" ? (
        <DiCss3Full
          className="tab__icon"
          style={{ color: "#41A5F5", height: "1.1rem" }}
        />
      ) : null}
      {iconName === "js" ? (
        <DiJsBadge
          className="tab__icon"
          style={{ color: "#FFCA27", height: "0.85rem" }}
        />
      ) : null}
      {iconName === "json" ? (
        <VscJson className="tab__icon" style={{ color: "#CB9D30" }} />
      ) : null}
      {iconName === "github" ? (
        <DiMarkdown style={{ color: "#41A5F5", height: "1.3rem" }} />
      ) : null}
    </div>
  );
};

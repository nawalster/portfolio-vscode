import React from "react";
import "../styles/Sidebar.css";
import {
  VscAccount,
  VscFiles,
  VscGithubAlt,
  VscCode,
  VscEdit,
  VscMail,
  VscSettingsGear
} from "react-icons/vsc";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__tabs">
        <span className="sidebar__iconWrapper">
          <VscFiles className="sidebar__icon" />
        </span>
        <span className="sidebar__iconWrapper">
          <VscGithubAlt className="sidebar__icon" />
        </span>
        <span className="sidebar__iconWrapper">
          <VscCode className="sidebar__icon" />
        </span>
        <span className="sidebar__iconWrapper">
          <VscEdit className="sidebar__icon" />
        </span>
        <span className="sidebar__iconWrapper">
          <VscMail className="sidebar__icon" />
        </span>
      </div>
      <div className="sidebar__settingButtons">
        <span className="sidebar__iconWrapper">
          <VscAccount className="sidebar__icon" />
        </span>
        <span className="sidebar__iconWrapper">
          <VscSettingsGear className="sidebar__icon" />
        </span>
      </div>
    </section>
  );
};

export default Sidebar;

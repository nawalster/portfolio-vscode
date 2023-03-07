import React from "react";
import "../styles/BottomBar.css";
import {
  VscGitMerge,
  VscCheckAll,
  VscBell,
  VscError,
  VscWarning
} from "react-icons/vsc";
import { SiVite } from "react-icons/si";

const BottomBar = () => {
  return (
    <section className="bottomBar">
      <div className="itemsContainer">
        <span className="group">
          <VscGitMerge />
          <span>main</span>
        </span>
        <span className="errorItemsContainer">
          <span className="group" id="errorItem">
            <VscError /> <span>0</span>
          </span>
          <span className="group" id="errorItems">
            <VscWarning /> <span>0</span>
          </span>
        </span>
      </div>
      <div className="itemsContainer">
        <span className="group">
          <SiVite />
          <span>Powered by Vite</span>
        </span>
        <span className="group">
          <VscCheckAll />
          <span>Prettier</span>
        </span>
        <span className="group">
          <VscBell />
        </span>
      </div>
    </section>
  );
};

export default BottomBar;

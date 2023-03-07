import React from "react";
import "../styles/MenuBar.css";
import vscode_icon from "../styles/icons/vscode_icon.svg";

const MenuBar = () => {
  return (
    <section className="menuBar">
      <img src={vscode_icon} alt="menuBar" height={15} width={15} />
      <div className="menuBar__menuList">
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className="menuBar__name">Nawal Al Saidi - Visual Studio Code</p>
      <div className="topLeftButtons">
        <span className="topLeftButtons__minimize"></span>
        <span className="topLeftButtons__maximize"></span>
        <span className="topLeftButtons__close"></span>
      </div>
    </section>
  );
};

export default MenuBar;

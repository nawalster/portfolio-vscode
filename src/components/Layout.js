import React from "react";
import MenuBar from "./MenuBar";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Editor from "./Editor";
import BottomBar from "./BottomBar";
import "../styles/Layout.css";
import Tabsbar from "./Tabsbar";

const Layout = () => {
  return (
    <div className="layout">
      <MenuBar className="menuBar" />
      <Sidebar className="sidebar" />
      <Explorer className="explorer" />
      <Editor className="editor" />
      <Tabsbar className="tabsbar" />
      <BottomBar className="bottomBar" />

      {/* <div className="main"></div> */}
    </div>
  );
};

export default Layout;

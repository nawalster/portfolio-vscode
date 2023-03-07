import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import Test from "./components/Test";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        {/* <Route path="/test" element={<Test />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

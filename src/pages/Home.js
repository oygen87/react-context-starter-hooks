import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import ControlPanel from "../components/ControlPanel";

const Home = () => {
  return (
    <div className="container">
      <Header title="Home Page" />
      <ControlPanel />
      <NavLink to="/second">Go To Second Page (React Router)</NavLink>
    </div>
  );
};

export default Home;

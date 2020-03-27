import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../style/home.css";

const Home = () => {
  return (
    <div className="container text-center home">
      <h2 className="text-title">Random number generator</h2>
      <NavLink className="mar-top btn gray" to={"/start"}>
        <h2> Start </h2>
      </NavLink>
    </div>
  );
};

export default Home;

import React from "react";

import "./AppLogo.css";
import logo1 from "../../../assets/img/logo1.png";

const AppLogo = () => {
  return (
    <div className="app-logo">
      <div className="logo-container">
        <a href="#">
          <img className="logo" src={logo1} alt="" />
        </a>
      </div>
      <p className="logo-title">
        <a className="logo-pre" href="">
          Premium'u
        </a>
        keşfet
      </p>
    </div>
  );
};

export default AppLogo;

import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "../nav/nav.component";
import logo from "../../assets/images/Full_Briefcase_Logo_Large.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <NavLink exact to="/">
        <img src={logo} alt="Logo for Inmate Skills" className="logo" />
      </NavLink>
      <Nav className="header-nav"/>
    </header>
  );
};

export default Header;

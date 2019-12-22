import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.styles.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/prisons">Prisons</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Nav;

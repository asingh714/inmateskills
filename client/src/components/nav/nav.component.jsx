import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logoutUser } from "../../redux/actions/user.action";

import "./nav.styles.scss";

const Nav = ({ className, isLoggedIn, logoutUser }) => {
  return (
    <nav className={className}>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/prisons">Prisons</NavLink>
      {isLoggedIn ? (
        <NavLink to="/admin">Admin</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
      {isLoggedIn ? (
        <NavLink exact to="/" onClick={logoutUser}>
          Sign Out
        </NavLink>
      ) : null}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps, { logoutUser })(Nav);

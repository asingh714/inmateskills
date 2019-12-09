import React from 'react'
import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <nav>
      <NavLink exact to ="/">
        Home
      </NavLink>
      <NavLink to="/prisons">
        Prisons
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
    </nav>
  )
}

export default Nav;
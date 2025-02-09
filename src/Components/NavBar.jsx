import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-link">
          Movie App
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" exact activeClassName="active">
          Movies
        </NavLink>
        <NavLink to="/TVshows" activeClassName="active">
          TV Shows
        </NavLink>

        <NavLink to="/favourites" activeClassName="active">
          Favourites Movies
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

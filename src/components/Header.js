import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Context } from "../components/Context";

const Header = () => {
  const { theme, toggleTheme } = React.useContext(Context);
  return (
    <header className={theme ==="Light" ? "" : "Dark"}>
      <nav className="header-container">
        <h3 className="solgan">
          <NavLink>MD</NavLink>
        </h3>
        <i
          onClick={() => {
            toggleTheme("Dark");
          }}
          className="fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            toggleTheme("Light");
          }}
          className="fa-solid fa-sun"
        ></i>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { NavLink , Link} from "react-router-dom";
import "./header.css";
import { Context } from "../components/Context";

const Header = () => {
  const { theme, toggleTheme } = React.useContext(Context);
  const [isOpen , setIsOpen]=React.useState(false);

  function openMenu(){
    setIsOpen(prev => !prev)
  }
  return (
    <header className={theme ==="Light" ? "" : "Dark"}>
      <nav className="header-container  wide-header">
        <h2 className="slogan">
            <Link to="/">MD</Link>
        </h2>
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
        <ul>
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
      <nav className="header-container  mobile-header-nav">
        <h2>
          <NavLink className="slogan" to="/">MD</NavLink>
        </h2>
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
          className="fa-solid fa-sun "
        ></i>
        <i className="fas fa-bars burger-menu" 
        onClick={() => {openMenu()}}/>
        <ul className={"mobile-menu"} style={{right:isOpen ?"0" : "-60vw"}} >
          <i class="fa-regular fa-circle-xmark" style={{display:isOpen ?"block" : "none"}}
          onClick={()=>{setIsOpen(false)}}></i>
          <li>
            <NavLink to="/" className="nav-link"
            onClick={()=>{setIsOpen(false)}}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link"
            onClick={()=>{setIsOpen(false)}}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="nav-link"
            onClick={()=>{setIsOpen(false)}}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link"
            onClick={()=>{setIsOpen(false)}}
            >
              Contact
            </NavLink>
          </li>
        </ul>


      </nav>
    </header>
  );
};

export default Header;

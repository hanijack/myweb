import React from 'react';
import { NavLink} from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
        <nav className='header-container'>
            <h3 className='solgan'><NavLink>MD</NavLink></h3>
            <ul className='nav-menu'>
                <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
                <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            </ul>
            <div>button here</div>
        </nav>
    </header>
  )
}

export default Header
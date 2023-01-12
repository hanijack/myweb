import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../components/Context';
import "./Footer.css"

const Footer = () => {
  const {theme}=React.useContext(Context)
  return (
    <footer className={theme}>
      <div className={`footer-container container`}>
        <h2 className='slogan'>MD</h2>
        <ul className='footer-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className='footer-social'>
          <li><Link to="/"><i class="fa-brands fa-linkedin"></i></Link></li>
          <li><Link to="/about"><i class="fa-brands fa-github"></i></Link></li>
          <li><Link to="/services"><i class="fa-brands fa-facebook"></i></Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer


import React, { useState } from 'react'
import '../styles/NavBar1.css'
import { Link } from 'react-scroll'

const NavBar1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className='logo'>Portfolio</h3>
      <ul
       className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
        >
        <li><Link to="hero" spy={true} smooth={true} offset={-50} duration={500}> Kezdőoldal</Link></li>
        <li><Link to="skill" spy={true} smooth={true} offset={0} duration={500}>Készségek</Link></li>
        <li><Link to="projectContainer" spy={true} smooth={true} offset={-50} duration={500}>Projectek</Link></li>
        <li> <Link to="hobbi-container" spy={true} smooth={true} offset={-50} duration={500}>Hobbik</Link></li>
      </ul>
      <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className='fas fa-times'></i>
        ) : (
          <i className='fas fa-bars'></i>
        )}
      </button>
    </nav>
  )
}


export default NavBar1
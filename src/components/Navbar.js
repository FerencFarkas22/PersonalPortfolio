import React from 'react'
import '../styles/Navbar.css'

import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">Portfolio</div>

    <div className="navList">
        <ul>
            <li><Link to="hero" spy={true} smooth={true} offset={50} duration={500}> Kezdőoldal</Link></li>
            <li><Link to="skill" spy={true} smooth={true} offset={0} duration={500}>Készségek</Link></li>
            <li><Link to="projectContainer" spy={true} smooth={true} offset={-50} duration={500}>Projectek</Link></li>
            <li> <Link to="hobbi-container" spy={true} smooth={true} offset={-50} duration={500}>Hobbik</Link></li>

        </ul>
    </div>
</div>
  )
}

export default Navbar
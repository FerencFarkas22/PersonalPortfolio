import React from 'react'
import { Instagram, YouTube, Facebook } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer footerStyle'>
      <div className="footerLink">
        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/ferencfarkas_/"><Instagram /> </a>
        <a target='_blank' rel="noreferrer" href="https://www.youtube.com/channel/UCapmarvGOp-CYkXz9xHm6yg"><YouTube /> </a>
        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/ferenc.farkas.14/"><Facebook /></a>
        <a rel="noreferrer" target='_blank' href="https://github.com/FerencFarkas22"> <GitHubIcon /></a>
        <a rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/ferenc-farkas-0a2363211/"><LinkedInIcon /></a>
      </div>
      <hr className='footerHr' />
      <div className="elerhetoseg">
        <h1>Elérhetőségek:</h1>
        <h3>Email: ferencfarkas15@gmail.com</h3>
        <h3>Tel: +36/30/289/0808</h3>
      </div>
      <hr className='footerHr' />
      <div className="text">

        <p>Köszönöm hogy megtekintetted az oldalam. Ha felkeltettem az érdeklődésed, nyugodtan keress az alábbi elérhetőségeim egyikén</p>
      </div>
    </div>
  )
}

export default Footer
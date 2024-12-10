import React from "react";
import { BsLinkedin, BsGithub, BsTwitterX, BsInstagram, BsYoutube } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <p>Talk to Me:</p>
        <a href="https://www.linkedin.com/in/muhammad-hijri-70539a287/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/mhmmdhjri"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
        
        <a href="https://www.instagram.com/mhmmdhjri__/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsInstagram className="icon-footer"/>
        </a>
        <a href="https://www.youtube.com/@MuhammadHijri25"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsYoutube className="icon-footer"/>
        </a>
      </div>

      <p className="text-footer">Build without ❤ by Muhammad Hijriiiiii</p>
    </footer>
  );
}

export default Footer;

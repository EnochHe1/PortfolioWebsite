import React from 'react';
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Enoch He</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="www.linkedin.com/in/enochhe05" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> {/*Target is _blank so it opens in a new tab */}
        <a href="https://github.com/EnochHe1" target="_blank" rel="noopener noreferrer"><FaGithub /></a> {/*Target is _blank so it opens in a new tab */}
        <a href="https://www.instagram.com/enoch_he8/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a> {/*Target is _blank so it opens in a new tab */}
      </div>

      <div className="footer__copyright">
        <small>&copy; Enoch He. All rights reserved.</small>
      </div>


    </footer>
  )
}

export default Footer
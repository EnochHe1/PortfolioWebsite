import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="www.linkedin.com/in/enochhe05" target="_blank" rel="noreferrer"><BsLinkedin /></a> {/*Target is _blank so it opens in a new tab */}
        <a href="https://github.com/EnochHe1" target="_blank" rel="noreferrer"><FaGithub /></a> {/*Target is _blank so it opens in a new tab */}
        <a href="https://www.instagram.com/enoch_he8/" target="_blank" rel="noreferrer"><AiFillInstagram /></a> {/*Target is _blank so it opens in a new tab */}
    </div>
  )
}

export default Socials
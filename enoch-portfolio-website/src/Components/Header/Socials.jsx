import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/enoch-he-ab3600198" target="_blank"><BsLinkedin /></a> {/*Target is _blank so it opens in a new tab */}
        <a href="https://github.com/EnochHe1" target="_blank"><FaGithub /></a> {/*Target is _blank so it opens in a new tab */}
        <a href="https://www.instagram.com/enoch_he8/" target="_blank"><AiFillInstagram /></a> {/*Target is _blank so it opens in a new tab */}
    </div>
  )
}

export default Socials
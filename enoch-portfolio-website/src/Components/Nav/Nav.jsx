import React from 'react'
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdLaptopChromebook } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a> {/* # goes to top of the page */}
      <a href="#about"><AiOutlineUser/></a> {/* href="#some-id" would scroll to an element on the current page such as <div id="some-id"> */}
      <a href="#experience"><BiBook /></a>
      <a href="#services"><MdLaptopChromebook /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
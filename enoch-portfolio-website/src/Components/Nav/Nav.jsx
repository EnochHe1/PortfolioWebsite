import React from 'react';
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdLaptopChromebook } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#'); /* need states/local variables to determine the active Nav */
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a> {/* # goes to top of the page */}
      <a href="#about" onClick={()=> setActiveNav('#about')} className= {activeNav === "#about" ? 'active' : '' }><AiOutlineUser/></a> {/* href="#some-id" would scroll to an element on the current page such as <div id="some-id"> */}
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className= {activeNav === "#experience" ? 'active' : '' }><BiBook /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className= {activeNav === "#services" ? 'active' : '' }><MdLaptopChromebook /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className= {activeNav === "#contact" ? 'active' : '' } ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
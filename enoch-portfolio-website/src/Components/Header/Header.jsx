import React from 'react';
import "../Header/header.css";
import CTA from './CTA';
import Self from '../../Assets/me.png'
import HeaderSocials from './Socials'; 

const Header = () => {
  return (
    <header id="home"> 
      <div className="container header__container">{/*BEM css styling */}
        <h5>Hi, I'm</h5> 
        <h1>Enoch He</h1>
        <h5 className='text-light'>Aspiring Full-Stack Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Self} alt="Me!"/>
        </div>

        <a href="#contacts" className="scroll-down">
          Scroll Down
        </a> 


      </div>
    </header>
  )
}
 
export default Header
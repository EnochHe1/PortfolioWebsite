import React from 'react';
import "../Header/header.css";
import CTA from './CTA';
import Self from '../../Assets/me.png'
import HeaderSocials from './Socials'; 
import Typewriter from './Typewriter';

const Header = () => {
  const words = ["Aspiring Professional Software Engineer",
                 "3rd Year Computer Science Student @ UWaterloo", 
                 "Software Engineering Intern @ Marsh McLennan (2025)",
                 "Software QA Developer Co-op @ Polaris Intelligence (2024)"
                ];

  return (
    <header id="home"> 
      <div className="container header__container">{/*BEM css styling */}
        <h5>Hi, I'm</h5> 
        <h1>Enoch He</h1>
        <h5 className='text-light'>
          <Typewriter words={words} speed={30} pause={3000} />
        </h5>
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
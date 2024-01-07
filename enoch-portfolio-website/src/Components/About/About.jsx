import React from 'react'
import "./about.css";
import Self from '../../Assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { LuFolderCheck } from "react-icons/lu";
import { PiSuitcaseSimple } from "react-icons/pi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Self} alt="Me again :D"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <PiSuitcaseSimple className="about__icon"/>
              <h5>Experience</h5>
                <small>1 Month Working</small> {/*reduce font-size by 1 with small html tag*/}
            </article> {/*article tag = independent, self-contained content. */}
            <article className="about__card">
            <LuFolderCheck className="about__icon"/>
              <h5>Projects</h5>
                <small>10+ Completed</small> {/*reduce font-size by 1 with small html tag*/}
            </article> {/*article tag = independent, self-contained content. */}
            <article className="about__card">
            <FaAward className="about__icon"/>
              <h5>Hackathons</h5>
                <small>1 Award Won</small> {/*reduce font-size by 1 with small html tag*/}
            </article> {/*article tag = independent, self-contained content. */}
          </div>

          <p>Hi there! My name is Enoch and I'm a Computer Science student 
           at the University of Waterloo pursuing a BCs. I'm currently a Front-End Developer at
           SlimeScholars, a startup that encourages students to learn by gamifying 
           high school education. When I'm not learning or coding (or both!), you can find me reading novels
           or watching movies with my friends. I'm always eager to make new connections and explore new opportunities, so don't hesitate to reach out! </p>

           <a href="#contact" className="btn btn-primary">Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About
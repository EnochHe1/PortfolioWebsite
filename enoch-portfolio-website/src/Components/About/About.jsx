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
                <small>3 Months Working</small> {/*reduce font-size by 1 with small html tag*/}
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

          <p>Hi there! My name is Enoch and I'm a student 
           at the University of Waterloo pursuing a major in computer science and a specialization in AI. 
           I'm currently a Software QA Developer at
           Polaris Intelligence, a company that specializes in business data analytics & marketing. 
           When I'm not learning or coding, you can find me doing escape rooms,
           watching movies with my friends, or swimming with the Trillium Y Masters Swim Club (TYMS). 
           I'm always eager to make new connections and explore new opportunities, so don't hesitate to reach out! </p>

           <a href="#contacts" className="btn btn-primary">Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About
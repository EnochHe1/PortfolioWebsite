import React from 'react'
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>My Technical Background</h5>
      <h2>Skills</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Quality Assurance</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
          </ul>
        </article>




        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
          </ul>
        </article>




        <article className="service">
          <div className="service__head">
            <h3>Technical Writing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Looking forward to adding more here once I have more work experience under my belt... </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
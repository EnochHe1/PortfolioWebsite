import React from 'react';
import "./portfolio.css";
import Verbalyst from "../../Assets/Verbalyst.png";
import AtTune from "../../Assets/AtTune.png";
import Balancium from "../../Assets/Balancium.png";
import Nerdle from "../../Assets/Nerdle.png";
import Pong from "../../Assets/Pong.png";
import Summazon from "../../Assets/Summazon.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Previous Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Verbalyst} alt="Verbalyst" />
          </div>
          <h3>Verbalyst</h3>
          <div className="portfolio__item-button">
            <a href="https://github.com/EnochHe1/Verbalyst" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Summazon} alt="Summazon" />
          </div>
          <h3>Summazon</h3>
          <div className="portfolio__item-button">
            <a href="https://github.com/EnochHe1/Summazon" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={AtTune} alt="AtTune" />
          </div>
          <h3>AtTune</h3>
          <div className="portfolio__item-button">
            <a href="https://github.com/EnochHe1/AtTune" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Balancium} alt="Balancium" />
          </div>
          <h3>Balancium</h3>
          <div className="portfolio__item-button">
            <a href="https://github.com/EnochHe1/Balancium" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Pong} alt="Pong" />
          </div>
          <h3>Pong</h3>
          <div className="portfolio__item-button">
            <a href="https://github.com/EnochHe1/Pong" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Nerdle} alt="Nerdle" />
          </div>
          <h3>Nerdle</h3>
          <div className="portfolio__item-button">
            <a href="https://github.com/EnochHe1/Nerdle" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react';
import "./achievements.css";
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; /*Carousel with dots at bottom (navigation doesn't have the dots) */
import { CiTrophy } from "react-icons/ci";

const data = [
  {
    achievement: "Best Website Award @ Ignition Hacks Hackathon (2023)",
    description: "Out of a pool of 700+ hackers at IgnitionHacks v.3, my team and I received the Best Web Award alongside $2750 in prizes total for Verbalyst."
  },
  {
    achievement: "UWaterloo Avogadro Contest International Champion (2022)",
    description: "Out of nearly 5000 students across the world, I placed first with a perfect score on the University of Waterloo's chemistry contest.",
  },
  {
    achievement: "Ninth Place in the CaYPT National Tournament (2022)",
    description: "As team captain of my school's Canadian Young Physicists' Tournament team, I led the team to place ninth nationally in the official tournament."
  }
]

const Achievements = () => {
  return (
    <section id="achievements">
      <h5>What I Have Accomplished</h5>
      <h2>Achievements</h2>

      <Swiper className="container achievements_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        { /* enter javascript mode  with braces, You can put any valid JavaScript expression inside the curly braces */
          data.map(({achievement, description}, index) => { 
            /*achievement and description are alr variables defined, index is the actual index in the array*/
            return(
              <SwiperSlide key={index} className="achievement"> 
                <CiTrophy />
                <h2>{achievement}</h2>
                <br/>
                <small>{description}
                </small>
            </SwiperSlide>
            )
          })
        }

        <SwiperSlide className="testscores">
        <h2>Test Scores </h2>
          <div className= "testscore">
            <br/>
            <small>SAT: 1520/1600</small>
            <br/>
            <small>ACT: 36/36</small>
            <br/>
            <small>AP Calculus BC: 5/5</small>
            <br/>
            <small>AP Calculus BC (AB-subscore): 5/5</small>
            <br/>
            <small>AP Computer Science A: 5/5</small>
            <br/>
            <small>Euclid Score: 79, 81 (2023, 2022)</small>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Achievements
import React from 'react';
import "./achievements.css";

const data = [
  {
    achievement: "Best Web Award @ Ignition Hacks (2023)",
    description: "Out of a Pool of 700+ Hackers at IgnitionHacks v.3, my team and I received the Best Web Award alongside $2750 in prizes total."
  },
  {
    achievement: "UWaterloo Avogadro Contest International Champion (2022)",
    description: "Out of nearly 5000 students across the world, I placed first with a perfect score on University of Waterloo's chemistry contest.",
  },
  {
    achievement: "Ninth Place in the CaYPT National Tournament (2022)",
    description: "As team captain of my school's Canadian Young Physicists' Tournament team, I led our team to place ninth place overall in the national tournament."
  }
]

const Achievements = () => {
  return (
    <section id="achievements">
      <h5>What I Have Accomplished</h5>
      <h2>Achievements</h2>

      <div className="container achievements_container">
        { /* enter javascript mode  with braces, You can put any valid JavaScript expression inside the curly braces */
          data.map(({achievement, description}, index) => { 
            /*achievement and description are alr variables defined, index is the actual index in the array*/
            return(
              <article key={index} className="achievement"> 
                <h2>{achievement}</h2>
                <br/>
                <small>{description}
                </small>
            </article>
            )
          })
        }

        <article className="testscores">
        <h2>Test Scores </h2>
          <div className= "testscore">
            <br/>
            SAT: 1520/1600
            <br/>
            ACT: 36/36
            <br/>
            AP Calculus BC: 5/5
            <br/>
            AP Calculus BC (AB-subscore): 5/5
            <br/>
            AP Computer Science A: 5/5
            <br/>
            Euclid Score: 79, 81 (2023, 2022)
          </div>
        </article>

      </div>
    </section>
  )
}

export default Achievements
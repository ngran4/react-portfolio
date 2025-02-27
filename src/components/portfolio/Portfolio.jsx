import React from 'react'
import './portfolio.css'
import PaddleNW from '../../assets/paddle-portfolio.png'
import PlantParenthood from '../../assets/plant-portfolio.png'
import Cortex from '../../assets/cortex-portfolio.png'
import Blackjack from '../../assets/blackjack-portfolio.png'
import DoGo from "../../assets/dogo-portfolio.png"
import Dojo from "../../assets/dojo-portfolio.png"

const data = [
  {
    id: 1,
    image: PaddleNW,
    title: "Paddle NW",
    github: "https://github.com/ngran4/Paddle-NW-App",
    app: "https://paddlenw.herokuapp.com/"
  },
  {
    id: 2,
    image: PlantParenthood,
    title: "Plant Parenthood",
    github: "https://github.com/ngran4/Plant-Parenthood",
    app: "https://plantparenthood22.herokuapp.com/"
  },
  {
    id: 3,
    image: Cortex,
    title: "Habit Tracker",
    github: "https://github.com/ngran4/Cortex",
    app: "https://p2-habit-tracker.herokuapp.com/"
  },
  {
    id: 4,
    image: Blackjack,
    title: "Blackjack",
    github: "https://github.com/ngran4/P1-Blackjack",
    app: "https://ngran4.github.io/P1-Blackjack/"
  },
  {
    id: 5,
    image: DoGo,
    title: "DogGo",
    github: "https://github.com/ngran4/DogGo-fe?tab=readme-ov-file",
  },
  {
    id: 6,
    image: Dojo,
    title: "Dojo Lessons",
    github: "https://github.com/joindojo/Dojo-2.0",
    app: "dojolessons.co"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* <h5>My Recent Work</h5> */}
      <h2>PORTFOLIO</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, app}) => {
            return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3 className='montserrat'>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn montserrat' target='_blank'>GITHUB</a>
              <a href={app} className='btn btn-primary montserrat' target='_blank'>APP</a>
            </div>
          </article>
          )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
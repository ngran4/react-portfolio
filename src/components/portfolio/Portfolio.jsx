import React from 'react'
import './portfolio.css'
import PaddleNW from '../../assets/paddle-portfolio.png'
import PlantParenthood from '../../assets/plant-portfolio.png'
import Cortex from '../../assets/cortex-portfolio.png'
import Blackjack from '../../assets/blackjack-portfolio.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PaddleNW} alt="" />
          </div>
          <h3>Paddle NW</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ngran4/Paddle-NW-App" className='btn' target='_blank'>Github</a>
            <a href="https://paddlenw.herokuapp.com/" className='btn btn-primary' target='_blank'>App</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PlantParenthood} alt="" />
          </div>
          <h3>Plant Parenthood</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ngran4/Plant-Parenthood" className='btn' target='_blank'>Github</a>
            <a href="https://plantparenthood22.herokuapp.com/" className='btn btn-primary' target='_blank'>App</a>
          </div>

        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Cortex} alt="" />
          </div>
          <h3>Cortex</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ngran4/Cortex" className='btn' target='_blank'>Github</a>
            <a href="https://p2-habit-tracker.herokuapp.com/" className='btn btn-primary' target='_blank'>App</a>
          </div>

        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Blackjack} alt="" />
          </div>
          <h3>Blackjack</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ngran4/P1-Blackjack" className='btn' target='_blank'>Github</a>
            <a href="https://ngran4.github.io/P1-Blackjack/" className='btn btn-primary' target='_blank'>App</a>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Portfolio
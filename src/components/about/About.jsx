import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import MEE from "../../assets/achilles.jpg"
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h2>ABOUT ME</h2>

      <div className="container about__container">
        <div className='about__info'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEE} alt="About Image" />
          </div>
        </div>
        <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
        </div>

        <div className="about__content montserrat">


          <p>
            I've always loved creating; whether it's art, a new coffee table, or a recipe for the best rustic sourdough.
            Just as I would with a blank canvas, I approach each new software project as an opportunity to design something unique and impactful.
            <br />
            <br />
            Starting my journey as a software engineer, I enrolled in General Assembly's SEI Program, where I gained foundational experience in 
              full-stack software development, with expertise in modern software technologies and practices.
              Currently, I am working on a project that helps users find the most efficient routes for their errands or travel (in a perfect world, every gas station would share its parking lot with a Starbucks).
            Previously in the medical field, I have a strong background in problem-solving and logical thinking, and am eager to apply my skills in a dynamic and fast-paced environment 
            where I can build relationships and collaborate with others, while creating products that enhance people's everyday experiences.</p>
          
          <div className='btn-about'>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
          </div>
          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a>         */}
        </div>
      </div>
    </section>
  )
}

export default About
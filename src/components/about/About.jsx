import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
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

          <p>Motivated and detail-oriented individual with a background in the medical field and a passion for technology. 
            Seeking to leverage my skills and experience in software engineering by transitioning into a role as a full-stack developer. 
            Recently completed a full-time immersive course at General Assembly where I gained hands-on experience in modern software development technologies and practices. 
            Previously on the medical school track, I have a strong foundation in problem-solving and critical thinking, as well as excellent communication and teamwork skills. 
            Looking to join a dynamic and innovative team where I can continue to learn and grow as a developer.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>        
        </div>
      </div>
    </section>
  )
}

export default About
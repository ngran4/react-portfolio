import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h2 className="label">ABOUT ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content montserrat">
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

          <p>I am a recent graduate of General Assembly's Software Engineering Immersive program. 
            Previously pursuing a career in medicine and witnessing the challenges of the COVID-19 pandemic, I had a change in perspective and found a new passion in software engineering. 
            I am proficient in various programming languages and frameworks including HTML/CSS, JavaScript, MERN stack, and Python.  
            With a strong background in problem-solving and logical thinking, I am eager to apply my skills in a dynamic and fast-paced environment 
            where I can build relationships and collaborate with others while creating products that enhance people's everyday experiences.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>        
        </div>
      </div>
    </section>
  )
}

export default About
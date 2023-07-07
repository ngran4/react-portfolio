import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
            <img src={ME} alt="About Image" />
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


          <p>Graduated from General Assembly's Software Engineering Immersive Program in October 2022 where I gained experience in 
              full-stack software engineering, with expertise in modern software development technologies and practices.
              Currently working as a Teaching Associate at General Assembly, I provide guidance and support to students, 
              further enhancing my problem-solving and critical thinking skills while staying up to date on the latest industry trends
            With a strong background in problem-solving and logical thinking, I am eager to apply my skills in a dynamic and fast-paced environment 
            where I can build relationships and collaborate with others while creating products that enhance people's everyday experiences.</p>
          
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
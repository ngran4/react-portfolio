import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="name-display"><span className="first_name">NICOLE</span><span className="last_name">GRANVILLE</span></div>
        <h5>Fullstack Software Engineer</h5>
        <CTA />
        <HeaderSocials/>

  
        {/* <img src={ME} alt="me" className='me'/> */}
      
        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nicole Granville</h1>
        <h5 className="text-light">Fullstack Engineer</h5>
        <CTA />
        <HeaderSocials/>

        <div>
          <img src={ME} alt="me" className='me'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
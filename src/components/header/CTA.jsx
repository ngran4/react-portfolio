import React from 'react'
import {RiDownloadLine} from 'react-icons/ri'
import {TbDownload} from 'react-icons/tb'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn montserrat'><span className="download-icon" ><TbDownload/></span> CV</a>
      <a href="#contact" className='btn btn-primary montserrat'>CONTACT</a>
    </div>
  )
}

export default CTA
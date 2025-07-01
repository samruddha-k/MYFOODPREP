import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo_bottom} alt="" />
          <p>MYFOODPREP is one stop for all your meals , may it be sweet or sourly we got all of it covered for you.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href="https://faceprep.edmingle.com/"></a>Home</li>
            <li><a href="https://faceprep.edmingle.com/contact-us"></a>About us</li>
            <li><a href="https://faceprep.edmingle.com/courses"></a>Courses</li>
            <li><a href="https://faceprep.edmingle.com/reviews"></a>Reviews</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Fill the stomach</h2>
          <ul>
            <li>+91 8856055070</li>
            <li>queries@MYFOODPREP.in</li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <p className='footer-copyright'>Copyright 2024 © MYFOODPREP </p>
    </div>
  )
}

export default Footer

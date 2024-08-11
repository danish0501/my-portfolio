import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        My Portfolio, Happy Coding
      </div>
      <div className='footer-icon'>
        <a href='https://in.linkedin.com/'><img src='./assets/images/linkedin-icon.png' alt='' /></a>
        <a href='https://www.instagram.com/'><img src='./assets/images/instagram-icon.png' alt='' /></a>
        <a href='https://www.facebook.com/'><img src='./assets/images/facebook-icon.png' alt='' /></a>
        <a href='https://x.com/?lang=en'><img src='./assets/images/twitter-icon.png' alt='' /></a>
      </div>
    </div>
  )
}

export default Footer;

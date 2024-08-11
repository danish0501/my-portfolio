import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu}) => {
  return (
    <div>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
        <h1 className='heading'>My Portfolio</h1>
            <ul>
                <li>
                    <a className='menu-item' href='#home'>Home</a>
                </li>
                <li>
                    <a className='menu-item' href='#aboutme'>About Me</a>
                </li>
                <li>
                    <a className='menu-item' href='#skills'>Skills</a>
                </li>
                <li>
                    <a className='menu-item' href='#workexperience'>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item' href='#contactme'>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={() => {}}>Hire Me</button>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav

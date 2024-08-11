import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
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
                        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <span class={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

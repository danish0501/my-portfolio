import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='about-me-container' id='aboutme'>
            <h5>About Me</h5>
            <div className='about-me-content'>
                <div className='about-me-img'>
                    <img src='./assets/images/aboutme-icon.png' alt='' />
                </div>
                <div className='about-me-info'>
                    <p>
                        As a Frontend Developer, I bring a robust skill set in HTML, CSS, and Bootstrap, enabling me
                        to craft responsive and visually appealing web applications. My expertise in JavaScript and
                        frameworks like ReactJS empowers me to build dynamic, interactive user interfaces that enhance
                        user experiences. I'm proficient in utilizing Material-UI for styling, ensuring consistent
                        and modern design patterns across applications.I have hands-on experience with version control
                        using Git and GitHub, facilitating seamless collaboration and code management within teams.
                        My familiarity with Firebase allows me to integrate real-time database functionalities and
                        authentication features into projects. I am a fast learner with strong problem-solving skills,
                        enabling me to quickly adapt to new technologies and efficiently troubleshoot challenges.
                        My ability to collaborate effectively with cross-functional teams ensures that projects are
                        completed on time and meet high-quality standards. I'm passionate about continuously honing
                        my skills and staying updated with the latest industry trends.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;

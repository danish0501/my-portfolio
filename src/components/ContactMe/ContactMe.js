import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
    return (
        <section className='contact-container' id='contactme'>
            <h5>Contact Me</h5>
            <div className='contact-content'>
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl= "./assets/images/email-icon.png"
                        text="John@timetoprogram.com"
                    />
                     <ContactInfoCard
                        iconUrl="./assets/images/github-icon.png"
                        text="https://github.com/time-to-program"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Hero />
        <AboutMe />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </div>
  )
}

export default App

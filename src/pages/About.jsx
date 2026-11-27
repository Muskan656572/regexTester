import React from 'react'
import Navbar from '../components/Home/Navbar'
import AboutPanel from '../components/About/AboutPanel'
import KeyFeatures from '../components/About/KeyFeatures'
import TechStack from '../components/About/TechStack'
import HowItWorks from '../components/About/HowItWorks'
function About() {
  return (
    <div>
      <Navbar />
      <AboutPanel />
      <KeyFeatures />
      <TechStack />
      <HowItWorks />
    </div>
  )
}

export default About

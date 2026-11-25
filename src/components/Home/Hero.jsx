import React from 'react'
import {useState} from "react"
import TesterPreview from './TesterPreview'
import {Link} from "react-router-dom"
import Card from './Card'
import './Hero.css'
function Hero () {
    
  return (
    <section className = "hero">
        <div className="hero-content">
            <span className="hero-title">✨ Powerful Regex Testing Tool</span>

            <h1 className="hero-heading">
                Regex <span className="hero-heading-highlight">Tester</span>
            </h1>
            <p className="hero-description">
                <p className="hero-description-text1">
                    Test, debug and validate your regular
                </p> 
                <p className="hero-description-text2">
                    expressions with ease.
                </p>
            </p>

            <div className= "hero-points">
                <div className="hero-point1">
                    <span className="hero-point-icon">⚡</span>
                    <span className="hero-point-text">Real-time matching results</span>
                </div>

                <div className="hero-point2">
                    <span className="hero-point-icon">⚡</span>
                    <span className="hero-point-text">Matching highlighting</span>
                </div>

                <div className="hero-point3">
                    <span className="hero-point-icon">⚡</span>
                    <span className="hero-point-text">Support for all regex flags (i, g, m, s, u, y)</span>
                </div>

                <div className="hero-point4">
                    <span className="hero-point-icon">⚡</span>
                    <span className="hero-point-text">Developer-friendly interface</span>
                </div>
            </div>

            <div className="hero-buttons">
                
                <Link to="/regexTest" className="primary-btn" >Start Testing → </Link>
                <button className="secondary-btn">
                    Explore Examples
                </button>
            </div>
        </div>
        <TesterPreview />
        


    </section>
  )
}

export default Hero 

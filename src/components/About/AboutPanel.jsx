import React from 'react'
import './AboutPanel.css'
import { Link } from 'react-router-dom'
import { Info, CheckCircle, Code2, Search } from "lucide-react";
function AboutPanel() {
  return (
    <section className="about-hero">

      {/* Left Content */}
      <div className="about-hero-content">

        <div className="about-badge">
          <Info size={16} />
          <span>About Regex Tester</span>
        </div>

        <h1>
          About <span>Regex Tester</span>
        </h1>

        <p className="about-description">
          Regex Tester is a powerful and easy-to-use online tool
          that helps you test and learn regular expressions in
          JavaScript. Whether you're a beginner or an experienced
          developer, this tool makes regex testing simple,
          interactive, and beginner-friendly.
        </p>

        <div className="about-highlights">
          <div>
            <CheckCircle size={21} />
            <span>Test Regex Patterns Instantly</span>
          </div>

          <div>
            <CheckCircle size={21} />
            <span>Explore Examples & Learn</span>
          </div>

          <div>
            <CheckCircle size={21} />
            <span>Get Instant Results</span>
          </div>
        </div>

      </div>

      {/* Right Illustration */}
      <div className="about-hero-visual">

        <div className="visual-glow"></div>

        <div className="code-window">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Code2 size={45} className="code-icon" />

          <div className="regex-code">
            /[a-z]+$/g
          </div>
        </div>

        <div className="search-icon">
          <Search size={65} />
        </div>

        <div className="floating-code">
          {"{ }"}
        </div>

      </div>

    </section>
  )
}

export default AboutPanel

import React from 'react'
import { Lightbulb, Code2 } from 'lucide-react'
import './TipsHeader.css'
function TipsHeader() {
  return (
    <section className="tips-header">

        <div className="tips-header-icon">
            <Lightbulb size={192} className="tips-icon1" />
            <Code2 size={42} className="tips-icon2" />
        </div>

        <div className="tips-header-text">
            <h1 className="tips-header-title">Regex <span className="tips-header-title-highlight">Tips</span></h1>
            <p className="tips-header-subtitle">Learn, practice and write better regular expressions with these helpful tips!</p>
        </div>

        <div className="tips-header-aside">
            <span className="tagline-rocket">🚀</span>
            <span>Master Regex, one pattern at a time!</span>
        </div>
    </section>
  );
}

export default TipsHeader
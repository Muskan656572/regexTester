import React from 'react'
import './TechStack.css'
import { Layers } from 'lucide-react';
function TechStack() {
  return (

    <section className="tech-stack">
      <div className="tech-stack-heading">
        <Layers size={32} className="stack-icon" />

        <div>
          <h2>
            Tech <span>Stack</span>
          </h2>
          <p>Built with modern web technologies</p>
        </div>
      </div>

      <div className="tech-stack-list">

        <div className="tech-item">
          <div className="tech-logo react-logo">⚛</div>
          <span>React</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo vite-logo">ϟ</div>
          <span>Vite</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo js-logo">JS</div>
          <span>JavaScript</span>
        </div>

        <div className="tech-item">
          <div className="tech-logo css-logo">3</div>
          <span>CSS</span>
        </div>

      </div>
    </section>
  )
}

export default TechStack

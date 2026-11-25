import React from 'react'
import { Zap, Code2, Sparkles } from "lucide-react";
import './RegexHeader.css'
function RegexHeader() {
  return (
    <section className="regex-header">

      <div className="regex-header-content">

        <div className="regex-badge">
          <Zap size={13} fill="#fbbf24" color="#fbbf24" />
          <span>Test. Debug. Validate.</span>
        </div>

        <h1>
          Regex <span>Tester</span>
        </h1>

        <p>
          Test, debug and validate your regular expressions with ease.
        </p>

      </div>

      <div className="regex-header-art">
        <div className="regex-glow"></div>

        <Sparkles className="sparkle-icon" size={22} />

        <div className="code-icon-box">
          <Code2 size={85} strokeWidth={2.5} />
        </div>
      </div>

    </section>
  )
}

export default RegexHeader

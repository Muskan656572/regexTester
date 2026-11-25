import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Home, Info, Code2, Lightbulb, Moon,Sun } from 'lucide-react'
function Navbar() {

    const [darkMode, setDarkMode] = useState(true)
  return (
    <nav className="navbar">

        <a href="/" className="logo">
          <span className="logo-symbol">/R/</span>
          <span>Regex <span className="gradient-text">Tester</span></span>
        </a>

        <div className="nav-links">
            <a href="#home" className="nav-link active">
                <Home size={19} /> Home
            </a>
            <a href="#about" className="nav-link">
                <Info size={19} /> About
            </a>

            <a href="#examples" className="nav-link">
            <Code2 size={20} /> Examples
            </a>

            <a href="#tips" className="nav-link">
            <Lightbulb size={20} /> Tips
            </a>
        </div>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        {darkMode ? <Moon size={21} /> : <Sun size={21} />}
      </button>
    </nav>
  )
}

export default Navbar

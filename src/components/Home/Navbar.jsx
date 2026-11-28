import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Home, Info, Code2, Lightbulb, Moon,Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
function Navbar() {

    const [darkMode, setDarkMode] = useState(true)
  return (
    <nav className="navbar">

        <Link to="/" className="logo">
          <span className="logo-symbol">/R/</span>
          <span>Regex <span className="gradient-text">Tester</span></span>
        </Link>

        <div className="nav-links">
            <Link to="/home" className="nav-link active">
                <Home size={19} /> Home
            </Link>
            <Link to="/about" className="nav-link">
                <Info size={19} /> About
            </Link>

            <Link to="/examples" className="nav-link">
            <Code2 size={20} /> Examples
            </Link>

            <Link to="/tips" className="nav-link">
            <Lightbulb size={20} /> Tips
            </Link>
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

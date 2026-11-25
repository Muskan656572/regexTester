import React from 'react'
import { Workflow, Trash2, Flag, FileText, Play } from "lucide-react";
import './RegexTestPanel.css'
function RegexTestPanel() {
  return (
        <div className="regex-tester">
            <div className="panel-heading">
                <div className="heading-title">
                    <Workflow size={20} />
                    <h3>Regular Expression</h3>
                </div>
    
                <button className="clear-btn">
                    <Trash2 size={14} />
                    Clear
                </button>
            </div>
             {/* Regex Input */}
          <input
            type="text"
            className="pattern-input"
            placeholder="Enter your regex pattern..."
          />
    
          {/* Flags Section */}
          <div className="section-heading">
            <Flag size={18} />
            <h3>Flags</h3>
          </div>
    
          <div className="flags-container">
    
            <div className="flag-item">
              <strong>g</strong>
              <span>Global</span>
            </div>
    
            <div className="flag-item">
              <strong>i</strong>
              <span>Case Insensitive</span>
            </div>
    
            <div className="flag-item">
              <strong>m</strong>
              <span>Multiline</span>
            </div>
    
            <div className="flag-item">
              <strong>s</strong>
              <span>Dot All</span>
            </div>
    
            <div className="flag-item">
              <strong>u</strong>
              <span>Unicode</span>
            </div>
    
            <div className="flag-item">
              <strong>y</strong>
              <span>Sticky</span>
            </div>
    
          </div>
    
          {/* Test String Section */}
          <div className="section-heading">
            <FileText size={18} />
            <h3>Test String</h3>
          </div>
    
          <textarea
            className="test-string-input"
            placeholder="Enter text to test..."
          />
    
          {/* Test Button */}
          <button className="test-regex-btn">
            <Play size={16} fill="white" />
            Test Regex
          </button>
    
    
        </div>
  )
}

export default RegexTestPanel

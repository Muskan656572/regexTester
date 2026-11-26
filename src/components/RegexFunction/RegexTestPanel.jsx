import React from 'react'
import { Workflow, Trash2, Flag, FileText, Play } from "lucide-react";
import './RegexTestPanel.css'

function RegexTestPanel(props) {
  const toggleFlag= (flag) => {
          if ( props.selectedFlags.includes(flag)) {
            props.setSelectedFlags(props.selectedFlags.filter((item) => item != flag));
          }
          else{
            props.setSelectedFlags([...props.selectedFlags, flag]);
          }
        };
  return (
        
        <div className="regex-tester">
            <div className="panel-heading">
                <div className="heading-title">
                    <Workflow size={20} />
                    <h3>Regular Expression</h3>
                </div>
    
                <button className="clear-btn"
                onClick={() => {
                  props.setRegexPattern('');
                  props.setTestString('');
                  props.setSelectedFlags([]);
                }}>
                    <Trash2 size={14} />
                    Clear
                </button>
            </div>
             {/* Regex Input */}
          <input
            type="text"
            className="pattern-input"
            placeholder="Enter your regex pattern..."
            value={props.regexPattern}
            onChange={(e) => props.setRegexPattern(e.target.value)}
          />
    
          {/* Flags Section */}
          <div className="section-heading">
            <Flag size={18} />
            <h3>Flags</h3>
          </div>
    
          <div className="flags-container">
    
            <div className={`flag-item ${props.selectedFlags.includes('g') ? 'active' : ''}`}
            onClick={() => toggleFlag('g')}>
              <strong>g</strong>
              <span>Global</span>
            </div>
    
            <div className={`flag-item ${props.selectedFlags.includes('i') ? 'active' : ''}`}
            onClick={ () => toggleFlag('i')}>
              <strong>i</strong>
              <span>Case Insensitive</span>
            </div>
    
            <div className={`flag-item ${props.selectedFlags.includes('m') ? 'active' : ''}`}
            onClick={ () => toggleFlag('m')}>
              <strong>m</strong>
              <span>Multiline</span>
            </div>
    
            <div className={`flag-item ${props.selectedFlags.includes('s') ? 'active' : ''}`}
            onClick={ () => toggleFlag('s')}>
              <strong>s</strong>
              <span>Dot All</span>
            </div>
    
            <div className={`flag-item ${props.selectedFlags.includes('u') ? 'active' : ''}`}
            onClick={ () => toggleFlag('u')}>
              <strong>u</strong>
              <span>Unicode</span>
            </div>
    
            {/* <div className={`flag-item ${props.selectedFlags.includes('y') ? 'active' : ''}`}
            onClick={ () => toggleFlag('y')}>
              <strong>y</strong>
              <span>Sticky</span>
            </div> */}
    
          </div>
    
          {/* Test String Section */}
          <div className="section-heading">
            <FileText size={18} />
            <h3>Test String</h3>
          </div>
    
          <textarea
            className="test-string-input"
            placeholder="Enter text to test..."
            value={props.testString}
            onChange={(e) => props.setTestString(e.target.value)}
          />
    
          {/* Test Button */}
          <button className="test-regex-btn"
          onClick={props.testRegex}>
            <Play size={16} fill="white" />
            Test Regex
          </button>
    
    
        </div>
  )
}

export default RegexTestPanel

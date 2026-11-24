
import React from 'react';
import './TesterPreview.css';
import Circle from './Circle';
import { Code2, FileText, CircleCheck } from 'lucide-react';

function TesterPreview() {
  return (
    <div className="tester-preview">

      <div className="circles">
        <Circle color="red" />
        <Circle color="orange" />
        <Circle color="green" />
      </div>

      <div className="tester-preview-content">

        {/* LEFT PANEL */}
        <div className="tester-preview-regex">

          <div className="preview-heading">
            <Code2 size={20} />
            <span>Regex Pattern</span>
          </div>

          <div className="regex-input">
            <span>{"\\b\\w+\\b"}</span>
          </div>

          <div className="preview-heading test-string-heading">
            <FileText size={20} />
            <span>Test String</span>
          </div>

          <div className="test-string">
            Learn Regex with Regex Tester
            and build better apps.
          </div>

          <div className="regex-flags">
            <span className="flag active">g</span>
            <span className="flag">i</span>
            <span className="flag">m</span>
            <span className="flag">s</span>
            <span className="flag">u</span>
            <span className="flag">y</span>
          </div>

          <button className="test-regex-btn">
            ▶ Test Regex
          </button>

        </div>

        {/* RIGHT PANEL */}
        <div className="tester-preview-result">

          <div className="preview-heading">
            <CircleCheck size={20} />
            <span>Results</span>
          </div>

          <div className="result-message">
            <CircleCheck size={16} />
            <span>3 matches found</span>
          </div>

          <p className="result-text">
            <span>Learn</span> : <span>Regex</span> with
            <span> Regex Tester</span> and build better apps.
          </p>

        </div>

      </div>
    </div>
  );
}

export default TesterPreview;

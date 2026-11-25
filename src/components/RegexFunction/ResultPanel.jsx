import React from "react";
import {
  ChartNoAxesColumn,
  Search,
  Sparkles
} from "lucide-react";

import "./ResultPanel.css";

function ResultsPanel() {
  return (
    <div className="results-panel">

      {/* Results Heading */}
      <div className="results-heading">
        <ChartNoAxesColumn size={21} />
        <h3>Results</h3>
      </div>

      {/* Results Content */}
      <div className="results-content">

        <div className="results-illustration">
          <div className="search-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Search size={58} strokeWidth={2.2} />

          <Sparkles size={18} className="results-sparkle" />
        </div>

        <h4>Your matching results will appear here.</h4>

        <p>
          Enter a regex pattern and test it to see the results.
        </p>

      </div>

    </div>
  );
}

export default ResultsPanel;

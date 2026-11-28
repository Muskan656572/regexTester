import React from 'react'
import {Copy, Play} from 'lucide-react'
import './TipCard.css'
function TipCard(props) {
  return (
    <div className="tip-card">
      <props.tip.icon size={32} className="tip-icon" />
      <h3>{props.tip.title}</h3>
      <p>{props.tip.description}</p>

      <div className="tip-rules">
        {props.tip.rules.map((rule, index) => (
          <div className="tip-rule" key={index}>
            <strong>{rule.symbol}</strong>
            <span>{rule.meaning}</span>
          </div>
        ))}
      </div>

      <button className="copy-button">
        <Copy size={20} />
        Copy
      </button>
      <button className="try-in-tester">
        <Play size={20} />
        Try in Rester
      </button>

    </div>
  );
}

export default TipCard

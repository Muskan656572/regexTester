import React from 'react'
import {Copy, Play} from 'lucide-react'
import './TipCard.css'
import {useNavigate} from 'react-router-dom'
function TipCard(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/regexTest', {
      state: {
        pattern: props.tip.pattern,
        sampleText: props.tip.sampleText
      }
    });
  } 
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
        <Copy size={20} className="button-icon" />
        <span className="button-text">Copy</span>
      </button>
      <button className="try-in-tester"
        onClick={handleClick}>
        <Play size={20} className="button-icon" />
        <span className="button-text">Try in Tester</span>
      </button>

    </div>
  );
}

export default TipCard

import React from 'react'
import './FeatureCard.css'
function FeatureCard(props) {
  return (
    <div className="feature-card">
        <div className="feature-card-icon">
            <props.icon size={props.size}  className="feature-icon"/>
        </div>
        <div className="feature-card-content">
            <h3 className="feature-card-title">{props.title}</h3>
            <p className="feature-card-description">{props.description}</p>
        </div>
    </div>
  )
}

export default FeatureCard

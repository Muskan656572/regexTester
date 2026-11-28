import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className="feature-card1">
      <div className="feature-icon1">
        {props.logo}
      </div>

      <div className="feature-info">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Card

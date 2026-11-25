import React from 'react'
function Circle(props) {
  return (
    <div>
      <button className="circle" style={{ backgroundColor: props.color, width: '20px', height: '20px', border: 'none', borderRadius: '50%', cursor: 'pointer' }}></button>
    </div>
  )
}

export default Circle

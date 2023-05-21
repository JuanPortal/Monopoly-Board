import React from 'react'

export const Card = ({ type, color, name, tag }) => {
  return (
    <div className={`card ${type}`}>
        <div className="color"></div>
        <div className="name">{name}</div>
        <div className="tag">{tag}</div>
    </div>
  )
}

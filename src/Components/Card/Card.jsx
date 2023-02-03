import './Card.css';
import React from 'react'
export const Card = ({ imoji, header, detail}) => {
  return (
    <div className='card' >
        <img src={imoji} alt="" />
        <span>{header}</span>
        <span>{detail}</span>
        <button className="c-button">
            Learn More
        </button>
    </div>
  )
}

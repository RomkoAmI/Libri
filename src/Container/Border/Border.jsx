import React from 'react'

import border_img from '../../img/border_books.jpg'

import './Border.css';

const Border = ({text, name}) => {
  return (
    <div className='Border'>
        <img src={border_img} alt="border_books1" />
        <div className='Border_text'>
            <p>{text}</p>
            <h1>{name}</h1>
        </div>
        <img src={border_img} alt="border_books2" />
    </div>
  )
}

export default Border
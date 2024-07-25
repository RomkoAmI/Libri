import React from 'react'
import society from '../../img/society.jpg'

import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
        <div className='Contact__email'>
            <div className='Contact__email_text'>
                <h1>Приєднайтесь до спільноти</h1>
                <p>Обговорюйте ваші улюблені книги з однодумцями</p>
                <input type="email" placeholder='Enter your Email'/>
                <input type='submit' />
            </div>
            <div className='Contact__email_img'>
                <img src={society} alt="img_email" /> 
            </div>
        </div>

        <div className='Contact__data'>
            <div className='Contact__data_item'>
                <h1>28K+</h1>
                <p>Книг оцінено</p>
            </div>
            <div className='Contact__data_item'>
                <h1>9K+</h1>
                <p>Підписників</p>
            </div>
            <div className='Contact__data_item'>
                <h1>3+</h1>
                <p>Років праці</p>
            </div>
            <div className='Contact__data_item'>
                <h1>34</h1>
                <p>Редактора</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
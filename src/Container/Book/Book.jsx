import React from 'react'

import book1 from '../../img/451.png';
import book2 from '../../img/witcher.png';
import book3 from '../../img/Darkness.png';
import book4 from '../../img/Autsider.png';

import './Book.css'

const Book = () => {
  return (
    <div className='Book'>
        <h1>Чотири книги - чотири стилі. Знайди щось особливе для себе</h1>
        <div className='Book__list'>
            <div className='Book__list_items'>
                <img src={book1} alt="book1" />
                <p>До божевілля фантастична книга, Рекомендую для прочитання кожному. І не забудьте... <a href="#">Далі</a></p>
            </div>

            <div className='Book__list_items'>
                <img src={book2} alt="book2" />
                <p>До божевілля фантастична книга, Рекомендую для прочитання кожному. І не забудьте... <a href="#">Далі</a></p>
            </div>

            <div className='Book__list_items'>
                <img src={book3} alt="book3" />
                <p>До божевілля фантастична книга, Рекомендую для прочитання кожному. І не забудьте... <a href="#">Далі</a></p>
            </div>

            <div className='Book__list_items'>
                <img src={book4} alt="book4" />
                <p>До божевілля фантастична книга, Рекомендую для прочитання кожному. І не забудьте... <a href="#">Далі</a></p>
            </div>
        </div>
    </div>
  )
}

export default Book
import React from 'react'
import book1 from '../../img/Books2.jpg'

import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__text'>
        <h1>Найбільш популярні книги цього року!</h1>
        <p>Дізнайтеся про найкраще 2023 року! Ці
          популярні книги зачарували читачів у всьому 
          світі, пропонуючи незабутні історії та глибокі
          ідеї. Пориньте у світ літературної
          досконалості.</p>
        <button><a>Прочитати!</a></button>
      </div>

      <div className='Header__Img'>
        <img src={book1} alt="book1" />
      </div>
    </div>
  )
}

export default Header
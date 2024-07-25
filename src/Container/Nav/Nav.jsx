import React from 'react';

import logo from '../../img/Full_logo.png'
import logo2 from '../../img/Full_logo2.png'
import burger from '../../img/burger3.png'
import burger_dark from '../../img/burger3_dark.png'

import './Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='Nav__logo'>
        <img className='Nav__logo_img2' src={logo2} alt="logo" />
        <img className='Nav__logo_img1' src={logo} alt="logo" />
      </div>

      <div className='Nav__pages'>
        <input type="search" name='search' placeholder='Знайти книгу?' />
        <a href="#">Література</a>
        <a href="#">Спільнота</a>
        <a href="#">Контакти</a>
      </div>
      <img className='Nav__pages_burger_dark' src={burger_dark} alt="burger_dark" />
      <img className='Nav__pages_burger' src={burger} alt="burger" />
    </div>
  )
}

export default Nav
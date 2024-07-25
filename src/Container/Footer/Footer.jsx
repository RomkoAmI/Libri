import React from 'react';

import logo2 from '../../img/Full_logo2.png';
import inst from '../../img/instagram.png';
import telegram from '../../img/telegram.png';
import twt from '../../img/twitter.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
        <img src={logo2} alt="logo_footer" />
        <div className='Footer__line' />
        <h2>Книги і думки</h2>
        <div className='Footer__line_2' />
        <p>Сайт був створений спеціально для конкурсу Web-сторінок КНУТД.
Автор ідеї і безспосередньо творець - Парейко Роман, БІТ-1-21.
Дизан логотипу був створений моїм близьким другом - Бараном Олександром, БІТ-2-21.</p>
        <div className='Footer__social'>;
          <img src={inst} alt="social1" />
          <img src={telegram} alt="social2" />
          <img src={twt} alt="social3" />
        </div>
        <div>
          <p>Парейко Роман | Pinterest | Баран Олександр</p>
        </div>
    </div>
  )
}

export default Footer
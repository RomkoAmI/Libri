import React from 'react';
import bg from './img/bg2.jpg'

import { Nav, Header, Border, Book, Contact, Footer } from './Container';

import './App.css';

const App = () => {
  return (
    <div className='App' style={{ backgroundImage: `url(${bg})` }}>
      <div className='shadow' />
      <Nav />
      <Header />
      <Border text="Книги - це кораблі думок, мандрівники в часі та посли з минулого в майбутнє."  name="- Франсіс Бейкон -" />
      <Book />
      <Border text="Два найважливіших дні у твоєму житті: день, коли ти з’явився на світ, і день, коли ти зрозумів навіщо"  name="- Марк Твен -" />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
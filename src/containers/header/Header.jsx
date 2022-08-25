import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import hero from '../../assets/hero.png'

const Header = () => {
  return (
    <div className='web__header section__padding' id='home' >
      <div className='web__header-content' >
        <h1 className='gradient__text'>Let's Build Something amazing with Web Mafias</h1>
        <p>Let’s Build Something
          amazing with Web
          Mafias.
          Excel your web2 and web3 concepts with professionals and industry experts. Live sessions for all your doubts and queries. Get an environment full of developers and web mafias. Free resources for all technologies used.          
          Get started with
          1.6k+
          1,600 people are already the members of Web Mafia Community. </p>

        <div className='web__header-content__input' >
          {/* <input type="email" placeholder="Your Email Address" /> */}
          <button type='button' >Join</button>
        </div>

        <div className='web__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people juggling different web technologies.</p>
        </div>

      </div>

      <div className='web__header-image'>
        <img src={hero} alt='ai' />
      </div>

    </div>
  )
}

export default Header
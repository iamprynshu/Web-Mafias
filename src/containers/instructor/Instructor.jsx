import React from 'react'
import instructor from '../../assets/instructor.png';
import './instructor.css'

const Instructor = () => {
  return (
    <div className='web__instructor section__padding' >

      <div className='web__instructor-image'>
        <img src={instructor} alt='instructor image' />
      </div>

      <div className='web__instructor-content'>
        <h4>Instructor</h4>
        <h1 className="gradient__text">Hitesh <br /> Chaudhary</h1>
        <p>I like to make videos related to code and tech in my free time. I also lead a few tech teams in startups, help in hiring talent for companies. I am also on a part time traveller, with 31 countries checked off so far!</p>
        <div className='web__instructor-icons'>
          <a href="https://twitter.com/hiteshdotcom?lang=en" class="fa fa-twitter"></a>
          <a href="https://www.youtube.com/channel/UCXgGY0wkgOzynnHvSEVmE3A" class="fa fa-youtube"></a>
          <a href="https://github.com/hiteshchoudhary" class="fa fa-github"></a>
          <a href="https://www.facebook.com/HiteshChoudharyPage" class="fa fa-facebook"></a>
        </div>
      </div>

    </div>
  )
}

export default Instructor

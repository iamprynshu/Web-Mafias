import React from 'react'
import { Feature } from '../../components';
import './features.css'

const featuresData = [
  {
    title: 'Intensive learning environment',
    text: 'Community provides you intensive learning on your chosen domain. Here you will find many learners like you. ',
  },
  {
    title: 'Foster open source',
    text: 'This community also foster open source programs and helps you to reach your destination.',
  },
  {
    title: 'Freelance works',
    text: 'Here, people share freelance works from which you can earn some penny and can search for a freelancer as well.',
  },
  {
    title: 'Provide free sources',
    text: 'we provide only those sources which are completely free so that it can be accessible to all. ',
  },
];

const Features = () => {
  return (
    <div className='web__features section__padding'>

      <div className='web__features-heading'>
        <h1 className='gradient__text'>What community is all about. what do we offer you inside the community.</h1>
        <p>From begineer to advance</p>
      </div>

      <div className='web__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
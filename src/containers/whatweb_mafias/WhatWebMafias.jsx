import React from 'react';
import { Feature } from '../../components'
import live from "../../assets/live.png"
import "./whatweb_mafias.css";

const WhatWebMafias = () => {
  return (
    <div className='web__whatweb section__margin'>

      <div className='web__whatweb-feature'>
        <Feature title='Live sessions' text='All the community members have special privilege to share their technical thoughts with tech professors and fellow members and get some vlauable information in return.'/>
      </div>

      <div className='web__whatweb-live'>
        <img src={live} alt="live"/>
        <p>Take the free demo now</p>
      </div>

      <div className='web__whatweb-container'>
        <Feature title='Chatbots' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
        <Feature title='Knowledgebase' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
        <Feature title='Education' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
      </div>

    </div>
  )
}

export default WhatWebMafias
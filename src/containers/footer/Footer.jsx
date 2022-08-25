import React from 'react';
import webLogo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="web__footer section__padding">
    <div className="web__footer-heading">
      <h1 className="gradient__text">WEB MAFIAS COMMUNITY PAGE</h1>
    </div>

    <div className='web__footer-button'>
    <div className="web__footer-btn">
      <p >Preview</p>
    </div>
    <div className="web__footer-btn" id='para'>
      <p >Publish</p>
    </div>
    </div>

   
    <div className="web__footer-copyright">
      <p>@2021 WebMAfias. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
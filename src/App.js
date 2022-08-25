import React from 'react';
import { Group, Features, Footer, Header, WhatWebMafias, Instructor } from './containers';
import { Faq, Text, Navbar, Testimonials  } from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Text />
      <Features />
      <Instructor />
      <Group />    
      <WhatWebMafias />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
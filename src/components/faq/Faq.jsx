import React from 'react'
import { useState } from 'react';
import "./faq.css"

const data = [
  {
    question: "What is web hosting",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "Do you work internationally?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "What is WordPress?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }
]

const Faq = () => {

const [selected, setselected] = useState(null)  

const toggle = (i) => {
        if (selected === i) {
          return setselected(null)
        }

        setselected(i)

}

  return (
    <div className='wrapper'>
    <div className='wrapper__heading'>
      <h1 className='Wrapper__heading-h gradient__text'>FAQ</h1>
    </div>
    <div className="border " ></div>
      <div className='accordion'>
        {data.map((item, i) => (
            <div className='item'>
                <div className='title' onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content  '}>
                  {item.answer}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
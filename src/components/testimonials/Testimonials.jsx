import React from 'react'
import p1 from "./tesimonial_assets/p1.png"
import p2 from "./tesimonial_assets/p2.png"
import p3 from "./tesimonial_assets/p3.png"
import "./testimonials.css"


const Testimonials = () => {
  return (
    
      <div className="testimonials">
        <div className="inner">
          <h1 className='gradient__text'>Testimonials</h1>
          <div className="border"></div>

          <div className="row">
            <div className="col">
              <div className="testimonial">
                <img src={p1} alt="" />
                <div className="name">David Willey</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src={p2} alt="" />
                <div className="name">Angela watson</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>

            <div className="col">
              <div className="testimonial">
                <img src={p3} alt="" />
                <div className="name">Benny ponting</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default Testimonials
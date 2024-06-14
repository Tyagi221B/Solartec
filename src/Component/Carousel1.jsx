import React from 'react'
import OwlCarousel from 'react-owl-carousel'

function Carousel1() {
  
  var settings = {
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
  };
  return (
    <>
      <OwlCarousel className='owl-carousel header-carousel position-relative' loop margin={10} nav   {...settings}>
        <div className='owl-carousel-item position-relative' data-dot="<img src='img/carousel-1.jpg'>" >
          <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='owl-carousel-item position-relative' data-dot="<img src='img/carousel-2.jpg'>">
          <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='owl-carousel-item position-relative' data-dot="<img src='img/carousel-3.jpg'>">
          <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>;
    </>
  )
}

export default Carousel1
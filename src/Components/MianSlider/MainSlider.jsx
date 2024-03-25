import React from 'react'
import img1 from "../../assits/images/slider-image-1.jpeg"
import img2 from "../../assits/images/slider-image-2.jpeg"
import img3 from "../../assits/images/slider-image-3.jpeg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="container py-5">
        <div className="row ">
          <div className="col-md-8 mb-4" >


            <Slider {...settings} >
              <img src={img3} className='w-100' alt="" />
              <img src={img2} className='w-100' alt="" />
              <img src={img1} className='w-100' alt="" />
            </Slider>

          </div>
          <div className="col-md-4">
            <img src={img1} className='w-100' alt="" />
            <img src={img2} className='w-100' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function GalleryComponent2() {
    var settings = {
        autoplay:true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
        ],
    };
  return (
    <div>
    <div className="container">
      <div className="col-12 mb-5 mt-5">
      <p style={{fontFamily:'Alfa Slab One',fontSize:'50px'}} >Customize your content</p>
      <p style={{fontFamily:'Poppins'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br/>Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div className='col-12 pt-5 text-center mt-5 mb-5'>
      <Slider {...settings}>
      <div>
        <h3> <img src={"./images/galleryc1.png"} style={{ width: '90%' }}  alt='' /></h3>
      </div>
      <div>
        <h3> <img src={"./images/galleryc2.png"} style={{ width: '90%' }}  alt='' /></h3>
      </div>
      <div>
        <h3><img src={"./images/galleryc3.png"} style={{ width: '90%' }} alt='' /></h3>
      </div>
      <div>
        <h3><img src={"./images/galleryc4.png"} style={{ width: '90%' }}  alt='' /> </h3>
      </div>
      <div>
        <h3><img src={"./images/galleryc1.png"} style={{ width: '90%' }}  alt='' /></h3>
      </div>
      <div>
        <h3><img src={"./images/galleryc3.png"} style={{ width: '90%' }}  alt='' /></h3>
      </div>
    </Slider>
      
      </div>
    </div>
  </div>
  )
}

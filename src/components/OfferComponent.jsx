import React from 'react'

export default function OfferComponent() {
  return (
    <div>
    <div className="container">
      <div className="col-12 mb-5 mt-5">
      <p style={{fontFamily:'Alfa Slab One',fontSize:'50px'}} >What we Offer</p>
      <p style={{fontFamily:'Poppins'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br/>Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div className='col-12 pt-5 text-center mt-5 mb-5'>
      <img src={"./images/gallery2.png"} style={{ width: '100%' }} className='pb-5 rounded' alt='' />
      <img src={"./images/gallery3.png"} style={{ width: '100%' }} className='pb-5 rounded' alt='' />
      </div>
    </div>
  </div>
  )
}

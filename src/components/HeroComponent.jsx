import React from 'react'
import "@fontsource/alfa-slab-one";
import { Button } from 'react-bootstrap'
export default function HeroComponent() {
  return (
    <div>
     <div className="container">
        <div className="row d-flex justify-content-around">
           <div className='col-12 col-md-5 mt-5 mb-5' >
              <p style={{fontFamily:'Alfa Slab One',fontSize:'80px' }}>Welcome to SALT APK.</p> 
              <p>Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.</p>
              <Button variant='dark'  style={{width:'45%',backgroundColor:' #10AB61',padding:'10px'}}>Take a Free Demo</Button>
              <Button variant='dark' className='mx-2' style={{width:'45%',padding:'10px'}} > Book a call</Button>
              <div style={{border:'1px #DDDDD2 solid',borderRadius:'5px'}} className='mt-3 d-flex justify-content-around p-2'> 
              <p style={{borderRight:'1px #DDDDD2 solid',color: 'GrayText',fontSize:'12px'}} className='mt-3 pe-2'> <img src={"./images/vector.png"} style={{width:'15%',height:'20px'}} className='mb-1 mx-1' alt=''/> 15 Day’s Free </p>
              <p style={{borderRight:'1px #DDDDD2 solid',color: 'GrayText',fontSize:'12px'}} className='mt-3 pe-2'> <img src={"./images/vector (1).png"} style={{width:'10%',height:'20px'}} className=' mb-1 mx-1' alt=''/>Opening in 15 minutes </p>
              <p style={{color: 'GrayText',fontSize:'12px'}} className='mt-3  '> <img src={"./images/vector (2).png"} style={{width:'12%',height:'20px'}} className=' mb-1 mx-1' alt=''/>Without Commitment </p>
              </div>
                </div>
                <div className='col-12 col-md-5  mt-5 mb-5'>
                    <img src={"./images/Screenshot1.png"} style={{width:'100%', float:'left'}} className=' w-sm-100 ' alt=''/>
                </div>
                </div>
        </div> 
    </div>
  )
}

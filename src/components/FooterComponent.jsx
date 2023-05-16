import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function FooterComponent() {
  return (
    <div style={{ backgroundColor: "#10AB61"}}>
    <div className="container">
    <Navbar   >
    <Navbar.Brand href="#home"><img
              src="./images/saltlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"className='mt-2' style={{fontFamily:'Sarina', fontSize:'20px',fontStyle:'italic',fontWeight:900,color:'white'}}>Salt</Nav.Link>
          </Nav>
          
        
             <Nav className="me-auto  mt-5 mb-5"  id='navspace' navbarScroll>
               <Nav.Link href="#action1" className='mx-3' style={{color:'white'}}>Welcome</Nav.Link>
               <Nav.Link href="#action2" className='mx-3' style={{color:'white'}}>Terms of use</Nav.Link>
              <Nav.Link href="#action3"  className='mx-3' style={{color:'white'}}>Data Protection</Nav.Link>
              <Nav.Link href="#action4"  className='mx-3' style={{color:'white'}}>Configure Cookies</Nav.Link>
              <Nav.Link href="#action4"  className='mx-3' style={{color:'white'}}>Legal notice</Nav.Link>
             </Nav>
            <Form className="d-flex"  id='fspace'>
            <img src={"./Images/Linkedin (1).png"} style={{width:'20%'}} className='mt-4' alt=''/>
            <img src={"./Images/Facebook (1).png"} style={{width:'20%'}} className='mt-4' alt=''/>
            <img src={"./Images/Twitter (1).png"} style={{width:'20%'}} className='mt-4' alt=''/>
             </Form>
          
         
       </Navbar>
       </div>
  </div>
  )
}

import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Modal, Form } from 'react-bootstrap';
import "./home_style.css";

export function Home() {
  return (
    <>
      <Navigation />

      <Footer/>
    </>
  );
}

export function Navigation() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Validation Function
  let formRef = useRef();
  const submitAction = () => {
    formRef.current.classList.add('was-validated');
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }
  };

  return (
    <Navbar bg="light " expand="lg" style={{fontSize:'large',fontWeight:'bold' }}>
      <Container>
        <a className="navbar-brand" href="/">
          <img
            src="https://www.nvsp.in/Content/images/logo.png"
            alt="Bootstrap"
          />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Nav.Link href="#home" style={{color:'#0d6efd'}} >Home</Nav.Link>
            <Nav.Link href="#link">AboutUs</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
           
            <button
              className="btn btn-danger mx-1"
              onClick={() => setShowModal(true)}
            >
              Admin Login
            </button>

            <Modal show={showModal} onHide={handleCloseModal}>
              {/* React Bootstrap modal content */}
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="needs-validation" ref={formRef} noValidate>
                  <Form.Group controlId="exampleInputEmail1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Email ID"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="exampleInputPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={submitAction}
                  >
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export  function Footer(){


    return (
      <>
      <footer className="footer">
      <div id='other_link' style={{textAlign:'center',fontSize:'large',fontWeight:'bold'}}>
        Other Important Links
      </div>
      <br />
  
      <div id='foot2'>
        <div>
          <input
            type="button"
            className="btn p-10"
            value="Link to States/UT's CEO's"
          />
        </div>
        <div>
          <input type="button" className="btn p-10" value="Voter Education" />
        </div>
        <div>
          <input type="button" className="btn p-10" value="Polling Process" />
        </div>
        <div><input type="button" className="btn p-10" value="EVM Machine" /></div>
        <div>
          <input
            type="button"
            className="btn p-10"
            value="Complaints & Suggestion "
          />
        </div>
      </div>
  
      <div id="flex1">
        <div id="flex2"
          className="col-md-7 col-sm-12"
          
        >
          
            <span id="span1"
              className="site-name black"
              
            >
              Contact Us
            </span>
                    <p>
            For details of eligibility criteria or any other additional
            information related to electoral forms, kindly visit
            <a href="https://eci.gov.in" rel="noopener noreferrer"
              ><b>https://eci.gov.in</b></a
            >
          </p>
          <p>
            For any other technical feedback or issues on the portal kindly send
            your feedback to
  
            <a
              href="mailto:ecitechsupport@eci.gov.in?Help Desk"
              target="_top"
              rel="noopener noreferrer"
            >
              <b > ECI Technical Support </b>
            </a>
          </p>
          <div className="media-body" style={{color: '#b9b9b9'}}>
            Toll free Number :1800111950
          </div>
        </div>
  
        <div className="col-md-5 col-sm-6" style={{flex: '1', padding: '10px'}} >
          <div id='oth1' >Other Links</div>
          <div id='oth2' >Election Commission of India</div>
          <div  id='oth3' >Cheif Electoral Officer</div>
        </div>
      </div>
      <hr />
      <div id='oth4' >
        National Voter's Service Portal © Copyright 2019. All Rights Reserved.
      </div>
    </footer>
  
    </>
  
    );
  
}
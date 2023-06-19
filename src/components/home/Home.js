import React, { useState, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

import "./home_style.css";

export function Home() {
  return (
    <>
      <Navigation />
      <MyCarousel/>
      <VoterResources/>
      <FeaturedCards/>
      <marquee></marquee>
      <Footer/>
    </>
  );
}

export function Navigation() {

  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Validation Function
  let formRef = useRef();

  const submitAction = (e) => {

    e.preventDefault();

  // Validation
  formRef.current.classList.add('was-validated');
  let formStatus = formRef.current.checkValidity();
  
  const emailRegex = /^[a-z A-Z]+[a-z A-Z 0-9 $-._]+@[a-zA-Z ._]+\.(com|in|org)$/;;
    const isEmailValid = emailRegex.test(username);

    setIsEmailValid(isEmailValid);

    if (!isEmailValid & !formStatus) {
      return;
    }
    
    // -------------
    
    
    const formData = {
      username: username,
      password: password
    };
  

    // Backend fetch
    fetch('http://localhost:3001/api/adminlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);

        // Check Success Login
        if (data.success) {
          // Redirect to the user dashboard on successful login
          localStorage.setItem('loginStatus', 'true');
          localStorage.setItem('userRole', 'admin');
          navigate('/admindashboard');
        } else {
          // Handle login failure
          // console.error('Login failed:', data.message);
          navigate('/login_fail');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })

      formRef.current.classList.remove('was-validated');


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
           <Nav.Link href="/" style={{color:'#0d6efd'}} >Home</Nav.Link>
            <Nav.Link href="/about">AboutUs</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
           
            <button
              className="btn btn-danger mx-2"
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
                    <Form.Label>UserID</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      placeholder="Enter your Email ID"
                      pattern="/^[a-zA-Z\s]{3,20}$/"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />

                    
                  </Form.Group>
                  <Form.Group controlId="exampleInputPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <button
                  type="button"
                  className="btn btn-primary m-2"
                  onClick={submitAction}>  Submit
                  </button>
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

export class MyCarousel extends React.Component {
  render() {
    return (
      <Carousel>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src="resize-16862975651540879446voterslider1.jpg"
            alt="Slide 1"
          />
          <Carousel.Caption style={{textAlign:'center'}}> {/* Added "text-center" class */}
            <h2>Welcome to the Online Voting Platform</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="resize-1686297816895079438voterslider3.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="resize-16862977891784981071voterslider2.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}


export const VoterResources = () => {

const navigate = useNavigate();

const navigateToLogin = () => {
  navigate('/login');
};

const navigateToRegister = () => {
  navigate('/signin');
};  


    return (
      <div className="voter">
        <div className="container" style={{ borderRadius: '10px',
          boxSizing: 'border-box',
          padding: '20px 80px 10px 80px',
          margin:'20px 20px 20px 60px',
          boxShadow: '2px 2px 5px 5px lightblue'}}>
          <div className="row">
            <div className="col-md-6">
              <h3>Resources for Voters</h3>
              <ul className="list list-icons list-primary list-borders">
                <li>
                  <i className="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;
                  <a href="#" target="_blank" rel="noopener noreferrer">👉 Register to vote</a>
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;
                  <a href="#" target="_blank" rel="noopener noreferrer">👉 Login to vote</a>
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;
                  <a href="https://www.nvsp.in/Forms/Forms/trackstatus" target="_blank" rel="noopener noreferrer">👉 Confirm your voter registration status</a>
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;
                  <a href="https://electoralsearch.in/" target="_blank" rel="noopener noreferrer">👉 Know your polling booth</a>
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;
                  <a href="/voter/service-overseas-voter/">👉 Learn about Service voter and Overseas voter</a>
                </li>
                <li>
                  <i className="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;
                  <a href="https://play.google.com/store/apps/developer?id=Election+Commission+of+India&amp;hl=en_IN" target="_blank" rel="noopener noreferrer">👉 Download Voters App</a>
                </li>
              </ul>
                <button className="btn btn-primary m-2" onClick={navigateToLogin}>Login</button>
                <button className="btn btn-primary m-2" onClick={navigateToRegister}>Register</button>
            </div>
            <div className="col-md-6">
              <img
                src="Right_to_Vote_Drishti_IAS_English.webp"
                className="img-responsive img-fluid img-rounded zoom"
                alt="Voter Resources Image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };



export class FeaturedCards extends React.Component {
  render() {
    return (
      <div className="featured-cards">
        <div className="container">
          <div className="row">
            <div className="col-md-4" >
              <div className="card " style={{ borderRadius: '10px',
              boxSizing: 'border-box',
              padding: '10px 80px 5px 80px',
              // margin:'10px 20px 20px 40px',
              boxShadow: '2px 2px 5px 5px lightblue'}}>
                <img src="AdobeStock_565365361_Preview.png" alt="Card Image" />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content
                    is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Know More</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" >
              <div className="card " style={{ borderRadius: '10px',
              boxSizing: 'border-box',
              padding: '10px 80px 5px 80px',
              // margin:'10px 20px 20px 40px',
              boxShadow: '2px 2px 5px 5px lightblue'}}>
                <img src="Register.jpg" alt="Card Image" />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content
                    is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Know More</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"  >
              <div className="card" style={{ borderRadius: '10px',
              boxSizing: 'border-box',
              padding: '10px 80px 5px 80px',
              // margin:'10px 20px 20px 40px',
              boxShadow: '2px 2px 5px 5px lightblue'}} >
                <img src="Login.jpg" alt="Card Image" />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content
                    is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Know More</button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
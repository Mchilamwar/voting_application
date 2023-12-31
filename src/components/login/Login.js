import React, { useState, useRef} from 'react';
import { BrowserRouter,Link,useNavigate, Route, Routes } from "react-router-dom";
import "./login_style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal,Nav, Form } from 'react-bootstrap';



function Login() {

  
  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Validation
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

    const formData = {
      username: username,
      password: password
    };
  

    // Backend fetch
    fetch('http://localhost:3001/api/userlogin', {
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
          localStorage.setItem('userRole', 'user');
          navigate('/userdashboard');
        } else {
          // Handle login failure
          // console.error('Login failed:', data.message);
          navigate('/login_fail');
          formRef.current.classList.remove('was-validated');

        }
      })
      .catch(error => {
        console.error('Error:', error);
      })

      formRef.current.classList.remove('was-validated');




  };

  // -----





  return (
    
    <>
    
    <div className="split left">
      <div className="centered">
        <div className="login-content-logo-section">
          <img src="eci_logo.png" alt="logo" /><br/><br/>
          <div className="login-content-title" style={{color:'white'}}>
            <h4 className="login-content-htitle">ईसीआई वेब पोर्टल</h4>
            <h4 className="login-content-etitle">ECI Web Portal</h4>
          </div>
        </div>
        <div className="login-content-para">
          <p className="p_login" style={{color:'white'}}>
            The ecosystem of ECI portal which provide better personalization,
            user-friendly Geographic Navigation System, ease of sending
            notifications, and digitization of offline work.
          </p>
        </div>
        <div className="tabs_login" style={{color:'white',display:'flex', justifyContent:'space-around',width:'400px'}}>
          <Nav.Link as={Link} to={"/"} ><span>Home</span></Nav.Link> 
          <Nav.Link as={Link} to={"/about"} ><span>About Us</span></Nav.Link>
          <Nav.Link as={Link} to={"/contact"} ><span>Contact Us</span></Nav.Link>
        </div>
      </div>
    </div>

    <div className="split right">
      <div className="centered">
        <div className="container" id='container'>
          <h1 style={{textAlign:'center'}} className='m-2'>Login</h1>
          <Form className="needs-validation" ref={formRef} noValidate>
          <Form.Group controlId="exampleInputEmail1">
                    <Form.Label className='m-2'>UserID <span style={{color: 'red', fontSize: 'large'}}>*</span></Form.Label>
                    <Form.Control
                      className='m-2'
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
                    <Form.Label className='m-2'>Password <span style={{color: 'red', fontSize: 'large'}}>*</span></Form.Label>
                    <Form.Control
                      className='m-2'
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
        </div>
      </div>
    </div>
    
    
    </>





  );
}

export default Login;

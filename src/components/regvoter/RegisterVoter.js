import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Usernav } from '../userdash/Userdashboard';
import { Footer } from '../home/Home';
import { useNavigate } from 'react-router-dom';


export const RegisterVoter = () => {

  const navigate=useNavigate();
  const formref=useRef();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    dob: '',
    city: '',
    state: '',
    pincode: '',
    mobile: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Perform validation checks
    if (!formData.name) {
      validationErrors.name = 'Name is required.';
    }
    // Add more validation checks for other fields

    // Update the errors state
    setErrors(validationErrors);

    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
      fetch('http://localhost:3001/api/registervote', {
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
            navigate('/userdashboard');
          } else {
            // Handle login failure
            // console.error('Login failed:', data.message);
            navigate('/registerfail');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        })
  
        formref.current.classList.remove('was-validated');
  
      
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
    <Usernav/>
    <Container className=''>
    <Form onSubmit={handleSubmit} ref={formref}>
      <Form.Group as={Row} controlId="name">
        <Form.Label column sm={2}>
          Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control className='my-2 '
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="age">
        <Form.Label column sm={2}>
          Age:
        </Form.Label>
        <Col sm={10}>
          <Form.Control className='my-2 '
            type="text"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="gender">
        <Form.Label column sm={2}>
          Gender:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="select" className='my-2 '
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            isInvalid={!!errors.gender}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.gender}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="dob">
        <Form.Label column sm={2}>
          Date of Birth:
        </Form.Label>
        <Col sm={10}>
          <Form.Control className='my-2 '
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            isInvalid={!!errors.dob}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dob}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="city">
        <Form.Label column sm={2}>
          City:
        </Form.Label>
        <Col sm={10}>
          <Form.Control className='my-2 '
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            isInvalid={!!errors.city}
          />
          <Form.Control.Feedback type="invalid">
            {errors.city}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="state">
        <Form.Label column sm={2}>
          State:
        </Form.Label>
        <Col sm={10}>
          <Form.Control className='my-2 '
            type="text"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            isInvalid={!!errors.state}
          />
          <Form.Control.Feedback type="invalid">
            {errors.state}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className='my-2 ' controlId="pincode">
        <Form.Label column sm={2}>
          Pincode:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            value={formData.pincode}
            onChange={(e) =>
              setFormData({ ...formData, pincode: e.target.value })
            }
            isInvalid={!!errors.pincode}
          />
          <Form.Control.Feedback type="invalid">
            {errors.pincode}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="mobile">
        <Form.Label column sm={2}>
          Mobile Number:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text" className='my-2 '
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            isInvalid={!!errors.mobile}
          />
          <Form.Control.Feedback type="invalid"> 
            {errors.mobile}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="email">
        <Form.Label column sm={2}>
          Email ID:
        </Form.Label>
        <Col sm={10}>
          <Form.Control className='my-2 '
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <center><Button type="submit" className='my-4 ' style={{width:'200px'}}>Submit</Button></center>
    </Form>
    </Container>
<Footer/>
</>
  );
};


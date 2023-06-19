import React, { useState } from 'react';
import './regvoter.css';
import { Usernav } from '../userdash/Userdashboard';
import { Footer } from '../home/Home';

export const RegisterVoter = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'Please enter your name';
    }
    if (!age) {
      validationErrors.age = 'Please enter your age';
    } else if (isNaN(age)) {
      validationErrors.age = 'Age must be a number';
    } else if (parseInt(age) < 18) {
      validationErrors.age = 'You must be at least 18 years old';
    }
    if (!gender) {
      validationErrors.gender = 'Please select your gender';
    }
    if (!dob) {
      validationErrors.dob = 'Please enter your date of birth';
    }
    if (!city) {
      validationErrors.city = 'Please enter your city';
    }
    if (!state) {
      validationErrors.state = 'Please enter your state';
    }
    if (!pincode) {
      validationErrors.pincode = 'Please enter your pincode';
    } else if (isNaN(pincode)) {
      validationErrors.pincode = 'Pincode must be a number';
    }
    if (!mobile) {
      validationErrors.mobile = 'Please enter your mobile number';
    } else if (isNaN(mobile)) {
      validationErrors.mobile = 'Mobile number must be a number';
    }
    if (!email) {
      validationErrors.email = 'Please enter your email ID';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Please enter a valid email ID';
    }

    // If there are validation errors, update the state and stop form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If the form is valid, submit the data
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('Date of Birth:', dob);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Pincode:', pincode);
    console.log('Mobile:', mobile);
    console.log('Email:', email);

    // Reset the form
    setName('');
    setAge('');
    setGender('');
    setDob('');
    setCity('');
    setState('');
    setPincode('');
    setMobile('');
    setEmail('');
    setErrors({});
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
    <Usernav/>
        <h2 style={{fontSize:'large',}}>Apply To Vote </h2>    
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}
      </div>

      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="text"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {errors.dob && <span>{errors.dob}</span>}
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {errors.city && <span>{errors.city}</span>}
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        {errors.state && <span>{errors.state}</span>}
      </div>

      <div>
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        {errors.pincode && <span>{errors.pincode}</span>}
      </div>

      <div>
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {errors.mobile && <span>{errors.mobile}</span>}
      </div>

      <div>
        <label htmlFor="email">Email ID:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  <Footer/>
  </>
  );
};
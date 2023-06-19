import React from "react";
import {Footer} from "../home/Home";
import { BrowserRouter,Link,useNavigate, Route, Routes } from "react-router-dom";
import {Nav,Navbar,Container} from 'react-bootstrap';

export function UserDashboard(){

    return (<>
    <Usernav/>
    <VoterResources/>
    <Footer/>
    </>);
};


export const VoterResources = () => {
   
    return (
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
       <div className="col">
       

          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('v1.png')",backgroundSize: "cover",
              backgroundPosition: "center" }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> <Nav.Link as={Link} to={"/regvoter"} >
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ color: 'rgb(219, 30, 30)' }}>Register for Voting</h2></Nav.Link>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('v4.png')",backgroundSize: "cover",
              backgroundPosition: "center" }}>
            <div className="d-flex flex-column h-150 p-5 pb-3 text-white text-shadow-1"> <Nav.Link as={Link} to={"/"} >
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ color: 'rgb(215, 41, 41)' }}>Check Your Application Status</h2></Nav.Link>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('1641405686_election.jpg')",backgroundSize: "cover",
              backgroundPosition: "center" }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"> <Nav.Link as={Link} to={"/"} >
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ color: 'rgb(236, 36, 36)' }}>Vote</h2></Nav.Link>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };



  export function Usernav(){

    const navigate=useNavigate();

    let logout=()=>{

      localStorage.removeItem('loginStatus');
      localStorage.removeItem('userRole');

      navigate("/");
      
    };

    return(
    
    <>
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
            onClick={logout}
          >
            LogOut
          </button>


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
  
  }
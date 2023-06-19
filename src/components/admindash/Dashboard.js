import React from "react";
import {Footer} from "../home/Home";
import { BrowserRouter,Link,useNavigate, Route, Routes } from "react-router-dom";
import {Nav,Navbar,Container} from 'react-bootstrap';


export function Dashboard() {
  return (
    <>
    <Adminnav/>
    
    <div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: "url(approve.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Approve Voter
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Display Candidates
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg custom-card"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                View Voter Info
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557682260-96773eb01377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=829&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Publish Results
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}



export function Adminnav(){

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

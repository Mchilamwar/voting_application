import React from 'react';
import './aboutstyle.css'; 
import {Navigation,Footer} from "../home/Home";

export function About () {
  return (
    <>
  <Navigation/>
    <div  style={{backgroundColor:'#f0f8ff'}}>
      <div className="container py-5">
        <div className="row featurette">
          <div className="col-md-7 order-md-2 ">
            <h2 className="featurette-heading">
              Mayur Chilamwar <span className="text-muted"></span>
            </h2>
            <p className="lead order">
              Mayur is the tech wizard of the team. With his deep knowledge of software development and expertise in various
              programming languages, he brings a wealth of technical skills to the table. John is a natural problem solver, with
              a knack for dissecting complex issues and finding efficient solutions. His dedication to staying updated with the
              latest industry trends ensures that the software project incorporates cutting-edge technologies. John's analytical
              mindset and meticulous approach to coding make him an indispensable member of the team.
            </p>
          </div>
          <div className="col-md-5 order-md-1 d-flex align-items-center justify-content-center " id="aboutimg">
            <img src="may.jpg" alt="" style={{height:'300px'}} />
          </div>
        </div>
      </div>
      
      <div className="container py-5">
        <div className="row featurette">
          <div className="col-md-7 order-md-3 ">
            <h2 className="featurette-heading">
              Rahul Mankar <span className="text-muted"></span>
            </h2>
            <p className="lead">
              Rahul is the driving force behind the team's success. With his strong leadership skills and strategic mindset, he
              ensures that the software project stays on track and meets its objectives. Rahul is an excellent communicator and
              collaborator, adept at bringing people together and fostering a cohesive team environment. His attention to detail
              and organizational skills ensure that no aspect of the project is overlooked. Rahul's determination and
              problem-solving abilities make him an invaluable asset.
            </p>
          </div>
          <div className="col-md-5 order-md-2 d-flex align-items-center justify-content-center">
            <img src="rm2.jpg" alt="" style={{height:'300px'}} />
          </div>
        </div>
      </div>
    
      <div className="container py-5">
        <div className="row featurette">
          <div className="col-md-7 order-md-3">
            <h2 className="featurette-heading">
              Shivam Sharma <span className="text-muted"></span>
            </h2>
            <p className="lead">
              Shivam is the creative genius that adds an artistic touch to the software project. With his eye for design and user
              experience, he ensures that the software is not only functional but also visually appealing and intuitive. Shivam's
              passion for making things done shines through as he creates engaging interfaces and seamless interactions. He
              possesses a keen understanding of user experience, which enables him to design interfaces that are user-friendly
              and enhance the overall user experience.
            </p>
          </div>
          <div className="col-md-5 order-md-2 d-flex align-items-center justify-content-center">
            <img src="sh.jpg" alt="" style={{height:'300px'}} />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}


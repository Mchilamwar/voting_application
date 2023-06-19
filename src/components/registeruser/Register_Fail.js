import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

export function RegisterFail(){

    const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 4000); //4 sec delay

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

return (
    <>
    <h2> Registration failed please Register Again with valid Credentials</h2>
    <br/>
    <h4>Redirectin Back to the Home Page .... </h4>
    </>

);

};
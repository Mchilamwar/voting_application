import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function RegisterSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 4000); //4 sec delay

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Registration Successful!</h1>
      <p>You will be redirected to the home page in a few seconds...</p>
    </div>
  );
}



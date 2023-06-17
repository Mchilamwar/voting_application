import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <>

<BrowserRouter>

    
        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={  <Home/>} />

          <Route path='/login' element={<Login/>} />


          {/* <Route path="/login" element={<AppLogin />} /> */}
          
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;

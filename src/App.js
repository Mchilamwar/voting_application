import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import {Dashboard} from "./components/admindash/Dashboard";
import {UserDashboard} from "./components/userdash/Userdashboard";
import SignIn from "./components/registeruser/SignIn";
import { RegisterSuccess } from './components/registeruser/Register_Success';
import { RegisterFail } from './components/registeruser/Register_Fail';
import {About} from './components/about/About';
import { Appshowstatus } from './components/applicationstatus/Appstatus';
import { VotingPage } from './components/vote/VotingPage.jsx';
import { RegisterVoter } from './components/regvoter/RegisterVoter';

function App() {
  return (
    <>

<BrowserRouter>

    
        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={  <Home/>} />

          <Route path='/login' element={<Login/>} />

          <Route path='/signin' element={<SignIn/>} />

          <Route path='/registersuccess' element={<RegisterSuccess/>} />
          <Route path='/registerfail' element={<RegisterFail/>} />


          <Route path='/admindashboard' element={<ProtectedRoute allowedRoles={['admin']}><Dashboard/></ProtectedRoute>} />

          <Route path='/userdashboard' element={<ProtectedRoute allowedRoles={['user']}><UserDashboard/></ProtectedRoute>} />


          <Route path='/regvoter' element={<ProtectedRoute allowedRoles={['user']}><RegisterVoter/></ProtectedRoute>} />


          <Route path='/appshowstatus' element={<ProtectedRoute allowedRoles={['user']}><Appshowstatus/></ProtectedRoute>} />

          <Route path='/vote' element={<ProtectedRoute allowedRoles={['user']}><VotingPage/></ProtectedRoute>} />


          <Route path='/about' element={<About/>} />


          



          {/* <Route path="/login" element={<AppLogin />} /> */}
          
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}


function ProtectedRoute({ children, allowedRoles }) {
  const loginStatus = localStorage.getItem('loginStatus');
  const userRole = localStorage.getItem('userRole');

  // Check if user is logged in
  if (!loginStatus) {
    return <Navigate to="/login" replace={true} />;
  }

  // Check if user has the allowed role
  if (allowedRoles && allowedRoles.indexOf(userRole) === -1) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}




export default App;

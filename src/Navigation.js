import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import { IoIosNotifications} from "react-icons/io";
import Sidebar from './components/sidebar';
// import Signup from './Signup';

function Navigation() {
  return (
    <>
    <div><Sidebar/></div>
    <nav className="nav-bar">
      <div className="nav-title">Task Manager</div>
      <div className="nav-options">
        {/* <div className='fs-5 text-decoration-none '> 
            <Link to="/signup" className='fs-5 text-decoration-none '>Login</Link>
        </div> */}
        <div className="notification-bell ms-5  ">
        <Link className='text-decoration-none text-danger bell'><strong><IoIosNotifications /></strong></Link>
          
        </div>
        <div className="sign-out">
          <Link to='/'>Sign Out</Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navigation;
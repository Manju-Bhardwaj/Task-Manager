import React from 'react';
import './NavBar.css';
import { IoIosNotifications } from "react-icons/io";
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="nav-title">Task Manager</div>
      <div className="nav-options">
        <div></div>
        <div className="notification-bell fs-4 fw-bold">
        <IoIosNotifications />
          
        </div>
        <div className="sign-out">
          <Link to='/signup' className='text-decoration-none text-white fw-bold fs-5'>Sign Out</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
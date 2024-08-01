import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
     
      <ul className="sidebar-links">
        <li>

            
            <h4 className='d-flex flex-row text-center'> <FaUserAlt className='me-4' /> User</h4>
        </li>
        <li>
          
          <Link to='/dashboard' > <MdDashboardCustomize className='me-2'/>Dashboard</Link>
        </li>
        <li>
        <Link to='/tasks'><MdTask className='me-2' />Tasks</Link>
        </li>
        <li>
        <Link to='/join'><FaUserGroup className='me-2' />Join Group</Link>
        </li>
        <li>
        <Link to='/create'><MdGroupAdd className='me-2' />Create Group</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
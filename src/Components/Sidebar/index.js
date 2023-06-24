import React from "react";
import { FaHome, FaMoneyBill, FaCalendarAlt, FaUsers, FaCog, FaQuestionCircle, FaPhone } from 'react-icons/fa';
import "./index.css"


function Sidebar (){
    return(
        <div className="sidebar">
        <div className='top-buttons'>
      <ul>
        <li>
          <a href="/">
            <FaHome />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/transactions">
            <FaMoneyBill />
            <span>Transactions</span>
          </a>
        </li>
        <li>
          <a href="/schedules">
            <FaCalendarAlt />
            <span>Schedules</span>
          </a>
        </li>
        <li>
          <a href="/users">
            <FaUsers />
            <span>Users</span>
          </a>
        </li>
        <li>
          <a href="/settings">
            <FaCog />
            <span>Settings</span>
          </a>
        </li>
      </ul>
      </div>
      <div className="bottom-options">
        <a href="/help">
          <FaQuestionCircle />
          <span>Help</span>
        </a>
        <a href="/contact">
          <FaPhone />
          <span>Contact Us</span>
        </a>
      </div>
    </div>
    
    )   

}


export default Sidebar
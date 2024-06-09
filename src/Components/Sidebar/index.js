import React from "react";
import { FaHome, FaMoneyBill, FaCalendarAlt, FaUsers, FaCog, FaQuestionCircle, FaPhone } from 'react-icons/fa';
import "./index.css"


function Sidebar (){
    return(
        <div className="sidebar">
        <div className='top-buttons'>
      <ul>
        <li>
          <a href="/home">
            <FaHome />
            <span className="spanelement" >Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <FaMoneyBill />
            <span className="spanelement">Transactions</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <FaCalendarAlt />
            <span className="spanelement">Schedules</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <FaUsers />
            <span className="spanelement">Users</span>
          </a>
        </li>
        <li>
          <a href="/home">
            <FaCog />
            <span className="spanelement">Settings</span>
          </a>
        </li>
      </ul>
      </div>
      <div className="bottom-options">
        <a href="/home">
          <FaQuestionCircle />
          <span className="spanelement">Help</span>
        </a>
        <a href="/home">
          <FaPhone />
          <span className="spanelement">Contact Us</span>
        </a>
      </div>
    </div>
    
    )   

}


export default Sidebar
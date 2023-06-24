
import React from 'react';
import Sidebar from '../Sidebar';
import LineChartComponent from '../LineChartComponent';
import PieChartComponent from '../PieChartComponent';
import Schedule from '../Schedule';
import {   FaUsers,  FaSearch, FaBell, FaUser,
    FaDollarSign, FaExchangeAlt, FaThumbsUp } from 'react-icons/fa';
import './index.css';

function Dashboard() {
  return (
    <div className='main-container'>
    <div>
      <Sidebar/>
      </div>
    
    {/* dashboard */}
    <div  className='main-cont'>
        {/* header */}
    <header className="header">
      <div className="left-section">
        <div className="logo">Dashboard</div>
      </div>
      <div className="right-section">
        <div className="search-button">
          <button>
            <FaSearch />
          </button>
        </div>
        <div className="reminder">
          <button>
            <FaBell />
          </button>
        </div>
        <div className="profile-pic">
          <button>
            <FaUser />
          </button>
        </div>
      </div>
    </header>
    {/* progress */}
        <div>
        <div className="boxes">
      <div className="box b1">
        <div className="box-header">
          <FaDollarSign />
          
        </div>
        <div className="box-content">
          <div className="box-data">
            <div className="box-data-title">Total Revenue</div>
            <div className="box-data-value">$2,129,430</div>
          </div>
        </div>
      </div>
      <div className="box b2">
        <div className="box-header">
          <FaExchangeAlt />
          
        </div>
        <div className="box-content">
          
          <div className="box-data">
            <div className="box-data-title">Total Transactions</div>
            <div className="box-data-value">1520</div>
          </div>
        </div>
      </div>
      <div className="box b3">
        <div className="box-header">
          <FaThumbsUp />
          
        </div>
        <div className="box-content">
          
          <div className="box-data">
            <div className="box-data-title">Total Likes</div>
            <div className="box-data-value">9721</div>
          </div>
        </div>
      </div>
      <div className="box b4">
        <div className="box-header">
          <FaUsers />
          
        </div>
        <div className="box-content">
          
          <div className="box-data">
            <div className="box-data-title">Total Users</div>
            <div className="box-data-value">892</div>
          </div>
        </div>
      </div>
    </div>
          <LineChartComponent className="linechart"/>
          <div className='bottom-container'>
          <PieChartComponent/>
          <Schedule/>
          </div>
        </div>
        </div>

    
    </div>
  );
}

export default Dashboard;

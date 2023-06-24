
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import './index.css';

function LineChartComponent() {
  const data = [
    { week: 'Week 0', guest: 310, user: 200 },
    { week: 'Week 1', guest: 250, user: 200 },
    { week: 'Week 2', guest: 300, user: 400 },
    { week: 'Week 3', guest: 250, user: 300 },
    { week: 'Week 4', guest: 450, user: 400 },
  ];

  return (
    <div className="line-chart">
      <h2 className="chart-heading">Activities</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey="guest" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="user" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  );
}

export default LineChartComponent;

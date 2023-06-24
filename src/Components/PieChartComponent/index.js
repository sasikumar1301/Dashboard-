import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import './index.css';

function PieChartComponent() {
  const data = [
    { name: 'Basic Tees', value: 40 },
    { name: 'Custom Short Pants', value: 30 },
    { name: 'Supper Hoodies', value: 20 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  return (
    <div className="pie-chart">
      <h2 className="chart-heading">Top Products</h2>
      <div className="date">June 2023</div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart className='flex-items'>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieChartComponent;

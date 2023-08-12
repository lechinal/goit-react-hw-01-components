import React from 'react';

const getRandomColor = () => {
  const colors = ['red', 'blue', 'green', 'purple', 'orange'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((stat, index) => (
          <li className="item" key={index}>
            <span
              className="label"
              style={{ backgroundColor: getRandomColor() }}
            >
              {stat.label}
            </span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

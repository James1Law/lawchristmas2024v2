import React from 'react';
import '../styles/Snow.css';

const Snow = () => {
  return (
    <div className="snow-container">
      {[...Array(180)].map((_, index) => (
        <div key={index} className="snow" />
      ))}
    </div>
  );
};

export default Snow; 
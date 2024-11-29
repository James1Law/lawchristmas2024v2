import React from 'react';
import '../styles/Snow.css';

const Snow = () => {
  const getRandomPosition = () => {
    return {
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `-${Math.random() * 5}s`
    };
  };

  return (
    <div className="snow-container">
      {[...Array(250)].map((_, index) => (
        <div 
          key={index} 
          className="snow" 
          style={getRandomPosition()}
        />
      ))}
    </div>
  );
};

export default Snow; 
import React from 'react';
import '../styles/Snow.css';

const Snow = () => {
  console.log('Snow component rendered');
  
  const getRandomStyles = () => ({
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,  // Random duration between 2-5s
    animationDelay: `-${Math.random() * 2}s`  // Random start time
  });

  return (
    <div className="snow-container">
      {[...Array(50)].map((_, index) => (  // Increased to 50 snowflakes
        <div 
          key={index} 
          className="snow" 
          style={getRandomStyles()}
        />
      ))}
    </div>
  );
};

export default Snow; 
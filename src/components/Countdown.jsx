import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const christmas = new Date('December 25, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = christmas - now;

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.days}</span>
        <span className="countdown-label">days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.hours}</span>
        <span className="countdown-label">hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.minutes}</span>
        <span className="countdown-label">minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.seconds}</span>
        <span className="countdown-label">seconds</span>
      </div>
    </div>
  );
};

export default Countdown; 
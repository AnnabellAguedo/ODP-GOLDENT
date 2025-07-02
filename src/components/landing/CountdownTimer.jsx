import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialMinutes = 15 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-4xl md:text-5xl font-bold tracking-tighter">
      <span>{String(minutes).padStart(2, '0')}</span>
      <span className="animate-pulse mx-1">:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  );
};

export default CountdownTimer;
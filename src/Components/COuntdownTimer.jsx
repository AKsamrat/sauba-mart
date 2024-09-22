import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [seconds]);

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      {seconds > 0 ? (
        <h1>
          Time remaining: {minutes}:
          {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
        </h1>
      ) : (
        <h1>Times up!</h1>
      )}
    </div>
  );
};

export default CountdownTimer;

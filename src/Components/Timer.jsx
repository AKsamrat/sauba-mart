// timer.js
import React, { useEffect, useState } from 'react';
// import { Text } from './styles';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'December, 31, 2024';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    // console.log(days);
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="mt-6 p-2 text-center w-[400px] grid grid-cols-4"
      role="timer"
    >
      <div className="col-span-1">
        <div className="bg-white rounded-full p-1 size-16">
          <p id="day" className="text-lg  font-bold">
            {days < 10 ? '0' + days : days}
          </p>
          <span className="text-[14px]  font-medium">Days</span>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-full p-1 size-16">
          <p id="hour" className="text-lg  font-bold">
            {hours < 10 ? '0' + hours : hours}
          </p>
          <span className="text-[14px] font-medium">Hours</span>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-full p-1 size-16">
          <p id="minute" className="text-lg  font-bold">
            {minutes < 10 ? '0' + minutes : minutes}
          </p>
          <span className="text-[14px] font-medium">Minutes</span>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-white rounded-full p-1 size-16">
          <p id="second" className="text-lg  font-bold">
            {seconds < 10 ? '0' + seconds : seconds}
          </p>
          <span className="text-[14px] font-medium">Seconds</span>
        </div>
      </div>
    </div>
  );
};
export default Timer;

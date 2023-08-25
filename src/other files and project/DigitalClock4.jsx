import React, { useState } from 'react';

const DigitalClock4 = () => {
  let newTime = new Date().toLocaleTimeString();
  const [time, setUpTime] = useState(newTime);

  const Inc = () => {
    newTime = new Date().toLocaleTimeString();
    setUpTime(newTime)
  }
  setInterval((Inc), 1000);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}

export default DigitalClock4;

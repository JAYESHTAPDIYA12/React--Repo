import React, { useState } from 'react';

const TimeClick3 = () => {

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // let newTime = new Date().toLocaleTimeString();
  const [time, setUpTime] = useState(`${hours} : ${minutes}: ${seconds}`);


  const Inc = () => {
    // let newTime = new Date().toLocaleTimeString();
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    setUpTime(`${hours} : ${minutes}: ${seconds}`)
  }


  return (
    <div>
      <h1 >{time}</h1>
      <button onClick={Inc}>Click Me</button>
    </div>
  )
}

export default TimeClick3;

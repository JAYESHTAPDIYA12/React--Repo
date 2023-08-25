import React from 'react';

const Calu = (a = 0, b = 0) => {
  return (
    <div>
      <h1>this is a calu.</h1>
      <p>the add of two no is {a + b}</p>
      <p>the sub of two no is {a - b}</p>
      <p>the div of two no is {(a / b).toFixed(2)}</p>
      <p>the mul of two no is {a * b}</p>

    </div>
  )
}

export default Calu;

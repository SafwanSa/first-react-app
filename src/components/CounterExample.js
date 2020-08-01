import React, { useState } from 'react'

function CounterExample() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>
        {counter}
      </h1>
      <h1 onClick={() => setCounter(counter + 1)}>
        Increment
      </h1>

      <h1 onClick={() => setCounter(counter - 1)}>
        Decrement
      </h1>

      <h1 onClick={() => setCounter(0)}>
        Reset
      </h1>

    </div>
  );
}

export default CounterExample;
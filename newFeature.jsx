import React, { useState } from 'react';

//simple functional component

const SimpleReactComponent = () => {
  //state variable
  const [count, setCount] = useState(0);
}

//Event handler function
const handleIncrement = () => {
  setCount(count + 1);
};

return (
  <div>
    <h1>Simple React Component</h1>
    <p>Count: {count}</p>
    <button onClick={handleIcrement}>Increment</button>
  </div>
  );
};

export default SimpleReactComponent;



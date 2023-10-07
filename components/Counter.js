import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ title }) {
  const [counterValue, setCounterValue] = useState(0);

  const handleClick = (action) => {
    switch (action) {
      case 'Increment':
        setCounterValue((prevState) => prevState + 1);
        break;
      case 'Decrement':
        setCounterValue((prevState) => prevState - 1);
        break;
      case 'Reset':
        setCounterValue(0);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div>{title}</div>
      <h2>{counterValue}</h2>
      <button type="button" onClick={() => handleClick('Reset')}>Reset</button>
      <button type="button" onClick={() => handleClick('Increment')}>Increment</button>
      <button type="button" onClick={() => handleClick('Decrement')}>Decrement</button>
    </>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};

Counter.defaultProps = {
  title: 'Everybodys Counter',
};

export default Counter;

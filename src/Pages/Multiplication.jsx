import React from 'react';

function Multiplication() {
  const handleMultiplication = () => {
    console.log('multiplicou');
  }

  return (
    <button
      type="button"
      onClick={ handleMultiplication }
    >
      x
    </button>
  );
}

export default Multiplication;

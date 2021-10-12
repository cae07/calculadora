import React from 'react';

function Subtraction() {
  const handleSubtraction = () => {
    console.log('subtraiu');
  }

  return (
    <button
      type="button"
      onClick={ handleSubtraction }
    >
      -
    </button>
  );
}

export default Subtraction;

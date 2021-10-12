import React from 'react';

function Sum() {
  const handleSum = () => {
    console.log('somou');
  }

  return (
    <button
      type="button"
      onClick={ handleSum }
    >
      +
    </button>
  );
}

export default Sum;

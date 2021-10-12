import React from 'react';

function Division() {
  const handleDivision = () => {
    console.log('dividiu');
  }

  return (
    <button
      type="button"
      onClick={ handleDivision }
    >
      /
    </button>
  );
}

export default Division;

import React, { useContext } from 'react';
import myContext from '../Context/myContext';


function Display() {
  const { number } = useContext(myContext);

  return (
    <h4>{ number }</h4>
  );
}

export default Display;

import React from 'react';
import Numbers from './Pages/Numbers';
import Provider from './Context/Provider';
import Header from './Pages/Header';
import Display from './Pages/Display';
import Sum from './Pages/Sum';
import Subtraction from './Pages/Subtraction';
import Multiplication from './Pages/Multiplication';
import Division from './Pages/Division';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <Display />
        <Numbers />
        <Sum />
        <Subtraction />
        <Multiplication />
        <Division />
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import Numbers from './Pages/Numbers';
import Provider from './Context/Provider';
import Header from './Pages/Header';
import Display from './Pages/Display';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <Display />
        <Numbers />
      </div>
    </Provider>
  );
}

export default App;

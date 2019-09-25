import React from 'react';
import './App.css';

//Import components
import InfoHeader from './infoheader.js';
import Employees from './employees.js';

function App() {
  return (
    <div className="App">
        <InfoHeader />
        <Employees />
    </div>
   
  );
}

export default App;

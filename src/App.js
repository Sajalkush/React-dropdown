import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {
  const dropdownItems = ['Yes', 'Probably Not'];

  return (
    <div className="App">
      <Dropdown items={dropdownItems} />
    </div>
  );
}

export default App;

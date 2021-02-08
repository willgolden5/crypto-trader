import React, { useState } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import DogeDataCard from './components/DataCards/DogeDataCard'



function App() {
  return (
    <div className="App">
        <DogeDataCard />
    </div>
  );
}

export default App;

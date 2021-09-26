import React from 'react';
import './App.css';
import DogeDataCard from './components/DataCards/DogeDataCard';
import EthereumDataCard from './components/DataCards/EthereumDataCard';
import { DropDownMenu } from './components/Navigation/DropDownMenu';
import { Navbar } from './components/Navigation/NavBar';
import { NavItem } from './components/Navigation/NavItem';

function App() {
  return (
    <div className='App'>
      <Navbar>
        <NavItem icon='😀'>
          <DropDownMenu></DropDownMenu>
        </NavItem>
        <NavItem icon='😁' />
        <NavItem icon='😂'>
          <p>Hello World</p>
        </NavItem>
      </Navbar>
      <div className='body'>
        <DogeDataCard />
        <EthereumDataCard />
      </div>
    </div>
  );
}

export default App;

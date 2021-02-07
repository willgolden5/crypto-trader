import React from 'react';
import ccxt from 'ccxt';
import logo from './logo.svg';
import './App.css';
import { binanceClient } from './server/exchangeClients/binanceClient'
import { fetchBinancePrice } from './server/api/fetchBinancePrice'
import dogeConfig from './currencyConfigs/doge'

const dogeTicker = async() => await Promise.resolve(fetchBinancePrice(dogeConfig, binanceClient))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{dogeTicker()}</p>
      </header>
    </div>
  );
}

export default App;

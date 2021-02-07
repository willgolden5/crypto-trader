import React from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { binanceClient } from './server/exchangeClients/binanceClient'
import { fetchBinancePrice } from './server/api/fetchBinancePrice'
import dogeConfig from './currencyConfigs/doge'

const dogeTicker = async(dogeConfig: any, binanceClient: any) => {
  const price = await Promise.resolve(fetchBinancePrice(dogeConfig, binanceClient));
  console.log(price);
}

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
        <Button onClick={() => dogeTicker(dogeConfig, binanceClient)}>DOGE</Button>
      </header>
    </div>
  );
}

export default App;

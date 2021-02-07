import React from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { binanceClient } from './server/exchangeClients/binanceClient'
import { fetchBinancePrice } from './server/api/fetchBinancePrice'
import DogeConfig from './currencyConfigs/doge'


const dogeTicker = async(binanceClient: any) => {
  let dogeConfig = new DogeConfig;
  const price = await Promise.resolve(fetchBinancePrice(dogeConfig.asset, dogeConfig.base, binanceClient));
  try{
    console.log(price);
  } catch(e) {
    console.log(e);
  }
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
        <Button onClick={() => dogeTicker(binanceClient)}>DOGE</Button>
      </header>
    </div>
  );
}

export default App;

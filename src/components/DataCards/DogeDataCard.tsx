import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { binanceClient, bittrexClient } from '../../server/exchangeClients/ExchangeClients';
import { fetchBinancePrice, fetchBittrexPrice } from '../../server/api/PriceFetchers';
import DogeConfig from '../../currencyConfigs/doge';

const DogeDataCard = () => {
  let dogeConfig = new DogeConfig();
  const [binanceBid, setBid] = useState(0);
  const [binanceAsk, setAsk] = useState(0);
  const [binanceLast, setLast] = useState(0);
  const [accountValue, setaccountValue] = useState(0); //doesnt belong here
  let binanceSpread: number = binanceAsk - binanceBid;

  const binanceTicker = async () => {
    const binanceObj = await Promise.resolve(fetchBinancePrice(dogeConfig.asset, dogeConfig.base, binanceClient));
    let accountValue: number = binanceObj.last * 6687 - 400; //doesnt belong

    setBid(binanceObj.bid);
    setAsk(binanceObj.ask);
    setLast(binanceObj.last);
    setaccountValue(accountValue);
  };

  const startDogeAlgo = () => {
    console.log('DOGE ALGO STARTED');
  };

  const stopDogeAlgo = () => {
    console.log('DOGE ALGO STOPPED');
  };

  const tickerColor = () => {
    console.log('TICKER COLOR');
  };

  useEffect(() => {
    setInterval(() => binanceTicker(), dogeConfig.tickInterval * 2);
  }, []);

  return (
    <div>
      <div className='card' style={{}}>
        <div className='card-body'>
          <h5 className='card-title'>DOGECOIN</h5>
          <p className='card-text'>Doge is love. Doge is life. </p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item' onChange={() => tickerColor()}>
              Px Last:{binanceLast}
            </li>
            <li className='list-group-item' onChange={() => tickerColor()}>
              Bid/Ask: {binanceBid} @ {binanceAsk}
            </li>
            <li className='list-group-item'>Spread: {binanceSpread}</li>
            <li className='list-group-item'>Account Value:{accountValue}</li>
          </ul>
          <div>
            <Button onClick={() => stopDogeAlgo()}>Pull all Trades</Button>
            <Button onClick={() => startDogeAlgo()}>Enter Market</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogeDataCard;

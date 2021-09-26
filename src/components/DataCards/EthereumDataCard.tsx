import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import EthereumConfig from '../../currencyConfigs/ethereum';
import { binanceClient } from '../../server/exchangeClients/ExchangeClients';
import { fetchBinancePrice } from '../../server/api/PriceFetchers';

const EthereumDataCard = () => {
  let etherConfig = new EthereumConfig();

  const [bid, setBid] = useState(0);
  const [ask, setAsk] = useState(0);
  const [last, setLast] = useState(0);
  let spread: number = ask - bid;

  const binanceTicker = async () => {
    const priceObj = await Promise.resolve(fetchBinancePrice(etherConfig.asset, etherConfig.base, binanceClient));

    setBid(priceObj.bid);
    setAsk(priceObj.ask);
    setLast(priceObj.last);
  };

  useEffect(() => {
    setInterval(() => binanceTicker(), etherConfig.tickInterval * 2);
  }, []);

  const startAlgo = () => {
    console.log('ETH ALGO START');
  };

  const stopAlgo = () => {
    console.log('ETH ALGO STOPPED');
  };

  const tickerColor = () => {
    console.log('TICKER COLOR');
  };

  return (
    <div>
      <div className='card' style={{}}>
        <div className='card-body'>
          <h5 className='card-title'>ETHEREUM</h5>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item' onChange={() => tickerColor()}>
              Px Last:{last}
            </li>
            <li className='list-group-item' onChange={() => tickerColor()}>
              Bid/Ask: {bid} @ {ask}
            </li>
            <li className='list-group-item'>Spread: {spread}</li>
            {/* instead of account value do p/l? */}
          </ul>
          <div>
            <Button onClick={() => stopAlgo()}>Pull all Trades</Button>
            <Button onClick={() => startAlgo()}>Enter Market</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthereumDataCard;

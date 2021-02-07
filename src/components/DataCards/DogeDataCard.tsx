import React, { useState } from 'react';
import { Button } from 'reactstrap';
import logo from '../../logo.svg';
import { binanceClient } from '../../server/exchangeClients/binanceClient'
import { fetchBinancePrice } from '../../server/api/fetchBinancePrice'
import DogeConfig from '../../currencyConfigs/doge'

export default () => {

    let dogeConfig = new DogeConfig;
    const [last, setLast] = useState(0);
    const [accountValue, setaccountValue] = useState(0);

    const dogeTicker = async(binanceClient: any) => {
        const dogeObj = await Promise.resolve(fetchBinancePrice(dogeConfig.asset, dogeConfig.base, binanceClient));
    
        dogeConfig.setAsk(dogeObj.ask);
        dogeConfig.setBid(dogeObj.bid);
        dogeConfig.setLast(dogeObj.last);
        setLast(dogeObj.last);
        let accountValue: number= (dogeConfig.last * 6687) - 400;
        dogeConfig.setaccountValue(accountValue);
        setaccountValue(accountValue);
  
        return dogeConfig.last;
    }

    return(
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Button 
            onClick= {() => {
                dogeTicker(binanceClient)
            }}>DOGE ME</Button>
            <h3>{last}</h3>
            <h3>{accountValue}</h3>
        </div>
    )
}
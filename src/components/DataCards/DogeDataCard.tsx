import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import bootstrap from 'bootstrap';
import logo from '../../logo.svg';
import { binanceClient, bittrexClient } from '../../server/exchangeClients/ExchangeClients'
import { fetchBinancePrice, fetchBittrexPrice } from '../../server/api/PriceFetchers'
import DogeConfig from '../../currencyConfigs/doge'

export default () => {

    let dogeConfig = new DogeConfig;
    const [bid, setBid] = useState(0);
    const [ask, setAsk] = useState(0);
    const [last, setLast] = useState(0);
    const [accountValue, setaccountValue] = useState(0);
    let spread: number = ask - bid;

    const [bittrexLast, setBittrexLast] = useState(0);

    const dogeTicker = async() => {
        const binanceObj = await Promise.resolve(fetchBinancePrice(dogeConfig.asset, dogeConfig.base, binanceClient));
        let accountValue: number= (binanceObj.last * 6687) - 400;
        // const bittrexObj = await Promise.resolve(fetchBittrexPrice(dogeConfig.asset, dogeConfig.base, bittrexClient));
    
        setBid(binanceObj.bid);
        setAsk(binanceObj.ask);
        setLast(binanceObj.last);
        setaccountValue(accountValue)
        // setBittrexLast(bittrexObj.last);
        // console.log(bittrexObj)
    }


    const startDogeAlgo = () => {
        console.log('DOGE ALGO STARTED')
    }

    const stopDogeAlgo = () => {
        console.log('DOGE ALGO STOPPED')
    }

    useEffect(() => {
        setInterval(() => dogeTicker(), dogeConfig.tickInterval)
    }, [])

    return(
        <div>
            <div className="card" style={{width : "20%", border : "20px"}}>
                <img src="https://static.independent.co.uk/2021/02/05/07/dogecoin%20elon%20musk.jpg?width=990&auto=webp&quality=75" style={{width: "20rem"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">DOGECOIN</h5>
                    <p className="card-text">Doge is love. Doge is life. </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Binance:{last} Bittrex:{bittrexLast}</li>
                    <li className="list-group-item">Bid/Ask: {bid} @ {ask}</li>
                    <li className="list-group-item">spread: {spread}</li>
                    <li className="list-group-item">Account Value:{accountValue}</li>
                </ul>
                <div>
                    <Button onClick={() => stopDogeAlgo()}>Pull all Trades</Button><Button onClick={() => startDogeAlgo()}>Enter Market</Button>
                </div>
        </div>
        </div>
    )
}
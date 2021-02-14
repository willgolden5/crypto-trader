import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import bootstrap from 'bootstrap';
import logo from '../../logo.svg';
import { binanceClient, bittrexClient } from '../../server/exchangeClients/ExchangeClients'
import { fetchBinancePrice, fetchBittrexPrice } from '../../server/api/PriceFetchers'
import DogeConfig from '../../currencyConfigs/doge'

export default () => {

    let dogeConfig = new DogeConfig;
    const [binanceBid, setBid] = useState(0);
    const [binanceAsk, setAsk] = useState(0);
    const [binanceLast, setLast] = useState(0);
    const [accountValue, setaccountValue] = useState(0);
    let binanceSpread: number = binanceAsk - binanceBid;

    const [bittrexLast, setBittrexLast] = useState(0);

    const binanceTicker = async() => {
        const binanceObj = await Promise.resolve(fetchBinancePrice(dogeConfig.asset, dogeConfig.base, binanceClient));
        let accountValue: number= (binanceObj.last * 6687) - 400;
    
        setBid(binanceObj.bid);
        setAsk(binanceObj.ask);
        setLast(binanceObj.last);
        setaccountValue(accountValue)
    }

    const bittrexTicker = async() => {
        const bittrexObj = await Promise.resolve(fetchBittrexPrice(dogeConfig.asset, dogeConfig.base, bittrexClient));

        setBittrexLast(bittrexObj.last);
    }


    const startDogeAlgo = () => {
        console.log('DOGE ALGO STARTED')
    }

    const stopDogeAlgo = () => {
        console.log('DOGE ALGO STOPPED')
    }

    useEffect(() => {
        setInterval(() => binanceTicker(), dogeConfig.tickInterval * 2)
        setInterval(() => bittrexTicker(), dogeConfig.tickInterval * 2)
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
                    <li className="list-group-item">Binance:{binanceLast} Bittrex:{bittrexLast}</li>
                    <li className="list-group-item">Bid/Ask: {binanceBid} @ {binanceAsk}</li>
                    <li className="list-group-item">spread: {binanceSpread}</li>
                    <li className="list-group-item">Account Value:{accountValue}</li>
                </ul>
                <div>
                    <Button onClick={() => stopDogeAlgo()}>Pull all Trades</Button><Button onClick={() => startDogeAlgo()}>Enter Market</Button>
                </div>
        </div>
        </div>
    )
}
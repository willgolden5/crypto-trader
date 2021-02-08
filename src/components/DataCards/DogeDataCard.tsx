import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import bootstrap from 'bootstrap';
import logo from '../../logo.svg';
import { binanceClient } from '../../server/exchangeClients/binanceClient'
import { fetchBinancePrice } from '../../server/api/fetchBinancePrice'
import DogeConfig from '../../currencyConfigs/doge'

export default () => {

    let dogeConfig = new DogeConfig;
    const [bid, setBid] = useState(0);
    const [ask, setAsk] = useState(0);
    const [last, setLast] = useState(0);
    const [accountValue, setaccountValue] = useState(0);

    const dogeTicker = async(binanceClient: any) => {
        const dogeObj = await Promise.resolve(fetchBinancePrice(dogeConfig.asset, dogeConfig.base, binanceClient));
        let accountValue: number= (dogeObj.last * 6687) - 400;
    
        setBid(dogeObj.bid);
        setAsk(dogeObj.ask);
        setLast(dogeObj.last);
        setaccountValue(accountValue)
    }

    useEffect(() => {
        setInterval(() => dogeTicker(binanceClient), dogeConfig.tickInterval * 2)
    }, [])

    return(
        <div>
            <div className="card" style={{width: "20%"}}>
                <img src="https://static.independent.co.uk/2021/02/05/07/dogecoin%20elon%20musk.jpg?width=990&auto=webp&quality=75" style={{width: "20rem"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">DOGECOIN</h5>
                    <p className="card-text">Doge is love. Doge is life. </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{last}</li>
                    <li className="list-group-item">{bid}/{ask}</li>
                    <li className="list-group-item">{accountValue}</li>
                </ul>
        </div>
        </div>
    )
}
import ccxt from 'ccxt';


const binanceClient = new ccxt.binance({
    apiKey: process.env.REACT_APP_BINANCE_API_KEY,
    secret: process.env.REACT_APP_BINANCE_API_SECRET
  })

const bittrexClient = new ccxt.bittrex({
  version: '3',
  apiKey: process.env.REACT_APP_BITTREX_API_KEY,
  secret: process.env.REACT_APP_BITTREX_API_SECRET,
  proxy: 'https://localhost:8080/'
  })

export { binanceClient, bittrexClient };



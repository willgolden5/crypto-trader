import ccxt from 'ccxt';

const binanceClient = new ccxt.binance({
    apiKey: process.env.BINANCE_API_KEY,
    secret: process.env.BINANCE_API_SECRET
  })

export { binanceClient };
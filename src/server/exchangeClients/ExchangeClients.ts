import ccxt from 'ccxt';

const binanceClient = new ccxt.binance({
    apiKey: process.env.BINANCE_API_KEY,
    secret: process.env.BINANCE_API_SECRET
  })

const bittrexClient = new ccxt.bittrex({
  apiKey: '0146265d61bb4bb094ec59065f7787d2',
  secret: 'f68e353fc5db42609b75a7d2334b564e'
  })

export { binanceClient, bittrexClient };



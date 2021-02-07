require('dotenv');
const ccxt = require('ccxt');
const axios = require('axios');

const tick = async(config: any, binanceClient: any) => {
  const { asset, base, spread, allocation } = config;
  const market = `${asset}/${base}`;

  const orders = await binanceClient.fetchOpenOrders(market);
}

const fetchPrice = async(config: any, binanceClient: any): Promise<string> => {
  const { asset, base, spread, allocation } = config;
  const market = `${asset}/${base}`;
  const price = await binanceClient.fetchTicker(market);
  return price;
}

const run =() => {
  const config = {
    asset: 'BTC',
    base: 'USDT',
    allocation: 0.1, //percentage of each portfolio allocated for each trade
    spread: 0.2, //percentage of spread
    tickInterval: 1000 //every x milliseconds we want reevaluate our position(each exchange has a rate limiting mech in place ie 1-2 times a second)
  }

  const binanceClient = new ccxt.binance({
    apiKey: process.env.BINANCE_API_KEY,
    secret: process.env.BINANCE_API_SECRET
  })
  tick(config, binanceClient);
  setInterval(tick, config.tickInterval, config, binanceClient)
};

run();

export {fetchPrice}


//pump alerts feature(could also be used to rate each pump server)
    // --looks for coins with out of ordinary gains, checks common pump discord servers for keyword, and finds correlated which server is pumping. 
    //   should also do the inverse
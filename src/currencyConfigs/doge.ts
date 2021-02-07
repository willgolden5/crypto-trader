import { CurrencyConfig } from './configs'

class DogeConfig implements CurrencyConfig {
    asset = 'DOGE';
    base = 'USDT'
    allocation = 0.1 //percentage of each portfolio allocated for each trade
    spread = 0.2 //percentage of spread
    tickInterval = 1000 //every x milliseconds we want reevaluate our position(each exchange has a rate limiting mech in place ie 1-2 times a second)
  }

  export default DogeConfig;
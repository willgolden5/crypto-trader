import { CurrencyConfig } from './configs'

class DogeConfig implements CurrencyConfig {
    asset = 'DOGE';
    base = 'USDT';
    allocation = 0.1; //percentage of each portfolio allocated for each trade
    spread = 0.2; //percentage of spread
    tickInterval = 1000; //every x milliseconds we want reevaluate our position(each exchange has a rate limiting mech in place ie 1-2 times a second)
    bid = 0;
    ask = 0;
    last = 0;
    accountValue = 0;

    public setBid = (value: number) => {
        this.bid = value;
    }
    public setAsk = (value: number) => {
        this.ask = value;
    }
    public setLast = (value: number) => {
        this.last = value;
    }
    public setaccountValue = (value: number) => {
        this.accountValue = value;
    }
    public getLast = () => {
        return this.last;
    }
    public getBid = () => {
        return this.bid;
    }
    public getAsk = () => {
        return this.ask;
    }
  }

  export default DogeConfig;
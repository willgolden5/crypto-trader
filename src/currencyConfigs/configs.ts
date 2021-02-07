export interface CurrencyConfig {
    asset: string,
    base: string,
    allocation: number, //percentage of each portfolio allocated for each trade
    spread: number, //percentage of spread
    tickInterval: number //every x milliseconds we want reevaluate our position(each exchange has a rate limiting mech in place ie 1-2 times a second)
    bid: number,
    ask: number,
    last: number,
    accountValue: number
  }
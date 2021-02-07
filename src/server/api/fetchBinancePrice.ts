export const fetchBinancePrice = async(config: any, binanceClient: any): Promise<string> => {
    const { asset, base, spread, allocation } = config;
    const market = `${asset}/${base}`;
    const price = await binanceClient.fetchTicker(market);
    return price;
  }
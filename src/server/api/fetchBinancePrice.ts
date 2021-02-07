export const fetchBinancePrice = async(asset: string, base: string, binanceClient: any): Promise<string> => {
    const market = `${asset}/${base}`;
    const price = await binanceClient.fetchTicker(market);
    return price;
  }
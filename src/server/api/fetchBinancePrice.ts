export const fetchBinancePrice = async(asset: string, base: string, binanceClient: any) => {
    const market = `${asset}/${base}`;
    const price = await binanceClient.fetchTicker(market);
    return price;
  }
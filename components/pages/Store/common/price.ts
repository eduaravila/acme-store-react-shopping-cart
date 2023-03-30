import { Currency } from "@/common/types";

interface PriceData {
  price: number;
  priceCurrency: string;
}

export interface ConvertedPriceData extends PriceData {
  symbol: string;
}

export const convertPriceToCurrency = (
  fromPriceData: PriceData,
  toCurrency: Currency,
  currencies: Currency[]
): ConvertedPriceData => {
  const fromCurrencyUsdCoef =
    currencies.find((currency) => currency.key === fromPriceData.priceCurrency)
      ?.usdCoef || 1;

  const totalUsd = fromPriceData.price / fromCurrencyUsdCoef;

  return {
    price: Number((totalUsd * toCurrency.usdCoef).toFixed(2)),
    symbol: toCurrency.symbol,
    priceCurrency: toCurrency.key,
  };
};

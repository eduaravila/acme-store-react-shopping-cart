import { Currency } from "@/common/types";

interface PriceData {
  price: number;
  priceCurrency: string;
}

export interface ConvertedPriceData extends PriceData {
  symbol: string;
}

/* convertPriceToCurrency that takes a price data object, a target currency object, and an array of currencies
and returns a converted price data object with the price converted to the target currency*/
export const convertPriceToCurrency = (
  fromPriceData: PriceData,
  toCurrency: Currency,
  currencies: Currency[]
): ConvertedPriceData => {
  // Find the USD coefficient of the original currency from the currencies array or use 1 as a default
  const fromCurrencyUsdCoef =
    currencies.find((currency) => currency.key === fromPriceData.priceCurrency)
      ?.usdCoef || 1;

  // Calculate the total USD value of the original price by dividing it by the USD coefficient
  const totalUsd = fromPriceData.price / fromCurrencyUsdCoef;

  // Return a new converted price data object with the following properties:
  // - The price converted to the target currency by multiplying it by the target currency's USD coefficient and rounding it to two decimals
  // - The symbol of the target currency
  // - The key of the target currency
  return {
    price: Number((totalUsd * toCurrency.usdCoef).toFixed(2)),
    symbol: toCurrency.symbol,
    priceCurrency: toCurrency.key,
  };
};

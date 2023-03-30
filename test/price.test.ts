import { Currency } from "@/common/types";
import { convertPriceToCurrency } from "@/utils/price";

describe("convertPriceToCurrency", () => {
  const currencies: Currency[] = [
    { key: "usd", usdCoef: 1, symbol: "$" },
    { key: "eur", usdCoef: 0.85, symbol: "€" },
    { key: "gbp", usdCoef: 0.72, symbol: "£" },
  ];

  it("should convert price to currency correctly", () => {
    const fromPriceData = { price: 100, priceCurrency: "usd" };
    const toCurrency: Currency = { key: "eur", usdCoef: 0.85, symbol: "€" };

    const result = convertPriceToCurrency(
      fromPriceData,
      toCurrency,
      currencies
    );

    expect(result.price).toBe(85);
    expect(result.priceCurrency).toBe("eur");
    expect(result.symbol).toBe("€");
  });
});

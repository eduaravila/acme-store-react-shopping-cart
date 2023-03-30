import { convertPriceToCurrency } from "./your-file-name";

describe("convertPriceToCurrency", () => {
  const currencies = [
    { key: "USD", usdCoef: 1, symbol: "$" },
    { key: "EUR", usdCoef: 0.85, symbol: "€" },
    { key: "GBP", usdCoef: 0.72, symbol: "£" },
  ];

  it("should convert price to currency correctly", () => {
    const fromPriceData = { price: 100, currencyKey: "USD" };
    const toCurrency = { key: "EUR", usdCoef: 0.85, symbol: "€" };

    const result = convertPriceToCurrency(
      fromPriceData,
      toCurrency,
      currencies
    );

    expect(result.price).toBe(85);
    expect(result.currencyKey).toBe("EUR");
    expect(result.symbol).toBe("€");
  });
});

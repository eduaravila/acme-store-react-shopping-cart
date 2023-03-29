import { Currency } from "@/common/types";
import { useCurrencyConfig } from "@/context/currencyConfig";

interface Props {
  currencies: Currency[];
}

const Footer: React.FC<Props> = ({ currencies }) => {
  const { currency } = useCurrencyConfig();

  return (
    <div className="flex">
      <div className="flex">
        <h1>currency</h1>
        <select defaultValue={currency?.key}>
          {currencies.map((currency) => (
            <option key={currency.key} value={currency.key}>
              {currency.key}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Footer;

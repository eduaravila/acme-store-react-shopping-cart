import { Currency } from "@/common/types";
import { useRouter } from "next/router";

interface Props {
  currencies: Currency[];
}

const Footer: React.FC<Props> = ({ currencies }) => {
  const router = useRouter();
  const { cur } = router.query;

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push({
      pathname: "/[page]",
      query: { ...router.query, cur: e.target.value },
    });
  };

  return (
    <div className="border-3 flex justify-between border p-4">
      <div className="flex flex-col">
        <h1 className="text-xl">currency</h1>
        <select defaultValue={cur} onChange={handleCurrencyChange}>
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

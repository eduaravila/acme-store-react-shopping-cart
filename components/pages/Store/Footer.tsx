import { Currency } from "@/common/types";
import { useShoppingCartDispatch } from "@/context/shoppingCart";
import { useRouter } from "next/router";

interface Props {
  currencies: Currency[];
}

const Footer: React.FC<Props> = ({ currencies }) => {
  const router = useRouter();
  const dispatch = useShoppingCartDispatch();

  const { cur } = router.query;

  const handleCheckout = () => {
    alert("thanks for your purchase!");
    dispatch({ type: "CHECKOUT_CART" });
    router.push("/");
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push({
      pathname: "/[page]",
      query: { ...router.query, cur: e.target.value },
    });
  };

  return (
    <div className="border-3 fixed bottom-0 left-0 flex w-full justify-between border bg-white p-4">
      <div className="flex flex-col">
        <h1 className="text-xl">Currency</h1>
        <select
          defaultValue={cur}
          onChange={handleCurrencyChange}
          className="border-1 w-36 rounded border p-3"
        >
          {currencies.map((currency) => (
            <option key={currency.key} value={currency.key}>
              {currency.key}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-center align-middle">
        <button
          className="rounded  bg-black py-2 px-4 font-bold text-white hover:bg-blue-700"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Footer;

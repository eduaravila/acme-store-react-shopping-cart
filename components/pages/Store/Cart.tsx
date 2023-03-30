import { Currency } from "@/common/types";
import Card from "@/components/Card";
import {
  useShoppingCart,
  useShoppingCartDispatch,
} from "@/context/shoppingCart";
import Image from "next/image";
import { convertPriceToCurrency } from "../../../utils/price";
import Price from "./Price";

interface Props {
  currency: Currency;
  currencies: Currency[];
}

const Cart: React.FC<Props> = ({ currency, currencies }) => {
  const { items } = useShoppingCart();
  const dispatch = useShoppingCartDispatch();

  const total = Object.values(items).reduce((acc, item) => {
    const { price } = convertPriceToCurrency(item, currency, currencies);
    return acc + price * item.quantity;
  }, 0);

  const Items = Object.values(items).map((item) => (
    <div key={item.id} className={"max-h-32 w-full bg-gray-100"}>
      <Card.Horizontal
        TopRight={
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM_FROM_CART", item })}
          >
            ❌
          </button>
        }
        Body={
          <>
            <div className="relative w-2/6">
              <Image src={item.imageSrc} alt={item.title} layout={"fill"} />
            </div>
            <div className="flex w-3/5 flex-col p-3">
              <h1 className="truncate text-2xl font-bold">{item.title}</h1>
              <p className="truncate">{item.description}</p>
              <p>Qty: {item.quantity}</p>
              <Price
                price={convertPriceToCurrency(item, currency, currencies)}
              />
            </div>
          </>
        }
      />
    </div>
  ));

  if (Items.length === 0) return null;
  return (
    <div className="flex max-h-screen w-1/3 flex-col overflow-scroll bg-gray-300 p-4">
      <h1 className="text-2xl">🛒 Cart</h1>
      <div>{Items}</div>
      <div className="float-right flex flex-col items-end">
        <h1 className="text-2xl italic">Total</h1>
        <Price
          className="text-3xl font-bold"
          price={{
            symbol: currency.symbol,
            priceCurrency: currency.key,
            price: total,
          }}
        />
      </div>
    </div>
  );
};
export default Cart;

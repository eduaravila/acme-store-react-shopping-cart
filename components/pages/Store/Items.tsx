import { Currency, Item } from "@/common/types";
import Card from "@/components/Card";
import {
  useShoppingCart,
  useShoppingCartDispatch,
} from "@/context/shoppingCart";
import Image from "next/image";
import { convertPriceToCurrency } from "./common/price";
import Price from "./Price";

interface Props {
  items: Item[];
  currency: Currency;
  currencies: Currency[];
}

const Items: React.FC<Props> = ({ items, currency, currencies }) => {
  const dispatch = useShoppingCartDispatch();
  const cart = useShoppingCart();

  const ItemsList = items.map((item: Item) => {
    return (
      <div key={item.id} className={"w-full"}>
        <Card.Vertical
          Header={
            <div className="relative h-32 w-full">
              <Image src={item.imageSrc} alt={item.title} layout={"fill"} />
            </div>
          }
          Body={
            <div className="flex h-32 flex-col justify-between">
              <h1 className="text-lg font-bold">{item.title}</h1>
              <p className="line-clamp-3 text-sm">{item.description}</p>

              <Price
                price={convertPriceToCurrency(item, currency, currencies)}
              />
            </div>
          }
          Footer={
            <div className="flex w-full justify-start">
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_ITEM_TO_CART",
                    item: {
                      ...item,
                      quantity: cart.items[item.id]?.quantity + 1 || 1,
                    },
                  })
                }
              >
                🛒 Add
              </button>
            </div>
          }
        />
      </div>
    );
  });
  return (
    <div className="flex flex-wrap md:grid md:grid-cols-4 md:gap-4">
      {ItemsList}
    </div>
  );
};

export default Items;

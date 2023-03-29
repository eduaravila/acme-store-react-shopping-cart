import Card from "@/components/Card";
import {
  useShoppingCart,
  useShoppingCartDispatch,
} from "@/context/shoppingCart";
import Image from "next/image";

const Cart: React.FC = () => {
  const { items } = useShoppingCart();
  const dispatch = useShoppingCartDispatch();

  const Items = items.map((item) => (
    <div key={item.id} className={"w-full"}>
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
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={300}
              height={300}
            />
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </>
        }
      />
    </div>
  ));

  return (
    <div className="flex w-1/3 flex-col items-center justify-center">
      <h1 className="text-2xl">Cart</h1>
      <div>{Items}</div>
      <h1>$42.51</h1>
    </div>
  );
};
export default Cart;

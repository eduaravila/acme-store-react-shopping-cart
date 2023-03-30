import {
  CartAction,
  cartReducer,
  CartState,
  initialState,
} from "@/reducer/shoppingCart";
import { NextComponentType } from "next";
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";

export const ShoppingCartContext = createContext<CartState>(initialState);

export const ShoppingCartDispatchContext = createContext<Dispatch<CartAction>>(
  () => null
);

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

const ShoppingCartProvider: NextComponentType<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [items, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart !== null) {
      const items = JSON.parse(cart).items;
      dispatch({ type: "SET_CART", items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  return (
    <ShoppingCartContext.Provider value={items}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext<CartState>(ShoppingCartContext);
};

export const useShoppingCartDispatch = () => {
  return useContext<Dispatch<CartAction>>(ShoppingCartDispatchContext);
};

export default ShoppingCartProvider;

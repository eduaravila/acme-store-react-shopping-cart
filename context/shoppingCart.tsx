import {
  CartAction,
  cartReducer,
  CartState,
  initialState,
} from "@/reducer/shoppingCart";
import { NextComponentType } from "next";
import { createContext, Dispatch, useContext, useReducer } from "react";

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

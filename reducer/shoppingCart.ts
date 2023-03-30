import { Item } from "@/common/types";

export interface ItemWithQuantity extends Item {
  quantity: number;
}

export interface CartState {
  items: { [key: string]: ItemWithQuantity };
}

interface AddItemToCartAction {
  type: "ADD_ITEM_TO_CART";
  item: ItemWithQuantity;
}

interface RemoveItemFromCartAction {
  type: "REMOVE_ITEM_FROM_CART";
  item: ItemWithQuantity;
}

interface SetCartAction {
  type: "SET_CART";
  items: { [key: string]: ItemWithQuantity };
}

export type CartAction =
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | SetCartAction;

export const initialState: CartState = {
  items: {},
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      return {
        ...state,
        items: {
          ...state.items,
          [action.item.id]: action.item,
        },
      };
    }
    case "REMOVE_ITEM_FROM_CART": {
      const { [action.item.id]: _, ...items } = state.items;
      return {
        ...state,
        items,
      };
    }
    case "SET_CART": {
      return {
        ...state,
        items: action.items,
      };
    }
    default:
      return state;
  }
};

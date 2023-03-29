import { Item } from "@/common/types";

export interface ItemWithQuantity extends Item {
  quantity: number;
}

export interface CartState {
  items: ItemWithQuantity[];
}

interface AddItemToCartAction {
  type: "ADD_ITEM_TO_CART";
  item: ItemWithQuantity;
}

interface RemoveItemFromCartAction {
  type: "REMOVE_ITEM_FROM_CART";
  item: ItemWithQuantity;
}

export type CartAction = AddItemToCartAction | RemoveItemFromCartAction;

export const initialState: CartState = {
  items: [],
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      return {
        ...state,
        items: [...state.items, action.item],
      };
    }
    case "REMOVE_ITEM_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item.id),
      };
    }
    default:
      return state;
  }
};

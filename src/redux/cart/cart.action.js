import { ADD_ITEM, REMOVE_ITEM, TOGGLE_CART_HIDDEN } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN,
  };
};
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

import SHOP_DATA from "./shop.data";
import { UPDATE_COLLECTIONS } from "./shop.types";

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

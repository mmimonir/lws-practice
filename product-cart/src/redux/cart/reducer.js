import {
  CART_ADD,
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM,
  REMOVE_CART_ITEM,
} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD: {
      return [...state, action.payload];
    }
    case REMOVE_CART_ITEM: {
      return state.filter((item) => item.id !== action.payload);
    }
    case INCREASE_CART_ITEM: {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    }
    case DECREASE_CART_ITEM: {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;

import {
  CART_ADD,
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM,
  REMOVE_CART_ITEM,
  STOCK_DECREASE,
} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD: {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        return state.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              sub_total: parseInt(item.sub_total) + item.quantity * item.price,
              stock: item.stock - 1,
            };
          }
          return state;
        });
      } else {
        return [
          ...state,
          {
            ...product,
            quantity: 1,
            sub_total: product.price,
            stock: product.quantity - 1,
          },
        ];
      }
    }
    case REMOVE_CART_ITEM: {
      return state.filter((item) => item.id !== action.payload);
    }
    case INCREASE_CART_ITEM: {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            sub_total: item.quantity * item.price,
          };
        }
        return state;
      });
    }
    case DECREASE_CART_ITEM: {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
            sub_total: item.quantity * item.price,
          };
        }
        return state;
      });
    }
    case STOCK_DECREASE: {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            stock: item.quantity - 1,
            sub_total: item.quantity * item.price,
          };
        }
        return state;
      });
    }
    default: {
      return state;
    }
  }
};

export default reducer;

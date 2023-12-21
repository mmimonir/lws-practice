import {
  CART_ADD,
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM,
  REMOVE_CART_ITEM,
  STOCK_DECREASE,
} from "./actionTypes";

export const cartAdd = (product) => {
  return {
    type: CART_ADD,
    payload: product,
  };
};

export const removeCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  };
};

export const increaseCartItem = (id) => {
  return {
    type: INCREASE_CART_ITEM,
    payload: id,
  };
};

export const decreaseCartItem = (id) => {
  return {
    type: DECREASE_CART_ITEM,
    payload: id,
  };
};

export const stockDecrease = (id) => {
  return {
    type: STOCK_DECREASE,
    payload: id,
  };
};

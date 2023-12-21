import {
  CART_ADD,
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM,
  REMOVE_CART_ITEM,
} from "./actionTypes";

const cartAdd = (product) => {
  return {
    type: CART_ADD,
    payload: product,
  };
};

const removeCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  };
};

const increaseCartItem = (id) => {
  return {
    type: INCREASE_CART_ITEM,
    payload: id,
  };
};

const decreaseCartItem = (id) => {
  return {
    type: DECREASE_CART_ITEM,
    payload: id,
  };
};

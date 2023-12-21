import { PRODUCT_ADD } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: PRODUCT_ADD,
    payload: product,
  };
};

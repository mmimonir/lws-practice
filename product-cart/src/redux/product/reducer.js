import { PRODUCT_ADD } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADD: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default reducer;

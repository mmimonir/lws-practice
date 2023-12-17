import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

export const add_flight = (value) => {
  return {
    type: ADD_FLIGHT,
    payload: value,
  };
};

export const remove_flight = (value) => {
  return {
    type: REMOVE_FLIGHT,
    payload: value,
  };
};

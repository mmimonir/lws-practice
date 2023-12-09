import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

export const add_flight = () => {
  return {
    type: ADD_FLIGHT,
  };
};

export const remove_flight = () => {
  return {
    type: REMOVE_FLIGHT,
  };
};

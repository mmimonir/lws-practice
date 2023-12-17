import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

const initialState = {
  flights: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      if (state.flights.length === 3) {
        alert("You can only book 3 tickets");
        return state;
      }
      return {
        ...state,
        flights: [...state.flights, action.payload],
      };
    case REMOVE_FLIGHT:
      return {
        ...state,
        flights: state.flights.filter((flight) => flight.id !== action.payload),
      };

    default:
      return state;
  }
};

export default flightReducer;

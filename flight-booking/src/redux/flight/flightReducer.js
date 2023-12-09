import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

const initialState = {
  flights: [
    {
      id: "",
      from: "",
      to: "",
      date: "",
      guests: "",
      ticketclassName: "",
    },
  ],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      return {
        ...state,
        flights: [...state.flights, action.payload],
      };
    case REMOVE_FLIGHT:
      return {
        ...state,
        flights: state.flights.filter(
          (flight) => flight.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default flightReducer;

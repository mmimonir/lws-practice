import { legacy_createStore as createStore } from "redux";
import flightReducer from "./flight/flightReducer";

const store = createStore(flightReducer);

export default store;

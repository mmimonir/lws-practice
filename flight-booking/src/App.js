import "./assets/css/styles.css";
import Header from "./components/Header";
import FlightAdd from "./components/FlightAdd";
import ShowBookedInfo from "./components/ShowBookedInfo";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <FlightAdd />
      <ShowBookedInfo />
    </Provider>
  );
}

export default App;

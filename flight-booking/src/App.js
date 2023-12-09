import "./assets/css/styles.css";
import Header from "./components/Header";
import FlightAdd from "./components/FlightAdd";
import ShowBookedInfo from "./components/ShowBookedInfo";

function App() {
  return (
    <>
      <Header />
      <FlightAdd />
      <ShowBookedInfo />
    </>
  );
}

export default App;

import "./assets/styles/output.css";
import Cart from "./components/Cart";
import Index from "./components/Index";
import { useState } from "react";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const [showCart, setShowCart] = useState({ home: true, cart: false });
  const showNavbarHandler = (data) => {
    if (data === "home") {
      setShowCart({ home: true, cart: false });
    }
    if (data === "cart") {
      setShowCart({ home: false, cart: true });
    }
  };
  return (
    <Provider store={store}>
      <Navbar showNavbarHandler={showNavbarHandler} />
      {showCart.home ? <Index /> : <Cart />}
    </Provider>
  );
}

export default App;

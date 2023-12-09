import logo from "../assets/img/lws-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className="flex items-center">
          <Link className="text-white min-w-[50px] font-medium" to={"/"}>
            Home
          </Link>
          <button className="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

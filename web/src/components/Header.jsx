import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <header className=" mx-8 my-8">
      <nav className="flex justify-between">
        <div className="nav_logo">
          <img className="w-10 h-16" src={LOGO_URL} alt="" />
        </div>
        <ul className="flex flex-row gap-4 cursor-pointer font-bold">
          <li className="mr-3">User Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="mr-3">
            <Link to="/offer">Offer</Link>
          </li>
          <li className="mr-3">
            <Link to="/help">Help</Link>
          </li>
          <li className="mr-3">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="mr-3">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

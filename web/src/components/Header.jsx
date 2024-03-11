import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav_logo">
          <img src={LOGO_URL} alt="" />
        </div>
        <ul className="nav_items">
          <li>
            <Link to="/offer">Offer</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

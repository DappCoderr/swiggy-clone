import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav_logo">
          <img src={LOGO_URL} alt="" />
        </div>
        <ul className="nav_items">
          <li>Offer</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

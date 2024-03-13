import { useEffect, useState } from "react";

const ResMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.26920&lng=73.00900&restaurantId=433314&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResMenu(json);
  };

  return (
    <div className="menu_wrapper">
      <div className="header">
        <div className="top_le3ft">
          <h4>Janta Sweet Home</h4>
          <p>Sweet, South Indian</p>
          <p>Shastri Nagar</p>
        </div>
        <div className="top_right">
          <h3>Rating 4.5</h3>
        </div>
      </div>
      <div className="restaurant_list">
        <p>South Indian</p>
        <p>Janta Paratha</p>
        <p>Indian Special</p>
      </div>
    </div>
  );
};

export default ResMenu;

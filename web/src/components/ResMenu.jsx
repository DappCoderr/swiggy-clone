import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.26920&lng=73.00900&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResMenu(json.data);
  };

  if (resMenu === null) return <div>Loading...</div>;

  // Check if resMenu and its nested properties are defined
  const { name, cuisines, areaName, avgRating } =
    resMenu?.cards[0]?.card?.card?.info || {};

  return (
    <div className="menu_wrapper">
      <div className="header">
        <div className="top_left">
          <h4>{name}</h4>
          <p>{cuisines ? cuisines.join("--") : ""}</p>
          <p>{areaName}</p>
        </div>
        <div className="top_right">
          <h3>Rating - {avgRating}</h3>
        </div>
      </div>
      <div className="restaurant_list">
        <h3>Menu</h3>
        <ul>
          {resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories?.map(
            (ele, index) => {
              return (
                <li key={index}>
                  {console.log(ele)}
                  {ele?.title} - ({ele?.itemCards?.length})
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResMenu;

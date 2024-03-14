import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    console.log("UseEffect call Brother");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.26920&lng=73.00900&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
  };

  if (resMenu === null) return <div>Loading...</div>;

  return (
    <div className="menu_wrapper">
      <div className="header">
        <div className="top_le3ft">
          <h4>{resMenu?.cards[0]?.card?.card?.info?.name}</h4>
          <p>{resMenu?.cards[0]?.card?.card?.info?.cuisines.join("--")}</p>
          <p>{resMenu?.cards[0]?.card?.card?.info?.areaName}</p>
        </div>
        <div className="top_right">
          <h3>Rating - {resMenu?.cards[0]?.card?.card?.info?.avgRating}</h3>
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

import RestaurentCard from "./RestaurentCard";
// import resObj from "../utils/mockData";
import { useState, useEffect } from "react";

const RestaurentList = () => {
  const [listOfRes, setListOfRes] = useState([]);

  // using useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  // fetching data
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.26920&lng=73.00900&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional Chaining
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="restaurent_container">
      <button
        className="btn_search"
        type="submit"
        onClick={() => {
          const filterData = listOfRes.filter(
            (ele) => ele.info.avgRating >= 4.5
          );
          setListOfRes(filterData);
        }}
      >
        Filter Restaurant
      </button>
      <h1 className="restaurent_heading">Top restaurant chains in Jodhpur</h1>
      <section className="restaurent_items">
        {listOfRes.map((res, index) => {
          return <RestaurentCard key={index} resData={res} />;
        })}
      </section>
    </div>
  );
};

export default RestaurentList;

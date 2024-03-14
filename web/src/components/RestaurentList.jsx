import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
// import resObj from "../utils/mockData";
import { useState, useEffect } from "react";

const RestaurentList = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterListOfRes, setFilterListOfRes] = useState([]);
  console.log("Calling Res List");

  // using useEffect hook
  useEffect(() => {
    console.log("Calling useEffect");
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
    setFilterListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return filterListOfRes.length == 0 ? (
    "Loading..." // we can shimmer effect for better ui
  ) : (
    <div className="restaurent_container">
      <div className="search_wrapper">
        <input
          className="input_search"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="what's your fav food?"
        />
        <button
          className="btn_search"
          onClick={() => {
            console.log(inputValue);
            const filter = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            console.log(filter);
            setFilterListOfRes(filter);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="btn_search"
        type="submit"
        onClick={() => {
          const filterData = listOfRes.filter(
            (ele) => ele.info.avgRating >= 4.5
          );
          setFilterListOfRes(filterData);
        }}
      >
        Filter Restaurant
      </button>
      <h1 className="restaurent_heading">Top restaurant chains in Jodhpur</h1>
      <section className="restaurent_items">
        {filterListOfRes.map((res) => {
          return (
            <>
              {console.log(res.info.id)}
              <Link key={res.info.id} to={"/restarants/" + res.info.id}>
                <RestaurentCard resData={res} />
              </Link>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default RestaurentList;

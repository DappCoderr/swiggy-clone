import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurentList = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterListOfRes, setFilterListOfRes] = useState([]);
  const onlineStatus = useOnlineStatus();

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
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus == false)
    return <h1>Your are offline, please check you connection</h1>;

  return filterListOfRes.length == 0 ? (
    "Loading..." // we can shimmer effect for better ui
  ) : (
    <div className="w-[80%] m-auto p-[4% 2%]">
      <div className="inline-block">
        <input
          className="bg-transparent px-1 py-3 font-extrabold text-sm rounded-md"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="what's your fav food?"
        />
        <button
          className="bg-transparent px-1 py-3 font-extrabold text-sm rounded-md"
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
        className="bg-transparent px-1 py-3 font-extrabold text-sm rounded-md"
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
      <h1 className="py-5 text-sm">Top restaurant chains in Jodhpur</h1>
      <section className="flex flex-wrap gap-5 justify-center m-auto">
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

import RestaurentCard from "./RestaurentCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const RestaurentList = () => {
  const [listOfRes, setListOfRes] = useState(resObj);

  return (
    <div className="restaurent_container">
      {/* <form action="">
        <input
          className="i_search"
          type="search"
          placeholder="search your fav food"
        /> */}
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
      {/* </form> */}
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

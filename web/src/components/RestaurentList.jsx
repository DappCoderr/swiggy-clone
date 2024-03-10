import RestaurentCard from "./RestaurentCard";
import resObj from "../utils/mockData";

const RestaurentList = () => {
  return (
    <div className="restaurent_container">
      <form action="">
        <input
          className="i_search"
          type="search"
          placeholder="search your fav food"
        />
        <button className="btn_search" type="submit">
          Search
        </button>
      </form>
      <h1 className="restaurent_heading">Top restaurant chains in Jodhpur</h1>
      <section className="restaurent_items">
        {resObj.map((res, index) => {
          return <RestaurentCard key={index} resData={res} />;
        })}
      </section>
    </div>
  );
};

export default RestaurentList;

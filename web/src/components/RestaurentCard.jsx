/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    isOpen,
    cuisines,
    locality,
  } = resData.info;
  return (
    <div className="restaurent_card">
      <div className="card_image">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <h2 className="res_name">
        {name} | {avgRatingString} &#9733;
      </h2>
      <p className="res_rating">
        {isOpen ? "Delivery in 20-25 mins" : "Restaurant is closed right now"}
      </p>
      <p className="res_type">{cuisines.join("--")}</p>
      <p className="res_location">{locality}</p>
    </div>
  );
};

export default RestaurentCard;

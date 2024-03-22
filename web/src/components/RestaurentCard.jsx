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
    <div className="flex flex-col w-64 cursor-pointer">
      <div className="card_image">
        <img
          className="w-screen h-36 rounded-lg object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
      </div>
      <h2 className="text-sm">
        {name} | {avgRatingString} &#9733;
      </h2>
      <p className="font-semibold">
        {isOpen ? "Delivery in 20-25 mins" : "Restaurant is closed right now"}
      </p>
      <p className="text-sm">{cuisines.join("--")}</p>
      <p className="text-sm">{locality}</p>
    </div>
  );
};

export default RestaurentCard;

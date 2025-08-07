import { CLOUDINARY_IMAGE_ID_API } from "../config/constant";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <>
      <div className="restaurantCard">
        <img
          style={{ width: "200px", height: "140px" }}
          src={CLOUDINARY_IMAGE_ID_API + cloudinaryImageId}
        ></img>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} star</h3>
      </div>
    </>
  );
};
export default RestaurantCard;

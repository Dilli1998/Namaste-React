export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  return (
    <>
      <div className="restaurantCard">
        <img
          style={{ width: "200px", height: "140px" }}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        ></img>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} star</h3>
      </div>
    </>
  );
};

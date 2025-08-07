import { useParams } from "react-router";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuList = useRestaurant(resId);

  return (
    <>
      {menuList.length === 0 ? (
        <h3>Loading or No Menu Found...</h3>
      ) : (
        menuList.map((menuItem) => {
          const { id, name, description, imageId, price } =
            menuItem?.card?.info;

          return (
            <div key={id} style={{ marginBottom: "2rem" }}>
              {imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
                  alt={name}
                  style={{ width: "200px", borderRadius: "8px" }}
                />
              )}
              <h3>{name}</h3>
              <h4>₹{price / 100}</h4>
              <p>{description}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default RestaurantMenu;

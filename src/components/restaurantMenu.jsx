import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    restaurantMenuList();
  }, [resId]);

  const restaurantMenuList = async () => {
    console.log(resId);
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    console.log(json);

    const relatedJson =
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    console.log(relatedJson);

    setMenuList(relatedJson || []);
  };

  return (
    <>
      {menuList.map((menuItem) => {
        const { id, name, description, imageId, price } = menuItem?.card?.info;

        return (
          <div key={id}>
            {imageId && (
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
                alt={name}
                style={{ width: "200px", borderRadius: "8px" }}
              />
            )}
            <h3>{name}</h3>
            <h4>₹{price}</h4>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenu;

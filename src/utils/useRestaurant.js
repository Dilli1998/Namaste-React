import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const restaurantMenuList = async () => {
      try {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();

        const relatedJson =
          json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
            ?.card?.card?.itemCards;

        setMenuList(relatedJson || []);
      } catch (err) {
        console.error("Failed to fetch menu:", err);
        setMenuList([]);
      }
    };

    if (resId) {
      restaurantMenuList();
    }
  }, [resId]);

  return menuList;
};

export default useRestaurant;

import { ALL_RESTAURANT_LIST_API } from "../config/constant";
import { GIT_USER_INFO_API } from "../config/constant";

export const filterRestaurant = (restaurantName, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(restaurantName.toLowerCase())
  );

  return restaurantName ? filterData : allRestaurants;
};

export const getUserInfo = async () => {
  const response = await fetch(GIT_USER_INFO_API);
  const jsonData = await response.json();
  return jsonData;
};

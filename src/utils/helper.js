import { GIT_USER_INFO_API } from "../config/constant";

export const filterRestaurant = (restaurantName, restaurants) => {
  if (!restaurantName) return restaurants;
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(restaurantName.toLowerCase())
  );
};

export const getUserInfo = async () => {
  const response = await fetch(GIT_USER_INFO_API);
  const jsonData = await response.json();
  return jsonData;
};

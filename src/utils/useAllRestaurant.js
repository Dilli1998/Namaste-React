import { useState, useEffect } from "react";
import { ALL_RESTAURANT_LIST_API } from "../config/constant";

const useAllRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const response = await fetch(ALL_RESTAURANT_LIST_API);
        const responseData = await response.json();

        console.log(responseData);

        const restaurants =
          responseData?.data?.cards?.[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants || [];

        console.log(restaurants);

        setAllRestaurants(restaurants);
      } catch (err) {
        console.error("Error fetching restaurant list:", err);
      }
    };

    fetchAllRestaurants();
  }, []);

  return { allRestaurants };
};

export default useAllRestaurant;

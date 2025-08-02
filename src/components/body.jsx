import { useState, useEffect } from "react";
import { RestaurantCard } from "./restaurantCard";
import Shimmer from "../components/shimmer";
import { Link } from "react-router";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const filterRestaurant = (restaurantName, restaurants) => {
    console.log(restaurants);
    const filterData = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(restaurantName.toLowerCase())
    );

    return restaurantName ? filterData : allRestaurants;
  };

  useEffect(() => {
    allRestaurantList();
  }, []);

  const allRestaurantList = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const responseData = await response.json();

    const allRestaurantsJson =
      responseData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(responseData);
    console.log(allRestaurantsJson);
    console.log(allRestaurantsJson[0].info.id);

    setAllRestaurants(allRestaurantsJson);
    setFilteredRestaurants(allRestaurantsJson);
  };

  return allRestaurants.length === 0 ? (
    <h1>
      <Shimmer />
    </h1>
  ) : (
    <>
      <div className="specials">
        <div className="specialTitle">
          <h1>Today Special's</h1>
        </div>
        <div className="specialsSearch">
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="searchButton"
            onClick={() => {
              setFilteredRestaurants(
                filterRestaurant(searchText, allRestaurants)
              );
            }}
          >
            Search
          </button>
        </div>
        {filteredRestaurants.length === 0 ? (
          <h1 style={{ color: "white" }}>No Matching Restaurant Found</h1>
        ) : (
          <div className="restaurantCards">
            {filteredRestaurants.map((restaurant, index) => (
              <Link
                key={index}
                to={`/restaurantMenu/${restaurant.info.id}`}
                style={{ textDecoration: "none" }}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;

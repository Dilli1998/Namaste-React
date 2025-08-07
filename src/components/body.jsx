import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { filterRestaurant } from "../utils/helper";
import useAllRestaurant from "../utils/useAllRestaurant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { allRestaurants } = useAllRestaurant(); // ✅ Destructure from hook

  // Sync filteredRestaurants when allRestaurants is loaded
  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

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
          />
          <button
            className="searchButton"
            onClick={() => {
              const filtered = filterRestaurant(searchText, allRestaurants);
              setFilteredRestaurants(filtered);
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

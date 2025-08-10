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

  useEffect(() => {
    setFilteredRestaurants(allRestaurants);
  }, [allRestaurants]);

  return allRestaurants.length === 0 ? (
    <h1>
      <Shimmer />
    </h1>
  ) : (
    <>
      <div className="mt-3.5 bg-black">
        <div className="flex  justify-center text-[#cb9b58]">
          <h1 className="mt-5">Today Special's</h1>
        </div>
        <div>
          <input
            className="bg-white border border-black"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-white cursor-pointer"
            onClick={() => {
              const filtered = filterRestaurant(searchText, allRestaurants);
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        {filteredRestaurants.length === 0 ? (
          <h1 className="text-white">No Matching Restaurant Found</h1>
        ) : (
          <div className="restaurantCards mt-5 flex flex-wrap gap-5 justify-center">
            {filteredRestaurants.map((restaurant, index) => (
              <Link
                key={index}
                to={`/restaurantMenu/${restaurant.info.id}`}
                className="no-underline flex-[0_0_calc(20%-15px)] bg-white"
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

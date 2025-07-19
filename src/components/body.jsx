import { useState } from "react"
import {restaurantList} from "../config/constant"
import {RestaurantCard} from "./restaurantCard"

const Body = () =>{
    const [searchText,setSearchText] = useState("");
    const [restaurant,setRestaurant] = useState(restaurantList);

    const filterRestaurant=(restaurantName,restaurants)=>{
       const filterData=restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(restaurantName.toLowerCase()));
       return restaurantName ? filterData : restaurantList;
    }


    return(<>
    <div className="specials">
    <div className="specialTitle" >
        <h1>Today Special's</h1>
    </div>
    <div className="specialsSearch">
        <input className="searchInput" type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <button className="searchButton" onClick={()=>{setRestaurant(filterRestaurant(searchText,restaurant))}}>Search</button>
    </div>
    <div className="restaurantCards">
        {restaurant.map((restaurant,index) =>(
            <RestaurantCard key={index} {...restaurant}/>)
        )}
    </div>
    </div>
    </>)
}

export default Body;
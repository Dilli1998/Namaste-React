import { CLOUDINARY_IMAGE_ID_API } from "../config/constant";
import { useContext } from "react";
import UserContext from "../utils/useContext";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const user = useContext(UserContext);
  return (
    <>
      <div className="p-[15px] flex flex-col items-center text-center rounded-[12px] bg-white shadow-md cursor-pointer">
        <img
          className="w-52 h-36 scale-[1.05] rounded-[8px] mb-[10px] transition-transform duration-300 ease-in-out object-cover"
          src={CLOUDINARY_IMAGE_ID_API + cloudinaryImageId}
        ></img>
        <h1 className="my-[10px] mb-[5px] text-[1.2em] text-black transition-colors duration-300 ease-in-out">
          {name}
        </h1>
        <h3 className="my-[5px] font-normal text-black text-[0.9em]">
          {cuisines.join(", ")}
        </h3>
        <h3 className="my-[5px] font-normal text-black text-[0.9em]">
          {avgRating} star
        </h3>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </div>
    </>
  );
};
export default RestaurantCard;

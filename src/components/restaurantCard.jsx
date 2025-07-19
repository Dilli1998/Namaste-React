export const RestaurantCard = ({image,name,cusines,rating}) =>{
    return(
        <>
        <div className="restaurantCard">
            <img style={{width:"200px",height:"140px"}} src={image}></img>
            <h1>{name}</h1>
            <h3>{cusines.join(', ')}</h3>
            <h3>{rating} star</h3>
        </div>
        </>
    )
}
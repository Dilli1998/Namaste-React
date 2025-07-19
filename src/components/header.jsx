import foodVilla from "url:../assets/foodVilla.png";

const Header=()=>{
    return(<>
    <div className="header">
    <div className="logo">
        <a href="/">
        <img style={{width:"100%"}} src={foodVilla}></img>
        </a>
    </div>
    <ul className="rightNav">
    <li>Home</li>
    <li>About Us</li>
    <li>Contact</li>
    </ul>
    </div>
    </>) 
}

export default Header
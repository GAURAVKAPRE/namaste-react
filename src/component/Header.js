
import { LOGO_URL } from "../utils/constants";
import{useState , useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header= () =>{
    const [btnName,setbtnName] = useState("login");
    const {loggedIn} = useContext(UserContext) ;

    return (
        <div className="header">
            <div className="log-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
          <div className="nav-items">
           <ul>
           <li>
            { useOnlineStatus() ? "online" : "offline"}
           </li>
            
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
               </li>
            <li>
                <Link to ="/contact">contact us</Link>
                </li>
            <li>
                <Link to ="/grocery">Grocery</Link>
            </li>
            
            <button className="login" onClick={()=>{
                btnName==="Login" ? setbtnName("Logout") : setbtnName("Login");

            
            }}>{btnName}</button>

            <li>{loggedIn}</li>
            </ul>
          </div>
        </div>
    )
}
 export default Header;

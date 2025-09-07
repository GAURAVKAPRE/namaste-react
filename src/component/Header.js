
import { LOGO_URL } from "../utils/constants";
import{useState} from "react";


const Header= () =>{
    const [btnName,setbtnName] = useState("login")

    return (
        <div className="header">
            <div className="log-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
          <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>about</li>
            <li>contact us</li>
            <li>cart</li>
            <button className="login" onClick={()=>{
                btnName==="Login" ? setbtnName("Logout") : setbtnName("Login");

            
            }}>{btnName}</button>
            </ul>
          </div>
        </div>
    )
}
 export default Header;

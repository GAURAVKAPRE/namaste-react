import {  useEffect,useState } from "react";
import Shimmer from  "./Shimmer";

const RestaurentMenu = () =>{

    const [resinfo , setresinfo]= useState(null);

    useEffect(() =>{
       fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data  = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.450386&lng=73.87937450000001&restaurantId=53754&submitAction=ENTER")
    
    const json = await data.json();
    console.log(json);
    setresinfo(json.data);
  }
    
  
        if(resinfo==null){
            return <Shimmer/>
        }
        const {name} = resinfo?.cards[2]?.card?.card?.info
        const {cuisines} = resinfo?.cards[2]?.card?.card?.info 


    return (

        <div className="menu">
            <h1> {name} </h1>
            <h2>{cuisines.join(",")}</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>diet coke </li>
            </ul>

        </div>
    )
};

export default RestaurentMenu ;
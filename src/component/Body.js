
import RestroCard from "./RestroCard";

import { useEffect, useState } from "react";


const Body = () =>{
   // local state variable = super powerful variable

 // usestate gives you a state variable ;
const[listOfRestaurent, setListofRestaurent]= useState([]);   

useEffect(() =>{
  
    fetchData();

},[]);

const fetchData = async () => {
  const data = await fetch(
   "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.450386&lng=73.87937450000001&carousel=true&third_party_vendor=1"
  );
  const json = await data.json();

  // Find the card that actually has restaurants
   let  restaurantsCard  = json?.data?.cards.find(
    (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );


  setListofRestaurent(restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};






//    //normal js variable
//    let listOfRestaurent;
   
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    // filter logic here 
                    const filterList  = listOfRestaurent.filter(
                        (res) =>res.info.avgRating > 4.5
                    );
                 setListofRestaurent(filterList);

                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                 {
                    listOfRestaurent.map((restaurant )=> (<RestroCard key={restaurant.info.id} resData={restaurant}/>))
                 }
                 
            </div>
           
        </div>
    )
 }
 export default Body ;
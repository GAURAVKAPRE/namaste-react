
import RestroCard from "./RestroCard";
import Shimmer from  "./Shimmer";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Body = () =>{
   // local state variable = super powerful variable

 // usestate gives you a state variable ;
const[listOfRestaurent, setListofRestaurent]= useState([]);  
const[filteredRestaurent, setfilteredRestaurent] = useState([]);

const[searchText, setsearchText] = useState("");

// whenever state variable update, react triggers a reconciliation cycle(re-render the component )
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

// optional chaining ;
  setListofRestaurent(restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurent(restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


//    //normal js variable
//    let listOfRestaurent;
   
    return listOfRestaurent.length=== 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type ="text" className="search-box" value={searchText} 
                    onChange={(e)=>{ setsearchText(e.target.value);
                      }}/>

                    <button onClick={()=>{
                        console.log(searchText);
                        const filterRestaurent =  listOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                      setfilteredRestaurent(
                           filterRestaurent.length === 0 ? listOfRestaurent : filterRestaurent
                           );

                    }}>search</button>
                </div>

                <button className="filter-btn" onClick={()=>{
                    // filter logic here 
                    const filterList  = listOfRestaurent.filter(
                        (res) =>res.info.avgRating > 4.5
                    );
                setfilteredRestaurent(filterList);

                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                 {
                    filteredRestaurent.map((restaurant )=> (
                    <Link  key={restaurant.info.id} to={"/restaurent/"+restaurant.info.id}>
                    <RestroCard resData={restaurant}/>
                     </Link>
                     ))
                 }
                 
            </div>
           
        </div>
    )
 }
 export default Body ;
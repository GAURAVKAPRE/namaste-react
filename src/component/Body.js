
import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () =>{
   // local state variable = super powerful variable

   const arr = useState(resList); // usestate return state variable ;
const[listOfRestaurent, setListofRestaurent]= useState(resList);


//    //normal js variable
//    let listOfRestaurent = [];
   
    //normal js variable
   
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    // filter logic here 
                    const filterList  = listOfRestaurent.filter(
                        (res) =>res.card.card.info.avgRating > 4.5
                    );
                 setListofRestaurent(filterList);

                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                 {
                    listOfRestaurent.map((restaurant )=> (<RestroCard key={restaurant.card.card.info.id} resData={restaurant}/>))
                 }
                 
            </div>
           
        </div>
    )
 }
 export default Body ;
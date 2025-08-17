
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
    let listOfRestaurent2 = [ {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "705473",
                            "name": "Delhi Kitchen",
                            "cloudinaryImageId": "ee0c86496cd11e53724dda5ca6067fad",
                            "locality": "Opp Shanti Nagar",
                            "areaName": "Bibwewadi",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese",
                                "South Indian",
                                "Snacks",
                                "Biryani",
                                "Thalis",
                                "Beverages"
                            ],
                            "avgRating": 4.1,
                    
                            }
                        }
                    }
      
            }, {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "7052322",
                            "name": "bhai ka dhaba",
                            "cloudinaryImageId": "ee0c86496cd11e53724dda5ca6067fad",
                            "locality": "Opp Shanti Nagar",
                            "areaName": "Bibwewadi",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese",
                                "South Indian",
                                "Snacks",
                                "Biryani",
                                "Thalis",
                                "Beverages"
                            ],
                            "avgRating": 3.6,
                    
                            }
                        }
                    }
      
            }];
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    // filter logic here 
                    const filterList  = listOfRestaurent.filter(
                        (res) =>res.card.card.info.avgRating > 4 
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
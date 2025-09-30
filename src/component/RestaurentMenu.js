import useRestaurentMenu from "../utils/useRestaurantMenu";
import RestroCategory from "./RestroCategory";
import Shimmer from  "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurentMenu = () =>{

    const {resId} = useParams();

    const resinfo = useRestaurentMenu(resId);
    

  
        if(resinfo===null){
            return <Shimmer/>
        }
        const {name} = resinfo?.cards[2]?.card?.card?.info
        const {cuisines} = resinfo?.cards[2]?.card?.card?.info 
        
        
          const cards =
          resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        let itemCards  =
        cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];
        
        console.log( resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
         
        const categories = (resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||[]).filter(
            (c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
         )
         
    return (

        <div className="menu">
            <h1>MENU</h1>
            <h1> {name} </h1>
            <h2>{cuisines.join(",")}</h2>
           <div>
          
             {categories.map((categories) =>(
                  <RestroCategory key ={categories?.card?.card?.categoryId}
            data={categories?.card?.card}/>
            ) )}
        </div>
        </div>
    )
};

export default RestaurentMenu ;
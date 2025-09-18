import useRestaurentMenu from "../utils/useRestaurantMenu";
import Shimmer from  "./Shimmer";
import {useParams} from "react-router-dom";
import useOnlineStatus  from "../utils/useOnlineStatus";

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
        console.log(itemCards);
    return (

        <div className="menu">
            <h1>MENU</h1>
            <h1> {name} </h1>
            <h2>{cuisines.join(",")}</h2>
            <ul>
                {itemCards.map(item =>(<li key={item.card.info.id} >{item.card.info.name}</li>))}
               
                
            </ul>

        </div>
    )
};

export default RestaurentMenu ;
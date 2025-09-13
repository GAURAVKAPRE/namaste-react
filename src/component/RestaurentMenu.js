import {  useEffect,useState } from "react";
import Shimmer from  "./Shimmer";
import {useParams} from "react-router-dom";
import { Menu_api } from "../utils/constants";

const RestaurentMenu = () =>{

    const [resinfo , setresinfo]= useState(null);

    const {resId} = useParams();
   

    useEffect(() =>{
       fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data  = await fetch(Menu_api+resId)
    
    const json = await data.json();
    console.log(json);
    setresinfo(json.data);
  }
   
    
  
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
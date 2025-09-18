import {useEffect, useState} from "react";
import { Menu_api } from "./constants";

const useRestaurentMenu = (resId) => {
   
    const [resinfo,setresinfo]= useState(null);

    useEffect(() =>{
          fetchData();

    },[])

    const fetchData = async () =>{
        const data = await fetch(Menu_api+resId);

        const json =  await data.json() ;
        setresinfo(json.data);
    };
   return resinfo ;
};

export default useRestaurentMenu;
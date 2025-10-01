import { useState } from "react";
import ItemList from "./ItemList";

const RestroCategory = ({ data }) => {

    const [showItems , setshowItems] = useState(false);

     const handleClick =() =>{
         showItems===false?setshowItems(true):setshowItems(false);
     }


  return (
    <div className="flex flex-col items-center w-full my-8">
      {/* Accordion Header */}
      <div className="flex justify-center items-center gap-2 w-11/12 max-w-md bg-gray-100
       hover:bg-gray-200 transition-colors duration-300 cursor-pointer shadow-md 
       rounded-lg p-4 mb-2" onClick={handleClick}>
        <span className="font-semibold text-lg text-gray-800">{data.title}</span>
        <span>⮟</span>
        
      
      </div>

       {showItems &&  <ItemList items={data.itemCards} />}
     
       
      </div>
  
  );
};

export default RestroCategory;

import useRestaurentMenu from "../utils/useRestaurantMenu";
import RestroCategory from "./RestroCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurentMenu(resId);

  const [showIndex , setShowIndex] = useState(null);

  if (resinfo === null) {
    return <Shimmer />;
  }

  const { name } = resinfo?.cards[2]?.card?.card?.info;
  const { cuisines } = resinfo?.cards[2]?.card?.card?.info;

  const cards =
    resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="bg-white rounded-2xl shadow-md p-6 text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <h2 className="text-gray-600 font-medium">{cuisines.join(", ")}</h2>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {categories.map((category,index) => (
          <RestroCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index===showIndex ? true: false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;

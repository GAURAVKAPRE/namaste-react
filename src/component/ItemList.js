import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex items-center justify-between bg-white shadow-sm rounded-2xl p-4 hover:shadow-md transition-shadow duration-300"
        >
          {/* Item Image */}
          {item?.card?.info?.imageId && (
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item?.card?.info?.name}
              className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
            />
          )}

          {/* Item Info */}
          <div className="flex-1 px-4 flex flex-col justify-between gap-1">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item?.card?.info?.name}
              </h3>
              <span className="text-sm font-medium text-gray-700">
                ₹{item?.card?.info?.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            {item?.card?.info?.description && (
              <p className="text-sm text-gray-500 mt-1">{item.card.info.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

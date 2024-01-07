import { IMG_CDN_URL } from "../utils/constants";

const CategoryItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="flex justify-between border-b-2 border-gray-200">
            <div className="flex flex-col mt-6">
              <span className="h-5 w-5 mt-1">
                {item?.card?.info?.isVeg === 1 ? (
                  <img src="https://img.icons8.com/?size=48&id=61083&format=png" />
                ) : (
                  <img src="https://img.icons8.com/?size=48&id=61082&format=png" />
                )}
              </span>
              <span className="font-semibold text-base">
                {item?.card?.info?.name}
              </span>
              <span className="text-xs mt-1">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <small className="text-xs text-gray-500 mt-4">
                {item?.card?.info?.description}
              </small>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                className="h-24 w-auto rounded-lg mt-6"
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <button className="relative -top-5 bg-gray-50 py-2 rounded-lg px-8 shadow-xl text-green-500 font-bold text-sm hover:shadow-2xl">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;

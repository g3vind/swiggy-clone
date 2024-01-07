import { Search } from "lucide-react";
import usePopularCuisines from "../hooks/usePopularCuisines";
import { IMG_CDN_URL } from "../utils/constants";

export default function SearchComponent() {
  const { title, popularCuisines } = usePopularCuisines();
  const limitedPopularCuisines = popularCuisines?.slice(0, 12);

  return (
    <>
      <div className="flex justify-center mt-10 mb-20">
        {/* INPUT BOX */}
        <div className="relative">
          <input
            style={{ width: "60vw" }}
            className="h-12 rounded-md border border-black/30 bg-transparent px-4 py-2 text-sm placeholder:text-gray-500 placeholder:font-bold focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search for restaurants and food"
          />
          <div className="absolute top-0 right-0 pr-4 h-full flex items-center">
            <Search />
          </div>
        </div>
      </div>
      {/* POPULAR CUISINES */}
      <div className="flex flex-col m-32 -mt-12 mb-8 ml-24">
        <span className="font-extrabold text-xl ml-52">{title}</span>
        <div className="flex flex-row justify-center">
          {limitedPopularCuisines?.map((item) => (
            <div key={item?.id} className="mx-2 cursor-pointer">
              <img
                src={IMG_CDN_URL + item?.imageId}
                className="mt-4 h-24 w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

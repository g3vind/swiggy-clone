import { Search } from "lucide-react";
import SearchShimmer from "../shimmers/SearchShimmer";

export default function SearchComponent() {
  return (
    <>
      <div className="flex justify-center mt-10">
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
    </>
  );
}

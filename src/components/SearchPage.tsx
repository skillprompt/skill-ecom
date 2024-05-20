"use client";

import { FaHeart } from "react-icons/fa";
import { ProductsSidebar } from "./productsSide";
import { CiHeart } from "react-icons/ci";
import useSearchStore from "@/store/searchStore";
import SearchPagination from "./FlowbiteReact/SearchPagination";
import SearchFilterDropdown from "./FlowbiteReact/SearchFilterDropdown";

const SearchPage = () => {
  const { searchContent, setSearchContent } = useSearchStore();

  const handleHeartClicked = (id: number) => {
    const updatedSearchContent = [...searchContent];
    updatedSearchContent[id].isFavourite = !searchContent[id].isFavourite;
    setSearchContent(updatedSearchContent);
  };

  return (
    <div className="h-[1600px] w-full flex justify-center gap-8 py-10 px-56">
      <ProductsSidebar />
      <div className="w-full h-screen flex flex-col gap-6">
        <div className="w-full h-10 flex justify-between items-center">
          <p className="font-medium text-lessFocusTextColour">
            Selected Products:{" "}
            <span className="font-medium text-black text-xl">85</span>
          </p>
          <SearchFilterDropdown />
        </div>
        <div className="w-full h-full flex flex-wrap gap-y-6 justify-start lg:gap-x-[22px]">
          {searchContent.map((product) => {
            return (
              <div
                className="h-[432px] w-72 bg-productCardColour rounded-[9px] relative flex flex-col justify-center items-center text-center gap-4 pt-12 px-1 hover:shadow-lg hover:ease-in-out duration-300"
                key={product.id}
              >
                <div className="flex flex-col items-center justify-between h-[70%]">
                  {product.isFavourite ? (
                    <FaHeart
                      className="absolute right-[18px] top-[26px] text-[27px] text-black cursor-pointer"
                      onClick={() => handleHeartClicked(product.id)}
                    />
                  ) : (
                    <CiHeart
                      className="absolute right-4 top-6 text-3xl opacity-[30%] cursor-pointer text-green-600"
                      onClick={() => handleHeartClicked(product.id)}
                    />
                  )}
                  <img className="cursor-pointer" src={product.image} alt="" />
                  <p className="font-medium text-base p-2">{product.title}</p>
                  <p className="font-semibold text-2xl">{product.price}</p>
                </div>
                <button className="px-16 py-3 bg-buyNowButtonColour hover:bg-hoverBuyNowButtonColour text-white rounded-[8px] hover:shadow-lg hover:ease-in-out duration-300">
                  Buy Now
                </button>
              </div>
            );
          })}
          <div className="flex overflow-x-auto sm:justify-center w-full">
            <SearchPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

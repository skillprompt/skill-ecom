"use client";

import { FaHeart } from "react-icons/fa";
import { ProductsSidebar } from "./productsSide";
import { CiHeart } from "react-icons/ci";
import useSearchStore from "@/store/searchStore";
import { Dropdown, Pagination } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useState } from "react";

const customTheme: CustomFlowbiteTheme["dropdown"] = {
  arrowIcon: "ml-[135px] h-4 w-4 text-dropdownColour",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700 hover:bg-red-500",
      },
      placement: "-4px",
    },
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    target:
      "w-fit rounded-[8px] border-borderColour text-black bg-white hover:bg-white focus:ring-0",
  },
  inlineWrapper: "flex items-center",
};

const paginationCustomTheme: CustomFlowbiteTheme["pagination"] = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400",
      span: "font-semibold text-gray-900 dark:text-white",
    },
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px gap-2",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5",
    },
    next: {
      base: "rounded-r-lg bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5",
    },
    selector: {
      base: "w-8 h-8 flex justify-center items-center border rounded-[5px] border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active:
        "bg-black text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
};

const SearchPage = () => {
  const { searchContent, setSearchContent } = useSearchStore();

  const handleHeartClicked = (id: number) => {
    const updatedSearchContent = [...searchContent];
    updatedSearchContent[id].isFavourite = !searchContent[id].isFavourite;
    setSearchContent(updatedSearchContent);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="h-[1600px] w-full flex justify-center gap-8 py-10 px-56">
      <ProductsSidebar />
      <div className="w-full h-screen flex flex-col gap-6">
        <div className="w-full h-10 flex justify-between items-center">
          <p className="font-medium text-lessFocusTextColour">
            Selected Products:{" "}
            <span className="font-medium text-black text-xl">85</span>
          </p>
          <Dropdown
            label="By rating"
            dismissOnClick={false}
            theme={customTheme}
            color="light"
          >
            <Dropdown.Item>By relevance</Dropdown.Item>
            <Dropdown.Item>By popularity</Dropdown.Item>
            <Dropdown.Item>Newest first</Dropdown.Item>
          </Dropdown>
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
            <Pagination
              layout="pagination"
              currentPage={currentPage}
              totalPages={1000}
              onPageChange={onPageChange}
              previousLabel=""
              nextLabel=""
              showIcons
              theme={paginationCustomTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

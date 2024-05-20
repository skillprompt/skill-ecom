"use client";

import { CustomFlowbiteTheme, Pagination } from "flowbite-react";
import { useState } from "react";

const SearchPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

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

  return (
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
  );
};

export default SearchPagination;

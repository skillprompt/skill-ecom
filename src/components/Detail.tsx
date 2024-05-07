import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import OrderDetail from "./OrderDetail";
import Review_Detail from "./Review_Detail";
import Reviews from "./Reviews";
import { Component } from "./breadcrumbs";
import Order from "./order";

const Detail = () => {
  return (
    <>
      <Component />
      <div className="flex flex-col justify-center items-center gap-y-10 gap-x-6 p-11">
        <Order />
        <OrderDetail />
        <Reviews />
        <Review_Detail />
        <button
          type="button"
          className=" flex items-center justify-center border border-black rounded-md w-52 h-[48px]"
        >
          View More
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
    </>
  );
};

export default Detail;

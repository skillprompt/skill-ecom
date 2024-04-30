import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export function Navbar() {
  const path = useLocation().pathname;

  return (
    <>
      <div className="flex justify-center bg-white">
        <div className="flex justify-between items-center w-[1200px] h-[95px]">
          <img src="newLogo.png" alt="" className="w-[149px] h-[63px]" />
          <div className="flex relative">
            <CiSearch className="absolute w-6 h-[22px] left-3 top-4 opacity-[40%]" />
            <input
              type="search"
              className="w-[559px] h-[56px] bg-[#F5F5F5] rounded-lg px-10"
              placeholder="Search"
            />
          </div>
          <div
            className={clsx(
              "text-base font-medium",
              path === "/home" ? "opacity-[100%]" : "opacity-[30%]"
            )}
          >
            <Link to="/home">Home</Link>
          </div>
          <div
            className={clsx(
              "text-base font-medium",
              path === "/contactUs" ? "opacity-[100%]" : "opacity-[30%]"
            )}
          >
            <Link to="/contactUs">Contact Us</Link>
          </div>
          <Link to="/wishlist">
            <FaRegHeart className="w-6 h-[22px]" />
          </Link>
          <Link to="/cart">
            <IoCartOutline className="w-7 h-7" />
          </Link>
          <FiUser className="w-6 h-7 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

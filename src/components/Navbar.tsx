import logo from "../../public/logo.svg";
import { BsCart4 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

export function Navbar() {
  return (
    <div className="w-full h-[100px] bg-[#ffffff]">
      <div className="max-w-[65%] h-full bg-[#ffffff] mx-auto flex justify-between px-4 text-sm font-regular items-center">
        <div className="w-32 h-32">
          <img src={logo} alt="" />
        </div>
        <div className="flex w-[580px] h-[50px] items-center relative">
          <input
            type="search"
            placeholder="search for product"
            className="w-[100%] p-3 rounded-2xl border"
          />
          <IoIosSearch className="text-2xl align-text-top absolute right-2 opacity-[80%]" />
        </div>
        <div className="flex h-full items-center ml-[2%]">
          <CgProfile className="text-5xl opacity-[80%]" />
          <h1>Hello{}</h1>
          <RiArrowDropDownLine className="text-4xl opacity-[80%]" />
        </div>
        <div className="flex items-center h-full">
          <h1>Choose a language</h1>
          <RiArrowDropDownLine className="text-4xl opacity-[80%]" />
        </div>
        <div className="flex items-center">
          <BsCart4 className="text-3xl opacity-[80%]" />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
}

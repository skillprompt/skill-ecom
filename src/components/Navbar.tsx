import { BsCart4 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  return (
    <div className="w-full h-[100px] bg-[#ffffff]">
      <div className="max-w-[1110px]  h-full bg-[#ffffff] mx-auto flex justify-between px-4  text-sm font-regular items-center  ">
        <img src="/logo.png" className="" alt="logo" />
        <div className=" flex w-[580px] h-[50px] items-center relative">
          <input
            type="search"
            placeholder="search for product"
            className="w-[100%]  p-3 rounded-2xl border border-gray-300 "
          />

          <IoIosSearch className=" text-2xl align-text-top absolute right-2" />
        </div>

        <div className="flex h-full justify-center items-center ml-[15px]">
          <CgProfile className="w-[50px] h-[50px]" />
          <h1 className="">hello(username)</h1>
          <RiArrowDropDownLine />
        </div>
        <h1 className="ml-">choose a language</h1>
        <RiArrowDropDownLine />

        <BsCart4 className="text-3xl ml- " />
        <p className="w-[29] h-[]27px">Cart </p>
      </div>
    </div>
  );
}
export default Navbar;

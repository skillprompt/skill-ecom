import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function AdminNavbar() {
  return (
    <div className="flex justify-between items-center h-[100px] w-full bg-[#ffffff] ">
      <div className="  bg-[#ffffff] px-10 ">
        <img src="/logo.png" alt="error" />
      </div>
      <div className="flex relative">
        <input
          type="text"
          placeholder="search for product"
          className=" pl-5  rounded-xl bg-[#F0F5FF] outline-none border h-10 w-[500px]"
        />
        <IoIosSearch className=" text-[30px] absolute right-3 pt-2 " />
      </div>
      <div className="flex pr-28 gap-1 font-semibold">
        <FaUserCircle className="text-[25px]  " />
        Admin
      </div>
    </div>
  );
}
export default AdminNavbar;

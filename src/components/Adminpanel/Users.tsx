import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Users() {
  return (
    <>
      <div className="  ml-14 mt-10">
        <button className="font-semibold float-right border bg-green-700 text-[#ffffff] px-2 p-1  ">
          Create new
        </button>
        <div className="font-bold text-2xl mt-10 mb-10 ">Customers</div>
        <div className="flex items-center  w-full mt-5 space-x-[350px] ">
          <div className="flex relative">
            <input
              type="text"
              placeholder="Search..."
              className=" pl-5   bg-[#ffffff] outline-none border-2 border-[#AAAAAA] h-10 w-[500px]"
            />
            <IoIosSearch className=" absolute text-[30px]  right-3 pt-2 " />
          </div>
          <div className="flex space-x-4 ">
            <div className="flex bg-white shadow-xl items-center border h-8 w-28 gap-10 px-2 ">
              Show
              <FaChevronDown />
            </div>
            <div className="flex bg-white items-center shadow-xl border h-8 w-28 gap-10 px-1  ">
              Status
              <FaChevronDown />
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] h-80 w-full mt-5 shadow-lg"></div>
      </div>
    </>
  );
}
export default Users;

import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Categories() {
  return (
    <>
      <div className="flex space-x-20 ml-14 mt-20 ">
        <div className="font-bold text-2xl">Categories</div>
        <div className='flex relative'>
          <input
            type="text"
            placeholder="search for product"
            className=" pl-5  rounded-xl bg-[#E4E4E7] outline-none border h-10 w-[500px]"
          />
          <IoIosSearch className=" absolute text-[30px]  right-3 pt-2 " />
        </div>
        <div className="flex bg-white shadow-xl items-center border h-8 w-28 gap-10 px-2 rounded-md">
          <div >Show</div>
          <FaChevronDown />
        </div>
        <div className="flex bg-white items-center shadow-xl border h-8 w-28 gap-10 px-1 rounded-md ">
          <div >Status</div>
          <FaChevronDown />
        </div>
      </div>
    </>
  );
}
export default Categories;

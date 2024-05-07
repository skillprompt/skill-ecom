import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Categories() {
  return (
    <>
      <div className="flex justify-between w-full pt-10 px-16 ">
        <div className="font-bold text-2xl">Categories</div>
        <div className='flex relative'>
          <input
            type="text"
            placeholder="search for product"
            className=" pl-5  rounded-xl bg-[#E4E4E7] outline-none border h-10 w-[500px]"
          />
          <IoIosSearch className=" absolute text-[30px]  right-3 pt-2 " />
        </div>
        <div className="flex gap-x-4">

        <div className="flex bg-btnTxtColor shadow-xl items-center border h-8 w-28 gap-10 px-2 rounded-md">
          <div >Show</div>
          <FaChevronDown />
        </div>
        <div className="flex bg-btnTxtColor items-center shadow-xl border h-8 w-28 gap-10 px-1 rounded-md ">
          <div >Status</div>
          <FaChevronDown />
        </div>
        </div>
      </div>
    </>
  );
}
export default Categories;

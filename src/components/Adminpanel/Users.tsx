import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { userData } from "../../data/userData";
import { Avatar } from "flowbite-react";

function Users() {
  return (
    <>
      <div className=" w-full px-16">
        <div className="pt-8">
          <button className="font-semibold float-right border bg-btnColor text-[#ffffff] px-2 p-1  ">
            Create new
          </button>
        </div>
        <div className="font-bold text-2xl my-10 ">Customers</div>
        <div className="flex flex-col gap-y-14">
          <div className="flex items-center justify-between w-full mt-5 space-x-[350px] ">
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search..."
                className=" pl-5   bg-btnTxtColor outline-none rounded-lg border-2 border-[#AAAAAA] h-10 w-[500px]"
              />
              <IoIosSearch className=" absolute text-[30px] right-3 pt-2" />
            </div>
            <div className="flex space-x-4 ">
              <div className="flex bg-btnTxtColor rounded-lg shadow-md items-center border h-8 w-28 gap-10 px-2">
                Show
                <FaChevronDown />
              </div>
              <div className="flex bg-btnTxtColor rounded-lg items-center shadow-md border h-8 w-28 gap-10 px-1">
                Status
                <FaChevronDown />
              </div>
            </div>
          </div>
          <div className=" flex border-2  gap-14 h-96 items-center justify-center">
            <div className="grid grid-cols-4 gap-6 items-center  bg-btnTxtColor ">
              {userData.map((data) => (
                <div
                  className="flex w-60 h-72 flex-col relative  overflow-hidden border border-black"
                  key={data.id}
                >
                  <div className="bg-[#2D3047] h-20 w-64 absolute"></div>
                  <Avatar
                    rounded
                    img={data.image}
                    size="xl"
                    className="pt-8"
                  ></Avatar>
                  <div className="text-center">
                    <h3 className="font-bold">{data.name}</h3>
                    <p>{data.role}</p>
                    <p className="font-semibold">{data.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Users;

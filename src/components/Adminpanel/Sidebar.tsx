import { MdDashboard } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";
import { FaUserCog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Sidebar = () => {
  const path = useLocation().pathname;
  return (
    <div className="">
      <div className=" justify-center  bg-[#2D3047]  w-64 text-white h-full ">
        <div className="flex justify-center pb-5">
          <div className=" bg-[#374151]  flex w-[80%]  top-0  mt-10 pt-4 pb-4 justify-center gap-2 ">
            <FaUserCog className="text-3xl" />
            <div className="flex-col">
              <h4 className=" text-[12px]  font-semibold ">Admin username</h4>
              <h4 className="text-[12px]  font-semibold ">
                adminmail@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col  h-[300px] ">
          <Link to="/admin/Dashboard">
            <div
              className={clsx(
                "text-[16px] font-semibold flex gap-4 px-12 py-4 hover:bg-[#374151]",
                path === "/admin/Dashboard"
                  ? "text-[16px] font-semibold flex gap-4 px-12 py-2 bg-[#374151] hover:bg-[#374151]"
                  : ""
              )}
            >
              <MdDashboard className="text-white  text-[25px]" />
              Dashboard
            </div>
          </Link>

          <Link to="/admin/category">
            <div
              className={clsx(
                "text-[16px] font-semibold flex gap-4 px-12 py-4 hover:bg-[#374151]",
                path === "/admin/category"
                  ? "text-[16px] font-semibold flex gap-4 px-12 py-2 bg-[#374151] hover:bg-[#374151]"
                  : ""
              )}
            >
              <MdDashboard className="text-white  text-[25px]" />
              Category
            </div>
          </Link>

          <Link to="/admin/products">
            <div
              className={clsx(
                "flex font-semibold text-[16px] px-12 py-4 gap-4 hover:bg-[#374151]",
                path === "/admin/products"
                  ? "flex font-semibold text-[16px] px-12 py-4 gap-4 bg-[#374151] hover:bg-[#374151]"
                  : ""
              )}
            >
              <LuPackageOpen className="text-[25px]" />
              Products
            </div>
          </Link>
          <Link to="/admin/addProducts">
            <div
              className={clsx(
                "flex font-semibold text-[16px] gap-3 px-12 py-4  hover:bg-[#374151]",
                path === "/admin/addProducts"
                  ? "flex font-semibold text-[16px] gap-3 px-12 py-4 bg-[#374151] hover:bg-[#374151]  "
                  : ""
              )}
            >
              <MdAddShoppingCart className="text-white text-[25px] " />
              Add Products
            </div>
          </Link>
          <Link to="/admin/orders">
            <div
              className={clsx(
                "flex font-semibold text-[16px] px-12 py-4 gap-4 hover:bg-[#374151]",
                path === "/admin/orders"
                  ? "flex font-semibold text-[16px] px-12 py-4 gap-4  bg-[#374151] hover:bg-[#374151]"
                  : ""
              )}
            >
              <BsCartCheck className=" text-[25px]" />
              Orders
            </div>
          </Link>
          <Link to="/admin/Users">
            <div
              className={clsx(
                "flex font-semibold text-[16px] px-12 py-4 gap-4 hover:bg-[#374151]",
                path === "/admin/Users"
                  ? "flex font-semibold text-[16px] px-12 py-4 gap-4  bg-[#374151] hover:bg-[#374151]"
                  : ""
              )}
            >
              <FaRegUser className="text-white text-[25px]" />
              Users
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

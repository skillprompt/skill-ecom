import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineLogin } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { MenuStore } from "@/store/loginStore";
import { NavbarModal } from "./NavbarModal";

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const Menubar = MenuStore((state) => state.Menubar);
  const setMenubar = MenuStore((state) => state.setMenubar);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto h-full flex justify-between items-center gap-10 p-3">
          <img
            src="newTestLogo.png"
            alt="logo of haat bazaar"
            className="w-24 md:w-[140px] h-8"
          />
          <div className="relative w-full self-center">
            <CiSearch className="absolute w-4 h-5 md:w-6 md:h-[22px] left-3 top-3 opacity-[40%]" />

            <input
              type="search"
              className="w-full p-2 md:p-3 bg-inputColor rounded-lg pl-8 md:pl-10 text-sm md:text-base"
              placeholder="Search"
            />
          </div>

          <div className="hidden sm:flex gap-9 items-center justify-between w-full">
            <div
              className={clsx(
                "text-base font-medium",
                path === "/" ? "opacity-[100%]" : "opacity-[30%]"
              )}
            >
              <Link to="/">Home</Link>
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
            <DropdownMenu>
              <DropdownMenuTrigger>
                <FiUser className="w-6 h-7 cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="shadow-lg bg-white">
                <Link to="/login">
                  <DropdownMenuLabel className="hover:bg-[#808080]  duration-500 hover:text-btnTxtColor cursor-pointer flex items-center gap-2 text-black p-2">
                    <MdOutlineLogin size={16} />
                    <span>Login</span>
                  </DropdownMenuLabel>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <FiUser className="w-6 h-5 cursor-pointer sm:hidden" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="shadow-sm bg-white">
                <Link to="/login">
                  <DropdownMenuLabel className="hover:bg-btnColor  duration-500 hover:text-btnTxtColor cursor-pointer flex items-center gap-2 text-black">
                    <MdOutlineLogin size={16} />
                    <span>Login</span>
                  </DropdownMenuLabel>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {Menubar ? (
            <IoMdClose
              size={50}
              className="block sm:hidden"
              onClick={() => {
                setMenubar(false);
              }}
            />
          ) : (
            <RxHamburgerMenu
              size={50}
              className="block sm:hidden text-bold"
              onClick={() => {
                setMenubar(true);
              }}
            />
          )}
        </div>
      </div>

      {Menubar && <NavbarModal />}
    </>
  );
}

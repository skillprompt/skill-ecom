import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
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
import { useQuery } from "@tanstack/react-query";
import { TGetProfile } from "@/types/GetProfileTypes";
import LoginModal from "./FlowbiteReact/LoginModal";
import SearchIcon from "@/icons/navbar/Search";

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const { Menubar, setMenubar } = MenuStore();

  const { data } = useQuery<TGetProfile>({
    queryKey: ["login"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8080/api/v1/ecommerce/profile"
      );
      const data = await response.json();
      return data;
    },
  });
  console.log("checking api fetching...", data);

  return (
    <>
      <div className="w-full mx-auto h-[80px] flex justify-center gap-12 items-center lg:pl-56 lg:pr-44">
        <img
          src="newTestLogo.png"
          alt="logo of haat bazaar"
          className="w-24 md:w-[140px] h-8"
        />
        <div className=" relative w-full self-center">
          <form className="w-full">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm bg-inputColor outline-1 outline-gray-400 rounded-[10px]"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>

        <div className="hidden sm:flex items-center justify-between w-[800px]">
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
            <DropdownMenuContent className="drop-shadow-xl bg-white">
              <Link to="/login">
                <DropdownMenuLabel className="hover:bg-[#2E2E2E]  duration-500 hover:text-btnTxtColor cursor-pointer flex items-center gap-2 text-black p-2">
                  <MdOutlineLogin size={16} />
                  <span>Login</span>
                </DropdownMenuLabel>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <FiUser className="w-6 h-5 cursor-pointer sm:hidden" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="shadow-sm bg-white">
            <Link to="/login">
              <DropdownMenuLabel className="hover:bg-btnColor  duration-500 hover:text-btnTxtColor cursor-pointer flex items-center gap-2 text-black  ">
                <MdOutlineLogin size={16} />
                <span>Login</span>
              </DropdownMenuLabel>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>

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
      <LoginModal />

      {Menubar && <NavbarModal />}
    </>
  );
}

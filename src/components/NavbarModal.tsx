import { MenuStore } from "@/store/loginStore";
import { IoMdClose } from "react-icons/io";
import { AiTwotoneHome } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export const NavbarModal = () => {
  const Menubar = MenuStore((state) => state.Menubar);
  const setMenubar = MenuStore((state) => state.setMenubar);
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: 1,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
        className="w-full fixed  h-screen   sm:hidden origin-top z-10 left-0 top-0 bg-white"
      >
        <img src="/logo.png" className="w-24 p-2 absolute left-1 top-3" />
        <motion.div
          exit={{
            scaleY: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          onClick={() => {
            setMenubar(!Menubar);
          }}
          className="block sm:hidden absolute right-1 top-3"
        >
          <IoMdClose size={24} />
        </motion.div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="   h-full flex flex-col gap-4 items-start justify-center ">
            {" "}
            <h2
              className=" w-full hover:bg-btnColor hover:text-white"
              onClick={() => {
                setMenubar(!Menubar);
              }}
            >
              <Link to="/home" className="flex gap-2 items-center p-2 ">
                <AiTwotoneHome />
                Home
              </Link>
            </h2>{" "}
            <h2
              className=" w-full hover:bg-btnColor hover:text-white"
              onClick={() => {
                setMenubar(false);
              }}
            >
              <Link to="/contactUs" className=" flex gap-2 items-center p-2 ">
                <GrContactInfo />
                Contact us
              </Link>
            </h2>
            <div className="w-full hover:bg-btnColor hover:text-white">
              <Link to="/wishlist" className="flex gap-2 items-center p-2">
                <FaRegHeart className="w-4 h-4" />
                WatchList
              </Link>
            </div>
            <div className=" w-full hover:bg-btnColor hover:text-white">
              <Link to="/cart" className="flex gap-2 items-center p-2">
                <IoCartOutline className="w-5 h-5" />
                Cart
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

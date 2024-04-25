// import { BsCart4 } from "react-icons/bs";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { IoIosSearch } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";

import { Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { Input } from "./input";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";

export function Navabar() {
  return (
    <div>
      <div className="!bg-[#ffffff]">
        <Navbar
          fluid
          rounded
          className="!bg-[#ffffff] max-w-[1180px] mx-auto justi"
        >
          <Navbar.Brand as={Link} href="https://flowbite-react.com">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
          </Navbar.Brand>
          <Input
            color="primary"
            className="xl:w-[40%] w-[26%]"
            placeholder="Search"
            rightIcon={IoIosSearch}
          />

          <div className="flex items-center justify-center ">
            <Link to="/login">
              <Button className="!bg-white border-none text-black flex items-center ring-0 focus:ring-0">
                <CgProfile className="text-[20px] " />
                <p className="text-[12px] sm:text-[14px] ml-2">Login</p>
              </Button>
            </Link>
          </div>
          <Navbar.Toggle className="ring-0" />

          <Navbar.Collapse>
            <div className="flex flex-col items-start h-screen sm:h-full sm:flex-row  sm:items-center sm:justify-between gap-10">
              <div className="flex ">
                <Dropdown
                  className="!bg-white "
                  arrowIcon={false}
                  inline
                  label={
                    <div className="!bg-white border-none text-black flex !foucs:ring-0 ">
                      Choose a language
                      <RiArrowDropDownLine size={24} />
                    </div>
                  }
                >
                  <Dropdown.Item className="!text-black hover:!text-white">
                    English
                  </Dropdown.Item>
                  <Dropdown.Item className="!text-black hover:!text-white">
                    Nepali
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div className="flex items-center gap-2">
                <BsCart4 size={24} />
                <h1>Cart</h1>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="bg-catogriesBg w-full h-full">
        <div className="flex  max-w-[1160px] mx-auto">
          <div className="p-2 flex text-white">
            <img src="/mbl.png" alt="mbl" />
            <h2>Mobile</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function Navbar() {

//   return (

// <div className="w-full h-full bg-[#ffffff]">
//   {/* wrapper for navbar with the max width 1188px  */}
//   <div className="max-w-[1188px]  p-3.5 mx-auto flex justify-between gap-6 items-center">
//     <div className=" md:w-[117px] sm:w-[100px] w-[90px] ">
//       <img src="/logo.png" alt="logo" className="w-full" />
//     </div>
//     <div className="  hidden sm:flex  justify-between items-center h-full w-full  ">
//       <div className="flex w-[50%] h-[50px] items-center relative text-[14px]">
//         <input
//           type="text"
//           placeholder="search for product"
//           className="w-full rounded-xl border p-[9px] outline-none bg-[#F0F5FF] text-[#726A66]"
//         />

//         <IoIosSearch className="text-2xl align-text-top absolute right-2 text-[#726A66]" />
//       </div>
//       <div className="flex h-full items-center ml-[2%]">
//         <CgProfile className="text-3xl " />
//         <Link to="/login">
//           {" "}
//           <button className="px-2 py-1 transition  border-none ease-in-out duration-400 hover:bg-[#dddadad1] tex-[14px]">
//             Login
//           </button>
//         </Link>
//         <h1 className=" p-1 font-bold">|</h1>
//         <Link to="/register">
//           <button className="border-none pl-2 py-1 transistion ease-in-out duration-400 cursor-pointer hover:bg-[#dddadad1] text-[14px]">
//             Sign Up
//           </button>
//         </Link>
//         <RiArrowDropDownLine className="text-4xl ml-[-5px] " />
//       </div>
//       <div>
//         <div className="flex items-center  ">
//           <h1>Choose a Language</h1>
//           <RiArrowDropDownLine className="text-4xl lg:ml-[-5px] ml-[-30px] " />
//         </div>
//         {/* <ul className="w-full bg-[#ffffff] ">
//           <li className="p-2">English</li>
//           <li>Nepali</li>
//         </ul> */}
//       </div>
//       <div className="flex items-center p-2">
//         <BsCart4 className="text-2xl " />
//         <p>Cart</p>
//       </div>
//     </div>
//     <IoMdMenu className="text-3xl sm:hidden" />
//   </div>
// </div>
//   );
// }

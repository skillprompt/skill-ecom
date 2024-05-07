import { FaMobileScreen } from "react-icons/fa6";
import { BsCpuFill } from "react-icons/bs";
import { RiCpuLine } from "react-icons/ri";
import { FaCamera } from "react-icons/fa6";
import { IoMdReverseCamera } from "react-icons/io";
import { PiBatteryVerticalHighBold } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";

import { IoStorefrontOutline } from "react-icons/io5";
import { Component } from "./breadcrumbs";
const Detail = () => {
  return (
    <>
      <div className=" grid grid-cols-2 bg-white ">
        <div className="flex justify-center items-center">
          {" "}
          <img src="Image.png" alt="image data" />{" "}
        </div>
        <div className=" p-9 flex flex-col gap-y-7">
          <h1 className="font-bold text-5xl">Apple iphone 14 pro max</h1>
          <p className="text-4xl font-medium">
            $1399 <del className="text-sm text-[#6F6F6F]">$1499</del>
          </p>
          <p>Select Color:</p>
          <div className="flex gap-x-4">
            <button
              type="submit"
              className="border border-[#D5D5D5] rounded-lg text-[#D5D5D5] px-4 py-2"
            >
              <p>128GB</p>
            </button>
            <button
              type="submit"
              className="border border-[#D5D5D5] px-4 py-2 rounded-lg text-[#6F6F6F]"
            >
              <p>156GB</p>
            </button>
            <button
              type="submit"
              className="border border-[#D5D5D5] px-4 py-2 rounded-lg text-[#6F6F6F]"
            >
              <p>512GB</p>
            </button>
            <button
              type="submit"
              className="border border-black rounded-lg w-24"
            >
              <p>1TB</p>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3">
              {" "}
              <button className="flex flex-row gap-2 bg-[#f4f4f4c5] rounded-sm w-48 p-3 ">
                {" "}
                <FaMobileScreen className="h-11 text-3xl" />
                <div className="flex flex-col">
                  <h1 className="text-[#C4C4C4]">Screen Size</h1>
                  <p className="text-black text-left">6.7"</p>
                </div>
              </button>
              <button className="flex flex-row gap-3 bg-[#f4f4f4c5] rounded-sm w-48 p-3 ">
                {" "}
                <BsCpuFill className=" flex flex-col h-11 text-3xl" />
                <div className="text-[#C4C4C4] text-left">
                  {" "}
                  CPU
                  <p className="text-black text-left">Apple A16 Bionic</p>
                </div>
              </button>
              <button className="flex flex-row gap-2 bg-[#f4f4f4c5] rounded-sm w-48 p-3 ">
                {" "}
                <RiCpuLine className="h-11 text-3xl" />
                <div className="flex flex-col text-[#C4C4C4]">
                  {" "}
                  Number of cores<p className="text-black text-left">6</p>
                </div>
              </button>
            </div>
            <div className="flex gap-3">
              <button className="flex flex-row bg-[#f4f4f4c5] rounded-sm w-48 p-5 gap-2">
                {" "}
                <FaCamera className="h-11 text-3xl" />
                <div className="flex flex-col text-[#C4C4C4]">
                  Main Camera<p className="text-black text-left">48-12-12 MP</p>
                </div>
              </button>
              <button className="flex flex-row bg-[#f4f4f4c5] rounded-sm w-48 p-5 gap-2">
                {" "}
                <IoMdReverseCamera className="h-11 text-3xl" />
                <div className="flex flex-col text-[#C4C4C4]">
                  Front-Camera<p className="text-black text-left">12MP</p>
                </div>
              </button>
              <button className="flex flex-row bg-[#f4f4f4c5] rounded-sm w-48 p-5 h-20">
                {" "}
                <PiBatteryVerticalHighBold className="h-11 text-3xl" />
                <div className="flex flex-col text-[#C4C4C4]">
                  {" "}
                  Battery Capacity
                  <p className="text-black text-left">4323mAh</p>
                </div>
              </button>
            </div>
          </div>
          <p className=" flex text-justify text-[#6C6C6C] pr-9">
            Enhance capabilities thanks toan enlarged display of 6.7 inchesand
            work without recharging throughout day.Increadiblw photosas in
            weak,yes and in bright light using the new sysytem with two cameras
          </p>
          <div className="grid gap-4 grid-cols-2 pr-9">
            <button
              type="submit"
              className="border border-black h-16 rounded-md text-xl"
            >
              Add to Wishlist
            </button>
            <button
              type="submit"
              className="bg-black text-white rounded-md h-16 text-xl"
            >
              Add to Cart
            </button>
          </div>
          <div className="flex justify-between pr-9">
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-[#F6F6F6] text-2xl flex justify-center items-center">
                <CiDeliveryTruck />
              </div>
              <div>
                {" "}
                <h1>Free delivery</h1>
                <p>1-2 day</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-[#F6F6F6] text-2xl flex justify-center items-center">
                <IoStorefrontOutline />
              </div>
              <div>
                {" "}
                <h1>In stock</h1>
                <p>Today</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-[#F6F6F6] text-2xl flex justify-center items-center">
                <img src="guarante.png"></img>
              </div>
              <div>
                <h1>Guaranteed</h1>
                <p>1 year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component />
    </>
  );
};

export default Detail;
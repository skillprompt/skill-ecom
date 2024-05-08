import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BrandData } from "@/data/productItems";
import { Slider } from "antd";
import { IoIosSearch } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const priceinput = "w-[35%] p-1.5 outline-slate-400 border border-slate-500";

export function ProductsSidebar() {
  return (
    <>
      <div className="w-[256px] border  flex flex-col gap-4 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full justify-between items-center p-2 shadow-md text-semibold">
            <span>Price</span>
            <RiArrowUpSLine />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="shadow-sm bg-white">
            <DropdownMenuLabel className="hover:bg-btnColor  duration-500 hover:text-btnTxtColor cursor-pointer flex items-center gap-2 text-black  ">
              <span>Login</span>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-gray-400">
            <h2>From</h2>
            <h2>To</h2>
          </div>

          <div className="flex justify-between ">
            {" "}
            <input className={priceinput} required />
            <input className={priceinput} required />
          </div>
          <Slider min={1} max={10000} range defaultValue={[5000, 8050]} />
        </div>
        <div className="flex flex-col gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex w-full justify-between items-center p-2 shadow-md text-semibold">
              <span>brand</span>
              <RiArrowUpSLine />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="shadow-sm bg-white w-full">
              <DropdownMenuLabel className="hover:bg-btnColor  duration-500 hover:text-btnTxtColor cursor-pointer flex items-center gap-2 text-black  ">
                <span>Login</span>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
          <div>
            <div className="flex flex-col gap-4 relative p-4 min-h-[200px] max-h-[300px] shadow-2xl w-full overflow-auto">
              {/* this is the search */}
              <div className="w-full mx-auto ">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IoIosSearch />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-10 text-sm bg-inputColor outline-1 outline-gray-400 rounded-xl"
                    placeholder="Search"
                    required
                  />
                </div>
              </div>
              {/* card */}
              <div className="flex flex-col  ">
                {BrandData.map((data) => (
                  <div className="flex gap-2 items-center" key={data.id}>
                    <input type="checkbox" className="accent-black" />
                    <div className="flex gap-1 items-center">
                      <h1 className="font-semibold">{data.name}</h1>
                      <p className="text-sm text-gray-400">{data.noOfItems}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

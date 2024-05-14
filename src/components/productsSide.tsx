import { BrandData, MemoryData } from "@/data/productItems";
import { Slider } from "antd";
import { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const priceinput = "w-[35%] p-1.5 outline-slate-400 border border-slate-500";

export function ProductsSidebar() {
  const [pricebar, setPricebar] = useState(false);
  const [brandbar, setBrandbar] = useState(false);
  const [memorybar, setMemorybar] = useState(false);
  const [range, setRange] = useState<number[]>([5000, 8050]);
  const [brandSearch, setBrandSearch] = useState("");
  const [filter, setFilter] = useState(BrandData);
  const [brandSearchModel, setBrandSearchModel] = useState(false);

  const handleSliderChange = (value: number[]) => {
    setRange(value);
  };
  const handleSearch = (e) => {
    setBrandSearchModel(true);
    const searchvalue = e.target.value;
    setBrandSearch(searchvalue);
    const filterSearch = BrandData.filter((data) =>
      data.name.toLowerCase().includes(brandSearch.toLowerCase())
    );
    setFilter(filterSearch);
    if (searchvalue.length === 1) {
      setBrandSearchModel(false);
    }
  };

  return (
    <>
      <div className="w-[256px] border  flex flex-col gap-4 p-4">
        <div
          className="flex justify-between px-3 py-2 shadow-md cursor-pointer"
          onClick={() => {
            setPricebar(!pricebar);
          }}
        >
          <span>Price</span>
          {pricebar ? <RiArrowUpSLine /> : <IoIosArrowDown />}
        </div>
        {pricebar && (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-gray-400">
              <h2>From</h2>
              <h2>To</h2>
            </div>

            <div className="flex justify-between ">
              {" "}
              <input
                className={priceinput}
                required
                value={range[0]} // Bind the min value of the range to the input field
                onChange={(e) => setRange([parseInt(e.target.value), range[1]])} // Update the min value when input changes
              />
              <input
                className={priceinput}
                required
                value={range[1]} // Bind the max value of the range to the input field
                onChange={(e) => setRange([range[0], parseInt(e.target.value)])} // Update the max value when input changes
              />
            </div>
            <Slider
              min={0}
              max={10000}
              range
              value={range}
              defaultValue={[5000, 8050]}
              onChange={handleSliderChange}
            />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <div
            className="flex justify-between px-3 py-2 shadow-md  cursor-pointer "
            onClick={() => {
              setBrandbar(!brandbar);
            }}
          >
            <span>Brand</span>
            {brandbar ? <RiArrowUpSLine /> : <IoIosArrowDown />}
          </div>

          {brandbar && (
            <div className="flex flex-col gap-4 relative p-4 min-h-[200px] max-h-[300px]  w-full  overflow-y-auto">
              {/* this is the search */}
              <div className="w-full mx-auto ">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IoIosSearch />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    value={brandSearch}
                    className="block w-full p-3 ps-10 text-sm bg-inputColor outline-1 outline-gray-400 rounded-xl"
                    placeholder="Search"
                    required
                    onChange={handleSearch}
                  />
                </div>
              </div>
              {/* card */}
              {brandSearchModel ? (
                <div className="flex flex-col overflow-auto">
                  {filter.map((data) => (
                    <div className="flex gap-2 items-center" key={data.id}>
                      <input type="checkbox" className="accent-black" />
                      <div className="flex gap-1 items-center">
                        <h1 className="font-semibold">{data.name}</h1>
                        <p className="text-sm text-gray-400">
                          {data.noOfItems}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col overflow-auto ">
                  {BrandData.map((data) => (
                    <div className="flex gap-2 items-center" key={data.id}>
                      <input type="checkbox" className="accent-black" />
                      <div className="flex gap-1 items-center">
                        <h1 className="font-semibold">{data.name}</h1>
                        <p className="text-sm text-gray-400">
                          {data.noOfItems}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="flex justify-between px-3 py-2 shadow-md  cursor-pointer "
            onClick={() => {
              setMemorybar(!memorybar);
            }}
          >
            <span>Built-in memory</span>
            {memorybar ? <RiArrowUpSLine /> : <IoIosArrowDown />}
          </div>

          {memorybar && (
            <div className="flex flex-col gap-4 relative p-4 min-h-[200px] max-h-[300px]  w-full overflow-auto">
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
                {MemoryData.map((data) => (
                  <div className="flex gap-2 items-center" key={data.id}>
                    <input type="checkbox" className="accent-black" />
                    <div className="flex gap-1 items-center">
                      <h1 className="font-semibold">{data.memory}</h1>
                      <p className="text-sm text-gray-400">{data.noOfItems}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { TbDeviceWatch } from "react-icons/tb";

const content = [
  {
    title: "Phones",
    element: <CiMobile4 />,
  },
  {
    title: "Smart Watches",
    element: <TbDeviceWatch />,
  },
  {
    title: "Cameras",
    element: <CiCamera />,
  },
  {
    title: "Headphones",
    element: <CiHeadphones />,
  },
  {
    title: "Computers",
    element: <MdComputer />,
  },
  {
    title: "Gaming",
    element: <SiYoutubegaming />,
  },
];

export function CategoryCard() {
  return (
    <div className="h-[352px] flex justify-center items-center bg-[#FAFAFA]">
      <div className="w-[1120px] h-[192px] flex flex-col gap-8">
        <div className="flex justify-between">
          <p className="text-2xl font-medium">Browse By Category</p>
          <div className="flex gap-6 text-2xl">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>
        <div className="flex justify-between">
          {content.map((category) => {
            return (
              <div className="bg-[#EDEDED] h-32 w-40 rounded-2xl flex flex-col justify-center items-center gap-2">
                <div className="text-4xl">{category.element}</div>
                <p className="text-base font-medium">{category.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

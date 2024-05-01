import { MdComputer } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { TbDeviceWatch } from "react-icons/tb";
import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { TCategories } from "../types/categoriesType";

export const categories: TCategories[] = [
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

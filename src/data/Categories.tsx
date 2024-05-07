import { MdComputer } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { TbDeviceWatch } from "react-icons/tb";
import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { TCategories } from "../types/categoriesType";

export const categories: TCategories[] = [
  {
    id: 0,
    title: "Phones",
    element: <CiMobile4 />,
  },
  {
    id: 1,
    title: "Smart Watches",
    element: <TbDeviceWatch />,
  },
  {
    id: 2,
    title: "Cameras",
    element: <CiCamera />,
  },
  {
    id: 3,
    title: "Headphones",
    element: <CiHeadphones />,
  },
  {
    id: 4,
    title: "Computers",
    element: <MdComputer />,
  },
  {
    id: 5,
    title: "Gaming",
    element: <SiYoutubegaming />,
  },
];

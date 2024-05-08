import { TCategories } from "../types/categoriesType";
import DarkPhoneIcon from "@/icons/category-card-icons/DarkPhone";
import DarkSmartWatchIcon from "@/icons/category-card-icons/DarkSmartWatch";
import DarkCameraIcon from "@/icons/category-card-icons/DarkCamera";
import DarkHeadPhonesIcon from "@/icons/category-card-icons/DarkHeadPhones";
import DarkComputerIcon from "@/icons/category-card-icons/DarkComputer";
import DarkGamingIcon from "@/icons/category-card-icons/DarkGaming";

export const categories: TCategories[] = [
  {
    id: 0,
    title: "Phones",
    element: <DarkPhoneIcon />,
  },
  {
    id: 1,
    title: "Smart Watches",
    element: <DarkSmartWatchIcon />,
  },
  {
    id: 2,
    title: "Cameras",
    element: <DarkCameraIcon />,
  },
  {
    id: 3,
    title: "Headphones",
    element: <DarkHeadPhonesIcon />,
  },
  {
    id: 4,
    title: "Computers",
    element: <DarkComputerIcon />,
  },
  {
    id: 5,
    title: "Gaming",
    element: <DarkGamingIcon />,
  },
];

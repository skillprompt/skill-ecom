import { TCategories } from "../types/categoriesType";
import DarkPhoneIcon from "@/icons/category-card-icons/DarkPhone";
import DarkSmartWatchIcon from "@/icons/category-card-icons/DarkSmartWatch";
import DarkCameraIcon from "@/icons/category-card-icons/DarkCamera";
import DarkHeadPhonesIcon from "@/icons/category-card-icons/DarkHeadPhones";
import DarkComputerIcon from "@/icons/category-card-icons/DarkComputer";
import DarkGamingIcon from "@/icons/category-card-icons/DarkGaming";
import { GoBook } from "react-icons/go";

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
    title: "Tech Items",
    element: <DarkGamingIcon />,
  },
  {
    id: 3,
    title: "Cameras",
    element: <DarkCameraIcon />,
  },
  {
    id: 4,
    title: "Headphones",
    element: <DarkHeadPhonesIcon />,
  },
  {
    id: 5,
    title: "Computers",
    element: <DarkComputerIcon />,
  },
  {
    id: 6,
    title: "Gaming",
    element: <DarkGamingIcon />,
  },
  {
    id: 7,
    title: "Books",
    element: <GoBook />,
  },
];

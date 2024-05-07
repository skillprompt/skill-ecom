import { IoMdLaptop } from "react-icons/io";
import { PiPants } from "react-icons/pi";

type TProducts = {
  name: string;
  email: string;
  productName: React.ReactNode;
  total: number;
  paid: string;
  date: string;
  status: string;
};

export const products: TProducts[] = [
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><IoMdLaptop className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 20000,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Delivered",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><IoMdLaptop className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 20000,
    paid: "paid at Apr 14th 2024",
    date: "Apr 14th 2024",
    status: "Delivered",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><IoMdLaptop className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 20000,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "pending",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><IoMdLaptop className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 20000,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Cancelled",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><IoMdLaptop className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 20000,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Pending",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><IoMdLaptop className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 20000,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Pending",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName:<div className="flex gap-x-1"><IoMdLaptop className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 20000,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Cancelled",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName:<div className="flex gap-x-1"><IoMdLaptop className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 20000,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Delivered",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName:<div className="flex gap-x-1"><PiPants className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 2000,
    paid: "Paid at Apr 14th 2024",
    date: "Apr 14th 2024",
    status: "Delivered",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><PiPants className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 3000,
    paid: "Paid at Apr 14th 2024",
    date: "Apr 14th 2024",
    status: "Delivered",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><PiPants className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 34567,
    paid: "Paid at Apr 14th 2024",
    date: "Apr 14th 2024",
    status: "Delivered",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><PiPants className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 2000,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Pending",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><PiPants className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 23345,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Pending",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><PiPants className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 234,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Pending",
  },
  {
    name: "David",
    email: "warner@gmail.com",
    productName: <div className="flex gap-x-1"><PiPants className="text-2xl"/><p>Macbook Air M2</p></div>,
    total: 12,
    paid: "not paid",
    date: "Apr 14th 2024",
    status: "Pending",
  },
];

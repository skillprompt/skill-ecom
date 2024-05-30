import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
type TCategoryData = {
  categories: string;
  id: number;
  edit: React.ReactNode;
  delete: React.ReactNode;
};

export const category: TCategoryData[] = [
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete className="text-red-500 text-xl text-center" />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
  {
    categories: "laptop",
    id: 1,
    edit: <MdModeEditOutline />,
    delete: <MdDelete />,
  },
];
